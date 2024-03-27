import { useContext, useRef } from "react";
import { P_Gray as P } from "../../styles/styled/p";
import InputButton from "./InputButton";
import "../../styles/modal.css";
import FileStatusContext from "../../context/FileStatusContext";

const UploadBottom = ({ handleSelectedFile }) => {
   const { setTagName } = useContext(FileStatusContext);
   const imageLabelRef = useRef();

   const handleOnChange = () => {
      setTagName(imageLabelRef.current.value);
   };

   return (
      <>
         <div>
            <P>Or</P>
            <InputButton handleSelectedFile={handleSelectedFile} />
         </div>
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
      </>
   );
};

export default UploadBottom;
