Home assignment part 2:

a. Question: Test this UI mock-up, can you find any problems with this screen? (Please pay
attention to all functional aspects such as Security, Usability, Performance, etc.)

a. Answer:

1. Internationalization and Localization tests - missing a 'country' field for choosing whice state the user is.
2. Security tests - missing a 'CVC' option (adding three numbers on the back of the card) can lead to scams - very important for the payment page.
3. Usability tests - the user does not have any placeholder inside of the inputs fields.
4. Usability tests - organize all of the inputs as a column and not all around the form.

---

b. Question: Can you write 2–3 sample test cases for this functionality?

b. Answer:

Test name: The user is able to pay in secure on his service.

Precondition:

- A valid credit card.

Steps:

1. Go to the 'Account information' page.
2. Select a 'Visa' option from the 'Card Type' dropdown.
3. Insert the card's number inside the 'Card Number' input.
4. Select a month and year that matches the card expiration date from the 'Select Month' & 'Select year' dropdown.
5. Insert the 'CVC' code inside the 'CVC' input.
6. Insert the first name of the cardholder's name into the 'First Name' input.
7. Insert the last name of the cardholder's name into the 'Last Name' input.
8. Insert the cardholder's address to the 'Credit Card Billing Street Address' input.
9. Insert the city of the cardholder into the 'City' input.
10. Select the cardholder's state from the 'State' dropdown.
11. Insert the postal code according to the chosen city inside the 'City' input.
12. Click on the 'Continue' button.

Expected Result: The user will navigate to the 'Thank you' page.

Actual Result: Step 5 - The user is not able to insert his 'CVC' code inside the 'CVC' input.

---

Test name: A user from Israel is able to pay on a service.

Precondition:

- A valid credit card.

Steps:

1. Go to the 'Account information' page.
2. Select a 'Visa' option from the 'Card Type' dropdown.
3. Insert the card's number inside the 'Card Number' input.
4. Select a month and year that matches the card expiration date from the 'Select Month' & 'Select year' dropdown.
5. Insert the 'CVC' code inside the 'CVC' input.
6. Insert the first name of the cardholder's name into the 'First Name' input.
7. Insert the last name of the cardholder's name into the 'Last Name' input.
8. Select 'Israel' from the 'Country' dropdown.
9. Insert the city of the cardholder into the 'City' input.
10. Select the cardholder's state from the 'State' dropdown.
11. Insert the postal code according to the chosen city inside the 'City' input.
12. Click on the 'Continue' button.

Expected Result: The user will navigate to the 'Thank you' page.

Actual Result: Step 8 - The user is not able to select any country from the 'Country' dropdown.
The dropdown is not appear.

---

c. Question: Can you suggest a product solution for the most severe bug you’ve found?

c. Answer - The missing 'CVC' input is the most severe bug in the widget.
My suggestion is: to add another payment input of the 'CVC' field so the user can insert his code so he can pay securely.
