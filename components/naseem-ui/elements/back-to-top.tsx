"use client";

import React, { FC, RefObject, useState, useEffect, useRef, useCallback } from "react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

type BackToTopTypes = {
  /** Horizontal padding relative to the attached corner */
  paddingX?: number;
  /** Vertical padding relative to the attached corner */
  paddingY?: number;
  /** Increase to the threshold of the scroll value that has to be passed for the button to appear */
  paddingThreshold?: number;
  corner?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  anchor: RefObject<HTMLElement | null>;
};

export const BackToTop: FC<BackToTopTypes> = ({ ...props }) => {
  const [visible, setVisible] = useState<boolean>(false);
  const [rect, _setRect] = useState<DOMRect | null>(null);
  const self = useRef<HTMLButtonElement>(null);
  const _rect = useRef(rect);
  const setRect = (data: DOMRect | null) => {
    _rect.current = data;
    _setRect(data);
  };

  const getCoords = () => {
    let anchor = props.anchor.current;
    if (anchor) {
      return [anchor.scrollTop, anchor.scrollLeft];
    }
    return [0, 0];
  };

  const onScroll = useCallback(() => {
    let [scrollTop] = getCoords();
    let rect = props.anchor.current?.getBoundingClientRect();
    if (rect) {
      setVisible(scrollTop >= rect.height + (props.paddingThreshold || 100));
    }
  }, [props.anchor, props.paddingThreshold]);

  const backToTop = () => {
    if (props.anchor.current) {
      props.anchor.current.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (!props.anchor.current) return;

    props.anchor.current.addEventListener("scroll", onScroll);
    onScroll();

    // Listens to rect changes. Alternatives like ResizeObserver & IntersectionObserver fail to detect positional changes consistently
    let interval = setInterval(() => {
      if (!props.anchor.current) return;

      let newRect = props.anchor.current.getBoundingClientRect();
      if (_rect.current == null) return setRect(newRect);

      if (
        !(
          _rect.current.top == newRect.top &&
          _rect.current.left == newRect.left &&
          _rect.current.width == newRect.width &&
          _rect.current.height == newRect.height
        )
      ) {
        setRect(newRect);
      }
    }, 100);

    return () => {
      props.anchor.current?.removeEventListener("scroll", onScroll);
      clearInterval(interval);
    };
  }, [onScroll, props.anchor]);

  const getStyles = () => {
    if (!props.anchor.current || !self.current) return {};

    let corner = props.corner || "bottom-right";
    let [vertical, horizontal] = corner.split("-");

    let anchorRect = props.anchor.current.getBoundingClientRect();
    let selfRect = self.current.getBoundingClientRect();

    let width = horizontal == "right" ? anchorRect.width - selfRect.width : 0;
    let height = vertical == "bottom" ? anchorRect.height - selfRect.height : 0;

    let style = {
      top: anchorRect.y + height + (vertical == "bottom" ? -1 : 1) * (props.paddingY || 10),
      left: anchorRect.x + width + (horizontal == "right" ? -1 : 1) * (props.paddingX || 25),
    };

    return style;
  };

  return (
    <Button
      className={cn(
        "fixed cursor-pointer rounded transition-all",
        visible
          ? "pointer-events-auto opacity-100"
          : "pointer-events-none opacity-0",
      )}
      onClick={backToTop}
      style={{
        ...getStyles(),
        transitionProperty: "opacity, background-color",
      }}
      ref={self}
      size="icon"
    >
      <svg
        className={cn(
          "h-6 w-6 shrink-0 rotate-180 transition-all",
        )}
        aria-label="Arrow Icon"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"></path>
      </svg>
    </Button>
  );
};
