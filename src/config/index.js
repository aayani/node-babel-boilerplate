export default {
  port: Number(process.env.PORT) || 3000,

  secret: String(process.env.SECRET) || 'MySecretKey',
};
