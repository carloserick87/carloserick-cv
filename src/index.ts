#!/usr/bin/env node

import { Header } from './components/header.js';
import { menuOptions, showMenu, type MenuOptionValue } from './menu/menu';
import { menuSection } from './components/sections.js';

const GOODBYE = '\nThank you for visiting my profile!';

async function main(): Promise<void> {

    Header();

    let availableOptions: MenuOptionValue[] = menuOptions.map(o => o.value);

    while (availableOptions.some(item => item !== 'exit')) {

        const option = await showMenu(availableOptions);

        if (option === 'exit') break;

        menuSection(option);
        availableOptions = availableOptions.filter(item => item !== option);
    }

    console.log(GOODBYE);
}

main().catch((error: unknown) => {
    if (error instanceof Error && error.name === 'ExitPromptError') {
        console.log(GOODBYE);
        process.exit(0);
    }
    throw error;
});
