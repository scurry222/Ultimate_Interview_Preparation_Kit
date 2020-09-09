# Problem statement #
# You have to implement the depth-first traversal in Python.

# To solve this problem, the previously implemented graph class is already prepended.

# Input #
# A graph represented as an adjacency list and a starting vertex

# Output #
# A string containing the vertices of the graph listed in the correct order of traversal

# Sample input #
# Graph:

# Vertex	Edges
# 0	        2, 1
# 1	        4, 3
# 2	        None
# 3	        None
# 4	        None
# Source: 0

# Sample output #
# result = "01342" 
# or
# result = "02143"
from graph import Graph


def dfs(graph, source):
    visited = [False] * len(graph.graph)

    stack = []

    result = ""

    stack.append(source)

    while stack:

        source = stack[-1]
        stack.pop()

        if not visited[source]:
            result += str(source)
            visited[source] = True

        while graph.graph[source] is not None:
            data = graph.graph[source].vertex
            if not visited[data]:
                stack.append(data)
            graph.graph[source] = graph.graph[source].next
    return result


if __name__ == "__main__":

    V = 5
    g = Graph(V)
    g.add_edge(0, 1)
    g.add_edge(0, 2)
    g.add_edge(1, 3)
    g.add_edge(1, 4)

    print( dfs(g, 0))