# Problem statement #
# Implement a function that returns the number of nodes at a given level of a directed graph

# Try modifying the breadth-first traversal algorithm to achieve this goal.

# To solve this problem, all the previously-implemented data structures will be available to us.

# Input #
# An undirected graph represented as an adjacency list, a starting vertex, and the level whose number of nodes we need to find

# Output #
# The number of nodes returned as a simple integer

# Sample input #
# Graph:

# Vertex	Edges
# 0	2, 1
# 1	4, 3
# 2	None
# 3	None
# 4	None
# Level: 1

# Sample output #
# 1
from graph import Graph


def number_of_nodes(graph, level):
    """
    Calculates the number of nodes at given level
    :param graph: The graph
    :return: Total number of nodes at given level
    """
    source = 0
    visited = [0] * len(graph.graph)
    queue = []
    queue.append(source)
    visited[source] = 1
    result = 0

    while queue:
        source = queue.pop(0)
        while graph.graph[source] is not None:
            data = graph.graph[source].vertex
            if visited[data] == 0:
                queue.append(data)
                visited[data] = visited[source] + 1

            graph.graph[source] = graph.graph[source].next

    for i in range(len(graph.graph)):
        if visited[i] == level:
            result += 1

    return result

if __name__ == "__main__":

    V = 5
    g = Graph(V)
    g.add_edge(0, 1)
    g.add_edge(0, 2)
    g.add_edge(1, 3)
    g.add_edge(1, 4)

    new_g2 = number_of_nodes(g, 1)
    print(new_g2)