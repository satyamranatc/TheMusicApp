import React from 'react'
import { 
  PlayCircleIcon, 
  TrendingUpIcon, 
  HeadphonesIcon, 
  MicIcon,
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
      color: "bg-zinc-800 text-emerald-400"
    },
    {
      id: 2,
      title: "Live Events",
      description: "Stream concerts and musical events",
      icon: MicIcon,
      color: "bg-zinc-800 text-blue-400"
    },
    {
      id: 3,
      title: "Top Charts",
      description: "Most popular tracks this week",
      icon: TrendingUpIcon, 
      color: "bg-zinc-800 text-purple-400"
    },
    {
      id: 4,
      title: "Downloads",
      description: "Listen offline with premium plan",
      icon: DownloadIcon,
      color: "bg-zinc-800 text-amber-400"
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
    <div className="bg-black min-h-screen text-gray-200">
      {/* Hero Section with Website Info */}
      <div className="relative">
        <div className="h-auto bg-gradient-to-r from-zinc-900 to-black relative overflow-hidden py-20">
          <div className="absolute inset-0 bg-[url('/api/placeholder/1200/600')] bg-center bg-cover opacity-10"></div>
          <div className="absolute inset-0 bg-black opacity-50"></div>
          
          <div className="relative px-6 md:px-10 max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">Your Music, Your Way</h1>
              <p className="text-lg md:text-xl text-zinc-400 mb-10 max-w-3xl mx-auto">
                Welcome to Melodify - the ultimate music streaming platform. Discover millions of tracks, create your perfect playlists, and enjoy high-quality sound anywhere, anytime.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button className="bg-emerald-500 text-black hover:bg-emerald-400 font-medium rounded-md px-8 py-3 flex items-center space-x-2 shadow-lg w-full sm:w-auto justify-center transition-colors">
                  <PlayCircleIcon size={20} />
                  <span>Start Listening Now</span>
                </button>
                <button className="bg-transparent text-emerald-500 border border-emerald-500 hover:bg-emerald-500/10 font-medium rounded-md px-8 py-3 flex items-center space-x-2 w-full sm:w-auto justify-center transition-colors">
                  <span>Premium Features</span>
                  <ArrowRightIcon size={18} />
                </button>
              </div>
            </div>
            
            {/* Stats Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 mb-4">
              {stats.map((stat) => (
                <div key={stat.id} className="bg-zinc-900/80 backdrop-blur-sm rounded-md p-6 text-center border border-zinc-800">
                  <div className="text-3xl md:text-5xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-xs md:text-sm text-zinc-400 uppercase tracking-widest">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* About the Platform */}
      <div className="px-6 md:px-10 py-20 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">Experience Music Like Never Before</h2>
          <p className="text-zinc-400 max-w-3xl mx-auto text-lg">
            Melodify offers a seamless listening experience with curated playlists, personalized recommendations, and lossless audio quality. Our platform is designed for music lovers by music lovers.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <div key={category.id} className="bg-zinc-900 rounded-md border border-zinc-800 p-6 hover:border-emerald-500/50 transition-all">
                <div className={`w-12 h-12 ${category.color} rounded-md flex items-center justify-center mb-5`}>
                  <Icon size={24} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{category.title}</h3>
                <p className="text-zinc-400 mb-4">{category.description}</p>
                <a href="#" className="inline-flex items-center text-sm font-medium text-emerald-400 hover:text-emerald-300">
                  <span>Explore</span>
                  <ArrowRightIcon size={16} className="ml-1" />
                </a>
              </div>
            );
          })}
        </div>
        
        {/* Features highlight */}
        <div className="bg-zinc-900 rounded-md border border-zinc-800 overflow-hidden mb-20">
          <div className="grid md:grid-cols-2">
            <div className="p-8 md:p-10 flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-white mb-6">Why Choose Melodify?</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full bg-emerald-500 mt-1"></div>
                  <p className="ml-4 text-zinc-300">HD quality audio with no interruptions</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full bg-emerald-500 mt-1"></div>
                  <p className="ml-4 text-zinc-300">Personalized recommendations based on your taste</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full bg-emerald-500 mt-1"></div>
                  <p className="ml-4 text-zinc-300">Download tracks for offline listening</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full bg-emerald-500 mt-1"></div>
                  <p className="ml-4 text-zinc-300">No ads with premium subscription</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full bg-emerald-500 mt-1"></div>
                  <p className="ml-4 text-zinc-300">Available on all your devices</p>
                </li>
              </ul>
              <button className="mt-8 bg-emerald-500 hover:bg-emerald-400 text-black font-medium rounded-md px-6 py-3 self-start transition-colors">
                Try Premium Free
              </button>
            </div>
            <div className="bg-[url('/api/placeholder/600/600')] bg-center bg-cover h-64 md:h-auto opacity-70 filter grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500"></div>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">Ready to Start Your Musical Journey?</h2>
          <p className="text-zinc-400 max-w-3xl mx-auto mb-8 text-lg">
            Join millions of music lovers who have already discovered the Melodify experience.
          </p>
          <button className="bg-gradient-to-r from-emerald-500 to-teal-600 text-black font-medium rounded-md px-8 py-4 shadow-lg hover:from-emerald-400 hover:to-teal-500 transition-colors">
            Sign Up For Free
          </button>
        </div>
      </div>
    </div>
  )
}