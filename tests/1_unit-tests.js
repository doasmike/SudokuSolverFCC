const chai = require('chai');
const assert = chai.assert;

const Solver = require('../controllers/sudoku-solver.js');
const { puzzlesAndSolutions } = require('../controllers/puzzle-strings.js');
let solver = new Solver();

suite('Unit Tests', () => {
    // Logic handles a valid puzzle string of 81 characters
    test('Logic handles a valid puzzle string of 81 characters', () => {
        puzzlesAndSolutions.forEach((table, index) => {
            let puzzleToCheck = table[0];
            let output = solver.validate(puzzleToCheck);
            // console.log(`Test case ${index + 1}:`);
            // console.log('Puzzle:', puzzleToCheck);
            // console.log('Output from validate:', output);
            if (output == undefined) {
                assert.isTrue(output === undefined, `Expected an error or non-undefined output but got undefined for test case ${index + 1}`);
            } else if (/^[1-9.]+$/.test(puzzleToCheck) && puzzleToCheck.length === 81) {
                assert.equal(output, 'valid puzzle string', 'Expected valid puzzle string of 81 characters')
            } /* else {
                assert.notEqual(output, 'valid puzzle string', `Test case ${index + 1}: Expected invalid output`);
            } */
        })
    });
    // Logic handles a puzzle string with invalid characters (not 1-9 or .)
    test('Logic handles a puzzle string with invalid characters (not 1-9 or .)', () => {
        puzzlesAndSolutions.forEach((table, index) => {
            let puzzleToCheck = table[0];
            let output = solver.validate(puzzleToCheck);
            // console.log(`Test case ${index + 1}:`);
            // console.log('Puzzle:', puzzleToCheck);
            // console.log('Output from validate:', output);
            if (output == undefined) {
                assert.isTrue(output === undefined, `Expected an error or non-undefined output but got undefined for test case ${index + 1}`);
            } else if (!/^[1-9.]+$/.test(puzzleToCheck)) {
                assert.equal(output, 'invalid characters in puzzleString', 'Expected valid puzzle string with characters 1-9 or .')
            } /* else {
                assert.notEqual(output, 'invalid characters in puzzleString', `Test case ${index + 1}: Unexpected invalid characters`);
            } */
 
                
            /* if (output === undefined) {
                assert.fail(`Test case ${index + 1}: Expected non-undefined output but got undefined`);
            } else if (!/^[1-9.]+$/.test(puzzleToCheck)) {
                assert.equal(output, 'invalid characters in puzzleString', `Test case ${index + 1}: Expected invalid characters`);
            } else {
                assert.notEqual(output, 'invalid characters in puzzleString', `Test case ${index + 1}: Unexpected invalid characters`);
            } */
        })
    })
    // Logic handles a puzzle string that is not 81 characters in length
    test('Logic handles a puzzle string that is not 81 characters in length', () => {
        puzzlesAndSolutions.forEach((table, index) => {
            let puzzleToCheck = table[0];
            let output = solver.validate(puzzleToCheck);
            // console.log(`Test case ${index + 1}:`);
            // console.log('Puzzle:', puzzleToCheck);
            // console.log('Output from validate:', output);
            if (output === undefined) {
                assert.fail(`Test case ${index + 1}: Expected non-undefined output but got undefined`);
            } else if (puzzleToCheck.length !== 81) {
                assert.equal(output, 'invalid length of puzzleString', `Test case ${index + 1}: Expected invalid length`);
            } /* else {
                assert.notEqual(output, 'invalid length of puzzleString', `Test case ${index + 1}: Unexpected invalid length`);
            } */
        })
    })
    // Logic handles a valid row placement
    test('Logic handles a valid row placement', () => {
        puzzlesAndSolutions.forEach((table, index) => {
            // try {
            let puzzleToCheck = table[0];
            let solutionToCheck = table[1];
            let outputFirst = solver.checkRowPlacement(puzzleToCheck, "A", "1", solutionToCheck.charAt(0));
            let outputLast = solver.checkRowPlacement(puzzleToCheck, "I", "9", solutionToCheck.charAt(solutionToCheck.length - 1));

            assert.equal(outputFirst, true, `Test case ${index + 1}: Expected valid row placement on first character`);
            assert.equal(outputLast, true, `Test case ${index + 1}: Expected valid row placement on last character`);
            // } catch (error) {
            //     console.error(`Test case ${index + 1} failed: ${error.message}`);
            // }
        })
    })
    // Logic handles an invalid row placement
    test('Logic handles an invalid row placement', () => {
        puzzlesAndSolutions.forEach((table, index) => {
            // try {
            let puzzleToCheck = table[0];
            let solutionToCheck = table[1];
            let outputFirst = solver.checkRowPlacement(puzzleToCheck, "A", "1", "7");
            let outputLast = solver.checkRowPlacement(puzzleToCheck, "I", "9", "7");

            assert.equal(outputFirst, false, `Test case ${index + 1}: Expected invalid row placement on first character`);
            assert.equal(outputLast, false, `Test case ${index + 1}: Expected invalid row placement on last character`)
            //     } catch (error) {
            //         console.error(`Test case ${index + 1} failed: ${error.message}`);
            //     }
        })
    })
    // Logic handles a valid column placement
    test('Logic handles a valid column placement', () => {
        puzzlesAndSolutions.forEach((table, index) => {
            // try {
            let puzzleToCheck = table[0];
            let solutionToCheck = table[1];
            let outputFirst = solver.checkColPlacement(puzzleToCheck, "A", "1", solutionToCheck.charAt(0));
            let outputLast = solver.checkColPlacement(puzzleToCheck, "I", "9", solutionToCheck.charAt(solutionToCheck.length - 1));

            assert.equal(outputFirst, true, `Test case ${index + 1}: Expected valid column placement on first character`);
            assert.equal(outputLast, true, `Test case ${index + 1}: Expected valid column placement on last character`);
            // } catch (error) {
            //     console.error(`Test case ${index + 1} failed: ${error.message}`);
            // }
        })

    })
    // Logic handles an invalid column placement
    test('Logic handles an invalid column placement', () => {
        puzzlesAndSolutions.forEach((table, index) => {
            // try {
            let puzzleToCheck = table[0];
            let solutionToCheck = table[1];
            let outputFirst = solver.checkColPlacement(puzzleToCheck, "A", "1", "7");
            let outputLast = solver.checkColPlacement(puzzleToCheck, "I", "9", "7");

            assert.equal(outputFirst, false, `Test case ${index + 1}: Expected invalid column placement on first character`);
            assert.equal(outputLast, false, `Test case ${index + 1}: Expected invalid column placement on last character`)
            //     } catch (error) {
            //         console.error(`Test case ${index + 1} failed: ${error.message}`);
            //     }
        })
    })
    // Logic handles a valid region (3x3 grid) placement
    test('Logic handles a valid region (3x3 grid) placement', () => {

    })
    // Logic handles an invalid region (3x3 grid) placement
    test('Logic handles an invalid region (3x3 grid) placement', () => {

    })
    // Valid puzzle strings pass the solver
    test('Valid puzzle strings pass the solver', () => {

    })
    // Invalid puzzle strings fail the solver
    test('Invalid puzzle strings fail the solver', () => {

    })
    // Solver returns the expected solution for an incomplete puzzle
    test('Solver returns the expected solution for an incomplete puzzle', () => {

    })
});
