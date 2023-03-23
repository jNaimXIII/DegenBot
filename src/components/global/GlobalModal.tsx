import "./GlobalModal.scss";
import Modal from "react-modal";

type Props = {
  name: string;
  isOpen: boolean;
  onCancel?: () => void;
  children?: JSX.Element | JSX.Element[] | string;
};

function GlobalModal(props: Props) {
  return (
    <Modal
      isOpen={props.isOpen}
      className="modal"
      overlayClassName="modal-overlay"
      onRequestClose={props.onCancel}
      preventScroll
      ariaHideApp={false}
    >
      <div className="modal-container">
        <div className="modal-header">
          <h2>{props.name}</h2>
        </div>
        <div className="modal-content">{props.children}</div>
      </div>
    </Modal>
  );
}

export default GlobalModal;
