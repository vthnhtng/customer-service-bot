import { setup, close } from "./browser/setup.js";
import CommandParser from "./cli/command-parser.js";

const main = async () => {
	try {
		const url = CommandParser.getUrl();

		const { browser, page } = await setup();

		await page.goto(url);

		setTimeout(async () => {
			await close(browser);
		}, 5000);
	} catch (error) {
		console.error("An error occurred while running the application, automatically stop process...");
		process.exit(1);
	}
};

main();