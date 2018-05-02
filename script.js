var canvas = document.querySelector("#canvas");
var ctx = canvas.getContext("2d");
var width = canvas.width;
var height = canvas.height;

var directions = {
  37: "left",
  38: "up",
  39: "right",
  40: "down"
};

function Box(x, y, color) {
  this.x = x;
  this.y = y;
  this.width = 50;
  this.height = 50;
  this.color = color;
  this.direction = "right";
  this.speed = 10;

  this.drawBox = function () {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  };

  this.move = function (direction) {
    if (direction === "left") {
      this.x -= this.speed;
    } else if (direction === "right") {
      this.x += this.speed;
    } else if (direction === "up") {
      this.y -= this.speed;
    } else if (direction === "down") {
      this.y += this.speed;
    }
  };

  this.checkCollision = function () {
    if (this.x > width - this.width) {
      this.x = width - this.width;
    } else if (this.x < 0) {
      this.x = 0;
    } else if (this.y < 0) {
      this.y = 0;
    } else if (this.y > height - this.height) {
      this.y = height - this.height;
    }
  };
}

var box1 = new Box(0, 0, "green");

document.addEventListener("keydown", function (evt) {
  box1.move(directions[evt.keyCode]);
});

setInterval(function () {
  ctx.clearRect(0, 0, width, height);

  box1.checkCollision();
  box1.drawBox();
}, 15);