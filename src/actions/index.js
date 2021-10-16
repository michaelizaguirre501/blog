import jsonPlaceHolder from "../apis/jsonPlaceHolder";
import _ from "lodash";

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  //this is an action that can call the other actions we are combining them and only using this action in our componenets, doing so allows us to only fetch users once beacuse we are passing the user ids along with the posts
  await dispatch(fetchPosts());
  const userIds = _.uniq(_.map(getState().posts, "userId")); //lodash _.uniq and _.map map returns us an array of the userids from the posts uniq removes duplicates
  userIds.forEach((id) => dispatch(fetchUser(id))); //looping thru array of unique user ids and dispatching a fetch request for each id (1-10 here)
};

export const fetchPosts = () => {
  return async (dispatch) => {
    const response = await jsonPlaceHolder.get("/posts");

    dispatch({ type: "FETCH_POSTS", payload: response.data });
  };
};

export const fetchUser = (id) => async (dispatch) => {
  const response = await jsonPlaceHolder.get(`/users/${id}`);
  dispatch({ type: "FETCH_USER", payload: response.data });
};

// const _fetchUser = _.memoize(async (id, dispatch) => {               //THIS IS THE MEMOIZED VERSION FOR FIXING THE MULTIPLE REQUESTS DILEMMA
//   const response = await jsonPlaceHolder.get(`/users/${id}`);

//   dispatch({ type: "FETCH_USER", payload: response.data });
// });

//   _fetchUser(id, dispatch);   <----------------------THIS GOES INSIDE THE FETCH USER ACTION CREATOR TO CALL THE MOMIZED VERSION! !!!!! !! !!!
