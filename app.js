'use stirct'
// const leftImageElement = document.getElementById('left-image');
// const middleImageElement = document.getElementById('middle-image');
// const rightImageElement = document.getElementById('right-image');
// const images = document.getElementById('products')
let prodNames =[];

let prodVotes = [];

let prodShown = [];


BusMall.lastShown = [];

const images = document.getElementById('products');

const maxAttempts = 25;

let counter = 0;

function BusMall(name, source) {
  this.name = name;
  this.source = source;
  this.views = 0;
  this.votes = 0;
  BusMall.gloArr.push(this);
  prodNames.push(this.name);

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

console.log(prodNames); 

const img1 = document.getElementById('Prod1')
const img2 = document.getElementById('Prod2')
const img3 = document.getElementById('Prod3')


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
        || rightIndex === middleIndex
        || BusMall.lastShown.includes(leftIndex)
        || BusMall.lastShown.includes(middleIndex)
        || BusMall.lastShown.includes(rightIndex)) {
            leftIndex = randomIndex();
            middleIndex = randomIndex();
            rightIndex = randomIndex();
    }

    BusMall.gloArr[leftIndex].views++;
    BusMall.gloArr[middleIndex].views++;
    BusMall.gloArr[rightIndex].views++;

    BusMall.lastShown[0] = leftIndex;
    BusMall.lastShown[1] = middleIndex;
    BusMall.lastShown[2] = rightIndex;

    img1.src = BusMall.gloArr[leftIndex].source;
    img2.src = BusMall.gloArr[middleIndex].source;
    img3.src = BusMall.gloArr[rightIndex].source;

}
renderimgs();


const imgSection = document.getElementById('products');
imgSection.addEventListener('click', handleClick)

let resultBtn;


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
        }else{
            counter--
            return
        }
        renderimgs();
    }
    else{

        resultBtn = document.getElementById('btn');
        resultBtn.addEventListener('click', handleShow);
        imgSection.removeEventListener('click', handleClick)

    }
}

function handleShow() {
    renderList();
    displayChart();

    resultBtn.removeEventListener('click', handleShow);
}

function renderList() {
    const ul = document.getElementById('unlist');
    
    for (let i = 0; i < BusMall.gloArr.length; i++) {
        prodVotes.push(BusMall.gloArr[i].votes);
        prodShown.push(BusMall.gloArr[i].views);
        let li = document.createElement('li');
        ul.appendChild(li);
        li.textContent = `${BusMall.gloArr[i].name} has this number of votes ( ${BusMall.gloArr[i].votes} ), and has showed up ( ${BusMall.gloArr[i].views} )`;
        

    }
    
}

console.log(prodVotes);


function displayChart(){

    var ctx = document.getElementById('myChart');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: prodNames,
        datasets: [{
            label: '# of Votes',
            data: prodVotes,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                
            ],
            borderWidth: 1
        
        },{
        label: '# of Shown',
        data: prodShown,
        backgroundColor: [
          'rgb(54, 162, 235)'
        ]
        
      }]
  },
})
}

function saveToLs(){

    const convertedArr = JSON.stringify(BusMall.gloArr);
    localStorage.setItem('ProductsVote', convertedArr);
    
}



function getFromLs(){
    const data = localStorage.getItem('ProductsVote');
    console.log(data); 
    const parsedOrder = JSON.parse(data); 
    console.log(parsedOrder); 
    if(parsedOrder){  
        
        BusMall.gloArr = parsedOrder;
    

        renderList();
    }
    
        
}

getFromLs();