import React from 'react'
import contact1 from '/images/contact.jpeg'
import contact2 from '/images/contact2.jpeg'
import contact3 from '/images/contact3.jpeg'
import AnimatedTitle from './AnimatedTitle'
import Button from './Button'

const ImageClipBox = ({ src, clipClass }) => (
    <div className={clipClass}>
      <img src={src} />
    </div>
  );
  


const Buy = () => {
  return (
    <div id="buy" className="my-20 min-h-96 w-screen  px-10">
      <div className="relative rounded-lg bg-black py-24 text-blue-50 sm:overflow-hidden">
        <div className="flex flex-col items-center text-center">
          <AnimatedTitle
            title="<b>l</b>et&#39;s d<b>iv</b>e into <br /> the <b>z</b>one t<b>o</b>gether."
            className="special-font !md:text-[6.2rem] w-full font-zentry !text-5xl !font-black !leading-[.9]"
          />

          <Button title="Buy Now" containerClass="mt-10 cursor-pointer bg-yellow-400" />
        </div>
    </div>
    </div>
  )
}

export default  Buy