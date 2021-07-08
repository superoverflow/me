import { FC } from "react";
import { Link } from "theme-ui";

type Props = {
  title: string;
  link: string;
};

const Article: FC<Props> = ({ title, link }) => {
  return <Link href={link}>{title}</Link>;
};

export default Article;
