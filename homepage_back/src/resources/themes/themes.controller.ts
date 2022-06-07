import { Router } from 'express'
import { ThemesService } from '~/resources/themes/themes.service'
import { BadRequestException, NotFoundException } from '~/utils/exceptions'
/**
 * Nous créeons un `Router` Express, il nous permet de créer des routes en dehors du fichier `src/index.ts`
 */
const ThemesController = Router()
/**
 * Instance de notre service
 */
const service = new ThemesService()
/**
 * Trouve tous les animaux
 */
 ThemesController.get('/', (req:any, res:any) => {
    service.findAll().then((value => {
        return res
    .status(200)
    .json(value)
    }))
})

/**
 * Trouve un animal en particulier
 */
 ThemesController.get('/:id', (req:any, res:any) => {
  const id = Number(req.params.id)

  if (!Number.isInteger(id)) {
    throw new BadRequestException('ID non valide')
  }

   service.findOne(id).then(user => {
    if (!user) {
        throw new NotFoundException('Animal introuvable')
      }
    
      return res
        .status(200)
        .json(user)
  } )
})

/**
 * Créé un animal
 */
 ThemesController.post('/create', (req:any, res:any) => {
  const createdTheme = service.create(req.body.name,req.body.user)

  return res
    .status(201)
    .json(createdTheme)
})

/**
 * Mise à jour d'un animal
 */
 ThemesController.patch('/:id', (req:any, res:any) => {
  const id = Number(req.params.id)

  if (!Number.isInteger(id)) {
    throw new BadRequestException('ID invalide')
  }

  const updatedTheme = service.update(req.body.name ,req.body.user ,id)

  return res
    .status(200)
    .json(updatedTheme)
})

/**
 * Suppression d'un animal
 */
 ThemesController.delete('/:id', (req:any, res:any) => {
  const id = Number(req.params.id)

  if (!Number.isInteger(id)) {
    throw new BadRequestException('ID invalide')
  }

  return res
    .status(200)
    .json(service.delete(id))
})

/**
 * On expose notre controller pour l'utiliser dans `src/index.ts`
 */
export { ThemesController }