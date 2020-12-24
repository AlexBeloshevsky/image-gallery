import React, { useContext, useState, useEffect } from "react";
import SearchContainer from "../containers/search";
import { ImageCard, Footer } from "../components/index";
import { ImageGalleryContext } from "../context/imageGalleryContext";

export default function Home() {
  const initialDnDState = {
    draggedFrom: null,
    draggedTo: null,
    isDragging: false,
    originalOrder: [],
    updatedOrder: [],
  };

  const { state } = useContext(ImageGalleryContext);
  const photos = state.photos || null;
  const [list, setList] = useState(photos);
  const [dragAndDrop, setDragAndDrop] = useState(initialDnDState);

  useEffect(() => {
    setList(photos);
  }, [photos]);

  const onDragStart = (event) => {
    const initialPosition = Number(event.currentTarget.dataset.position);

    setDragAndDrop({
      ...dragAndDrop,
      draggedFrom: initialPosition,
      isDragging: true,
      originalOrder: list,
    });
    event.dataTransfer.setData("text/html", "");
  };

  const onDragOver = (event) => {
    event.preventDefault();
    let newList = dragAndDrop.originalOrder;
    const draggedFrom = dragAndDrop.draggedFrom;
    const draggedTo = Number(event.currentTarget.dataset.position);

    const itemDragged = newList[draggedFrom];
    const remainingItems = newList.filter(
      (item, index) => index !== draggedFrom
    );

    newList = [
      ...remainingItems.slice(0, draggedTo),
      itemDragged,
      ...remainingItems.slice(draggedTo),
    ];

    if (draggedTo !== dragAndDrop.draggedTo) {
      setDragAndDrop({
        ...dragAndDrop,
        updatedOrder: newList,
        draggedTo: draggedTo,
      });
    }
  };

  const onDrop = (event) => {
    setList(dragAndDrop.updatedOrder);

    setDragAndDrop({
      ...dragAndDrop,
      draggedFrom: null,
      draggedTo: null,
      isDragging: false,
    });
  };

  const onDragLeave = () => {
    setDragAndDrop({
      ...dragAndDrop,
      draggedTo: null,
    });
  };

  return (
    <div
      style={{
        position: "relative",
        minHeight: "100vh",
      }}
    >
      <SearchContainer />
      {list && (
        <ImageCard.Group>
          {list.map((photo, index) => {
            return (
              <ImageCard
                key={index}
                data-position={index}
                draggable
                onDragStart={onDragStart}
                onDragOver={onDragOver}
                onDrop={onDrop}
                onDragLeave={onDragLeave}
              >
                <ImageCard.Image src={photo.src.medium} />
                <div>
                  <ImageCard.DeleteButton id={photo.id} />
                  <ImageCard.RotateButton />
                </div>
              </ImageCard>
            );
          })}
        </ImageCard.Group>
      )}
      <Footer>
        <Footer.Link href="https://www.pexels.com">
          Photos provided by Pexels
        </Footer.Link>
      </Footer>
    </div>
  );
}
