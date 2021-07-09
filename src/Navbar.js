import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>The dojo blogs</h1>
            <div className="links">
                <Link className="mask rgba-red-strong" to="/">Home</Link>
                <Link className="bg-danger text-white rounded" to="/NewBLog">New Blog</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;