import { useState } from "react";

const NewBlog = () => {

    const[title, setTitle] = useState('');
    const[author, setAuthor] = useState('Select');
    const[body, setBody] = useState('');

    const handleSubmit = (e)=>{
        e.preventDefault();
        const blog = {title,body,author};

        console.log(blog);
    }

    return ( 
        <div className="card">
            <h2 className="text-muted container card-title text-center">
                <strong>Add a New Blog</strong>
            </h2>

            <div className="card-body">
                <form onSubmit={handleSubmit}>
                    <div className="form-row">
                        {/*Blog Title*/}
                        <div className="col">
                            <div className="md-form">
                                <label >Blog Title</label>
                                <input 
                                    type="text" 
                                    value={title} 
                                    onChange={(e)=>setTitle(e.target.value)} 
                                    className="form-control border border-secondary" 
                                    autoComplete="off" 
                                    required
                                />
                            </div>
                        </div>
                        {/*Blog Author*/}
                        <div className="col">
                            <div className="md-form">
                                <label >Blog Author</label>
                                <select value={author} onChange={(e)=> setAuthor(e.target.value)} className="form-control border border-secondary">
                                    <option value>Select...</option>
                                    <option value="mario">mario</option>
                                    <option value="yoshi">yoshi</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    {/*Blog Body */}
                    <div className="form-group black-border">
                            <label>Address</label>
                            <textarea 
                                name="address" 
                                rows="3" 
                                className="form-control border border-secondary" 
                                value={body} 
                                onChange={(e)=>setBody(e.target.value)}
                                required
                            ></textarea>
                    </div>
                    <div>
                        <button className="btn btn-outline-success form-control border border-success">
                            Submit The Blog
                        </button>
                    </div>
                </form>
            </div>
        </div>
     );
}
 
export default NewBlog;
