import cartimg from "./assets/cartimg.webp"
function Header(){
    return(
        <header className="head">
            <h1>BLUORNG</h1>
            <ul >
                <li>NEW IN</li>
                <li>APPAREL</li>
                <li>STORE</li>
            </ul>
            <ul>
                <li>SEARCH</li>
                <li>LOGIN</li>
                <li><div className="cimg"><img src={cartimg} alt="" /></div></li>
            </ul>
        </header>
    )

}
export default Header