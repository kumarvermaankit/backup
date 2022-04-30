import cv2 as cv
import numpy as np

img = cv.imread("./images/earth-1388003_1920.jpg")


width = int(img.shape[1]*0.5)
height = int(img.shape[0]*0.5)

dimensions = (width, height)


resize = cv.resize(img, dimensions, interpolation=cv.INTER_AREA)
blank = np.zeros(resize.shape[:2], dtype="uint8")
cv.imshow("img", resize)

b, g, r = cv.split(resize)


blue = cv.merge([b, blank, blank])
red = cv.merge([blank, blank, r])
green = cv.merge([blank, g, blank])

cv.imshow("blue", blue)
cv.imshow("red", red)
cv.imshow("green", green)


cv.waitKey(0)
