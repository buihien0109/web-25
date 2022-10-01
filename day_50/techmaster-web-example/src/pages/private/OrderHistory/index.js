import React from "react";

function OrderHistory() {
    return (
        <section className="py-5">
            <div className="container">
                <h1 className="fs-4 mb-5">Lịch sử đơn hàng</h1>
                <table className="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Danh sách item</th>
                            <th>Ngày đăng ký</th>
                            <th>Hình thức thanh toán</th>
                            <th>Tổng tiền đơn hàng (đã bao gồm VAT - 10%)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>
                                <ul>
                                    <li>
                                        Spring Boot - Web Back End
                                        (9.000.000&nbsp;VND - 1)
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        Lập trình iOS Swift căn bản cập nhật
                                        2022 (3.900.000&nbsp;VND - 1)
                                    </li>
                                </ul>
                            </td>
                            <td>9/30/2022</td>
                            <td>Chuyển khoản</td>
                            <td>14.190.000&nbsp;VND</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>
                                <ul>
                                    <li>
                                        Khoá học Lập trình Arduino Scratch cho
                                        trẻ em (3.850.000&nbsp;VND - 1)
                                    </li>
                                </ul>
                            </td>
                            <td>9/30/2022</td>
                            <td>Chuyển khoản</td>
                            <td>4.235.000&nbsp;VND</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>
                                <ul>
                                    <li>
                                        Learn AWS the Hard Way
                                        (7.000.000&nbsp;VND - 2)
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        DevOps 2022 (4.000.000&nbsp;VND - 3)
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        Web Frontend nâng cao với React
                                        (5.500.000&nbsp;VND - 3)
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        Xây dựng và quản trị website bằng
                                        wordpress (500.000&nbsp;VND - 2)
                                    </li>
                                </ul>
                            </td>
                            <td>9/30/2022</td>
                            <td>Chuyển khoản</td>
                            <td>47.850.000&nbsp;VND</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>
                                <ul>
                                    <li>
                                        Khoá học SQL nâng cao (500.000&nbsp;VND
                                        - 1)
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        Javascript căn bản - Tổng hợp 12 game
                                        huyền thoại (500.000&nbsp;VND - 2)
                                    </li>
                                </ul>
                            </td>
                            <td>9/30/2022</td>
                            <td>Đóng tiền trực tiếp</td>
                            <td>1.650.000&nbsp;VND</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    );
}

export default OrderHistory;
