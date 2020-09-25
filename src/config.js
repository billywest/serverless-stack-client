const dev = {
  STRIPE_KEY: "pk_test_51HTdDPGtKqgDY7KpZwWw5bitsGaQCEaCLyanRrPQQrvAjDjmSzr67Z2VBcXBGRYVgrTLSBvCpO5ToxZSVJbgXsa800MIzH4uzi'",
  s3: {
    REGION: 'us-east-1',
    BUCKET: 'notes-app-2-api-dev-attachmentsbucket-1r6bsn9sjhkti',
  },
  apiGateway: {
    REGION: 'us-east-1',
    URL: 'https://mdlu58d0id.execute-api.us-east-1.amazonaws.com/dev',
  },
  cognito: {
    REGION: 'us-east-1',
    USER_POOL_ID: 'us-east-1_bTLmrtdhF',
    APP_CLIENT_ID: '5q723d0h3p9m1v1lqkh95hgkif',
    IDENTITY_POOL_ID: 'us-east-1:860b9bf5-4348-451e-a6b2-987a5b2b5887',
  },
};

const prod = {
  STRIPE_KEY: "pk_test_51HTdDPGtKqgDY7KpZwWw5bitsGaQCEaCLyanRrPQQrvAjDjmSzr67Z2VBcXBGRYVgrTLSBvCpO5ToxZSVJbgXsa800MIzH4uzi'",
  s3: {
    REGION: 'us-east-1',
    BUCKET: 'notes-app-2-api-prod-serverlessdeploymentbucket-1kfx5089sbt7u',
  },
  apiGateway: {
    REGION: 'us-east-1',
    URL: 'https://nrrdue87a8.execute-api.us-east-1.amazonaws.com/prod',
  },
  cognito: {
    REGION: 'us-east-1',
    USER_POOL_ID: 'us-east-1_0uiWhglMD',
    APP_CLIENT_ID: '7nl19bgutsnp1hql628u6qovsl',
    IDENTITY_POOL_ID: 'us-east-1:f8ce0428-ee3f-46ab-9c32-7449ab0cf4d5',
  },
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod' ? prod : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config,
};
