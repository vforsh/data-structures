import { Heap } from "./Heap"

export class MaxHeap<T = number> extends Heap<T> {
	
	protected moveUp(index: number): void {
		if (index <= 0 || index > this.values.length - 1) {
			return
		}
		
		let parentIndex = this.parentIndex(index)
		if (this.values[index] > this.values[parentIndex]) {
			this.swap(index, parentIndex)
			this.moveUp(parentIndex)
		}
	}
	
	protected moveDown(index: number): void {
		if (index < 0 || index >= this.values.length - 1) {
			return
		}
		
		if (this.isValidParent(index)) {
			return
		}
		
		let largestChildIndex = this.getLargestChildIndex(index)
		this.swap(index, largestChildIndex)
		this.moveDown(largestChildIndex)
	}
	
	protected isValidParent(index: number): boolean {
		let value = this.values[index]
		
		let left = this.leftChild(index) ?? -Infinity
		let right = this.rightChild(index) ?? -Infinity
		
		return value >= left && value >= right
	}
	
	private getLargestChildIndex(index: number): number {
		let leftIndex = this.leftChildIndex(index)
		let left = this.values[leftIndex] ?? -Infinity
		
		let rightIndex = this.rightChildIndex(index)
		let right = this.values[rightIndex] ?? -Infinity
		
		return left >= right
			? leftIndex
			: rightIndex
	}
}

export function createMaxHeap<T = number>(...values: T[]): MaxHeap<T> {
	let heap = new MaxHeap(values[0])
	values.slice(1).forEach(value => heap.insert(value))
	return heap
}

export function isValidMaxHeap(heap: MaxHeap): boolean {
	let values = heap.values
	
	return values.every((value, index) => {
		let left = values[index * 2 + 1] ?? -Infinity
		let right = values[index * 2 + 2] ?? -Infinity
		
		return value >= left && value >= right
	})
}
