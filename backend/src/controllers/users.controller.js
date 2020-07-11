const usersCtrl = {}

usersCtrl.getUsers = (req, res) => res.send('obtener todas')

usersCtrl.createUser = (req, res) => res.json(req.body)

usersCtrl.updateUser = (req, res) => res.send('update')

usersCtrl.deleteUser = (req, res) => res.send('delete')

usersCtrl.getUser = (req, res) => res.send('obtener uno')

module.exports = usersCtrl