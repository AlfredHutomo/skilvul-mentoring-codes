const getPostById = () => {
  // https:://localhost:5500/post.html?id=10
  const params = new URL(document.location).searchParams;
  const postId = params.get("id");

  fetch(`https://64400ae2b9e6d064be064168.mockapi.io/post/${postId}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      // set inner html di sini
      const postHtml = `
        <img src="${data.image}" />
        <h1>${data.content}</h1>
        <h3>${data.author}</h3>
        <p>${data.createdAt}</p>
      `;

      const postContainer = document.querySelector("#post-container");
      postContainer.innerHTML = postHtml;
    });
};

getPostById();
