import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
/*
The TwoDice component will simulate a game where you roll two dice in an attempt to get matching values. However, 
you lose the game if your dice ever come up as a pair of ones (“snake eyes”).

You will need two states, one for each die.
Each die’s value should be rendered in the View in a span tag of their own, with the first dice having the data-testid 
of left-die and the second dice having the data-testid of right-die.
You will need two “Roll” buttons (labelled Roll Left and Roll Right).
Clicking a Roll button will change the value for the corresponding dice using the provided d6 function.
The initial values of the dice cannot be the same.
When the two states are equal, render a message that includes the word Lose.
When the two states are equal, render a message that includes the word Win.
If you do all these and are still not passing all tests, read the test file, it is a good practice! In much of software 
engineering, the tests are the product spec.
*/
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): React.JSX.Element {
    const [numRolledLeft, roll1] = useState<number>(1);
    const [numRolledRight, roll2] = useState<number>(6);

    function rollLeft(): void {
        const result = d6();
        roll1(result);
    }

    function rollRight(): void {
        const result = d6();
        roll2(result);
    }

    function compareRolls(): boolean {
        let win: boolean = false;
        if (numRolledLeft == 1) {
            if (numRolledRight == 1) {
                win = false;
            } else {
                win = true;
            }
        } else if (numRolledLeft == numRolledRight) {
            win = true;
        }
        return win;
    }

    return (
        <div>
            <div>
                <span>Left Die: {numRolledLeft}</span>
                <span>Right Die: {numRolledRight}</span>
                <Button onClick={rollLeft}>Roll Left Die</Button>
                <Button onClick={rollRight}>Roll Right Die</Button>
                {compareRolls() && <div>You Win!</div>}
                {!compareRolls() && <div> You Lose!</div>}
            </div>
        </div>
    );
}
