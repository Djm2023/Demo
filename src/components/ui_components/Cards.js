import React from 'react';

export function Card({ children }) {
  return (
    <div className="rounded-2xl border bg-white text-black shadow-sm hover:shadow-md transition-shadow">
      {children}
    </div>
  );
}