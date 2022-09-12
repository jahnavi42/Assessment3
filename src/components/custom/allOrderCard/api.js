import MakeRequest from "../../../utils/apiHandler";
export async function OrderCancelcall(body = { username: "", password: "" }) {
  try {
    let result = await MakeRequest("http://127.0.0.1:5000/storeItem").post(
      body
    );

    if (result.status === 200) {
      return { state: true, data: result.data };
    } else {
      return { state: false, data: result.message };
    }
  } catch (error) {
    console.log(error);
  }
}