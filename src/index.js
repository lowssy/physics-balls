import Ball from './Ball.js'
import {getRandomBetween, scaleValue, getRandomColor, getBlur} from './Tools.js'

const WIDTH = 500
const HEIGHT = 500
const BALLS_TOTAL = 16

const canvas = document.getElementById('canvas')
canvas.width = WIDTH
canvas.height = HEIGHT
let ctx = canvas.getContext('2d')

let balls = []

for(let i = 0; i < BALLS_TOTAL; i++) {
  let radius = getRandomBetween(10, 30)
  let x = getRandomBetween(radius, WIDTH - radius)
  let y = getRandomBetween(radius, HEIGHT/2 - radius)
  let dx = getRandomBetween(-2, 2)
  let dy = scaleValue(radius, [10, 30], [0, 2])

  balls.push(new Ball(x, y, radius, dx, dy, getRandomColor(radius), getBlur(radius)))
  balls[i].draw(ctx)
}

function loop() {
  window.requestAnimationFrame(loop)
  ctx.clearRect(0, 0, WIDTH, HEIGHT)

  balls.forEach(ball => {
    ball.update(ctx)
  })
}

loop()