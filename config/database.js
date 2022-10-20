const path = require("path");

module.exports = ({ env }) => ({
  connection: {
    client: 'sqlite',
    connection: {
      filename: path.join(__dirname, '..', env('DATABASE_FILENAME', '.tmp/data.db')),
    },
    useNullAsDefault: true,
  },
});

// module.exports = ({ env }) => ({
//   connection: {
//     client: "postgres",
//     connection: {
//       host: env("DATABASE_HOST", "ec2-54-82-205-3.compute-1.amazonaws.com:5432"),
//       port: env.int("DATABASE_PORT", 5432),
//       database: env("DATABASE_NAME", "d6dhu5kb93dv7s"),
//       user: env("DATABASE_USERNAME", "zcgakdzglirqqp"),
//       password: env("DATABASE_PASSWORD", "d80dc192c2171f8881f4c5d1bf62a32f0d1af611349b99c28fd0b3cb74b5fedb"),
//       schema: env("DATABASE_SCHEMA", "public"), // Not required
//       ssl: {
//         rejectUnauthorized: env.bool("DATABASE_SSL_SELF", false),
//       },
//     },
//     debug: false,
//   },
// });