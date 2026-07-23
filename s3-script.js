// Simple AWS S3 script to upload, retrieve, and delete a file
// Using AWS SDK v3

import { S3Client, PutObjectCommand, GetObjectCommand, DeleteObjectCommand } from "@aws-sdk/client-s3";
import fs from "fs";

// Configure S3 client
const REGION = "us-east-2"; 
const BUCKET = "www.christopherdimas.live";
const KEY = "test.txt";

const s3 = new S3Client({ region: REGION });

//Upload a file
async function uploadFile() {
  const fileContent = fs.readFileSync(KEY); 
  const command = new PutObjectCommand({
    Bucket: BUCKET,
    Key: KEY,
    Body: fileContent
  });
  await s3.send(command);
  console.log(`Uploaded ${KEY} to S3`);
}

//Retrieve a file
async function getFile() {
  const command = new GetObjectCommand({
    Bucket: BUCKET,
    Key: KEY
  });
  const response = await s3.send(command);

  // Convert stream to string (Node.js)
  const bodyContents = await streamToString(response.Body);
  console.log(`Retrieved file contents:\n${bodyContents}`);
}

// Helper function to convert S3 stream to string
async function streamToString(stream) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    stream.on("data", (chunk) => chunks.push(chunk));
    stream.on("error", reject);
    // eslint-disable-next-line no-undef
    stream.on("end", () => resolve(Buffer.concat(chunks).toString("utf-8")));
  });
}

//Delete a file 
async function deleteFile() {
  const command = new DeleteObjectCommand({
    Bucket: BUCKET,
    Key: KEY
  });
  await s3.send(command);
  console.log(`Deleted ${KEY} from S3`);
}

//Run all steps 
async function main() {
  await uploadFile();
  await getFile();
  await deleteFile();
}

main();