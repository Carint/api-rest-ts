// Ayudaria en un futuro para configurar en esta sección un manejador de errores. O algun tipo de logs a configurar para ir registrando en un archivo.
import { Response } from "express";

const handleHttp = (res: Response, error: string) => {
    res.status(500);
    res.send({ error });
};

export { handleHttp };
