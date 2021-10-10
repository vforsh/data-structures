// noinspection DuplicatedCode

import {
	bubbleSort, bucketSort,
	countingSort,
	countingSortWithHash,
	insertionSort,
	mergeSort,
	quickSort,
	selectionSort
} from "./sorting"
import { shuffle, sortBy, times } from "lodash"

type SortMethod = (input: number[]) => number[]

const sortTest = (sort: SortMethod) => {
	expect(sort([])).toEqual([])
	expect(sort([1])).toEqual([1])
	expect(sort([1, 2, 3])).toEqual([1, 2, 3])
	expect(sort([3, 2, 1])).toEqual([1, 2, 3])
	expect(sort([3, 3, 2, 1])).toEqual([1, 2, 3, 3])
	expect(sort([4, 3, 2, 1])).toEqual([1, 2, 3, 4])
	
	let nums = shuffle(times(100, i => i))
	expect(sort(nums.slice(0))).toEqual(sortBy(nums))
}

describe("sorting", () => {
	describe("comparison sorts", () => {
		test("bubbleSort", sortTest.bind(null, bubbleSort))
		
		test("selectionSort", sortTest.bind(null, selectionSort))
		
		test("insertionSort", sortTest.bind(null, insertionSort))
		
		test("mergeSort", sortTest.bind(null, mergeSort))
		
		test("quickSort", sortTest.bind(null, quickSort))
	})
	
	describe("non-comparison sorts", () => {
		test("countingSort", sortTest.bind(null, countingSort))
		
		test("bucketSort", sortTest.bind(null, bucketSort))
	})
})