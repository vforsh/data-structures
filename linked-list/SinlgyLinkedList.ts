class Node<T = number> {
	
	constructor(public value: T, public next?: Node<T>) {
	}
}

export class SinlgyLinkedList<T = number> {
	
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
	
	deleteFirst() {
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
	
	deleteLast() {
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
		
		if (str.length === 0) {
			str = "empty"
		}
		
		return str
	}
	
}
