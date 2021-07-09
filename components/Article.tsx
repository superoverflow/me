import { FC } from "react";
import { Paragraph, Text, Box, Flex, Badge } from "theme-ui";
import Link from "./Link";
type Props = {
  title: string;
  link: string;
  description: string;
  tags: string[];
};

const Article: FC<Props> = ({ title, link, description, tags }) => {
  return (
    <Flex sx={{ flexDirection: "column", pb: 3 }}>
      <Text as="h4">
        {" "}
        {title} - <Link link={link} />{" "}
      </Text>
      <Paragraph> {description} </Paragraph>
      <Box>
        {tags.map((tag, index) => (
          <Badge variant="outline" key={index}>
            {tag}
          </Badge>
        ))}
      </Box>
    </Flex>
  );
};

export default Article;
