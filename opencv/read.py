import cv2 as cv

capture = cv.VideoCapture("videos/Pexels Videos 4098.mp4")

while True:
    isTrue, frame = capture.read()
    cv.imshow("galaxy", frame)
    if cv.waitKey(20) & 0xFF == ord('d'):
        break

capture.release()
cv.destroyAllWindows()
cv.waitKey(0)
