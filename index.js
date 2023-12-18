import admin from "firebase-admin";

import {initializeApp,applicationDefault} from 'firebase-admin/app';
import {getMessaging } from "firebase-admin/messaging";
import express, {json} from "express";

process.env.g




initializeApp({
  credential: admin.credential.cert(serviceAccount),
  projectId: "picars-a78ee"
});

app.listen(3000,function(){
console.log("Server Started")
});

