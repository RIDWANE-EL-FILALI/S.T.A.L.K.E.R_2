import { useGSAP } from '@gsap/react'
import React from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import stalker from './../assets/stalker.png'
import AnimatedTitle from './AnimatedTitle'

gsap.registerPlugin(ScrollTrigger)

const About = () => {
    useGSAP(() => {
        const clipAnimation = gsap.timeline({
            scrollTrigger: {
                trigger : '#clip',
                start: 'center center',
                end: '+=800 center',
                scrub: 0.5,
                pin: true,
                pinSpacing: true,
            },
        })
        clipAnimation.to('.mask-clip-path', { width: '100vw', height: '100vh', borderRadius: '0' });
    });

  return (
    <div id='about' className='min-h-screen'>
        <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
            <h2 className="font-general text-sm uppercase md:text-[10px]">Welcome To S.T.A.L.K.E.R 2</h2>
            <AnimatedTitle title="D<b>o</b> you have <b>w</b>hat it takes to <b>b</b>rave the fallout and <b>u</b>nravel the mystery of <b>C</b>hernobyl’s forgotten <b>Z</b>one?" containerClass="mt-5 !text-black text-center" />
            <div className='about-subtext'>
                <p>Gear Up. Venture In. The Zone Awaits.</p>
                <p></p>
            </div>
        </div>
        <div className="h-dvh w-screen" id='clip'>
            <div className='mask-clip-path about-image'>
                <img src={stalker} alt="about-image" className='absolute left-0 top-0 size-full object-cover' />
            </div>
        </div>
    </div>
  )
}

export default About