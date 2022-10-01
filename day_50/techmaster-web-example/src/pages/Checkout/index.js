import React from "react";
import { Link } from "react-router-dom";

function Checkout() {
    return (
        <div className="shopping-cart-container my-5">
            <div className="container">
                <div className="mb-4">
                    <nav
                        style={{ "--bs-breadcrumb-divider": ">" }}
                        aria-label="breadcrumb"
                    >
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item">
                                <Link to="/gio-hang">Giỏ hàng</Link>
                            </li>
                            <li
                                className="breadcrumb-item active"
                                aria-current="page"
                            >
                                Thanh toán
                            </li>
                        </ol>
                    </nav>
                </div>
                <div className="row">
                    <div className="col-md-8">
                        <div className="p-4 shadow-sm">
                            <h2 className="fs-5 fw-normal mb-3">
                                1. Thông tin tài khoản
                            </h2>
                            <div className="account-info d-flex mb-4">
                                <input
                                    type="text"
                                    placeholder="Nhập tên"
                                    className="form-control flex-grow-1"
                                />
                                <input
                                    type="text"
                                    placeholder="Nhập email"
                                    className="form-control flex-grow-1 mx-2"
                                />
                                <input
                                    type="text"
                                    placeholder="Nhập số điện thoại"
                                    className="form-control flex-grow-1"
                                />
                            </div>

                            <h2 className="fs-5 fw-normal mb-3 mt-5">
                                2. Phương thức thanh toán
                            </h2>
                            <div className="payment methods">
                                <div className="topic-item input-group d-flex align-items-center mb-1">
                                    <input
                                        type="radio"
                                        value="transfer"
                                        id="transfer"
                                    />
                                    <label htmlFor="transfer" className="ms-2">
                                        Chuyển khoản
                                    </label>
                                </div>
                                <div className="topic-item input-group d-flex align-items-center mb-1">
                                    <input
                                        type="radio"
                                        value="direct"
                                        id="direct"
                                    />
                                    <label htmlFor="direct" className="ms-2">
                                        Thanh toán trực tiếp
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="p-4 shadow-sm">
                            <div className="order-detail">
                                <h2 className="fs-5 fw-normal mb-4">
                                    Đơn hàng
                                </h2>

                                <div className="order-items">
                                    <div className="order-item d-flex justify-content-between align-items-center">
                                        <p className="text-black-50">
                                            Spring Boot - Web Back End
                                        </p>
                                        <p className="fw-bold">
                                            9.000.000&nbsp;VND x 1
                                        </p>
                                    </div>
                                    <div className="order-item d-flex justify-content-between align-items-center">
                                        <p className="text-black-50">
                                            Lập trình iOS Swift căn bản cập nhật
                                            2022
                                        </p>
                                        <p className="fw-bold">
                                            3.900.000&nbsp;VND x 1
                                        </p>
                                    </div>
                                </div>

                                <div className="order-money d-flex justify-content-between align-items-center border-top pt-4">
                                    <p className="text-black-50 fw-bold">
                                        Thành tiền
                                    </p>
                                    <p className="fw-bold">3.000.000 VND</p>
                                </div>

                                <div className="order-money d-flex justify-content-between align-items-center border-top pt-4">
                                    <p className="text-black-50 fw-bold">VAT</p>
                                    <p className="fw-bold">3.000.000 VND</p>
                                </div>

                                <div className="order-money d-flex justify-content-between align-items-center border-top pt-4 pb-4">
                                    <p className="text-black-50 fw-bold">
                                        Tổng cộng
                                    </p>
                                    <p className="fw-bold">3.000.000 VND</p>
                                </div>

                                <div className="d-flex justify-content-center">
                                    <button
                                        className="btn btn-primary"
                                        id="btn-submit"
                                    >
                                        Gửi đăng ký
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Checkout;
