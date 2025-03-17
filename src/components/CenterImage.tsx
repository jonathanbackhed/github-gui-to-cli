'use client';

import React from 'react';
import Image from 'next/image';

const CenterImage = () => {
  return (
    <div className="relative">
      <Image
        src={'/GitHubDesktopExample.png'}
        width={1339}
        height={878}
        alt="Image of GitHub desktop app"
      />
      <div className="absolute inset-0 h-full w-full bg-orange-400 opacity-70">
        <div className="mt-6 grid grid-cols-12">
          <button className="cursor-pointer bg-red-400">CURRENT REPO</button>
          <button className="cursor-pointer bg-blue-400">BRANCH</button>
          <button className="cursor-pointer bg-yellow-400">FETCH</button>
        </div>
      </div>
    </div>
  );
};

export default CenterImage;
