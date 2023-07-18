// https://blog.logrocket.com/adding-emojis-react-app/';
export interface EmojiProps {
  label?: string;
  symbol: string;
}

export default function Emoji(props: EmojiProps) {
  const { label, symbol } = props;
  return (
    <span
      className="emoji"
      role="img"
      aria-label={label ? props.label : ""}
      aria-hidden={label ? "false" : "true"}
    >
      {symbol}
    </span>
  );
}
