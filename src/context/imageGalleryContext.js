import React, { useReducer, useCallback, useEffect } from "react";
import {
  RESET,
  SEARCH,
  UPDATE_RESULTS,
  DELETE_IMAGE,
  ADD_MORE_RESULTS,
} from "./types/types";
import { imageReducer } from "./reducers/reducer";
import { initialState } from "./initialState";
import { key } from "../constants/apiKey";

const ImageGalleryContext = React.createContext();

function ImageGalleryContextProvider(props) {
  const [state, dispatch] = useReducer(imageReducer, initialState);
  const resetState = useCallback(() => {
    dispatch({
      type: RESET,
    });
  }, [dispatch]);

  const updateSearchQuery = useCallback(
    (query) => {
      dispatch({
        type: SEARCH,
        payload: query,
      });
    },
    [dispatch]
  );

  const updateResults = useCallback(
    (results) => {
      dispatch({
        type: UPDATE_RESULTS,
        payload: results,
      });
    },
    [dispatch]
  );

  const addMoreResults = useCallback(
    () => {
      const requestOptions = {
        headers: { Authorization: key },
      };
      if (state.query !== "" && state.page > 1) {
        fetch(
          `https://api.pexels.com/v1/search?per_page=20&query=${state.query}&page=${state.page}`,
          requestOptions
        )
          .then((response) => response.json())
          .then((response) => {
            dispatch({
              type: ADD_MORE_RESULTS,
              payload: response,
            });
          });
      }
      
    },
    [state.page, state.query]
  );

  useEffect(() => {
    // POST request using fetch inside useEffect React hook
    const requestOptions = {
      headers: { Authorization: key },
    };
    if (state.query !== "") {
      fetch(
        `https://api.pexels.com/v1/search?per_page=20&query=${state.query}&page=1`,
        requestOptions
      )
        .then((response) => response.json())
        .then((response) => {
          updateResults(response);
        });
    } else {
      updateResults([]);
    }
  }, [state.query, updateResults]);

  const deleteImage = useCallback(
    (imageID) => {
      dispatch({
        type: DELETE_IMAGE,
        payload: imageID,
      });
    },
    [dispatch]
  );
  return (
    <ImageGalleryContext.Provider
      value={{ state, resetState, updateSearchQuery, deleteImage, addMoreResults }}
    >
      {props.children}
    </ImageGalleryContext.Provider>
  );
}

export { ImageGalleryContextProvider, ImageGalleryContext };
