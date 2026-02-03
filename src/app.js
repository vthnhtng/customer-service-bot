import { setup } from "./browser/init.js";
import { waitForManualLogin } from "./browser/manual-login.js";
import CommandParser from "./cli/command-parser.js";

const main = async () => {
	try {
		const url = CommandParser.getUrl();

		const { browser, page } = await setup();

		await page.goto(url);

		await waitForManualLogin(page);

		// TODO: Continue with your logic after login...

		await browser.close();
	} catch (error) {
		console.error("An error occurred while running the application: " + error);
		process.exit(1);
	}
};

main();
