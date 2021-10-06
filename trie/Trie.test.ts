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
	
	test("containsWithRecursion", () => {
		let trie = new Trie()
		trie.insert("canada")
		trie.insert("dog")
		expect(trie.containsWithRecursion("test")).toBe(false)
		expect(trie.containsWithRecursion("canada")).toBe(true)
		expect(trie.containsWithRecursion("dog")).toBe(true)
		expect(trie.containsWithRecursion("can")).toBe(false)
		expect(trie.containsWithRecursion("canad")).toBe(false)
		
		trie.insert("can")
		expect(trie.containsWithRecursion("can")).toBe(true)
		
		expect(trie.containsWithRecursion("")).toBe(true)
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
		
		trie.remove("")
		trie.remove("dog")
		
		expect(trie.contains("car")).toBe(true)
		
		trie.remove("car")
		expect(trie.contains("car")).toBe(false)
		expect(trie.contains("care")).toBe(true)
		expect(trie.contains("caret")).toBe(true)
		
		trie.remove("care")
		expect(trie.contains("car")).toBe(false)
		expect(trie.contains("care")).toBe(false)
		expect(trie.contains("caret")).toBe(true)
		
		trie.insert("dog")
		trie.insert("dogster")
		trie.insert("dogs")
		expect(trie.contains("dog")).toBe(true)
		expect(trie.contains("dogster")).toBe(true)
		expect(trie.contains("dogs")).toBe(true)
		
		trie.remove("dogster")
		expect(trie.contains("dogster")).toBe(false)
		expect(trie.contains("dog")).toBe(true)
		expect(trie.contains("dogs")).toBe(true)
		
		trie.remove("do")
		expect(trie.contains("dog")).toBe(true)
		expect(trie.contains("dogs")).toBe(true)
	})
	
	test("autocomplete", () => {
		let trie = new Trie()
		trie.insert("car")
		trie.insert("care")
		trie.insert("card")
		trie.insert("careful")
		trie.insert("egg")
		trie.insert("eggs")
		
		expect(trie.autocomplete("")).toEqual([])
		
		expect(trie.autocomplete("e")).toEqual(["egg", "eggs"])
		expect(trie.autocomplete("eggs")).toEqual(["eggs"])
		expect(trie.autocomplete("eggss")).toEqual([])
		
		expect(trie.autocomplete("ca")).toEqual(["car", "care", "careful", "card"])
		expect(trie.autocomplete("care")).toEqual(["care", "careful"])
		expect(trie.autocomplete("cart")).toEqual([])
	})
	
	test("wordsNum", () => {
		let trie = new Trie()
		
		expect(trie.getWordsNum()).toBe(0)
		
		trie.insert("car")
		trie.insert("careful")
		trie.insert("egg")
		trie.insert("eggs")
		expect(trie.getWordsNum()).toBe(4)
		
		trie.remove("car")
		trie.remove("egg")
		expect(trie.getWordsNum()).toBe(2)
	})
	
	test("getLongestCommonPrefix", () => {
		let trie = new Trie()
		
		expect(trie.getLongestCommonPrefix()).toBe("")
		
		trie.insert("a")
		expect(trie.getLongestCommonPrefix()).toBe("a")
		
		trie.remove("a")
		
		trie.insert("car")
		trie.insert("care")
		trie.insert("caret")
		expect(trie.getLongestCommonPrefix()).toBe("car")
		
		trie.insert("cut")
		expect(trie.getLongestCommonPrefix()).toBe("c")
		
		trie.insert("dog")
		expect(trie.getLongestCommonPrefix()).toBe("")
		
		trie.remove("dog")
		trie.remove("cut")
		trie.insert("care")
		expect(trie.getLongestCommonPrefix()).toBe("car")
	})
})
