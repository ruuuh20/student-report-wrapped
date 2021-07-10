import React, { useEffect, useRef } from "react"
import gsap, { Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)
gsap.core.globals("ScrollTrigger", ScrollTrigger)

export const RevealLeft = ({ children }) => {
  const revealRef = useRef(null);
  
  useEffect(() => {
    gsap.tl = gsap.timeline({
      paused: true,
      scrollTrigger: {
        trigger: revealRef.current,
        scrub: 1,
        start: "top bottom",
        // markers: true
      }
    });
    gsap.tl.to(revealRef.current, {
      x: '100vw'
    });
  }, []);

  return <div className="reveal-left" ref={revealRef}>{children}</div>;
};

export const ImageParallax = ({ children }) => {
  const revealRef = useRef(null);
  useEffect(() => {

    gsap.tl = gsap.timeline({
      paused: true,
      scrollTrigger: {
        trigger: revealRef.current,
        scrub: 1,
        start: "top bottom",
        // markers: true
      }
    });
    gsap.tl.to(revealRef.current, {
      y: '-5vw'
    });
  }, []);

  return <div className="parallax-bg" ref={revealRef}>{children}</div>;
}

export const RevealRight = ({ children }) => {
  const revealRef = useRef(null);
  
  useEffect(() => {
    gsap.tl = gsap.timeline({
      paused: true,
      scrollTrigger: {
        trigger: revealRef.current,
        scrub: 1,
        start: "top bottom",
        // markers: true
      }
    });
    gsap.tl.to(revealRef.current, {
      x: '-100vw'
    });
  }, []);

  return <div className="reveal-right" ref={revealRef}>{children}</div>;
};

export const GradientRevealRight = ({ children }) => {
  const revealRef = useRef(null);

  useEffect(() => {
    gsap.to(revealRef.current, {
      scrollTrigger: revealRef.current,
      width: '100%',
      ease: Power3.easeInOut,
      duration: 2
    });
  }, []);

  return <div className="w-0 h-full gradient-ltr absolute top-0 right-0 z-0 block bleed-right" ref={revealRef}>{children}</div>;
};

export const GradientRevealRightLarge = ({ children }) => {
  const revealRef = useRef(null);

  useEffect(() => {
    gsap.to(revealRef.current, {
      scrollTrigger: revealRef.current,
      width: '160%',
      ease: Power3.easeInOut,
      duration: 2
    });
  }, []);

  return <div className="w-0 h-almostFull gradient-ltr absolute top-0 right-0 z-0 block bleed-right mb-12" ref={revealRef}>{children}</div>;
};

export const GradientRevealLeft = ({ children }) => {
  const revealRef = useRef(null);

  useEffect(() => {
    gsap.to(revealRef.current, {
      scrollTrigger: revealRef.current,
      width: '100%',
      ease: Power3.easeInOut,
      duration: 2
    });
  }, []);

  return <div className="w-0 h-full gradient-ltr absolute top-0 left-0 z-0 block bleed-left" ref={revealRef}>{children}</div>;
};

export const ImageReveal = ({ children }) => {
  const revealRef = useRef(null);

  useEffect(() => {
    gsap.to(revealRef.current, {
      scrollTrigger: revealRef.current,
      y: '-100%',
      ease: Power3.easeInOut,
      duration: 2
    });
  }, []);

  return <div className="reveal-image z-20 h-full bg-purple absolute bottom-0 left-0 right-0" ref={revealRef}>{children}</div>;
};

export const BlockRevealLeft = ({ children }) => {
  const revealRef = useRef(null);

  useEffect(() => {
    gsap.to(revealRef.current, {
      scrollTrigger: revealRef.current,
      width: '88.8%',
      ease: Power3.easeInOut,
      duration: 2
    });
  }, []);

  return <div className="w-0 h-full bg-purple absolute top-0 left-0 z-0 block bleed-left" ref={revealRef}>{children}</div>;
};

export const BlockRevealRight = ({ children }) => {
  const revealRef = useRef(null);

  useEffect(() => {
    gsap.to(revealRef.current, {
      scrollTrigger: revealRef.current,
      width: '88.8%',
      ease: Power3.easeInOut,
      duration: 2
    });
  }, []);

  return <div className="w-0 h-full bg-purple absolute top-0 right-0 z-0 block bleed-right" ref={revealRef}>{children}</div>;
};