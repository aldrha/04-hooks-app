export interface ScrambleWordState {
    currentWord: string;
    errorCounter: number;
    guess: string;
    isGameOver: boolean;
    maxAllowErrors: number;
    maxSkips: number;
    points: number;
    scrambledWord: string;
    skipCounter: number;
    words: string[];
    totalWords: number;
}


const GAME_WORDS = [
    'REACT',
    'JAVASCRIPT',
    'TYPESCRIPT',
    'HTML',
    'ANGULAR',
    'SOLID',
    'NODE',
    'VUEJS',
    'SVELTE',
    'EXPRESS',
    'MONGODB',
    'POSTGRES',
    'DOCKER',
    'KUBERNETES',
    'WEBPACK',
    'VITE',
    'TAILWIND',
];



// Esta función mezcla el arreglo para que siempre sea aleatorio
const shuffleArray = (array: string[]) => {
    return array.sort(() => Math.random() - 0.5);
};

// Esta función mezcla las letras de la palabra
const scrambleWord = (word: string = '') => {
    return word
        .split('')
        .sort(() => Math.random() - 0.5)
        .join('');
};

export const getInitialState = (): ScrambleWordState => {
    const shuffleWords = shuffleArray([...GAME_WORDS]);
    
    return{
        currentWord:  shuffleWords[0],
        errorCounter: 0,
        guess: '',
        isGameOver: false,
        maxAllowErrors: 3,
        maxSkips: 3,
        points: 0,
        scrambledWord: shuffleWords[0],
        skipCounter: 0,
        words: shuffleWords,
        totalWords: shuffleWords.length
    }
}

export type ScrambleWordsActions = 
{ type: 'NO_TENGO_NI_IDEA_DE_QUE_ACCION'}
| { type: 'NO_TENGO_NI_IDEA_DE_QUE_ACCION2'}
| { type: 'NO_TENGO_NI_IDEA_DE_QUE_ACCION3'};

export const scrambleWordsReducer = (state: ScrambleWordState, action: ScrambleWordsActions) => {

    switch(action.type){


        default:
            return state;
    }
}