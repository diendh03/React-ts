import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8080/api",
  headers: {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MjFhZGIzZDk3Yzc2MmUzNjg0ODFjZSIsImlhdCI6MTY4MDQ2MjkwNywiZXhwIjoxNjgwNTQ5MzA3fQ.cpHu5aNbzSPeVwb5NdgBC-zXdmUShOqdCEZ7Yym4YKE`,
    // Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
  },
});

export default instance;
