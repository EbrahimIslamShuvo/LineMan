import React from 'react';
import { useParams } from 'react-router-dom';
import useBlog from '../../Data/useBlog';
import BlogHeader from '../../Component/Shared/BlogHeader';
import BlogCard from '../../Component/Shared/BlogCard';
import { SiStagetimer } from "react-icons/si";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '../../Component/Shared/Button';


const SingleBlog = () => {
    const { id } = useParams();
    const { blogs } = useBlog();

    if (!Array.isArray(blogs)) return <p>Loading blogs...</p>;

    const blog = blogs.find((b) => b.id.toString() === id);

    if (!blog) return <p>Blog not found</p>;

    return (
        <div>
            <BlogHeader name={blog.title} image={blog.thumbnail} date={blog.publish_date} category={blog.category} />

            <div className="w-10/12 mx-auto flex justify-start gap-10">
                <div className="">
                    <img className='w-full rounded-2xl' src={blog.thumbnail} alt="" />
                    <div className="w-11/12 mx-auto">
                        <div className="my-10 flex flex-col gap-8">
                            {
                                (blog.description).map(des => (
                                    <div className="text-gray-700 text-lg text-justify">{des}</div>
                                ))
                            }
                        </div>
                        <div className="bg-[#1B4B36] text-white font-semibold text-xl text-justify py-8 px-13 w-11/12 mx-auto rounded-xl flex gap-3 mb-10">
                            <div className="text-[#FCDE70]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none"><path d="M7.83366 29.4998C6.16699 27.6665 5.16699 25.6665 5.16699 22.3332C5.16699 16.4998 9.33366 11.3332 15.167 8.6665L16.667 10.8332C11.167 13.8332 10.0003 17.6665 9.66699 20.1665C10.5003 19.6665 11.667 19.4998 12.8337 19.6665C15.8337 19.9998 18.167 22.3332 18.167 25.4998C18.167 26.9998 17.5003 28.4998 16.5003 29.6665C15.3337 30.8332 14.0003 31.3332 12.3337 31.3332C10.5003 31.3332 8.83366 30.4998 7.83366 29.4998ZM24.5003 29.4998C22.8337 27.6665 21.8337 25.6665 21.8337 22.3332C21.8337 16.4998 26.0003 11.3332 31.8337 8.6665L33.3337 10.8332C27.8337 13.8332 26.667 17.6665 26.3337 20.1665C27.167 19.6665 28.3337 19.4998 29.5003 19.6665C32.5003 19.9998 34.8337 22.3332 34.8337 25.4998C34.8337 26.9998 34.167 28.4998 33.167 29.6665C32.167 30.8332 30.667 31.3332 29.0003 31.3332C27.167 31.3332 25.5003 30.4998 24.5003 29.4998Z" fill="currentColor"></path></svg>
                            </div>
                            <h1>{blog.quote}</h1>
                        </div>
                        <div className="text-gray-700 text-lg text-justify">
                            {
                                blog.conclusion
                            }
                        </div>
                        <div className="mt-10 pb-10 mb-8 border-b border-gray-400">
                            <h1 className='text-4xl font-bold '>Committed to excellence</h1>
                            <div className="grid grid-cols-2 gap-3 mt-8">
                                {
                                    (blog.committed_to_excellence).map(point => (
                                        <div className="flex items-center font-[500] gap-3 text-lg ">
                                            <SiStagetimer />
                                            <p>{point}</p>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                        <div className="">
                            <div className="flex items-center gap-5">
                                <h1 className='text-xl font-semibold'>Tags:</h1>
                                <div className="flex items-center gap-4">
                                    {blog.tags.map((tag, index) => (
                                        <div
                                            key={index}
                                            className="bg-[#FCDE70] hover:bg-[#1B4B36] hover:text-white duration-400 p-2 text-lg rounded-lg"
                                        >
                                            {tag}
                                        </div>
                                    ))}
                                </div>

                            </div>
                        </div>
                        <div className="my-15">
                            <h1 className="text-4xl font-bold">Leave a Comment</h1>
                            <p className="text-gray-600">Your email address will not be published. Required fields are marked *</p>

                            <div className="mt-8 grid gap-8">
                                <TextField
                                    id="outlined-multiline-flexible"
                                    label="Comment"
                                    multiline
                                    maxRows={4}
                                    rows={4}
                                    fullWidth
                                    sx={{
                                        '& label.Mui-focused': {
                                            color: '#1B4B36',
                                        },
                                        '& .MuiOutlinedInput-root': {
                                            '&.Mui-focused fieldset': {
                                                borderColor: '#1B4B36',
                                            },
                                        },
                                    }}
                                />

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                    <TextField
                                        id="outlined-name"
                                        label="Name"
                                        fullWidth
                                        sx={{
                                            '& label.Mui-focused': {
                                                color: '#1B4B36',
                                            },
                                            '& .MuiOutlinedInput-root': {
                                                '&.Mui-focused fieldset': {
                                                    borderColor: '#1B4B36',
                                                },
                                            },
                                        }}
                                    />
                                    <TextField
                                        id="outlined-email"
                                        label="Email"
                                        fullWidth
                                        sx={{
                                            '& label.Mui-focused': {
                                                color: '#1B4B36',
                                            },
                                            '& .MuiOutlinedInput-root': {
                                                '&.Mui-focused fieldset': {
                                                    borderColor: '#1B4B36',
                                                },
                                            },
                                        }}
                                    />
                                    <TextField
                                        id="outlined-phone"
                                        label="Phone"
                                        fullWidth
                                        sx={{
                                            '& label.Mui-focused': {
                                                color: '#1B4B36',
                                            },
                                            '& .MuiOutlinedInput-root': {
                                                '&.Mui-focused fieldset': {
                                                    borderColor: '#1B4B36',
                                                },
                                            },
                                        }}
                                    />
                                </div>
                            </div>
                            <div className="flex items-start gap-3 my-5">
                                <input
                                    type="checkbox"
                                    id="save-info"
                                    className="mt-1 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                                />
                                <label htmlFor="save-info" className="text-sm text-gray-700">
                                    Save my name, email, and website in this browser for the next time I comment.
                                </label>
                            </div>
                            <Button name={"Post Your Comment"}></Button>
                        </div>

                    </div>
                </div>
                <div className="">
                    <h1 className='text-3xl font-bold mb-5'>Others Blog</h1>
                    <div className="flex flex-col gap-5">
                        {
                            blogs.map(blog => (
                                <BlogCard blog={blog}></BlogCard>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleBlog;
