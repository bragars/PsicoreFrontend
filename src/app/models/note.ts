import { Deserializable } from "./deserializable.model";

export class Note implements Deserializable {
  id!: string;
  goals!: string;
  description!: string;

  deserialize(input: any) {
    Object.assign(this, input);
    return this;
  }
}
