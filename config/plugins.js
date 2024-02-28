
module.exports = ({ env }) => ({
  "strapi-chatgpt": {
    enabled: true,
  },
  email: {
    config: {
      provider: 'sendmail',
      /*providerOptions: {
        dkim: {
          privateKey: env('DKIM_PRIVATE_KEY'),
          keySelector: 'abcd',
        },
      },*/
      settings: {
        defaultFrom: 'contact@jouskaio.me',
        defaultReplyTo: 'contact@jouskaio.me',
      },
    },
  },
});