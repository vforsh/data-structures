import { createMaxHeap, isValidMaxHeap, MaxHeap } from "./MaxHeap"
import { expect } from "@jest/globals"
import { times } from "lodash"

describe("MaxHeap", () => {
	let heap = new MaxHeap(10)
	
	test("insert", () => {
		heap.insert(5)
		heap.insert(6)
		heap.insert(4)
		expect(heap.values).toEqual([10, 5, 6, 4])
	})
	
	test("insert with bubble up", () => {
		heap.insert(20)
		expect(heap.values).toEqual([20, 10, 6, 4, 5])
	})
	
	test("insertMultiple", () => {
		let heap = new MaxHeap(10)
		heap.insertMultiple(5, 6, 4, 20)
		expect(heap.values).toEqual([20, 10, 6, 4, 5])
	})
	
	test("size", () => {
		let heap = new MaxHeap(10)
		expect(heap.size()).toBe(1)
		
		heap.insertMultiple(5, 6, 7)
		expect(heap.size()).toBe(4)
	})
	
	test("isEmpty", () => {
		expect(heap.isEmpty()).toBe(false)
	})
	
	test("remove", () => {
		let heap = new MaxHeap(10)
		heap.insertMultiple(5, 6)
		
		expect(heap.remove()).toBe(10)
		expect(heap.remove()).toBe(6)
		expect(heap.remove()).toBe(5)
		expect(heap.remove()).toBeUndefined()
	})
	
	test("createHeap", () => {
		expect(createMaxHeap(5, 10, 6, 20, 4).values).toEqual([20, 10, 6, 5, 4])
	})
	
	describe("isValidMaxHeap", () => {
		test("valid heap", () => {
			expect(isValidMaxHeap(createMaxHeap(30, 20, 10))).toBe(true)
		})
		
		test("invalid heap", () => {
			let heap = new MaxHeap(10)
			heap.values.push(20, 30)
			expect(isValidMaxHeap(heap)).toBe(false)
		})
	})
	
	test("heap sorting", () => {
		let nums = [20, 30, 40, 10, 5, 50]
		let heap = createMaxHeap(...nums)
		let sortedDesc = times(heap.size(), () => heap.remove())
		expect(sortedDesc).toEqual([50, 40, 30, 20, 10, 5])
	})
})
