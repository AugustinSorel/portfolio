export type TimelineContent = {
  title: string;
  location: string;
  text: string[];
  date: string;
};

export type TimelineData = {
  title: string;
  content: TimelineContent[];
};
