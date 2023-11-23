import { Modal } from "react-bootstrap";
import { ProductFilterItems } from "./ProductFilterItems";

interface FilterMenuProps {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ProductFilterContainer = ({
  showModal,
  setShowModal,
}: FilterMenuProps) => {
  return (
    <>
      <div className={"menuFilterDesktop w-25 p-4"}>
        <ProductFilterItems />
      </div>

      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        size="lg"
        className="menuFilterMobile my-5"
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">ArtBag</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ProductFilterItems />
        </Modal.Body>
      </Modal>
    </>
  );
};
