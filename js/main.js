const counterItem = document.querySelectorAll('.info__counter > span')[0];
const button = document.getElementsByClassName('button')[0];
const input = document.getElementById('form__input');
const form = document.getElementById('todo__form');
const list = document.querySelector('#todo__list');
let amountItem = 0;

const todoItem = (params) => `
            <div class="list__item">
						
                <div id="list">
								<i class="list__checkbox fa-regular fa-square sss "></i>
                    ${params}
                </div>
								 <div class="list__delete-item">
									 <i class="list__delete-cross fa-solid fa-xmark"></i>
								</div>	
            </div>
	        `;

form.addEventListener('submit', addTodoItem);

function addTodoItem(e) {
	let isInputValue = input.value
	e.preventDefault();

	if (isInputValue.length) {
		list.innerHTML += todoItem(isInputValue);
		input.value = '';
		counterItem.innerHTML = ++amountItem;
	}
	let currentTodo = document.querySelectorAll('.list__delete-item');
	let checkbox = document.querySelectorAll('.list__checkbox');

	for (let i = 0; i < currentTodo.length; i++) {
		currentTodo[i].addEventListener('click', deleteTodo);
		function deleteTodo() {
			this.parentNode.remove();
			counterItem.innerHTML = --amountItem;
		}

		checkbox[i].addEventListener('click', changeCheckbox);
		function changeCheckbox() {
			this.parentNode.classList.toggle('list__checkbox-active');
		}
	}
}
