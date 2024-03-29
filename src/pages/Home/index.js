import { useState, useEffect, useContext } from "react";
import ConfirmDeleteModal from "../../components/ConfirmDeleteModal";
import GridMasonry from "../../components/GridMasonry";
import Header from "../../components/Header";
import UploadImageModal from "../../components/UploadImageModal";
import { Button as CancelButton } from "../../components/Generics/Button";
import PopUp from "../../components/PopUp";
import { ImageToDeleteProvider as ImageToDelete } from "../../context/ImageToDeleteContext";
import FileStatusContext from "../../context/FileStatusContext";

const Home = () => {
   const [showDeleteModal, setShowDeleteModal] = useState(false);
   const [showUploadModal, setShowUploadModal] = useState(false);
   const [showPopUp, setShowPopUp] = useState(false);

   const { uploadedImg, resetFileStatusContext } =
      useContext(FileStatusContext);

   useEffect(() => {
      if (uploadedImg != null) {
         setShowUploadModal(false);
         setShowPopUp(true);
         resetFileStatusContext();
      }
   }, [uploadedImg]);

   return (
      <>
         <Header handleClickUpload={() => setShowUploadModal(true)} />

         {showUploadModal ? (
            <>
               <CancelButton
                  btnText="X"
                  handleClick={() => setShowUploadModal(false)}
               />
               <UploadImageModal showModal={setShowUploadModal} />
            </>
         ) : null}

         <ImageToDelete>
            <GridMasonry onDeleteBtnClick={() => setShowDeleteModal(true)} />
            {showDeleteModal ? (
               <ConfirmDeleteModal showModal={setShowDeleteModal} />
            ) : null}
         </ImageToDelete>

         {showPopUp ? (
            <PopUp
               message="Uploaded Successfully"
               setShowState={setShowPopUp}
            ></PopUp>
         ) : null}
      </>
   );
};

export default Home;
