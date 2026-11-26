import { select } from '@inquirer/prompts';

export type MenuOptionValue =
    | 'about'
    | 'education'
    | 'experience'
    | 'projects'
    | 'skills'
    | 'contact'
    | 'exit';

export type MenuOptions = {
    name: string;
    value: MenuOptionValue;
};

export const menuOptions: MenuOptions[] = [
    { name: 'About me', value: 'about' },
    { name: 'Education', value: 'education' },
    { name: 'Experience', value: 'experience' },
    { name: 'Projects', value: 'projects' },
    { name: 'Skills', value: 'skills' },
    { name: 'Contact', value: 'contact' },
    { name: 'Exit', value: 'exit' },
];

export async function showMenu(
    availableOptions: MenuOptionValue[],
): Promise <MenuOptionValue> {

    return select<MenuOptionValue>(
        {
        message: 'EXPLORE MY PROFILE',
        choices: menuOptions.filter(option =>
        availableOptions.includes(option.value)
    ),
},
        {
            clearPromptOnDone: true,
        }
    );
}