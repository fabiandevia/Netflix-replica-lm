export const main = '/';
export const landing = '/landing';
export const login = '/login';
export const profileSelection = '/profile-selection';
export const profileUpdate = '/profile-update';

export const catalog = '/catalog';

export const movie = (id = ':id') => `${catalog}/${id}`;
