import { Router } from "express";
import { body, validationResult } from "express-validator";
import User from "../model/user";
import { AuthenticationError } from "../utils/errors";



export default () => {
  const authMiddleware = Router();

  authMiddleware.post(
    "/login",
    body("password").notEmpty().isLength({ min: 6 }).isAlphanumeric(),
    (req, res, next) => {
      const { email, userName } = req.body;
      if (!email && !userName) throw new AuthenticationError({code:"ATH-01",message:"email/username cannot be empty"});
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        console.log("User data is invalid");
        throw new AuthenticationError({code:"ATH-01",message:errors.errors});
      }
      User.findOne({ $or: [{ email }, { userName }] })
        .then((data) => {
            if (!data) throw new AuthenticationError({code:"ATH-02",message:"User doesnt exists, Please sign up"});
            req.user = data;
            next();
        })
        .catch((error) => {
          console.error(error);
          next(error);
        });
    }
  );

  return authMiddleware;
};
