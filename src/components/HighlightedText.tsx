interface HighlightedTextProps {
  text: string;
  highlights: string[];
}

export function HighlightedText({ text, highlights }: HighlightedTextProps) {
  let processedText = text;

  highlights.forEach(highlight => {
    processedText = processedText.replace(
      new RegExp(`(${highlight})`, 'gi'),
      '|||$1|||'
    );
  });

  return (
    <>
      {processedText.split('|||').map((part, i) => {
        const isHighlight = highlights.some(h => h.toLowerCase() === part.toLowerCase());
        return isHighlight ? (
          <span
            key={i}
            className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
          >
            {part}
          </span>
        ) : (
          <span key={i}>{part}</span>
        );
      })}
    </>
  );
}