export function binarySearch(array: number[], value: number): number {
	if (isSorted(array) === false) {
		throw new Error("array should be sorted!")
	}
	
	let left = 0
	let right = array.length - 1
	
	while (left <= right) {
		let midIndex = left + Math.floor((right - left) / 2)
		let midValue = array[midIndex]
		
		if (midValue === value) {
			return midIndex
		}
		
		if (value > midValue) {
			left = midIndex + 1
		} else {
			right = midIndex - 1
		}
	}
	
	return -1
}

export function binarySearchRecursive(array: number[], value: number, offset = 0): number {
	if (isSorted(array) === false) {
		throw new Error("array should be sorted!")
	}
	
	if (array.length === 0) {
		return -1
	}
	
	let midIndex = Math.floor(array.length / 2)
	let midValue = array[midIndex]
	if (midValue === value) {
		return offset + midIndex
	}
	
	return value > midValue
		? binarySearchRecursive(array.slice(midIndex + 1), value, midIndex + 1)
		: binarySearchRecursive(array.slice(0, midIndex), value, midIndex)
}

export function binarySearchRecursive_2(array: number[], value: number, left = 0, right = array.length - 1): number {
	if (isSorted(array) === false) {
		throw new Error("array should be sorted!")
	}
	
	if (left > right) {
		return -1
	}
	
	let midIndex = left + Math.floor((right - left) / 2)
	let midValue = array[midIndex]
	if (midValue === value) {
		return midIndex
	}
	
	return value > midValue
		? binarySearchRecursive_2(array, value, midIndex + 1, right)
		: binarySearchRecursive_2(array, value, left, midIndex - 1)
}


export function isSorted(array: number[]): boolean {
	return array.every((current, index) => {
		let next = array[index + 1]
		if (next === undefined) {
			return true
		}
		
		return next > current
	})
}