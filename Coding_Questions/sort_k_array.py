def swap(arr, a, b):
  temp = arr[a]
  arr[a] = arr[b]
  arr[b] = temp
  return arr

def sort_k_messed_array(arr, k):
  for item in range(len(arr) - k + 1):
    ahead = item + 1
    while item + k + 1 >= ahead < len(arr):
        if (arr[ahead] < arr[item]):
            arr = swap(arr, item, ahead)
        ahead += 1
  return arr
# loop through array, while looping k times,


arr = [1, 4, 5, 2, 3, 7, 8, 6, 10, 9]

print(sort_k_messed_array(arr, 2))

# output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

