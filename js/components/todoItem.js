// export const todoItem = (params) => `
//             <div class="list__item">

//                 <div id="list">
// 								<i class="list__checkbox fa-regular fa-square sss "></i>
//                     ${params}
//                 </div>
// 								 <div class="list__delete-item">
// 									 <i class="list__delete-cross fa-solid fa-xmark"></i>
// 								</div>
//             </div>
// // 	        `;
import { list} from '../variables/index.js	';
export const todoItem = (params) => {
	
		let listItem = document.createElement('div');
		let list1 = document.createElement('div');
		let listCheckbox = document.createElement('i');
		let listDeleteItem = document.createElement('div');
		let listDeleteCross = document.createElement('i');

		listItem.className = 'list__item';

		list1.id = 'list';
		list1.innerHTML = `${params}`;

		listCheckbox.className = 'list__checkbox fa-regular fa-square sss ';

		listDeleteItem.className = 'list__delete-item';

		listDeleteCross.className = 'list__delete-cross fa-solid fa-xmark';


		listItem.append(list1);
		listItem.append(listDeleteItem);
		list1.prepend(listCheckbox);
		listDeleteItem.append(listDeleteCross);
		list.prepend(listItem);

			
};