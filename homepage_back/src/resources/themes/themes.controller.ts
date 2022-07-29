import { Router } from 'express'
import { ThemesService } from '~/resources/themes/themes.service'
import { BadRequestException, NotFoundException } from '~/utils/exceptions'

const ThemesController = Router()

const service = new ThemesService()

 ThemesController.get('/', (req:any, res:any) => {
    service.findAll().then((value => {
        return res
    .status(200)
    .json(value)
    }))
})


 ThemesController.get('/:id', (req:any, res:any) => {
  const themeID = Number(req.params.id)

  if (!Number.isInteger(themeID)) {
    throw new BadRequestException('ID non valide')
  }

   service.findOne(themeID).then(theme => {
    if (!theme) {
        throw new NotFoundException('Theme unfindable')
      }
    
      return res
        .status(200)
        .json(theme)
  } )
})


 ThemesController.post('/create', (req:any, res:any) => {
  if(typeof(req.body.name) !== "string" || req.body.user !== "number"){
    throw new BadRequestException('invalid type parameters')
  }
  let name = req.body.name
  let userID = req.body.user
  service.findOne(userID).then(theme => {
    if (!theme) {
        throw new NotFoundException('Theme unfindable')
      }
  } )
  const createdTheme = service.create(name,userID)

  return res
    .status(201)
    .json(createdTheme)
})


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

 ThemesController.delete('/:id', (req:any, res:any) => {
  const id = Number(req.params.id)

  if (!Number.isInteger(id)) {
    throw new BadRequestException('ID invalide')
  }

  return res
    .status(200)
    .json(service.delete(id))
})


export { ThemesController }