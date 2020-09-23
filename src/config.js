export default {
  MAX_ATTACHMENT_SIZE: 5000000,
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
    IDENTITY_POOL_ID: 'us-east-1:52d00777-3b41-4499-9d33-7323959fe105',
  },
};
