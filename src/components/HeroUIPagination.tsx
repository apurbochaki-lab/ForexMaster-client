"use client";

import { Pagination } from "@heroui/react";
import { useRouter } from "next/navigation";

interface HeroUIPaginationProps {
    currentPage: number;
    totalPages: number;
}

const HeroUIPagination = ({
    currentPage,
    totalPages,
}: HeroUIPaginationProps) => {

    const router = useRouter();


    const handlePageChange = (page: number) => {
        router.push(`/analysis/manage?page=${page}`);
    };


    const getPageNumbers = () => {
        const pages: (number | "ellipsis")[] = [];

        pages.push(1);

        if (currentPage > 3) {
            pages.push("ellipsis");
        }


        const start = Math.max(2, currentPage - 1);
        const end = Math.min(totalPages - 1, currentPage + 1);


        for (let i = start; i <= end; i++) {
            pages.push(i);
        }


        if (currentPage < totalPages - 2) {
            pages.push("ellipsis");
        }


        if (totalPages > 1) {
            pages.push(totalPages);
        }


        return pages;
    };


    return (
        <div className="
            w-full
            flex
            justify-center
            py-10
        ">
            <div className="
                rounded-2xl
                border
                border-white/10
                bg-white/[0.04]
                backdrop-blur-xl
                px-4
                py-3
                shadow-[0_0_40px_rgba(193,255,114,0.08)]
            ">

                <Pagination>

                    <Pagination.Content>


                        {/* Previous Button */}
                        <Pagination.Item>

                            <Pagination.Previous
                                className="
                                    bg-white/5
                                    border
                                    border-white/10
                                    text-[#c1ff72]
                                    hover:bg-white
                                    hover:text-black
                                    transition-all
                                    duration-300
                                    font-semibold
                                "
                                isDisabled={currentPage === 1}
                                onPress={() =>
                                    handlePageChange(
                                        currentPage - 1
                                    )
                                }
                            >

                                <Pagination.PreviousIcon />

                                <span className="
                                    hidden
                                    sm:inline
                                    font-semibold
                                ">
                                    Previous
                                </span>

                            </Pagination.Previous>

                        </Pagination.Item>



                        {/* Page Numbers */}
                        {
                            getPageNumbers().map((p, i) =>
                                p === "ellipsis" ? (

                                    <Pagination.Item
                                        key={`ellipsis-${i}`}
                                    >
                                        <Pagination.Ellipsis
                                            className="
                                                text-white/50
                                            "
                                        />
                                    </Pagination.Item>

                                ) : (

                                    <Pagination.Item key={p}>

                                        <Pagination.Link
                                            className={`
                                                font-semibold
                                                transition-all
                                                duration-300

                                                ${p === currentPage
                                                    ?
                                                    `
                                                    bg-[#c1ff72]
                                                    text-black
                                                    shadow-[0_0_20px_rgba(193,255,114,0.45)]
                                                    `
                                                    :
                                                    `
                                                    text-white/70
                                                    hover:bg-white
                                                    hover:text-black
                                                    `
                                                }
                                            `}
                                            isActive={
                                                p === currentPage
                                            }
                                            onPress={() =>
                                                handlePageChange(p)
                                            }
                                        >

                                            {p}

                                        </Pagination.Link>

                                    </Pagination.Item>

                                )
                            )
                        }



                        {/* Next Button */}
                        <Pagination.Item>

                            <Pagination.Next
                                className="
                                    bg-white/5
                                    border
                                    border-white/10
                                    text-[#c1ff72]
                                    hover:bg-white
                                    hover:text-black
                                    transition-all
                                    duration-300
                                    font-semibold
                                "
                                isDisabled={
                                    currentPage === totalPages
                                }
                                onPress={() =>
                                    handlePageChange(
                                        currentPage + 1
                                    )
                                }
                            >

                                <span className="
                                    hidden
                                    sm:inline
                                    font-semibold
                                ">
                                    Next
                                </span>


                                <Pagination.NextIcon />

                            </Pagination.Next>

                        </Pagination.Item>



                    </Pagination.Content>

                </Pagination>

            </div>
        </div>
    );
};


export default HeroUIPagination;