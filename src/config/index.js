export default {
  port: Number(process.env.PORT) || 8080,

  secret: String(process.env.SECRET) || 'MySecretKey',
};
