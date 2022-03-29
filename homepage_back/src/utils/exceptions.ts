import { ApiException } from '~~/types/exceptions'

class Exception implements ApiException {
    constructor(readonly error: string,readonly status: number) {};
}
/**
 * Création d'une erreur 404
 */
export class NotFoundException extends Exception{
    constructor(error: string) {
        super(error,404);
    }
}
export class BadRequestException extends Exception {
    constructor(error:string){
        super(error,400);
    }
}