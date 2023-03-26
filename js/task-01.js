const list = document.querySelectorAll('li.item');
console.dir(`Number of categories: ${list.length}`);
const ul = document.querySelectorAll('#categories>li');
ul.forEach(el => {
  console.dir(
`Category: ${el.firstElementChild.textContent} 
Elements: ${el.lastElementChild.children.length}`,
  );
});