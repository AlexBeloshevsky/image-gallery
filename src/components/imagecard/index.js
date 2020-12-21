/* eslint-disable react-hooks/rules-of-hooks */
import React, { useContext, useState, createContext } from "react";
import { ImageGalleryContext } from "../../context/imageGalleryContext";
import { Card, Group, Image, Button } from "./styles/imagecard";

const ImageContext = createContext();

export default function ImageCard({ children, ...restProps }) {
  const [quarterRotations, setQuarterRotations] = useState(0);

  return (
    <ImageContext.Provider value={{quarterRotations, setQuarterRotations}}>
      <Card {...restProps}>{children}</Card>
    </ImageContext.Provider>
  );
}

ImageCard.Group = ({ children, ...restProps }) => {
  return <Group {...restProps}>{children}</Group>;
};

ImageCard.Image = ({ ...restProps }) => {
    const {quarterRotations, setQuarterRotations } = useContext(ImageContext);
    console.log(quarterRotations);
  return <Image {...restProps} loading="lazy" quarterRotations={quarterRotations}/>;
};

ImageCard.DeleteButton = ({ ...restProps }) => {
  
  const { deleteImage } = useContext(ImageGalleryContext);

  const { id } = restProps;

  const handleDelete = () => {
    deleteImage(id);
  };

  return <Button onClick={handleDelete}>Delete</Button>;
};

ImageCard.RotateButton = ({ ...restProps }) => {
  
    const {quarterRotations, setQuarterRotations } = useContext(ImageContext);
  
    const handleRotate = () => {
      setQuarterRotations((prevState)=> prevState + 1)
    };
  
    return <Button onClick={handleRotate}>Rotate</Button>;
  };
