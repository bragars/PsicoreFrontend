import { User } from "./user.model";

export class Therapist extends User {
  crp!: string;
  biography!: string;
}
