'use client';

import { ReactNode } from 'react';

interface SectionProps {
  className?: string;
  children: ReactNode;
  id?: string; // 여기 추가
}

export default function Section({ className = '', children, id }: SectionProps) {
  return (
    <div id={id} className={`h-full w-full flex flex-col justify-center items-center px-6 ${className}`}>
      {children}
    </div>
  );
}
