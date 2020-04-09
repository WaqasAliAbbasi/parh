import React from "react";
import { Flex, Heading, Box } from "rebass";
import { InternalLink } from "./InternalLink";

export const Header = () => (
  <Flex px={2} color="white" bg="black" alignItems="center">
    <InternalLink to="/">
      <Heading>Parh</Heading>
    </InternalLink>
    <Box mx="auto" />
    <InternalLink to="/sindhi">Sindhi</InternalLink>
  </Flex>
);
