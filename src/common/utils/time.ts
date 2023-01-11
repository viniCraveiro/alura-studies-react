export function timeForSecond(time: string) {
  const [hour = "0", min = "0", sec = "0"] = time.split(":");

  const hourForSecond = Number(hour) * 3600;
  const minutesForSecond = Number(min) * 60;

  return hourForSecond + minutesForSecond + Number(sec)
}
