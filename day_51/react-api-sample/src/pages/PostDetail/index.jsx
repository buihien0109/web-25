import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import postApi from "../../api/postApi";

function PostDetail() {
    const params = useParams();
    const { postId } = params;

    const [post, setPost] = useState();

    useEffect(() => {
        const fetchPost = async (id) => {
            let res = await postApi.getPostById(id);
            console.log(res);

            setPost(res);
        };

        fetchPost(postId);
    }, []);

    return (
        <div className="container my-5">
            <h1>{post?.title}</h1>
            <p>{post?.body}</p>
        </div>
    );
}

export default PostDetail;
