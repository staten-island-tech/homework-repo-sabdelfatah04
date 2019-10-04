///28
const featured = ['a','b', 'c'];
const specialty = ['x', 'y', 'z'];
const pizza = featured.concat(specialty);

/* let pizza = []; */
/* pizza = pizza.concat(featured);
pizza.push ('v');
pizza = pizza.concat(specialty);
console.log(pizza); */
//to much work better option->
const pizza = [...featured, 'v', ...specialty];
//const firdayPizza = []concat.pizza; 
const firdayPizza = [...pizza];

//29
const heading = document.querySelector('.jump');
sparanWrap(heading.textContent);
heading.innerHTML = sparanWrap(heading.textContent)
;
function sparanWrap(word) {
  return[...word].map(letter => `<span> ${letter}</span>`).join('');
}