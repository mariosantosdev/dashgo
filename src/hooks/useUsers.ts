import { useQuery } from "react-query";
import { api } from "~services/api";

type User = {
  id: string;
  name: string;
  email: string;
  createdAt: string;
};

export async function getUsers(): Promise<User[]> {
  const { data } = await api("/users");

  const users = data.users.map((user) => ({
    ...user,
    createdAt: new Date(user.createdAt).toLocaleDateString(),
  }));

  return users;
}

export function useUsers() {
  return useQuery("users", getUsers, {
    staleTime: 5 * 1000, // 5 seconds
  });
}
