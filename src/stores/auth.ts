import { defineStore } from 'pinia';
import { router } from '@/router';
import { fetchWrapper } from '@/utils/helpers/fetch-wrapper';

const baseUrl = `https://localhost:5173/users`;

export const useAuthStore = defineStore({
  id: 'auth',
  state: () => ({
    user: JSON.parse(localStorage.getItem('user')),
    returnUrl: null
  }),



  actions: {
    async login(username: string, password: string ) {
      const user = await fetchWrapper.post(`${baseUrl}/authenticate`, { username, password  });

      if (user) {
        this.user = user;
        localStorage.setItem('user', JSON.stringify(user));

        switch (user.role) {
          case 'admin':
            router.push('/admin/dashboard');
            break;
          case 'agent':
            router.push('/agent/dashboard');
            break;
          case 'agency':
            router.push('/agency/dashboard');
            break;
          default:
            router.push('/login'); 
            break;
        }
      } else {
      }

    },
    logout() {
      this.user = null;
      localStorage.removeItem('user');
      router.push('/login');
    }
  }

});
