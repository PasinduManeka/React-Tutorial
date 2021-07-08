import { useState, useEffect } from 'react';
import BlogList from './BlogList';
const Home = () => {

    const [blogs, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true);
    
    //const [name, setName] = useState('mario');
    //second hook. We can do any authentication, fetch data 
    useEffect(()=>{
        fetch('http://localhost:8000/blogs')
            .then(res=>{
                return res.json();
            })
            .then(data =>{
                setBlogs(data);
                setIsPending(false);
            });
    }, []);

    return (
        <div className="home">
            {isPending && <div class="alert alert-primary d-inline-flex p-2"><strong>Loading...</strong></div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs.." />}
            
        </div>
    );
}

export default Home;