// components/CustomCursor.tsx
'use client';

import { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isMoving, setIsMoving] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    let moveTimeout: NodeJS.Timeout;

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsMoving(true);
      
      clearTimeout(moveTimeout);
      
      moveTimeout = setTimeout(() => {
        if (!isHovering) {
          setIsMoving(false);
        }
      }, 100);
    };

    const addHoverListeners = () => {
      const interactiveElements = document.querySelectorAll('a, button, [role="button"], input, select, textarea, [tabindex]:not([tabindex="-1"])');
      
      interactiveElements.forEach((element) => {
        element.addEventListener('mouseenter', () => setIsHovering(true));
        element.addEventListener('mouseleave', () => setIsHovering(false));
      });
    };

    document.addEventListener('mousemove', handleMouseMove);
    addHoverListeners();

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(moveTimeout);
    };
  }, [isHovering]);

  return (
    <div
      className={`fixed pointer-events-none transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ease-out rounded-full
        ${isMoving
          ? 'w-12 h-12 bg-blue-500/50 blur-sm'
          : 'w-12 h-12 border-2 border-blue-500 bg-transparent'
        }
        ${isHovering
          ? 'w-32 h-32 opacity-0 scale-150'
          : 'opacity-100 scale-100'
        }`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    />
  );
};

export default CustomCursor;