import { ArrayQueue } from "./ArrayQueue"

describe("Queue", () => {
	test("add", () => {
		let q = new ArrayQueue()
		q.add(10)
		q.add(20)
		q.add(30)
		
		expect(q.toArray()).toEqual([10, 20, 30])
	})
	
	test("remove", () => {
		let q = new ArrayQueue()
		q.add(10)
		q.add(20)
		q.add(30)
		
		expect(q.toArray()).toEqual([10, 20, 30])
		
		expect(q.remove()).toBe(10)
		expect(q.remove()).toBe(20)
		expect(q.remove()).toBe(30)
		expect(q.remove()).toBeUndefined()
	})
	
	test("peek", () => {
		let q = new ArrayQueue()
		
		expect(q.remove()).toBe(undefined)
		
		q.add(10)
		expect(q.peek()).toBe(10)
		
		q.add(20)
		expect(q.peek()).toBe(10)
		
		q.add(30)
		expect(q.peek()).toBe(10)
		
		expect(q.remove()).toBe(10)
		expect(q.peek()).toBe(20)
	})
	
	test("isEmpty", () => {
		let q = new ArrayQueue(3)
		
		expect(q.isEmpty()).toBe(true)
		
		q.add(1)
		q.add(2)
		q.add(3)
		expect(q.isEmpty()).toBe(false)
		
		q.remove()
		q.remove()
		q.remove()
		expect(q.isEmpty()).toBe(true)
	})
	
	test("isFull", () => {
		let q = new ArrayQueue(3)
		
		expect(q.isFull()).toBe(false)
		
		q.add(1)
		q.add(2)
		q.add(3)
		expect(q.isFull()).toBe(true)
		
		q.remove()
		expect(q.isFull()).toBe(false)
	})
})