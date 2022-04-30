import cv2 as cv
import numpy as np

img = cv.imread("./images/earth-1388003_1920.jpg")


width = int(img.shape[1]*0.5)
height = int(img.shape[0]*0.5)

dimensions = (width, height)


resize = cv.resize(img, dimensions, interpolation=cv.INTER_AREA)
cv.imshow("img", resize)
# average blur method
average = cv.blur(resize, (7, 7), 0)
cv.imshow("average blur", average)

# gaussian blur method

gaussian = cv.GaussianBlur(resize, (7, 7), 0)
cv.imshow("gaussian", gaussian)

median = cv.medianBlur(resize, 7)
cv.imshow("median", median)

bilateral = cv.bilateralFilter(resize, 10, 30, 15)
cv.imshow("bilateral", bilateral)


cv.waitKey(0)
