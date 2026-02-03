import readline from "readline";

/**
 * Pauses the program so a human can log in in the browser.
 * Resolves when the user presses Enter in the terminal.
 *
 * @param {import("puppeteer").Page} [page] - Optional page (e.g. to show a hint in console)
 * @returns {Promise<void>}
 */
export const waitForManualLogin = (page) => {
	return new Promise((resolve) => {
		const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

		console.log("\n--- Manual login ---");
		console.log("Log in in the browser window, then press Enter here to continue.\n");

		rl.question("Press Enter when you are logged in... ", () => {
			rl.close();
			console.log("Continuing...\n");
			resolve();
		});
	});
};
