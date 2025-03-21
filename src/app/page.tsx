'use client';

import AnimationLayer from '@/components/AnimationLayer';
import CenterImage from '@/components/CenterImage';
import GithubDesktop from '@/components/GithubDesktop';

export default function Home() {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center space-y-5 overflow-hidden">
      <AnimationLayer />
      {/* <CenterImage /> */}
    </div>
  );
}
