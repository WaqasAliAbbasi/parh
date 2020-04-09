import React from "react";
import { Box, Heading, Text } from "rebass";

import { text } from "../../data/sindhi";

export const SindhiRead = () => (
  <Box>
    <Heading>Read Sindhi</Heading>
    <Text
      paddingTop={1}
      fontFamily="Noto Naksh Arabic"
      textAlign="right"
      fontSize={3}
      lineHeight={2.4}
    >
      {text}
    </Text>
  </Box>
);
