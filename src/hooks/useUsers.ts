import { useQuery } from "react-query";
import { api } from "~services/api";

type User = {
  id: string;
  name: string;
  email: string;
  createdAt: string;
};

type GetUsersResponse = {
  totalCounts: number;
  users: User[];
};

export async function getUsers(page: number): Promise<GetUsersResponse> {
  const { data, headers } = await api.get("/users", {
    params: {
      page,
    },
  });

  const totalCounts = Number(headers["x-total-count"]);
  const users: User[] = data.users.map((user) => ({
    ...user,
    createdAt: new Date(user.createdAt).toLocaleDateString(),
  }));

  return {
    users,
    totalCounts,
  };
}

export function useUsers(page: number) {
  return useQuery(["users", page], () => getUsers(page), {
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
}
