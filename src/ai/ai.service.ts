import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import OpenAI from 'openai';

@Injectable()
export class AiService {
    client: OpenAI;

    constructor(private readonly configService: ConfigService) {
        this.client = new OpenAI({
            apiKey: this.configService.get<string>('OPENAI_API_KEY'),
        });
    }

    async getStateList() {
        const response = await this.client.responses.create({
            model: process.env.OPENAI_MODEL || 'gpt-4o-mini',
            input: "Give me the list of us states names order alphabeticall. Respond only with a valid json array of strings, nothing else, no markdown formatting, no tripple backticks, just the json array.",
        });

        return response.output_text;
    }

    async getStateListWithAbbreviations() {
        const response = await this.client.responses.create({
            model: process.env.OPENAI_MODEL || 'gpt-4o-mini',
            input: `Provide a list of us states name abbreviations order alphabeticall. 
            Respond only with a valid json array of strings, nothing else, no markdown formatting, no tripple backticks, just the json array.`,
        });

        return response.output_text;
    }

     async userList(count: string = '10') {
        const response = await this.client.responses.create({
            model: process.env.OPENAI_MODEL || 'gpt-4o-mini',
            input: `Create a list of ${count} users with the following properties: id, name, email, profession, location, address, experience, linkedin.
            Make sure the users are from different cultures and backgrounds in the United States.
            Do not repeat the same name, email or id.
            Respond only with a valid json array of objects, nothing else, no markdown formatting, no tripple backticks, just the json array.`,
        });

        return response.output_text;
    }

    async getKPIData() {
        const response = await this.client.responses.create({
            model: process.env.OPENAI_MODEL || 'gpt-4o-mini',
            input: `Create a list of 10 KPIs for a retail business? 
            Each KPI should have the following properties: name, description, ytd, mtd, last_30_days, plan vs actual, variance.
            Respond only with a valid json array of strings, nothing else, no markdown formatting, no tripple backticks, just the json array.`,
        });

        return response.output_text;
    }

    async generateResponse(input: string) {
        const response = await this.client.responses.create({
            model: process.env.OPENAI_MODEL || 'gpt-4o-mini',
            input: input,
        });

        return response.output_text;
    }
}
