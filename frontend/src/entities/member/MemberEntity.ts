import type { IMemberEntity } from './interfaces/IMemberEntity';

export class MemberEntity {
  public readonly id: string;
  public readonly firstname: string;
  public readonly lastname: string;
  public readonly email: string;

  constructor({ id, firstname, lastname, email }: IMemberEntity) {
    this.id = id;
    this.firstname = firstname;
    this.lastname = lastname;
    this.email = email;
  }
}
