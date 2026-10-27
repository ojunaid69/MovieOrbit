==============================================================================
Student Name : Junaid W Ehsan
Student ID   : 104595254
Unit         : COS10005 Web Development
Website Name : MovieOrbit
==============================================================================


-------Git Link-------
https://github.com/ojunaid69/MovieOrbit

-------Mercury Link-------

https://mercury.swin.edu.au/cos10005/s104595254/assignment2/index.html


------------------------------------------------------------------------------
WEBSITE STRUCTURE
------------------------------------------------------------------------------

All of our files and folders have a logical naming and structure, and are
well organised and arranged so that the computer doesn't get lost and can
locate everything without a struggle.

StudentID: 104595254

Unit: COS10005 Web Development

Website Name: MovieOrbit

-------WEBSITE STRUCTURE-------

All our files and folders are organized neatly so the computer can find
everything without getting lost:

assignment2/
|
|-- index.html      (Front door of our website with a big picture of the cinema)
|-- movies.html     (Website page showing all 6 movies with prices, times and
|                    movie posters)
|-- recommend.html  (Fun quiz page that recommends you a movie!)
|-- register.html   (Sign up page to create a new account)
|-- booking.html    (The website page where we pay for tickets (this does all
|                    the math and other stuff))
|-- Readme.txt      (This help file)
|
|-- css/
|   `-- style.css   (One file where we paint our website in cool colours)
|                    (blue and neon))
|
|-- js/
|   `-- script.js   (One brain file where we do all the math and checks and
|                    make the buttons work)
|
`-- images/
    |-- logo.png             (Our MovieOrbit logo)
    |-- cinema-banner.jpg    (Big picture of the IMAX room at the cinema!)
    |-- movie1.jpg           (Picture of the Interstellar movie poster)
    |-- movie2.jpg           (Picture of the The Odyssey movie poster)
    |-- movie3.jpg           (Picture of the GOAT basketball movie)
    |-- movie4.jpg           (Picture of the The Wild Robot movie)
    |-- movie5.jpg           (Picture of the Batman in Gotham City poster)
    `-- movie6.jpg           (Picture of the Lightning McQueen Cars poster)


------------------------------------------------------------------------------
JAVASCRIPT VALIDATION
------------------------------------------------------------------------------

All of our code is in one file, js/script.js. It waits until the whole

It runs after the page is fully loaded. The code to run the validation is as
follows:


A. What is it and how does it work?
-----------------------------------

: When you click the submit button, we tell the computer to refresh the page
right away.

away. We say "Stop refreshing the page right away." : e.preventDefault(); Our
program thinks everything is okay.

- Our code starts by thinking everything is good. It cleans up any old red

warning words off the screen.

It will clear all the red warning sentences, and it starts to read through
every box, one at a time.

If a box is empty or has the wrong answer, the program will write a red
warning sentence right underneath that box.

So you will know the answer right away!

The program will also not refresh the page.

If you get something wrong, you will have time to fix it.

If everything is correct, it will pass and go through the program!


B. The Sign-Up Checks (register.html)
-------------------------------------

Username : You can't leave it empty.

- Username: You cannot leave it empty. It has to be at least 5 letters long,
  and

