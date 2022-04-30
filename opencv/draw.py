import cv2 as cv
import numpy as np
# making blank image
blank = np.zeros((500, 500, 3), dtype='uint8')

# giving color to image
blank[:] = 255, 0, 0
blank[200:300, 300:400] = 0, 255, 0
# draw rectangle on a image
cv.rectangle(blank, (20, 20), (300, 300), (0, 0, 255), thickness=cv.FILLED)

c = blank.shape[1]//2
r = blank.shape[0]//2
# draw circle on a image,similarly we can draw line
cv.circle(blank, (c, r), 50, (125, 125, 0), thickness=-1,)

# add text on image
c = (100, 100, 100)
cv.putText(blank, "hey", (20, 20), cv.FONT_HERSHEY_TRIPLEX, 1, c)


cv.imshow("blank", blank)
cv.waitKey(0)
