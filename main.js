
//Mixed Messages group project by ikoji and frozt.

// message generator program.
// runs a program > should get a new
// randomized output
// three different pieces of data.




// Function that generates a random number between 0 and the argument:
const randomize = (arraySize) => {
  return Math.floor(Math.random() * arraySize);
};




// One way to do it(frozt):

let sentOne = ['O Zézinho','A Maria','O Francisco'];
let sentTwo = ['viajou a França', 'viajou a Itália', 'viajou a França'];
let sentThree = ['o ano passado', 'à 5 anos atrás', 'a semana passada'];

const randomSentence = () =>
{
  let rand1=sentOne[randomize(3)];
  let rand2=sentTwo[randomize(3)];
  let rand3=sentThree[randomize(3)];
  let frase = rand1.concat(' ',rand2, ' ', rand3,'.')

  return frase;
}

console.log(randomSentence());






// Another way to do it(ikoji):

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

