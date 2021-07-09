import { FC } from "react";
import { Heading, Divider } from "@theme-ui/components";

const SectionDivider: FC<{ title: string }> = ({ title }) => {
  return (
    <>
      <Heading as="h3" sx={{ pb: 3 }}>
        {title}
      </Heading>
      <Divider />
    </>
  );
};

export default SectionDivider;


