'use client';

import { authClient } from '@/lib/auth-client';
import { Button } from '@heroui/react';
import { Icon } from '@iconify/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState, useEffect, useRef } from 'react';
import toast from 'react-hot-toast';

export default function RegisterPage() {
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        image: ''
    });

    const canvasRef = useRef<HTMLCanvasElement>(null);

    // WebGL Shader Animation Setup
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const syncSize = () => {
            const w = canvas.clientWidth || 1280;
            const h = canvas.clientHeight || 720;
            if (canvas.width !== w || canvas.height !== h) {
                canvas.width = w;
                canvas.height = h;
            }
        };

        if (typeof ResizeObserver !== 'undefined') {
            new ResizeObserver(syncSize).observe(canvas);
        }
        syncSize();

        const gl = canvas.getContext("webgl") as WebGLRenderingContext | null;
        if (!gl) return;

        const vs = `
      attribute vec2 a_position;
      varying vec2 v_texCoord;
      void main() {
        v_texCoord = a_position * 0.5 + 0.5;
        gl_Position = vec4(a_position, 0.0, 1.0);
      }
    `;

        const fs = `
      precision highp float;
      uniform float u_time;
      uniform vec2 u_resolution;
      varying vec2 v_texCoord;

      float hash(vec2 p) {
          p = fract(p * vec2(123.34, 456.21));
          p += dot(p, p + 45.32);
          return fract(p.x * p.y);
      }

      void main() {
          vec2 uv = v_texCoord;
          vec2 grid = uv * vec2(15.0, 8.0);
          vec2 id = floor(grid);
          
          vec3 bgColor = vec3(0.0588, 0.0902, 0.1647);
          vec3 bullColor = vec3(0.0627, 0.7255, 0.5059);
          vec3 bearColor = vec3(0.9608, 0.6196, 0.0431);
          
          float noise = hash(id + floor(u_time * 0.4));
          float candleHeight = abs(sin(id.x * 0.4 + u_time * 0.15)) * 0.5 + 0.2;
          float candleCenter = 0.5 + sin(id.x * 0.7 + u_time * 0.1) * 0.15;
          
          float distToCenter = abs(uv.y - candleCenter);
          
          float isBull = step(0.4, hash(id * 2.1));
          vec3 candleCol = mix(bearColor, bullColor, isBull);
          
          float body = step(distToCenter, candleHeight * 0.15) * step(abs(fract(grid.x) - 0.5), 0.2);
          float wick = step(distToCenter, candleHeight * 0.35) * step(abs(fract(grid.x) - 0.5), 0.02);
          
          float gridLine = step(0.98, fract(grid.x)) + step(0.98, fract(grid.y));
          vec3 finalColor = mix(bgColor, bgColor * 1.3, gridLine * 0.15);
          
          finalColor = mix(finalColor, candleCol, (body + wick) * 0.3);
          
          float glow = exp(-distToCenter * 5.0) * 0.1;
          finalColor += bullColor * glow * isBull + bearColor * glow * (1.0 - isBull);

          gl_FragColor = vec4(finalColor, 1.0);
      }
    `;

        const createShader = (type: number, source: string) => {
            const shader = gl.createShader(type);
            if (!shader) return null;
            gl.shaderSource(shader, source);
            gl.compileShader(shader);
            return shader;
        };

        const vertexShader = createShader(gl.VERTEX_SHADER, vs);
        const fragmentShader = createShader(gl.FRAGMENT_SHADER, fs);
        if (!vertexShader || !fragmentShader) return;

        const program = gl.createProgram();
        if (!program) return;
        gl.attachShader(program, vertexShader);
        gl.attachShader(program, fragmentShader);
        gl.linkProgram(program);
        gl.useProgram(program);

        const buffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);

        const pos = gl.getAttribLocation(program, 'a_position');
        gl.enableVertexAttribArray(pos);
        gl.vertexAttribPointer(pos, 2, gl.FLOAT, false, 0, 0);

        const uTime = gl.getUniformLocation(program, 'u_time');
        const uRes = gl.getUniformLocation(program, 'u_resolution');

        let animationId: number;
        const render = (t: number) => {
            syncSize();
            gl.viewport(0, 0, canvas.width, canvas.height);
            if (uTime) gl.uniform1f(uTime, t * 0.001);
            if (uRes) gl.uniform2f(uRes, canvas.width, canvas.height);
            gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
            animationId = requestAnimationFrame(render);
        };

        render(0);

        return () => {
            cancelAnimationFrame(animationId);
        };
    }, []);

    // Simple parallax/scroll behavior for widgets
    useEffect(() => {
        const handleScroll = () => {
            const elements = document.querySelectorAll('.floating-element');
            const scroll = window.pageYOffset;
            elements.forEach((el, index) => {
                const speed = (index + 1) * 0.1;
                (el as HTMLElement).style.transform = `translateY(${scroll * speed}px)`;
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const router = useRouter();

    const handleFormSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const { error } = await authClient.signUp.email({
            name: formData?.name,
            email: formData?.email,
            password: formData?.password,
            image: formData?.image
        })

        // Validation & error handling
        if (!error) {
            toast.success("Welcome Home...")
            router.push("/")
        } else {
            toast.error("Something went wrong! Try later")
        }
    };

    const handleGoogleRegister = async () => {
        const login = await authClient.signIn.social({
            provider: "google"
        })

        if (login?.data?.redirect) {
            toast.success("Logging in...")
        } else {
            toast.error("Something went wrong!")
        }
    }


    return (
        <div className="min-h-screen bg-[#0F172A] text-[#dae2fd] overflow-x-hidden antialiased selection:bg-[#10B981]/30">
            {/* Import external fonts seamlessly via Next.js HTML Head compatibility */}
            <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />

            <main className="flex flex-col md:flex-row min-h-screen">

                {/* Left Visual Section (45%) */}
                <section className="relative w-full md:w-[45%] min-h-[500px] md:min-h-screen flex items-center justify-center overflow-hidden border-b md:border-b-0 md:border-r border-slate-800/50">

                    {/* Background Animation Canvas */}
                    <div className="absolute inset-0 w-full h-full opacity-60">
                        <canvas ref={canvasRef} className="block w-full h-full" />
                    </div>

                    <div className="relative z-10 p-6 md:p-12 w-full max-w-2xl">
                        {/* Branding */}
                        <div className="flex items-center gap-2 mb-12">
                            <span className="material-symbols-outlined text-[#10B981] text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                                trending_up
                            </span>
                            <span className="text-[36px] font-extrabold tracking-tighter text-[#dae2fd] leading-[44px]">
                                ForexMaster
                            </span>
                        </div>

                        <h1 className="text-[36px] md:text-[64px] font-bold tracking-[-0.02em] leading-tight md:leading-[72px] mb-6 text-[#dae2fd]">
                            Join ForexMaster and <span className="text-[#10B981]">Trade Smarter</span>
                        </h1>

                        <p className="text-[18px] leading-[28px] text-[#bbcabf] mb-10 max-w-md font-normal">
                            Access professional <span className="text-[#10B981] font-semibold">Market Analysis</span>,{' '}
                            <span className="text-[#10B981] font-semibold">Trading Insights</span>, and high-probability{' '}
                            <span className="text-[#10B981] font-semibold">Opportunities</span>.
                        </p>

                        {/* Features Badges */}
                        <div className="grid gap-4 mb-12">
                            <div className="flex items-center gap-3 bg-[#222a3d]/40 backdrop-blur-md p-3 rounded-lg border border-white/5">
                                <span className="material-symbols-outlined text-[#F59E0B]">verified</span>
                                <span className="text-[12px] font-600 uppercase tracking-wider text-[#dae2fd] leading-[16px]">
                                    Trusted by Traders
                                </span>
                            </div>
                            <div className="flex items-center gap-3 bg-[#222a3d]/40 backdrop-blur-md p-3 rounded-lg border border-white/5">
                                <span className="material-symbols-outlined text-[#F59E0B]">analytics</span>
                                <span className="text-[12px] font-600 uppercase tracking-wider text-[#dae2fd] leading-[16px]">
                                    Real Market Analysis
                                </span>
                            </div>
                            <div className="flex items-center gap-3 bg-[#222a3d]/40 backdrop-blur-md p-3 rounded-lg border border-white/5">
                                <span className="material-symbols-outlined text-[#F59E0B]">layers</span>
                                <span className="text-[12px] font-600 uppercase tracking-wider text-[#dae2fd] leading-[16px]">
                                    Multi-Timeframe Strategy
                                </span>
                            </div>
                        </div>

                        {/* Floating Widgets Mockup */}
                        <div className="relative mt-8 h-48 hidden lg:block">
                            {/* Widget 1 */}
                            <div className="absolute -left-4 top-0 floating-element glass-card p-4 rounded-xl w-48 shadow-2xl">
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-[12px] text-[#bbcabf]">EUR/USD</span>
                                    <span className="text-[#10B981] font-medium text-xs tracking-[0.01em]">+0.33%</span>
                                </div>
                                <div className="h-10 flex items-end gap-1">
                                    <div className="w-2 bg-[#10B981] h-4 rounded-sm"></div>
                                    <div className="w-2 bg-[#10B981] h-6 rounded-sm"></div>
                                    <div className="w-2 bg-[#10B981] h-8 rounded-sm"></div>
                                    <div className="w-2 bg-[#10B981] h-10 rounded-sm"></div>
                                </div>
                            </div>

                            {/* Widget 2 */}
                            <div className="absolute right-0 top-12 floating-element glass-card p-4 rounded-xl w-56 shadow-2xl" style={{ animationDelay: '-2s' }}>
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-[12px] text-[#bbcabf]">GBP/JPY</span>
                                    <span className="text-[#ffb4ab] font-medium text-xs tracking-[0.01em]">-0.83%</span>
                                </div>
                                <div className="text-[28px] font-medium tracking-[0.01em] text-[#dae2fd]">182.451</div>
                            </div>
                        </div>

                    </div>
                </section>

                {/* Right Form Section (55%) */}
                <section className="w-full md:w-[55%] flex items-center justify-center bg-[#0b1326] p-6 py-20 md:p-12 md:mt-20 pb-20">
                    <div className="w-full max-w-md">

                        <div className="bg-[#222a3d]/30 glass-card p-8 md:p-10 rounded-2xl shadow-2xl">
                            <header className="text-center mb-8">
                                <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-[#10B981]/10 mb-4">
                                    <span className="material-symbols-outlined text-[#10B981] text-3xl">account_circle</span>
                                </div>
                                <h2 className="text-[36px] font-semibold text-[#dae2fd] leading-[44px]">Create Your Account</h2>
                                <p className="text-[16px] text-[#bbcabf] mt-2 leading-[24px]">
                                    Start exploring professional forex market analysis.
                                </p>
                            </header>

                            {/* Google Registration Button Added Here */}
                            <div className="mb-6">
                                <Button
                                    onClick={handleGoogleRegister}
                                    className="w-full flex items-center justify-center gap-3 bg-white/5 hover:bg-white/10 text-[#dae2fd] border border-[#3c4a42]/30 rounded-lg transition-all font-semibold active:scale-[0.98] py-5.5"
                                    variant="tertiary"
                                >
                                    <Icon icon="devicon:google" className="text-xl" />
                                    <span>Register with Google</span>
                                </Button>
                            </div>

                            {/* Divider Line */}
                            <div className="relative flex py-2 items-center mb-6">
                                <div className="flex-grow border-t border-[#3c4a42]/20"></div>
                                <span className="flex-shrink mx-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Or</span>
                                <div className="flex-grow border-t border-[#3c4a42]/20"></div>
                            </div>

                            <form className="space-y-5" onSubmit={handleFormSubmit}>
                                {/* Full Name */}
                                <div>
                                    <label className="block text-[12px] font-semibold text-[#bbcabf] uppercase tracking-wider mb-2">Full Name</label>
                                    <div className="relative">
                                        <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[#bbcabf] text-xl">
                                            person
                                        </span>
                                        <input
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full bg-white/5 border border-[#3c4a42]/30 rounded-lg py-3.5 pl-12 pr-4 text-[#dae2fd] placeholder-slate-500 transition-all focus:outline-none focus:ring-2 focus:ring-[#10B981]/50 focus:border-[#10B981]"
                                            placeholder="John Doe"
                                            type="text"
                                            required
                                        />
                                    </div>
                                </div>

                                {/* Email */}
                                <div>
                                    <label className="block text-[12px] font-semibold text-[#bbcabf] uppercase tracking-wider mb-2">Email Address</label>
                                    <div className="relative">
                                        <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[#bbcabf] text-xl">
                                            mail
                                        </span>
                                        <input
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full bg-white/5 border border-[#3c4a42]/30 rounded-lg py-3.5 pl-12 pr-4 text-[#dae2fd] placeholder-slate-500 transition-all focus:outline-none focus:ring-2 focus:ring-[#10B981]/50 focus:border-[#10B981]"
                                            placeholder="john@example.com"
                                            type="email"
                                            required
                                        />
                                    </div>
                                </div>

                                {/* Password */}
                                <div>
                                    <label className="block text-[12px] font-semibold text-[#bbcabf] uppercase tracking-wider mb-2">Password</label>
                                    <div className="relative">
                                        <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[#bbcabf] text-xl">
                                            lock
                                        </span>
                                        <input
                                            name="password"
                                            value={formData.password}
                                            onChange={handleChange}
                                            className="w-full bg-white/5 border border-[#3c4a42]/30 rounded-lg py-3.5 pl-12 pr-12 text-[#dae2fd] placeholder-slate-500 transition-all focus:outline-none focus:ring-2 focus:ring-[#10B981]/50 focus:border-[#10B981]"
                                            placeholder="••••••••"
                                            type={showPassword ? 'text' : 'password'}
                                            required
                                        />
                                        <button
                                            className="absolute right-4 top-1/2 -translate-y-1/2 text-[#bbcabf] hover:text-[#dae2fd] focus:outline-none"
                                            onClick={() => setShowPassword(!showPassword)}
                                            type="button"
                                        >
                                            <span className="material-symbols-outlined">
                                                {showPassword ? 'visibility_off' : 'visibility'}
                                            </span>
                                        </button>
                                    </div>
                                </div>

                                {/* Profile URL */}
                                <div>
                                    <label className="block text-[12px] font-semibold text-[#bbcabf] uppercase tracking-wider mb-2">
                                        Profile Image URL <span className="text-slate-500 font-normal lowercase">(optional)</span>
                                    </label>
                                    <div className="relative">
                                        <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[#bbcabf] text-xl">
                                            link
                                        </span>
                                        <input
                                            name="image"
                                            value={formData.image}
                                            onChange={handleChange}
                                            className="w-full bg-white/5 border border-[#3c4a42]/30 rounded-lg py-3.5 pl-12 pr-4 text-[#dae2fd] placeholder-slate-500 transition-all focus:outline-none focus:ring-2 focus:ring-[#10B981]/50 focus:border-[#10B981]"
                                            placeholder="https://..."
                                            type="text"
                                        />
                                    </div>
                                </div>

                                <div className="pt-4">
                                    <button
                                        type="submit"
                                        className="w-full bg-[#10B981] hover:bg-[#10B981]/90 text-[#003824] font-bold py-4 rounded-lg transition-all active:scale-[0.98] shadow-[0_0_20px_rgba(16,185,129,0.2)]"
                                    >
                                        Create Account
                                    </button>
                                </div>
                            </form>

                            <div className="mt-8 text-center">
                                <p className="text-[16px] text-[#bbcabf] leading-[24px]">
                                    Already have an account?{' '}
                                    <Link href="/auth/login" className="text-[#10B981] font-semibold hover:underline" >
                                        Login
                                    </Link>
                                </p>
                            </div>

                            {/* Trust Indicators */}
                            <div className="mt-10 pt-8 border-t border-[#3c4a42]/20 flex flex-wrap justify-center gap-6">
                                <div className="flex items-center gap-2 opacity-60">
                                    <span className="material-symbols-outlined text-sm">shield</span>
                                    <span className="text-[10px] font-semibold uppercase tracking-tighter">Secure Authentication</span>
                                </div>
                                <div className="flex items-center gap-2 opacity-60">
                                    <span className="material-symbols-outlined text-sm">privacy_tip</span>
                                    <span className="text-[10px] font-semibold uppercase tracking-tighter">Privacy Protected</span>
                                </div>
                            </div>

                        </div>

                        <footer className="mt-8 text-center">
                            <p className="text-[10px] text-[#bbcabf]/40 leading-relaxed uppercase tracking-widest">
                                Secure &amp; Confidential | ForexMaster Institutional Analytics
                            </p>
                        </footer>

                    </div>
                </section>

            </main>

            {/* Embedded Global Style Layer for Seamless Layout Specific Custom Animations */}
            <style jsx global>{`
        body {
          font-family: 'Outfit', sans-serif;
          background-color: #0F172A;
        }
        .glass-card {
          backdrop-filter: blur(20px);
          background: rgba(30, 41, 59, 0.7);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        .floating-element {
          animation: float 6s ease-in-out infinite;
        }
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0px); }
        }
      `}</style>
        </div>
    );
}