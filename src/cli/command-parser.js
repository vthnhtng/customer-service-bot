import { Command } from "commander";

class CommandParser {
    constructor() {
        this.program = new Command();

        this.program.option('-u, --url <url>', 'The URL of the website to automate');

        this.program.parse(process.argv);
    }

    getUrl() {
        return this.program.opts().url;
    }
}

export default new CommandParser();