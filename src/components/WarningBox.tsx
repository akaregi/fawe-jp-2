import { ReactNode } from "react";

export default function WarningBox({ children }: { children?: ReactNode }) {
  return (
    <aside className="rounded-md px-5 py-1 bg-orange-100">{children}</aside>
  );
}
