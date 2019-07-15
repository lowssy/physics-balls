const WIDTH = 500
const HEIGHT = 500
const FRICTION = 0.99
const ACCELERATION = 1

class Ball {
  constructor(x, y, radius, dx, dy, color) {
    this.x = x
    this.y = y
    this.dy = dy
    this.dx = dx
    this.radius = radius
    this.color = color
    console.log(this.dy)
  }

  update(ctx) {
    if(this.y + this.radius + this.dy >= HEIGHT) {
      this.dy = -this.dy * FRICTION
    } else {
      this.dy += ACCELERATION
    }

    if(this.x + this.radius + this.dx >= WIDTH || this.x - this.radius <= 0) {
      this.dx = -this.dx * FRICTION
    }

    this.y += this.dy
    this.x += this.dx

    this.draw(ctx)
  }

  draw(ctx) {
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
    // ctx.ellipse(this.x + this.radius, this.y + this.radius, this.radius, this.radius, 0, 0, Math.PI * 2)
    ctx.fillStyle = this.color
    ctx.fill()
    // ctx.stroke()
    ctx.closePath()
  }
}

export default Ball