import MakeRequest from "../../../utils/apiHandler"

export async function loginUserAPIcall(body = { username: "", password: "" }) {
  try {
    let result = await MakeRequest("http://127.0.0.1:5000/user").post(body);
    console.log("FROM LoginAPI ", result);
    if (result.status === 200) {
      console.log("FROM LoginAPI ", result);
      return { state: true, data: result.data };
    } else {
      console.log("FROM LoginAPI ", result);
      return { state: false, data: result.message };
    }
  } catch (error) {
    console.log(error);
  }
}