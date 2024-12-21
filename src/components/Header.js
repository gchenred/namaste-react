import Logo from "../../Images/Landing/Logo.jpg";

const Header = () => {
    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={Logo}></img>
            </div>
            <div className="nav-items-container">
                <ul className="nav-items-list">
                    <li className="nav-item">Home</li>
                    <li className="nav-item">Cart</li>
                    <li className="nav-item">Contact Us</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;