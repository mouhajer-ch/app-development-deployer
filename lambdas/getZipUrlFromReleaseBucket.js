const AWS = require('aws-sdk');
const s3 = new AWS.S3();

const Bucket = 'testreleaseszipfiles';

exports.handler = async (event, context) => {

    // if (!event.requestContext.authorizer) {
    //     errorResponse('Authorization not configured', context.awsRequestId, callback);
    //     return;
    // }

    try {
        const service = event.service;
        const release = event.release;
        const releaseService = `${service}-${release}.zip`
        let data = {};

        // TODO Improve logic: something like getObject with url path returned
        data = await s3.listObjectsV2({ Bucket, Prefix: releaseService}).promise();
        
        if(!data.Contents.length){
            data = await s3.listObjectsV2({ Bucket, Prefix: `${service}/${releaseService}` }).promise();
        }
        
        console.log("Data:\n" + JSON.stringify(data));
        return { statusCode: 200, data: (data.Contents.length) ? data.Prefix : "" };
    } catch (err) {
        console.error(err);
        return {
            statusCode: 500, data: JSON.stringify({
                Error: err.message,
                Reference: context.awsRequestId
            })
        };
    }
};
/* TEST OBJECT
{
    "service": "testDepthOne",
    "release": "40abda3"
}
*/

    // Retrieve the object
    // s3.getObject(params, function(err, data) {
    //     if (err) {
    //         console.log(err, err.stack);
    //     } else {
    //         console.log("Data:\n");
    //     }
    // });

