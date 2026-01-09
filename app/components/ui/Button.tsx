'use client';

import React from 'react';
import { clsx } from 'clsx';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  kbd?: string;
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      isLoading = false,
      leftIcon,
      rightIcon,
      kbd,
      children,
      className,
      disabled,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={clsx(
          // Base
          'inline-flex items-center justify-center gap-2 font-semibold rounded-lg',
          'transition-all duration-fast ease-out',
          'focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-bg-base',
          'disabled:opacity-50 disabled:cursor-not-allowed',
          'press-effect',
          
          // Variants
          {
            // Primary
            'bg-brand text-content-inverse hover:bg-brand-hover hover:shadow-glow-sm active:shadow-none':
              variant === 'primary',
            
            // Secondary
            'bg-bg-elevated text-content-primary border border-stroke-default hover:bg-bg-hover hover:border-stroke-strong':
              variant === 'secondary',
            
            // Ghost
            'bg-transparent text-content-secondary hover:bg-bg-hover hover:text-content-primary':
              variant === 'ghost',
            
            // Danger
            'bg-status-error text-content-primary hover:bg-red-600':
              variant === 'danger',
          },
          
          // Sizes
          {
            'h-7 px-2.5 text-xs gap-1.5': size === 'sm',
            'h-9 px-4 text-sm': size === 'md',
            'h-11 px-5 text-base': size === 'lg',
          },
          
          className
        )}
        {...props}
      >
        {isLoading ? (
          <>
            <svg
              className="animate-spin h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="3"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            <span>Loading...</span>
          </>
        ) : (
          <>
            {leftIcon && (
              <span className="flex-shrink-0 -ml-0.5 transition-transform duration-fast group-hover:scale-110">
                {leftIcon}
              </span>
            )}
            <span>{children}</span>
            {rightIcon && (
              <span className="flex-shrink-0 -mr-0.5 transition-transform duration-fast">
                {rightIcon}
              </span>
            )}
            {kbd && (
              <kbd className="kbd ml-1 opacity-60">{kbd}</kbd>
            )}
          </>
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';

// Icon-only button variant
interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  tooltip?: string;
  children: React.ReactNode;
}

export const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ variant = 'default', size = 'md', tooltip, children, className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={clsx(
          'icon-btn',
          {
            'w-7 h-7': size === 'sm',
            'w-9 h-9': size === 'md',
            'w-11 h-11': size === 'lg',
          },
          tooltip && 'tooltip',
          className
        )}
        data-tooltip={tooltip}
        {...props}
      >
        {children}
      </button>
    );
  }
);

IconButton.displayName = 'IconButton';
