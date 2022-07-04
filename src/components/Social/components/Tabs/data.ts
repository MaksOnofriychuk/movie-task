export const Comments: TComments[] = [
  {
    id: 1,
    text: "Doctor Strange in the Multiverse of Madness is going to be an amazing movie",
    status: "Open",
    count: 2,
    date: "Jun 26, 2022 at 4:55 PM",
    nameBy: "aholejones",
  },
  {
    id: 2,
    text: "Doctor Strange and the Midlife Crisis",
    status: "Open",
    count: 0,
    date: "Jun 24, 2022 at 4:00 PM",
    nameBy: "D-magic",
  },
  {
    id: 3,
    text: "Why only dream walk?",
    status: "Open",
    count: 1,
    date: "May 26, 2022 at 1:18 AM",
    nameBy: "Celluloid Fan",
  },
];

export type TComments = {
  id: number;
  text: string;
  status: string;
  count: number;
  date: string;
  nameBy: string;
};
