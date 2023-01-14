
import React from 'react'
import { FaGithub } from 'react-icons/fa'

const Footer = ()=> {
  return (
    <footer className="bg-gray-900 text-white py-4">
      <div className="container mx-auto flex items-center justify-between px-4">
        <p>Copyright © {new Date().getFullYear()} Should I Take A Coat</p>
        <nav className="flex items-center"> <a href="https://github.com/JoshHargreaves/should-i-take-a-coat"  target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white mr-4">
            <FaGithub size={24} className="mr-2" />
            GitHub
          </a>
        </nav>
        <nav className="flex items-center">
          <a href="#" className="text-gray-500 hover:text-white mr-4">Privacy</a>
          <a href="#" className="text-gray-500 hover:text-white">Terms</a>
        </nav>
      </div>
    </footer>
  )
}


export default Footer;