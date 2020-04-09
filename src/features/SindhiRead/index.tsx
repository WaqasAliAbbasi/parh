import React from "react";
import { Box, Heading, Text, Button, Flex } from "rebass";
import { Textarea, Label } from "@rebass/forms";

import { sampleSindhi } from "../../data/sindhi";

export const SindhiRead = () => {
  const [inputVisible, setInputVisible] = React.useState(true);
  const [input, setInput] = React.useState(sampleSindhi);
  const [text, setText] = React.useState("");
  return (
    <Flex width="100%" flexDirection="column" alignItems="center">
      <Heading textAlign="center">Sindhi Reader</Heading>
      {inputVisible && (
        <>
          <Label htmlFor="input">Copy/Paste Sindhi text here:</Label>
          <Textarea
            id="input"
            onChange={(event) => setInput(event.target.value)}
            rows={8}
            value={input}
          />
          <Button
            m={1}
            onClick={() => {
              setText(input);
              setInputVisible(false);
            }}
          >
            Read
          </Button>
        </>
      )}
      <Text
        paddingTop={1}
        fontFamily="Noto Naksh Arabic"
        textAlign="right"
        fontSize={3}
        lineHeight={2.4}
      >
        {text.split(" ").map((word, index) => (
          <span
            onClick={() =>
              window.open(
                `http://dic.sindhila.edu.pk/define/${word.replace(
                  /[.,;'":”“،!\s]/g,
                  ""
                )}.php`,
                "_blank"
              )
            }
            key={index}
          >
            {word}{" "}
          </span>
        ))}
      </Text>
    </Flex>
  );
};
