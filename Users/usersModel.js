const db = require('../data/dbConfig');


module.exports = {
    insert,
    // find,
    // findBy,
    // findById,
  };


//   function find() {
//       return db('users').select('id', 'username', 'password');
//   }

// function findBy(filter) {
//     return db('users').where(filter);
// }

// function findById(id){
//     return db('users')
//     .where({id})
//     .first();
// }

async function insert(user) {
    return db('users')  .insert(user, 'id')
  }
