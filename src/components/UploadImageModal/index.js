import FileStatusContext from "../../context/FileStatusContext";
import { useContext } from "react";
import Detail from "../detail";
import Upload from "../upload";
import Uploading from "../uploading";
import { OpacityContainer } from "../../styles/styled/div";

function UploadImageModal() {
   const { uploading, uploadedImg } = useContext(FileStatusContext);

   return (
      <OpacityContainer>
         {uploadedImg !== null ? (
            <Detail />
         ) : (
            <>
               <Upload show={uploading ? false : true} />
               <Uploading show={uploading ? true : false} />
            </>
         )}
      </OpacityContainer>
   );
}

export default UploadImageModal;
