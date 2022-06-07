import { Router } from 'express'
import { CategoriesService } from '~/resources/categories/categories.service'
import { BadRequestException, NotFoundException } from '~/utils/exceptions'
/**
 * Nous créeons un `Router` Express, il nous permet de créer des routes en dehors du fichier `src/index.ts`
 */
const CategoriesController = Router()
/**
 * Instance de notre service
 */
const service = new CategoriesService()
/**
 * Trouve tous les animaux
 */
 CategoriesController.get('/', (req:any, res:any) => {
    service.findAll().then((value => {
        return res
    .status(200)
    .json(value)
    }))
})

/**
 * Trouve un animal en particulier
 */
 CategoriesController.get('/:id', (req:any, res:any) => {
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
 CategoriesController.post('/create', (req:any, res:any) => {
     console.log(req.body)
  const createdCategory = service.create(req.body.name,req.body.theme)

  return res
    .status(201)
    .json(createdCategory)
})

/**
 * Mise à jour d'un animal
 */
 CategoriesController.patch('/:id', (req:any, res:any) => {
  const id = Number(req.params.id)

  if (!Number.isInteger(id)) {
    throw new BadRequestException('ID invalide')
  }

  const updatedCategory = service.update(req.body.name,id,req.body.theme)

  return res
    .status(200)
    .json(updatedCategory)
})

/**
 * Suppression d'un animal
 */
 CategoriesController.delete('/:id', (req:any, res:any) => {
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
export { CategoriesController }