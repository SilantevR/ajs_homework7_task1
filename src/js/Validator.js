/* eslint no-underscore-dangle: 0 */

export default class Validator {
  constructor() {
    this.regexp1 = /^[\d_-]/;
    this.regexp2 = /[\d_-]$/;
    this.regexp3 = /(\d{4,})/;
    this.regexp4 = /[^a-z\d_-]/i;
  }

  validateUsername(name) {
    if (this.regexp1.test(name)) {
      throw new Error(
        'Имя не должно начинаться цифрами, символами подчёркивания или тире.',
      );
    } else if (this.regexp2.test(name)) {
      throw new Error(
        'Имя не должно заканчиваться цифрами, символами подчёркивания или тире.',
      );
    } else if (this.regexp3.test(name)) {
      throw new Error('Имя не должно содержать подряд более трёх цифр.');
    } else if (this.regexp4.test(name)) {
      throw new Error(
        'Допустимы только латинские буквы, символы тире -, подчёркивания _ и цифры (0-9)',
      );
    } else {
      return 'Имя прошло проверку';
    }
  }
}
