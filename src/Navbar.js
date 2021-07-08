const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>The dojo blogs</h1>
            <div className="links">
                <a class="mask rgba-red-strong" href="/">Home</a>
                <a class="bg-danger text-white rounded" href="/NewBLog">New Blog</a>
            </div>
        </nav>
    );
}
 
export default Navbar;