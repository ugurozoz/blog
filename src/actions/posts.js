import uuid from "uuid";
import database from "../firebase/firebase";

//CREATE POST
export const createPost = post => ({
  type: "CREATE_POST",
  post
});

//START CREATE POST
export const startCreatePost = (postData = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const { title = "", body = "", createdAt = 0 } = postData;
    const post = { title, body, createdAt };

    return database
      .ref(`users/${uid}/posts`)
      .push(post)
      .then(ref => {
        dispatch(createPost({ id: ref.key, ...post }));
      });
  };
};
