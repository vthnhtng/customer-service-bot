import puppeteer from "puppeteer";

export const setup = async () => {
	const browser = await puppeteer.launch({
		headless: false
	});

	const page = await browser.newPage();

	return { browser, page };
};

export const close = async (browser) => {
	await browser.close();
};
