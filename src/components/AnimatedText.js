
import React, { useEffect, useRef } from "react";
import { Typography } from "@mui/material";
import gsap from "gsap";

const AnimatedText = ({ text, variant , fontSize }) => {
  const containerRef = useRef(null);
  const tl = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Kill any previous animation timeline
    if (tl.current) tl.current.kill();

    const spans = containerRef.current.querySelectorAll("span");
    gsap.set(spans, { opacity: 0, y: 20 });
    tl.current = gsap.to(spans, {
      opacity: 1,
      y: 0,
      stagger: 0.1,
      duration: 0.9,
      ease: "power2.out"
    });
  }, [text]); 

  const getWords = (txt) =>
    txt.split(" ").map((word, i) => (
      <span
        key={i}
        style={{ display: "inline-block", willChange: "transform, opacity" }}
      >
        {word}&nbsp;
      </span>
    ));

  return (
    <Typography
      ref={containerRef}
      variant={variant}
      fontWeight="bold"
      sx={{ px: { xs: 2, sm: 30 }, fontSize }}
    >
      {getWords(text)}
    </Typography>
  );
};

export default AnimatedText;
