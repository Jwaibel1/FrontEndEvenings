async function fetchPosts() {
  const url = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=10"
  )
    .then((response) => response.json())
    .then((json) => console.log("POSTS: ", json))
    .catch((err) => console.log("err:", err));
}

fetchPosts();
