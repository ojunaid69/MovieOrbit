Student Name: Junaid W Ehsan
StudentID: 104595254
Unit: COS10005 Web Development
Website Name: MovieOrbit

-------WEBSITE STRUCTURE-------
All our files and folders are organized neatly so the computer can find 
everything without getting lost:

assignment2/
│
├── index.html          (The front door of our website with a big cinema photo)
├── movies.html         (Shows all 6 movies, prices, times, and movie posters)
├── recommend.html      (A fun quiz page that helps pick a movie for you)
├── register.html       (Sign-up page to make a new account)
├── booking.html        (The ticket checkout page with price math and payments)
├── Readme.txt          (This help file you are reading right now)
│
├── css/
│   └── style.css       (One file that paints the whole site in cool blue and neon colors)
│
├── js/
│   └── script.js       (One brain file that does all the math, checks, and button tricks)
│
└── images/
    ├── logo.png             (Our custom MovieOrbit badge)
    ├── cinema-banner.jpg    (Big photo of the IMAX cinema room)
    ├── movie1.jpg           (Interstellar space poster)
    ├── movie2.jpg           (The Odyssey helmet poster)
    ├── movie3.jpg           (GOAT basketball movie picture)
    ├── movie4.jpg           (The Wild Robot forest picture)
    ├── movie5.jpg           (Batman looking over the city poster)
    └── movie6.jpg           (Lightning McQueen Cars poster)


JavaScript Validation Explanation

All our code sits inside one file called js/script.js. It waits until the whole 
webpage is ready before it starts working. Here is how it checks everything:

A. How It Catches Mistakes:
- When you click the Submit button, the computer usually tries to refresh right 
  away. We tell it: "Stop, wait a second!" using e.preventDefault().
- Our code starts by thinking everything is good. It cleans up any old red 
  warning words off the screen.
- Then it inspects every single box one by one.
- If a box is blank or typed wrong, it drops a simple red warning sentence right 
  underneath that exact box so you know what went wrong.
- If even one box has a mistake, the page stays still so you can fix it.
- If all boxes are correct, it gives you a green light and lets the form go 
  through!

B. The Sign-Up Checks (register.html):
- Username: You cannot leave it empty. It has to be at least 5 letters long, and 
  you can only use normal letters, numbers, or an underscore. No spaces allowed.
- Email: Checks that you typed an "@" sign and a dot with a normal ending like 
  ".com".
- Phone: Checks that you typed numbers only, and that it has between 8 and 15 
  digits.
- Password: Must be at least 10 letters long. It must have at least one big 
  capital letter, one small letter, one number, and one symbol like "!" or "#".
- Confirm Password: Must match the first password box perfectly.
- Gender: Makes sure you clicked one of the little circle buttons.
- Favorite Genres: Makes sure you ticked at least one box.
- Country: Makes sure you picked a country from the dropdown list.

C. The Ticket Booking Checks & Math (booking.html):
- Movie Name: If you clicked "Book" on a movie page earlier, the website looks 
  at the web link, spots the movie name, and automatically picks that movie for 
  you in the dropdown.
- Live Math Total: Every movie has its own price tag hidden inside the HTML. 
  When you pick a movie, type how many tickets you want, or pick Adult (full price), 
  Student (20% off), or Child (30% off), JavaScript does the math instantly and 
  shows the new dollar amount with two decimal cents.
- Date and Time: Makes sure you pick a time in the future and stops you from 
  booking a show in the past.
- Paying by Voucher: If you pick "Voucher", the credit card boxes disappear and 
  the voucher box appears. It checks that your voucher is exactly 12 numbers.
- Paying Online: If you pick "Online", the card boxes show up. It checks your name, 
  makes sure your card number has 15 numbers for Amex or 16 numbers for Visa, 
  and checks the expiry date and CVV code.
- Email Checkbox: If you tick "Same as contact email", it copies your email over 
  to the billing box for you so you don't have to type it twice.


Tiny Phone Screens:
   The website shrinks and grows nicely on computers, tablets, and phones. But 
   if you use a super tiny, old phone (smaller than 320 pixels wide), the top 
   buttons might look squished together.

2. Coming to Booking Directly:
   If someone types in the booking webpage link directly instead of clicking 
   a movie card first, the movie box stays on "-- Choose a Movie --" until they 
   pick one by hand.

3. Test Server Only:
   The booking button sends information to the university test script (regtest.php). 
   Because it is only a test helper, it shows your answers on a white screen 
   instead of saving them to a real database.



REFERENCES:

1. Platform Logo:
   - Local Path: images/logo.png
   - Reference: Google Gemini 2026, MovieOrbit modern emblem with planetary orbit and film strip [AI-generated image], Google LLC, viewed 27 October 2026, <https://gemini.google.com/>.

2. Home Page Hero Banner:
   - Local Path: images/imax_melbourne.jpg
   - Reference: IMAX Melbourne 2024, Melbourne Museum IMAX auditorium interior [image], IMAX Melbourne, viewed 27 October 2026, <https://imaxmelbourne.com.au/>[cite: 12].

3. Movie 1 - Interstellar:
   - Local Path: images/interstellar.jpg
   - Reference: Paramount Pictures 2014, Interstellar Saturn orbit still [image], Warner Bros. Entertainment Inc., viewed 27 October 2026, <https://www.paramountmovies.com/movies/interstellar>[cite: 11].

4. Movie 2 - The Odyssey:
   - Local Path: images/theodyssey.jpg
   - Reference: Universal Pictures 2024, The Odyssey promotional helmet artwork [image], Universal City Studios LLC, viewed 27 October 2026, <https://www.universalpictures.com/>[cite: 10].

5. Movie 3 - GOAT:
   - Local Path: images/goat.jpg
   - Reference: Sony Pictures Animation 2024, GOAT animated production still [image], Sony Pictures Digital Productions Inc., viewed 27 October 2026, <https://www.sonypicturesanimation.com/>[cite: 9].

6. Movie 4 - The Wild Robot:
   - Local Path: images/thewildrobot.jpg
   - Reference: DreamWorks Animation 2024, The Wild Robot Roz forest key art [image], Universal Pictures, viewed 27 October 2026, <https://www.dreamworks.com/movies/the-wild-robot>.

7. Movie 5 - The Dark Knight:
   - Local Path: images/thedarkknight.jpg
   - Reference: Warner Bros. Pictures 2008, The Dark Knight Gotham city view teaser poster [image], Warner Bros. Entertainment Inc., viewed 27 October 2026, <https://www.warnerbros.com/movies/dark-knight>[cite: 7].

8. Movie 6 - Cars:
   - Local Path: images/cars.jpg
   - Reference: Disney/Pixar 2006, Cars official theatrical poster [image], Walt Disney Studios Motion Pictures, viewed 27 October 2026, <https://movies.disney.com/cars>[cite: 6].