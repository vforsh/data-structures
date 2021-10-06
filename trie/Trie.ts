import { TrieNode } from "./TrieNode"
import { TraverseCallback } from "../binary-trees/common"

export class Trie {
	
	root: TrieNode
	
	constructor() {
		this.root = new TrieNode("")
	}
	
	insert(word: string) {
		let current = this.root
		
		for (let i = 0; i < word.length; i++) {
			let char = word[i]
			
			if (current.hasChild(char) === false) {
				current.addChild(char)
			}
			
			current = current.getChild(char)
		}
		
		current.isEndOfWord = true
	}
	
	contains(word: string): boolean {
		if (word === "") {
			return true
		}
		
		let current = this.root
		
		for (let i = 0; i < word.length; i++) {
			let value = word[i]
			
			if (current.hasChild(value) === false) {
				return false
			}
			
			current = current.getChild(value)
		}
		
		return current.isEndOfWord
	}
	
	containsWithRecursion(word: string): boolean {
		if (word === "") {
			return true
		}
		
		const _contains = (node: TrieNode, word: string, index = 0): boolean => {
			if (index === word.length) {
				return node.isEndOfWord
			}
			
			let char = word[index]
			let child = node.getChild(char)
			if (!child) {
				return false
			}
			
			return _contains(child, word, index + 1)
		}
		
		return _contains(this.root, word)
	}
	
	getWordsNum(): number {
		let wordsNum = 0
		
		const _count = (node: TrieNode) => {
			if (node.isEndOfWord) {
				wordsNum++
			}
			
			node.getChildren().forEach(child => _count(child))
		}
		
		_count(this.root)
		
		return wordsNum
	}
	
	getLongestCommonPrefix(): string {
		let lcp = ""
		let current = this.root
		
		while (current.childrenNum() === 1 && !current.isEndOfWord) {
			current = current.getChildren()[0]
			lcp += current.value
		}
		
		return lcp
	}
	
	traverse(method: "pre-order" | "post-order", callback: TraverseCallback<string>) {
		const _preOrder = (node: TrieNode, callback) => {
			callback(node.value)
			node.getChildren().forEach(child => _preOrder(child, callback))
		}
		
		const _postOrder = (node: TrieNode, callback) => {
			node.getChildren().forEach(child => _postOrder(child, callback))
			callback(node.value)
		}
		
		if (method === "pre-order") {
			_preOrder(this.root, callback)
		} else {
			_postOrder(this.root, callback)
		}
	}
	
	remove(word: string) {
		const _remove = (node: TrieNode, word: string, index: number = 0) => {
			if (index === word.length) {
				node.isEndOfWord = false
				return
			}
			
			let char = word[index]
			let child = node.getChild(char)
			if (!child) {
				return
			}
			
			_remove(child, word, index + 1)
			
			if (child.isEndOfWord) {
				return
			}
			
			if (child.isLeaf()) {
				node.removeChild(child.value)
			}
		}
		
		return _remove(this.root, word)
	}
	
	private getNodes(word: string): TrieNode[] | null {
		let current = this.root
		let nodes: TrieNode[] = []
		
		for (let i = 0; i < word.length; i++) {
			let char = word[i]
			
			if (current.hasChild(char) === false) {
				return null
			}
			
			current = current.getChild(char)
			nodes.push(current)
		}
		
		if (current.isEndOfWord === false) {
			return null
		}
		
		return nodes
	}
	
	autocomplete(prefix: string): string[] {
		if (prefix === "") {
			return []
		}
		
		let lastNode = this.findLastNode(prefix)
		if (!lastNode) {
			return []
		}
		
		const _autocomplete = (node: TrieNode, prefix: string, words: string[] = []): string[] => {
			if (node.isEndOfWord) {
				words.push(prefix)
			}
			
			node.getChildren().forEach(child => _autocomplete(child, prefix + child.value, words))
			
			return words
		}
		
		return _autocomplete(lastNode, prefix)
	}
	
	
	private findLastNode(word: string): TrieNode | undefined {
		let current = this.root
		
		for (let i = 0; i < word.length; i++) {
			let char = word[i]
			
			if (current.hasChild(char) === false) {
				return
			}
			
			current = current.getChild(char)
		}
		
		return current
	}
	
}
