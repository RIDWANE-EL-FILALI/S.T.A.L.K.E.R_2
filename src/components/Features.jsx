import React from 'react'
import { useState, useRef } from 'react';
import { TiLocationArrow } from 'react-icons/ti';


export const BentoTilt = ({ children, className = "" }) => {
    const [transformStyle, setTransformStyle] = useState("");
    const itemRef = useRef(null);
  
    const handleMouseMove = (event) => {
      if (!itemRef.current) return;
  
      const { left, top, width, height } =
        itemRef.current.getBoundingClientRect();
  
      const relativeX = (event.clientX - left) / width;
      const relativeY = (event.clientY - top) / height;
  
      const tiltX = (relativeY - 0.5) * 1.5;
      const tiltY = (relativeX - 0.5) * -1.5;
  
      const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(.95, .95, .95)`;
      setTransformStyle(newTransform);
    };
  
    const handleMouseLeave = () => {
      setTransformStyle("");
    };
  
    return (
      <div
        ref={itemRef}
        className={className}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ transform: transformStyle }}
      >
        {children}
      </div>
    );
  };

  export const BentoCard = ({ src, title, description, isComingSoon, type = "video" }) => {
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
    const [hoverOpacity, setHoverOpacity] = useState(0);
    const hoverButtonRef = useRef(null);
  
    const handleMouseMove = (event) => {
      if (!hoverButtonRef.current) return;
      const rect = hoverButtonRef.current.getBoundingClientRect();
  
      setCursorPosition({
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
      });
    };
  
    const handleMouseEnter = () => setHoverOpacity(1);
    const handleMouseLeave = () => setHoverOpacity(0);
  
    return (
      <div className="relative size-full">
        {type === "video" ? (
          <video
            src={src}
            loop
            muted
            autoPlay
            className="absolute left-0 top-0 size-full object-cover object-center"
          />
        ) : (
          <img
            src={src}
            alt={title}
            className="absolute left-0 top-0 size-full object-cover object-center"
          />
        )}
        <div className="relative z-10 flex size-full flex-col justify-between p-5 text-blue-50">
          <div>
            <h1 className="bento-title special-font text-yellow-300">{title}</h1>
            {description && (
              <p className="mt-3 max-w-64 text-xs md:text-base">{description}</p>
            )}
          </div>
  
          {isComingSoon && (
            <div
              ref={hoverButtonRef}
              onMouseMove={handleMouseMove}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="border-hsla relative flex w-fit cursor-pointer items-center gap-1 overflow-hidden rounded-full bg-black px-5 py-2 text-xs uppercase text-white/20"
            >
              {/* Radial gradient hover effect */}
              <div
                className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
                style={{
                  opacity: hoverOpacity,
                  background: `radial-gradient(100px circle at ${cursorPosition.x}px ${cursorPosition.y}px, #656fe288, #00000026)`,
                }}
              />
              <TiLocationArrow className="relative z-20" />
              <p className="relative z-20">Check it</p>
            </div>
          )}
        </div>
      </div>
    );
  };
  
  
const Features = () => {
  return (
    <section className="bg-black flex-center flex-col " id='features'>
        <div className="container mx-auto px-3 md:px-10">
            <div className='px-5 py-32'>
                <p className='font-circular-web text-lg text-blue-50'>Trust no one in the Zone. Allies can quickly turn into enemies.</p>
                <p className='max-w-md font-circular-web text-lg text-blue-50 opacity-50'>In the aftermath of disaster, a new kind of darkness emerged. The Zone is alive, filled with deadly radiation, untold riches, and secrets that defy the laws of nature.</p>
            </div>
        </div>
        <div className="border-hsla relative mb-7 h-96  w-3/4 overflow-hidden rounded-md md:h-[65vh]">
            <BentoCard  src="videos/features1.mp4" title={<><b>C</b>utting-Edge <b>G</b>raphics</>} description="Immerse yourself in the Zone with hyper-realistic visuals, day-night cycles, and weather systems powered by Unreal Engine 5." orderNow />
        </div>
        <div className="grid h-[135vh] grid-cols-2 grid-rows-5 gap-7 w-3/4">
        <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2">
          <BentoCard
            src="images/features2.png"
            title={
              <>
                <b>R</b>ealistic <b>W</b>eapons
              </>
            }
            description="Customize and upgrade an arsenal of authentic firearms. Every weapon feels unique, with realistic recoil, weight, and performance."
            isComingSoon
            type='image'
          />
        </BentoTilt>

        <BentoTilt className="bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0">
            <BentoCard
                src="images/features3.png"
                title={
                <>
                    <b>A</b>dvanced <b>A</b>I <b>S</b>ystem
                </>
                }
                description="Meet NPCs and enemies that adapt dynamically to your actions. The Zone is alive—and it’s watching you."
                isComingSoon
                type='image'
            />
        </BentoTilt>

        <BentoTilt className="bento-tilt_1 me-14 md:col-span-1 md:me-0">
        <BentoCard
            src="images/features4.png"
            title={
              <>
                <b>L</b>egacy <b>o</b>f <b>S.T.A.L.K.E.R.</b>
              </>
            }
            description="Experience the evolution of a beloved series with modern innovations while staying true to its roots in survival horror."
            isComingSoon
            type='image'
          />
        </BentoTilt>
      </div>
    </section>
  )
}

export default Features