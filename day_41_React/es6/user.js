// Đóng gói
// Kế thừa
// Trừu tượng
// Đa hình

class User {
    #name = "";
    #email = "";

    constructor(name, email) {
        this.#name = name;
        this.#email = email;
    }

    sayHi() {
        console.log(`Xin chào ${this.#name}`)
    }

    get name() {
        return this.#name;
    }

    get email() {
        return this.#email;
    }

    set name(newName) {
        this.#name = newName;
    }
}

export default User;