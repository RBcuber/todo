const counterItem = document.getElementsByClassName('todo__counter')[0];
const button = document.getElementsByClassName('button')[0];
const input = document.getElementById('todo__input-task');
const form = document.getElementById('todo__form');
const list = document.querySelector('#todo__list');
let test;
let amountItem = 0;

form.addEventListener('submit', qwe);

function qwe(e) {
	e.preventDefault();
	if (input.value.length) {
			list.innerHTML += `
            <div class="todo__task-item">
						
                <div id="todo__task-name">
								<i class="fa-regular fa-square sss"></i>
                    ${input.value}
                </div>
								 <div class="todo__delete-item">
									 <i class="fa-solid fa-xmark"></i>
								</div>	
            </div>
	        `;
			input.value = '';
			counterItem.innerHTML = ++amountItem;
	}
	let current_tasks = document.querySelectorAll('.todo__delete-item');
	let fa_square = document.querySelectorAll('.fa-square');
	for (let i = 0; i < current_tasks.length; i++) {
		current_tasks[i].addEventListener('click', deleteTodo);
		function deleteTodo() {
			this.parentNode.remove();
			counterItem.innerHTML = --amountItem;
			
		}
		fa_square[i].addEventListener('click', changeCheckbox);
		function changeCheckbox() {
			this.parentNode.classList.toggle('fa-square-active');
		};
	}
	
}
