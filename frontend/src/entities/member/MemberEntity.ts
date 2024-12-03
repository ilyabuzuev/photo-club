import type { IMemberEntity } from './interfaces/IMemberEntity';

export class MemberEntity {
  public readonly id: string;
  public readonly name: string;
  public readonly email: string;

  constructor({ id, name, email }: IMemberEntity) {
    this.id = id;
    this.name = name;
    this.email = email;
  }
}
