import { Router } from "express"
import { readdirSync } from "fs"

const PATH_ROUTER = `${__dirname}`
const router = Router()

const cleanFileName = (fileName: string) => {
    const file = fileName.split('.').shift()
    return file
}

// Cargador dinamico de rutas
readdirSync(PATH_ROUTER).filter( (filename) => {
    const cleanName = cleanFileName(filename)

    if (cleanName !== 'index'){
        // Importación dinamica
        import(`./${cleanName}`).then( (moduleRouter) => {
            router.use(`/${cleanName}`, moduleRouter.router)
        })
    }
})

export { router }
