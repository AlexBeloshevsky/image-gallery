import React, { useReducer, useCallback } from "react";
import { RESET, SEARCH } from "./types/types";
import { imageReducer } from "./reducers/reducer";
import { initialState } from "./initialState";

const ImageGalleryContext = React.createContext();

function ImageGalleryContextProvider(props) {
  const [state, dispatch] = useReducer(imageReducer, initialState);
  console.log(state)

  const resetState = useCallback(() => {
    dispatch({
      type: RESET,
    });
  }, [dispatch]);

  const updateSearchQuery = useCallback(
    ( query ) => {
      dispatch({
        type: SEARCH,
        payload: {
          query
        },
      });
    },
    [dispatch]
  );

  return (
    <ImageGalleryContext.Provider value={{ state, resetState, updateSearchQuery }}>
      {props.children}
    </ImageGalleryContext.Provider>
  );
}

export { ImageGalleryContextProvider, ImageGalleryContext };
