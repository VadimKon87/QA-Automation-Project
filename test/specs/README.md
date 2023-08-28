Message to reviewer:
I know using full xpath is risky and preferable not to use it, but I had problems using shorter paths and I wasted a lot of time on them, so I use short paths where it worked and for the rest I had to use the full paths.
Also the car search window with timer works strangely (even when I check it manually, it behaves differently), so the last two tests do not pass every time.

**************************************************************************************

This project consists of 9 automated tests covering the full process of ordering a taxi.

    1. Setting the address and checking that the entered value matches the input
    2. Selecting Supportive plan and checking that Blanket and handkerchiefs elemt is visible on page, because it is only in this plan
    3. Filling in the phone number and checking that the entered value matches the input
    4. Adding a credit card and checking that an blue check mark appears, meaning that a card was added
    5. Writing a message for the driver and checking that the entered value matches the input
    6. Ordering a Blanket and handkerchiefs and checking that the corresponding switch is enabled
    7. Ordering 2 Ice creams and checking that the amount of ice cream ordered is 2
    8. The car search modal appears and checking that the words "Car search" appear
    9. The driver info appears and checking that the corresponding modal exists on the screen

To run tests use the following command: npm run wdio
    

    