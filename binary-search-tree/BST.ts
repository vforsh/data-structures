export type TraverseMethod = "breadth-first" | DepthFirst
export type DepthFirst = "pre-order" | "in-order-asc" | "in-order-desc" | "post-order"

export type TraverseCallback<T> = (value: T) => unknown

export class BtNode<T> {
	constructor(public value: T, public left?: BtNode<T>, public right?: BtNode<T>) {
	}
	
	isLeaf(): boolean {
		return !this.left && !this.right
	}
}

export class Bst<T = number> {
	
	root: BtNode<T>
	
	constructor(rootValue: T) {
		this.root = new BtNode<T>(rootValue)
	}
	
	insertMultiple(...values: T[]) {
		values.forEach(value => this.insert(value))
	}
	
	insert(value: T) {
		let newNode = new BtNode(value)
		
		let node = this.root
		while (node) {
			if (value > node.value) {
				if (!node.right) {
					node.right = newNode
					return
				}
				
				node = node.right
			} else {
				if (!node.left) {
					node.left = newNode
					return
				}
				
				node = node.left
			}
		}
	}
	
	has(value: T): boolean {
		let node = this.root
		while (node) {
			if (node.value === value) {
				return true
			}
			
			node = value > node.value
				? node.right
				: node.left
		}
		
		return false
	}
	
	hasWithRecursion(value: T): boolean {
		const _has = (node: BtNode<T>, value: T): boolean => {
			if (!node) {
				return false
			}
			
			if (node.value === value) {
				return true
			}
			
			return _has(node.left, value) || _has(node.right, value)
		}
		
		return _has(this.root, value)
	}
	
	findNode(value: T): BtNode<T> | undefined {
		const _findNode = (node: BtNode<T>, value: T): BtNode<T> => {
			if (!node) {
				return
			}
			
			if (node.value === value) {
				return node
			}
			
			return _findNode(node.left, value) || _findNode(node.right, value)
		}
		
		return _findNode(this.root, value)
	}
	
	height(): number {
		const _height = (node: BtNode<T>): number => {
			// if (!node) {
			// 	return -1
			// }
			
			if (!node || node.isLeaf()) {
				return 0
			}
			
			return 1 + Math.max(_height(node.left), _height(node.right))
		}
		
		return _height(this.root)
	}
	
	getNodesAtDistance(distance: number): BtNode<T>[] {
		const _getNodes = (node: BtNode<T>, distance: number, nodes: BtNode<T>[] = []): BtNode<T>[] => {
			if (!node) {
				return nodes
			}
			
			if (distance === 0) {
				return (nodes.push(node), nodes)
			}
			
			nodes.push(
				..._getNodes(node.left, distance - 1),
				..._getNodes(node.right, distance - 1),
			)
			
			return nodes
		}
		
		return _getNodes(this.root, distance)
	}
	
	getValuesAtDistance(distance: number): T[] {
		return this.getNodesAtDistance(distance).map(node => node.value)
	}
	
	traverseBreadthFirst(node: BtNode<T>, callback: TraverseCallback<T>) {
		let height = this.height()
		
		for (let i = 0; i <= height; i++) {
			this.getNodesAtDistance(i).forEach(node => callback(node.value))
		}
	}
	
	traverseDepthFirst(node: BtNode<T>, callback: TraverseCallback<T>, type: DepthFirst) {
		if (!node) {
			return
		}
		
		switch (type) {
			case "pre-order":
				callback(node.value)
				this.traverseDepthFirst(node.left, callback, type)
				this.traverseDepthFirst(node.right, callback, type)
				break
			
			case "in-order-asc":
				this.traverseDepthFirst(node.left, callback, type)
				callback(node.value)
				this.traverseDepthFirst(node.right, callback, type)
				break
			
			case "in-order-desc":
				this.traverseDepthFirst(node.right, callback, type)
				callback(node.value)
				this.traverseDepthFirst(node.left, callback, type)
				break
			
			case "post-order":
				this.traverseDepthFirst(node.left, callback, type)
				this.traverseDepthFirst(node.right, callback, type)
				callback?.(node.value)
				break
			
			default:
				let x: never = type
				console.warn("Unknown depth-first traverse method!", type)
				break
		}
	}
	
