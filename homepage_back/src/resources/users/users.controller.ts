import { Router } from "express";
import { UsersService } from "~/resources/users/users.service";
import { BadRequestException, NotFoundException } from "~/utils/exceptions";
/**
 * Nous créeons un `Router` Express, il nous permet de créer des routes en dehors du fichier `src/index.ts`
 */
const UsersController = Router();
/**
 * Instance de notre service
 */
const service = new UsersService();

/**
 * Trouve tous les animaux
 */
UsersController.get("/", (req: any, res: any) => {
  service.findAll().then((value) => {
    return res.status(200).json(value);
  });
});

/**
 * Trouve un animal en particulier
 */
UsersController.get("/:id", (req: any, res: any) => {
  const id = Number(req.params.id);

  if (!Number.isInteger(id)) {
    throw new BadRequestException("ID non valide");
  }

  service.findOne(id).then((user) => {
    if (!user) {
      throw new NotFoundException("Animal introuvable");
    }

    return res.status(200).json(user);
  });
});

/**
 * Créé un utilisateur
 */
UsersController.post("/create", (req: any, res: any) => {
  service.findOneByName(req.body.name).then((rows) => {
    if (rows[0] !== undefined) {
      return res.status(409).json({error: "username already taken"})
    }
    service.create(req.body.name).then((createdUser) => {
      return res.status(201).json({ sucessful: "Your user as been create" });
    });
  });
});

/**
 * Mise à jour d'un utilisateur
 */
UsersController.patch("/:id", (req: any, res: any) => {
  const id = Number(req.params.id);
  if (!Number.isInteger(id)) {
    console.log(typeof id)
    return res.status(409).json({error: "invalid ID"})

  }
  service.findOneByName(req.body.name).then((rows) => {
    console.log(rows)
    if (rows[0] !== undefined) {
      return res.status(409).json({error: "username already taken"})
    }
    service.update(req.body.name, id).then((updatedUser)=> {
      return res.status(200).json({sucessful:'Your user has been modified'});
    })
  });

});

/**
 * Suppression d'un utilisateur
 */
UsersController.delete("/:id", (req: any, res: any) => {
  const id = Number(req.params.id);

  if (!Number.isInteger(id)) {
    throw new BadRequestException("ID invalide");
  }
  service.delete(id).then(() => {
    return res.status(200).json({sucessful:'Your user has been deleted'});
  })
});

/**
 * On expose notre controller pour l'utiliser dans `src/index.ts`
 */
export { UsersController };
