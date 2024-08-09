import { inView, animate } from "motion";
import { useEffect } from "react";

const AnimationTwo = () => {
  useEffect(() => {
    // Define the callback function
    const handleInView = (info) => {
      // Animate the element when it enters the viewport
      animate(info.target, { opacity: 1, scale: 1 });

      // Return a function to stop the animation when the element leaves the viewport
      return (leaveInfo) => {
        // Stop the animation
        animate(info.target, { opacity: 0, scale: 0.5 });
      };
    };
    const unobserve = inView('#myElement', handleInView);

    // Clean up the observer on component unmount
    return () => {
      unobserve();
    };
  }, []); // Empty dependency array to run the effect only once

  return (
    <div className="w-full h-[200vh] overflow-x-hidden p-10 bg-zinc-900 text-white/70">
      <div
        className="w-32 h-32 bg-pink-800 rounded-md"
        id="myElement"
        style={{ opacity: 0 }}
      >
        <h2 className="text-center pt-[50px]">Zah!d</h2>
      </div>
    </div>
  );
};

export default AnimationTwo;
