import React, {useContext} from 'react';
import { ImageGalleryContext } from "../../context/imageGalleryContext";
import {Card, Group, Image, Button} from './styles/imagecard';

export default function ImageCard ({children, ...restProps}) {

    return (
    <Card {...restProps} >{children}</Card>
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

ImageCard.DeleteButton = ({...restProps}) => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const {deleteImage} = useContext(ImageGalleryContext)

    const {id} = restProps;

    const handleDelete = ()=>{
        deleteImage(id)
    }

    return (
        <Button onClick={handleDelete}>Delete</Button>
    )
}
