import { createMaxHeap } from "./MaxHeap"

export function findNthLargestItem(array: number[], n: number): number | undefined {
	if (array.length === 0) {
		return
	}
	
	if (n < 1 || n > array.length) {
		return
	}
	
	let heap = createMaxHeap(...array)
	let result: number
	
	while (n-- > 0) {
		result = heap.remove()
	}
	
	return result
}
