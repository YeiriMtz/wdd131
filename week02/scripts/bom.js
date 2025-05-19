const input = document.querySelector('#favchap');  
const button = document.querySelector('button');  
const list = document.querySelector('#list');

button.addEventListener('click', function() {
  if (input.value.trim() === '') {
    alert('Please enter a Book and Chapter before adding.');
    input.focus();
    return;
  }

  const li = document.createElement('li');          
  const deleteButton = document.createElement('button');

  li.textContent = input.value;
  deleteButton.textContent = '❌';

  deleteButton.addEventListener('click', function() {
    li.remove();
  });

  li.append(deleteButton);
  list.append(li);

  input.value = '';
  input.focus();
});













