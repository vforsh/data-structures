export function heapify(array: number[]): number[] {
	let length = array.length
	let lastParentIndex = length / 2 - 1
	/*for (let i = lastParentIndex + 1; i < length; i++) {
		moveUp(array, i)
	}*/
	
	/*for (let i = lastParentIndex; i >= 0; i--) {
		moveDown(array, i)
	}*/
	
	for (let i = 0; i < length; i++) {
		moveUp(array, i)
	}
	
	return array
}

function getParentIndex(index: number): number {
	let isLeftChild = index % 2 === 1
	let parentIndex = (isLeftChild ? index - 1 : index - 2) / 2
	
	return parentIndex
}

function moveUp(array: number[], index: number) {
	if (index === 0) {
		return
	}
	
	let parentIndex = getParentIndex(index)
	let parent = array[parentIndex]
	
	let value = array[index]
	if (value > parent) {
		array[index] = parent
		array[parentIndex] = value
		moveUp(array, parentIndex)
	}
}

function moveDown(array: number[], index: number) {
	let parentValue = array[index]
	let largerIndex = index
	
	let leftIndex = index * 2 + 1
	let left = array[leftIndex]
	if (leftIndex < array.length && left > parentValue) {
		largerIndex = leftIndex
	}
	
	let rightIndex = index * 2 + 2
	let right = array[rightIndex]
	if (rightIndex < array.length && right > array[largerIndex]) {
		largerIndex = rightIndex
	}
	
	if (largerIndex === index) {
		return
	}
	
	array[index] = array[largerIndex]
	array[largerIndex] = parentValue
	moveDown(array, largerIndex)
}
