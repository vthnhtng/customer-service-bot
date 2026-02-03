import puppeteer from "puppeteer-extra";
import StealthPlugin from "puppeteer-extra-plugin-stealth";

puppeteer.use(StealthPlugin());

export const setup = async () => {
	const browser = await puppeteer.launch({
		headless: false,
		args: [
			"--no-first-run",
			"--no-default-browser-check"
		]
	});

	const page = await browser.newPage();
	return { browser, page };
};
