import React, { useState, useEffect } from "react";
import "./ListenPage.css";

export default function Listen() {
  const [songList, setSongList] = useState([
    {
      id: 1,
      songTitle: "Kal Ho Na Ho - Sonu Nigam",
      artist: "Sonu Nigam",
      movie: "Kal Ho Na Ho",
      poster: "https://m.media-amazon.com/images/I/912wiGnJ0CL.jpg",
      audio: "/Songs/128-Kal Ho Naa Ho - Kal Ho Naa Ho 128 Kbps.mp3",
      duration: 300,
    },
    {
      id: 2,
      songTitle: "Abhi Mujh Me Kahi - Sonu Nigam",
      artist: "Sonu Nigam",
      movie: "Agneepath",
      poster: "https://i.ytimg.com/vi/AdY_KpBmi6k/maxresdefault.jpg",
      audio: "/Songs/128-Abhi Mujh Mein Kahin - Agneepath 128 Kbps.mp3",
      duration: 280,
    },
    {
      id: 3,
      songTitle: "Sandese Aate Hai - Sonu Nigam",
      artist: "Sonu Nigam",
      movie: "Border",
      poster: "https://i.ytimg.com/vi/7Bdv43hliEA/maxresdefault.jpg",
      audio: "/Songs/128-Sandese Aate Hain - Border 128 Kbps.mp3",
      duration: 680,
    },
  ]);

  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedSong, setSelectedSong] = useState(null);
  const [audioInstance, setAudioInstance] = useState(null);

  const handlePlay = (userSelected) => {
    if (selectedSong?.audio === userSelected.audio) {
      if (isPlaying) {
        audioInstance.pause();
        setIsPlaying(false);
      } else {
        audioInstance.play();
        setIsPlaying(true);
      }
    } else {
      if (audioInstance) {
        audioInstance.pause();
      }

      const newAudio = new Audio(userSelected.audio);
      newAudio.play();
      setAudioInstance(newAudio);
      setSelectedSong(userSelected);
      setIsPlaying(true);

     
    }
  };

  return (
    <div>
      <section>
        <h2>Song List</h2>
        <p>Listen to The Best Songs</p>
      </section>

      <section id="SongCardSection">
        {songList.map((song) => (
          <div className="SongCard" key={song.id}>
            <img src={song.poster} alt={song.songTitle} />
            <h2>{song.songTitle}</h2>
            <p>
              From {song.movie}. By: {song.artist} - {song.duration} Seconds
            </p>
            <button onClick={() => handlePlay(song)}>
              {isPlaying && selectedSong?.id === song.id ? "Pause" : "Play"}
            </button>
          </div>
        ))}
      </section>
    </div>
  );
}
