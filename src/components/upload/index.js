import DropArea from "./DropArea";
import UploadTop from "./UploadTop";
import UploadBottom from "./UploadBottom";
import { FlexCard } from "../../styles/styled/div";
import { useContext } from "react";
import FileStatusContext from "../../context/FileStatusContext";
import uploadImage from "../../services/uploadImage";
import { isImageFile } from "../../helpers/isImageFile";

const Upload = ({ show = true }) => {
   const { setUploading, setUploadedImg } = useContext(FileStatusContext);

   const handleSelectedFile = (selectedImg) => {
      if (isImageFile(selectedImg)) {
         setUploading(true);
         uploadImage(selectedImg).then((res) => {
            setUploadedImg(res);
            setUploading(false);
         });
      } else {
         alert("Files should be PNG, JPG... JPEG");
      }
   };

   return (
      <>
         {show ? (
            <FlexCard>
               <UploadTop />
               <DropArea handleSelectedFile={handleSelectedFile} />
               <UploadBottom handleSelectedFile={handleSelectedFile} />
            </FlexCard>
         ) : null}
      </>
   );
};

export default Upload;
