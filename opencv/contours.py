import cv2 as cv

import numpy as np

img = cv.imread("./images/earth-1388003_1920.jpg")


capture = cv.VideoCapture("./videos/Pexels Videos 4098.mp4")


width = int(img.shape[1]*0.5)
height = int(img.shape[0]*0.5)

dimensions = (width, height)

while True:
    blank = np.zeros(dimensions, dtype='uint8')
    isTrue, frame = capture.read()
    rframe = cv.resize(frame, dimensions, interpolation=cv.INTER_AREA)
    blur = cv.GaussianBlur(rframe, (3, 3), cv.BORDER_DEFAULT)
    canny = cv.Canny(blur, 125, 175)
    contours, heirarchies = cv.findContours(
        canny, cv.RETR_LIST, cv.CHAIN_APPROX_SIMPLE)
    cv.drawContours(blank, contours, -1, (255, 0, 0), thickness=1)
    cv.imshow("v", rframe)
    cv.imshow("video", canny)
    cv.imshow("b", blank)
    if cv.waitKey(20) & 0xFF == ord('d'):
        break


capture.release()
cv.destroyAllWindows()
cv.waitKey(0)

# resize = cv.resize(img, dimensions, interpolation=cv.INTER_AREA)


# blank = np.zeros(resize.shape, dtype="uint8")


# cv.imshow("earth", resize)

# gray = cv.cvtColor(resize, cv.COLOR_BGR2GRAY)

# cv.imshow("gray", gray)

# blur = cv.GaussianBlur(gray, (3, 3), cv.BORDER_DEFAULT)
# cv.imshow("blur", blur)

# canny = cv.Canny(blur, 125, 175)

# cv.imshow("canny", canny)


# contours, heirarchies = cv.findContours(
#     canny, cv.RETR_LIST, cv.CHAIN_APPROX_SIMPLE)


# cv.drawContours(blank, contours, -1, (255, 0, 0), thickness=1)

# cv.imshow("blank", blank)

# Either above function can be used to find contours or bbelow function

# ret, thres = cv.threshold(gray, 90, 255, cv.THRESH_BINARY)

# contours, heirarchies = cv.findContours(
#     thres, cv.RETR_LIST, cv.CHAIN_APPROX_SIMPLE)
# cv.imshow("thres", thres)

# print(len(contours))

cv.waitKey(0)
