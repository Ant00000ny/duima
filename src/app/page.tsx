'use client'
import Image from "next/image";
import {motion} from "motion/react";
import React, {RefObject, useRef, useState} from "react";
import {Footer} from "@/components/Footer";

const files = [
  '对吗1.wav',
  '不对1.wav',
  '不对2.wav',
  '不对3.wav',
  '不对4.wav',
  '不对5.wav',
  '不对6.wav',
  '对的1.wav',
  '对的2.wav',
  '对的3.wav',
  '对的4.wav',
]

export default function Home() {
  const [cursorStyle, setCursorStyle] = useState('url(/cursor/Hearthstone-Hand.png), default');

  const handleMouseDown = () => {
    setCursorStyle('url(/cursor/Hearthstone-Hand.png), default');
  };

  const handleMouseUp = () => {
    setCursorStyle('url(/cursor/Hearthstone-Hand-Text.png), default');
  };

  return (
    <div style={{cursor: cursorStyle}}
         className={`w-screen h-screen flex justify-center items-center px-5 select-none`}
         onMouseDown={handleMouseDown}
         onMouseUp={handleMouseUp}>
      <HearthStoneEmote/>
      <Footer/>
    </div>
  );
}

const HearthStoneEmote = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const playAudio = () => {
    if (audioRef.current) {
      const randomFile = files[Math.floor(Math.random() * files.length)];
      audioRef.current!.src = `/audio/${randomFile}`
      audioRef.current!.load()
      audioRef.current!.play()
      setIsPlaying(true);
      audioRef.current.onended = () => setIsPlaying(false);
    }
  }

  return <motion.div drag
                     dragConstraints={{top: 0, right: 0, bottom: 0, left: 0}}
                     dragElastic={0.05}
                     whileHover={{scale: 1.05}}
                     whileTap={{scale: 0.95}}
                     onClick={playAudio}
                     className={isPlaying ? `opacity-50 pointer-events-none` : ``}>
    <Image draggable={false}
           src={`/对吗.png`}
           width={478}
           height={230}
           alt={``}>
    </Image>
    <Audio src={`/audio/对吗1.wav`} ref={audioRef}/>
  </motion.div>;
};

const Audio: React.FC<{ src: string, ref: RefObject<HTMLAudioElement | null> }>
  = ({src, ref}) => {
  return (
    <audio className={`hidden`} ref={ref} preload='auto' src={src}></audio>
  )
}