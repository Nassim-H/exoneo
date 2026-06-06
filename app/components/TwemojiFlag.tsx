// components/Flag.tsx
interface Props {
  countryCode: string;
  size?: number;
  alt?: string;
}

export default function Flag({ countryCode, size = 20 }: Props) {
  return (
    <img
      src={`https://flagcdn.com/w40/${countryCode.toLowerCase()}.png`}
      width={size * 1.5}
      height={size}
      alt={countryCode.toUpperCase()}
      style={{ display: 'inline-block', verticalAlign: 'middle' }}
    />
  );
}