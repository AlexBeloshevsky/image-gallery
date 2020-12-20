import React, {useContext} from 'react';
import { ImageGalleryContext } from "../../context/imageGalleryContext";
import {Card, Group, Image} from './styles/imagecard';

export default function ImageCard ({children, ...restProps}) {

    const {deleteImage} = useContext(ImageGalleryContext)

    const {id} = restProps;

    const handleDelete = ()=>{
        deleteImage(id)
    }

    return (
    <Card {...restProps} onClick={handleDelete}>{children}</Card>
    )
}

ImageCard.Group = ({children, ...restProps}) => {
    return (
    <Group {...restProps}>{children}</Group>
    )
}

ImageCard.Image = ({...restProps}) => {
    return (
        <Image {...restProps} loading="lazy"/>
    )
}