import { form} from '../variables/index.js	';
import {addTodoItem} from '../utils/index.js';

form.addEventListener('submit', addTodoItem);
