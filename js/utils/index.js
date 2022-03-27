import { counterItem, input, list } from '../variables/index.js';
import { todoItem } from '../components/todoItem.js';
import { amountItem } from '../entitys/amountItem.js';

export const addTodoItem = (e) => {
	let isInputValue = input.value;
	e.preventDefault();

	if (isInputValue.length) {
		list.innerHTML += todoItem(isInputValue);
		input.value = '';
		counterItem.innerHTML = amountItem.increment();
	}
	let currentTodo = document.querySelectorAll('.list__delete-item');
	let checkbox = document.querySelectorAll('.list__checkbox');

	for (let i = 0; i < currentTodo.length; i++) {
		currentTodo[i].addEventListener('click', deleteTodo);
		function deleteTodo() {
			this.parentNode.remove();
			counterItem.innerHTML = amountItem.decrement();
		}

		checkbox[i].addEventListener('click', changeCheckbox);
		function changeCheckbox() {
			this.parentNode.classList.toggle('list__checkbox-active');
		}
	}
};
