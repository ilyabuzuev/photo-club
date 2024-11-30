import { BASE_SERVER_URL } from '@/app.constants';
import type { IAPI } from './interfaces/IAPI';

export class API implements IAPI {
  // static URL = {
  //   GET_ALL_USERS: `${BASE_SERVER_URL}/user/all`,
  // };

  async get<T>(endpoint: string): Promise<T> {
    const URL = `${BASE_SERVER_URL}/${endpoint}`;

    const res = await fetch(URL, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });

    return res.json();
  }
}
