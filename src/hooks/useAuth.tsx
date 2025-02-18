import {
	ApiError,
	ApiResponse,
	LoginCredentials,
	RegisterCredentials,
	UpdateUser,
	User,
} from "@/@types/api";
import api from "@/api/config";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";

// Função auxiliar para lidar com erros da API
const handleApiError = (error: AxiosError): ApiResponse => {
	const apiError: ApiError = {
		code: error.response?.status || 500,
		details: [error.message],
	};
	return {
		status: "error",
		message: error.message,
		data: null,
		error: apiError,
		token: undefined,
	};
};

export function useAuth() {
	const queryClient = useQueryClient();

	// Mutation para login
	const loginMutation = useMutation<
		ApiResponse<User>,
		AxiosError,
		LoginCredentials
	>({
		mutationFn: (credentials) =>
			api
				.post<ApiResponse<User>>("auth/login", credentials)
				.then((res) => res.data),
		onSuccess: (data) => {
			if (data.token !== undefined && data.data !== null) {
				localStorage.setItem("token", data.token);
				localStorage.setItem("userId", data.data.id);
				queryClient.setQueryData(["user", data.data.id], data);
			}
		},
		onError: (error) => handleApiError(error),
	});

	// Mutation para registro
	const registerMutation = useMutation<
		ApiResponse<User>,
		AxiosError,
		RegisterCredentials
	>({
		mutationFn: (credentials) =>
			api.post<ApiResponse<User>>("user/register", credentials).then(),
		onError: (error) => handleApiError(error),
	});

	// Mutation para logout
	const logout = () => {
		localStorage.removeItem("token");
		localStorage.removeItem("userId");
		queryClient.clear();
	};

	// Mutation para atualização de usuário
	const updateUserMutation = useMutation<
		ApiResponse<User>,
		AxiosError,
		{ userId: string; userData: UpdateUser }
	>({
		mutationFn: ({ userId, userData }) =>
			api
				.put<ApiResponse<User>>(`/users/${userId}`, userData)
				.then((res) => res.data),
		onSuccess: (data) => {
			queryClient.setQueryData(["user", data.data?.id], data);
			queryClient.invalidateQueries({ queryKey: ["users"] });
		},
		onError: (error) => handleApiError(error),
	});

	// Mutation para exclusão de usuário
	const deleteUserMutation = useMutation<ApiResponse, AxiosError, string>({
		mutationFn: (userId) => api.delete<ApiResponse>(`/users/${userId}`).then(),
		onError: (error) => handleApiError(error),
	});

	return {
		login: loginMutation.mutateAsync,
		register: registerMutation.mutateAsync,
		logout,
		updateUser: updateUserMutation.mutateAsync,
		deleteUser: deleteUserMutation.mutateAsync,
		data:
			loginMutation.data ||
			registerMutation.data ||
			updateUserMutation.data ||
			deleteUserMutation.data,
		isLoading:
			loginMutation.isPending ||
			registerMutation.isPending ||
			updateUserMutation.isPending ||
			deleteUserMutation.isPending,
	};
}
