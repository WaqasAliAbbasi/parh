import React from "react";
import Modal from "react-modal";
import { Text, Link } from "rebass";

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
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

export const WordDetails: React.FC<Props> = ({ word, visible, closeModal }) => {
  const parsedWord = word.replace(/[.,;'":”“،!\s]/g, "");
  return (
    <Modal
      isOpen={visible}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Word Details"
    >
      <Text
        fontFamily="Noto Naksh Arabic"
        textAlign="right"
        fontSize={6}
        lineHeight={2.4}
      >
        <Link
          href={`http://dic.sindhila.edu.pk/define/${parsedWord}.php`}
          target="blank"
        >
          {parsedWord}
        </Link>
      </Text>
    </Modal>
  );
};
