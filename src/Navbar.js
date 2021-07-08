import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>The dojo blogs</h1>
            <div className="links">
                <Link class="mask rgba-red-strong" to="/">Home</Link>
                <Link class="bg-danger text-white rounded" to="/NewBLog">New Blog</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;