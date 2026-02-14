"use client";

interface WordLimitTextProps {
  text?: any; 
  wordLimit?: number;
}

const WordLimitText = ({ text, wordLimit = 70 }: WordLimitTextProps) => {
  if (typeof text !== "string") {
    return <span>{text}</span>;
  }

  const words = text.trim().split(/\s+/);

  return (
    <span>
      {words.length > wordLimit
        ? words.slice(0, wordLimit).join(" ") + "..."
        : text}
    </span>
  );
};

export default WordLimitText;
