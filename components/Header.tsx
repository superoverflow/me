import { FC } from "react";
import { Flex, Heading } from "@theme-ui/components";

const Header: FC = () => {
  return (
    <Flex sx={{ flexDirection: "column"}}>
      <Heading as="h1">
        Chiu Yat (Cyrus) Tang
      </Heading>
      <Heading as="h2">
        Data Engineer 🐍 London
      </Heading>
    </Flex>
  );
};

export default Header;
