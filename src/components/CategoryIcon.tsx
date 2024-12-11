import React from 'react';
import { LucideIcon } from 'lucide-react';

interface CategoryIconProps {
  icon: LucideIcon;
  className?: string;
}

export default function CategoryIcon({ icon: Icon, className = "" }: CategoryIconProps) {
  return <Icon className={className} />;
}