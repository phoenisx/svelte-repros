import data from '../dummy.json';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = function () {
	return new Promise((res) => {
		setTimeout(() => {
			res({ data });
		}, 500);
	});
};
