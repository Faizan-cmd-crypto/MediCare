"use client";

import { Heart, Plus } from "lucide-react";

export function Logo({ className }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="relative">
        <Heart className="h-8 w-8 text-primary animate-pulse" strokeWidth={2.5} />
        <Plus className="h-3 w-3 text-primary absolute -right-1 -top-1" strokeWidth={3} />
      </div>
      <span className="font-bold text-xl tracking-tight">MediVitals</span>
    </div>
  );
} 