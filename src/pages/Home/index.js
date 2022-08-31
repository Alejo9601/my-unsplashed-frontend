import { useState } from "react";
import ConfirmDeleteModal from "../../components/ConfirmDeleteModal";
import GridMasonry from "../../components/GridMasonry";
import Header from "../../components/Header";
import UploadImageModal from "../../components/UploadImageModal";

const Home = () => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showUploadModal, setShowUploadModal] = useState(false);

  return (
    <>
      <Header handleClickUpload={() => setShowUploadModal(true)} />
      <GridMasonry handleDelete={() => setShowDeleteModal(true)} />
      {showDeleteModal ? (
        <ConfirmDeleteModal showModal={setShowDeleteModal} />
      ) : null}
      {showUploadModal ? (
        <UploadImageModal showModal={setShowUploadModal} />
      ) : null}
    </>
  );
};

export default Home;
