let slider;
let sel;
let fyl;
let percentage;
let deaths;


let img;
function preload() {
  img = loadImage('assets/bckg.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  slider = createSlider(0, 100, 16, 1);
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
	


  text("Το " + percentage + "% των ατομων με τα παραπάνω χαρακτηριστικά εμφανίζουν έμφραγμα του μυοκαρδίου. Περίπου " + deaths + " στους χίλους πεθαίνουν. Με το ποσοστό να πέφτει σταθερά καθε χρόνο!", 950, 395, 600, 400);
}

function mySelectEvent() {
  // let item = sel.value();
  // if(item === "Αρσενικό")
  // {
  // 	fyl = 1;
  // }
  // else()
  // {
  // 	fyl = 2;
  // }
}
