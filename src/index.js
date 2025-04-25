import pairProcessing from './pairProcessing.js';
import alphabetSort from './alphabetSort.js';

const addPair = () => {
    const inputPair = process.argv[2];
    pairProcessing(inputPair);
    alphabetSort();
};

addPair();
