

let start = null;
const duration = 1000;

const step = (timestamp) => {
  if(!start)
    start = timestamp;

  let progress = timestamp - start;
  console.log('progress:', progress)
  if(progress < duration) {
    window.requestAnimationFrame(step)
  }
}

window.requestAnimationFrame(step)