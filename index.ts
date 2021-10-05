import { Bst, isBinarySearchTree } from "./binary-trees/binary-search-tree/BST"
import assert from "assert"
import { BtNode } from "./binary-trees/common"

function testBinarySearchTree() {
	console.log("Testing BST")
	
	let rootValue = 10
	let tree = new Bst(rootValue)
	
	assert.equal(tree.has(rootValue), true)
	assert.equal(tree.has(1), false)
	assert.equal(tree.size(), 1)
	assert.equal(tree.countLeaves(), 1)
	
	tree.insert(5)
	assert.equal(tree.has(5), true)
	assert.equal(tree.has(10), true)
	
	tree.insert(20)
	assert.equal(tree.has(5), true)
	assert.equal(tree.has(10), true)
	assert.equal(tree.has(20), true)
	
	assert.equal(tree.height(), 1)
	assert.equal(tree.size(), 3)
	assert.equal(tree.countLeaves(), 2)
	
	assert.deepEqual(tree.getValuesAtDistance(0), [10])
	assert.deepEqual(tree.getValuesAtDistance(1), [5, 20])
	
	assert.deepEqual(tree.getAncestors(-10), null)
	assert.deepEqual(tree.getAncestors(rootValue), [])
	assert.deepEqual(tree.getAncestors(5), [rootValue])
	assert.deepEqual(tree.getAncestors(20), [rootValue])
	
	assert.equal(tree.areSiblings(5, 20), true)
	assert.equal(tree.areSiblings(5, 10), false)
	assert.equal(tree.areSiblings(10, 20), false)
	
	assert.deepEqual(tree.getValues("in-order-asc"), [5, 10, 20])
	assert.deepEqual(tree.getValues("in-order-desc"), [20, 10, 5])
	assert.deepEqual(tree.getValues("breadth-first"), [10, 5, 20])
	
	tree.insertMultiple(1, 6, 11, 22, 21, 25)
	assert.equal(tree.has(1), true)
	assert.equal(tree.has(6), true)
	assert.equal(tree.has(11), true)
	assert.equal(tree.has(22), true)
	assert.equal(tree.has(21), true)
	assert.equal(tree.has(25), true)
	
	assert.equal(tree.hasWithRecursion(1), true)
	assert.equal(tree.hasWithRecursion(6), true)
	assert.equal(tree.hasWithRecursion(11), true)
	assert.equal(tree.hasWithRecursion(22), true)
	assert.equal(tree.hasWithRecursion(21), true)
	assert.equal(tree.hasWithRecursion(25), true)
	
	assert.deepEqual(tree.getValuesAtDistance(0), [10])
	assert.deepEqual(tree.getValuesAtDistance(1), [5, 20])
	assert.deepEqual(tree.getValuesAtDistance(2), [1, 6, 11, 22])
	assert.deepEqual(tree.getValuesAtDistance(3), [21, 25])
	assert.deepEqual(tree.getValuesAtDistance(4), [])
	assert.deepEqual(tree.getValuesAtDistance(-1), [])
	
	assert.equal(tree.height(), 3)
	assert.equal(tree.size(), 9)
	assert.equal(tree.countLeaves(), 5)
	
	let clone = tree.clone()
	assert.equal(tree.equals(clone), true)
	assert.equal(clone.height(), tree.height())
	assert.deepEqual(clone.getValues("in-order-asc"), [1, 5, 6, 10, 11, 20, 21, 22, 25])
	
	let valuesAsc = [1, 5, 6, 10, 11, 20, 21, 22, 25]
	assert.deepEqual(tree.getValues("in-order-asc"), valuesAsc)
	
	let valuesDesc = valuesAsc.slice(0).reverse()
	assert.deepEqual(tree.getValues("in-order-desc"), valuesDesc)
	
	assert.equal(tree.minValue(tree.root), 1)
	assert.equal(tree.maxValue(tree.root), 25)
	
	let treeA = new Bst(10)
	treeA.insertMultiple(1, 5, 12, 20, 3)
	let treeB = new Bst(10)
	treeB.insertMultiple(1, 5, 12, 20, 3)
	assert.equal(treeA.equals(treeB), true)
	
	let notBst = new BtNode(10, new BtNode<number>(5), new BtNode<number>(9))
	
	assert.equal(isBinarySearchTree(treeA.root, -Infinity, Infinity), true)
	assert.equal(isBinarySearchTree(notBst, -Infinity, Infinity), false)
	
	console.log("Testing BST is complete! ✔")
}

testBinarySearchTree()

export {}
