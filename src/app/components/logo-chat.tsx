import React, { useEffect, useState } from 'react';

interface TypewriterEffectProps {
  text: string;
  speed: number;
}

const TypewriterEffect: React.FC<TypewriterEffectProps> = ({ text, speed }) => {
  const [content, setContent] = useState('');

  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      setContent((content) => content + text.charAt(index++));
      if(index > text.length){
        clearInterval(intervalId);
      }
    }, speed);
    return () => clearInterval(intervalId);
  }, [text, speed]);

  return <>{content}</>;
};

export default TypewriterEffect;
