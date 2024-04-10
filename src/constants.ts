export const DEFAULT_LOCALE = "en-US";

export const HOMEPAGE_MESSAGE_BUNDLE_NAME = "pages.homepage";

const DEV_STAGE = "dev";
const BETA_STAGE = "beta";
const GAMMA_STAGE = "gamma";
const PROD_STAGE = "prod";
export const REGION_US_WEST_2 = "us-west-2";
export const API_GATEWAY_SERVICE_NAME = "execute-api";

const IAM_ROLE_AUTH_ALPHA = "arn:aws:iam::992382770414:role/service-role/argusAccessRole";
const IAM_ROLE_AUTH_BETA = "arn:aws:iam::992382770414:role/service-role/argusAccessRole";
const IAM_ROLE_AUTH_GAMMA = "arn:aws:iam::992382770414:role/service-role/argusAccessRole";
const IAM_ROLE_AUTH_PROD = "arn:aws:iam::992382770414:role/service-role/argusAccessRole";

export const IAM_ROLE_AUTH = new Map([
  [DEV_STAGE, IAM_ROLE_AUTH_ALPHA],
  [BETA_STAGE, IAM_ROLE_AUTH_BETA],
  [GAMMA_STAGE, IAM_ROLE_AUTH_GAMMA],
  [PROD_STAGE, IAM_ROLE_AUTH_PROD],
]);

export const GET_METHOD_TYPE = "GET";
export const PUT_METHOD_TYPE = "PUT";
export const POST_METHOD_TYPE = "POST";
export const MIDWAY_LOGIN_URL = "https://midway-auth.amazon.com/login?next=/SSO/redirect";
export const MIDWAY_SSO_URL = "https://midway-auth.amazon.com/SSO";
export const WINDOW_LOCATION_URL = `https://${window.location.host}`;

const API_GATEWAY_HOST_ALPHA = "wcwl4yml4a.execute-api.us-west-2.amazonaws.com";
const API_GATEWAY_HOST_BETA = "wcwl4yml4a.execute-api.us-west-2.amazonaws.com";
const API_GATEWAY_HOST_GAMMA = "wcwl4yml4a.execute-api.us-west-2.amazonaws.com";
const API_GATEWAY_HOST_PROD = "wcwl4yml4a.execute-api.us-west-2.amazonaws.com";

export const API_GATEWAY_HOST = new Map([
  [DEV_STAGE, API_GATEWAY_HOST_ALPHA],
  [BETA_STAGE, API_GATEWAY_HOST_BETA],
  [GAMMA_STAGE, API_GATEWAY_HOST_GAMMA],
  [PROD_STAGE, API_GATEWAY_HOST_PROD],
]);

export const AXIOS_TIMEOUT = 60000;