	minValue(node: BtNode<T>): T {
		if (!node.left) {
			return node.value
		}
		
		return this.minValue(node.left)
	}
	
	maxValue(node: BtNode<T>): T {
		if (!node.right) {
			return node.value
		}
		
		return this.maxValue(node.right)
	}
	
	clone(): Bst<T> {
		const _clone = (node: BtNode<T>): BtNode<T> => {
			if (!node) {
				return
			}
			
			let newNode = new BtNode(node.value)
			newNode.left = _clone(node.left)
			newNode.right = _clone(node.right)
			
			return newNode
		}
		
		let newRoot = _clone(this.root)
		let newTree = new Bst<number>(0)
		newTree.root = newRoot as unknown as BtNode<number>
		
		return newTree as unknown as Bst<T>
	}
	
	equals(other: Bst<T>): boolean {
		const _equals = (node_1?: BtNode<T>, node_2?: BtNode<T>): boolean => {
			if (!node_1 && !node_2) {
				return true
			}
			
			if (!node_1 || !node_2) {
				return false
			}
			
			return node_1.value === node_2.value
				&& _equals(node_1.left, node_2.left)
				&& _equals(node_1.right, node_2.right)
		}
		
		return _equals(this.root, other.root)
	}
	
	getValues(traverseType: TraverseMethod): T[] {
		const _getValues = (node: BtNode<T>, traverseMethod: TraverseMethod): T[] => {
			let values: T[] = []
			
			switch (traverseMethod) {
				case "breadth-first":
					this.traverseBreadthFirst(node, value => values.push(value))
					break
				
				case "pre-order":
				case "in-order-asc":
				case "in-order-desc":
				case "post-order":
					this.traverseDepthFirst(node, value => values.push(value), traverseMethod)
					break
				
				default:
					let x: never = traverseMethod
					console.warn("Unknown traverse method!", traverseMethod)
					break
			}
			
			return values
		}
		
		return _getValues(this.root, traverseType)
	}
	
	size(): number {
		let _size = (node: BtNode<T>): number => {
			if (!node) {
				return 0
			}
			
			return 1 + _size(node.left) + _size(node.right)
		}
		
		return _size(this.root)
	}
	
	countLeaves(): number {
		let _countLeaves = (node: BtNode<T>): number => {
			if (!node) {
				return 0
			}
			
			if (node.isLeaf()) {
				return 1
			}
			
			return _countLeaves(node.left) + _countLeaves(node.right)
		}
		
		return _countLeaves(this.root)
	}
	
	getDepth(value: T): number {
		let depth = 0
		let node = this.root
		
		while (node) {
			if (node.value === value) {
				return depth
			}
			
			node = value > node.value ? node.right : node.left
			depth++
		}
		
		return -1
	}
	
	areSiblings(value_1: T, value_2: T): boolean {
		let depth_1 = this.getDepth(value_1)
		if (depth_1 <= 0) {
			return false
		}
		
		let depth_2 = this.getDepth(value_2)
		if (depth_2 !== depth_1) {
			return false
		}
		
		return this.getNodesAtDistance(depth_1 - 1).some((node) => {
			return node.left.value === value_1 && node.right.value === value_2
				|| node.left.value === value_2 && node.right.value === value_1
		})
	}
	
	getAncestors(value: T): T[] | null {
		let depth = this.getDepth(value)
		if (depth === -1) {
			return null
		}
		
		if (depth === 0) {
			return []
		}
		
		let ancestors: BtNode<T>[] = []
		for (let i = depth - 1; i >= 0; i--) {
			this.getNodesAtDistance(i).some(node => {
				if (node.left?.value === value || node.right?.value === value) {
					ancestors.push(node)
					return true
				}
			})
		}
		
		return ancestors.map(node => node.value)
	}
	
}

export function isBinarySearchTree<T = number>(node: BtNode<T>, min: T, max: T): boolean {
	if (!node) {
		return true
	}
	
	let value = node.value
	if (value > max || value < min) {
		return false
	}
	
	return isBinarySearchTree(node.left, min, value)
		&& isBinarySearchTree(node.right, value, max)
}
