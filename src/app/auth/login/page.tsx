'use client';

import { authClient } from '@/lib/auth-client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect, useRef } from 'react';
import toast from 'react-hot-toast';

export default function LoginPage() {
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const canvasRef = useRef<HTMLCanvasElement>(null);

    // WebGL Shader Background Loop
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
          vec2 grid = uv * vec2(20.0, 10.0);
          vec2 id = floor(grid);

          vec3 bgColor = vec3(0.0588, 0.0902, 0.1647); 
          vec3 bullColor = vec3(0.0627, 0.7255, 0.5059); 
          vec3 bearColor = vec3(0.9373, 0.2667, 0.2667); 

          float noise = hash(id + floor(u_time * 0.4));
          float candleHeight = abs(sin(id.x * 0.4 + u_time * 0.15)) * 0.5 + 0.2;
          float candleCenter = 0.5 + sin(id.x * 0.7 + u_time * 0.1) * 0.15;

          float distToCenter = abs(uv.y - candleCenter);

          float isBull = step(0.4, hash(id * 2.1));
          vec3 candleCol = mix(bearColor, bullColor, isBull);

          float body = step(distToCenter, candleHeight * 0.15) * step(abs(fract(grid.x) - 0.5), 0.2);
          float wick = step(distToCenter, candleHeight * 0.35) * step(abs(fract(grid.x) - 0.5), 0.02);

          float gridLine = step(0.99, fract(grid.x)) + step(0.99, fract(grid.y));
          vec3 finalColor = mix(bgColor, bgColor * 1.5, gridLine * 0.1);

          finalColor = mix(finalColor, candleCol, (body + wick) * 0.2);

          float glow = exp(-distToCenter * 5.0) * 0.05;
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

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();

        const { error } = await authClient.signIn.email({
            email: formData?.email,
            password: formData?.password,
            callbackURL: "/"
        })

        if (!error) {
            toast.success("Login successful")
        } else {
            toast.error("Invalid email or password")
        }
    };

    return (
        <div className="min-h-screen bg-[#0b1326] font-['Outfit'] text-[#dae2fd] overflow-x-hidden antialiased my-10">
            {/* Dynamic Font Asset Loader tags compatible with server structure */}
            <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />

            <main className="flex flex-col md:flex-row min-h-screen">

                {/* Left Section (55%) - Visible on Medium devices upwards */}
                <section className="hidden md:flex relative w-[55%] flex-col justify-between p-12 overflow-hidden">

                    {/* Background Shader Dynamic Canvas View */}
                    <div className="absolute inset-0 w-full h-full opacity-40 z-0">
                        <canvas ref={canvasRef} className="block w-full h-full" />
                    </div>

                    <div className="relative z-10">
                        {/* Brand Anchor */}
                        {/* <div className="flex items-center gap-3 mb-16 fade-in" style={{ animationDelay: '0.1s' }}>
                            <div className="w-10 h-10 bg-[#10b981] rounded flex items-center justify-center">
                                <span className="material-symbols-outlined text-[#00422b]" style={{ fontVariationSettings: "'FILL' 1" }}>
                                    trending_up
                                </span>
                            </div>
                        </div> */}

                        <div className="mt-20 max-w-xl fade-in" style={{ animationDelay: '0.2s' }}>
                            <h2 className="text-[64px] font-bold text-[#dae2fd] mb-6 leading-[72px] tracking-[-0.02em]">
                                Trade Smarter With Professional <span className="text-[#4edea3]">Market Analysis</span>
                            </h2>
                            <p className="text-[18px] text-[#bbcabf] mb-12 leading-[28px] font-normal">
                                Access institutional-grade forex market insights, technical analysis and real-time trading opportunities delivered with high-precision.
                            </p>
                        </div>

                        {/* Floating Market Widgets Grid */}
                        <div className="flex flex-wrap gap-4 mb-16 z-20">
                            <div className="glass-card p-4 rounded-xl flex items-center gap-4 animate-float border-l-4 border-[#4edea3]" style={{ animationDelay: '0s' }}>
                                <div className="text-[12px] font-semibold uppercase tracking-wider text-[#bbcabf] leading-[16px]">EUR/USD</div>
                                <div className="text-[14px] font-medium tracking-[0.01em] text-[#4edea3] leading-[20px]">+0.33%</div>
                                <span className="material-symbols-outlined text-[#4edea3] text-sm">arrow_upward</span>
                            </div>
                            <div className="glass-card p-4 rounded-xl flex items-center gap-4 animate-float border-l-4 border-[#ffb4ab]" style={{ animationDelay: '1.5s' }}>
                                <div className="text-[12px] font-semibold uppercase tracking-wider text-[#bbcabf] leading-[16px]">GBP/USD</div>
                                <div className="text-[14px] font-medium tracking-[0.01em] text-[#ffb4ab] leading-[20px]">-0.12%</div>
                                <span className="material-symbols-outlined text-[#ffb4ab] text-sm">arrow_downward</span>
                            </div>
                            <div className="glass-card p-4 rounded-xl flex items-center gap-4 animate-float border-l-4 border-[#4edea3]" style={{ animationDelay: '0.8s' }}>
                                <div className="text-[12px] font-semibold uppercase tracking-wider text-[#bbcabf] leading-[16px]">XAU/USD</div>
                                <div className="text-[14px] font-medium tracking-[0.01em] text-[#4edea3] leading-[20px]">+1.45%</div>
                                <span className="material-symbols-outlined text-[#4edea3] text-sm">arrow_upward</span>
                            </div>
                        </div>
                    </div>

                    {/* Dashboard Preview Visual */}
                    <div className="relative w-full h-[400px] z-10 fade-in" style={{ animationDelay: '0.4s' }}>
                        <div className="absolute inset-0 rounded-2xl glass-card overflow-hidden">
                            <Image className='w-full h-full object-cover opacity-90' src="/chart.png" alt='chart image' width={1000} height={500} />

                            <div className="absolute inset-0 bg-gradient-to-t from-[#0b1326] via-transparent to-transparent"></div>
                        </div>

                        {/* Stats Overlay Cards */}
                        <div className="absolute -bottom-6 -left-6 grid grid-cols-3 gap-4 w-full px-12">
                            <div className="bg-[#222a3d] border border-white/5 p-6 rounded-xl text-center shadow-lg">
                                <div className="text-[28px] font-semibold text-[#ffb95f] mb-1 leading-[36px]">5000+</div>
                                <div className="text-[12px] font-semibold uppercase tracking-wider text-[#bbcabf] leading-[16px]">Traders</div>
                            </div>
                            <div className="bg-[#222a3d] border border-white/5 p-6 rounded-xl text-center shadow-lg">
                                <div className="text-[28px] font-semibold text-[#ffb95f] mb-1 leading-[36px]">10000+</div>
                                <div className="text-[12px] font-semibold uppercase tracking-wider text-[#bbcabf] leading-[16px]">Signals Shared</div>
                            </div>
                            <div className="bg-[#222a3d] border border-white/5 p-6 rounded-xl text-center shadow-lg">
                                <div className="text-[28px] font-semibold text-[#ffb95f] mb-1 leading-[36px]">95%</div>
                                <div className="text-[12px] font-semibold uppercase tracking-wider text-[#bbcabf] leading-[16px]">Satisfaction Rate</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Right Section (45%) */}
                <section className="flex-1 flex flex-col items-center justify-center p-6 relative">

                    {/* Mobile Header Block */}
                    {/* <div className="md:hidden absolute top-8 left-8 flex items-center gap-2">
                        <div className="w-8 h-8 bg-[#10b981] rounded flex items-center justify-center">
                            <span className="material-symbols-outlined text-[#00422b] text-lg">trending_up</span>
                        </div>
                        
                    </div> */}

                    {/* Login Interface Card */}
                    <div className="w-full max-w-[420px] glass-card p-10 rounded-[32px] fade-in shadow-2xl" style={{ animationDelay: '0.3s' }}>
                        <header className="mb-10">
                            <h3 className="text-[36px] font-semibold text-[#dae2fd] leading-[44px] mb-2">Welcome Back</h3>
                            <p className="text-[16px] font-normal text-[#bbcabf] leading-[24px]">Login to continue your trading journey.</p>
                        </header>

                        <form className="space-y-6" onSubmit={handleLogin}>

                            {/* Email Input Field */}
                            <div className="space-y-2">
                                <label className="text-[12px] font-semibold text-[#bbcabf] block uppercase tracking-wider ml-1 leading-[16px]">
                                    Email Address
                                </label>
                                <div className="relative group">
                                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[#bbcabf] group-focus-within:text-[#4edea3] transition-colors text-xl">
                                        mail
                                    </span>
                                    <input
                                        name="email"
                                        type="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full h-14 bg-[#060e20] border border-[#3c4a42] rounded-xl pl-12 pr-4 text-[#dae2fd] placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#4edea3]/50 focus:border-[#4edea3] transition-all duration-300"
                                        placeholder="johndoe@email.com"
                                        required
                                    />
                                </div>
                            </div>

                            {/* Password Input Field */}
                            <div className="space-y-2">
                                <div className="flex justify-between items-center ml-1">
                                    <label className="text-[12px] font-semibold text-[#bbcabf] block uppercase tracking-wider leading-[16px]">
                                        Password
                                    </label>
                                    {/* <a className="text-[12px] font-semibold text-[#ffb95f] hover:text-[#ee9800] transition-colors leading-[16px]" href="#">
                                        Forgot Password?
                                    </a> */}
                                </div>
                                <div className="relative group">
                                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[#bbcabf] group-focus-within:text-[#4edea3] transition-colors text-xl">
                                        lock
                                    </span>
                                    <input
                                        name="password"
                                        type={showPassword ? 'text' : 'password'}
                                        value={formData.password}
                                        onChange={handleChange}
                                        className="w-full h-14 bg-[#060e20] border border-[#3c4a42] rounded-xl pl-12 pr-12 text-[#dae2fd] placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#4edea3]/50 focus:border-[#4edea3] transition-all duration-300"
                                        placeholder="••••••••••••"
                                        required
                                    />
                                    <button
                                        type="button"
                                        className="absolute right-4 top-1/2 -translate-y-1/2 text-[#bbcabf] hover:text-[#dae2fd] focus:outline-none"
                                        onClick={() => setShowPassword(!showPassword)}
                                    >
                                        <span className="material-symbols-outlined">
                                            {showPassword ? 'visibility_off' : 'visibility'}
                                        </span>
                                    </button>
                                </div>
                            </div>

                            {/* Remember State Checkbox */}
                            {/* <div className="flex items-center gap-3">
                                <input
                                    id="remember"
                                    name="rememberMe"
                                    type="checkbox"
                                    checked={formData.rememberMe}
                                    onChange={handleChange}
                                    className="w-5 h-5 rounded border-[#3c4a42] bg-[#060e20] text-[#4edea3] focus:ring-[#4edea3] focus:ring-offset-[#0b1326]"
                                />
                                <label className="text-[12px] font-semibold text-[#bbcabf] cursor-pointer selection:bg-transparent" for="remember">
                                    Remember Me
                                </label>
                            </div> */}

                            {/* Form Action CTA */}
                            <button
                                type="submit"
                                className="w-full h-14 bg-[#10b981] text-[#003824] text-[21px] font-bold rounded-xl hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg shadow-[#10b981]/20 flex items-center justify-center gap-2"
                            >
                                Login to Platform
                            </button>

                            <div className="relative py-4">
                                <div className="absolute inset-0 flex items-center">
                                    <span className="w-full border-t border-[#3c4a42]"></span>
                                </div>
                                <div className="relative flex justify-center text-[12px] font-semibold">
                                    <span className="bg-[#1E293B] px-4 text-[#bbcabf] uppercase tracking-widest">Or continue with</span>
                                </div>
                            </div>
                        </form>

                        <footer className="mt-10 text-center">
                            <p className="text-[16px] text-[#bbcabf] leading-[24px]">
                                Don&apos;t have an account?
                                <Link className="text-[#4edea3] font-bold hover:underline ml-1" href="/auth/register">Create Account

                                </Link>
                            </p>
                        </footer>
                    </div>

                    {/* Persistent Floating Utility Footer */}
                    <div className="absolute bottom-8 flex gap-6 text-[12px] font-semibold text-[#bbcabf]/60">
                        <a className="hover:text-[#dae2fd] transition-colors" href="#">Privacy Policy</a>
                        <a className="hover:text-[#dae2fd] transition-colors" href="#">Terms of Service</a>
                        <div className="flex items-center gap-1">
                            <span className="material-symbols-outlined text-xs">verified_user</span>
                            Secure &amp; Confidential
                        </div>
                    </div>
                </section>

            </main>

            {/* Embedded Component Custom Engine Styles */}
            <style jsx global>{`
        body {
          background-color: #0b1326;
        }
        .glass-card {
          backdrop-filter: blur(20px);
          background: rgba(30, 41, 59, 0.7);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        .fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
        </div>
    );
}