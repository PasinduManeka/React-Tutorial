import {useState} from 'react';
const Home = () => {

    const [name, setName] = useState('Mario');
    const [age, setAge] = useState(20);

    const handleClickChange = () =>{
        setName('Pasindu');
        setAge(23);
    }

    //button click event handler
    const  handleClick = () =>{
        console.log('Helo, Fellows.');
    } 

    //button2 click event handler
    const handleClickAgain = (name) =>{
        console.log('hello '+name);
    }

    return (
        <div className="home">
            <h2>Home Page</h2>
            <p>He is {name}. He is {age} years old.</p>
            {/*Chaneg Button*/}
            <button class="btn btn-outline-success" on onClick={handleClickChange}>Click me to change the name!</button><br /><br />
            {/*Bitton1*/}
            <button class="btn btn-outline-secondary" onClick={handleClick}>Click me !</button><br /><br />
            {/*Button 2*/}
            <button class="btn btn-outline-secondary" onClick={()=>handleClickAgain('Pasindu')}>Click me again !</button>
        </div>
    );
}
 
export default Home;