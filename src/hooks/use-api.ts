import { env } from '@/configs/env';
import { useAuth } from '@clerk/clerk-react';
import axios from 'axios';

export const useApi = () => {
  const { getToken } = useAuth();

  const api = axios.create({
    baseURL: env.API_URL,
  });

  api.interceptors.request.use(async (config) => {
    try {
      const token = await getToken({ template: 'hsk' });

      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    } catch (error) {
      console.warn('Cannot get token from Clerk', error);
    }
    return config;
  });

  api.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response?.status === 401) {
        console.error('Token has expired or is invalid.');
      }
      return Promise.reject(error);
    },
  );

  return { api };
};
