import { HttpException, HttpStatus } from "@nestjs/common";
export class ValidationException extends HttpException {
    messages: string | Record<string, any>;
    constructor(responce: string | Record<string, any>) {
        super(responce, HttpStatus.BAD_REQUEST);
        this.messages = responce;
    }
}