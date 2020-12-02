async function getSecrets() {
    // Load the AWS SDK
    var AWS = require('aws-sdk'),
        region = "eu-central-1",
        secretName = "aop-test-support-api",
        secret,
        decodedBinarySecret,
        result;

    // Create a Secrets Manager client
    var client = new AWS.SecretsManager({
        region: region
    });

    await client.getSecretValue({SecretId: secretName}, function(err, data) {

            // In this sample we only handle the specific exceptions for the 'GetSecretValue' API.
            // See https://docs.aws.amazon.com/secretsmanager/latest/apireference/API_GetSecretValue.html
            // We rethrow the exception by default.
            if (err) {
                throw err;
            }
            else {
                // Decrypts secret using the associated KMS CMK.
                // Depending on whether the secret is a string or binary, one of these fields will be populated.
                if ('SecretString' in data) {
                    secret = data.SecretString;
                    result = secret;
                } else {
                    let buff = new Buffer(data.SecretBinary, 'base64');
                    decodedBinarySecret=buff.toString('ascii');
                    result = decodedBinarySecret;
                }
            }
        });

    return result;
}

export {getSecrets};
