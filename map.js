const words = ["ground", "control", "to", "major", "tom"];
// const results1 = words.map((word) => word[0]);
// console.log(results1);



const map = (array, callback) => {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}
const results1 = map(words, word => word[0]);
console.log(results1);