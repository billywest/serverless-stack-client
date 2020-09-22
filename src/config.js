export default {
  s3: {
    REGION: 'us-east-1',
    BUCKET: 'sirwest-notes-app-uploads',
  },
  apiGateway: {
    REGION: 'us-east-1',
    URL: 'https://bc7wzkuef4.execute-api.us-east-1.amazonaws.com/prod',
  },
  cognito: {
    REGION: 'us-east-1',
    USER_POOL_ID: 'us-east-1_PscNpPQ64',
    APP_CLIENT_ID: '7fi755ahtq7ljk51dt3h9b0iic',
    IDENTITY_POOL_ID: 'us-east-1:c8e4cec6-72e3-4f1d-96dd-ceb5fbae61ee',
  },
};
