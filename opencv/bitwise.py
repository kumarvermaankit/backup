import cv2 as cv
import numpy as np

blank = np.zeros((400, 400), dtype="uint8")

rectangle = cv.rectangle(blank.copy(), (30, 30), (300, 300), 255, -1)
cv.imshow("rect", rectangle)

circle = cv.circle(blank.copy(), (150, 150), 150, 255, -1)
cv.imshow("circle", circle)


bitwise_and = cv.bitwise_and(rectangle, circle)
cv.imshow("and", bitwise_and)

bitwise_or = cv.bitwise_or(rectangle, circle)
cv.imshow("or", bitwise_or)

bitwise_xor = cv.bitwise_xor(rectangle, circle)
cv.imshow("xor", bitwise_xor)

cv.waitKey(0)
