import { navbarLogo } from "../assets"
import { navbarLinks } from "../constants"

const Navbar = () => {
  return (
    <nav className="container flex flex-row bg-black m-auto justify-center items-center">
        <div className="flex flex-row justify-between items-center px-4 py-7 md:px-0">
            <img src={navbarLogo} alt="navbarLogo" />
            {}
        </div>
    </nav>
  )
}

export default Navbar