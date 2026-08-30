import { useEffect, useState, useCallback } from 'react';

interface TypeWriterProps {
  words: string[];
  speed?: number;
  deleteSpeed?: number;
  pauseDuration?: number;
}

export function TypeWriter({
  words,
  speed = 80,
  deleteSpeed = 40,
  pauseDuration = 1500,
}: TypeWriterProps) {
  const [displayText, setDisplayText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const tick = useCallback(() => {
    const currentWord = words[wordIndex];

    if (!isDeleting) {
      setDisplayText(currentWord.slice(0, displayText.length + 1));
      if (displayText.length + 1 === currentWord.length) {
        setTimeout(() => setIsDeleting(true), pauseDuration);
        return;
      }
    } else {
      setDisplayText(currentWord.slice(0, displayText.length - 1));
      if (displayText.length - 1 === 0) {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
        return;
      }
    }
  }, [displayText, isDeleting, wordIndex, words, pauseDuration]);

  useEffect(() => {
    const timeout = setTimeout(tick, isDeleting ? deleteSpeed : speed);
    return () => clearTimeout(timeout);
  }, [tick, isDeleting, deleteSpeed, speed]);

  return (
    <span className="inline-flex items-center">
      <span className="gradient-text font-semibold">{displayText}</span>
      <span className="typing-cursor" />
    </span>
  );
}
