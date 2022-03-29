import type { User } from '~~/types/users'
import { NotFoundException } from '~/utils/exceptions'

export class PetsService {
  /**
   * On copie localement les animaux pour pouvoir insérer, supprimer etc
   */
    users: User[]
  /**
   * Trouve tous les animaux
   */
  findAll(): User[] | false {
  }

  /**
   * Trouve un animal en particulier
   * @param id - ID unique de l'animal
   */
  findOne(id: number): Pet | undefined {
  }

  /**
   * Met à jour un animal en particulier
   *
   * /!\ Idéalement, il faudrait vérifier le contenu de la requête avant de le sauvegarder.
   *
   * @param petData - Un objet correspondant à un animal, il ne contient pas forcément tout un animal. Attention, on ne prend pas l'id avec.
   * @param id - ID unique de l'animal
   */
  update(petData: Partial<Pet>, id: number): Pet | undefined {
  }

  /**
   * Créé un animal
   *
   * /!\ Idéalement, il faudrait vérifier le contenu de la requête avant de le sauvegarder.
   *
   * @param petData - Un objet correspondant à un animal. Attention, on ne prend pas l'id avec.
   */
  create(petData: Omit<Pet, 'id'>): Pet {
  }

  /**
   * Suppression d'un animal
   */
  delete(id: number) {
  }
}
