const AWS = require('aws-sdk');

const s3 = new AWS.S3();

async function listObjects(prefix = '') {
  try {
    const params = {
      Bucket: process.env.BUCKET_NAME,
      Prefix: prefix,
    };

    const data = await s3.listObjectsV2(params).promise();

    return data.Contents.map((object) => ({
      key: object.Key,
    }));
  } catch (error) {
    console.error('Error:', error);
    return [];
  }
}

module.exports = {
  listObjects,
};
