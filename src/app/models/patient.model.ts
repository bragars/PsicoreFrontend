import { User } from "./user.model";

export class Patient extends User {
  birthday!: string;
  about!: string;
}
