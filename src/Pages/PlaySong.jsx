import React, { useState } from 'react';
import "./PlaySong.css"

export default function PlaySong({ ClickedSong }) {


  const [isPlaying, setIsPlaying] = useState(false);
  const [playingSong, setPlyingSong] = useState("");
  const [currentTime, setCurrentTime] = useState(0);
  
  // Format duration from seconds to MM:SS
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs}`;
  };
  
  const togglePlay = () => {
    setIsPlaying(!isPlaying);
    if (isPlaying) {
      playingSong.pause();
      console.log("Hi");
      console.log(playingSong);
    } else {
        playingSong.play();
        console.log(playingSong);
        console.log("Bye");
    }

  };

  return (
    <div className="player-container">
      
      <h2 className="now-playing">Now Playing</h2>
      
      <section className="song-card">
        <div className="poster">
          <img src={ClickedSong.poster} alt={ClickedSong.songTitle} />
        </div>
        
        <div className="controls">
          <section className="song-info">
            <h3>{ClickedSong.songTitle}</h3>
            <p>
              From {ClickedSong.movie} • {ClickedSong.artist}
            </p>
          </section>
          
          <section className="song-controls">
            <button className="player-button" onClick={()=>{
                setPlyingSong(new Audio(ClickedSong.audio))
                togglePlay();
            }}>
              {isPlaying ? 'Pause' : 'Play'}
            </button>
            
            <p className="duration-display">
              Current Position: {formatTime(currentTime)}
            </p>
            
            <div className="progress-container">
              <span className="time-label">{formatTime(currentTime)}</span>
              <div className="progress-bar">
                <input 
                  type="range" 
                  min="0" 
                  max={ClickedSong.duration} 
                  value={currentTime}
                  onChange={(e) => setCurrentTime(parseInt(e.target.value))}
                />
              </div>
              <span className="time-label">{formatTime(ClickedSong.duration)}</span>
            </div>
          </section>
        </div>
      </section>
      
      <section className="suggestions">
        <h4>You might also like</h4>
        <p>Lorem</p>
        <p>Lorem</p>
        <p>Lorem</p>
        <p>Lorem</p>
        <p>Lorem</p>
        <p>Lorem</p>
        <p>Lorem</p>
        <p>Lorem</p>
        <p>Lorem</p>
        <p>Lorem</p>
        <p>Lorem</p>
        <p>Lorem</p>
        <p>Lorem</p>
        <p>Lorem</p>
        <p>Lorem</p>
        <p>Lorem</p>
        <p>Lorem</p>
        <p>Lorem</p>
        <p>Lorem</p>
        <p>Lorem</p>
        <p>Lorem</p>
        <p>Lorem</p>
        <p>Lorem</p>
        <p>Lorem</p>
        <p>Lorem</p>
        <p>Lorem</p>
        <p>Lorem</p>
        <p>Lorem</p>
        <p>Lorem</p>
        <p>Lorem</p>
        <p>Lorem</p>
        <p>Lorem</p>
        <p>Lorem</p>
        <p>Lorem</p>
        <p>Lorem</p>
        <p>Lorem</p>
        <p>Lorem</p>
        <p>Lorem</p>
        <p>Lorem</p>
        <p>Lorem</p>
        <p>Lorem</p>
        <p>Lorem</p>
        <p>Lorem</p>
        <p>Lorem</p>
        <p>Lorem</p>
        <p>Lorem</p>
        <p>Lorem</p>
        <p>Lorem</p>
        <p>Lorem</p>
        <p>Lorem</p>
        <p>Lorem</p>
        <p>Lorem</p>
        <p>Lorem</p>
        <p>Lorem</p>
        <p>Lorem</p>
        <p>Lorem</p>
        <p>Lorem</p>
        <p>Lorem</p>
        <p>Lorem</p>
        <p>Lorem</p>
        {/* This section is left blank as per your request, but ready for future implementation */}
      </section>
    </div>
  );
}