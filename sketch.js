let x_position = 0
let direction = 'right'
let speed = 27
let diameter = 15
let y_position = 0
let y_direction = 'down'
let angle = 0
//let x_position2=500
//let direction2 = 'right'
//let speed2 = 27
//let lind_end = 600

function setup() {

	createCanvas(900,500)

	x_position = random(0, width)
	y_position = random(0, height)
	angleMode(DEGREES)
}

function draw() {
// do some art with staggered vertical and horizontal lines
//background(240)

strokeWeight(5)
//line(x_position, 0, x_position, height)

push()
translate(x_position,y_position)
ellipse(0, 0, diameter/2, diameter/2)
stroke(random(0,255),random(0,255),random(0,255))
arc(0, 0, diameter, diameter, angle, angle+5, PIE)
angle += 1
arc(0, 0, diameter, diameter, angle/2, angle+5, PIE)
angle += 1


//beginShape()
//vertex(0,0)
//vertex(20,50)
//vertex(30, 70)
//vertex(0,0)
//endShape()
//pop()


push()
strokeWeight(2)
translate(x_position,y_position)
ellipse(30, 30, diameter, diameter)
stroke(random(0,255),random(0,255),random(0,255))
//arc(0, 0, diameter, diameter, angle, angle+5, PIE)
//angle += 1
//arc(0, 0, diameter, diameter, angle/2, angle+5, PIE)
//angle += 1

//line(x_position+1,y_position,x_position/2, y_position/2)
pop()

if (direction == 'right') {
x_position = x_position + speed
}

if (direction=='left') {
	x_position = x_position - speed
}

if (y_direction== 'down') {
	y_position += speed
}

if (y_direction== 'up') {
	y_position -= speed
}
//right wall
if (x_position >= width -diameter/2) {
direction='left'
stroke(random(0, 255),random(0, 255),random(0, 255))
fill(random(0,255),random(0,255),random(0,255))
}

//left wall
if (x_position <= 0 +diameter/2) {
	direction='right'
stroke(random(0, 255),random(0, 255),random(0, 255))
fill(random(0,255),random(0,255),random(0,255))
}

//bottom wall
if (y_position >= height - diameter/2) {

y_direction = 'up'
stroke(random(0, 255),random(0, 255),random(0, 255))
fill(random(0,255),random(0,255),random(0,255))
}

//top wall

if (y_position <= 0 + diameter/2) {
	
y_direction='down'
stroke(random(0, 255),random(0, 255),random(0, 255))
fill(random(0,255),random(0,255),random(0,255))
}

push()
noFill()
strokeWeight(1)
stroke(0)
rect(0, 0, width, height)
//stroke(0)
pop()
}


//SECOND ONE

let x_position2 = 5
let direction2 = 'right'
let speed2 = 10
let diameter2 = 75
let y_position2 = 5
let y_direction2 = 'down'
let angle2 = 0
//let lind_end = 600







//beginShape()
//vertex(200 + x_position, 200 + y_position)
//endShape()
//beginShape()
//vertex(200 + x_position, 200 + y_position)
//endShape()