/**
 * @typedef Freelancer
 * @property {string} name
 * @property {string} occupation
 * @property {number} rate
 */

// === Constants ===
const NAMES = ["Alice", "Bob", "Carol", "Dave", "Eve"];
const OCCUPATIONS = ["Writer", "Teacher", "Programmer", "Designer", "Engineer"];
const PRICE_RANGE = { min: 20, max: 200 };
const NUM_FREELANCERS = 100;
const ARRAYFREELANCERS = [];

const getRandom = () => {
  const numName = Math.floor(Math.random() * NAMES.length);
  const name = NAMES[numName];
  const numOccupations = Math.floor(Math.random() * OCCUPATIONS.length);
  const occupations = OCCUPATIONS[numOccupations];
  const price =
    Math.floor(Math.random() * (PRICE_RANGE.max - PRICE_RANGE.min)) +
    PRICE_RANGE.min;

  return { name, occupations, price };
};

const createFreelancers = () => {
  for (let i = 0; i < NUM_FREELANCERS; i++) {
    const ranFreelancer = getRandom();
    ranFreelancer.id = i + 1;
    ARRAYFREELANCERS.push(ranFreelancer);
  }
};

createFreelancers();
console.log(ARRAYFREELANCERS);

const getAverage = () => {
  const avgPrice =
    ARRAYFREELANCERS.reduce((a, b) => a + b.price, 0) / NUM_FREELANCERS;
  console.log();
  return avgPrice;
};
const FINALAVERAGE = getAverage();

const singleFreelancer = () => {
  const freeLancerOne = Math.floor(Math.random() * ARRAYFREELANCERS.length);
  return ARRAYFREELANCERS[freeLancerOne];
};
console.log(singleFreelancer());

const freelancerArray = () => {
  const $ul = document.createElement("ul");
  ARRAYFREELANCERS.forEach((freelancer) => {
    const $li = document.createElement("li");
    $li.textContent = `${freelancer.name} - ${freelancer.occupations} - $${freelancer.price}/hr`;
    $ul.appendChild($li);
  });
  return $ul;
};

const listAvgPrice = () => {
  const $p = document.createElement("p");
  $p.textContent = FINALAVERAGE;
  return $p;
};

console.log(getAverage());
const main = () => {
  const $app = document.querySelector("#app");
  $app.innerHTML = `
    <h1>Freelancer Forum</h1>
    <listAvgPrice></listAvgPrice>
    <freelancerArray></freelancerArray>
  `;
  $app.querySelector("listAvgPrice").replaceWith(listAvgPrice());
  $app.querySelector("freelancerArray").replaceWith(freelancerArray());
};

main();
