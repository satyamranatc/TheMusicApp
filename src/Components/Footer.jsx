import React from 'react'
import { 
  InstagramIcon, 
  TwitterIcon, 
  FacebookIcon, 
  YoutubeIcon, 
  ExternalLinkIcon 
} from 'lucide-react'

export default function Footer() {
  const year = new Date().getFullYear()
  
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row md:justify-between items-center">
          {/* Logo and Copyright */}
          <div className="flex items-center mb-4 md:mb-0">
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-purple-600 to-indigo-700 flex items-center justify-center mr-2">
              <span className="text-white font-bold text-sm">M</span>
            </div>
            <span className="text-sm text-gray-600 dark:text-gray-300">
              © {year} Melodify. All rights reserved.
            </span>
          </div>
          
          {/* Quick Links */}
          <div className="flex space-x-6 mb-4 md:mb-0">
            <a href="#" className="text-sm text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400">
              Terms
            </a>
            <a href="#" className="text-sm text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400">
              Privacy
            </a>
            <a href="#" className="text-sm text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400">
              Help
            </a>
          </div>
          
          {/* Social Media */}
          <div className="flex space-x-4">
            <a href="#" className="text-gray-500 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400">
              <InstagramIcon size={18} />
            </a>
            <a href="#" className="text-gray-500 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400">
              <TwitterIcon size={18} />
            </a>
            <a href="#" className="text-gray-500 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400">
              <FacebookIcon size={18} />
            </a>
            <a href="#" className="text-gray-500 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400">
              <YoutubeIcon size={18} />
            </a>
          </div>
        </div>
        
        {/* Optional: Player bar that appears at bottom */}
        <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-800 flex justify-center">
          <span className="text-xs text-gray-500 dark:text-gray-400 flex items-center">
            Made with Tailwind CSS
            <ExternalLinkIcon size={12} className="ml-1" />
          </span>
        </div>
      </div>
    </footer>
  )
}