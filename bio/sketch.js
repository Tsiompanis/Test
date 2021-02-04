let slider;
let sel;
let fyl = 1;
let percentage;
let deaths;


let img;
function preload() {
  img = loadImage('assets/bckg.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  slider = createSlider(0, 100, 50, 1);
  slider.position(950, 250);
  slider.style('width', '500px');
  sel = createSelect();
  sel.position(1080, 305);
  sel.option('Αρσενικό');
  sel.option('Θυληκό');
  sel.changed(mySelectEvent);
  
}

function draw() {
  background(40);
  let val = slider.value();
  fill(255);
  rect(40, 40, windowWidth-90, windowHeight-80, 20);

  image(img, 50, 50, 1440, 810);

  fill(0);
  textAlign(CENTER);
  textSize(30);
  text("ΗΛΙΚΙΑ: " + val,850,220,400,400);
  text("ΦΥΛΟ: ",830,300,400,400);
  textSize(40);
	
  if(val >= 0 && val <= 19){
  	percentage = "<0.3";
  }



  if(val >= 20 && val <= 39){
  	percentage = 0.3;
  }



  if(val >= 49 && val <= 59 && fyl == 1){
  	percentage = 3.4;
  }
  if(val >= 49 && val <= 59 && fyl == 2){
  	percentage = 1.8;
  }

  
  if(val >= 60 && val <= 79 && fyl == 1){
  	percentage = 11.2;
  }
  if(val >= 60 && val <= 79 && fyl == 2){
  	percentage = 4.2;
  }


if(val >= 80 && val <= 100 && fyl == 1){
  	percentage = 17.3;
  }
  if(val >= 80 && val <= 100 && fyl == 2){
  	percentage = 8.9;
  }





  if(val >= 0 && val <= 35){
  	deaths = "<10";
  }

  if(val >= 35 && val <= 44 && fyl == 1){
  	deaths = 25;
  }
  if(val >= 35 && val <= 44 && fyl == 2){
  	deaths = 10;
  }



  if(val >= 45 && val <= 54 && fyl == 1){
  	deaths = 75;
  }
  if(val >= 45 && val <= 54 && fyl == 2){
  	deaths = 35;
  }


  if(val >= 55 && val <= 64 && fyl == 1){
  	deaths = 125;
  }
  if(val >= 55 && val <= 64 && fyl == 2){
  	deaths = 60;
  }


  if(val >= 65 && val <= 74 && fyl == 1){
  	deaths = 125;
  }
  if(val >= 65 && val <= 74 && fyl == 2){
  	deaths = 70;
  }


  if(val >= 75 && val <= 84 && fyl == 1){
  	deaths = 120;
  }
  if(val >= 75 && val <= 84 && fyl == 2){
  	deaths = 100;
  }


  if(val >= 85 && val <= 100 && fyl == 1){
  	deaths = 80;
  }
  if(val >= 85 && val <= 100 && fyl == 2){
  	deaths = 110;
  }
  







  text("Το " + percentage + "% των ατομων με τα παραπάνω χαρακτηριστικά εμφανίζουν έμφραγμα του μυοκαρδίου. Περίπου " + deaths + " στους χίλους πεθαίνουν. Με το ποσοστό να πέφτει σταθερά καθε χρόνο!", 950, 395, 600, 400);
}

function mySelectEvent() {
  let item = sel.value();
  if(item === "Αρσενικό")
  {
  	fyl = 1;
  }
  if(item === "Θυληκό")
  {
  	fyl = 2;
  }
}

