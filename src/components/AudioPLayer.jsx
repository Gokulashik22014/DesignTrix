import React, { useEffect, useRef } from 'react';
const AudioPlayer = () => {
  // Create a reference to the audio element
  const audioRef = useRef(null);

  // Use useEffect to play the audio when the component mounts
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play().catch(error => {
        console.error("Audio playback failed:", error);
      });
    }
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <div>
      <audio ref={audioRef} src="/song/theme.mp3" type="audio/mpeg"/>
    </div>
  );
};

export default AudioPlayer;