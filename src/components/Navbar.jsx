import React, { useEffect, useRef } from 'react'
import { useState } from 'react'
import logo from './../assets/logo.png'
import { TiLocationArrow } from 'react-icons/ti';
import Button from './Button';
import clsx from 'clsx';
import { useWindowScroll } from 'react-use';
import { gsap } from 'gsap';

const navItems = [
    {
        title: 'Home',
        link: '#'
    },
    {
        title: 'About',
        link: '#about'
    },
    {
        title: 'Features',
        link: '#features'
    },
    {
        title: 'Buy',
        link: '#buy'
    },
]

const Navbar = () => {
    const navContainerRef =  useRef(null);
    const audioElementRef = useRef(null);
    const [isAudioPlaying, setIsAudioPlaying] = useState(false);
    const [isIndicatorActive, setIsIndicatorActive] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isNavVisible, setIsNavVisible] = useState(true);

    const { y: currentScrollY } = useWindowScroll();

    useEffect(() => {
        if (currentScrollY > 100) {
            navContainerRef.current.classList.add('bg-white', 'shadow-md');
        } else {
            navContainerRef.current.classList.remove('bg-white', 'shadow-md');
        }
    }, [currentScrollY, lastScrollY])

    const toggleAudioIndicator = () => {
        setIsAudioPlaying(!isAudioPlaying);
        setIsIndicatorActive(!isIndicatorActive);
    }

    useEffect(() => {
       if (currentScrollY === 0) {
              setIsNavVisible(true);
              navContainerRef.current.classList.remove('floating-nav');
         }
        else if (currentScrollY > lastScrollY) {
            setIsNavVisible(false);
            navContainerRef.current.classList.add('floating-nav');
        } else if (currentScrollY < lastScrollY) {
            setIsNavVisible(true);
            navContainerRef.current.classList.add('floating-nav');
        }
        setLastScrollY(currentScrollY);
    }, [currentScrollY, lastScrollY]);

    useEffect(() => {
        gsap.to(navContainerRef.current, { y: isNavVisible ? 0 : -100, opacity: isNavVisible ? 1 : 0, duration: 0.2, ease: 'power2.inOut' }); 
    }, [isNavVisible])

    useEffect(() => {
        const bars = document.querySelectorAll(".bar");
        bars.forEach((item) => {
          item.style.animationDuration = `${Math.random() * (0.7 - 0.2) + 0.2}s`;
        });
      }, [isIndicatorActive]);


  return (
    <div ref={navContainerRef} className='fixed inset-x-0 top-4 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6'>
        <header className='absolute top-1/2 w-full -translate-y-1/2'>
            <nav className='flex size-full items-center justify-between p-4'>
                <div className='flex items-center gap-7'>
                    <img src={logo} alt="logo" className='w-20'/>
                    <Button id="product-button" title="products" rightIcon={<TiLocationArrow />} containerClass="bg-blue-50 md:flex hidden items-center justify-center gap-1" /> 
                </div>
                <div className="flex h-full items-center">
                    <div className="hidden md:block">
                        {navItems.map((item, index) => (
                            <a key={index} href={item.link} className='nav-hover-btn'>{item.title}</a>
                        ))}
                    </div>
                    <button className="ml-10 flex items-center space-x-0.5" onClick={toggleAudioIndicator} >
                        <audio src="/audio/apocalypse.mp3" ref={audioElementRef} className='hidden' loop />
                        <div className="sound-wave">
                            {[...Array(10)].map((_, index) => (
                            <div key={index} className={`bar ${isAudioPlaying ? "active" : ""}`} ></div>
                            ))}
                        </div>
                    </button>
                </div>
            </nav>
        </header>
    </div>
  )
}

export default Navbar