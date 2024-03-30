import FileStatusContext from "../../context/FileStatusContext";
import { useContext, useEffect } from "react";
import Upload from "../upload";
import Uploading from "../uploading";
import { OpacityContainer } from "../../styles/styled/div";
import { Button as CancelButton } from "../../components/Generics/Button";
import preventAppScroll from "../../helpers/preventAppScroll";

function UploadImageModal({ setShow }) {
   const { uploading, uploadedImg } = useContext(FileStatusContext);

   useEffect(() => {
      preventAppScroll(true);
      return () => {
         preventAppScroll(false);
      };
   }, []);

   return (
      <>
         {uploadedImg == null ? (
            <OpacityContainer>
               <CancelButton
                  btnText="X"
                  handleClick={() => {
                     setShow(false);
                  }}
               />
               <Upload show={uploading ? false : true} />
               <Uploading show={uploading ? true : false} />
            </OpacityContainer>
         ) : null}
      </>
   );
}

export default UploadImageModal;
