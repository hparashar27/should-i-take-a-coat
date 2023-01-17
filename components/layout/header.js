import Link from 'next/link'
import {TiWeatherPartlySunny} from "react-icons/ti"
import {TiWeatherSnow} from "react-icons/ti"
const Header = () => {
  return (
    <header className="(255, 182, 36) text-white p-6">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/"
          className=" text-xl "><TiWeatherPartlySunny />
        </Link>
        <nav className="flex justify-center">
          <ul className="flex">
            <li className="ml-6">
              <Link href="/"
                className="text-gray-500 hover:text-white">Home
              </Link>
            </li>
            <li className="ml-6">
              <Link href="/about"
               className="text-gray-500 hover:text-white">About
              </Link>
            </li>
          </ul>
        </nav>
        <i >
            <TiWeatherSnow/>
        </i>
      </div>
    </header>
  )
}

export default Header
