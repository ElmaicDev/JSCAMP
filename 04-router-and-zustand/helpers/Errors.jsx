export function getErrorMessage(error){

    if(!navigator.onLine)
        return "No tienes conexión a internet. Revisa tu red e inténtalo de nuevo"

    if(!error?.response)
        return "No fue posible conectarse con el servidor. Intenta nuevamente"

     // 3. Errores HTTP específicos
  switch (error.status) {
    case 400:
      return "La solicitud no es válida. Verifica la información enviada.";
    case 401:
      return "No estás autorizado. Inicia sesión nuevamente.";
    case 403:
      return "No tienes permisos para realizar esta acción.";
    case 404:
      return "El recurso solicitado no fue encontrado.";
    case 500:
      return "Ocurrió un error en el servidor. Intenta más tarde.";
    default:
      return "Ocurrió un error inesperado. Intenta nuevamente.";
}
};