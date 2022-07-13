export const getYear = (date: string): string => {
  return new Date(date).getFullYear().toString();
};

export const getFullTime = (date: string): string => {
  const time = new Date(date);
  return time.toLocaleString().slice(0, 10).split(".").join("/");
};

export const getDateHomeCard = (str: string) => {
  return new Date(str).toDateString();
};

export const getDateMoviesKeywords = (str: string) => {
  return new Date(str).toDateString();
};

export const getTimeFromMins = (mins: number): string => {
  const hours = Math.trunc(mins / 60);
  const minutes = mins % 60;
  return `${hours} h ${minutes}  m`;
};

export const transformForPercent = (numb: number): number => {
  const result = numb * 10;
  return Number(result.toFixed(1));
};

export const transformNumberFromString = (budget: number): string => {
  const strBudget = String(budget);

  const result = strBudget.replace(/\s/g, "").replace(/(.{3})/g, "$1,");
  return result.substring(0, result.length - 1);
};

export const transformPathReviewPhoto = (str: string): string => {
  return str.slice(1, str.length);
};

export const isPathCheck = (str: string): string => {
  return str !== null
    ? str.includes("/https://www.gravatar.com/avatar")
      ? str.slice(1, str.length)
      : `://www.gravatar.com/avatar${str}`
    : "https://www.gravatar.com/avatar/992eef352126a53d7e141bf9e8707576.jpg";
};

export const transformReviewResponseDate = (str: string): string => {
  const newDate = new Date(str);
  return newDate.toUTCString().slice(5, 16);
};

export const croppingContent = (text: string): string => {
  return text.slice(0, 500);
};

export const transformRating = (rating: number) => {
  return Math.round(rating * 10);
};

export const dataClipping = (data: any[], cuttingLength: number) => {
  return data.slice(0, cuttingLength);
};
