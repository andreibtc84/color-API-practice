console.log("Connected!");

const generateId = (min, max) => Math.floor(Math.random() * (max - min) + min);
const boxBackground = document.querySelector(".color__api");
const btn = document.querySelector(".run__btn");

const runFetch = () => {
  fetch(`https://reqres.in/api/color/${generateId(1, 20)}`)
    .then((response) => response.json())
    .then((data) => {
      boxBackground.style.backgroundColor = data.data.color;
    })
    .catch((error) => {
      console.log(error);
      boxBackground.style.backgroundColor = "grey";
    });
};

runFetch();

btn.addEventListener("click", runFetch);
