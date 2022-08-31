import { useState } from "react";
import ConfirmDeleteModal from "../../components/ConfirmDeleteModal";
import GridMasonry from "../../components/GridMasonry";
import Header from "../../components/Header";
import UploadImageModal from "../../components/UploadImageModal";

const Home = () => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showUploadModal, setShowUploadModal] = useState(false);

  const handleClickDelete = () => {
    setShowDeleteModal(true);
  };
  const handleCancelUpload = () => {
    setShowUploadModal(false);
  };
  const handleCancelDelete = () => {
    setShowDeleteModal(false);
  };
  const handleClickUpload = () => {
    setShowUploadModal(true);
  };

  return (
    <>
      <Header handleClickUpload={handleClickUpload} />
      <GridMasonry handleDelete={handleClickDelete} />
      {showDeleteModal ? (
        <ConfirmDeleteModal handleCancelDelete={handleCancelDelete} />
      ) : null}
      {showUploadModal ? (
        <UploadImageModal handleCancelUpload={handleCancelUpload} />
      ) : null}
    </>
  );
};

export default Home;
