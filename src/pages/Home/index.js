import { useState } from "react";
import ConfirmDeleteModal from "../../components/ConfirmDeleteModal";
import GridMasonry from "../../components/GridMasonry";
import Header from "../../components/Header";
import UploadImageModal from "../../components/UploadImageModal";
import { ImageToDeleteProvider as ImageToDelete } from "../../context/ImageToDeleteContext";

const Home = () => {
   const [showDeleteModal, setShowDeleteModal] = useState(false);
   const [showUploadModal, setShowUploadModal] = useState(false);

   return (
      <>
         <Header handleClickUpload={() => setShowUploadModal(true)} />

         {showUploadModal ? (
            <UploadImageModal showModal={setShowUploadModal} />
         ) : null}

         <ImageToDelete>
            <GridMasonry onDeleteBtnClick={() => setShowDeleteModal(true)} />
            {showDeleteModal ? (
               <ConfirmDeleteModal showModal={setShowDeleteModal} />
            ) : null}
         </ImageToDelete>
      </>
   );
};

export default Home;
