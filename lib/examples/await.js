import axios from 'axios'
const sum = async ([ x, y ]) => await x + y
const numbers = [[2, 7], [1, 4], [11, 12]]

// numbers.map(sum)
//   .map(p => p.then(console.log))
const print = val => console.log(val)

const getRandomPerson = async () => {
  var x = axios.get('https://randomuser.me/api/')
  print(x.data.results)
}

getRandomPerson()
