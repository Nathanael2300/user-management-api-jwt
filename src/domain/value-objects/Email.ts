export class Email {
  constructor(private readonly value: string) {
    if (typeof value !== "string") {
      throw new Error("Email must be string");
    }

    if (!value) {
      throw new Error("Email is required");
    }

    const regexEmail =
      /^(?!.*\.\.)(?!.*@@)[A-Za-z0-9]+([._%+-]?[A-Za-z0-9]+)*@[A-Za-z0-9]+([.-]?[A-Za-z0-9]+)*\.[A-Za-z]{2,}$/;
    if (!regexEmail.test(value)) {
      throw new Error("Invalid Email");
    }
  }

  getValue(): string {
    return this.value;
  }
}
