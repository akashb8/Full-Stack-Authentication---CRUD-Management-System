const express =  require('express')
const mongoose =  require('mongoose')
const cors=require('cors')
const body_parser = require('body-parser')
const ejs=require('ejs');
const path = require('path');
const flash=require('connect-flash');
const session =require('express-session');

const app = express()


//use body parser for get data from form body
// app.use(express.json({ limit: "30mb", extended: true }))
// app.use(express.urlencoded({ limit: "30mb", extended: true }))
app.use(session({
    secret:'secrect',
    cookie:{maxAge:600000},
    resave:false,
    saveUninitialized:false
}));
app.use(flash());


app.use(body_parser.urlencoded({ extended: true }));

app.set('view engine','ejs');
app.set('viwes','views');
app.use(express.static(path.join(__dirname, 'public'))); 
app.use(body_parser.json());
app.use(cors());



const userRoute=require('./route/userRoute');
app.use('/api',userRoute);

//store route
const StoreRoute=require('./route/storeRoute');
app.use('/api',StoreRoute);

//category route
const CategoryRoute=require('./route/categoryRoute');
app.use('/api',CategoryRoute);
//subcategory
const Subcategory=require('./route/subCategoryRoute');
app.use('/api',Subcategory);
//product route
const ProductRoute=require('./route/productRoute');
app.use('/api',ProductRoute);

//Student
const StudentRoute=require('./route/web');
app.use('/api',StudentRoute);

//feedback
const FeedbackRoute=require('./route/feedbackRoute');
app.use(FeedbackRoute);
//Blog api
const ApiRoute=require('./route/admin/apiblog');
app.use('/api',ApiRoute);

//admin Route
const AdminRoute=require('./route/admin/HomeRoute');
app.use('/admin',AdminRoute);

//aggrigration route
const AggrigrationRoute=require('./route/aggrigration/AggrigrateRoute');
app.use('/api',AggrigrationRoute);
 //connect mongodb
const dbcon = "mongodb+srv://restApiNode:IW34FcUUrSGXSPDc@cluster0.ltpgr8s.mongodb.net/RestApi"
const port = process.env.PORT || 2000;

mongoose.connect(dbcon, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(result => {
        app.listen(port, () => {
            console.log(`server is running port at http://localhost:${port}`);
            console.log(`database connection successfully`);
        })
    }).catch(error => {
        console.log(error);
    })

  // https://backendapinodejsraju.herokuapp.com/api/register


  
  