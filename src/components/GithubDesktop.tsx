'use client';

import React, { useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import { IoLockClosedOutline } from 'react-icons/io5';
import { IoGitBranch } from 'react-icons/io5';
import { ImSpinner11 } from 'react-icons/im';
import NavbarButton from './NavbarButton';
import { FaCheck } from 'react-icons/fa6';
import { motion } from 'motion/react';
import { TextBlock } from '@/interfaces/ITextBlock';

interface Props {
  informationCallback: React.Dispatch<React.SetStateAction<TextBlock>>;
}

const GithubDesktop = ({ informationCallback }: Props) => {
  const [sidebarActive, setSidebarActive] = useState('changes');
  const [xCord, setXCord] = useState(0);
  const [yCord, setYCord] = useState(0);

  const resetX = () => setXCord(0);
  const resetY = () => setYCord(0);

  const getRandomColor = () => {
    const colors = [
      'lime',
      'green',
      'teal',
      'cyan',
      'sky',
      'blue',
      'indigo',
      'violet',
      'purple',
      'fuchsia',
      'pink',
      'rose',
      'slate',
      'neutral',
    ];

    return colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <motion.div
      className="flex h-[878px] w-[1339px] flex-col rounded-xl bg-white"
      animate={{ x: xCord, y: yCord }}
      transition={{ duration: 0.7 }}
    >
      {/* Top Bar */}
      <div className="rounded-t-lg bg-[#24292e]">
        <div className="flex w-full items-center space-x-4 border-b border-b-neutral-950 px-2 py-1 text-xs text-neutral-300">
          <FaGithub size={16} />
          <span>File</span>
          <span>Edit</span>
          <span>View</span>
          <span>Repository</span>
          <span>Branch</span>
          <span>Help</span>
        </div>
        <div className="flex">
          <NavbarButton
            icon={<IoLockClosedOutline size={20} />}
            topText="Current repository"
            bottomText="repo1"
            largeWidth={true}
          />
          <NavbarButton
            icon={<IoGitBranch size={20} />}
            topText="Current branch"
            bottomText="branch1"
          />
          <NavbarButton
            icon={<ImSpinner11 size={16} />}
            topText="Fetch origin"
            bottomText="Last fetched just now"
            flipBold
            hideArrow
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-grow">
        {/* Sidebar */}
        <div className="flex w-1/4 flex-col justify-between border-r border-neutral-200">
          <div
            onClick={() => {
              setXCord(500);
              informationCallback({
                x: -350,
                y: 0,
                text: 'To see changes use the "git status" command',
                show: true,
              });
            }}
            className="h-full rounded-lg outline-0 outline-offset-4 outline-green-500 hover:z-100 hover:outline-6"
          >
            <div className="flex items-center justify-center text-sm text-neutral-800">
              <button
                className={`${sidebarActive === 'changes' ? 'border-b-4 border-b-[#0366d6]' : 'border-b'} w-full cursor-pointer border-r border-neutral-200 py-1`}
                onClick={() => setSidebarActive('changes')}
              >
                Changes (2)
              </button>
              <button
                className={`${sidebarActive === 'history' ? 'border-b-4 border-b-[#0366d6]' : ''} w-full cursor-pointer border-b border-neutral-200 py-1`}
                onClick={() => setSidebarActive('history')}
              >
                History
              </button>
            </div>
            {/* Files */}
            <ul className="text-xs">
              <li className="flex items-center justify-between border-b border-neutral-200 bg-neutral-100 px-1 py-2">
                <input type="checkbox" checked readOnly />
                <span>2 changed files</span>
                <input type="checkbox" checked readOnly className="opacity-0" />
              </li>
              <li className="flex items-center border-b border-neutral-200 p-1.5">
                <input type="checkbox" checked readOnly className="mr-2" />
                <span className="text-neutral-400">randomfolder\</span>package.json
              </li>
              <li className="flex items-center border-b border-neutral-200 bg-[#0366d6] p-1.5 text-white">
                <input type="checkbox" checked readOnly className="mr-2" />
                randomfolder\src\app\page.tsx
              </li>
            </ul>
          </div>
          {/* Commit window */}
          <div className="rounded-bl-xl bg-[#f6f8fa] p-2 text-xs">
            <div className="flex justify-between">
              <div className="mr-2 h-6 w-6 rounded-full bg-gray-400"></div>
              <input
                type="text"
                placeholder="Summary (required)"
                className="w-full rounded-lg border border-neutral-400 bg-white p-1"
                disabled
                value="Fixed some stuff"
              />
            </div>
            <textarea
              rows={5}
              cols={33}
              placeholder="Description"
              disabled
              className="mt-2 w-full resize-none rounded-lg border border-neutral-400 bg-white p-1"
            ></textarea>
            <button
              onClick={() => {
                setXCord(500);
                setYCord(-200);
                informationCallback({
                  x: -350,
                  y: 250,
                  text: 'To commit use "git commit", you can also use "git commit -m "example text" to commit with a message"',
                  show: true,
                });
              }}
              className="mt-2 w-full rounded-lg bg-[#0372ef] p-1 text-white outline-0 outline-offset-4 outline-indigo-500 hover:z-100 hover:outline-6"
            >
              Commit to <span className="font-bold">master</span>
            </button>
          </div>
        </div>

        {/* Code Diff Panel */}
        <div className="w-full text-xs">
          <div className="bg-neutral-100 p-1.5">
            <span className="text-neutral-400">randomfolder\src\app\</span>page.tsx
          </div>

          <ul>
            <li className="flex bg-[#f1f8ff] p-0.5">
              <div className="w-1/10 bg-[#dbedff]"></div>
              <span className="text-neutral-500">@@ -1,6 +1,6 @@</span>
            </li>

            <li className="flex p-0.5">
              <div className="flex w-1/10 bg-white"></div>
              <span>import C2 from '@/components/C2';</span>
            </li>

            <li className="flex bg-[#e6ffed]">
              <div className="flex w-1/10 bg-white p-0.5"></div>
              <span className="p-0.5">+ import C1 from '@/components/C1';</span>
            </li>

            <li className="flex p-0.5">
              <div className="flex w-1/10 bg-white"></div>
              <span>import C3 from '@/components/C3';</span>
            </li>

            <li className="flex bg-[#ffeef0]">
              <div className="flex w-1/10 bg-white p-0.5"></div>
              <span className="p-0.5">- import C4 from '@/components/C4';</span>
            </li>

            <li className="flex p-0.5">
              <div className="flex w-1/10 bg-white"></div>
              <span>import C3 from '@/components/C3';</span>
            </li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default GithubDesktop;
