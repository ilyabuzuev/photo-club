import { api } from '@/api/API';
import { useAuthStore } from '@/stores/auth.store';
import type { UserDTO } from '@/dto/user.dto';
import type { IUser } from '@/interfaces/IUser';
import type { AxiosError } from 'axios';

const authStore = useAuthStore();

export class AuthService {
  async createAccount(dto: UserDTO) {
    try {
      const response = await api.post<IUser>('/user/create', dto);
      console.log(response);

      if (response.status !== 201) {
        console.log('Ну что-то пошло не так, что я могу еще сказать');
        const err = response as unknown as AxiosError;

        return { err };
      }

      authStore.set({
        id: response.data.id,
        firstname: response.data.firstname,
        lastname: response.data.lastname,
        email: response.data.email,
        accessToken: response.data.accessToken,
        refreshToken: response.data.refreshToken,
      });
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
}
