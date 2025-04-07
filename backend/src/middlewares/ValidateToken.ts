import { NextFunction, Request, Response } from "express";
import HttpStatus from "../shared/HttpStatus";
import { AuthService } from "../services";

class ValidateToken {
  private readonly authService;

  constructor() {
    this.authService = new AuthService();
    this.validate = this.validate.bind(this);
  }

  validate(req: Request, res: Response, next: NextFunction): void {
    const authHeader: string | undefined = req.headers["authorization"];

    if (!authHeader) {
       res.status(HttpStatus.UNAUTHORIZE).json({
        success: false,
        data: null,
        error: null,
        status: HttpStatus.UNAUTHORIZE,
        message: "Token is missing",
      });
    }

    //Note : Token without the prefix of `Bearer` is invalid
    // ex : Bearer <token here>
    const token: string | undefined = (authHeader||"").split(" ")[1];

    if (!token || !this.authService.isTokenValid(token)) {
       res.status(HttpStatus.FORBIDDEN).json({
        success: false,
        data: null,
        error: null,
        status: HttpStatus.FORBIDDEN,
        message: "Invalid Token",
      });
    } else next();
    
}
}

export default ValidateToken;
