# Problem Statement #
# Given an array of characters where each character represents a fruit tree, you are given two baskets and your goal is to put maximum number of fruits in each basket. The only restriction is that each basket can have only one type of fruit.

# You can start with any tree, but once you have started you can’t skip a tree. You will pick one fruit from each tree until you cannot, i.e., you will stop when you have to pick from a third fruit type.

# Write a function to return the maximum number of fruits in both the baskets.

# Example 1:

# Input: Fruit=['A', 'B', 'C', 'A', 'C']
# Output: 3
# Explanation: We can put 2 'C' in one basket and one 'A' in the other from the subarray ['C', 'A', 'C']
# Example 2:

# Input: Fruit=['A', 'B', 'C', 'B', 'B', 'C']
# Output: 5
# Explanation: We can put 3 'B' in one basket and two 'C' in the other basket. 
# This can be done if we start with the second letter: ['B', 'C', 'B', 'B', 'C']


def fruits_into_baskets(fruits):
    window_start = 0
    max_length = 0
    distinct_fruits = {}
    for window_end in range(len(fruits)):
        fruit = fruits[window_end]
        if fruit not in distinct_fruits:
            distinct_fruits[fruit] = 0
        distinct_fruits[fruit] += 1

        # shrink window
        while len(distinct_fruits) > 2:
            left_fruit = fruits[window_start]
            distinct_fruits[left_fruit] -= 1
            if distinct_fruits[left_fruit] == 0:
                del distinct_fruits[left_fruit]
            window_start += 1
        max_length = max(max_length, window_end - window_start + 1)
    return max_length


def main():
  print("Maximum number of fruits: " + str(fruits_into_baskets(['A', 'B', 'C', 'A', 'C'])))
  print("Maximum number of fruits: " + str(fruits_into_baskets(['A', 'B', 'C', 'B', 'B', 'C'])))


main()
