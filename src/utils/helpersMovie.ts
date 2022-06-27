export const getYear = (date: string): string => {
  const newTime = new Date(date).getFullYear().toString();
  return newTime;
};

export const getFullTime = (date: string): string => {
  const time = new Date(date);
  const newTime = time.toLocaleString().slice(0, 10).split(".").join("/");
  return newTime;
};

export const getTimeFromMins = (mins: number): string => {
  const hours = Math.trunc(mins / 60);
  const minutes = mins % 60;
  const result = hours + "h" + " " + minutes + "m";
  return result;
};

export const transformForPercent = (numb: number): number => {
  const result = numb * 10;
  const fixedResult = Number(result.toFixed(1));
  return fixedResult;
};
