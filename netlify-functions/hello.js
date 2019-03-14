// AWS Lambda function - for netlify you just put your functions
// in a specified folder, https://www.netlify.com/docs/functions
exports.handler = function(event, context, callback) {
    callback(null, {
    statusCode: 200,
    body: "Hello, Functions World! It is now " + new Date()
    });
}