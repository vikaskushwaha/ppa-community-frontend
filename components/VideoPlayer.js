'use client';
import { useEffect, useState } from 'react';

const VideoPlayer = ({ videoId }) => {
  const [player, setPlayer] = useState(null); // State to store the YouTube Player instance
  const [hasWatched70, setHasWatched70] = useState(false); // State to track if 70% of the video is watched

  useEffect(() => {
    // Function to load the YouTube IFrame API
    const loadYouTubeAPI = () => {
      if (window.YT && window.YT.Player) {
        initializePlayer(); // If API is already available, initialize the player
      } else {
        const script = document.createElement('script');
        script.src = 'https://www.youtube.com/iframe_api'; // Load the YouTube API script
        script.async = true;
        document.body.appendChild(script);

        window.onYouTubeIframeAPIReady = () => {
          initializePlayer(); // Initialize the player when API is ready
        };
      }
    };

    // Function to initialize the YouTube Player
    const initializePlayer = () => {
      const ytPlayer = new YT.Player('youtube-player', {
        videoId: videoId, // Video ID to play
        playerVars: {
          controls: 1, // Show controls (can change to 0 to hide)
          modestbranding: 1, // Disable YouTube branding
          rel: 0, // Disable related videos at the end
        },
        events: {
          onStateChange: onPlayerStateChange, // Event listener for state changes
        },
      });
      setPlayer(ytPlayer); // Store the player instance in the state
    };

    // Event listener for player state changes
    const onPlayerStateChange = (event) => {
      if (event.data === YT.PlayerState.PLAYING && !hasWatched70) {
        startProgressTracking(); // Start tracking progress when the video is playing
      }
    };

    // Function to track video progress
    const startProgressTracking = () => {
      const interval = setInterval(() => {
        if (player && player.getPlayerState() === YT.PlayerState.PLAYING) {
          const currentTime = player.getCurrentTime(); // Current playback time
          const duration = player.getDuration(); // Total video duration
          const percentageWatched = (currentTime / duration) * 100; // Calculate watched percentage

          if (percentageWatched >= 70 && !hasWatched70) {
            clearInterval(interval); // Stop tracking when 70% is reached
            console.log('User watched 70% of the video');
            // updateWatchProgress(70); 
            // Optionally update the server
            setHasWatched70(true); // Update the state
          }
        }
      }, 1000); // Check progress every second
    };

    // Function to update watch progress on the server (optional)
    const updateWatchProgress = (progress) => {
      fetch('/api/update-watch-progress', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ videoId, progress }), // Send video ID and progress
      })
        .then((res) => res.json())
        .then((data) => console.log('Watch progress updated:', data))
        .catch((err) => console.error('Error updating watch progress:', err));
    };

    loadYouTubeAPI(); // Load the YouTube API when the component is mounted

    return () => {
      // Clean up the YouTube Player and interval
      if (player) player.destroy();
    };
  }, [videoId, hasWatched70]); // Re-run effect when dependencies change

  return (
    <div
      id="youtube-player"
      className="w-full h-full"
      style={{
        width: '100%',
        height: '100%',
        borderRadius: '24px', // Add rounded corners to the iframe
        overflow: 'hidden', // Prevent overflow
      }}
    ></div>
  );
};

export default VideoPlayer;
