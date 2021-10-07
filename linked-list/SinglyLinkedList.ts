import { TraverseCallback } from "../binary-trees/common"

class Node<T = number> {
	
	constructor(public value: T, public next?: Node<T>) {
	}
}

export class SinglyLinkedList<T = number> {
	
	first: Node<T>
	last: Node<T>
	private _size: number = 0
	
	constructor(...values: T[]) {
		values.forEach(value => this.addLast(value))
	}
	
	addFirst(value: T) {
		let newFirst = new Node(value)
		
		if (this.isEmpty()) {
			this.first = this.last = newFirst
			this._size = 1
			return
		}
		
		newFirst.next = this.first
		this.first = newFirst
		
		this._size++
	}
	
	addLast(value: T) {
		let newLast = new Node(value)
		
		if (this.isEmpty()) {
			this.first = this.last = newLast
			this._size = 1
			return
		}
		
		this.last.next = newLast
		this.last = newLast
		
		this._size++
	}
	
	isEmpty(): boolean {
		return !this.first
	}
	
	size(): number {
		return this._size
	}
	
	remove(value: T): boolean {
		if (this.isEmpty()) {
			return false
		}
		
		let previous
		let current = this.first
		while (current) {
			if (current.value === value) {
				if (previous) {
					previous.next = current.next
				}
				
				if (current === this.first) {
					this.first = current.next
				}
				
				if (current === this.last) {
					this.last = previous
				}
				
				current.next = null
				return true
			}
			
			previous = current
			current = current.next
		}
		
		return false
	}
	
	removeFirst() {
		if (this.size() <= 1) {
			this.first = null
			this.last = null
			this._size = 0
			return
		}
		
		let second = this.first.next
		this.first.next = null
		this.first = second
		
		this._size--
	}
	
	removeLast() {
		if (this.size() <= 1) {
			this.first = null
			this.last = null
			this._size = 0
			return
		}
		
		let lastButOne = this.getPreviousNode(this.last)
		if (lastButOne) {
			lastButOne.next = null
			this.last = lastButOne
			this._size--
		}
	}
	
	private getPreviousNode(node: Node<T>): Node<T> | undefined {
		let current = this.first
		
		while (current) {
			if (current.next === node) {
				return current
			}
			
			current = current.next
		}
	}
	
	contains(value: T): boolean {
		return this.indexOf(value) > -1
	}
	
	indexOf(value: T): number {
		let current = this.first
		let index = 0
		
		while (current) {
			if (current.value === value) {
				return index
			}
			
			current = current.next
			index++
		}
		
		return -1
	}
	
	reverse() {
		if (this.size() <= 1) {
			return
		}
		
		let previous = this.first
		let current = previous.next
		while (current) {
			let next = current.next
			current.next = previous
			
			previous = current
			current = next
		}
		
		this.last = this.first
		this.last.next = null
		this.first = previous
	}
	
	reverseWithRecursion() {
		if (this.size() <= 1) {
			return
		}
		
		const _reverse = (previous: Node<T>, current: Node<T>): Node<T> => {
			if (!current) {
				return previous
			}
			
			let next = current.next
			current.next = previous
			return _reverse(current, next)
		}
		
		let newFirst = _reverse(this.first, this.first.next)
		
		this.last = this.first
		this.last.next = null
		this.first = newFirst
	}
	
	kthValueFromEnd(k: number): T | undefined {
		if (k <= 0 || !Number.isInteger(k)) {
			throw new Error("k should be an integer > 0")
		}
		
		if (k > this.size()) {
			return
		}
		
		let index = this.size() - k
		let currentIndex = 0
		let current = this.first
		while (current) {
			if (currentIndex === index) {
				return current.value
			}
			
			current = current.next
			currentIndex++
		}
	}
	
	kthValueFromEnd_2(k: number): T | undefined {
		if (k <= 0 || !Number.isInteger(k)) {
			throw new Error("k should be an integer > 0")
		}
		
		let a = this.first
		let b = this.first
		
		for (let i = 0; i < k - 1; i++) {
			b = b.next
			if (!b) {
				return
			}
		}
		
		while (b !== this.last) {
			a = a.next
			b = b.next
		}
		
		return a.value
	}
	
	getMiddle(): T[] {
		// Requirement - we can't use size() method
		
		const _calculateListSize = (): number => {
			let size = 0
			let current = this.first
			while (current) {
				size++
				current = current.next
			}
			
			return size
		}
		
		const _calculateMiddleIndex = (size: number) => {
			return size % 2 === 0
				? Math.floor(size / 2) - 1
				: Math.floor(size / 2)
		}
		
		if (this.isEmpty()) {
			return []
		}
		
		let size = _calculateListSize()
		let middleIndex = _calculateMiddleIndex(size)
		let currentIndex = 0
		
		let current = this.first
		while (current) {
			if (currentIndex === middleIndex) {
				return size % 2 === 0
					? [current.value, current.next.value]
					: [current.value]
			}
			
			currentIndex++
			current = current.next
		}
	}
	
	traverse(callback: TraverseCallback<T>) {
		let current = this.first
		while (current) {
			callback(current.value)
			current = current.next
		}
	}
	
	truncate(newSize: number) {
		if (newSize < 0 || newSize >= this._size) {
			return
		}
		
		if (newSize === 0) {
			this.clear()
			return
		}
		
		let index = 0
		let current = this.first
		while (current) {
			if (index === newSize - 1) {
				current.next = null
				this.last = current
				this._size = newSize
				return
			}
			
			index++
			current = current.next
		}
	}
	
	clear() {
		this.first = this.last = null
		this._size = 0
	}
	
	toArray(): T[] {
		let array = []
		
		let current = this.first
		while (current) {
			array.push(current.value)
			current = current.next
		}
		
		return array
	}
	
	toString(): string {
		let str = ""
		
		let current = this.first
		while (current) {
			str += current.value + " -> "
			current = current.next
		}
		
		if (str.length > 0) {
			str = str.slice(0, -4)
		}
		
		return `List(${str})`
	}
}
