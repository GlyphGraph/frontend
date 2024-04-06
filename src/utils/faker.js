import { faker } from "@faker-js/faker";

export function getRandomWords () {
    const words = faker.word.words(16).split(" ")
    const shuffledWords = words.sort(() => Math.random() - 0.5);
    console.log(shuffledWords)
    const matrix  = []
    for (let i = 0; i < 16; i += 2) {
        matrix.push([
            shuffledWords[i], 
            shuffledWords[i + 1], 
            shuffledWords[i + 8], 
            shuffledWords[i + 9]
        ]);
    }
    return matrix.slice(0, 4)
}