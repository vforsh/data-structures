import { findNthLargestItem } from "./nth-largest-item"

test("nth-largest-item", () => {
	let nums = [2, 3, 5, 10, 1]
	
	expect(findNthLargestItem(nums, 1)).toBe(10)
	expect(findNthLargestItem(nums, 2)).toBe(5)
	expect(findNthLargestItem(nums, 3)).toBe(3)
	expect(findNthLargestItem(nums, 5)).toBe(1)
	expect(findNthLargestItem(nums, -1)).toBeUndefined()
	expect(findNthLargestItem(nums, 0)).toBeUndefined()
	expect(findNthLargestItem(nums, 6)).toBeUndefined()
})
