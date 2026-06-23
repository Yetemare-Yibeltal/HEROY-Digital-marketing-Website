"use client";

import { useEffect, useState } from "react";

interface TypewriterTextProps {
  words: string[];
  className?: string;
}

export default function TypewriterText({ words, className }: TypewriterTextProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const currentWord = words[currentWordIndex];

    if (isPaused) {
      const pauseTimer = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, 1800);
      return () => clearTimeout(pauseTimer);
    }

    const typingSpeed = isDeleting ? 60 : 110;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        const next = currentWord.slice(0, currentText.length + 1);
        setCurrentText(next);
        if (next === currentWord) {
          setIsPaused(true);
        }
      } else {
        const next = currentText.slice(0, currentText.length - 1);
        setCurrentText(next);
        if (next === "") {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, isPaused, currentWordIndex, words]);

  return (
    <span className={className}>
      {currentText}
      <span className="animate-pulse text-accent">|</span>
    </span>
  );
}