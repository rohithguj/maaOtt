import React from 'react'
import Image from 'next/image';

function BgImg() {
  return (
    <div>
      <div className="absolute inset-0">
        <Image
          src="/bgimg.jpeg"
          alt="Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="blur-sm"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-gray-900 opacity-75"></div>
      </div>
    </div>
  );
}

export default BgImg