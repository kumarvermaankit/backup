import cv2
import random

# if we put 0 in argument then it takes webcam else you can put path
webcam = cv2.VideoCapture(0)

trained_data = cv2.CascadeClassifier("haarcascades_frontface.xml")

while True:
    succesful_frame_read, frame = webcam.read()
    grayimage = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
    cv2.imshow("", grayimage)
    cv2.waitKey(1)
    fc = trained_data.detectMultiScale(grayimage)

    for a in fc:
        (x, y, w, h) = fc[a]
        cv2.rectangle(frame, (a[0], a[1]), (a[0]+a[2], a[1]+a[3]),
                      (random.randrange(256), random.randrange(256), random.randrange(256)), 2)


# trained_data = cv2.CascadeClassifier("haarcascades_frontface.xml")

# img = cv2.imread('multiple-personas-img.jpg')

# grayimage = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)

# fc = trained_data.detectMultiScale(grayimage)
# print(fc)

# # for i in fc:

# for a in fc:
#     # (x, y, w, h) = fc[a]
#     cv2.rectangle(img, (a[0], a[1]), (a[0]+a[2], a[1]+a[3]),
#                   (random.randrange(256), random.randrange(256), random.randrange(256)), 2)


# cv2.imshow("", img)


# cv2.waitKey()
