# Problem statement #
# You have to implement a function which will take a graph as input and print its transpose.

# Input #
# A graph

# Output #
# Return a transpose of the given graph

# Sample input #
# Graph:

# Vertex	Edges
# 0	        2, 1
# 1	        4, 3
# 2	        None
# 3	        None
# 4	        None
# Sample output #
# Graph:

# Vertex	Edges
# 0	        None
# 1	        0
# 2	        0
# 3	        1
# 4	        1

def transpose(graph):
    new_graph = Graph(graph.V)
    for source in range(graph.V):
        while graph.graph[source] is not None:
            destination = graph.graph[source].Vertex
            new_graph.add_edge(destination, source)
            graph.graph[source] = graph.graph[source].next

    return new_graph

if __name__ == "__main__":

    V = 5
    g = Graph(V)
    g.add_edge(0, 1)
    g.add_edge(0, 2)
    g.add_edge(1, 3)
    g.add_edge(1, 4)

    new_g = transpose(g)
    new_g.print_graph()
