import { JwtPayload } from "jsonwebtoken";

export interface Token extends JwtPayload {
  id: number;
  Role: string;
}
