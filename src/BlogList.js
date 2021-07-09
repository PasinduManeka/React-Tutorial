const BlogList = ({ blogs, title }) => {
    //const blogs = props.blogs;
    //const title = props.title;



    return (
        <div className="blog-List">
            <h2>{title}</h2>
            {blogs.map((blog) => (
                <div className="blog-preview card shadow p-3 mb-5 bg-white rounded" key={blog.id}>
                    <h2 className="text-danger">{blog.title}</h2>
                    <p>Written by:{blog.author}</p>
                </div>
            ))}
        </div>
    );
}

export default BlogList;