import { useEffect, StateUpdater } from "preact/hooks";

const useEscapeHandler = ({
  setShowModal,
}: {
  setShowModal: StateUpdater<boolean>;
}) => {
  useEffect(() => {
    const keyDownHandler = (event: {
      key: string;
      preventDefault: () => void;
    }) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setShowModal(false);
      }
    };

    document.addEventListener("keydown", keyDownHandler);
    return () => {
      document.removeEventListener("keydown", keyDownHandler);
    };
  }, []);
};

export default useEscapeHandler;
