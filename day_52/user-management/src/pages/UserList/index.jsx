import React, { useState } from "react";
import { useSelector } from "react-redux";

function UserList() {
    const users = useSelector((state) => state.users);
    console.log(users);

    const [term, setTerm] = useState("");

    const handleSearch = (e) => {
        if (e.keyCode === 13) {
            console.log(term);
        }
    };

    return (
        <div className="container mt-5 mb-5">
            <h2 className="text-center text-uppercase">Danh sách user</h2>

            <div className="row justify-content-center">
                <div className="col-md-10">
                    <div className="d-flex justify-content-end align-items-center mt-5 mb-4">
                        <input
                            type="text"
                            id="search"
                            className="form-control w-50"
                            placeholder="Tìm kiếm user"
                            value={term}
                            onChange={(e) => setTerm(e.target.value)}
                            onKeyDown={(e) => handleSearch(e)}
                        />
                    </div>

                    <div className="bg-light p-4">
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th>STT</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>Address</th>
                                    <th></th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Nguyễn Văn A</td>
                                    <td>a@gmail.com</td>
                                    <td>0987654321</td>
                                    <td>Hà Nội</td>
                                    <td>
                                        <a
                                            href="./detail.html?id=2"
                                            className="btn btn-success"
                                        >
                                            Xem chi tiết
                                        </a>
                                        <button className="btn btn-danger">
                                            Xóa
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Nguyễn Văn A</td>
                                    <td>a@gmail.com</td>
                                    <td>0987654321</td>
                                    <td>Hà Nội</td>
                                    <td>
                                        <a
                                            href="./detail.html?id=2"
                                            className="btn btn-success"
                                        >
                                            Xem chi tiết
                                        </a>
                                        <button className="btn btn-danger">
                                            Xóa
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>Nguyễn Văn A</td>
                                    <td>a@gmail.com</td>
                                    <td>0987654321</td>
                                    <td>Hà Nội</td>
                                    <td>
                                        <a
                                            href="./detail.html?id=2"
                                            className="btn btn-success"
                                        >
                                            Xem chi tiết
                                        </a>
                                        <button className="btn btn-danger">
                                            Xóa
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                        <p className="message d-none"></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserList;
