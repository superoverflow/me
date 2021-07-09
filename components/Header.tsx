import { FC } from "react";
import { Box, Flex, Heading, Link } from "@theme-ui/components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const Header: FC = () => {
  return (
    <Flex sx={{ flexDirection: "column", pt: 3, pb: 5 }}>
      <Heading as="h1">Chiu Yat (Cyrus) Tang</Heading>
      <Flex>
      <Heading as="h2">Data Engineer 🐍 London</Heading>
      <Box sx={{flexGrow: 1}}></Box>
      <Flex sx={{ gap: 2, fontSize: 4 }}>
        <Link href="https://www.linkedin.com/in/tangchiuyat">
          <FontAwesomeIcon icon={faLinkedin} />
        </Link>
        <Link href="https://github.com/superoverflow">
          <FontAwesomeIcon icon={faGithub} />
        </Link>
      </Flex>
      </Flex>
    </Flex>
  );
};

export default Header;
