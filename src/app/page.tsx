import CenterImage from '@/components/CenterImage';
import GithubDesktop from '@/components/GithubDesktop';

export default function Home() {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="h-[878px] w-[1339px]">
        <GithubDesktop />
      </div>
      {/* <CenterImage /> */}
    </div>
  );
}
