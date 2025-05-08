import React from 'react';
import SubHeader from '../../../../Component/Shared/SubHeader';
import Header from '../../../../Component/Shared/Header';
import useBlog from '../../../../Data/useBlog';
import BlogCard from '../../../../Component/Shared/BlogCard';

const Blog = () => {
    const {blogs} = useBlog()
    return (
        <div>
            <div className="my-20">
                <div className="">
                    <div className="text-center flex flex-col items-center">
                        <SubHeader name={"LATEST BLOGS"} color={"text-[#1B4B36]"}></SubHeader>
                        <Header beforeBr={"Discover our latest insights and"} afterBr={""} yellowText={"expert advice"}></Header>
                    </div>
                </div>
                <div className="flex justify-center items-center my-10 gap-10 mx-auto">
                    {
                        blogs.map(blog => <BlogCard blog={blog}></BlogCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Blog;