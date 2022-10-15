const initUsers = [
    { id: 1, name: "Nguyen Van A", email: "a@gmail.com", phone: "0987654321", address: "Ha Noi", password: "111" },
    { id: 2, name: "Tran Van B", email: "b@gmail.com", phone: "0987654654", address: "Hai Phong", password: "111" },
    { id: 3, name: "Ngo Thi C", email: "c@gmail.com", phone: "0987654987", address: "Thai Binh", password: "111" },
];

const usersReducer = (state = initUsers, action) => {
    switch (action.type) {
        case "addUser": {
            return state;
        }
        case "updateUser": {
            return state;
        }
        case "deleteUser": {
            return state;
        }
        default: {
            return state;
        }

    }
};

export default usersReducer