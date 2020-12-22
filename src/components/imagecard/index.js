/* eslint-disable react-hooks/rules-of-hooks */
import React, { useContext, useState, createContext } from "react";
import { ImageGalleryContext } from "../../context/imageGalleryContext";
import { Card, Group, Image, Button, LargeImage } from "./styles/imagecard";

const ImageContext = createContext();

export default function ImageCard({ children, ...restProps }) {
  const [quarterRotations, setQuarterRotations] = useState(0);
  const [showLargeImage, setShowLargeImage] = useState(false);

  return (
    <ImageContext.Provider
      value={{
        quarterRotations,
        setQuarterRotations,
        showLargeImage,
        setShowLargeImage,
      }}
    >
      <Card {...restProps}>{children}</Card>
    </ImageContext.Provider>
  );
}

ImageCard.Group = ({ children, ...restProps }) => {
  return <Group {...restProps}>{children}</Group>;
};

ImageCard.Image = ({ ...restProps }) => {
  const {
    quarterRotations,
    setQuarterRotations,
    showLargeImage,
    setShowLargeImage,
  } = useContext(ImageContext);

  const handleClick = () => {
    setShowLargeImage(!showLargeImage);
  };

  return showLargeImage ? (
    <LargeImage
      {...restProps}
      loading="lazy"
      quarterRotations={quarterRotations}
      onClick={handleClick}
    />
  ) : (
    <Image
      {...restProps}
      loading="lazy"
      quarterRotations={quarterRotations}
      onClick={handleClick}
    />
  );
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
  const { quarterRotations, setQuarterRotations } = useContext(ImageContext);

  const handleRotate = () => {
    setQuarterRotations((prevState) => prevState + 1);
  };

  return <Button onClick={handleRotate}>Rotate</Button>;
};
