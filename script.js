function Box(x, y, color) {
  this.x = x;
  this.y = y;
  this.color = color;
  this.drawBox();
}

Box.prototype.drawBox = function () {
  this.element = document.createElement("div");
  this.element.classList.add("box");
  this.element.style.left = this.x + "px";
  this.element.style.top = this.y + "px";
  this.element.style.backgroundColor = this.color;
  document.querySelector("body").appendChild(this.element);
};

Box.prototype.moveRight = function (distance) {
  let dx = 10;
  if (arguments.length > 0) {
    dx = distance;
  }
  this.x += dx;
  this.element.style.left = this.x + "px";
};

Box.prototype.moveDown = function (distance) {
  let dy = 10;
  if (arguments.length > 0) {
    dy = distance;
  }
  this.y += dy;
  this.element.style.top = this.y + "px";
};

Box.prototype.moveLeft = function (distance) {
  let dx = 10;
  if (arguments.length > 0) {
    dx = distance;
  }
  this.x -= dx;
  this.element.style.left = this.x + "px";
};

Box.prototype.moveUp = function (distance) {
  let dy = 10;
  if (arguments.length > 0) {
    dy = distance;
  }
  this.y -= dy;
  this.element.style.top = this.y + "px";
};

var box1 = new Box(0, 0, "green");

document.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 39) {
    box1.moveRight();
  } else if (evt.keyCode === 37) {
    box1.moveLeft();
  } else if (evt.keyCode === 38) {
    box1.moveUp();
  } else if (evt.keyCode === 40) {
    box1.moveDown();
  }
});

// TODO => canvas