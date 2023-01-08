import { error } from '@sveltejs/kit';

export const actions = {
  default: async () => {
    throw error(500, { message: 'Failed' });
  }
}
