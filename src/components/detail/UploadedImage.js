import { useContext } from "react";
import FileStatusContext from "../../context/FileStatusContext";
import { FullFitImage } from "../../styles/styled/img";
import { MiddleContainer as ImgContainer } from "../../styles/styled/div";

const UploadedImage = () => {
   const { uploadedImg } = useContext(FileStatusContext);

   return (
      <ImgContainer>
         <FullFitImage src={uploadedImg.url} alt="Uploaded" />
         <>{console.log(uploadedImg.url)}</>
      </ImgContainer>
   );
};

export default UploadedImage;
