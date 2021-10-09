import { randomInt } from "crypto"

export function bubbleSort(array: number[]): number[] {
	for (let i = 0; i < array.length; i++) {
		let isSorted = true
		
		for (let j = 1; j < array.length - i; j++) {
			let current = array[j]
			let prev = array[j - 1]
			if (prev > current) {
				swap(array, j - 1, j)
				isSorted = false
			}
		}
		
		if (isSorted) {
			break
		}
	}
	
	return array
}

export function selectionSort(array: number[]): number[] {
	for (let i = 0; i < array.length; i++) {
		let minIndex = i
		
		for (let j = i + 1; j < array.length; j++) {
			if (array[j] < array[minIndex]) {
				minIndex = j
			}
		}
		
		swap(array, i, minIndex)
	}
	
	return array
}

export function insertionSort(array: number[]): number[] {
	for (let i = 1; i < array.length; i++) {
		let current = array[i]
		
		let j = i - 1
		while (j >= 0 && array[j] >= current) {
			array[j + 1] = array[j--]
		}
		
		array[j + 1] = current
	}
	
	return array
}

export function mergeSort(array: number[]): number[] {
	let l = array.length
	if (l <= 1) {
		return array
	}
	
	let midIndex = Math.floor(l / 2)
	let left = mergeSort(array.slice(0, midIndex))
	let right = mergeSort(array.slice(midIndex))
	
	let li = 0
	let ri = 0
	let i = 0
	while (i < l) {
		let lv = left[li]
		let rv = right[ri]
		
		if (rv <= lv || lv === undefined) {
			array[i++] = rv
			ri++
		} else {
			array[i++] = lv
			li++
		}
	}
	
	return array
}

export function mergeSortInPlace(array: number[]): number[] {
	// TODO implement mergeSortInPlace
	return []
}

export function quickSort(array: number[]): number[] {
	let _sort = (array: number[], left = 0, right = array.length - 1): number[] => {
		let length = right - left
		if (length < 2) {
			return array
		}
		
		let b = partition(array, left, right)
		_sort(array, left, b)
		_sort(array, b + 1, right)
		
		return array
	}
	
	// there are other pivot choosing strategies like (middle or median of 3)
	let pivotIndex = array.length - 1
	
	return _sort(array, 0, pivotIndex)
}

function partition(array: number[], left: number, right: number): number {
	let b = left - 1
	let pivot = array[right]
	for (let i = left; i < right; i++) {
		if (array[i] < pivot) {
			swap(array, ++b, i)
		}
	}
	
	swap(array, b + 1, right)
	
	return b
}


function swap(array: number[], index_1: number, index_2: number) {
	let temp = array[index_1]
	array[index_1] = array[index_2]
	array[index_2] = temp
}