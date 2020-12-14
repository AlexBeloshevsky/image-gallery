import React, { useContext, Fragment } from "react";
import SearchContainer from "../containers/search";
import { ImageCard, Footer } from "../components/index";
import { ImageGalleryContext } from "../context/imageGalleryContext";

export default function Home() {
  const { state } = useContext(ImageGalleryContext);
  console.log(state.results.photos);
  const photos = state.results.photos || null;

  return (
    <div
      style={{
        position: "relative",
        minHeight: "100vh",
      }}
    >
      <SearchContainer />
      {photos && (
        <ImageCard.Group>
          {photos.map((photo) => {
            return (
              <ImageCard key={photo.id}>
                <ImageCard.Image src={photo.src.small} />
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
