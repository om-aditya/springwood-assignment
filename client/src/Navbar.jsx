import { Link } from "react-router-dom";

const Navbar = () =>{

    return(
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand btn btn-primary" to="/Home">Transactions</Link>
            </nav>  
        </>
    );
}

export default Navbar;