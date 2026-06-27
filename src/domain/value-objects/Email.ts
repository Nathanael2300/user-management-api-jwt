export class Email {
  constructor(private readonly value: string) {
    if (!value) {
      throw new Error("Email is required");
    }

    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexEmail.test(value)) {
      throw new Error("Invalid Email");
    }
  }

  getValue(): string {
    return this.value;
  }
}
