let users = [
  { id: 1, name: 'Ana Silva', email: 'ana.silva@email.com' },
  { id: 2, name: 'Bruno Costa', email: 'bruno.costa@email.com' }
];

let nextId = 3;

function getNextId() {
  return nextId++;
}

module.exports = { users, getNextId };