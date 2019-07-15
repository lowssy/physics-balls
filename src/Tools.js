function scaleValue(value, from, to) {
	let scale = (to[1] - to[0]) / (from[1] - from[0])
  let capped = Math.min(from[1], Math.max(from[0], value)) - from[0]
	return ~~(capped * scale + to[0])
}

function getRandomBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function getRandomColor(size) {
  let hue = getRandomBetween(0, 360)
  let light = scaleValue(size, [10, 30], [40, 60])

  return `hsl(${hue}, 90%, ${light}%)`
}

function getBlur(size) {
  let blur = scaleValue(size, [10, 30], [3, 0])

  return `blur(${blur}px)`
}

export {scaleValue, getRandomBetween, getRandomColor, getBlur}