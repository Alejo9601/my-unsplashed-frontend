import { useRef } from "react";
import { Button } from "../../styles/styled/div";
import { StyledInput } from "../../styles/styled/input";
import { P_12px as P } from "../../styles/styled/p";

const InputButton = ({ handleSelectedFile }) => {
   const inputRef = useRef();

   const handleOnChange = () => {
      const selectedImg = inputRef.current.files[0];
      handleSelectedFile(selectedImg);
   };

   return (
      <Button>
         <P>Choose File</P>
         <StyledInput ref={inputRef} type="file" onChange={handleOnChange} />
      </Button>
   );
};

export default InputButton;
