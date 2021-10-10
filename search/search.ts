// noinspection DuplicatedCode

import { binarySearch, isSorted } from "../binary-search/binary-search"

export function ternarySearch(array: number[], value: number, left = 0, right = array.length - 1): number {
	if (isSorted(array) === false) {
		throw new Error("input array should be sorted")
	}
	
	while (left <= right) {
		let partitionSize = Math.floor((right - left) / 3)
		
		let midIndex_1 = left + partitionSize
		let mid_1 = array[midIndex_1]
		
		let midIndex_2 = right - partitionSize
		let mid_2 = array[midIndex_2]
		
		if (value === mid_1) {
			return midIndex_1
		}
		
		if (value === mid_2) {
			return midIndex_2
		}
		
		if (value < mid_1) {
			right = midIndex_1 - 1
		} else if (value > mid_2) {
			left = midIndex_2 + 1
		} else {
			left = midIndex_1 + 1
			right = midIndex_2 - 1
		}
	}
	
	return -1
}

export function ternarySearchWithRecursion(array: number[], value: number, left = 0, right = array.length - 1): number {
	if (isSorted(array) === false) {
		throw new Error("input array should be sorted")
	}
	
	if (left > right) {
		return -1
	}
	
	let partitionSize = Math.floor((right - left) / 3)
	
	let midIndex_1 = left + partitionSize
	let mid_1 = array[midIndex_1]
	if (mid_1 === value) {
		return midIndex_1
	}
	
	let midIndex_2 = right - partitionSize
	let mid_2 = array[midIndex_2]
	if (mid_2 === value) {
		return midIndex_2
	}
	
	if (value < mid_1) {
		return ternarySearchWithRecursion(array, value, left, midIndex_1 - 1)
	} else if (value > mid_2) {
		return ternarySearchWithRecursion(array, value, midIndex_2 + 1, right)
	} else {
		return ternarySearchWithRecursion(array, value, midIndex_1 + 1, midIndex_2 - 1)
	}
}

export function exponentialSearch(array: number[], value: number): number {
	let bound = 1
	while (bound < array.length && array[bound] < value) {
		bound *= 2
	}
	
	let left = Math.floor(bound / 2)
	let right = Math.min(bound, array.length - 1)
	return binarySearch(array, value, left, right)
}