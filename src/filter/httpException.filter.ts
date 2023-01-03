import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
} from '@nestjs/common';
import { Response } from 'express';
@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const status = exception.getStatus();
    const message = exception.message;

    const exceptionResponse: string | object = exception.getResponse();
    let validatorMessage: any = exceptionResponse;
    if (typeof validatorMessage === 'object') {
      validatorMessage = validatorMessage.message;
    }

    response.status(status).json({
      code: status,
      message: validatorMessage || message,
    });
  }
}
