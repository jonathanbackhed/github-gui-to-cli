'use client';

import React, { useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import { IoLockClosedOutline } from 'react-icons/io5';
import { IoGitBranch } from 'react-icons/io5';
import { ImSpinner11 } from 'react-icons/im';
import NavbarButton from './NavbarButton';

const GithubDesktop = () => {
  const [sidebarActive, setSidebarActive] = useState('changes');

  return (
    <div className="flex h-full w-full flex-col rounded-xl bg-white">
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
          <div>
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
                <input type="checkbox" checked className="" />
                <span>2 changed files</span>
                <input type="checkbox" checked readOnly className="opacity-0" />
              </li>
              <li className="flex items-center border-b border-neutral-200 p-1.5">
                <input type="checkbox" checked readOnly className="mr-2" />
                <span className="text-neutral-400">randomfolder\</span>package.json
              </li>
              <li className="flex items-center border-b border-neutral-200 p-1.5">
                <input type="checkbox" checked readOnly className="mr-2" />
                <span className="text-neutral-400">randomfolder\src\app\</span>page.tsx
              </li>
            </ul>
          </div>
          {/* Commit window */}
          <div className="bg-[#f6f8fa] p-2 text-xs">
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
            <button className="mt-2 w-full rounded-lg bg-[#0372ef] p-1 text-white">
              Commit to <span className="font-bold">master</span>
            </button>
          </div>
        </div>

        {/* Code Diff Panel */}
        <div className="w-3/4 p-4">
          {/* <h2 className="text-lg font-bold">frontend/src/components/ItemCard.tsx</h2>
          <div className="mt-2 rounded-md bg-gray-100 p-2 font-mono text-sm">
            <p className="text-red-600">- {'<p>{item.wear.name}</p>'}</p>
            <p className="text-green-600">+ {'<p className="text-xs">{item.wear.name}</p>'}</p>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default GithubDesktop;
