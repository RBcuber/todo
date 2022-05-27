export const amountItem = {
	taskCount: 0,

	get() {
		return this.taskCount
	},
	
	increment() {
		return ++this.taskCount
	},

	decrement() {
		console.log(this.taskCount)
		return --this.taskCount;
	},
}
