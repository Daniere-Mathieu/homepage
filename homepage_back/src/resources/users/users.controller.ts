import { Router } from 'express'
import { UsersService } from '~/resources/users/users.service'
import { BadRequestException, NotFoundException } from '~/utils/exceptions'
/**
 * Nous créeons un `Router` Express, il nous permet de créer des routes en dehors du fichier `src/index.ts`
 */
const UsersController = Router()
/**
 * Instance de notre service
 */
const service = new UsersService()

/**
 * Trouve tous les animaux
 */
 UsersController.get('/', (req:any, res:any) => {
    service.findAll().then((value => {
        return res
    .status(200)
    .json(value)
    }))
})

/**
 * Trouve un animal en particulier
 */
 UsersController.get('/:id', (req:any, res:any) => {
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
 UsersController.post('/create', (req:any, res:any) => {
  const createdUser = service.create(req.body.name)

  return res
    .status(201)
    .json(createdUser)
})

/**
 * Mise à jour d'un animal
 */
 UsersController.patch('/:id', (req:any, res:any) => {
  const id = Number(req.params.id)

  if (!Number.isInteger(id)) {
    throw new BadRequestException('ID invalide')
  }

  const updatedUser = service.update(req.body.name, id)

  return res
    .status(200)
    .json(updatedUser)
})

/**
 * Suppression d'un animal
 */
 UsersController.delete('/:id', (req:any, res:any) => {
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
export { UsersController }