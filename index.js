

// import {initializeApp,applicationDefault} from 'firebase-admin/app';
// import {getMessaging } from "firebase-admin/messaging";
// import express, {json} from "express";
// import cors from "cors";

// process.env.GOOGLE_APPLICATION_CREDENTIALS;

// const app = express();
// app.use(express.json());

// app.use(
//   cors({
//     origin:"*",
//   })
// );

// app.use(
//   cors({
//     methods:["GET","POST","DELETE","UPDATE","PUT","PATCH"]
//   })
// );




// initializeApp({
//   credential: admin.credential.cert(serviceAccount),
//   projectId: "picars-a78ee"
// });

// app.post("/send",function(req,res){
//   const receivedToken = req.body.fcmToken;
//   const message = {
//     notification:{
//       title:"Event",
//       body:'This is a New Event'
//     },
//     token:"ck3Wja1_QGGzea7cVsi8dB:APA91bG053LTXnWsXBrIJMeVHQdr9F3bUZgiAGrSVA4D8nj8pl85aRBavULkPoOKHpbxE8ODaez9sbz7WCBVQIJGHOMQrrIEX-a--7fahn27n1y3oN2rV8iGHl-S1AGk9vpo5RYKyJ9m"

//   };
//   getMessaging()
//   .send(message)
//   .then((response) => {
//     res.status(200).json({
//       message: "Successfully sent message",
//       token: receivedToken,
//     });
//     console.log("Successfully sent message:", response);
//   })
//   .catch((error) => {
//     res.status(400);
//     res.send(error);
//     console.log("Error sending message:", error);
//   });



// });



// app.listen(3000,function(){
// console.log("Server Started")
// });
import { initializeApp, applicationDefault } from "firebase-admin/app";
import { getMessaging } from "firebase-admin/messaging";
import express, { json } from "express";
import cors from "cors";
import admin from "firebase-admin";
import serviceAccount from "path/to/serviceAccountKey.json" assert { type: "json" };

const app = express();
app.use(express.json());

app.use(
cors({
origin: "*",
})
);

app.use(
cors({
methods: ["GET", "POST", "DELETE", "UPDATE", "PUT", "PATCH"],
})
);

app.use(function (req, res, next) {
res.setHeader("Content-Type", "application/json");
next();
});

initializeApp({
credential: admin.credential.cert(serviceAccount),
projectId: "your project_id",
});

app.post("/send", function (req, res) {
const receivedToken = req.body.fcmToken;

const message = {
notification: {
title: "Notif",
body: "This is a Test Notification",
},
token: receivedToken,
};

getMessaging()
.send(message)
.then((response) => {
res.status(200).json({
message: "Successfully sent message",
token: receivedToken,
});
console.log("Successfully sent message:", response);
})
.catch((error) => {
res.status(400);
res.send(error);
console.log("Error sending message:", error);
});
});

app.listen(3000, function () {
console.log("Server started on port 3000");
});
