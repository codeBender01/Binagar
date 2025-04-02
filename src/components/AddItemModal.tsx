import { Dispatch, FC, ReactElement, SetStateAction } from "react";

import { Modal } from "antd";

interface ModalProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  children: ReactElement;
}

const AddItemModal: FC<ModalProps> = ({ open, setOpen, children }) => {
  return (
    <Modal open={open} onCancel={() => setOpen(false)} footer={null}>
      {children}
    </Modal>
  );
};

export default AddItemModal;
