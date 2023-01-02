import data from '../dummy.json';
import type { PageLoad } from './$types';

export const load: PageLoad = function () {
	return new Promise((res) => {
		setTimeout(() => {
			res({ data });
		}, 500);
	});
};
