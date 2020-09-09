# Problem statement #
# Implement a function that prints all paths that exist between two nodes (source to destination).

# Input #
# A graph, a source value, and a destination value

# Output #
# A 2D list having all paths

# Sample input #
# Graph:

# Vertex	Edges
# 0	        1, 2
# 1	        3, 4
# 2	        5
# 3	        5
# 4	        5
# 5	        None
# source = 0 destination = 5

# Sample output #
# result = [[0, 2, 5],
#           [0, 1, 4, 5],
#           [0, 1, 3, 5]]
import copy # for deepcopy
from graph import Graph


def find_all_paths_recursive(graph, source, destination, visited, path, paths):
    """
        Finds all paths between source and destination in given graph
        graph: directed graph
        source: source vertex
        destination: destination vertex
        visited: list to mark if vertex has been visited
        path: current path to source from destination
        paths: 2D list of all paths to return
    """

    visited[source] = True
    path.append(source)
    if source == destination:
        paths.append(copy.deepcopy(path))
    else:
        while graph.graph[source] is not None:
            index = graph.graph[source].vertex
            if not visited[index]:
                find_all_paths_recursive(graph, index, destination, visited, path, paths)
            graph.graph[source] = graph.graph[source].next

    # remove current vertex from path[] and mark it as unvisited
    path.pop()
    visited[source] = False


def find_all_paths(graph, source, destination):
    """
        Find all Paths between source and destination of given graph
        graph: directed graph
        source: Source vertex
        destination: destination vertex
    """

    # mark all verticies as not visited
    visited = [False] * graph.V

    # store paths
    paths = []
    path = []

    # recursive helper to find all paths
    find_all_paths_recursive(graph, source, destination, visited, path, paths)
    return paths

if __name__ == "__main__":

    g = Graph(6)
    g.add_edge(0, 1)
    g.add_edge(0, 2)
    g.add_edge(1, 3)
    g.add_edge(1, 4)
    g.add_edge(3, 5)
    g.add_edge(4, 5)
    g.add_edge(2, 5)

    source = 0
    destination = 5

    paths = find_all_paths(g, source, destination)
    print(paths)
