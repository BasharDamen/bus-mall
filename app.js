'use stirct'
// const leftImageElement = document.getElementById('left-image');
// const middleImageElement = document.getElementById('middle-image');
// const rightImageElement = document.getElementById('right-image');
// const images = document.getElementById('products')
const images = document.getElementById('products');
const maxAttempts = 25;
let counter = 0;
function BusMall(name, source) {
  this.name = name;
  this.source = source;
  this.views = 0;
  this.votes = 0;
  BusMall.gloArr.push(this);
}
BusMall.gloArr = [];
new BusMall('bag', 'img/bag.jpg');
new BusMall('banana', 'img/banana.jpg');
new BusMall('bathroom', 'img/bathroom.jpg');
new BusMall('boots', 'img/boots.jpg');
new BusMall('breakfast', 'img/breakfast.jpg');
new BusMall('bubblegum', 'img/bubblegum.jpg');
new BusMall('chair', 'img/chair.jpg');
new BusMall('cthulhu', 'img/cthulhu.jpg');
new BusMall('dog-duck', 'img/dog-duck.jpg');
new BusMall('dragon', 'img/dragon.jpg');
new BusMall('pen', 'img/pen.jpg');
new BusMall('pet-sweep', 'img/pet-sweep.jpg');
new BusMall('scissors', 'img/scissors.jpg');
new BusMall('shark', 'img/shark.jpg');
new BusMall('sweep', 'img/sweep.png');
new BusMall('tauntaun', 'img/tauntaun.jpg');
new BusMall('unicorn', 'img/unicorn.jpg');
new BusMall('water-can', 'img/water-can.jpg');
new BusMall('wine-glass', 'img/wine-glass.jpg');
console.log(BusMall.gloArr);
function randomIndex() {
  return Math.floor(Math.random() * BusMall.gloArr.length);
}


let img1 = document.getElementById('Prod1')
let img2 = document.getElementById('Prod2')
let img3 = document.getElementById('Prod3')


let leftIndex; 
let middleIndex ;
let rightIndex ; 


function renderimgs() {
    leftIndex = randomIndex();
  middleIndex = randomIndex();
  rightIndex = randomIndex();
  console.log(leftIndex);
  console.log(middleIndex);
  console.log(rightIndex);
    while (leftIndex === middleIndex
        || leftIndex === rightIndex
        || rightIndex === middleIndex) {
            leftIndex = randomIndex();
            middleIndex = randomIndex();
            rightIndex = randomIndex();
    }
    img1.src = BusMall.gloArr[leftIndex].source;
    img2.src = BusMall.gloArr[middleIndex].source;
    img3.src = BusMall.gloArr[rightIndex].source;
    BusMall.gloArr[leftIndex].views ++;
    BusMall.gloArr[middleIndex].views ++;
    BusMall.gloArr[rightIndex].views ++;
}
renderimgs();


img1.addEventListener('click', handleClick)
img2.addEventListener('click', handleClick)
img3.addEventListener('click', handleClick)

function renderList() {
    const ul = document.getElementById('unlist');
    
    for (let i = 0; i < BusMall.gloArr.length; i++) {
        let li = document.createElement('li');
        ul.appendChild(li);
        li.textContent = `${BusMall.gloArr[i].name} has this number of votes ( ${BusMall.gloArr[i].votes} ), and has showed up ( ${BusMall.gloArr[i].views} )`;
        

    }
    img1.addEventListener('click', handleClick)
    img2.addEventListener('click', handleClick)
    img3.addEventListener('click', handleClick)
}


function handleClick(event) {
    counter++;
    console.log(event);
    if(maxAttempts >= counter){
        if (event.target.id === 'Prod1') {
            BusMall.gloArr[leftIndex].votes++;
        }else if(event.target.id === 'Prod2'){
            BusMall.gloArr[middleIndex].votes++;
        }else if(event.target.id === 'Prod3'){
            BusMall.gloArr[rightIndex].votes++;
        }
        renderimgs();
    }
    else{
        renderList();
    }
}


