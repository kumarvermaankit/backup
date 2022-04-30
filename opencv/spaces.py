import cv2 as cv


img = cv.imread("./images/earth-1388003_1920.jpg")


width = int(img.shape[1]*0.5)
height = int(img.shape[0]*0.5)

dimensions = (width, height)

resize = cv.resize(img, dimensions, interpolation=cv.INTER_AREA)

# BGR to Gray

gray = cv.cvtColor(resize, cv.COLOR_BGR2GRAY)
cv.imshow("gray", gray)

# BGR to HSV

hsv = cv.cvtColor(resize, cv.COLOR_BGR2HSV)
cv.imshow('hsv', hsv)

# BGR to l*a*b

Lab = cv.cvtColor(resize, cv.COLOR_BGR2LAB)

cv.imshow("lab", Lab)

cv.waitKey(0)
