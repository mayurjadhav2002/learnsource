const express = require('express');
const app = express();
var cors = require('cors');

const port = process.env.PORT || 3000;
app.use(cors());

// Database connection
const moogose = require('mongoose');

try {
moogose.connect(`mongodb+srv://mayur:mayur--31@cluster0.v9x6kcw.mongodb.net/qbytespace`)}
catch (error) {
    console.log({error:error.message, message:"Some error Occured! must be internet error"})
}
app.use('/static', express.static(__dirname + '/public'));

// User Routings
const user_routes = require('./routes/userRoutes');
app.use('/api', user_routes);

const software_route = require('./routes/softwareRoute');
app.use('/software', software_route)

// Blog Routings
const blog_routes = require('./routes/blogRoute');
app.use('/api/blog', blog_routes);


const admin = require('./routes/adminRoute');
app.use('/api/admin', admin);


app.listen(port, ()=> console.log(`Connected to port: ${port}`));
