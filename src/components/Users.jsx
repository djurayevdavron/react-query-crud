import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getUsers, createUser, updateUser, deleteUser } from "../api/usersApi";

function Users() {
  const queryClient = useQueryClient();
  const { data: users, isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
  });
  // POST qismi
  const addUserMutation = useMutation({
    mutationFn: createUser,
    onSuccess: (newUser) => {
      queryClient.setQueryData(["users"], (old = []) => [
        ...old,
        {
          ...newUser,
          id: Date.now(),
        },
      ]);
    },
  });
  // PUT qismi
  const updateUserMutation = useMutation({
    mutationFn: updateUser,
    onSuccess: (updatedUser) => {
      queryClient.setQueryData(
        ["users"],
        (old = []) =>
          old.map((user) =>
            user.id === updatedUser.id
              ? {
                  ...user,
                  name: "Updated User",
                }
              : user,
          ),
      );
    },
  });

  // DELETE qismi

  const deleteUserMutation = useMutation({
    mutationFn: deleteUser,
    onSuccess: (_, id) => {
      queryClient.setQueryData(
        ["users"],

        (old = []) => old.filter((user) => user.id !== id),
      );
    },
  });

  if (isLoading) return <h2>Loading...</h2>;

  return (
    <div>
      <h2 className="section-title">Task 1 - Users CRUD</h2>

      <button
        className="btn"
        onClick={() =>
          addUserMutation.mutate({
            name: "Davron",

            email: "davron@gmail.com",
          })
        }
      >
        Add User
      </button>

      {users?.map((user) => (
        <div className="card" key={user.id}>
          <h2>{user.name}</h2>

          <p>{user.email}</p>

          <button
            className="edit-btn"
            onClick={() =>
              updateUserMutation.mutate({
                id: user.id,

                user: {
                  ...user,

                  name: "Updated User",
                },
              })
            }
          >
            Edit
          </button>

          <button
            className="delete-btn"
            onClick={() => deleteUserMutation.mutate(user.id)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}
export default Users;
