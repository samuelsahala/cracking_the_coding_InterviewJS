// TODO:
//   A
// B  C
// D  E
//   F
// g.addVertex("A");
// g.addVertex("B");
// g.addVertex("C");
// g.addVertex("D");
// g.addVertex("E");
// g.addVertex("F");
// g.addEdge("A", "B");
// g.addEdge("A", "C");
// g.addEdge("B", "D");
// g.addEdge("C", "E");
// g.addEdge("D", "E");
// g.addEdge("D", "F");
// g.addEdge("E", "F");

class Graph {
  constructor() {
    this.adjcencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjcencyList[vertex]) this.adjcencyList[vertex] = [];
  }

  addEdge(v1, v2) {
    this.adjcencyList[v1].push(v2);
    this.adjcencyList[v2].push(v1);
  }

  removeEdge(v1, v2) {
    this.adjcencyList[v1] = this.adjcencyList[v1].filter((v) => v !== v2);
    this.adjcencyList[v2] = this.adjcencyList[v2].filter((v) => v !== v1);
  }

  removeVertex(vertex) {
    while (this.adjcencyList[vertex].length) {
      const adjVertex = this.adjcencyList[vertex].pop();
      this.removeEdge(vertex, adjVertex);
    }
    // delete this.adjcencyList[vertex]
  }

  depthFirstRecursive(start) {
    const result = [];
    const visited = {};
    const adjacencyList = this.adjacencyList;
    (function dfs(vertex) {
      if (!vertex) return null;
      visited[vertex] = true;
      result.push(vertex);
      adjacencyList[vertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          return dfs(neighbor);
        }
      });
    })(start);
    return result;
  }
}
