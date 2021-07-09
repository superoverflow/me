import { FC } from "react";
import { Card, Text, AspectImage, Badge, Paragraph, Flex, Box } from "theme-ui";
import Link from "./Link";

type Props = {
  title: string;
  image: string;
  description: string;
  link: string;
  tags: string[];
};

const ProjectCard: FC<Props> = ({ title, image, description, link, tags }) => {
  return (
    <Card sx={{ maxWidth: 512, py: 3 }}>
      <Text as="h4">{title}</Text>
      <AspectImage src={`/${image}`} ratio={16 / 9}/>
      <Paragraph>{`${description}`}</Paragraph>
      <Flex sx={{gap: 1}}>
      
      {tags.map((tag, index) => (
        <Badge variant="outline" key={index}>{tag}</Badge>
      ))}
      <Box sx={{flexGrow: 1}}></Box>
      <Link link={link} />
      </Flex>
    </Card>
  );
};

export default ProjectCard;
