import React from 'react';
import { NavLink } from 'react-router-dom';

const BlogCard = ({ blog }) => {
    return (
        <div className='w-120 group'>
            <div className="overflow-hidden w-120 h-65 rounded-xl">
                <img
                    className='duration-500 group-hover:scale-110 w-full h-65 object-cover'
                    src={blog.thumbnail}
                    alt={blog.title}
                />
            </div>
            <p className="mt-2 text-lg font-semibold text-gray-800">{blog.title}</p>

            <NavLink to={`/blog/${blog.id}`}>
                <div className="group mt-2 cursor-pointer">
                    <div className="flex items-center gap-2 text-[#1b4b36] transition-colors duration-300 group-hover:text-[#FBDE70] font-semibold">
                        <p>Read More</p>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M19.4401 11.0001C17.0996 11.0001 14.9665 8.77909 14.9665 6.34009V5.34009H13.0465V6.34009C13.0465 8.11409 13.7934 9.77809 14.9656 11.0001H3.12012V13.0001H14.9656C13.7934 14.2221 13.0465 15.8861 13.0465 17.6601V18.6601H14.9665V17.6601C14.9665 15.2211 17.0996 13.0001 19.4401 13.0001H20.4001V11.0001H19.4401Z"
                                fill="currentColor"
                            />
                        </svg>
                    </div>
                </div></NavLink>

        </div>
    );
};

export default BlogCard;
