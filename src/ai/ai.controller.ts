import { Controller, Body, Post, Get, Query } from '@nestjs/common';
import { AiService } from './ai.service';
import { GenerateResponseDto } from './dto/generate-response.dto';

@Controller('ai')
export class AiController {
    constructor(public aiService: AiService) {}

    @Get('/states')
    getStateList() {
        return this.aiService.getStateList();
    }

    @Get('/states-abbreviations')
    getStateListWithAbbreviations() {
        return this.aiService.getStateListWithAbbreviations();
    }

    @Get('/users')
    userList(@Query('count') count: string) {
        return this.aiService.userList(count);
    }

    @Get('/kpi-data')
    kpiList() {
        return this.aiService.getKPIData();
    }

    @Post('/generate-response')
    generateResponse(@Body() body:GenerateResponseDto) {
        console.log(`Received input: ${body.input}`);
        // Call the
        return this.aiService.generateResponse(body.input);
    }
}
