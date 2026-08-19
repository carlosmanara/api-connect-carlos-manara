const { users, getNextId } = require('../data/users');

function listUsers(req, res) {
  res.status(200).json(users);
}

function createUser(req, res) {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({
      error: 'Os campos "name" e "email" são obrigatórios.'
    });
  }

  const newUser = { id: getNextId(), name, email };
  users.push(newUser);
  res.status(201).json({ data: newUser });
}

function getUserById(req, res) {
  const id = parseInt(req.params.id);
  const user = users.find(u => u.id === id);

  if (!user) {
    return res.status(404).json({ error: 'Usuário não encontrado' });
  }

  res.status(200).json(user);
}

function updateUser(req, res) {
  const id = parseInt(req.params.id);
  const index = users.findIndex(u => u.id === id);

  if (index === -1) {
    return res.status(404).json({ error: 'Usuário não encontrado' });
  }

  const { name, email } = req.body;
  users[index] = { ...users[index], name, email };
  res.status(200).json({ data: users[index] });
}

function deleteUser(req, res) {
  const id = parseInt(req.params.id);
  const index = users.findIndex(u => u.id === id);

  if (index === -1) {
    return res.status(404).json({ error: 'Usuário não encontrado' });
  }

  users.splice(index, 1);
  res.status(204).send();
}

module.exports = { listUsers, createUser, getUserById, updateUser, deleteUser };