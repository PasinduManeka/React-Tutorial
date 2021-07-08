import { useState, useEffect } from 'react';
import BlogList from './BlogList';
const Home = () => {

    const [blogs, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const[error, setError] = useState(null);
    
    //const [name, setName] = useState('mario');
    //second hook. We can do any authentication, fetch data 
    useEffect(()=>{
        fetch('http://localhost:8000/blogs')
            .then(res=>{
                //console.log(res);
                if(!res.ok){
                    throw Error('Could not fetch the data for that resource');
                }
                return res.json();
            })
            .then(data =>{
                setBlogs(data);
                setIsPending(false);
                setError(null);
            })
            .catch(err =>{
                //console.log(err.message);
                setIsPending(false);
                setError(err.message);
            })
    }, []);

    return (
        <div className="home">
            {error && <div class="alert alert-danger d-inlin-flex p-2">{error}</div>}
            {isPending && <div class="alert alert-primary d-inline-flex p-2"><strong>Loading...</strong></div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs.." />}
            
        </div>
    );
}

export default Home;