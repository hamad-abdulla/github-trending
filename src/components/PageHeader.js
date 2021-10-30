import React from "react";
import { Box, Heading, Text } from "@primer/components";

const PageHeader = ({ title, subTitle }) => {
  return (
    <Box
      borderBottomWidth={1}
      borderBottomStyle="solid"
      borderBottomColor="border.default"
    >
      <Heading textAlign="center" as="h1" m={3}>
        {title}
      </Heading>
      <Text as="p" color="fg.muted" textAlign="center" mb={8}>
        {subTitle}
      </Text>
    </Box>
  );
};

export default PageHeader;
