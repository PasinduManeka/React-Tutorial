//import { useState, useEffect } from 'react';
import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {

    const {data,isPending,error} = useFetch('http://localhost:8000/blogs');
    
    //const [name, setName] = useState('mario');
    //second hook. We can do any authentication, fetch data 
    
    return (
        <div className="home">
            {error && <div class="alert alert-danger d-inlin-flex p-2">{error}</div>}
            {isPending && <div class="alert alert-primary d-inline-flex p-2"><strong>Loading...</strong></div>}
            {data && <BlogList blogs={data} title="All Blogs.." />}
            
        </div>
    );
}

export default Home;