export const auth = (req, res, next) => {
  const role = req.header("role"); 
  if (!role) return res.status(401).json({ message: "No role provided" });

  req.user = { role };
  next();
};

export const allowAdminManager = (req, res, next) => {
  if (req.user.role === "admin" || req.user.role === "manager") {
    return next();
  }
  return res.status(403).json({ message: "Access denied" });
};