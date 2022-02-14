let counterItem = document.getElementsByClassName('todo__counter')[0];
let button = document.getElementsByClassName('button')[0];

document.onkeyup = function (e) {
	if (e.key === 'Enter') {
		if (document.querySelector('#todo__input-task').value.length == 0) {
		} else {
			document.querySelector('#todo__tasks').innerHTML += `
            <div class="todo__task-item">
						
                <div id="todo__task-name">
								<i class="fa-regular fa-square sss"></i>
                    ${document.querySelector('#todo__input-task').value}
                </div>
								 <div class="todo__delete-item">
									 <i class="fa-solid fa-xmark"></i>
								</div>	
            </div>
	        `;
			document.querySelector('#todo__input-task').value = '';
			counterItem.innerHTML++;
			
		}
			let current_tasks = document.querySelectorAll('.todo__delete-item');
			let fa_square = document.querySelectorAll('.fa-square');
			for (let i = 0; i < current_tasks.length; i++) {
				current_tasks[i].onclick = function () {
					this.parentNode.remove();
					counterItem.innerHTML--;
				};
				fa_square[i].onclick = function () {
					this.parentNode.classList.toggle('fa-square-active');
				}
			}
	}
};