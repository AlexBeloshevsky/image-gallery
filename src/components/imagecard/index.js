import React from 'react';
import {Card, Group, Image} from './styles/imagecard';

export default function ImageCard ({children, ...restProps}) {
    return (
    <Card {...restProps}>{children}</Card>
    )
}

ImageCard.Group = ({children, ...restProps}) => {
    return (
    <Group {...restProps}>{children}</Group>
    )
}

ImageCard.Image = ({...restProps}) => {
    return (
        <Image {...restProps}/>
    )
}