import { Deserializable } from "./deserializable.model";

export class Calendar implements Deserializable {
  id!: string;
  day!: string;
  month!: string;
  year!: string;
  time!: string;

  deserialize(input: any) {
    Object.assign(this, input);
    return this;
  }
}
