module.exports = ({ env }) => ({
  host: env('APP_HOST'),
  port: env.int('PORT'),
  app: {
    keys: env.array('APP_KEYS'),
  },
});
