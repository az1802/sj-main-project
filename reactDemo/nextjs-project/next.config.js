const config = require("./config");
const GITHUB_OUATH_URL = "https://github.com/login/oauth/authorize";
const SCOPE = "user";

module.exports = {
  publicRuntimeConfig: {
    GITHUB_OUATH_URL,
    OAUTH_URL: `${GITHUB_OUATH_URL}?client_id=${config.github.client_id}&scope=${SCOPE}`,
  },
};
