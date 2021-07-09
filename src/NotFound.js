import { Link } from "react-router-dom"

const NotFound = () => {
    return (  
        <div>
            <div className="card border border-danger">
                <div className="card-header text-center">
                    <h2 className="">
                        <strong className="display-3 text-danger"> 404!!!</strong>
                    </h2>
                    <h1 className="display-4 ">
                        <strong className="text-danger">Sorry..That page cannot be founded.</strong>
                    </h1>
                </div>
            </div>
            <Link to="/" className="container link-info">Back to the home...</Link>
        </div>
    );
}
 
export default NotFound;
