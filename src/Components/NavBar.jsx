import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { HomeIcon, HeadphonesIcon, BookmarkIcon, MenuIcon, XIcon, SearchIcon } from 'lucide-react'

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
    <header className="bg-black border-b border-zinc-800 text-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="h-10 w-10 rounded-md bg-zinc-900 border border-zinc-800 flex items-center justify-center">
              <HeadphonesIcon size={22} className="text-emerald-400" />
            </div>
            <span className="text-xl font-bold tracking-tight">Melodify</span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navigationItems.map((item) => {
              const Icon = item.icon
              const isActive = location.pathname === item.route
              
              return (
                <Link 
                  key={item.id} 
                  to={item.route}
                  className={`flex items-center space-x-2 py-2 px-3 rounded-md transition-colors ${
                    isActive 
                      ? 'bg-zinc-800 text-emerald-400 font-medium' 
                      : 'hover:bg-zinc-900 text-zinc-400 hover:text-white'
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
                className="bg-zinc-900 border border-zinc-800 rounded-md py-2 pl-4 pr-10 text-sm focus:outline-none focus:border-emerald-500 w-48 placeholder-zinc-500"
              />
              <SearchIcon size={16} className="absolute right-3 top-2.5 text-zinc-500" />
            </div>
            <div className="h-8 w-8 rounded-md bg-zinc-800 border border-zinc-700 flex items-center justify-center text-emerald-400 text-sm font-medium">
              ME
            </div>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-zinc-400 hover:text-white focus:outline-none"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <nav className="md:hidden bg-black/95 border-y border-zinc-800 absolute left-0 right-0 z-20">
          <div className="container mx-auto px-4 py-2">
            {navigationItems.map((item) => {
              const Icon = item.icon
              const isActive = location.pathname === item.route
              
              return (
                <Link 
                  key={item.id} 
                  to={item.route}
                  className={`flex items-center space-x-3 py-3 px-4 ${
                    isActive ? 'text-emerald-400 font-medium' : 'text-zinc-400'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Icon size={20} />
                  <span>{item.navigationText}</span>
                </Link>
              )
            })}
            
            {/* Mobile Search */}
            <div className="mt-4 pb-4 relative">
              <input 
                type="text" 
                placeholder="Search..." 
                className="bg-zinc-900 border border-zinc-800 rounded-md py-2 px-4 text-sm w-full focus:outline-none focus:border-emerald-500 placeholder-zinc-500"
              />
              <SearchIcon size={16} className="absolute right-3 top-3 text-zinc-500" />
            </div>
          </div>
        </nav>
      )}
    </header>
  )
}