const $button = document.querySelector('button')
const $normalMsg = document.querySelector('.normal-msg')
const $debounceMsg = document.querySelector('.debounce-msg')
const $throttleMsg = document.querySelector('.throttle-msg')

const debounce = (cb, delay) => {
  let timerId;
  return (...args) => {
    if (timerId) clearTimeout(timerId)
    timerId = setTimeout(cb, delay, ...args)
  }
}

const throttle = (cb, delay) => {
  let timerId;
  return (...args) => {
    if (timerId) return;
    timerId = setTimeout(() => {
      cb(...args);
      timerId = null;
    }, delay)
  }
}

$button.addEventListener('click', () => {
  $normalMsg.textContent = +$normalMsg.textContent + 1;
})

$button.addEventListener('click', debounce(() => {
  $debounceMsg.textContent = +$debounceMsg.textContent + 1;
}, 500))

$button.addEventListener('click', throttle(() => {
  $throttleMsg.textContent = +$throttleMsg.textContent + 1;
}, 500))