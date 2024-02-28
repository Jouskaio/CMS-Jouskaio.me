module.exports = [
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'https:'],
          'img-src': ["'self'", 'data:', 'blob:', 'embed.api.video', 'cdn.api.video/vod/'],
          'frame-src': ["'self'", 'data:', 'blob:', 'embed.api.video'],
          "script-src": ["'self'", "editor.unlayer.com"],
          "frame-src": ["'self'", "editor.unlayer.com"],
          "img-src": ["'self'", "data:", "cdn.jsdelivr.net", "strapi.io", "s3.amazonaws.com"],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  'strapi::security',
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
