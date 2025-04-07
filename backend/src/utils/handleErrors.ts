import { z } from "zod"
import NotFound from "../exceptions/ResourceNotFound"
import UserInvalidCredentials from "../exceptions/InvalidCredentials"
import HttpStatus from "../shared/HttpStatus"
import Response from "../types/Response"
import InvalidParams from "../exceptions/ResourceConflict"
import ResourceConflict from "../exceptions/ResourceConflict"

function handleErrors(ErrorInstance:Error | z.ZodError): Response {

    if (ErrorInstance instanceof UserInvalidCredentials) return {
        message: ErrorInstance.message,
        success: false,
        data: null,
        error : null,
        status: HttpStatus.BAD_REQUEST
    }

    if (ErrorInstance instanceof NotFound) return {
        message: ErrorInstance.message,
        success: false,
        data: null,
        error : null,
        status: HttpStatus.NOT_FOUND
    }

    if(ErrorInstance instanceof z.ZodError) return{
        message: "Validation Error",
        success: false,
        data: null,
        error : ErrorInstance.format(),
        status: HttpStatus.BAD_REQUEST
    }


    if(ErrorInstance instanceof InvalidParams) return{
        message: ErrorInstance.message,
        success: false,
        data: null,
        error :null,
        status: HttpStatus.BAD_REQUEST
    }


    if(ErrorInstance instanceof ResourceConflict) return{
        message: ErrorInstance.message,
        success: false,
        data: null,
        error :null,
        status: HttpStatus.BAD_REQUEST
    }

    return {
        message: ErrorInstance.message,
        success: false,
        data: null,
        error : null,
        status: HttpStatus.INTERNAL_SERVER_ERROR
    }


}

export default handleErrors;