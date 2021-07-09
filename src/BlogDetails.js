import { useParams } from "react-router-dom";
import useFetch from './useFetch';

const BlogDetails = () => {
    //grab the parameter id from the routes.
    const { id } = useParams();
    const {data:blog,error,isPending} = useFetch('http://localhost:8000/blogs/' + id);


    return (
        <div className="blog-details">
            {error && <div className="alert alert-warning d-inlin-flex p-2">{error}</div>}
            {isPending && <div className="alert alert-primary d-inline-flex p-2"><strong>Loading...</strong></div>}
            {blog && (
                <div className="card mb-3 text-align">
                <div className="card-title text-danger container">
                    <h2>{blog.title}</h2>
                </div>
                <p className="text-dark">Written By : {blog.author}</p>
                <div className="container"> {blog.body}</div>
            </div>
            )}
        </div>
    );
}
 
export default BlogDetails;