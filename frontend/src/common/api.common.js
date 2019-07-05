const serverUrlApi = 'http://localhost:3001';
const defaultParameters = { headers: { Authorization: 'granted' } };

export const getAllCategories = () =>
    fetch(`${serverUrlApi}/categories`, defaultParameters).then(response =>
        response.json()
    );

export const getPostsByCategory = category =>
    fetch(`${serverUrlApi}/${category}/posts`, defaultParameters).then(response =>
        response.json()
    );

export const getAllPosts = () =>
    fetch(`${serverUrlApi}/posts`, defaultParameters).then(response => response.json());

export const addNewPost = postData =>
    fetch(`${serverUrlApi}/posts`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            Authorization: 'granted',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(postData)
    })
        .then(response => response.json())
        .catch(response => response.json());

export const editPost = postData =>
    fetch(`${serverUrlApi}/posts/${postData.id}`, {
        method: 'PUT',
        headers: {
            Accept: 'application/json',
            Authorization: 'granted',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(postData)
    })
        .then(response => response.json())
        .catch(response => response.json());

export const getPost = postId =>
    fetch(`${serverUrlApi}/posts/${postId}`, defaultParameters).then(response =>
        response.json()
    );

export const changeVotePost = (postId, voteParam) =>
    fetch(`${serverUrlApi}/posts/${postId}`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            Authorization: 'granted',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ option: voteParam })
    }).then(response => response.json());

export const changeVoteCommentScore = (commentId, voteParam) =>
    fetch(`${serverUrlApi}/comments/${commentId}`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            Authorization: 'granted',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ option: voteParam })
    }).then(response => response.json());

export const deletePost = postId =>
    fetch(`${serverUrlApi}/posts/${postId}`, {
        method: 'DELETE',
        headers: {
            Accept: 'application/json',
            Authorization: 'granted',
            'Content-Type': 'application/json'
        }
    }).then(response => response);

export const addNewComment = commentData =>
    fetch(`${serverUrlApi}/comments`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            Authorization: 'granted',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(commentData)
    }).then(response => response.json());

export const getPostComments = postId =>
    fetch(`${serverUrlApi}/posts/${postId}/comments`, defaultParameters).then(response =>
        response.json()
    );

export const deletePostComment = commentId =>
    fetch(`${serverUrlApi}/comments/${commentId}`, {
        method: 'DELETE',
        headers: {
            Accept: 'application/json',
            Authorization: 'granted',
            'Content-Type': 'application/json'
        }
    }).then(response => response.json());

export const editPostComment = commentData =>
    fetch(`${serverUrlApi}/comments/${commentData.id}`, {
        method: 'PUT',
        headers: {
            Accept: 'application/json',
            Authorization: 'granted',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(commentData)
    }).then(response => response.json());
