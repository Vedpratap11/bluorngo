import cartimg from "./assets/cartimg.webp"
import { Link } from "react-router-dom"
function Header(){
    return(
        <header className="head">
            <h1><Link to="/">BLUORNG</Link></h1>
            <ul >
                <li><Link to="/Newin">NEW IN</Link></li>
                <li><Link to="/Apparel">APPAREL</Link></li>
                <li><Link to="/Store">STORE</Link></li>
            </ul>
            <ul>
                <li><Link to="/Search">SEARCH</Link></li>
                <li><Link to="/Login">LOGIN</Link></li>
                <li><Link to="/Cart"><div className="cimg"><img src={cartimg} alt="" /></div></Link></li>
            </ul>
        </header>
    )

}
export default Header