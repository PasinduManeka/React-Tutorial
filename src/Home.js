const Home = () => {
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
            {/*Bitton1*/}
            <button class="btn btn-outline-secondary" onClick={handleClick}>Click me !</button><br /><br />
            {/*Button 2*/}
            <button class="btn btn-outline-secondary" onClick={()=>handleClickAgain('Pasindu')}>Click me again !</button>
        </div>
    );
}
 
export default Home;