'use client';

import { useEffect, useRef, useState } from 'react';
import YouTubePlayer from 'youtube-player';

const VideoPlayer = ({ videoId, onThresholdReached }) => {
  const [isWatch70, setWatch70] = useState(false);
  const playerRef = useRef(null);
  const watchedTimeRef = useRef(0);
  const lastTimeRef = useRef(0);
  const playbackRateRef = useRef(1);
  const intervalIdRef = useRef(null);
  const isWatch70Ref = useRef(false); // Ref to track the watch status

  useEffect(() => {
    // Initialize the YouTube player

    watchedTimeRef.current = 0;
    lastTimeRef.current = 0;
    playbackRateRef.current = 1;
    isWatch70Ref.current = false;
    setWatch70(false);
    
    const player = YouTubePlayer('video-player', {
      videoId,
      playerVars: { autoplay: 0, controls: 1 }, // Customize player options
    });

    playerRef.current = player;

    // Track progress at regular intervals
    const trackProgress = async () => {
      if (playerRef.current && !isWatch70Ref.current) {
        try {
          const currentTime = await player.getCurrentTime();
          const elapsedTime = (currentTime - lastTimeRef.current) * playbackRateRef.current;

          if (elapsedTime > 0) {
            watchedTimeRef.current += elapsedTime;
          }

          lastTimeRef.current = currentTime;

          const duration = await player.getDuration();
          if (watchedTimeRef.current >= 0.2 * duration) {
            isWatch70Ref.current = true; // Update the ref
            setWatch70(true); // Update state to trigger re-render
            console.log("User has watched 70% of the video.");
            onThresholdReached(); // Call the callback
            clearInterval(intervalIdRef.current); // Stop tracking
          }
        } catch (error) {
          console.error("Error tracking progress:", error);
        }
      }
    };

    // Handle playback rate changes
    player.on('playbackRateChange', (event) => {
      playbackRateRef.current = event.data || 1; // Default to 1x speed
    });

    // Handle player state changes
    player.on('stateChange', async (event) => {
      if (event.data === 1) {
        // Video is playing
        lastTimeRef.current = await player.getCurrentTime();
        if (!intervalIdRef.current && !isWatch70Ref.current) {
          intervalIdRef.current = setInterval(trackProgress, 500); // Check progress every 500ms
        }
      } else if (event.data === 2 || event.data === 0) {
        // Video is paused or ended
        clearInterval(intervalIdRef.current);
        intervalIdRef.current = null;
      }
    });

    // Cleanup on component unmount
    return () => {
      clearInterval(intervalIdRef.current);
      if (playerRef.current) {
        playerRef.current.destroy();
        playerRef.current = null;
      }
    };
  }, [videoId]);

  return (
    <div
      id="video-player"
      style={{
        width: '100%',
        height: '100%',
        borderRadius: '24px',
        overflow: 'hidden',
      }}
    ></div>
  );
};

export default VideoPlayer;
