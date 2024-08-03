import {Link} from "react-router-dom"
import Logo from "../assets/Logo.png"

function NavBar() {
  return (
    <div className="flex space-x-8 items-center pl-3 py-4">
        <Link to="/">
            <img className="w-[50px]" src={Logo} alt="Logo" />
        </Link>
        <div className="text-2xl font-bold space-x-8">
            <Link to="/">Movies</Link>
            <Link to="/watchlist">Watchlist</Link>
        </div>
    </div>
  )
}

export default NavBar