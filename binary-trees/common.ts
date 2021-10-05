export type TraverseCallback<T> = (value: T) => unknown

export class BtNode<T> {
	constructor(public value: T, public left?: BtNode<T>, public right?: BtNode<T>) {
	}
	
	isLeaf(): boolean {
		return !this.left && !this.right
	}
}
