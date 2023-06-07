'use client';

import ThemeSwitcher from './theme-switcher';

const Header = () => {
  return (
    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div className="relative flex h-16 items-center justify-between">
        <div className="absolute inset-x-0 bottom-0 h-px bg-slate-900/5"></div>
        <div className="flex items-center justify-center">
          <div className="flex flex-shrink-0 items-center">
            <a className="font-bold text-xl dark:text-slate-50">大胖猫 ♥ Web</a>
          </div>
        </div>
        <ThemeSwitcher />
      </div>
    </div>
  );
};

export default Header;
