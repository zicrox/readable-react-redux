
const api = "http://localhost:3001"

// Generate a unique token for storing your bookshelf data on the backend server.
let token = localStorage.token
if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
  'Accept': 'application/json',
  'Authorization': token
}

const headersToPost = {
  ...headers,
  'Content-Type': 'application/json'
}

export default class InAppBilling {
  static fetchPosts = () =>
    fetch(`${api}/posts`, { headers })
      .then(res => res.json())
      .then(data => data);
      
  static fetchPostById = (id) =>
    fetch(`${api}/posts/${id}`, { headers })
      .then(res => res.json())
      .then(data => data);
      
  static fetchCategories = () =>
    fetch(`${api}/categories`, { headers })
      .then(res => res.json())
      .then(data => data.categories);
      
  static fetchPostsByCategory = (category) =>
    fetch(`${api}/${category}/posts`, { headers })
      .then(res => res.json())
      .then(data => data);
      
  static addPost = (post) =>
    fetch(`${api}/posts`, {
      method: 'POST',
      headers: headersToPost,
      body: JSON.stringify(post)
    })
      .then(res => res.json())
      .then(data => data);
      
  static editPost = (post) =>
    fetch(`${api}/posts/${post.id}`, {
      method: 'PUT',
      headers: headersToPost,
      body: JSON.stringify(post)
    })
      .then(res => res.json())
      .then(data => data);
}

// ** With Async await (less expresive... I prefer two "then")
// static fetchPosts = async () =>
//   await (await fetch(`${api}/posts`, { headers })).json()
