'use client';

import React from 'react';
import { clsx } from 'clsx';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  variant?: 'default' | 'interactive' | 'highlighted';
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

export const Card: React.FC<CardProps> = ({ 
  children, 
  className, 
  onClick,
  variant = 'default',
  padding = 'md'
}) => {
  return (
    <div
      onClick={onClick}
      className={clsx(
        'card',
        {
          // Variants
          'card-interactive hover-lift': variant === 'interactive',
          'gradient-border': variant === 'highlighted',
          
          // Padding
          'p-0': padding === 'none',
          'p-4': padding === 'sm',
          'p-5': padding === 'md',
          'p-6': padding === 'lg',
        },
        className
      )}
    >
      {children}
    </div>
  );
};

// Card sub-components for composition
export const CardHeader: React.FC<{ 
  children: React.ReactNode; 
  className?: string;
  action?: React.ReactNode;
}> = ({ children, className, action }) => (
  <div className={clsx('flex items-center justify-between mb-4', className)}>
    <div>{children}</div>
    {action}
  </div>
);

export const CardTitle: React.FC<{ 
  children: React.ReactNode; 
  className?: string;
}> = ({ children, className }) => (
  <h3 className={clsx('text-lg font-semibold text-content-primary', className)}>
    {children}
  </h3>
);

export const CardDescription: React.FC<{ 
  children: React.ReactNode; 
  className?: string;
}> = ({ children, className }) => (
  <p className={clsx('text-sm text-content-secondary mt-0.5', className)}>
    {children}
  </p>
);

export const CardContent: React.FC<{ 
  children: React.ReactNode; 
  className?: string;
}> = ({ children, className }) => (
  <div className={clsx(className)}>{children}</div>
);

export const CardFooter: React.FC<{ 
  children: React.ReactNode; 
  className?: string;
}> = ({ children, className }) => (
  <div className={clsx('mt-4 pt-4 border-t border-stroke-subtle', className)}>
    {children}
  </div>
);
