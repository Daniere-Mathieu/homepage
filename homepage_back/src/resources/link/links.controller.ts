import { Router } from 'express'
import { LinksService } from '~/resources/link/links.service'
import { BadRequestException, NotFoundException } from '~/utils/exceptions'
/**
 * Nous créeons un `Router` Express, il nous permet de créer des routes en dehors du fichier `src/index.ts`
 */
const LinksController = Router()
/**
 * Instance de notre service
 */
const service = new LinksService()
/**
 * Trouve tous les animaux
 */
 LinksController.get('/', (req:any, res:any) => {
    service.findAll().then((value => {
        return res
    .status(200)
    .json(value)
    }))
})

/**
 * Trouve un animal en particulier
 */
 LinksController.get('/:id', (req:any, res:any) => {
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
 LinksController.post('/create', (req:any, res:any) => {
  const createdLink = service.create(req.body.name,req.body.link,req.body.category)

  return res
    .status(201)
    .json(createdLink)
})

/**
 * Mise à jour d'un animal
 */
 LinksController.patch('/:id', (req:any, res:any) => {
  const id = Number(req.params.id)

  if (!Number.isInteger(id)) {
    throw new BadRequestException('ID invalide')
  }

  const updatedLink = service.update(req.body.name ,req.body.link ,id,req.body.category)

  return res
    .status(200)
    .json(updatedLink)
})

/**
 * Suppression d'un animal
 */
 LinksController.delete('/:id', (req:any, res:any) => {
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
export { LinksController }