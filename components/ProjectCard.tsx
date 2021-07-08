import { FC } from "react";
import { Flex, Card, Text, Link, Image } from "theme-ui";

type Props = {
  title: string;
  image: string;
  description: string;
  link: string;
};

const ProjectCard: FC<Props> = ({ title, image, description, link }) => {
  return (
    <Flex sx={{ justifyContent: "center", flexDirection: "column" }}>
      <Card>
        <Text>{title}</Text>
        <Image src={`/${image}`} alt={image}  width={512} height={288} />
        <Text>{description}</Text>
        <Link href={link}> Link </Link>
      </Card>
    </Flex>
  );
};

export default ProjectCard;
