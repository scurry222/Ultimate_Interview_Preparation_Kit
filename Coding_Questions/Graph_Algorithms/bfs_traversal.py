
# Problem statement #
# You have to implement the breadth-first traversal in Python.

# To solve this problem, the previously implemented Graph class is already prepended.

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
# result = "02143" 
# or
# result = "01234"
from graph import Graph



def bfs(graph, source):
    # make array of traversed elements that we will visit equal to length of graph
    visited = [False] * (len(graph.graph))

    # create BFS queue
    queue = []

    result = ""

    # mark source as start to visit
    queue.append(source)
    visited[source] = True

    while queue:
        # dequeue vertex and print
        source = queue.pop(0)
        result += str(source)

        # visit all child verticies and mark them as visited
        while graph.graph[source] is not None:
            data = graph.graph[source].vertex
            if not visited[data]:
                queue.append(data)
                visited[data] = True
            graph.graph[source] = graph.graph[source].next
    return result


if __name__ == "__main__":

    V = 5
    g = Graph(V)
    g.add_edge(0, 1)
    g.add_edge(0, 2)
    g.add_edge(1, 3)
    g.add_edge(1, 4)

    print( bfs(g, 0))

