// controllers/usersController.js
const getUsers = (req, res) => {
  const users = [
    { id: 546, username: "John" },
    { id: 894, username: "Mary" },
    { id: 326, username: "Jane" },
  ];
  res.json(users);
};

const deleteUser = (req, res) => {
  res.json({ result: "success" });
};

module.exports = {
  getUsers,
  deleteUser,
};

