// sync test
// message generator program.
// runs a program > should get a new
// randomized output
// three different pieces of data.

const randomize = (arraySize) => {
  return Math.floor(Math.random() * arraySize);
};

let partOne = ["O Pedro", "A Maria", "O Joaquim"];
let partTwo = [
  "caiu no buraco",
  "comeu uma banana podre",
  "foi dormir mal-cheiroso",
];
let partThree = [
  "pela tarde",
  "durante o jogo do Benfica",
  "sem os pais saberem",
];

const messageMixer = () => {
  const messageOne = partOne[randomize(partOne.length)];
  const messageTwo = partTwo[randomize(partTwo.length)];
  const messageThree = partThree[randomize(partThree.length)];
  return `${messageOne} ${messageTwo} ${messageThree}.`;
};

console.log(messageMixer());

