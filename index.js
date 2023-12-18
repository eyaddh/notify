

import {initializeApp,applicationDefault} from 'firebase-admin/app';
import {getMessaging } from "firebase-admin/messaging";
import express, {json} from "express";
import cors from "cors";

process.env.GOOGLE_APPLICATION_CREDENTIALS;

const app = express();
app.use(express.json());

app.use(
  cors({
    origin:"*",
  })
);

app.use(
  cors({
    methods:["GET","POST","DELETE","UPDATE","PUT","PATCH"]
  })
);




initializeApp({
  credential: admin.credential.cert(serviceAccount),
  projectId: "picars-a78ee"
});

app.post("/send",function(req,res){
  const receivedToken = req.body.fcmToken;
  const message = {
    notification:{
      title:"Event",
      body:'This is a New Event'
    },
    token:"ck3Wja1_QGGzea7cVsi8dB:APA91bG053LTXnWsXBrIJMeVHQdr9F3bUZgiAGrSVA4D8nj8pl85aRBavULkPoOKHpbxE8ODaez9sbz7WCBVQIJGHOMQrrIEX-a--7fahn27n1y3oN2rV8iGHl-S1AGk9vpo5RYKyJ9m"

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



app.listen(3000,function(){
console.log("Server Started")
});

