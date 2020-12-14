import React, {useContext} from 'react';
import SearchContainer from '../containers/search';
import {ImageCard} from '../components/index';
import {ImageGalleryContext} from '../context/imageGalleryContext'

export default function Home (){

  const {state}  = useContext(ImageGalleryContext)
  console.log(state.results.photos);
  const photos = state.results.photos || null;

  return(
    <>
    <SearchContainer/>
    {photos && 
      <ImageCard.Group>{photos.map(photo => {
        return (
          <ImageCard key={photo.id}>
          <ImageCard.Image src={photo.src.small}/>
        </ImageCard>
        )
      })}</ImageCard.Group>
    }

    </>
  )
}