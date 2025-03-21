import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { 
  HomeIcon, 
  HeadphonesIcon, 
  BookmarkIcon, 
  TrendingUpIcon, 
  CompassIcon, 
  MusicIcon,
  PlusCircleIcon,
  ChevronLeftIcon,
  ChevronRightIcon
} from 'lucide-react'

export default function SideBar() {
  const location = useLocation()
  const [collapsed, setCollapsed] = useState(false)
  
  // Main navigation items
  const mainNavItems = [
    { id: 1, name: 'Home', path: '/', icon: HomeIcon },
    { id: 2, name: 'Listen', path: '/Listen', icon: HeadphonesIcon },
    { id: 3, name: 'Saved', path: '/Saved', icon: BookmarkIcon },
    { id: 4, name: 'Trending', path: '/trending', icon: TrendingUpIcon },
    { id: 5, name: 'Discover', path: '/discover', icon: CompassIcon },
  ]
  
  // User's playlists (simplified)
  const playlists = [
    { id: 1, name: 'Chill Vibes', count: '24' },
    { id: 2, name: 'Workout Mix', count: '18' },
    { id: 3, name: 'Road Trip', count: '32' }
  ]
  
  // Check if a nav item is active
  const isActive = (path) => location.pathname === path

  // Toggle sidebar collapse
  const toggleSidebar = () => {
    setCollapsed(!collapsed)
  }

  return (
    <aside className={`relative h-full transition-all duration-300 bg-black border-r border-zinc-800 flex flex-col ${
      collapsed ? 'w-16' : 'w-64'
    }`}>
      {/* Toggle Button */}
      <button 
        onClick={toggleSidebar}
        className="absolute -right-3 top-10 bg-zinc-800 border border-zinc-700 text-emerald-400 rounded-full p-1 z-10"
      >
        {collapsed ? <ChevronRightIcon size={16} /> : <ChevronLeftIcon size={16} />}
      </button>

      {/* User Profile Section - Simplified */}
      <div className={`p-4 mb-2 ${collapsed ? 'flex justify-center' : ''}`}>
        {collapsed ? (
          <div className="w-8 h-8 rounded-md bg-zinc-800 border border-zinc-700 flex items-center justify-center text-emerald-400 text-sm font-medium">
            A
          </div>
        ) : (
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-md bg-zinc-800 border border-zinc-700 flex items-center justify-center text-emerald-400 text-sm font-medium">
              A
            </div>
            <div className="overflow-hidden">
              <h3 className="font-medium text-sm text-white truncate">Alex</h3>
              <p className="text-xs text-zinc-500 truncate">Premium</p>
            </div>
          </div>
        )}
      </div>
      
      {/* Main Navigation - Scrollable */}
      <div className="px-2 py-2 flex-grow overflow-y-auto scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-track-zinc-900">
        {!collapsed && (
          <h3 className="px-3 text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-2">
            Browse
          </h3>
        )}
        <nav>
          <ul>
            {mainNavItems.map((item) => {
              const Icon = item.icon
              return (
                <li key={item.id}>
                  <Link 
                    to={item.path}
                    className={`flex items-center space-x-3 px-3 py-2 rounded-md text-sm transition-colors ${
                      isActive(item.path)
                        ? 'bg-zinc-800 text-emerald-400 font-medium'
                        : 'text-zinc-400 hover:bg-zinc-900 hover:text-zinc-200'
                    } ${collapsed ? 'justify-center' : ''}`}
                    title={collapsed ? item.name : ''}
                  >
                    <Icon size={18} />
                    {!collapsed && <span>{item.name}</span>}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
        
        {/* User's Playlists - Hidden when collapsed */}
        {!collapsed && (
          <div className="px-1 py-4">
            <div className="flex items-center justify-between px-2 mb-2">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                Playlists
              </h3>
              <button className="text-emerald-500 hover:text-emerald-400">
                <PlusCircleIcon size={16} />
              </button>
            </div>
            <ul className="space-y-1">
              {playlists.map((playlist) => (
                <li key={playlist.id}>
                  <a href="#" className="flex items-center justify-between px-3 py-2 text-sm rounded-md hover:bg-zinc-900 text-zinc-400 hover:text-zinc-200">
                    <span className="truncate">{playlist.name}</span>
                    <span className="text-xs text-zinc-600">{playlist.count}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
        
        {/* Recently Played - Hidden when collapsed */}
        {!collapsed && (
          <div className="px-1 py-2">
            <h3 className="px-2 text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-2">
              Recent
            </h3>
            <div className="space-y-1">
              <a href="#" className="flex items-center space-x-3 px-3 py-2 text-sm rounded-md hover:bg-zinc-900 group">
                <div className="w-8 h-8 flex-shrink-0 bg-zinc-800 rounded-md flex items-center justify-center">
                  <MusicIcon size={14} className="text-zinc-500 group-hover:text-emerald-400" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-zinc-300">Blinding Lights</p>
                  <p className="text-xs text-zinc-600 truncate">The Weeknd</p>
                </div>
              </a>
            </div>
          </div>
        )}
      </div>
      
      {/* Now Playing (Mini Player) - Always visible */}
      <div className={`p-3 border-t border-zinc-800 bg-zinc-900/50 ${collapsed ? 'flex justify-center' : ''}`}>
        {collapsed ? (
          <div className="w-8 h-8 rounded-md bg-zinc-800 flex items-center justify-center">
            <MusicIcon size={16} className="text-emerald-400" />
          </div>
        ) : (
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-md bg-zinc-800 flex items-center justify-center">
              <MusicIcon size={16} className="text-emerald-400" />
            </div>
            <div className="min-w-0">
              <p className="text-sm font-medium text-white truncate">Now Playing</p>
              <p className="text-xs text-zinc-500 truncate">Artist Name</p>
            </div>
          </div>
        )}
      </div>
    </aside>
  )
}