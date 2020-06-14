var arr = [];
var arr1 = [];
function setup(){
  createCanvas(400,400)
  database=database.firebase();
  background("black")
}

function draw(){
  beginShape();
  stroke(255);
  strokeWeight(4);
  noFill();
  for(var i=0; i<arr.length; i++){
    vertex(arr[i].x,arr[i].y)
    endShape();
  }
}
function mouseDragged(){
  var point={x:mouseX, y:mouseY}
  arr.push(point);
  database.ref('drawing').set({"d":arr1});
}
function readData () {
  database.ref('drawing').on("value",(Data)=>{
    arr=Data.val().d;
  });
}
