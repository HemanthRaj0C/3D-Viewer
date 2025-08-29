"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from './Button';

export const NavBar: React.FC = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="w-full border-b-4 border-black bg-brutal-surface brutal-shadow mb-8 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="font-black tracking-tight text-xl flex items-center gap-2">
          <span className="bg-brutal-accent text-brutal-bg px-2 py-1 brutal-border">3D</span>
          <span>Viewer</span>
        </Link>
        <div className="flex items-center gap-4">
          <button
            className="md:hidden btn-brutal btn-surface px-3 py-2 text-xs"
            aria-label="Toggle navigation"
            onClick={() => setOpen(o => !o)}
          >
            {open ? 'CLOSE' : 'MENU'}
          </button>
          <nav className="hidden md:flex items-center gap-3">
            <Button variant="surface" className="text-sm px-3 py-2">
                <Link href="/">Home</Link>
            </Button>
            <Button variant="secondary" className="text-sm px-3 py-2">Models</Button>
            <Button variant="surface" className="text-sm px-3 py-2">About</Button>
          </nav>
        </div>
      </div>
      {/* Mobile panel */}
      {open && (
        <div className="md:hidden px-4 pb-4 animate-[fadeIn_.25s_ease]">
          <div className="brutal-border brutal-card brutal-shadow space-y-3 p-4">
            <Button variant="surface" className="w-full text-xs">
              <Link onClick={() => setOpen(false)} href="/">Home</Link>
            </Button>
            <Button onClick={() => setOpen(false)} variant="secondary" className="w-full text-xs">Models</Button>
            <Button onClick={() => setOpen(false)} variant="surface" className="w-full text-xs">About</Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default NavBar;
