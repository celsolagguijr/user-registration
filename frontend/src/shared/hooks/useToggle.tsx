import { useState } from "react";

type Toggle = [boolean, () => void, () => void];

const useToggle = (): Toggle => {
  const [state, setState] = useState<boolean>(false);

  const handleClose = () => {
    setState(false);
  };

  const handleOpen = () => {
    setState(true);
  };

  return [state, handleOpen, handleClose];
};

export default useToggle;
