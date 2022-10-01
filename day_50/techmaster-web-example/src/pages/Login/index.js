import React from "react";

function Login() {
    return (
        <section className="py-5">
            <div className="container">
                <h1 className="text-center fs-4 mb-5">Login</h1>
                <div className="modal-body">
                    <div className="mb-3">
                        <input
                            type="text"
                            className="form-control"
                            id="user-email"
                            placeholder="Nhập Email ..."
                        />
                    </div>
                    <div className="mb-3">
                        <input
                            type="password"
                            className="form-control"
                            id="user-password"
                            placeholder="Nhập Password ..."
                        />
                    </div>
                    <div className="d-flex justify-content-center">
                        <button
                            type="button"
                            className="btn btn-primary"
                            id="btn-login"
                        >
                            Đăng nhập
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Login;
