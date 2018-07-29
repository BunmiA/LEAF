var scribble = new Scribble();              // global mode
// var scribble = new Scribble( p5Instance );  // instance mode
var hasEntertainment;
var leaf;
var canvas;
var leaves = [];
var counter = 0;


function  setup() {
    h = document.body.clientHeight;
    canvas = createCanvas(windowWidth, h);
    canvas.position(0,0);
    canvas.style('z-index','800');
    canvas.style('pointer-events','none');
    numberOfLeaves = round(windowWidth/(2* 50 ));

        // leaf = new Leaf(50, 0);
    angleMode(DEGREES);
    // clear();

}

function windowResized(windowWidth, windowHeight) {
    resizeCanvas(windowWidth,windowHeight)
    
}

function draw() {

    hasEntertainment = document.body.innerHTML.includes('Entertainment','Music');
    clear();
    if (hasEntertainment){
        console.log("Stop",hasEntertainment );
        counter +=1;
        background(255);
        if( (counter%50)== 0){

            for (var i = 0; i < numberOfLeaves; i++){
                leaves.push(new Leaf(100*i, 0));
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
    this.translatex = x;
    this.x = 0;
    this.y = y;
    this.height = 25;
    this.width = 50;
    this.triangleTopx =this.x;
    this.triangleTopy =this.y;
    this.triangleLeftx =this.triangleTopx  - 1 ;
    this.triangleLefty =this.triangleTopy + this.width ;
    this.triangleRightx =this.triangleTopx + 1;
    this.triangleRighty =this.triangleTopy + this.width ;
    this.angle = 0 ;
    this.speed = 5;

    this.move = function() {
        this.angle += 1;
    };

    this.display = function() {
        push();
        translate(this.translatex, this.angle);
        rotate(this.angle);
        fill(78,105,26);
        ellipse(this.x, this.y, this.height,this.width);
        fill(133,87,35);
        triangle(this.triangleLeftx,this.triangleLefty,this.triangleTopx,this.triangleTopy, this.triangleRightx,this.triangleRighty);
        pop();

    };
}




