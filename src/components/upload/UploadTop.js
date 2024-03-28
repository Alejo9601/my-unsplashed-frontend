import { P_Gray as P } from "../../styles/styled/p";
import { StyledH1 } from "../../styles/styled/h1";
import { FlexColumnDiv } from "../../styles/styled/div";

const UploadTop = () => {
   return (
      <FlexColumnDiv>
         <StyledH1>Upload your Image</StyledH1>
         <P>Files should be PNG, JPEG ...</P>
      </FlexColumnDiv>
   );
};

export default UploadTop;
