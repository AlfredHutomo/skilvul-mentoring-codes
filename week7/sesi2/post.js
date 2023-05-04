const postContainer = document.querySelector("#post-container");

const getPostById = () => {
  // https:://localhost:5500/post.html?id=10
  const params = new URL(document.location).searchParams;
  const postId = params.get("id");

  fetch(`https://64400ae2b9e6d064be064168.mockapi.io/post/${postId}`)
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        postContainer.innerHTML = "<h1>Post not found</h1>";
      }
    })
    .then((data) => {
      console.log(data);
      // set inner html di sini
      const postHtml = `
        <img src="${data.image}" />
        <h1>${data.content}</h1>
        <h3>${data.author}</h3>
        <p>${data.createdAt}</p>
      `;

      postContainer.innerHTML = postHtml;
    });
};

getPostById();
