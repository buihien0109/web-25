import axiosClient from "./axiosClient";

const postApi = {
    getPosts() {
        const url = "/posts";
        return axiosClient.get(url);
    },
    getPostById(id) {
        const url = `/posts/${id}`;
        return axiosClient.get(url);
    }
}

export default postApi