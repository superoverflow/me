import { FC } from "react";
import { Card, Text, Link, Image } from "theme-ui";

type Props = {
  title: string;
  image: string;
  description: string;
  link: string;
};

const ProjectCard: FC<Props> = ({ title, image, description, link }) => {
  return (
    
      <Card sx={{ maxWidth: 512, py: 3}}>
        <Text as="h4">{title}</Text>
        <Image src={`/${image}`} alt={image}  width={512} height={288} />
        <Text>{`${description} - `}</Text>
        <Link href={link}>Link</Link>
      </Card>
    
  );
};

export default ProjectCard;
