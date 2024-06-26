import React from 'react';

import Link from 'components/shared/link';

const TopBanner = () => (
  <div className="relative flex h-[48px] flex-row items-center justify-center space-x-6 overflow-hidden bg-black py-2 sm:h-auto sm:flex-col sm:space-x-0 sm:space-y-1 sm:pb-5">
    <div className="flex flex-row items-center">
      <span className="font-sans text-lg font-medium leading-none text-white md:text-base">
        CFPs open until 17th July
      </span>
    </div>
    <Link theme="orange" size="lg" to="https://sessionize.com/ebpf-summit-2024/" target="_blank">
      Submit a talk proposal
    </Link>
  </div>
);

export default TopBanner;
