import cv2 as cv

img = cv.imread("./images/earth-1388003_1920.jpg")

width = int(img.shape[1]*0.5)
height = int(img.shape[0]*0.5)

dimensions = (width, height)

resize = cv.resize(img, dimensions, interpolation=cv.INTER_AREA)

cv.imshow("earth", resize)

gray = cv.cvtColor(resize, cv.COLOR_BGR2GRAY)

# cv.imshow("gray", gray)


blur = cv.GaussianBlur(resize, (0, 0), cv.BORDER_DEFAULT)
cv.imshow("blur", blur)

canny = cv.Canny(blur, 10, 20)
cv.imshow("canny", canny)

dilated = cv.dilate(canny, (3, 3), iterations=1)

cv.imshow("dilated", dilated)

erode = cv.erode(canny, (3, 3), iterations=1)

cv.imshow("eroded", erode)

res = cv.resize(img, (500, 500))

cv.imshow("resized", res)

cropped = img[10:500, 10:500]
cv.imshow("cropped", cropped)

cv.waitKey(0)
