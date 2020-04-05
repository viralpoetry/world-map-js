"""
First step:
$ convert RiskMap.gif RiskMap.png
"""
import cv2
import numpy as np

map = []

img = cv2.imread("RiskMap.png", 0)
rows, cols = img.shape

# every square has 9 pixels
# 536%9 = ~59, 1080%9 = 120

# create map
for i in range(59):
    row = []
    for j in range(cols):
        pixel = img[i * 9, j]
        # every 9 pixels
        if j % 9 == 0:
            row.append(pixel)
    # push row to final map
    map.append(row)


def unique_colors():
    ltmp = []
    for row in map:
        ltmp = ltmp + row
    unique_set = set(ltmp)
    unique_elements = list(unique_set)
    return unique_elements


colors = unique_colors()

final = []
for r in map:
    s = ""
    for c in r:
        s = s + str(colors.index(c))
    final.append(s)

print "["
for i in final:
    print "'" + i + "',"
print "]"
