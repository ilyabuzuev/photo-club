import { defineStore } from 'pinia';
import { ref } from 'vue';
// import { AuthService } from '@/services/auth-service/AuthService';
import type { IUser } from '@/interfaces/IUser';
// import type { UserDTO } from '@/dto/user.dto';

// const authService = new AuthService();

export const useAuthStore = defineStore('auth', () => {
  const user = ref<IUser>({
    id: '',
    firstname: '',
    lastname: '',
    email: '',
    accessToken: '',
    refreshToken: '',
  });

  function set(payload: IUser) {
    user.value = payload;
  }

  // async function register(dto: UserDTO) {
  //   const response = await authService.createAccount(dto);

  //   if (response) {

  //   }
  // }

  return { user, set };
});
