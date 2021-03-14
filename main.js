// sync test
// message generator program.
// runs a program > should get a new
// randomized output
// three different pieces of data.

const randomize = () => {
  return Math.floor(Math.random() * 3);
};

let sentOne = ['O Zézinho','A Maria','O Francisco'];
let sentTwo = [' viajou a França', ' viajou a Itália', ' viajou a França'];
let sentThree = [' o ano passado', ' à 5 anos atrás', ' a semana passada.'];

const randomSentence = () =>
{
  return (sentOne[randomize()]+sentTwo[randomize()]+sentThree[randomize()]);
}

console.log(randomSentence)
console.log(randomize)