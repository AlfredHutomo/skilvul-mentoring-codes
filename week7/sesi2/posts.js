const getPosts = () => {
  fetch("https://64400ae2b9e6d064be064168.mockapi.io/post")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      // set inner html di sini
      const postList = document.querySelector("#posts-list");

      const postsHtml = data
        .map((post) => {
          return `
            <div>
                <h2>${post.content}</h2>
                <a href="/post.html?id=${post.id}">Read more</a>
            </div>
        `;
        })
        .join("");

      postList.innerHTML = postsHtml;
    });
};

getPosts();
