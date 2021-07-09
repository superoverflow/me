import { FC } from "react";
import { Link, Text } from "theme-ui";

type Props = {
  title: string;
  link: string;
};

const Article: FC<Props> = ({ title, link }) => {
  return (
    <Text> {title} - {" "}
      <Link href={link}>Link</Link>
    </Text>
  );
};

export default Article;
