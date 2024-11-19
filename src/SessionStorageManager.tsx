export const saveJWTToken = (token: string): void => {
    try {
        sessionStorage.setItem('jwtToken', token);
    } catch (error) {
        console.error('Error saving jwt token:', error)
    }
};

export const getToken = (): string | null => {
    try {
        return sessionStorage.getItem('jwtToken');
    } catch (error) {
        console.error('Error retrieving token:', error);
        return null;
    }
};

export const removeToken = (): void => {
    sessionStorage.removeItem('jwtToken');
};