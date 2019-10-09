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

//EDIT POST
export const editPost = (id, updates) => ({
  type: "EDIT_POST",
  id,
  updates
});

//START EDIT POST
export const startEditPost = (id, updates) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database
      .ref(`users/${uid}/posts/${id}`)
      .update(updates)
      .then(() => {
        dispatch(editPost(id, updates));
      });
  };
};

// SET_POSTS
export const setPosts = posts => ({
  type: "SET_POSTS",
  posts
});

export const startSetPosts = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database
      .ref(`users/${uid}/posts`)
      .once("value")
      .then(snapshot => {
        const posts = [];
        snapshot.forEach(element => {
          posts.push({
            id: element.key,
            ...element.val()
          });
        });

        dispatch(setPosts(posts));
      });
  };
};
