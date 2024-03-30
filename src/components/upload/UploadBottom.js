import { useContext, useRef } from "react";
import { hidable_P as P } from "../../styles/styled/p";
import InputButton from "./InputButton";
import "../../styles/modal.css";
import FileStatusContext from "../../context/FileStatusContext";
import { FlexColumnDiv } from "../../styles/styled/div";

const UploadBottom = ({ handleSelectedFile }) => {
   const { setTagName } = useContext(FileStatusContext);
   const imageLabelRef = useRef();

   const handleOnChange = () => {
      setTagName(imageLabelRef.current.value);
   };

   return (
      <FlexColumnDiv>
         <FlexColumnDiv>
            <P>Or</P>
            <InputButton handleSelectedFile={handleSelectedFile} />
         </FlexColumnDiv>
         <div className="modal__form">
            <label>
               Name tag for image
               <input
                  ref={imageLabelRef}
                  type="text"
                  id="image-label"
                  onChange={handleOnChange}
               />
            </label>
         </div>
      </FlexColumnDiv>
   );
};

export default UploadBottom;
