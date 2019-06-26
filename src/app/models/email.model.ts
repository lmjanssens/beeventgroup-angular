export class Email {

  public id: number;
  public emailType: string;
  public emailText: string;

  constructor(emailType: string, emailText: string) {
    this.emailType = emailType;
    this.emailText = emailText;
  }
}
