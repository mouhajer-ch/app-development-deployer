const axios = require("axios");

exports.handler = async (event, context) => {

  // if (!event.requestContext.authorizer) {
  //     errorResponse('Authorization not configured', context.awsRequestId, callback);
  //     return;
  // }

  try {
    const data = await axios.get(event.url, {headers:{'X-API-TOKEN':xxxxx}}); //`http://mesos-master1-${event.environment}.development.aws.internal:8080/v2/apps`;

    return { statusCode: 200, data: JSON.stringify(data) };
  } catch (err) {
    console.error(err);
    return {
      statusCode: 500, data: JSON.stringify({
        Error: err.message,
        Reference: context.awsRequestId,
      })
    };
  }
};
