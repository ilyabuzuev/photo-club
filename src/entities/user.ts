interface Entity {
  id: string;
  firstname: string;
  lastname: string;
}

export class UserEntity implements Entity {
  id: string;
  firstname: string;
  lastname: string;

  constructor({ id, firstname, lastname }: Entity) {
    this.id = id;
    this.firstname = firstname;
    this.lastname = lastname;
  }
}
