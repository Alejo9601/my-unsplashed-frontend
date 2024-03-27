import { P_Gray as P } from "../../styles/styled/p";
import InputButton from "./InputButton";

const UploadBottom = ({ handleSelectedFile }) => {
   return (
      <div>
         <P>Or</P>
         <InputButton handleSelectedFile={handleSelectedFile} />
      </div>
   );
};

export default UploadBottom;
