import { Trie } from "./Trie"

describe("Trie", () => {
	test("contains", () => {
		let trie = new Trie()
		trie.insert("canada")
		trie.insert("dog")
		expect(trie.contains("test")).toBe(false)
		expect(trie.contains("canada")).toBe(true)
		expect(trie.contains("dog")).toBe(true)
		expect(trie.contains("can")).toBe(false)
		expect(trie.contains("canad")).toBe(false)
		
		trie.insert("can")
		expect(trie.contains("can")).toBe(true)
		
		expect(trie.contains("")).toBe(true)
	})
	
	test("traverse", () => {
		let word = "canada"
		let trie = new Trie()
		trie.insert(word)
		
		let preOrder = ""
		trie.traverse("pre-order", (char) => preOrder += char)
		expect(preOrder).toBe(word)
		
		let postOrder = ""
		trie.traverse("post-order", (char) => postOrder += char)
		expect(postOrder).toBe("adanac")
	})
	
	test("remove", () => {
		let trie = new Trie()
		
		trie.insert("car")
		trie.insert("care")
		trie.insert("caret")
		
		expect(trie.remove("")).toBe(false)
		
		expect(trie.remove("dog")).toBe(false)
		
		expect(trie.contains("car")).toBe(true)
		
		expect(trie.remove("car")).toBe(true)
		expect(trie.contains("car")).toBe(false)
		expect(trie.contains("care")).toBe(true)
		expect(trie.contains("caret")).toBe(true)
		
		expect(trie.remove("care")).toBe(true)
		expect(trie.contains("car")).toBe(false)
		expect(trie.contains("care")).toBe(false)
		expect(trie.contains("caret")).toBe(true)
	})
})
