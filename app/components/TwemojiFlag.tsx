// components/Flag.tsx
interface Props {
  countryCode: string; // 'fr', 'lu'
  size?: number;
  alt?: string;
}

export default function Flag({ countryCode, size = 24, alt }: Props) {
  return (
    <img
      src={`https://flagcdn.com/w${size * 2}/${countryCode.toLowerCase()}.png`}
      srcSet={`https://flagcdn.com/w${size * 4}/${countryCode.toLowerCase()}.png 2x`}
      width={size * 1.5}
      height={size}
      alt={alt ?? countryCode.toUpperCase()}
      style={{ display: 'inline-block', verticalAlign: 'middle' }}
    />
  );
}