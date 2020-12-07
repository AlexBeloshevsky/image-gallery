import React from "react";

import { Input, Submit, Container } from "./styles/searchbar";

export default function Searchbar({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Searchbar.Input = function SearchbarInput({children, ...restProps}){
return <Input {...restProps}>{children}</Input>
}

Searchbar.Submit = function SearchbarSubmit({children, ...restProps}){
return <Submit {...restProps}>{children}</Submit>
}