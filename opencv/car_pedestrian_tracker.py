import cv2 as cv

image = cv.imread("cars-parking-lot-20853590.jpg")

video = cv.VideoCapture("production ID 4070859.mp4")


trained_model = cv.CascadeClassifier("car_detection.xml")

pedestrian_model = cv.CascadeClassifier("full_body_detection.xml")


while True:
    (read_successful, frame) = video.read()

    if(read_successful):
        grayimage = cv.cvtColor(frame, cv.COLOR_BGR2GRAY)
        Coordinates = trained_model.detectMultiScale(grayimage)
        PCoordinates = pedestrian_model.detectMultiScale(grayimage)
        for i in Coordinates:
            cv.rectangle(frame, (i[0], i[1]),
                         (i[0]+i[2], i[1]+i[3]), (255, 0, 0))
        for j in PCoordinates:
            cv.rectangle(frame, (j[0], j[1]),
                         (j[0]+j[2], j[0]+j[3]), (0, 0, 255))

        cv.imshow("car detection", frame)

        cv.waitKey(1)

    else:
        break

    if cv.waitKey(20) & 0xFF == ord('d'):
        break

video.release()
