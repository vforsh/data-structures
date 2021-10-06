export class TrieNode {
	
	public readonly value: string
	public isEndOfWord: boolean = false
	private children: Map<string, TrieNode> = new Map<string, TrieNode>()
	
	constructor(value: string) {
		if (value.length > 1) {
			throw new Error("invalid value")
		}
		
		this.value = value
	}
	
	addChild(value: string): TrieNode | undefined {
		if (this.hasChild(value)) {
			return
		}
		
		let newNode = new TrieNode(value)
		this.children.set(value, newNode)
		
		return newNode
	}
	
	hasChild(value: string): boolean {
		return this.children.has(value)
	}
	
	getChild(value: string): TrieNode | undefined {
		return this.children.get(value)
	}
	
	removeChild(value: string): boolean {
		return this.children.delete(value)
	}
	
	getChildren(): TrieNode[] {
		return Array.from(this.children.values())
	}
	
	childrenNum(): number {
		return this.children.size
	}
	
	isLeaf(): boolean {
		return this.childrenNum() === 0
	}
}
