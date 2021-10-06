import { heapify } from "./heapify"


test.skip("heapify", () => {
	// let nums = [-100, 5, 6, 29, 1, 39, -5, 100, 0]
	let nums = [5, 3, 8, 4, 2, 1]
	let heapified = heapify(nums)
	
	console.log(nums)
	
	let isValidHeap = heapified.every((value, index) => {
		let leftIndex = index * 2 + 1
		let left = heapified[leftIndex]
		
		let rightIndex = index * 2 + 2
		let right = heapified[rightIndex]
		
		return (leftIndex < heapified.length && value >= left) && (rightIndex < heapified.length && value >= right)
	})
	
	expect(isValidHeap).toBe(true)
})
