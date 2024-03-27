import { createContext, useState } from "react";

const FileStatusContext = createContext();

export const StatusContextProvider = ({ children }) => {
   const [uploading, setUploading] = useState(false);
   const [uploadedImg, setUploadedImg] = useState(null);
   const [tagName, setTagName] = useState(null);
   const [imgUrl, setImgUrl] = useState(null);

   const data = {
      uploading,
      setUploading,
      uploadedImg,
      setUploadedImg,
      tagName,
      setTagName,
      imgUrl,
      setImgUrl,
   };

   return (
      <FileStatusContext.Provider value={data}>
         {children}
      </FileStatusContext.Provider>
   );
};

export default FileStatusContext;
