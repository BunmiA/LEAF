var scribble = new Scribble();              // global mode
// var scribble = new Scribble( p5Instance );  // instance mode
var hasEntertainment;
var leaf;
var canvas;
var leaves = [];
var counter = 0;
var h = 0;
var numberOfLeaves = 0;


function  setup() {
    h = windowHeight;
    canvas = createCanvas(windowWidth, h);
    canvas.position(0,0);
    canvas.style('position','fixed');
    canvas.style('top','0');
    canvas.style('left','0');
    canvas.style('z-index','9999');
    canvas.style('pointer-events','none');
    canvas.style('background-color','transparent');
    numberOfLeaves = round(windowWidth/(2* 50 ));

        // leaf = new Leaf(50, 0);
    angleMode(DEGREES);
    // clear();

}

function windowResized(windowWidth, windowHeight) {
    h = windowHeight;
    resizeCanvas(windowWidth,windowHeight)
    numberOfLeaves = round(windowWidth/(2* 50 ));

}

function draw() {

    var pageTextContent = document.body ? document.body.textContent || '' : '';
    hasEntertainment = window.LEAF && window.LEAF.containsEntertainment(pageTextContent);
    clear();
    if (hasEntertainment){
        console.log("Stop",hasEntertainment );
        counter +=1;
        if (leaves.length < numberOfLeaves){
            for (var i = leaves.length; i < numberOfLeaves; i++){
                leaves.push(new Leaf(random(windowWidth), random(-h, 0)));
            }
        }

        for (var i = 0; i < leaves.length; i++){
            leaves[i].move();
            leaves[i].display();
        }

    }else{
        console.log("continue", hasEntertainment);
    }

}

function Leaf(x, y) {
    this.x = x;
    this.y = y;
    this.height = 25;
    this.width = 50;
    this.triangleTopx = 0;
    this.triangleTopy = 0;
    this.triangleLeftx = this.triangleTopx - 1;
    this.triangleLefty = this.triangleTopy + this.width;
    this.triangleRightx = this.triangleTopx + 1;
    this.triangleRighty = this.triangleTopy + this.width;
    this.rotation = random(360);
    this.rotationSpeed = random(-1, 1);
    this.speed = random(1.5, 3.5);

    this.resetPosition = function() {
        this.x = random(windowWidth);
        this.y = random(-h * 0.5, 0);
    };

    this.move = function() {
        this.y += this.speed;
        this.rotation += this.rotationSpeed;
        if (this.y - this.height > h) {
            this.resetPosition();
        }
    };

    this.display = function() {
        push();
        translate(this.x, this.y);
        rotate(this.rotation);
        fill(78,105,26);
        ellipse(0, 0, this.height, this.width);
        fill(133,87,35);
        triangle(this.triangleLeftx,this.triangleLefty,this.triangleTopx,this.triangleTopy, this.triangleRightx,this.triangleRighty);
        pop();

    };
}




