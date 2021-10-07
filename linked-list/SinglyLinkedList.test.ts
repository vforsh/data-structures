import { SinglyLinkedList } from "./SinglyLinkedList"
import { expect } from "@jest/globals"

describe("SinglyLinkedList", () => {
	test("addFirst", () => {
		let list = new SinglyLinkedList()
		
		expect(list.toArray()).toEqual([])
		
		list.addFirst(1)
		list.addFirst(2)
		list.addFirst(3)
		expect(list.toArray()).toEqual([3, 2, 1])
	})
	
	test("addLast", () => {
		let list = new SinglyLinkedList()
		
		list.addLast(1)
		list.addLast(2)
		list.addLast(3)
		expect(list.toArray()).toEqual([1, 2, 3])
		
		list.addLast(3)
		list.addLast(2)
		list.addLast(1)
		expect(list.toArray()).toEqual([1, 2, 3, 3, 2, 1])
	})
	
	test("deleteFirst", () => {
		let list = new SinglyLinkedList(1, 2, 3)
		
		expect(list.toArray()).toEqual([1, 2, 3])
		
		list.deleteFirst()
		expect(list.toArray()).toEqual([2, 3])
		
		list.deleteFirst()
		list.deleteFirst()
		expect(list.toArray()).toEqual([])
		
		list.deleteFirst()
		expect(list.toArray()).toEqual([])
	})
	
	test("deleteLast", () => {
		let list = new SinglyLinkedList(1, 2, 3)
		
		expect(list.toArray()).toEqual([1, 2, 3])
		
		list.deleteLast()
		expect(list.toArray()).toEqual([1, 2])
		
		list.deleteLast()
		list.deleteLast()
		expect(list.toArray()).toEqual([])
		
		list.deleteLast()
		expect(list.toArray()).toEqual([])
	})
	
	test("contains", () => {
		let list = new SinglyLinkedList()
		
		expect(list.contains(10)).toBe(false)
		
		list.addFirst(10)
		list.addFirst(20)
		list.addLast(30)
		list.addLast(40)
		expect(list.contains(10)).toBe(true)
		expect(list.contains(20)).toBe(true)
		expect(list.contains(30)).toBe(true)
		expect(list.contains(40)).toBe(true)
		expect(list.contains(0)).toBe(false)
	})
	
	test("indexOf", () => {
		let emptyList = new SinglyLinkedList()
		
		expect(emptyList.indexOf(1)).toBe(-1)
		
		let list = new SinglyLinkedList(1, 2, 3, 4, 5)
		
		expect(list.indexOf(1)).toBe(0)
		expect(list.indexOf(2)).toBe(1)
		expect(list.indexOf(5)).toBe(4)
		expect(list.indexOf(-100)).toBe(-1)
	})
	
	test("size", () => {
		let list = new SinglyLinkedList(1, 2, 3, 4, 5)
		
		expect(list.size()).toBe(5)
		
		list.deleteLast()
		list.deleteLast()
		expect(list.size()).toBe(3)
		
		list.deleteLast()
		list.deleteLast()
		list.deleteLast()
		expect(list.size()).toBe(0)
		
		list.deleteLast()
		expect(list.size()).toBe(0)
	})
	
	test("reverse", () => {
		let list = new SinglyLinkedList(1, 2, 3, 4, 5)
		
		list.reverse()
		expect(list.toArray()).toEqual([5, 4, 3, 2, 1])
		
		list.reverse()
		expect(list.toArray()).toEqual([1, 2, 3, 4, 5])
		
		list.deleteLast()
		list.deleteLast()
		list.deleteLast()
		list.deleteLast()
		expect(list.toArray()).toEqual([1])
		
		list.addLast(2)
		list.reverse()
		expect(list.toArray()).toEqual([2, 1])
		
		list.deleteLast()
		list.deleteLast()
		list.reverse()
		expect(list.toArray()).toEqual([])
	})
	
	test("reverseWithRecursion", () => {
		let list = new SinglyLinkedList(1, 2, 3, 4, 5)
		
		list.reverseWithRecursion()
		expect(list.toArray()).toEqual([5, 4, 3, 2, 1])
		
		list.reverseWithRecursion()
		expect(list.toArray()).toEqual([1, 2, 3, 4, 5])
		
		list.deleteLast()
		list.deleteLast()
		list.deleteLast()
		list.deleteLast()
		expect(list.toArray()).toEqual([1])
		
		list.addLast(2)
		list.reverseWithRecursion()
		expect(list.toArray()).toEqual([2, 1])
		
		list.deleteLast()
		list.deleteLast()
		list.reverseWithRecursion()
		expect(list.toArray()).toEqual([])
	})
	
	test("kthValueFromEnd", () => {
		let list = new SinglyLinkedList(1, 2, 3, 4, 5)
		
		expect(list.kthValueFromEnd(1)).toBe(5)
		expect(list.kthValueFromEnd(2)).toBe(4)
		expect(list.kthValueFromEnd(3)).toBe(3)
		expect(list.kthValueFromEnd(10)).toBe(undefined)
	})
	
	test("kthValueFromEnd_2", () => {
		let list = new SinglyLinkedList(1, 2, 3, 4, 5)
		
		expect(list.kthValueFromEnd_2(1)).toBe(5)
		expect(list.kthValueFromEnd_2(2)).toBe(4)
		expect(list.kthValueFromEnd_2(3)).toBe(3)
		expect(list.kthValueFromEnd_2(10)).toBe(undefined)
	})
	
	test("getMiddle", () => {
		let list = new SinglyLinkedList()
		
		expect(list.getMiddle()).toEqual([])
		
		list.addLast(1)
		list.addLast(2)
		expect(list.getMiddle()).toEqual([1, 2])
		
		list.addLast(3)
		expect(list.getMiddle()).toEqual([2])
		
		list.addLast(4)
		expect(list.getMiddle()).toEqual([2, 3])
		
		list.addLast(5)
		expect(list.getMiddle()).toEqual([3])
	})
	
	test("toString", () => {
		let list = new SinglyLinkedList()
		
		expect(list.toString()).toBe("List()")
		
		list.addLast(1)
		list.addLast(2)
		list.addLast(3)
		expect(list.toString()).toBe("List(1 -> 2 -> 3)")
		
		list.deleteLast()
		list.deleteLast()
		expect(list.toString()).toBe("List(1)")
	})
	
})
