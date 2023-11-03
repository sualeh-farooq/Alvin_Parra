import { defineStore } from 'pinia';
import { router } from '@/router';
import { fetchWrapper } from '@/utils/helpers/fetch-wrapper';

const baseUrl = `https://localhost:5173/users`;

export const useAuthStore = defineStore({
  id: 'auth',
  state: () => ({
    // initialize state from local storage to enable user to stay logged in
    // @ts-ignore
    user: JSON.parse(localStorage.getItem('user')),
    returnUrl: null
  }),
  // actions: {
  //   async login(username: string, password: string) {
  //     const user = await fetchWrapper.post(`${baseUrl}/authenticate`, { username, password });
  //
  //     // update pinia state
  //     this.user = user;
  //     // store user details and jwt in local storage to keep user logged in between page refreshes
  //     localStorage.setItem('user', JSON.stringify(user));
  //     // redirect to previous url or default to home page
  //     router.push(this.returnUrl || '/admin/dashboard');
  //   },
  //   logout() {
  //     this.user = null;
  //     localStorage.removeItem('user');
  //     router.push('/login');
  //   }
  // }



  actions: {
    async login(username: string, password: string ) {
      const user = await fetchWrapper.post(`${baseUrl}/authenticate`, { username, password  });

      if (user) {
        // Update pinia state
        this.user = user;
        // Store user details and role in local storage to keep the user logged in between page refreshes
        localStorage.setItem('user', JSON.stringify(user));

        // Redirect based on the user's role
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
            router.push('/login'); // Default redirection if role is unknown
            break;
        }
      } else {
        // Handle authentication failure
      }

    },
    logout() {
      this.user = null;
      localStorage.removeItem('user');
      router.push('/login');
    }
    // ...
  }

});
