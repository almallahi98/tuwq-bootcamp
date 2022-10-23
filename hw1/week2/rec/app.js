console.log(document);
console.log(document.head);
console.log(document.body);
let elm=document.getElementById("p1")
console.log(elm);
elm.innerHTML='<b>hi</b>';

let r=document.children[0];
console.log("first node: "+r);
console.log(r);



let h1=document.getElementById('h1');
h1.innerText='ghhjkll';
h1.innerHTML='<em>jjjjjjj</em>';
let x=h1.textContent;
console.log("this is x: "+x);
console.log(h1);
let h2=document.getElementById('h2');
console.log(h2);
let h3=document.getElementById('h3');
console.log(h3);
let h4=document.getElementById('h4');
console.log(h4);
let h5=document.getElementById('h5');
console.log(h5);
let h6=document.getElementById('h6');
console.log(h6);

let elmm=document.createElement('h3');
let textNode=document.createTextNode('textnode');
elmm.append(textNode);
document.body.append(elmm);

let reomveh6=document.getElementById('h6');
reomveh6.remove();








//console.log('test')