'use client';

import React, { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import GithubDesktop from './GithubDesktop';
import { TextBlock } from '@/interfaces/ITextBlock';

const AnimationLayer = () => {
  const [information, setInformation] = useState<TextBlock>({ x: 0, y: 0, text: '', show: false });

  return (
    <>
      <AnimatePresence initial={false}>
        {information.show ? (
          <motion.div
            initial={{ opacity: 0, x: information.x, y: information.y }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute flex h-80 w-80 items-center text-xl text-white"
          >
            <p className="rounded-xl bg-neutral-800 p-4">{information.text}</p>
          </motion.div>
        ) : null}
      </AnimatePresence>
      {/* <div className="h-64 w-64 bg-blue-500"></div> */}
      <div className="h-[878px] w-[1339px]">
        <GithubDesktop informationCallback={setInformation} />
      </div>
    </>
  );
};

export default AnimationLayer;
