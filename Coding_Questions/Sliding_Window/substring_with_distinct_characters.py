# Problem Statement #
# Given a string, find the length of the longest substring in it with no more than K distinct characters.

# Example 1:

# Input: String="araaci", K=2
# Output: 4
# Explanation: The longest substring with no more than '2' distinct characters is "araa".
# Example 2:

# Input: String="araaci", K=1
# Output: 2
# Explanation: The longest substring with no more than '1' distinct characters is "aa".
# Example 3:

# Input: String="cbbebi", K=3
# Output: 5
# Explanation: The longest substrings with no more than '3' distinct characters are "cbbeb" & "bbebi".


def longest_substring_with_k_distinct(str1, k):
    # store distinct character frequency
    distinct_characters = {}
    window_start = 0
    max_length = 0

    for window_end in range(len(str1)):
        if str1[window_end] not in distinct_characters:
            distinct_characters[str1[window_end]] = 0
        distinct_characters[str1[window_end]] += 1

        # shrink sliding window until we are left with 'k' distinct characters
        while len(distinct_characters) > k:
            left = str1[window_start] # left most item in window
            distinct_characters[left] -= 1
            if distinct_characters[left] == 0:
                del distinct_characters[left]
            window_start += 1 # shrink window
        max_length = max(max_length, window_end - window_start + 1)
    return max_length


def main():
  print("Length of the longest substring: " + str(longest_substring_with_k_distinct("araaci", 2)))
  print("Length of the longest substring: " + str(longest_substring_with_k_distinct("araaci", 1)))
  print("Length of the longest substring: " + str(longest_substring_with_k_distinct("cbbebi", 3)))


main()
