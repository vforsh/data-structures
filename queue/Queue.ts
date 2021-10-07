export interface Queue<T> {
	add(value: T)
	remove(): T | undefined
	peek(): T | undefined
	isEmpty(): boolean
	isFull(): boolean
	toString(): string
}