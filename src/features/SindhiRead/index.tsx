import React from "react";
import { Heading, Text, Button, Flex } from "rebass";
import { Textarea, Label } from "@rebass/forms";

import { sampleSindhi } from "../../data/sindhi";
import { WordDetails } from "./WordDetails";

export const SindhiRead = () => {
  const [selectedWord, setSelectedWord] = React.useState("");
  const [wordDetailsVisible, setWordDetailsVisible] = React.useState(false);
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
            style={{ fontFamily: "Noto Naksh Arabic, system-ui, sans-serif" }}
            onChange={(event) => setInput(event.target.value)}
            rows={8}
            value={input}
            dir="rtl"
          />
          <Button
            m={1}
            onClick={() => {
              setText(input.replace(/\n\s*\n/g, "\n\n"));
              setInputVisible(false);
            }}
          >
            Read
          </Button>
        </>
      )}
      {wordDetailsVisible && (
        <WordDetails
          visible={wordDetailsVisible}
          word={selectedWord}
          closeModal={() => setWordDetailsVisible(false)}
        />
      )}
      <Text
        paddingTop={1}
        fontFamily="Noto Naksh Arabic, system-ui, sans-serif"
        fontSize={3}
        lineHeight={2.4}
        dir="rtl"
        style={{ whiteSpace: "pre-line" }}
      >
        {text.split(" ").map((word, index) => (
          <span
            onClick={() => {
              setSelectedWord(word);
              setWordDetailsVisible(true);
            }}
            key={index}
          >
            {word}{" "}
          </span>
        ))}
      </Text>
    </Flex>
  );
};
