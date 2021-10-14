import jsonPlaceHolder from "../apis/jsonPlaceHolder";

export const fetchPosts = () => {
  return async (dispatch) => {
    const response = await jsonPlaceHolder.get("/posts");

    dispatch({ type: "FETCH_POSTS", payload: response.data });
  };
};

export const fetchUsers = () => {
  return async (dispatch) => {
    const response = await jsonPlaceHolder.get("/users");

    dispatch({ type: "FETCH_USER", payload: response });
  };
};
