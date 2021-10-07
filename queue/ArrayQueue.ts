import { Queue } from "./Queue"

// Requirement - we can't use any array methods and properties (like push, shift or length)
export class ArrayQueue<T = number> implements Queue<T> {
	
	private readonly values: T[]
	private readonly size: number
	private front = 0 // "remove" index
	private rear = 0 // "add" index
	
	constructor(size = 100, values?: T[]) {
		if (size < 0 || !Number.isInteger(size)) {
			throw new Error("invalid size")
		}
		
		this.size = size
		this.values = []
		
		values?.forEach(value => this.add(value))
	}
	
	add(value: T) {
		if (this.rear >= this.size) {
			return
		}
		
		this.values[this.rear++] = value
	}
	
	remove(): T | undefined {
		if (this.front === this.rear) {
			return
		}
		
		let value = this.values[this.front]
		delete this.values[this.front++]
		
		return value
	}
	
	peek(): T | undefined {
		return this.values[this.front]
	}
	
	isEmpty(): boolean {
		return this.front === this.rear
	}
	
	isFull(): boolean {
		return (this.rear - this.front) === this.size;
	}
	
	toArray(): T[] {
		return this.values.slice(this.front, this.rear + 1)
	}
	
	toString(): string {
		let values = this.toArray().join(", ")
		
		return `ArrayQueue(${this.size}) [${values}]`
	}
	
}