import clockStyle from "./clock.module.scss";

interface Props {
  time: number | undefined;
}

export default function Clock({ time = 0 }: Props) {
  const min = Math.floor(time / 60);
  const sec = time % 60;
  const [minTen, minUnd] = String(min).padStart(2, "0");
  const [secTen, secUnd] = String(sec).padStart(2, "0");
  return (
    <>
      <span className={clockStyle.clockNumber}>{minTen}</span>
      <span className={clockStyle.clockNumber}>{minUnd}</span>
      <span className={clockStyle.clockDivider}>:</span>
      <span className={clockStyle.clockNumber}>{secTen}</span>
      <span className={clockStyle.clockNumber}>{secUnd}</span>
    </>
  );
}
