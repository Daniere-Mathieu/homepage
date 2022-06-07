import cors from 'cors'
import express from 'express'
const bp = require('body-parser')
//import { config } from '~/config'
import { UsersController } from '~/resources/users/users.controller'
import { ThemesController } from '~/resources/themes/themes.controller'
import { LinksController } from '~/resources/link/links.controller'
import { CategoriesController} from '~/resources/categories/categories.controller'
import { ExceptionsHandler } from '~/middlewares/exceptions.handler'
import { UnknownRoutesHandler } from '~/middlewares/unknownRoutes.handler'

/**
 * On créé une nouvelle "application" express
 */
const app = express()
app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))

/**
 * On dit à Express que l'on souhaite parser le body des requêtes en JSON
 *
 * @example app.post('/', (req) => req.body.prop)
 */
app.use(express.json())

/**
 * On dit à Express que l'on souhaite autoriser tous les noms de domaines
 * à faire des requêtes sur notre API.
 */
app.use(cors())

/**
 * Toutes les routes CRUD pour les animaux seronts préfixées par `/pets`
 */
app.use('/user', UsersController)
app.use('/theme', ThemesController)
app.use('/link', LinksController)
app.use('/category', CategoriesController)

/**
 * Homepage (uniquement necessaire pour cette demo)
 */
app.get('/', (req, res) => res.send('🏠'))

/**
 * Pour toutes les autres routes non définies, on retourne une erreur
 */
app.all('*', UnknownRoutesHandler)

/**
 * Gestion des erreurs
 * /!\ Cela doit être le dernier `app.use`
 */
app.use(ExceptionsHandler)

/**
 * On demande à Express d'ecouter les requêtes sur le port défini dans la config
 */
app.listen(4000, () => console.log('Silence, ça tourne.'))