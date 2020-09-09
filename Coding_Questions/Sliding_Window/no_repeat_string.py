# Problem Statement #
# Given a string, find the length of the longest substring which has no repeating characters.

# Example 1:

# Input: String="aabccbb"
# Output: 3
# Explanation: The longest substring without any repeating characters is "abc".
# Example 2:

# Input: String="abbbb"
# Output: 2
# Explanation: The longest substring without any repeating characters is "ab".
# Example 3:

# Input: String="abccde"
# Output: 3
# Explanation: Longest substrings without any repeating characters are "abc" & "cde".

def non_repeat_substring(str1):
    window_start = 0
    max_length = 0
    char_map = {}

    for window_end in range(len(str1)):
        right_char = str1[window_end]
        if right_char in char_map:
            window_start = max(window_start, char_map[right_char] + 1)
        char_map[right_char] = window_end
        max_length = max(max_length, window_end - window_start + 1)
    return max_length


def main():
  print("Length of the longest substring: " + str(non_repeat_substring("aabccbb")))
  print("Length of the longest substring: " + str(non_repeat_substring("abbbb")))
  print("Length of the longest substring: " + str(non_repeat_substring("abccde")))


main()

accumulating value
