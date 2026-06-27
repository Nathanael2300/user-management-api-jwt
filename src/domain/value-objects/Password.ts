const passwordRegex = {
  uppercaseRegex: /[A-Z]/,
  specialCharRegex: /[^A-Za-z0-9]/,
  numberRegex: /[0-9]/,
};

export class Password {
  constructor(private readonly value: string) {
    if (!value) {
      throw new Error("Password is required");
    }

    if (!passwordRegex.uppercaseRegex.test(value)) {
      throw new Error("Password must have at least one uppercase letter");
    }

    if (!passwordRegex.specialCharRegex.test(value)) {
      throw new Error("Password must have at least one special character");
    }

    if (!passwordRegex.numberRegex.test(value)) {
      throw new Error("Password must have at least one number");
    }
  }

  getValue(): string {
    return this.value;
  }
}
