require('babel-register')({
  presets: ['es2015', 'react']
});
const Sitemap = require('react-router-sitemap').default;
const router = require('./Sitemap.tsx').default;

const sitemap = new Sitemap(router)
  .build(process.env.DEPLOY_URL || 'https://www.indywise.com')
  .save('./build/sitemap.xml');
