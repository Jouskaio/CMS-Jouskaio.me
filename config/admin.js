module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '4f789fcf3955611cc13110ad9536159d'),
  },
});
