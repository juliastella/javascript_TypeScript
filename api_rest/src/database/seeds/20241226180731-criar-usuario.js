const bcryptjs = require('bcryptjs');
module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert(
    'users',
    [
      {
        nome: 'Júlia',
        email: 'julia.paula@gmail.com',
        password_hash: await bcryptjs.hash('123456', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'Doca Oliveira',
        email: 'Doca.oliveira@gmail.com',
        password_hash: await bcryptjs.hash('654321', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'Pedro',
        email: 'pedro@gmail.com',
        password_hash: await bcryptjs.hash('147852369', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'Maria',
        email: 'maria@gmail.com',
        password_hash: await bcryptjs.hash('147852369', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'Luiz',
        email: 'luiz@gmail.com',
        password_hash: await bcryptjs.hash('147852369', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
    ],
    {},
  ),
  down: () => {},
};
