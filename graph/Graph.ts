import { SinglyLinkedList } from "../linked-list/SinglyLinkedList"

class Node<T = string> {
	constructor(public value: T) {
	}
}

export class Graph<T = string> {
	
	nodes: Map<T, SinglyLinkedList<T>>
	
	constructor() {
		this.nodes = new Map<T, SinglyLinkedList<T>>()
	}
	
	addNode(value: T) {
		if (this.nodes.has(value)) {
			return
		}
		
		this.nodes.set(value, new SinglyLinkedList<T>())
	}
	
	removeNode(value: T) {
		if (!this.nodes.has(value)) {
			return
		}
		
		this.nodes.get(value).traverse(node => this.nodes.get(node)?.remove(value))
		this.nodes.delete(value)
	}
	
	addEdge(from: T, to: T) {
		let fromNode = this.nodes.get(from)
		if (!fromNode) {
			return
		}
		
		let toNode = this.nodes.get(to)
		if (!toNode) {
			return
		}
		
		if (!fromNode.contains(to)) {
			fromNode.addLast(to)
		}
	}
	
	removeEdge(from: T, to: T) {
		let fromNode = this.nodes.get(from)
		if (!fromNode) {
			return
		}
		
		let toNode = this.nodes.get(to)
		if (!toNode) {
			return
		}
		
		fromNode.remove(to)
	}
	
	toString(): string {
		let result = ""
		
		for (let [value, neighbors] of this.nodes.entries()) {
			result += `${value} is connected with [${neighbors.toArray().join(", ")}]\n`
		}
		
		return result
	}
	
}
