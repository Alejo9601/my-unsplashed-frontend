import { useState } from "react";
import ConfirmDeleteModal from "../../components/ConfirmDeleteModal";
import GridMasonry from "../../components/GridMasonry";
import Header from "../../components/Header";
import UploadImageModal from "../../components/UploadImageModal";

const Home = () => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showUploadModal, setShowUploadModal] = useState(false);

  const handleDelete = () => {
    setShowDeleteModal(true);
  };
  const handleCancelDelete = () => {
    setShowDeleteModal(false);
  };
  const handleUpload = () => {
    setShowUploadModal(true);
  };

  return (
    <>
      <Header handleUpload={handleUpload} />
      <GridMasonry handleDelete={handleDelete} />
      {showDeleteModal ? (
        <ConfirmDeleteModal handleCancelDelete={handleCancelDelete} />
      ) : null}
      {showUploadModal ? <UploadImageModal /> : null}
    </>
  );
};

export default Home;
