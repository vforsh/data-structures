import { createMinHeap, isValidMinHeap, MinHeap } from "./MinHeap"
import { expect } from "@jest/globals"
import { times } from "lodash"

describe("MinHeap", () => {
	let heap = new MinHeap(10)
	
	test("insert", () => {
		heap.insert(5)
		heap.insert(6)
		heap.insert(4)
		expect(heap.values).toEqual([4, 5, 6, 10])
	})
	
	test("insert with bubble up", () => {
		heap.insert(20)
		expect(heap.values).toEqual([4, 5, 6, 10, 20])
	})
	
	test("insertMultiple", () => {
		let heap = new MinHeap(10)
		heap.insertMultiple(5, 6, 4, 20)
		expect(heap.values).toEqual([4, 5, 6, 10, 20])
	})
	
	test("size", () => {
		let heap = new MinHeap(10)
		expect(heap.size()).toBe(1)
		
		heap.insertMultiple(5, 6, 7)
		expect(heap.size()).toBe(4)
	})
	
	test("isEmpty", () => {
		expect(heap.isEmpty()).toBe(false)
	})
	
	test("remove", () => {
		let heap = new MinHeap(10)
		heap.insertMultiple(5, 6)
		
		expect(heap.remove()).toBe(5)
		expect(heap.remove()).toBe(6)
		expect(heap.remove()).toBe(10)
		expect(heap.remove()).toBeUndefined()
	})
	
	test("createHeap", () => {
		expect(createMinHeap(5, 10, 6, 20, 4).values).toEqual([4, 5, 6, 20, 10])
	})
	
	describe("isValidMinHeap", () => {
		test("valid heap", () => {
			expect(isValidMinHeap(createMinHeap(30, 20, 10))).toBe(true)
		})
		
		test("invalid heap", () => {
			let heap = new MinHeap(30)
			heap.values.push(20, 10)
			expect(isValidMinHeap(heap)).toBe(false)
		})
	})
	
	test("heap sorting", () => {
		let nums = [20, 30, 40, 10, 5, 50]
		let heap = createMinHeap(...nums)
		let sortedAsc = times(heap.size(), () => heap.remove())
		expect(sortedAsc).toEqual([5, 10, 20, 30, 40, 50])
	})
})
