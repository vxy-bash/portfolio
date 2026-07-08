import { useState, useRef, useEffect } from 'react';
import { Play, Pause } from 'lucide-react';

interface VideoBackgroundProps {
  videoUrl: string;
}

export function VideoBackground({ videoUrl }: VideoBackgroundProps) {
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Synchronisiert den State, falls das Video z.B. vom Browser pausiert wird
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const setPaused = () => setIsPlaying(false);
    const setPlaying = () => setIsPlaying(true);

    video.addEventListener('pause', setPaused);
    video.addEventListener('play', setPlaying);

    return () => {
      video.removeEventListener('pause', setPaused);
      video.removeEventListener('play', setPlaying);
    };
  }, []);

  return (
    <div className="scene">
      <video 
        ref={videoRef}
        className="scene-video" 
        src={videoUrl} 
        autoPlay 
        muted 
        loop 
        playsInline 
      />
      
      <div className="scene-overlay" />
      <div className="scene-grain" />

      <button 
        onClick={togglePlay} 
        className="video-control"
        aria-label={isPlaying ? "Video pausieren" : "Video abspielen"}
      >
        {isPlaying ? <Pause size={16} /> : <Play size={16} />}
      </button>
    </div>
  );
}
