import { Deserializable } from "./deserializable.model";

export class Document implements Deserializable {
  id!: string;
  name!: string;
  deserialize(input: any) {
    Object.assign(this, input);
    return this;
  }
}
