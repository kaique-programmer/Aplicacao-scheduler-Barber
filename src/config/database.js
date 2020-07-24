module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'db_gobarber',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
