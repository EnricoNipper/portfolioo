"use client"
import { TypeAnimation } from 'react-type-animation';

function TextEffect(name : string) {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        name,
        1500, // wait 1s before replacing "Mice" with "Hamsters"
        'web developer',
        1500,
        'designer',
        1500,
        'programmer',
        1500
      ]}

      speed={50}
      className='text-[2rem] md:text-[3rem] text-[#55e6a5] font-bold uppercase'
      repeat={Infinity} />
  );
}

export default TextEffect