import ImgLink from "./ImgLink";
import SuccessHeader from "./SuccessHeader";
import UploadedImage from "./UploadedImage";
import { FlexCard } from "../../styles/styled/div";

const Detail = () => {
   return (
      <FlexCard>
         <SuccessHeader />
         <UploadedImage />
         <ImgLink />
      </FlexCard>
   );
};

export default Detail;
