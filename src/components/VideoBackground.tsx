import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect } from "react";

export const VideoBackground = () => {
  const ref = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.3]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.3]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let isPlaying = false;
    let scrollTimeout: NodeJS.Timeout;

    // Attempt to play video on mount (important for mobile)
    const playVideo = () => {
      video.play().catch(err => {
        console.log("Initial play failed:", err);
        // Retry on user interaction
        document.addEventListener('touchstart', () => {
          video.play().catch(e => console.log("Touch play failed:", e));
        }, { once: true });
      });
      isPlaying = true;
    };

    // Try to play immediately
    playVideo();

    const handleScroll = () => {
      if (!video) return;

      // Play video when scrolling
      if (!isPlaying) {
        video.play().catch(err => console.log("Play failed:", err));
        isPlaying = true;
      }

      // Clear existing timeout
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }

      // Pause video after scrolling stops
      scrollTimeout = setTimeout(() => {
        if (video) {
          video.pause();
          isPlaying = false;
        }
      }, 150);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
    };
  }, []);

  return (
    <div ref={ref} className="fixed inset-0 -z-10 overflow-hidden">
      <motion.div
        style={{ scale, opacity }}
        className="absolute inset-0 w-full h-full"
      >
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/Jungle.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-transparent to-background/60" />
      </motion.div>
    </div>
  );
};
