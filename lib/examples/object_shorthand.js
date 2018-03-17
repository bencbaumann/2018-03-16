// In this example, I'm illustrating that if they property name and value are the same you can use es6 shorthand like so
const LukeSkywalker = 'Luke Skywalker'
const age = 35

var jedi = {
  LukeSkywalker
}

console.log(jedi)

// It's considered best practive when doing this to put all your shorthand property assignments at the top of the object
var jedi = {
  LukeSkywalker,
  age,
  mission: 'Destroy the death star'
}

console.log(jedi)
