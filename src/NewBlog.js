import { useState } from "react";

const NewBlog = () => {

    const[title, setTitle] = useState('');
    const[author, setAuthor] = useState('Select');
    const[body, setBody] = useState('');


    return ( 
        <div className="card">
            <h2 className="text-muted container card-title text-center">
                <strong>Add a New Blog</strong>
            </h2>

            <div className="card-body">
                <form action="">
                    <div className="form-row">
                        {/*Blog Title*/}
                        <div class="col">
                            <div class="md-form">
                                <label >Blog Title</label>
                                <input 
                                    type="text" 
                                    value={title} 
                                    onChange={(e)=>setTitle(e.target.value)} 
                                    class="form-control border border-secondary" 
                                    autocomplete="off" 
                                    required
                                />
                            </div>
                        </div>
                        {/*Blog Author*/}
                        <div class="col">
                            <div class="md-form">
                                <label >Blog Author</label>
                                <select value={author} onChange={(e)=> setAuthor(e.target.value)} className="form-control border border-secondary">
                                    <option value="" selected>Select...</option>
                                    <option value="mario">mario</option>
                                    <option value="yoshi">yoshi</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    {/*Blog Body */}
                    <div class="form-group black-border">
                            <label for="">Address</label>
                            <textarea 
                                name="address" 
                                rows="3" 
                                class="form-control border border-secondary" 
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
            <p>{title}</p>
            <p>{author}</p>
            <p>{body}</p>
        </div>
     );
}
 
export default NewBlog;
