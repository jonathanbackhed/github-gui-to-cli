'use client';

import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { IoLockClosedOutline } from 'react-icons/io5';
import { IoGitBranch } from 'react-icons/io5';
import { ImSpinner11 } from 'react-icons/im';
import NavbarButton from './NavbarButton';

const GithubDesktop = () => {
  return (
    <div className="flex h-full w-full flex-col">
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
            icon={<ImSpinner11 size={20} />}
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
        <div className="w-1/4 bg-gray-200 p-4">
          <h2 className="text-lg font-bold">Current Repository</h2>
          <p className="text-sm text-gray-600">skinshop</p>
          <h2 className="mt-4 text-lg font-bold">Changes</h2>
          <ul className="text-sm">
            <li className="flex items-center py-1">
              <input type="checkbox" checked className="mr-2" /> frontend/package-lock.json
            </li>
            <li className="flex items-center py-1">
              <input type="checkbox" checked className="mr-2" /> frontend/package.json
            </li>
            <li className="flex items-center py-1">
              <input type="checkbox" checked className="mr-2" /> frontend/src/app/checkout/page.tsx
            </li>
            <li className="flex items-center py-1">
              <input type="checkbox" checked className="mr-2" />{' '}
              frontend/src/components/ItemCard.tsx
            </li>
          </ul>
        </div>

        {/* Code Diff Panel */}
        <div className="w-3/4 bg-white p-4 shadow-md">
          <h2 className="text-lg font-bold">frontend/src/components/ItemCard.tsx</h2>
          <div className="mt-2 rounded-md bg-gray-100 p-2 font-mono text-sm">
            <p className="text-red-600">- {'<p>{item.wear.name}</p>'}</p>
            <p className="text-green-600">+ {'<p className="text-xs">{item.wear.name}</p>'}</p>
          </div>
        </div>
      </div>

      {/* Commit Section */}
      <div className="flex w-full items-center bg-gray-200 p-4">
        <input
          type="text"
          placeholder="Summary (required)"
          className="w-1/2 rounded-md border border-gray-400 p-2"
        />
        <button className="ml-4 rounded-md bg-blue-600 px-4 py-2 text-white">
          Commit to master
        </button>
      </div>
    </div>
  );
};

export default GithubDesktop;
