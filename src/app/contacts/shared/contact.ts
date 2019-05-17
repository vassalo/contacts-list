export class Contact {
  id: number;
  picture: string;
  nickname: string;
  fullname: string;
  phone: string;
  email: string;
  group: string;

  constructor(id?: number, picture?: string, nickname?: string, fullname?: string, phone?: string, email?: string, group?: string) {
    this.id = id;
    this.picture = picture;
    this.nickname = nickname;
    this.fullname = fullname;
    this.phone = phone;
    this.email = email;
    this.group = group;
  }
}
