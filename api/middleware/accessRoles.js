function accessRoleToRegisterTenant(req, res, next) {
  const role = req.user.role.toString().toLowerCase();
  if (role == "admin" || role == "root") {
    next();
  }
  return res.status(403).send("Access denied");
}

function accessRoleToCreateDatabase(req, res, next) {
  const role = req.user.role.toString().toLowerCase();
  if (role == "root") {
    next();
  }
  return res.status(403).send("Access denied");
}

module.exports = {
  accessRoleToRegisterTenant,
  accessRoleToCreateDatabase
};
