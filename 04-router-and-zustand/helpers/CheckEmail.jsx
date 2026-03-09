export const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export function IsValidEmail(email){

    return emailRegex.test(email)
}