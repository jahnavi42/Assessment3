import axios from "axios";

export default function MakeRequest(url) {
  const header = {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
    "Access-Control-Allow-Origin": "*",
    "content-type": "application/json",
  };

  const requests = {
    get: async (querryParams) => {
      try {
        let finalUrl = querryParams
          ? `${url}?${Object.keys(querryParams)
              .map((key) => `${key}=${querryParams[key]}`)
              .join("&")}`
          : url;

        return await axios.get(finalUrl, { headers: header });
      } catch (error) {
        console.log(error);
        return { message: "Something went wrong", code: 600 };
      }
    },
    post: async (body) => {
      try {
        return await axios.post(url, body, { headers: header });
      } catch (error) {
        console.log(error);
        return { message: "Something went wrong", code: 600 };
      }
    },
    put: async (body) => {
      try {
        return await axios.put(url, body, { headers: header });
      } catch (error) {
        console.log(error);
        return { message: error.message, code: 600 };
      }
    },
    delete: async (body) => {
      try {
        return await axios.delete(url, { headers: header });
      } catch (error) {
        console.log(error);
        return { message: "Something went wrong", code: 600 };
      }
    },
  };
  return requests;
}