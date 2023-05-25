const API_ENDPOINT = "https://64400ae2b9e6d064be064168.mockapi.io";

export const getTodos = () => {
  return fetch(`${API_ENDPOINT}/todos`).then((response) => response.json());
};

export const postTodo = (todo) => {
  return fetch(`${API_ENDPOINT}/todos`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todo),
  }).then((response) => response.json());
};

export const updateTodo = (todo) => {
  return fetch(`${API_ENDPOINT}/todos/${todo.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todo),
  }).then((response) => response.json());
};

export const deleteTodo = (todo) => {
  return fetch(`${API_ENDPOINT}/todos/${todo.id}`, {
    method: "DELETE",
  }).then((response) => response.json());
};
