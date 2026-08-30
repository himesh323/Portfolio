import { useState, useEffect } from 'react';

export function BootScreen() {
  const [hidden, setHidden] = useState(false);
  const [bootText, setBootText] = useState('');

  useEffect(() => {
    const lines = [
      'HIMESH_OS v1.0 — BOOT SEQUENCE INITIATED',
      'Loading kernel modules ......... OK',
      'Mounting /skills ............... OK',
      'Mounting /projects ............. OK',
      'Checking AI subsystem .......... OK',
      'Checking cloud uplink (AWS/OCI). OK',
      'Starting UI shell .............. OK',
      '',
      'Welcome, guest. Launching portfolio...',
    ];

    let lineIndex = 0;
    let charIndex = 0;
    let accumulatedText = '';

    function typeLine() {
      if (lineIndex >= lines.length) {
        setTimeout(() => setHidden(true), 400);
        return;
      }
      const currentLine = lines[lineIndex];
      const interval = setInterval(() => {
        accumulatedText += currentLine[charIndex] || '';
        setBootText(accumulatedText);
        charIndex++;
        if (charIndex > currentLine.length) {
          clearInterval(interval);
          accumulatedText += '\n';
          lineIndex++;
          charIndex = 0;
          setTimeout(typeLine, 90);
        }
      }, 12);
    }

    typeLine();

    const timeout = setTimeout(() => setHidden(true), 4500);
    return () => clearTimeout(timeout);
  }, []);

  if (hidden) return null;

  return (
    <div id="boot" onClick={() => setHidden(true)}>
      <div className="boot-lines">{bootText}</div>
      <div className="skip">[ click anywhere to skip ]</div>
    </div>
  );
}
