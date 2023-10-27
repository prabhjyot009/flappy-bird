//board
let board;
let boardWidth=360;
let boardHeight=640;
let context;

//bird
let birdWidth=34;//width
let birdHeight=24;
let birdX=boardWidth/8;
let birdY=boardHeight/2;
let birdImg;

let bird={
    x : birdX,
    y : birdY,
    height : birdHeight,
    width : birdWidth
}

window.onload=function(){
    board=document.getElementById("board");
    board.height=boardHeight;
    board.width=boardWidth;
    context = board.getContext("2d");//used for drawing on the board
    
    //draw flappy bird
    // context.fillStyle= "green";
    // context.fillRect(bird.x,bird.y,bird.width,bird.height);

    //load images;
    birdImg=new Image();
    birdImg.src="./flappybird.png";
    birdImg.onload=function(){
    context.drawImage(birdImg,bird.x,bird.y,bird.width,bird.height);
    }

    requestAnimationFrame(update);
}

function update() {
    requestAnimationFrame(update);
    //so everytime we draw on our canvas we need to clear the frame otherwise the frames will stack on top of each other.
    context.clearRect(0,0,board.width,board.height);

    //bird
    context.drawImage(birdImg,bird.x,bird.y,bird.width,bird.height);
}