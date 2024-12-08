'use client'
import Image from "next/image";
import {motion} from "motion/react";
import React, {RefObject, useRef} from "react";


export default function Home() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const handleClick = () => {
    if (audioRef.current) {
      audioRef.current!.src = '/audio/' + files[Math.floor(Math.random() * files.length)]
      audioRef.current!.load()
      audioRef.current!.play()
    }
  }

  return (
    <div className={`w-screen h-screen flex justify-center items-center`}>
      <motion.div drag
                  whileDrag={{}}
                  dragConstraints={{left: 1, right: 1, top: 1, bottom: 1}}
                  dragElastic={0.05}
                  whileHover={{scale: 1.05}}
                  whileTap={{scale: 0.95}}
                  onClick={handleClick}>
        <Image draggable={false}
               src={`/对吗.png`}
               width={478}
               height={230}
               alt={``}>
        </Image>
        <Audio src={`/audio/对吗1.wav`} ref={audioRef}/>
      </motion.div>
    </div>
  );
}

const Audio: React.FC<{ src: string, ref: RefObject<HTMLAudioElement | null> }>
  = ({src, ref}) => {
  return (
    <audio className={`hidden`} ref={ref} preload='auto' src={src}></audio>
  )
}

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