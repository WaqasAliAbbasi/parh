import React from "react";
import Modal from "react-modal";
import { Text, Heading } from "rebass";
import axios from "axios";
import cheerio from "cheerio";

interface Props {
  word: string;
  visible: boolean;
  closeModal: () => void;
}

Modal.setAppElement("#root");

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "80%",
    height: "75vh",
    overflow: "scroll",
  },
};

export const WordDetails: React.FC<Props> = ({ word, visible, closeModal }) => {
  const parsedWord = word.replace(/[.,;'":”“،!\s]/g, "");
  const CORSByPass = "https://cors-anywhere.herokuapp.com/";

  const [dictionaryResponse, setDictionaryResponse] = React.useState("...");
  const dictionaryLink = `${CORSByPass}http://dic.sindhila.edu.pk/define/${parsedWord}.php`;
  React.useEffect(() => {
    axios
      .get(dictionaryLink)
      .then(({ data }) => {
        const $ = cheerio.load(data);
        setDictionaryResponse($(".panel-body").html() || "Error");
      })
      .catch(() => setDictionaryResponse("Error"));
  }, [dictionaryLink]);

  const [transliterationResponse, setTransliterationResponse] = React.useState(
    "Loading..."
  );
  const transliterationLink = `${CORSByPass}http://roman.sindhila.edu.pk/convert.php`;
  React.useEffect(() => {
    const form = new FormData();
    form.append("text", parsedWord);
    form.append("ChooseLang", "roman");
    form.append("submit", "Transilterate");
    axios
      .post(transliterationLink, form)
      .then(({ data }) => {
        const $ = cheerio.load(data);
        setTransliterationResponse($("#copyTarget").text());
      })
      .catch(() => setTransliterationResponse("Error"));
  }, [parsedWord, transliterationLink]);

  return (
    <>
      <Modal
        isOpen={visible}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Word Details"
      >
        <Heading textAlign="center">{transliterationResponse}</Heading>
        <Text
          fontFamily="Noto Naksh Arabic,system-ui,sans-serif"
          dir="rtl"
          fontSize={3}
          lineHeight={2.4}
        >
          <div
            dangerouslySetInnerHTML={{
              __html: dictionaryResponse,
            }}
          ></div>
        </Text>
      </Modal>
    </>
  );
};
