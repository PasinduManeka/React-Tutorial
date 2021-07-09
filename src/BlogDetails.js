import { useParams,useHistory } from "react-router-dom";
import useFetch from './useFetch';

const BlogDetails = () => {
    //grab the parameter id from the routes.
    const { id } = useParams();
    const {data:blog,error,isPending} = useFetch('http://localhost:8000/blogs/' + id);
    const history = useHistory();

    const hadleDelete =() => {
        fetch('http://localhost:8000/blogs/'+blog.id,{
            method:'DELETE'
        }).then(()=>{
            history.push('/');
        })
    }

    return (
        <div className="blog-details">
            {error && <div className="alert alert-warning d-inlin-flex p-2">{error}</div>}
            {isPending && <div className="alert alert-primary d-inline-flex p-2"><strong>Loading...</strong></div>}
            {blog && (
                <div className="card text-align">
                    <div className="card-title text-danger container">
                        <h2>{blog.title}</h2>
                    </div>
                    <div className="card-body">
                        <p className="text-dark">Written By : {blog.author}</p>
                        <div className="container"> {blog.body}</div>
                    </div>
                    <div>
                        <button className="btn btn-outline-danger form-control border border-danger" onClick={hadleDelete}>Delete the blog!</button>
                    </div>
                </div>
            )}
        </div>
    );
}
 
export default BlogDetails;