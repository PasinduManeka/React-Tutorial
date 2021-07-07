import { useState, useEffect } from 'react';
import BlogList from './BlogList';
const Home = () => {

    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    ]);
    
    const [name, setName] = useState('mario');

    //First hook
    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);

    }

    //second hook. We can do any authentication, fetch data 
    useEffect(()=>{
        console.log('Use effect ran.');
        console.log(name);
    }, [name]);

    return (
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs.." handleDelete={handleDelete} />
            <button class="btn btn-outline-primary" onClick={()=>setName('lungi')}>Change the name</button>
            <p>{name}</p>
        </div>
    );
}

export default Home;