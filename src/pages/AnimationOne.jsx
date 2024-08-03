import { useEffect, useRef } from 'react';
import { animate } from "motion"

const AnimationOne = () => {
    const boxRef1 = useRef(null);

    useEffect(() => {
        animate(boxRef1.current, { rotate: 360 }, {
          repeat: Infinity,
          duration: 5,
          ease: "linear",
          direction: "alternate",
          repeatDelay: 0.5
        })
    },[])
  return (
    <div className="w-[100vw] h-screen p-10 bg-zinc-900 text-white/70">
    <div ref={boxRef1} className="w-32 h-32 bg-pink-800 rounded-md"/>
    </div>
  )
}

export default AnimationOne