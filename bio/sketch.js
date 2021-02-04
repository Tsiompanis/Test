let slider;
let sel;
let fyl;


let img;
function preload() {
  img = loadImage('assets/bckg.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  slider = createSlider(0, 100, 16, 1);
  slider.position(100, 250);
  slider.style('width', '500px');
  sel = createSelect();
  sel.position(10, 10);
  sel.option('Αρσενικό');
  sel.option('Θυληκό');
  sel.changed(mySelectEvent);
  
}

function draw() {
  background(40);
  let val = slider.value();
  fill(255);
  rect(40, 40, windowWidth-90, windowHeight-80, 20);

  image(img, 70, 90, windowWidth-90, windowHeight-80);

  fill(0);
  textAlign(CENTER);
  
  textSize(30);
  text("ΗΛΙΚΙΑ: " + val,20,220,400,400);
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
