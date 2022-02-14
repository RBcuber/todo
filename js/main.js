let counterItem = document.getElementsByClassName('todo__counter')[0];
let button = document.getElementsByClassName('button')[0];


document.onkeyup = function(e) {
	if (e.key === "Enter") {
		if (document.querySelector('#todo__input-task').value.length == 0) {
		} else {
			document.querySelector('#todo__tasks').innerHTML += `
            <div class="todo__task-item">
                <span id="todo__task-name">
                    ${document.querySelector('#todo__input-task').value}
                </span>
									
            </div>
	        `;
			document.querySelector('#todo__input-task').value = '';
			counterItem.innerHTML++;
		}
	}
};
