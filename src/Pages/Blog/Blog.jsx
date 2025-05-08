import React from 'react';
import PageHeader from '../../Component/Shared/PageHeader';
import useBlog from '../../Data/useBlog';
import BlogCard from '../../Component/Shared/BlogCard';

const Blog = () => {
    const { blogs } = useBlog()
    return (
        <div>
            <div className="">
                <div className="">
                    <PageHeader name={"All Blogs"} image={"https://demo.awaikenthemes.com/lineman/wp-content/uploads/2025/02/service-image-4.jpg"}></PageHeader>
                    <div className="flex justify-center items-center my-10 gap-10 mx-auto">
                        {
                            blogs.map(blog => <BlogCard blog={blog}></BlogCard>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;