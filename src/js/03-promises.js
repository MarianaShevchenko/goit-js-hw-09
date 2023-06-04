// function createPromise(position, delay) {
//   const shouldResolve = Math.random() > 0.3;
//   if (shouldResolve) {
//     // Fulfill
//   } else {
//     // Reject
//   }
// }
// Получаем ссылку на форму
const form = document.querySelector('.form');

// Обработчик события отправки формы
form.addEventListener('submit', function (event) {
  event.preventDefault(); // Отменяем стандартное поведение формы

  // Получаем значения полей формы
  const delayInput = form.querySelector('input[name="delay"]');
  const stepInput = form.querySelector('input[name="step"]');
  const amountInput = form.querySelector('input[name="amount"]');
  const firstDelay = parseInt(delayInput.value);
  const step = parseInt(stepInput.value);
  const amount = parseInt(amountInput.value);

  // Создаем промисы
  for (let i = 0; i < amount; i++) {
    const position = i + 1;
    const delay = firstDelay + i * step;

    createPromise(position, delay)
      .then(({ position, delay }) => {
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      });
  }

  // Сбрасываем значения полей формы
  form.reset();
});

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    if (shouldResolve) {
      setTimeout(() => {
        resolve({ position, delay });
      }, delay);
    } else {
      setTimeout(() => {
        reject({ position, delay });
      }, delay);
    }
  });
}
