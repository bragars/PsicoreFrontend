import { Deserializable } from "./deserializable.model";

export class Role implements Deserializable {
  id!: string;
  USER!: string;
  ADMIN!: string;

  deserialize(input: any) {
    Object.assign(this, input);
    return this;
  }
}
