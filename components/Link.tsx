import { FC } from "react";
import { Link as ThemeUILink } from "@theme-ui/components";

const Link: FC<{ link: string }> = ({ link }) => {
  return (
    <ThemeUILink href={link} variant="nav">
      Link 🔗
    </ThemeUILink>
  );
};

export default Link;
