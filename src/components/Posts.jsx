import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getPosts, createPost, updatePost, deletePost } from "../api/postsApi";

function Posts() {
  const queryClient = useQueryClient();
  const {
    data: posts,
    isLoading,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
  });

  // POST qismi

  const addPostMutation = useMutation({
    mutationFn: createPost,

    onSuccess: (newPost) => {
      queryClient.setQueryData(
        ["posts"],
        (old = []) => [
          {
            ...newPost,
            id: Date.now(),
          },
          ...old,
        ],
      );
    },
  });
  // PUT qismi

  const updatePostMutation = useMutation({
    mutationFn: updatePost,
    onSuccess: (updatedPost) => {
      queryClient.setQueryData(
        ["posts"],

        (old = []) =>
          old.map((post) =>
            post.id === updatedPost.id
              ? {
                  ...post,
                  title: "Updated Post",
                }
              : post,
          ),
      );
    },
  });

  // DELETE qismi

  const deletePostMutation = useMutation({
    mutationFn: deletePost,
    onSuccess: (_, id) => {
      queryClient.setQueryData(
        ["posts"],
        (old = []) => old.filter((post) => post.id !== id),
      );
    },
  });
  if (isLoading) return <h2>Loading...</h2>;
  return (
    <div>
      <h2 className="section-title">Task 2 - Posts CRUD</h2>
      <button
        className="btn"
        onClick={() =>
          addPostMutation.mutate({
            title: "New Post",
            body: "This is body",
            userId: 1,
          })
        }
      >
        Add Post
      </button>

      {posts
        ?.slice(0, 10)
        .map((post) => (
          <div className="card" key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <button
              className="edit-btn"
              onClick={() =>
                updatePostMutation.mutate({
                  id: post.id,
                  post: {
                    ...post,
                    title: "Updated Post",
                  },
                })
              }
            >
              Edit
            </button>

            <button
              className="delete-btn"
              onClick={() => deletePostMutation.mutate(post.id)}
            >
              Delete
            </button>
          </div>
        ))}
    </div>
  );
}
export default Posts;
