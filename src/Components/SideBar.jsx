import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { 
  HomeIcon, 
  HeadphonesIcon, 
  BookmarkIcon, 
  TrendingUpIcon, 
  CompassIcon, 
  MusicIcon,
  PlusCircleIcon,
  HeartIcon,
  ClockIcon
} from 'lucide-react'

export default function SideBar() {
  const location = useLocation()
  
  // Main navigation items
  const mainNavItems = [
    { id: 1, name: 'Home', path: '/', icon: HomeIcon },
    { id: 2, name: 'Listen', path: '/Listen', icon: HeadphonesIcon },
    { id: 3, name: 'Saved', path: '/Saved', icon: BookmarkIcon },
    { id: 4, name: 'Trending', path: '/trending', icon: TrendingUpIcon },
    { id: 5, name: 'Discover', path: '/discover', icon: CompassIcon },
  ]
  
  // User's playlists
  const playlists = [
    { id: 1, name: 'Chill Vibes', count: '24 songs' },
    { id: 2, name: 'Workout Mix', count: '18 songs' },
    { id: 3, name: 'Road Trip', count: '32 songs' },
    { id: 4, name: '90s Hits', count: '45 songs' },
    { id: 5, name: 'Focus Flow', count: '28 songs' }
  ]
  
  // Recently played
  const recentlyPlayed = [
    { id: 1, name: 'Blinding Lights', artist: 'The Weeknd' },
    { id: 2, name: 'As It Was', artist: 'Harry Styles' },
    { id: 3, name: 'Good 4 U', artist: 'Olivia Rodrigo' }
  ]
  
  // Check if a nav item is active
  const isActive = (path) => location.pathname === path

  return (
    <aside className="h-full overflow-y-auto bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800">
      {/* User Profile Section */}
      <div className="p-6 mb-2">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600"></div>
          <div>
            <h3 className="font-medium text-sm dark:text-white">Alex Johnson</h3>
            <p className="text-xs text-gray-500 dark:text-gray-400">Premium Member</p>
          </div>
        </div>
      </div>
      
      {/* Main Navigation */}
      <div className="px-3 py-2">
        <h3 className="px-3 text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2">
          Browse Music
        </h3>
        <nav>
          <ul>
            {mainNavItems.map((item) => {
              const Icon = item.icon
              return (
                <li key={item.id}>
                  <Link 
                    to={item.path}
                    className={`flex items-center space-x-3 px-3 py-2 rounded-lg text-sm transition-colors ${
                      isActive(item.path)
                        ? 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 font-medium'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                    }`}
                  >
                    <Icon size={18} />
                    <span>{item.name}</span>
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>
      
      {/* User's Playlists */}
      <div className="px-3 py-4">
        <div className="flex items-center justify-between px-3 mb-2">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
            Your Playlists
          </h3>
          <button className="text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300">
            <PlusCircleIcon size={16} />
          </button>
        </div>
        <ul className="space-y-1">
          {playlists.map((playlist) => (
            <li key={playlist.id}>
              <a href="#" className="flex items-center justify-between px-3 py-2 text-sm rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300">
                <span className="truncate">{playlist.name}</span>
                <span className="text-xs text-gray-500 dark:text-gray-400">{playlist.count}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
      
      {/* Recently Played */}
      <div className="px-3 py-4 border-t border-gray-200 dark:border-gray-800">
        <h3 className="px-3 text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2">
          Recently Played
        </h3>
        <ul className="space-y-1">
          {recentlyPlayed.map((track) => (
            <li key={track.id}>
              <a href="#" className="flex items-center space-x-3 px-3 py-2 text-sm rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
                <div className="w-8 h-8 flex-shrink-0 bg-gray-200 dark:bg-gray-700 rounded flex items-center justify-center">
                  <MusicIcon size={14} className="text-gray-500 dark:text-gray-400" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-gray-800 dark:text-gray-200">{track.name}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 truncate">{track.artist}</p>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
      
      {/* Quick Actions */}
      <div className="px-3 py-4 mt-auto border-t border-gray-200 dark:border-gray-800">
        <div className="grid grid-cols-2 gap-2">
          <a href="#" className="flex flex-col items-center justify-center p-3 text-sm rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700">
            <HeartIcon size={18} className="mb-1 text-purple-500" />
            <span>Favorites</span>
          </a>
          <a href="#" className="flex flex-col items-center justify-center p-3 text-sm rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700">
            <ClockIcon size={18} className="mb-1 text-purple-500" />
            <span>History</span>
          </a>
        </div>
      </div>
    </aside>
  )
}