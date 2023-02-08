import { ReactNode } from "react";

export type Command = {
  command: string;
  perm?: string;
  flags?: Flag[];
  usage?: ReactNode;
};

type Flag = {
  flag: string;
  usage: string;
};
