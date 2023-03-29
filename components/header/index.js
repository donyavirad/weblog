import Logo from "./logo"
import Navbar from "./navbar"
import Subscribe from "./subscribe"

const Header = () => {
  return (
    <div className="px-8 ">
        <header className="flex justify-between items-center py-4 border-b border-gray-400">
            <Logo/>
            <Navbar/>
            <Subscribe/>
        </header>
    </div>
  )
}

export default Header