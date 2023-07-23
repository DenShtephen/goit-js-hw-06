  const plusButton = document.querySelector('[data-action="increment"]');
const minusButton = document.querySelector('[data-action="decrement"]');
const counterResult = document.querySelector('#value');
  
let counterValue = 0;

//  function updateCounter() {
//       counterResult.textContent = counterValue;
//     }

plusButton.addEventListener('click', () => {
        counterValue += 1;
      counterResult.textContent = counterValue;
    });

minusButton.addEventListener('click', () => {
        counterValue -= 1;
      counterResult.textContent = counterValue;
    });