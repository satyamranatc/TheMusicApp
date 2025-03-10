import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"

import SideBar from "./Components/SideBar.jsx"
import NavBar from "./Components/NavBar.jsx"
import Footer from "./Components/Footer.jsx"
import NotFound from "./Components/NotFound.jsx"

import Home from "./Pages/Home.jsx"
import Listen from "./Pages/Listen.jsx"
import Saved from "./Pages/Saved.jsx"

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen bg-gray-100">
        {/* Navigation for mobile */}
        <div className="lg:hidden">
          <NavBar />
        </div>

        {/* Main content area with sidebar */}
        <div className="flex flex-1 overflow-hidden">
          {/* Sidebar (hidden on mobile, visible on larger screens) */}
          <div className="hidden lg:block w-64 flex-shrink-0 border-r border-gray-200 bg-white">
            <SideBar />
          </div>
          
          {/* Main content */}
          <div className="flex-1 overflow-auto">
            {/* Navigation for desktop */}
            <div className="hidden lg:block">
              <NavBar />
            </div>
            
            {/* Page content */}
            <main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Listen" element={<Listen />} />
                <Route path="/Saved" element={<Saved />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
          </div>
        </div>

        {/* Footer */}
        <Footer className="mt-auto" />
      </div>
    </BrowserRouter>
  )
}