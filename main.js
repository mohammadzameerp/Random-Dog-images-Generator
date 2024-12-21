//-------------------random dog image API-----------

let urldg = "https://dog.ceo/api/breeds/image/random";
let btn2 = document.querySelector("#btn2");

btn2.addEventListener("click", async () => {
  let link = await getimg();
  console.log(link);
  let img = document.querySelector("#fact");
  img.setAttribute("src", link);
});

async function getimg() {
  try {
    let res = await axios.get(urldg);
    return res.data.message;
  } catch (e) {
    return "image not found";
  }
}
