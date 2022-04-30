import cv2 as cv
import numpy as np


img = cv.imread("./images/earth-1388003_1920.jpg")


width = int(img.shape[1]*0.5)
height = int(img.shape[0]*0.5)

dimensions = (width, height)

resize = cv.resize(img, dimensions, interpolation=cv.INTER_AREA)

cv.imshow("earth", resize)


def transform(img, x, y):
    transMat = np.float32([[1, 0, x], [0, 1, y]])
    dimensions = (img.shape[1], img.shape[0])
    return cv.warpAffine(img, transMat, dimensions)


# -x  -> left
# -y  -> up
#  x  -> right
#  y  -> down
t = transform(resize, 10, 100)
cv.imshow("t", t)


def rotate(img, angle, rotPoint):
    if rotPoint is None:
        rotPoint = (img.shape[1]//2, img.shape[0]//2)

    rotMat = cv.getRotationMatrix2D(rotPoint, angle, 1.0)
    dimensions = (img.shape[1], img.shape[0])
    return cv.warpAffine(img, rotMat, dimensions)


rotated = rotate(resize, 90, None)
rot = rotate(resize, -45, None)
cv.imshow("rot", rot)
cv.imshow("rotated", rotated)

flip = cv.flip(resize, 0)
cv.imshow("flip", flip)


cv.waitKey(0)
