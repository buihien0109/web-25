import React, { useEffect, useState } from "react";
import userApi from "../../api/userApi";

function UserList() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            let res = await userApi.getUsers();
            console.log(res);
        };

        fetchUsers();
    }, []);

    return <div>UserList</div>;
}

export default UserList;
