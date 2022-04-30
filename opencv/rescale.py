import cv2 as cv

# use this only for live videos


def Changeres(width, height):
    capture.set(3, width)
    capture.set(4, height)
# can be used for any kind of videos


def Resize(frame, scale=0.25):
    width = int(frame.shape[1]*scale)
    height = int(frame.shape[0]*scale)
    dimensions = (width, height)
    return cv.resize(frame, dimensions, interpolation=cv.INTER_AREA)


capture = cv.VideoCapture("videos/Pexels Videos 4098.mp4")

while True:
    isTrue, frame = capture.read()
    resize_frame = Resize(frame)
    cv.imshow("galaxy", frame)
    cv.imshow("g", resize_frame)
    if cv.waitKey(20) & 0xFF == ord('d'):
        break

capture.release()
cv.destroyAllWindows()
cv.waitKey(0)
