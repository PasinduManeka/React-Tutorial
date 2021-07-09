import { useParams } from "react-router-dom";

const BlogDetails = () => {
    //grab the parameter id from the routes.
    const { id } = useParams();


    return (
        <div>
            <h2>Blog Details</h2>
            <div className="text-muted">Blog No:{id}</div>
        </div>
    );
}
 
export default BlogDetails;