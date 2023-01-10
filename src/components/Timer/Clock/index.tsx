import clockStyle from "./clock.module.scss";
export default function Clock() {
  return (
    <>
      <span className={clockStyle.clockNumber}>0</span>
      <span className={clockStyle.clockNumber}>0</span>
      <span className={clockStyle.clockDivider}>:</span>
      <span className={clockStyle.clockNumber}>0</span>
      <span className={clockStyle.clockNumber}>0</span>
    </>
  );
}
