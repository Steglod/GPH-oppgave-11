console.log('Hello!');

const deleteButton = document.querySelector('#deleteButton');
console.log(deleteButton);

function deleteButtonClick() {
  console.log('knapp Click');

  const header = document.querySelector('#header');
  console.log(header);

  const main = document.querySelector('#main');
  console.log(main);

  header.classList.add('hidden');
  main.classList.add('hidden');
}

deleteButton.addEventListener('click', deleteButtonClick);
