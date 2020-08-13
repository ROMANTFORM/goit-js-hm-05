class StringBuilder {

    constructor(value) {
        this._value = value;
        console.log(typeof value);
    }

    get value() {
        return this._value;
    }

    append(str) {
       
        this._value = this._value.concat(str);
        return this._value;
    }
       

    prepend(str) {
        this._value = str.concat(this._value);
        return this._value;
    }

    pad(str) {
        this._value = str.concat(this._value).concat(str);
        return this._value;
    }
       
};
const builder = new StringBuilder('.');
console.log(builder.value);

builder.append('^');
console.log(builder.value); // '.^'

builder.prepend('^');
console.log(builder.value); // '^.^'

builder.pad('=');
console.log(builder.value); // '=^.^='