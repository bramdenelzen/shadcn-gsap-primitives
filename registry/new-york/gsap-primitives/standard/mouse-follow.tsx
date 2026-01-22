"use client";

import * as React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { cn } from "@/lib/utils";

export interface MouseFollowProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "children"> {
  children?: React.ReactNode;
  /**
   * How quickly the cursor follows the mouse (0-1, higher is faster)
   * @default 0.15
   */
  ease?: number;
  /**
   * Whether to hide the default cursor
   * @default true
   */
  hideDefaultCursor?: boolean;
  /**
   * Scale factor when hovering over interactive elements
   * @default 1.5
   */
  hoverScale?: number;
  /**
   * Whether to enable hover scaling on interactive elements
   * @default true
   */
  enableHoverScale?: boolean;
  /**
   * Offset from the actual cursor position (in pixels)
   * @default { x: 0, y: 0 }
   */
  offset?: { x: number; y: number };
}

function MouseFollowComponent(
  {
    className,
    children,
    ease = 0.15,
    hideDefaultCursor = true,
    hoverScale = 1.5,
    enableHoverScale = true,
    offset = { x: 0, y: 0 },
    ...props
  }: MouseFollowProps,
  ref: React.Ref<HTMLDivElement>,
) {
  const cursorRef = React.useRef<HTMLDivElement>(null);
  const positionRef = React.useRef({ x: 0, y: 0 });
  const mousePositionRef = React.useRef({ x: 0, y: 0 });

  React.useImperativeHandle(ref, () => cursorRef.current!);

  // Track if hovering over interactive element
  const isHoveringRef = React.useRef(false);

  // Update mouse position and check hover state
  React.useEffect(() => {
    const currentCursorRef = cursorRef.current;
    
    const handleMouseMove = (e: MouseEvent) => {
      mousePositionRef.current = {
        x: e.clientX + offset.x,
        y: e.clientY + offset.y,
      };

      // Check if hovering over interactive element
      if (enableHoverScale && currentCursorRef) {
        const target = e.target as HTMLElement;
        const isInteractive = target.closest(
          'a, button, input, textarea, select, [role="button"], [onclick]',
        );

        if (isInteractive && !isHoveringRef.current) {
          isHoveringRef.current = true;
          gsap.to(currentCursorRef, {
            scale: hoverScale,
            duration: 0.3,
            ease: "power2.out",
          });
        } else if (!isInteractive && isHoveringRef.current) {
          isHoveringRef.current = false;
          gsap.to(currentCursorRef, {
            scale: 1,
            duration: 0.3,
            ease: "power2.out",
          });
        }
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      // Reset scale on cleanup
      if (currentCursorRef) {
        gsap.to(currentCursorRef, {
          scale: 1,
          duration: 0.3,
          ease: "power2.out",
        });
      }
      isHoveringRef.current = false;
    };
  }, [offset.x, offset.y, enableHoverScale, hoverScale]);

  // Animate cursor following mouse
  useGSAP(() => {
    if (!cursorRef.current) return;

    const ticker = () => {
      if (!cursorRef.current) return;

      const dx = mousePositionRef.current.x - positionRef.current.x;
      const dy = mousePositionRef.current.y - positionRef.current.y;

      positionRef.current.x += dx * ease;
      positionRef.current.y += dy * ease;

      gsap.set(cursorRef.current, {
        x: positionRef.current.x,
        y: positionRef.current.y,
      });
    };

    gsap.ticker.add(ticker);

    return () => {
      gsap.ticker.remove(ticker);
    };
  }, [ease]);

  // Hide default cursor on mount
  React.useEffect(() => {
    if (hideDefaultCursor) {
      const style = document.createElement("style");
      style.id = "mouse-follow-cursor-hide";
      style.innerHTML = `
        *, *::before, *::after {
          cursor: none !important;
        }
        html {
          cursor: none !important;
        }
      `;
      document.head.appendChild(style);
      
      // Also set on html and body elements directly
      document.documentElement.style.cursor = "none";
      document.body.style.cursor = "none";
      
      return () => {
        const existingStyle = document.getElementById("mouse-follow-cursor-hide");
        if (existingStyle) {
          existingStyle.remove();
        }
        document.documentElement.style.cursor = "";
        document.body.style.cursor = "";
      };
    }
  }, [hideDefaultCursor]);

  return (
    <div
      ref={cursorRef}
      className={cn(
        "pointer-events-none fixed left-0 top-0 z-[9999]",
        "-translate-x-1/2 -translate-y-1/2",
        className,
      )}
      {...props}
    >
      {children || (
        <div className="h-6 w-6 rounded-full bg-foreground/50 backdrop-blur-sm" />
      )}
    </div>
  );
}

export const MouseFollow = React.forwardRef<HTMLDivElement, MouseFollowProps>(
  MouseFollowComponent,
);

MouseFollow.displayName = "MouseFollow";
