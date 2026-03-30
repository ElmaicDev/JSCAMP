export const numeroRegex = /\b\d{10}\b/;
export function IsValidNumero(numero){

    return numeroRegex.test(numero)
}