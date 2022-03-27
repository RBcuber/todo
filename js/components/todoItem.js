export const todoItem = (params) => `
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
