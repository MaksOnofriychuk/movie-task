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
  const result = `${hours} h ${minutes}  m`;
  return result;
};

export const transformForPercent = (numb: number): number => {
  const result = numb * 10;
  const fixedResult = Number(result.toFixed(1));
  return fixedResult;
};

export const transformNumberFromString = (budget: number): string => {
  const strBudget = String(budget);

  const result = strBudget.replace(/\s/g, "").replace(/(.{3})/g, "$1,");
  const slicedResult = result.substring(0, result.length - 1);
  return slicedResult;
};

export const transformPathReviewPhoto = (str: string): string => {
  const newPath = str.slice(1, str.length);
  return newPath;
};

export const isPathCheck = (str: string): string => {
  const resultPath =
    str !== null
      ? str.includes("/https://www.gravatar.com/avatar")
        ? str.slice(1, str.length)
        : `https://www.gravatar.com/avatar${str}`
      : "https://www.gravatar.com/avatar/992eef352126a53d7e141bf9e8707576.jpg";
  return resultPath;
};

export const transformReviewResponseDate = (str: string): string => {
  const newDate = new Date(str);
  const resultDate = newDate.toUTCString().slice(5, 16);
  return resultDate;
};

export const croppingContent = (text: string): string => {
  const newContent = text.slice(0, 500);
  return newContent;
};
