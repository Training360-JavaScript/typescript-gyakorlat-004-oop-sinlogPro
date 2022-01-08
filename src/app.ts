import { HumanHero } from './hero';
import { TransformerHero } from './transformer';
// Importáld be a HumanHero és TransformerHero osztályokat.


/**
 * Állítsd be helyesen a változót!
 * Neve: humans
 * Típusa: HumanHero példányok tömbje.
 * Hozz létre benne 3 HumanHero példányt, szabadon választott adatokkal.
 * @var {HumanHero[]} humans
 */
export const humans: HumanHero[] = [
    {
        id: 1,
        name: "hero1",
        sex: "female",
        age: 24,
        health: 41,
        photo: './img/01.png'
    },
    {
        id: 2,
        name: "hero2",
        sex: "female",
        age: 21,
        health: 52,
        photo: './img/02.png'
    },
    {
        id: 3,
        name: "hero3",
        sex: "male",
        age: 32,
        health: 74,
        photo: './img/03.png'
    }

];

/**
 * Állítsd be helyesen a változót!
 * Neve: transformers
 * Típusa: TransformerHero példányok tömbje.
 * Hozz létre benne 3 TransformerHero példányt, szabadon választott adatokkal.
 * @var {TransformerHero[]} transformers
 */
export const transformers: TransformerHero[] = [
    {
        id: 1,
        name: 'hero1',
        wings: 0,
        wheels: 4,
        clan: 'clan1',
        photo: './img/01.png'
    },
    {
        id: 2,
        name: 'hero2',
        wings: 2,
        wheels: 4,
        clan: 'clan2',
        photo: './img/02.png'
    },
    {
        id: 3,
        name: 'hero3',
        wings: 0,
        wheels: 0,
        clan: 'clan3',
        photo: './img/03.png'
    }
];
