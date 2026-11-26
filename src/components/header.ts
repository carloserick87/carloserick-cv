import chalk from 'chalk';
import figlet from 'figlet';
import gradient from 'gradient-string';
import { resume }from "../data/resume"

export function Header(): void {
    console.clear();

    const title = figlet.textSync( resume.profile.name, {
        font: 'Standard',
        horizontalLayout: 'default',
    });

    const colorGradient = gradient([
            '#FFD600',
            '#FFB000',
            '#F28C38',
            '#E87965',
    ]);

    console.log(colorGradient(title));

    console.log('\t', chalk.bold.green( resume.profile.headline,'·', resume.profile.location));

    console.log(chalk.hex('#444444') (' ────────────────────────────────────────────────────────'));

    console.log();
};