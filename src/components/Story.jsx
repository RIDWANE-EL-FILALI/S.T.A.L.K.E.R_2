import React from 'react'
import AnimatedTitle from './AnimatedTitle'
import story from '/images/cover.jpeg'
import { useRef } from 'react'
import { gsap } from 'gsap'
import RoundedCorners from './RoundedCorners'
import Button from './Button'


const Story = () => {
    const frameRef = useRef(null);

    const handleMouseLeave = () => {
        const element = frameRef.current;
        if (!element) return;
        gsap.to(element, {
            rotateX: 0,
            rotateY: 0,
            duration: 0.3,
            transformPerspective: 500,
            ease: 'power1.inOut,'
        });
    }

    const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const element = frameRef.current;

        if (!element) return;
        const rect = element.getBoundingClientRect();
        const x = clientX - rect.left;
        const y = clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = ((y - centerY) / centerY) * -2;
        const rotateY = ((x - centerX) / centerX) * 2;

        gsap.to(element, {
            rotateX,
            rotateY,
            duration: 0.3,
            transformPerspective: 500,
            ease: 'power1.inOut,'
        });
    }


  return (
    <section id="story" className="min-h-dvh w-screen bg-black text-blue-50">
        <div className="flex size-full flex-col items-center  py-10 pb-24">
            <p className='font-general text-sm uppercase md:text-[10px] text-yellow-400'>Where the laws of nature break, your story begins.</p>
            <div className="relative size-full">
                <AnimatedTitle title="THE ST<b>O</b>RY OF <br /> THE <b>ZONE</b>" sectionId="#story" containerClass="mt-5 pointer-events-none mix-blend-difference relative z-10" />
                <div className="story-img-container">
                    <div className='story-img-mask'>
                        <div className='story-img-content'>
                            <img src={story} alt="story" className='object-contain' ref={frameRef} onMouseLeave={handleMouseLeave} onMouseUp={handleMouseLeave} onMouseEnter={handleMouseLeave} onMouseMove={handleMouseMove} />
                        </div>
                    </div>
                    <RoundedCorners />
                </div>
            </div>
            <div className="-mt-80 flex w-full justify-center md:-mt-64 md:me-44 md:justify-end">
                <div className="flex h-full w-fit flex-col items-center md:items-start">
                    <p className="mt-3 max-w-sm text-center font-circular-web text-violet-50 md:text-start">Will you become a legend of the Zone or another lost soul in its depths?</p>
                    <Button id="realm-button" title="Official website" containerClass="mt-5 bg-yellow-400"></Button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Story