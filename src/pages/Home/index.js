import { useState } from "react";
import ConfirmDeleteModal from "../../components/ConfirmDeleteModal";
import GridMasonry from "../../components/GridMasonry";
import Header from "../../components/Header";

const Home = () => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const handleDelete = () => {
    setShowDeleteModal(true);
  };
  return (
    <>
      <Header />
      <GridMasonry handleDelete={handleDelete} />
      {showDeleteModal ? <ConfirmDeleteModal /> : null}
    </>
  );
};

export default Home;
