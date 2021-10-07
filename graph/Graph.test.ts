import { Graph } from "./Graph"

describe("Graph", () => {
	test("toString", () => {
	
	})
	
	let graph = new Graph()
	
	graph.addNode("a")
	graph.addNode("b")
	graph.addNode("c")
	
	graph.addEdge("a", "b")
	graph.addEdge("a", "c")
	graph.addEdge("b", "a")
	graph.addEdge("b", "c")
	
	console.log(graph.toString())
	
	graph.removeNode("a")
	
	console.log(graph.toString())
	
	graph.addEdge("c", "b")
	graph.addNode("d")
	graph.addEdge("d", "b")
	graph.addEdge("d", "c")
	console.log(graph.toString())
})
