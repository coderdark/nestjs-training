import { Module } from '@nestjs/common';
import { ConfigModule } from "@nestjs/config";
import { AiController } from './ai.controller';
import { AiService } from './ai.service';

@Module({
    imports: [ConfigModule.forRoot(
        {
            isGlobal: true,
            envFilePath: '.env',
            expandVariables: true,
        }
    )],
    controllers: [AiController],
    providers: [AiService]
})
export class AiModule { }
