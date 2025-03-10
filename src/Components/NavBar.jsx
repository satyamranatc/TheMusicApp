import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { HomeIcon, HeadphonesIcon, BookmarkIcon, MenuIcon, XIcon } from 'lucide-react'

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()
  
  const navigationItems = [
    {
      id: 1,
      navigationText: "Home",
      route: "/",
      icon: HomeIcon,
    },
    {
      id: 2,
      navigationText: "Listen",
      route: "/Listen",
      icon: HeadphonesIcon,
    },
    {
      id: 3,
      navigationText: "Saved",
      route: "/Saved",
      icon: BookmarkIcon,
    }
  ]
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  
  return (
    <header className="bg-gradient-to-r from-purple-800 to-indigo-900 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center">
              <HeadphonesIcon size={24} className="text-purple-300" />
            </div>
            <span className="text-xl font-bold">Melodify</span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => {
              const Icon = item.icon
              const isActive = location.pathname === item.route
              
              return (
                <Link 
                  key={item.id} 
                  to={item.route}
                  className={`flex items-center space-x-2 py-2 px-3 rounded-lg transition-all duration-200 ${
                    isActive 
                      ? 'bg-white/20 font-medium' 
                      : 'hover:bg-white/10'
                  }`}
                >
                  <Icon size={18} />
                  <span>{item.navigationText}</span>
                </Link>
              )
            })}
          </nav>
          
          {/* Search and User Profile for Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search..." 
                className="bg-white/10 rounded-full py-2 pl-4 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-purple-400 w-48"
              />
            </div>
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-pink-500 to-orange-400"></div>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white focus:outline-none"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <nav className="md:hidden bg-indigo-900/95 absolute left-0 right-0 z-20 shadow-xl">
          <div className="container mx-auto px-4 py-3">
            {navigationItems.map((item) => {
              const Icon = item.icon
              const isActive = location.pathname === item.route
              
              return (
                <Link 
                  key={item.id} 
                  to={item.route}
                  className={`flex items-center space-x-3 py-3 px-4 ${
                    isActive ? 'bg-white/10 font-medium' : ''
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Icon size={20} />
                  <span>{item.navigationText}</span>
                </Link>
              )
            })}
            
            {/* Mobile Search */}
            <div className="mt-4 pb-4">
              <input 
                type="text" 
                placeholder="Search..." 
                className="bg-white/10 rounded-lg py-2 px-4 text-sm w-full focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
            </div>
          </div>
        </nav>
      )}
    </header>
  )
}