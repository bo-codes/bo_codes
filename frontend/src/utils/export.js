let API_URL;
{
  process.env.NODE_ENV !== "production"
    ? (API_URL = "http://localhost:3001/api/gh/")
    : (API_URL = "https://bo-codes.herokuapp.com/api/gh/");
}

export async function fetchData(username) {
  return await fetch(API_URL).then((res) => {
    res.json();
    // console.log(res.json(), "exports.js fetchData")
  });
}

export function cleanUsername(username) {
  return username.replace(/^(http|https):\/\/(?!www\.)github\.com\//, "");
}
