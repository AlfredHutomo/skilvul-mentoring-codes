const getPosts = () => {
  fetch("https://64400ae2b9e6d064be064168.mockapi.io/post")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      // set inner html di sini
    });
};

const getPostById = () => {
  // https:://localhost:5500/artikel.html?artikelId=10
  const params = new URL(document.location).searchParams;
  const artikelId = params.get("artikelId");

  fetch(`https://64400ae2b9e6d064be064168.mockapi.io/post/${artikelId}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      // set inner html di sini
    });
};

const createArticle = () => {
  const articleObject = {
    title: "ini title",
    body: "ini body",
  };

  fetch("https://www.google.com", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(articleObject),
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      console.log("Request gagal");
    })
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      // handle error
    });
};
