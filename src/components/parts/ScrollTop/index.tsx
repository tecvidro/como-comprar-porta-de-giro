'use client';
import { usePathname } from 'next/navigation';
import { ReactNode, useEffect } from 'react';

type ScrollToTopProps = {
  children: ReactNode
}

export default function ScrollToTop({ children }: ScrollToTopProps) {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return children;
}

