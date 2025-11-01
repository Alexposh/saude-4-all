import { Injectable } from '@angular/core';
// import * as AWS from 'aws-sdk';

// const s3 = new AWS.S3({
//   accessKeyId: 'B1CA862A63D0D9ABC605',
//   secretAccessKey: 'xmcmSLPjStK6sHFyLY7voZrZXWiTnuxQ4gJK4Zw8',
//   endpoint: 'https://s3.filebase.com',
//   s3ForcePathStyle: true,
// });

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor() { }

//   uploadToFilebase(file: File, userId: string): Promise<string> {
//   const bucketName = 'saude-all-persons';
//   const key = `patients/${userId}/${file.name}`;

//   const params = {
//     Bucket: bucketName,
//     Key: key,
//     Body: file,
//     ContentType: file.type,
//     ACL: 'public-read', // Make it publicly accessible
//   };

//   return new Promise((resolve, reject) => {
//     s3.upload(params, (err: Error, data: AWS.S3.ManagedUpload.SendData) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(data.Location); // This is the public URL
//       }
//     });
//   });
// }
}
