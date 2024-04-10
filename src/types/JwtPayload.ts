import jwt from "jsonwebtoken";

interface IJwtPayload extends jwt.JwtPayload {
  id: string;
}
export default IJwtPayload;
