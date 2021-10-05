export type HeapNodeType = "left" | "right"

export class MaxHeap<T = number> {
	
	values: T[]
	
	constructor(...values: T[]) {
		this.values = values
	}
	
	insert(newValue: T) {
		this.values.push(newValue)
		
		let newValueIndex = this.values.length - 1
		let newValueType: HeapNodeType = this.values.length % 2 === 0 ? "left" : "right"
		
		let parentIndex: number = this.getParentIndex(newValueIndex, newValueType)
		let parent: T = this.values[parentIndex]
		while (newValue > parent) {
			this.values[newValueIndex] = parent
			this.values[parentIndex] = newValue
			
			parentIndex = Math.max(0, this.getParentIndex(newValueIndex, newValueType))
			parent = this.values[parentIndex]
		}
	}
	
	remove() {
	
	}
	
	getChildIndex(parentIndex: number, childType: HeapNodeType): number {
		return childType === "left"
			? parentIndex * 2 + 1
			: parentIndex * 2 + 2
	}
	
	leftChild(parentIndex: number): T | undefined {
		return this.values[this.getChildIndex(parentIndex, "left")]
	}
	
	rightChild(parentIndex: number): T | undefined {
		return this.values[this.getChildIndex(parentIndex, "right")]
	}
	
	getParentIndex(childIndex: number, childType: "left" | "right"): number {
		return childType === "left"
			? Math.floor((childIndex - 1) / 2)
			: Math.floor((childIndex - 2) / 2)
	}
	
	getParent(childIndex: number, childType: "left" | "right"): T | undefined {
		return this.values[this.getParentIndex(childIndex, childType)]
	}
}

export function isValidMaxHeap<T>(heap: MaxHeap<T>): boolean {
	throw new Error("not implemented")
}
