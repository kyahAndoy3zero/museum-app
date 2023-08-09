export const getUserToken = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    return user?.token;
};

export const getUser = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    return user;
};