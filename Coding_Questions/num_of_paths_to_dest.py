#import math
#def num_of_paths_to_dest(n):
  # n = 5 ? (4, 4)
  #a = (n - 1, n - 1)
  #b = (0,0)
 # limit = math.sqrt(((a[1] - b[1])**2) + ((a[0] - b[0])**2))
  #while 1:
  #  a
  #while i >= j:
  #  if 

#print(num_of_paths_to_dest(5))

#[
#       j=0 j=1
#  i = 0[0, 1]
#  i = 1[1, 1]
#]

# 1. loop for amount of attempts
# 2. while i >=j, traverse the x axis
# 3. as soon as limit is hit, iterate y
# 4. is endpoint (or a) hit? yes, attempts += 1,
# 5. break

# 1. call recursion helper function on start, end, up, right
# 2. base case - up and right == start and end ? return 1
# 3. if right <= up and right < n - 1,
# 4. return helper function on right + 1 + helperfun up + 1
# 5. return 0

def helperfun(start, end, up, right):
  print(right, up, end, start)
  if up == end and right == end:
    return 1
  if right <= up or right < end:
    return helperfun(start, end, up, right + 1) + helperfun(start, end, up + 1, right)
  else:
    return 0

def num_of_paths_to_dest(n):
  return helperfun(0, n - 1, 0, 0)

print(num_of_paths_to_dest(5))
