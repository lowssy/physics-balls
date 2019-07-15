function scaleValue(value, from, to) {
	var scale = (to[1] - to[0]) / (from[1] - from[0]);
	var capped = Math.min(from[1], Math.max(from[0], value)) - from[0];
	return ~~(capped * scale + to[0]);
}

function getRandomBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function getRandomColor() {
  let hue = getRandomBetween(0, 360)

  return `hsl(${hue}, 90%, 50%)`
}

export {scaleValue, getRandomBetween, getRandomColor}