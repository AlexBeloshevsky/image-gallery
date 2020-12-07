import React, {useState} from 'react';
const ImageGalleryContext = React.createContext();

function ImageGalleryContextProvider(props) {
  const [state, setState] = useState("Alex");

  return (
    <ImageGalleryContext.Provider value={{state}}>
      {props.children}
    </ImageGalleryContext.Provider>
  )

}

export {ImageGalleryContextProvider, ImageGalleryContext} 