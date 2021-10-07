import { ArrayQueue } from "./ArrayQueue"
import { reverseQueue } from "./reverse-queue"

describe("reverse-queue", () => {
	test("reverse-queue", () => {
		let queue = new ArrayQueue(100, [1, 2, 3])
		
		reverseQueue(queue)
		
		expect(queue.toArray()).toEqual([3, 2, 1])
	})
})