It has to be at least 5 letters long, but you can only use normal letters,
numbers or a letter under an underscore ("). Don't use spaces!

Email: Checks if you typed an "@" and a dot (".")

".com".

- Phone: Checks that you typed numbers only, and that it has between 8 and 15

with a normal ending like ".com".

Phone: Checks if you typed only numbers and if the number is between 8 and 15
digits long

Password: It has to be at least 10 letters long. It must have at least one big

It has to contain at least one big capital letter, one small letter, one
number, and one symbol like "!" or "#".

Confirm Password: This password box has to match the first password box.

Gender: It makes sure you ticked one of the little circle buttons.

Favorite Genres: This makes sure you ticked at least one box.

Country: This makes sure you selected a country from the dropdown list.


C. B. The Ticket Booking Checks and Maths (booking.html)
---------------------------------------------------------

Movie Name: If you clicked 'Book' on a movie page earlier, the web page uses
the web address to find the movie name and automatically selects that movie
from the dropdown list.

at the web link, spots the movie name, and automatically picks that movie for

you in the dropdown.

Live Math Total: Each movie has its price hidden within the HTML.

When you pick a movie, type how many tickets you want, or pick Adult (full
price),

When you select a movie, the number of tickets you want and whether you are
Adult (full price), Student (20% off) or Child (30% off), the website uses the
numbers in your HTML to do the calculation (maths) live on the web page and
shows you the new amount with two decimal places (£0.00).

shows the new dollar amount with two decimal cents.

Date and Time: This makes sure you don't select a time that has already
passed.

booking a show in the past.

Paying by Voucher: If you select 'Voucher', the credit card boxes will
disappear and replace it with the voucher box, it checks whether your voucher
number has exactly 12 digits.

the voucher box appears. It checks that your voucher is exactly 12 numbers.

Paying Online: If you select 'Online', the card boxes will appear, it checks
the name on the card, if the card number is 15 digits for American Express or
16 digits for Visa, it checks your expiry date and CVV (card security code).
It checks your name,

makes sure your card number has 15 numbers for Amex or 16 numbers for Visa,

and checks the expiry date and CVV code.

- Add an email confirmation checkbox, where if you check "Same as contact
  email", it will automatically add your email to the billing box.

to the billing box for you so you don't have to type it twice.


Tiny Phone Screens:
-------------------

The website shrinks and grows nicely on computers, tablets, and phones. But

Tiny Phone Screens The website looks great on computers and tablets, but if
you are using a very, very old phone (smaller than 320 pixels), the buttons at
the top might be a bit squished together.

buttons might look squished together.


2. Booking web directly.
------------------------

People sometimes type the booking web directly instead of first choosing

The movie box doesn't get filled out to any a movie on the movie card.

option until they choose a movie manually.


3. Test Server:
---------------

When the button for booking is clicked, this information is sent to the test
script on the university test server (regtest.php).

The university test script is a helper script to display the answers on a
white screen.

instead of saving them to a real database.

It will not actually store the answers in a database.


------------------------------------------------------------------------------
BIBLIOGRAPHY
------------------------------------------------------------------------------

(1) Platform Logo:

    Local: images/logo.png

    Google Gemini 2026.

    MovieOrbit modern logo with planetary orbit and film strip [AI-generated
    image], Google LLC, accessed 27 October 2026, <https://gemini.google.com/>.

    Image in the hero banner on the home page

    Local : images/imax_melbourne.jpg

    Ref: IMAX Melbourne 2024, Melbourne Museum IMAX auditorium interior image,
    IMAX Melbourne, accessed 27 October 2026, cite: 12 .


3. Movie 1 - Interstellar

    Local Path: images/interstellar.jpg

    Reference [3] "Paramount Pictures 2014, Interstellar Saturn orbit still
    [image]," 2014, Warner Bros. Entertainment Inc., viewed 27 October 2026,
    [cite: 11] .


4. Movie 2 - The Odyssey:

    - Local Path: images/theodyssey.jpg

    Movie 2 The Odyssey Local Path: images/theodyssey.jpg Universal Pictures
    2024 The Odyssey promotional helmet artwork [image] Universal City Studios
    LLC (visited 27 October 2026) https://www.universalpictures.com/
    (cited: 10)


5. Movie 3 - GOAT:

    - Local Path: images/goat.jpg

    GOAT Image 3 - Local Path: images/goat.jpg Image Citations [3] "Sony
    Pictures Animation 2024, GOAT animated production still [image]," 2026,
    Sony Pictures Digital Productions Inc., viewed 27 October 2026,
    https://www.sonypicturesanimation.com/. [9] See note [3] above.


6. Movie 4 - The Wild Robot

    Local Path: images/thewildrobot.jpg

    Ref: DreamWorks Animation (2024) The Wild Robot Roz forest key art
    [image], Universal Pictures, viewed 27 October 2026,
    <https://www.dreamworks.com/movies/the-wild-robot>.


7. Movie 5 - The Dark Knight :

    - Local Path: images/thedarkknight.jpg

    Warner Bros. Pictures 2008, The Dark Knight Gotham city view teaser
    poster [image], Warner Bros. Entertainment Inc., viewed 27 October 2026,
    [cite: 7] .


8. Movie 6: Cars

    Local Path: images/cars.jpg

    Wikimedia reference: Disney/Pixar 2006 Cars official theatrical poster
    [image] Walt Disney Studios Motion Pictures 27 October 2026 , accessed
    10 August 2027 , <https://movies.disney.com/cars> (cite: 6)