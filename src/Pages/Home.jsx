import React from 'react'
import { 
  PlayCircleIcon, 
  TrendingUpIcon, 
  HeadphonesIcon, 
  MicIcon,
  ExternalLinkIcon,
  ArrowRightIcon,
  DownloadIcon
} from 'lucide-react'

export default function Home() {
  // Featured categories
  const categories = [
    {
      id: 1,
      title: "Discover",
      description: "Find new music based on your preferences",
      icon: HeadphonesIcon,
      color: "bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400"
    },
    {
      id: 2,
      title: "Live Events",
      description: "Stream concerts and musical events",
      icon: MicIcon,
      color: "bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400"
    },
    {
      id: 3,
      title: "Top Charts",
      description: "Most popular tracks this week",
      icon: TrendingUpIcon, 
      color: "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
    },
    {
      id: 4,
      title: "Downloads",
      description: "Listen offline with premium plan",
      icon: DownloadIcon,
      color: "bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400"
    }
  ]

  // Website stats
  const stats = [
    { id: 1, label: "TRACKS", value: "10M+" },
    { id: 2, label: "ARTISTS", value: "100K+" },
    { id: 3, label: "USERS", value: "5M+" },
    { id: 4, label: "COUNTRIES", value: "150+" }
  ]

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
      {/* Hero Section with Website Info */}
      <div className="relative">
        <div className="h-auto bg-gradient-to-r from-purple-700 to-indigo-900 relative overflow-hidden py-16 md:py-24">
          <div className="absolute inset-0 bg-black opacity-30"></div>
          <div className="absolute inset-0 bg-[url('/api/placeholder/1200/600')] bg-center bg-cover mix-blend-overlay opacity-20"></div>
          
          <div className="relative px-6 md:px-10 max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Your Music, Your Way</h1>
              <p className="text-lg md:text-xl text-white/80 mb-8 max-w-3xl mx-auto">
                Welcome to Melodify - the ultimate music streaming platform. Discover millions of tracks, create your perfect playlists, and enjoy high-quality sound anywhere, anytime.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button className="bg-white text-purple-700 hover:bg-gray-100 font-medium rounded-full px-8 py-3 flex items-center space-x-2 shadow-lg w-full sm:w-auto justify-center">
                  <PlayCircleIcon size={20} />
                  <span>Start Listening Now</span>
                </button>
                <button className="bg-transparent text-white border border-white hover:bg-white/10 font-medium rounded-full px-8 py-3 flex items-center space-x-2 w-full sm:w-auto justify-center">
                  <span>Premium Features</span>
                  <ArrowRightIcon size={18} />
                </button>
              </div>
            </div>
            
            {/* Stats Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 mb-4">
              {stats.map((stat) => (
                <div key={stat.id} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <div className="text-2xl md:text-4xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-xs md:text-sm text-white/70 uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* About the Platform */}
      <div className="px-6 md:px-10 py-16 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-4">Experience Music Like Never Before</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Melodify offers a seamless listening experience with curated playlists, personalized recommendations, and lossless audio quality. Our platform is designed for music lovers by music lovers.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <div key={category.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className={`w-12 h-12 ${category.color} rounded-lg flex items-center justify-center mb-4`}>
                  <Icon size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">{category.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{category.description}</p>
                <a href="#" className="inline-flex items-center text-sm font-medium text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300">
                  <span>Explore</span>
                  <ArrowRightIcon size={16} className="ml-1" />
                </a>
              </div>
            );
          })}
        </div>
        
        {/* Features highlight */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="p-8 md:p-10 flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Why Choose Melodify?</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full bg-green-500 mt-1"></div>
                  <p className="ml-3 text-gray-600 dark:text-gray-300">HD quality audio with no interruptions</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full bg-green-500 mt-1"></div>
                  <p className="ml-3 text-gray-600 dark:text-gray-300">Personalized recommendations based on your taste</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full bg-green-500 mt-1"></div>
                  <p className="ml-3 text-gray-600 dark:text-gray-300">Download tracks for offline listening</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full bg-green-500 mt-1"></div>
                  <p className="ml-3 text-gray-600 dark:text-gray-300">No ads with premium subscription</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full bg-green-500 mt-1"></div>
                  <p className="ml-3 text-gray-600 dark:text-gray-300">Available on all your devices</p>
                </li>
              </ul>
              <button className="mt-6 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg px-6 py-3 self-start">
                Try Premium Free
              </button>
            </div>
            <div className="bg-[url('/api/placeholder/600/600')] bg-center bg-cover h-64 md:h-auto"></div>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-4">Ready to Start Your Musical Journey?</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-6">
            Join millions of music lovers who have already discovered the Melodify experience.
          </p>
          <button className="bg-gradient-to-r from-purple-600 to-indigo-700 text-white font-medium rounded-full px-8 py-3 shadow-lg hover:from-purple-700 hover:to-indigo-800">
            Sign Up For Free
          </button>
        </div>
      </div>
    </div>
  )
}