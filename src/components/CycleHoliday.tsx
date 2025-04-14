import React, { useState } from "react";
import { Button } from "react-bootstrap";
/* CycleHoliday
The CycleHoliday component is a little more complicated, but should be an opportunity to be creative. 
Think about your 5 favorite holidays, and then find 5 emojis that represent them. 
You will create two buttons that let you “cycle” through each holiday, one button alphabetically and 
the other button by time in the year. Ultimately, the holidays you pick are up to you, and we will not 
micromanage your choice of alphabetization or specific date chosen EXCEPT that the two orderings should 
not be the same (because that’s no fun).

You will need one state, either a string or an enumeration of 5 strings like QuestionType (perhaps named Holiday).
You will need to define two functions (or two Records) that can take in an existing holiday and produce the 
next holiday - one function should produce the next holiday alphabetically, and the other produces the next 
holiday in the year.

The view should render the current holiday with the text Holiday: followed by the emoji (e.g., Holiday: 🎃).
The first button should include the text Alphabet somewhere (e.g., Advance by Alphabet) and changes the current 
holiday to the next one alphabetically.

The second button should include the text Year somewhere (e.g., Advance by Year) and changes the current holiday 
to the next one in the year.*/

type Holiday = "❤️" | "🎂" | "🎃" | "🦃" | "🎄";
//in year order
/* alphabetical:
    Birthday
    Christmas
    Halloween
    Thanksgiving
    Valentines
*/
const YEAR_ORDER: Record<Holiday, Holiday> = {
    "❤️": "🎂",
    "🎂": "🎃",
    "🎃": "🦃",
    "🦃": "🎄",
    "🎄": "❤️",
};

const ALPHABETICAL_ORDER: Record<Holiday, Holiday> = {
    "🎂": "🎄",
    "🎄": "🎃",
    "🎃": "🦃",
    "🦃": "❤️",
    "❤️": "🎂",
};

export function CycleHoliday(): React.JSX.Element {
    const [holiday, setHoliday] = useState<Holiday>("🎂");
    function nextAlphabetical(): void {
        const nextHoliday = ALPHABETICAL_ORDER[holiday];
        setHoliday(nextHoliday);
    }

    function nextYear(): void {
        const nextHoliday = YEAR_ORDER[holiday];
        setHoliday(nextHoliday);
    }

    return (
        <div>
            <div>
                <span>Holiday: {holiday}</span>
                <Button onClick={nextAlphabetical}>Advance by Alphabet</Button>
                <Button onClick={nextYear}>Advance by Year</Button>
            </div>
        </div>
    );
}
