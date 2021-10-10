// noinspection DuplicatedCode

import { exponentialSearch, ternarySearch, ternarySearchWithRecursion } from "./search"

describe("searching", () => {
	
	test("ternarySearch", () => {
		let search = ternarySearch
		
		expect(search([], 1)).toBe(-1)
		expect(search([1], 1)).toBe(0)
		expect(search([1, 2, 3], 3)).toBe(2)
		expect(search([1, 2, 3], 4)).toBe(-1)
		expect(search([1, 2, 3, 10, 20, 100], 100)).toBe(5)
		expect(search([1, 2, 3, 10, 20, 100], -100)).toBe(-1)
	})
	
	test("ternarySearchWithRecursion", () => {
		let search = ternarySearchWithRecursion
		
		expect(search([], 1)).toBe(-1)
		expect(search([1], 1)).toBe(0)
		expect(search([1, 2, 3], 3)).toBe(2)
		expect(search([1, 2, 3], 4)).toBe(-1)
		expect(search([1, 2, 3, 4], 4)).toBe(3)
		expect(search([1, 2, 3, 10, 20, 100], 100)).toBe(5)
		expect(search([1, 2, 3, 10, 20, 100], -100)).toBe(-1)
	})
	
	test("exponentialSearch", () => {
		let search = exponentialSearch
		
		expect(search([], 1)).toBe(-1)
		expect(search([1], 1)).toBe(0)
		expect(search([1, 2, 3], 3)).toBe(2)
		expect(search([1, 2, 3], 4)).toBe(-1)
		expect(search([1, 2, 3, 4], 4)).toBe(3)
		expect(search([1, 2, 3, 10, 20, 100], 100)).toBe(5)
		expect(search([1, 2, 3, 10, 20, 100], -100)).toBe(-1)
	})
})