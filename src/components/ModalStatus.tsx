import { h } from "preact";
import { useState } from "preact/compat";
import { Button, Modal, Tooltip } from "react-daisyui";
import copy from "../assets/copy.svg";
import ok from "../assets/ok.svg";

const styles = {
  pre: { display: "inline", cursor: "pointer" },
  span: { width: 20, height: 20, display: "inline", marginTop: "-5px" },
};

type ModalStatusInput = {
  title: string;
  line1: string;
  line2: string;
  visible: boolean;
  hash: string;
  toggleVisible: Function;
};

const ModalStatus = ({
  title,
  line1,
  line2,
  visible,
  hash,
  toggleVisible,
}: ModalStatusInput) => {
  const [icon, setIcon] = useState(true);

  const copyToClipBoard = async (hash: string) => {
    await navigator.clipboard.writeText(hash);
    setIcon(!icon);
  };

  return (
    <Modal open={visible} onClickBackdrop={toggleVisible}>
      <Modal.Header>{title}</Modal.Header>
      <Modal.Body>
        {line1}
        <br />
        {line2}
        <pre
          style={styles.pre}
          onClick={async () => await copyToClipBoard(hash)}
          onMouseLeave={() => (!icon ? setIcon(true) : null)}
        >
          &nbsp;{hash.slice(0, 10)}...
          <Tooltip position="left" message="Copiar al portapapeles">
            <img src={icon ? copy : ok} alt="" style={styles.span} />
          </Tooltip>
        </pre>
      </Modal.Body>
      <Modal.Actions>
        <Button onClick={toggleVisible} color="primary">
          Cerrar
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

export default ModalStatus;
