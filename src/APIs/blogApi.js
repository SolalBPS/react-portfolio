export const getLastPosts = async (count) => {
    return fetch(`https://dummyjson.com/posts?limit=${count}`)
        .then(res => res.json())
        .then(data => {
            return data.posts;
        })
        .catch(error => console.error(error));
};

export const getPostComments = async (id) => {
    return fetch(`https://dummyjson.com/posts/${id}/comments`)
        .then(res => res.json())
        .then(data => {
            return data.comments;
        })
        .catch(error => console.error(error));
};

export const deletePost = async (id) => {
    return fetch(`https://dummyjson.com/posts/${id}`, {
        method: 'DELETE',
    })
        .then(res => res.json())
        .then(data => {
            return data;
        })
        .catch(error => console.error(error));
}

export const editPost = async (id, title, body) => {
    return fetch(`https://dummyjson.com/posts/${id}`, {
        method: 'PUT', /* or PATCH */
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            title: title,
            body: body
        })
    })
        .then(res => res.json())
        .then(data => {
            return data;
        })
        .catch(error => console.error(error));
}

export const createPost = async (title, body, tags, userId) => {
    return fetch(`https://dummyjson.com/posts/add`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            title: title,
            body: body,
            tags: tags,
            userId: userId
        })
    })
        .then(res => res.json())
        .then(data => {
            return data;
        })
        .catch(error => console.error(error));
}