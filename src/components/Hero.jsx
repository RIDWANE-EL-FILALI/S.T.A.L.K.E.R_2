import React, { useEffect, useState } from 'react'
import Button from './Button'
import { TiLocationArrow } from 'react-icons/ti';
import { GiRadioactive } from 'react-icons/gi';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/all";


gsap.registerPlugin(ScrollTrigger);


const Hero = () => {
    const [currentIndex, setCurrentIndex] = React.useState(1);
    const [hasClicked, setHasClicked] = React.useState(false);
    const [isLoading, setIsLoading] = React.useState(true);
    const [loadedVideos, setLoadedVideos] = React.useState(0);

    const totalVideos = 4;
    const nextVdRef = React.useRef(null);
    const upcamingVideoIndex = currentIndex % totalVideos + 1;

    const handleMiniVideoClick = () => {
        setHasClicked(true);
        console.log(upcamingVideoIndex);
        setCurrentIndex(upcamingVideoIndex);
    }

    const getVideoSrc = (index) => {
        return `/videos/${index}.mp4`
    }

    const handleVideoLoad = () => {
        setLoadedVideos((prev) => (prev % totalVideos) + 1);
    }

    useGSAP(() => {
        if (hasClicked) {
            gsap.set('#next-video', { visibility: 'visible' });
            gsap.to('#next-video', { transformOrigin: 'center center', scale: 1, width: '100%', height: '100%', duration: 1, ease: 'power1.inOut', onStart: () => nextVdRef.current.play(), });
            gsap.from('#current-video', { transformOrigin: 'center center', scale: 0, duration: 1.5, ease: 'power1.inOut' });
        }
    }, {
        dependencies: [currentIndex],
        revertOnUpdate: true,
    });


    useGSAP(() => {
        gsap.set('#video-frame', {
            clipPath: 'polygon(14% 0%, 72% 0%, 90% 90%, 0% 100%)',
            borderRadius: '0 0 40% 10%',
        })
        gsap.from('#video-frame', {
            clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
            borderRadius: '0 0 0 0',
            ease: 'power1.inOut',
            scrollTrigger: {
                trigger: '#video-frame',
                start: 'center center',
                end: 'bottom center',
                scrub: true
            }
        });
    });

    useEffect(() => {
        if (loadedVideos === totalVideos - 1) {
            setIsLoading(false);
        }
    }
        , [loadedVideos]);

    return (
        <div className="relative h-dvh w-screen overflow-x-hidden">
            {isLoading &&
                <div className='flex-center absolute z-[100] h-dvh w-screen overflow-hidden bg-black'>
                    <div className="loading-screen">
                        <svg viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg" className="loading-icon"><path d="M287.9 112c18.6 0 36.2 3.8 52.8 9.6 13.3-10.3 23.6-24.3 29.5-40.7-25.2-10.9-53-17-82.2-17-29.1 0-56.9 6-82.1 16.9 5.9 16.4 16.2 30.4 29.5 40.7 16.5-5.7 34-9.5 52.5-9.5zM163.6 438.7c12-11.8 20.4-26.4 24.5-42.4-32.9-26.4-54.8-65.3-58.9-109.6-8.5-2.8-17.2-4.6-26.4-4.6-7.6 0-15.2 1-22.5 3.1 4.1 62.8 35.8 118 83.3 153.5zm224.2-42.6c4.1 16 12.5 30.7 24.5 42.5 47.4-35.5 79.1-90.7 83-153.5-7.2-2-14.7-3-22.2-3-9.2 0-18 1.9-26.6 4.7-4.1 44.2-26 82.9-58.7 109.3zm113.5-205c-17.6-10.4-36.3-16.6-55.3-19.9 6-17.7 10-36.4 10-56.2 0-41-14.5-80.8-41-112.2-2.5-3-6.6-3.7-10-1.8-3.3 1.9-4.8 6-3.6 9.7 4.5 13.8 6.6 26.3 6.6 38.5 0 67.8-53.8 122.9-120 122.9S168 117 168 49.2c0-12.1 2.2-24.7 6.6-38.5 1.2-3.7-.3-7.8-3.6-9.7-3.4-1.9-7.5-1.2-10 1.8C134.6 34.2 120 74 120 115c0 19.8 3.9 38.5 10 56.2-18.9 3.3-37.7 9.5-55.3 19.9-34.6 20.5-61 53.3-74.3 92.4-1.3 3.7.2 7.7 3.5 9.8 3.3 2 7.5 1.3 10-1.6 9.4-10.8 19-19.1 29.2-25.1 57.3-33.9 130.8-13.7 163.9 45 33.1 58.7 13.4 134-43.9 167.9-10.2 6.1-22 10.4-35.8 13.4-3.7.8-6.4 4.2-6.4 8.1.1 4 2.7 7.3 6.5 8 39.7 7.8 80.6.8 115.2-19.7 18-10.6 32.9-24.5 45.3-40.1 12.4 15.6 27.3 29.5 45.3 40.1 34.6 20.5 75.5 27.5 115.2 19.7 3.8-.7 6.4-4 6.5-8 0-3.9-2.6-7.3-6.4-8.1-13.9-2.9-25.6-7.3-35.8-13.4-57.3-33.9-77-109.2-43.9-167.9s106.6-78.9 163.9-45c10.2 6.1 19.8 14.3 29.2 25.1 2.5 2.9 6.7 3.6 10 1.6s4.8-6.1 3.5-9.8c-13.1-39.1-39.5-72-74.1-92.4zm-213.4 129c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48z" /></svg>
                    </div>
                </div>}
            <div id='video-frame' className='relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-black'>
                <div>
                    <div className="mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg">
                        <div onClick={handleMiniVideoClick} className='origin-center'>
                            <video
                                ref={nextVdRef}
                                src={getVideoSrc(upcamingVideoIndex)}
                                loop
                                muted
                                id='current-video'
                                className='size-64 origin-center scale-150 object-cover object-center opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100 '
                                onLoadedData={handleVideoLoad}
                                onError={(e) => console.error('Video failed to load:', e)}>
                            </video>
                        </div>
                    </div>
                    <video src={getVideoSrc(currentIndex)} ref={nextVdRef} loop muted id='next-video' className='absolute-center invisible z-20 size-64 object-cover object-center' onLoadedData={handleVideoLoad} />
                    <video src={getVideoSrc(currentIndex === totalVideos ? totalVideos : currentIndex)} autoPlay loop muted className='absolute left-0 top-0 size-full object-cover object-center' onLoadedData={handleVideoLoad}></video>
                </div>
                <h1 className='special-font hero-heading absolute bottom-5 right-5 z-40 text-blue-100'>G<b>a</b>ming</h1>
                <div className="absolute left-0 top-0 z-40 size-full">
                    <div className='mt-24 px-5  sm:px-10 '>
                        <h1 className='special-font hero-heading text-blue-100'>S.T.A.L.<b>K</b>.E.R 2</h1>
                        <p className='mb-5 max-w-64 font-robert-regular text-blue-100'>Welcome to Chernobyl. <br /> Step Into the Zone</p>
                        <Button id="Watch trailer" title="watch-trailer" leftIcon={<GiRadioactive />} containerClass="bg-yellow-300 flex-center gap-1"></Button>
                    </div>
                </div>
            </div>
            <h1 className='special-font hero-heading absolute bottom-5 right-5  text-black'>G<b>a</b>ming</h1>
        </div>
    )
}

export default Hero