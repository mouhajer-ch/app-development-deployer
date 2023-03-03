const axios = require("axios");

const setAxiosCall = async (url, body) => {
    return await axios.post(url, body);
};

exports.handler = async (event, context) => {

    // if (!event.requestContext.authorizer) {
    //     errorResponse('Authorization not configured', context.awsRequestId, callback);
    //     return;
    // }

    const services = event.services || [];
    try {
        // TESTING, get auth token from the browser after auth.
        //  {headers:{'X-API-TOKEN':xxxxx}}
        const promiseCalls = services.map((service) => {
            return setAxiosCall(service.url, service.body);
        });

        Promise.allSettled(promiseCalls) //all(promiseCalls)
            .then((response) => console.log(response))
            .catch((error) => console.error(`error: ${error.message}`));

        // Data will have the list of success and rejected services
        return { statusCode: 200, data: {} };
    } catch (err) {
        console.error(err);
        return {
            statusCode: 500,
            data: JSON.stringify({
                Error: err.message,
                Reference: context.awsRequestId,
            }),
        };
    }
};
