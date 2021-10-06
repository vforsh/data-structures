export abstract class Heap<T = number> {
	
	values: T[]
	
	constructor(rootValue?: T) {
		this.values = rootValue === undefined
			? []
			: [rootValue]
	}
	
	size(): number {
		return this.values.length
	}
	
	insertMultiple(...values: T[]) {
		values.forEach(value => this.insert(value))
	}
	
	insert(value: T) {
		this.values.push(value)
		this.moveUp(this.values.length - 1)
	}
	
	remove(): T | undefined {
		if (this.isEmpty()) {
			return
		}
		
		let removed = this.values[0]
		let tail = this.values.pop()
		
		if (this.values.length > 0) {
			this.values[0] = tail
			this.moveDown(0)
			
			return removed
		}
		
		return tail
	}
	
	isEmpty(): boolean {
		return this.values.length === 0
	}
	
	protected abstract moveUp(index: number): void
	protected abstract moveDown(index: number): void
	protected abstract isValidParent(index: number): boolean
	
	protected swap(index_1: number, index_2: number): void {
		let temp = this.values[index_1]
		this.values[index_1] = this.values[index_2]
		this.values[index_2] = temp
	}
	
	protected leftChildIndex(parentIndex: number): number {
		return parentIndex * 2 + 1
	}
	
	protected leftChild(parentIndex: number): T {
		return this.values[this.leftChildIndex(parentIndex)]
	}
	
	protected rightChildIndex(parentIndex: number): number {
		return parentIndex * 2 + 2
	}
	
	protected rightChild(parentIndex: number): T {
		return this.values[this.rightChildIndex(parentIndex)]
	}
	
	protected parentIndex(childIndex: number): number {
		let isLeftChild = childIndex % 2 === 1
		
		return isLeftChild
			? (childIndex - 1) / 2
			: (childIndex - 2) / 2
	}
	
	protected parent(childIndex: number): T {
		return this.values[this.parentIndex(childIndex)]
	}
}
