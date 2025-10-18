import React, { ReactNode } from "react";

type LinkCustomProps = {
  children: ReactNode;
  link: string;
  title?: string;
  type?: "default" | "mail";
};

export default function LinkCustom({ children, link, title = "", type = "default" }: LinkCustomProps) {
  if (type === "mail") {
    return (
      <a href={`mailto:${link}`} title={title}>
        {children}
      </a>
    );
  }

  return (
    <a href={link} title={title} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}
