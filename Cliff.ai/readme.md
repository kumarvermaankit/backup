# Cliff.ai: Graph Visualization Assignment
Hi! I am Ankit Kumar Verma

Its a Graph based visualization of some demo data.
Data is time series based data,Containing following attributes

- original_value
- forecasted_value
- min_band
- max_band
- line_status

It also contains measure and dimension of each data set.

Graphs are build using Rechart.js,These are some charts used in the process

- ComposedChart:ComposedChart is used to draw multiple type of chart inside a single cartesian plane
- Line:To draw Line graph based on given datakey
- Area:To draw Area graph based on given datakey
- XAxis: To draw X-axis(original_value)
- YAxis: To draw Y-axis(timestamp)
- CartesianGrid:To draw Cartesian Coordinate system
- Legend:To create legend keys

# Tech Stacks Used
- React.js
- Node.js
- Express.js
- MongoDB
- Rechart.js

# Procedure to run Client Server
- cd client
- npm start

# Procedure to run Backend Server
- cd backend
- nodemon/node server.js
