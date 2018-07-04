var scribble = new Scribble();              // global mode
// var scribble = new Scribble( p5Instance );  // instance mode
var hasEntertainment;
var leaf;
var canvas;
var leaves = [];


function  setup() {
    // document.body.style['user-select'] = 'none';
    // let h = document.body.clientHeight;
    // let c = createCanvas(windowWidth, windowHeight);
    // c.position(0,0);
    // c.style('pointer-events','none');
    // console.log("hi");
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0,0);
    canvas.style('z-index','-1');
    numberOfLeaves = round(windowWidth/(2* 50 ));
    for (var i = 0; i < numberOfLeaves; i++){
        leaves.push(new Leaf(100*i, 0));

    }
        // leaf = new Leaf(50, 0);
    angleMode(DEGREES);
    // clear();

}

function windowResized(windowWidth, windowHeight) {
    resizeCanvas(windowWidth,windowHeight)
    
}

function draw() {
    hasEntertainment = document.body.innerHTML.includes('Entertainment');
    // scribble.scribbleEllipse( 100, 100, 100, 100 );

    // scribble.scribbleEllipse( 200, 200, 100, 200 );
    // ellipse(400, 400, 100,200);
    // triangle(395,550,400,400, 405,550);
    // line(400, 400 )



    // background(0);
// 0    line(mouseX, mouseY, pmouseX, pmouseY);

    // scribble.scribbleFilling( 100, 100, 100, 100 );

    // scribble.scribbleRect( 100, 4, 10, 12 );
    clear();
    background(225);
    for (var i = 0; i < leaves.length; i++){
        leaves[i].move();
        leaves[i].display();
    }
    // leaf.move();
    // leaf.display();
    if (hasEntertainment){
        console.log("Stop Bunmi",hasEntertainment );

    }else{
        console.log("continue Bunmi", hasEntertainment);
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


    // this.diameter = random(10, 30);
    this.speed = 5;

    this.move = function() {
        // this.x += random(-this.speed, this.speed);

        // this.y += this.speed;
        // this.triangleTopy += this.speed;
        // this.triangleLefty += this.speed;
        // this.triangleRighty += this.speed;
        this.angle += 1;
    };

    this.display = function() {
        push();
        translate(this.translatex, this.angle);
        // ellipseMode(CENTER);
        rotate(this.angle);
        fill(78,105,26);
        ellipse(this.x, this.y, this.height,this.width);
        fill(133,87,35);
        triangle(this.triangleLeftx,this.triangleLefty,this.triangleTopx,this.triangleTopy, this.triangleRightx,this.triangleRighty);
        // line(this.x, this.y)
        pop();

    };
    //
    // this.createStrokes = function () {
    //
    //
    //
    //
    // }
}




