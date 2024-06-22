import { CognitoUserPool } from 'amazon-cognito-identity-js';

const poolData = {
    UserPoolId: 'us-east-1_QTOtheJeb',
    ClientId: '7mhe9cg0bspqurhroh3i0l49c0',
};

export default new CognitoUserPool(poolData);