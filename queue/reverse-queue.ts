import { ArrayQueue } from "./ArrayQueue"

export function reverseQueue(queue: ArrayQueue): ArrayQueue {
	let stack = []
	
	while (!queue.isEmpty()) {
		stack.push(queue.remove())
	}
	
	while (stack.length > 0) {
		queue.add(stack.pop())
	}
	
	return queue
}