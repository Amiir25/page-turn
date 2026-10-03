"use client";

import React, { ReactNode, useState } from "react";

type PropsType = {
  title: string;
  children: ReactNode;
};

export default function Collapsible({ title, children }: PropsType) {
  const [collapsed, setCollapsed] = useState(true);
  return (
    <section className="relative">
      <h2>{title}</h2>
      <div className="relative flex items-center gap-4">
        <div
          className={`absolute left-0 border border-white w-100 transition-all duration-200 ease-in-out overflow-y-auto
        ${collapsed ? "-top-2 h-0 opacity-0" : "top-0 h-40 opacity-100"}`}
        >
          {children}
        </div>
      </div>

      <span
          className="absolute top-1 -right-8"
          onClick={() => setCollapsed(!collapsed)}
        >
          ^
        </span>
    </section>
  );
}
