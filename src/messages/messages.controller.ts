import { Controller, Get, Post } from '@nestjs/common';

@Controller('messages')
export class MessagesController {
    @Get()
    listMessages() {
        return 'List of messages';
     }

    @Post()
    createMessage() { }

    @Get('/:id')
    getMessage() { }
}
