import React from "react";

function Profile() {
    return (
        <section className="py-5">
            <div className="container">
                <h1 className="fs-4 mb-5">Hồ sơ cá nhân</h1>
                <div className="row">
                    <div className="col-md-6">
                        <div className="bg-light p-4">
                            <div className="mb-3">
                                <label className="form-label">Avatar</label>
                                <div className="avatar-preview mb-3 rounded">
                                    <img
                                        src="https://media.techmaster.vn/api/static/crop/bv9jp4k51co7nj2mhht0"
                                        alt="avatar"
                                        id="avatar-preview"
                                        className="rounded"
                                    />
                                </div>
                            </div>
                            <div className="mb-3">
                                <label className="col-form-label">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    className="form-control"
                                />
                            </div>
                            <div className="mb-3">
                                <label className="col-form-label">Email</label>
                                <input
                                    type="text"
                                    id="email"
                                    className="form-control"
                                    disabled
                                />
                            </div>
                            <div className="mb-3">
                                <label className="col-form-label">Phone</label>
                                <input
                                    type="text"
                                    id="phone"
                                    className="form-control"
                                />
                            </div>
                        </div>
                        <div className="text-center mt-3">
                            <button className="btn btn-primary" id="btn-save">
                                Cập nhật thông tin
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Profile;
