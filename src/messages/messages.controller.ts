import { Controller, Get, Post, Body, Param, NotFoundException } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
    constructor(public messageService: MessagesService) {
    }

    @Get()
    listMessages() {
        return this.messageService.findAll();
    }

    @Post()
    // CreateMessageDto is a class that we created to validate the data that we are sending to the server.
    //  We can use it to validate the data before we save it to the database.
    createMessage(@Body() body: CreateMessageDto) {
        return this.messageService.create(body.content);
    }

    @Get('/:id')
    async getMessage(@Param('id') id: string) {
        const message = await this.messageService.findOne(id);

        if (!message) {
            throw new NotFoundException('Message not found');
        }

        return message;
    }
}
