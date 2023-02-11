import { ReactNode } from "react";

export type Command = {
  command: string;
  perm?: string[] | string;
  flags?: Flag[];
  usage?: ReactNode;
  translated?: boolean;
};

type Flag = {
  flag: string;
  usage: string;
};
