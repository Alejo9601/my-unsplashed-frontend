import { FlexColumnDiv } from "../../styles/styled/div";
import { StyledH1 } from "../../styles/styled/h1";
import { SuccessImg } from "../../styles/styled/img";

const SuccesHeader = () => {
   return (
      <FlexColumnDiv>
         <SuccessImg src={require(`../../assets/check.png`)} alt="Success" />
         <StyledH1>Uploaded Successfully!</StyledH1>
      </FlexColumnDiv>
   );
};

export default SuccesHeader;
