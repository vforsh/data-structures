// noinspection DuplicatedCode

import { binarySearch, binarySearchRecursive, binarySearchRecursive_2, isSorted } from "./binary-search"

describe("binary-search", () => {
	test("isSorted", () => {
		expect(isSorted([])).toBe(true)
		expect(isSorted([1])).toBe(true)
		expect(isSorted([1, 2, 3])).toBe(true)
		expect(isSorted([-10, -9, -8])).toBe(true)
		expect(isSorted([2, 1])).toBe(false)
	})
	
	test("binarySearch", () => {
		let bs = binarySearch
		
		expect(bs([], 1)).toBe(-1)
		expect(bs([1], 1)).toBe(0)
		expect(bs([1, 2, 3], 3)).toBe(2)
		expect(bs([1, 2, 3], 4)).toBe(-1)
		expect(bs([1, 2, 3, 10, 20, 100], 100)).toBe(5)
		expect(bs([1, 2, 3, 10, 20, 100], -100)).toBe(-1)
	})
	
	test("binarySearchRecursive", () => {
		let bs = binarySearchRecursive
		
		expect(bs([], 1)).toBe(-1)
		expect(bs([1], 1)).toBe(0)
		expect(bs([1, 2, 3], 3)).toBe(2)
		expect(bs([1, 2, 3], 4)).toBe(-1)
		expect(bs([1, 2, 3, 10, 20, 100], 100)).toBe(5)
		expect(bs([1, 2, 3, 10, 20, 100], -100)).toBe(-1)
	})
	
	test("binarySearchRecursive_2", () => {
		let bs = binarySearchRecursive_2
		
		expect(bs([], 1)).toBe(-1)
		expect(bs([1], 1)).toBe(0)
		expect(bs([1, 2, 3], 3)).toBe(2)
		expect(bs([1, 2, 3], 4)).toBe(-1)
		expect(bs([1, 2, 3, 10, 20, 100], 100)).toBe(5)
		expect(bs([1, 2, 3, 10, 20, 100], -100)).toBe(-1)
	})
	
})