'use client'
import Image from "next/image";
import {motion} from "motion/react";

export default function Home() {
  const playAudio = () => {
    // todo
  }

  return (
    <div className={`w-screen h-screen flex justify-center items-center`}>
      <motion.div drag
                  whileDrag={{}}
                  dragConstraints={{left: 1, right: 1, top: 1, bottom: 1}}
                  dragElastic={0.05}
                  whileHover={{scale: 1.05}}
                  whileTap={{scale: 0.95}}
                  onClick={playAudio}>
        <Image draggable={false}
               src={`/对吗.png`}
               width={478}
               height={230}
               alt={``}>
        </Image>
      </motion.div>
    </div>
  );
}
