import FileStatusContext from "../../context/FileStatusContext";
import { useContext } from "react";
import Upload from "../upload";
import Uploading from "../uploading";
import { OpacityContainer } from "../../styles/styled/div";

function UploadImageModal() {
   const { uploading, uploadedImg } = useContext(FileStatusContext);

   return (
      <>
         {uploadedImg == null ? (
            <OpacityContainer>
               <Upload show={uploading ? false : true} />
               <Uploading show={uploading ? true : false} />
            </OpacityContainer>
         ) : null}
      </>
   );
}

export default UploadImageModal;
