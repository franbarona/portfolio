import {
  TypingText,
  TypingTextCursor,
} from '@/components/animate-ui/primitives/texts/typing';

interface TypingTextEffectProps {
  text: string;
  delay?: number;
  holdDelay?: number;
  loop?: boolean;
  cursor?: boolean;
}

export const TypingTextEffect = ({
  text,
  delay,
  holdDelay,
  loop,
  cursor,
}: TypingTextEffectProps) => {
  return (
    <TypingText
      key={`${delay}-${holdDelay}-${loop}-${cursor}`}
      delay={delay}
      holdDelay={holdDelay}
      text={text}
      loop={loop}
    >
      {cursor && <TypingTextCursor className="!h-5 !w-[2px] rounded-full ml-2" />}
    </TypingText>
  );
};