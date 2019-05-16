export class Contact {
  picture: string;
  nickname: string;
  fullname: string;
  phone: string;
  email: string;
  group: string;

  constructor(picture?: string, nickname?: string, fullname?: string, phone?: string, email?: string, group?: string) {
    this.picture = picture;
    this.nickname = nickname;
    this.fullname = fullname;
    this.phone = phone;
    this.email = email;
    this.group = group;
  }
}
