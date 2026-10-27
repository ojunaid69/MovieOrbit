/* ==========================================================================
   MovieOrbit - script.js
   COS10005 Web Development - Assignment 2
   Handles:
   1. Page Router & DOM Ready Initialization
   2. Registration Form Validation
   3. Movie Pre-Fill via URL Query Parameters
   4. Dynamic Booking Calculations & Payment Toggles
   5. Booking Form Validation
   6. Rule-Based Recommendation Engine
   ========================================================================== */

document.addEventListener("DOMContentLoaded", function () {
  // 1. Initialize Registration Page if the register form exists
  const registerForm = document.getElementById("register-form");
  if (registerForm) {
    initRegistrationValidation(registerForm);
  }

  // 2. Initialize Booking Page if the booking form exists
  const bookingForm = document.getElementById("booking-form");
  if (bookingForm) {
    initBookingFeatures(bookingForm);
  }

  // 3. Initialize Recommendation Page if the recommendation form exists
  const recommendForm = document.getElementById("recommend-form");
  if (recommendForm) {
    initRecommendationEngine(recommendForm);
  }
});

/* ==========================================================================
   SECTION A: REGISTRATION FORM VALIDATION (Task 2.3 a)
   ========================================================================== */
function initRegistrationValidation(form) {
  form.addEventListener("submit", function (e) {
    // Assume form is valid until a check fails
    let isValid = true;

    // Reset all previous error messages
    clearAllErrors(form);

    // 1. Username: Minimum 5 characters; letters, numbers, and underscores only
    const username = document.getElementById("username");
    const usernameRegex = /^[a-zA-Z0-9_]{5,}$/;
    if (!username.value.trim()) {
      showError("username-error", "Username is required.");
      isValid = false;
    } else if (!usernameRegex.test(username.value.trim())) {
      showError("username-error", "Username must be at least 5 characters and contain only letters, numbers, or underscores.");
      isValid = false;
    }

    // 2. Email Address: Valid email format
    const email = document.getElementById("email");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.value.trim()) {
      showError("email-error", "Email address is required.");
      isValid = false;
    } else if (!emailRegex.test(email.value.trim())) {
      showError("email-error", "Please enter a valid email address (e.g. name@domain.com).");
      isValid = false;
    }

    // 3. Phone Number: Digits only, 8 to 15 digits
    const phone = document.getElementById("phone");
    const phoneRegex = /^\d{8,15}$/;
    if (!phone.value.trim()) {
      showError("phone-error", "Phone number is required.");
      isValid = false;
    } else if (!phoneRegex.test(phone.value.trim())) {
      showError("phone-error", "Phone number must contain between 8 and 15 digits only.");
      isValid = false;
    }

    // 4. Password: Min 10 chars, uppercase, lowercase, numbers, special characters
    const password = document.getElementById("password");
    const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{10,}$/;
    if (!password.value) {
      showError("password-error", "Password is required.");
      isValid = false;
    } else if (!passRegex.test(password.value)) {
      showError(
        "password-error",
        "Password must be at least 10 characters long and include an uppercase letter, lowercase letter, number, and special character."
      );
      isValid = false;
    }

    // 5. Confirm Password: Must match password exactly
    const confirmPassword = document.getElementById("confirm-password");
    if (!confirmPassword.value) {
      showError("confirm-password-error", "Please confirm your password.");
      isValid = false;
    } else if (password.value !== confirmPassword.value) {
      showError("confirm-password-error", "Passwords do not match.");
      isValid = false;
    }

    // 6. Gender: Radio button must be checked
    const selectedGender = form.querySelector('input[name="gender"]:checked');
    if (!selectedGender) {
      showError("gender-error", "Please select your gender.");
      isValid = false;
    }

    // 7. Preferred Genres: At least one genre checkbox must be selected
    const selectedGenres = form.querySelectorAll('input[name="genres"]:checked');
    if (selectedGenres.length === 0) {
      showError("genres-error", "Please select at least one preferred movie genre.");
      isValid = false;
    }

    // 8. Country/Region: Dropdown must be selected
    const country = document.getElementById("country");
    if (!country.value) {
      showError("country-error", "Please select your country/region.");
      isValid = false;
    }

    // Block submission if any validation failed
    if (!isValid) {
      e.preventDefault();
    } else {
      alert("Registration successful! Welcome to MovieOrbit.");
      // Form submits normally to backend/action
    }
  });
}

/* ==========================================================================
   SECTION B: DYNAMIC BOOKING BEHAVIOUR & VALIDATION (Task 2.1 e, 2.3 b, c)
   ========================================================================== */
function initBookingFeatures(form) {
  const movieSelect = document.getElementById("movie-select");
  const quantityInput = document.getElementById("ticket-quantity");
  const costDisplay = document.getElementById("booking-cost");
  const payVoucherRadio = document.getElementById("pay-voucher");
  const payOnlineRadio = document.getElementById("pay-online");
  const voucherFields = document.getElementById("voucher-fields");
  const creditCardFields = document.getElementById("credit-card-fields");
  const sameEmailCheckbox = document.getElementById("same-email");
  const contactEmail = document.getElementById("email");
  const billingEmail = document.getElementById("billing-email");

  /* --- 1. Pre-Fill Movie from URL Query String (Task 2.1 e & Task 2.3 c) --- */
  const urlParams = new URLSearchParams(window.location.search);
  const movieFromUrl = urlParams.get("movie");
  if (movieFromUrl && movieSelect) {
    movieSelect.value = movieFromUrl;
  }

 /* --- 2. Live Booking Total Price Calculation (with Concession Discounts) --- */
  const ticketTypeSelect = document.getElementById("ticket-type");

  function updateCost() {
    // 1. Get base price from the selected movie's data-price attribute
    const selectedOption = movieSelect.options[movieSelect.selectedIndex];
    const basePrice = selectedOption && selectedOption.dataset.price ? parseFloat(selectedOption.dataset.price) : 0;
    
    // 2. Parse quantity
    const quantity = parseInt(quantityInput.value, 10) || 0;

    // 3. Apply ticket type discount multiplier
    // Standard Adult = 100% (full price)
    // Student Concession = 20% off (0.8 multiplier)
    // Child (Under 12) = 30% off (0.7 multiplier)
    let discountMultiplier = 1.0;
    const ticketType = ticketTypeSelect ? ticketTypeSelect.value : "Adult";

    if (ticketType === "Student") {
      discountMultiplier = 0.8;
    } else if (ticketType === "Child") {
      discountMultiplier = 0.7;
    }

    // 4. Calculate adjusted total
    const totalCost = (basePrice * discountMultiplier * quantity).toFixed(2);
    costDisplay.value = "$" + totalCost;
  }

  // Calculate immediately on load, and listen for movie, quantity, OR ticket-type changes
  updateCost();
  movieSelect.addEventListener("change", updateCost);
  quantityInput.addEventListener("input", updateCost);
  if (ticketTypeSelect) {
    ticketTypeSelect.addEventListener("change", updateCost);
  }
  /* --- 3. Conditional Payment Field Display (Task 2.3 c) --- */
  payVoucherRadio.addEventListener("change", function () {
    if (this.checked) {
      voucherFields.style.display = "block";
      creditCardFields.style.display = "none";
    }
  });

  payOnlineRadio.addEventListener("change", function () {
    if (this.checked) {
      creditCardFields.style.display = "block";
      voucherFields.style.display = "none";
    }
  });

  /* --- 4. "Same as Email Address" Synchronization --- */
  sameEmailCheckbox.addEventListener("change", function () {
    if (this.checked) {
      billingEmail.value = contactEmail.value;
      billingEmail.readOnly = true; // Lock field while synchronized
    } else {
      billingEmail.readOnly = false;
    }
  });

  // Keep billing email synced in real-time if user modifies contact email while checkbox is checked
  contactEmail.addEventListener("input", function () {
    if (sameEmailCheckbox.checked) {
      billingEmail.value = contactEmail.value;
    }
  });

  /* --- 5. Booking Form Submission Validation (Task 2.3 b) --- */
  form.addEventListener("submit", function (e) {
    let isValid = true;
    clearAllErrors(form);

    // Full Name: Required
    const fullname = document.getElementById("fullname");
    if (!fullname.value.trim()) {
      showError("fullname-error", "Full name is required.");
      isValid = false;
    }

    // Email Address: Valid email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!contactEmail.value.trim()) {
      showError("email-error", "Contact email address is required.");
      isValid = false;
    } else if (!emailRegex.test(contactEmail.value.trim())) {
      showError("email-error", "Please provide a valid email address.");
      isValid = false;
    }

    // Phone Number: Must contain at least 10 digits
    const phone = document.getElementById("phone");
    const phoneDigitsOnly = phone.value.replace(/\D/g, "");
    if (!phone.value.trim()) {
      showError("phone-error", "Phone number is required.");
      isValid = false;
    } else if (phoneDigitsOnly.length < 10) {
      showError("phone-error", "Phone number must contain at least 10 digits.");
      isValid = false;
    }

    // Movie Selection: Must be chosen
    if (!movieSelect.value) {
      showError("movie-error", "Please select a movie to book.");
      isValid = false;
    }

    // Screening Date & Time: Must not be in the past
    const screeningInput = document.getElementById("screening-datetime");
    if (!screeningInput.value) {
      showError("datetime-error", "Screening date and time is required.");
      isValid = false;
    } else {
      const selectedDateTime = new Date(screeningInput.value);
      const currentDateTime = new Date();
      if (selectedDateTime <= currentDateTime) {
        showError("datetime-error", "Screening date and time must be set in the future.");
        isValid = false;
      }
    }

    // Ticket Quantity: Must be greater than 0
    const qtyValue = parseInt(quantityInput.value, 10);
    if (isNaN(qtyValue) || qtyValue <= 0) {
      showError("quantity-error", "Number of tickets must be at least 1.");
      isValid = false;
    }

// --- Payment Method Validation (Foolproof ID-based check) ---
    const payVoucher = document.getElementById("pay-voucher");
    const payOnline = document.getElementById("pay-online");

    if (!payVoucher.checked && !payOnline.checked) {
      // Neither radio button is clicked
      showError("payment-method-error", "Please select a payment method.");
      isValid = false;
    } else if (payVoucher.checked) {
      // Voucher Method: Format check (12 digits required by spec)
      const voucherCode = document.getElementById("voucher-code");
      const voucherRegex = /^\d{12}$/;

      if (!voucherCode.value.trim()) {
        showError("voucher-error", "Please enter your 12-digit voucher code.");
        isValid = false;
      } else if (!voucherRegex.test(voucherCode.value.trim())) {
        showError("voucher-error", "Voucher code must be exactly 12 digits.");
        isValid = false;
      }
    } else if (payOnline.checked) {
      // Online Method: Credit Card Validation
      const cardName = document.getElementById("card-name");
      const cardNumber = document.getElementById("card-number");
      const cardType = document.getElementById("card-type").value;
      const cardExpiry = document.getElementById("card-expiry");
      const cardCvv = document.getElementById("card-cvv");

      if (!cardName.value.trim()) {
        showError("cardname-error", "Cardholder name is required.");
        isValid = false;
      }

      // Check card number format: Visa/Mastercard = 16 digits, Amex = 15 digits
      const cleanCardNum = cardNumber.value.replace(/\s+/g, "");
      if (!cleanCardNum) {
        showError("cardnumber-error", "Credit card number is required.");
        isValid = false;
      } else if (cardType === "amex") {
        if (!/^\d{15}$/.test(cleanCardNum)) {
          showError("cardnumber-error", "American Express numbers must be exactly 15 digits.");
          isValid = false;
        }
      } else {
        // Visa or Mastercard
        if (!/^\d{16}$/.test(cleanCardNum)) {
          showError("cardnumber-error", "Visa/Mastercard numbers must be exactly 16 digits.");
          isValid = false;
        }
      }

      // Card Expiry Format (MM/YY)
      if (!cardExpiry.value.trim() || !/^(0[1-9]|1[0-2])\/\d{2}$/.test(cardExpiry.value.trim())) {
        showError("expiry-error", "Enter expiry format MM/YY.");
        isValid = false;
      }

      // CVV format: 3 digits (Visa/MC) or 3-4 digits (Amex)
      if (!cardCvv.value.trim() || !/^\d{3,4}$/.test(cardCvv.value.trim())) {
        showError("cvv-error", "Enter a valid 3 or 4 digit CVV.");
        isValid = false;
      }
    }

    // Billing Email Address
    if (!billingEmail.value.trim()) {
      showError("billing-email-error", "Billing email address is required.");
      isValid = false;
    } else if (!emailRegex.test(billingEmail.value.trim())) {
      showError("billing-email-error", "Please provide a valid billing email address.");
      isValid = false;
    }

    // Stop submission if any error exists
    if (!isValid) {
      e.preventDefault();
    }
    // If valid, the browser executes the default POST action to Mercury regtest.php
  });
}

/* ==========================================================================
   SECTION C: RECOMMENDATION ENGINE (Task 2.1 c & Task 2.3)
   ========================================================================== */
function initRecommendationEngine(form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const genre = document.getElementById("genre").value;
    const ageGroup = document.getElementById("age-group").value;
    const preference = document.getElementById("preference").value;

    let matchedMovie = null;

    // Rule Set 1: Child age group or Family viewing
    if (ageGroup === "Child" || preference === "Family") {
      if (genre === "Comedy" || genre === "Animation") {
        matchedMovie = {
          title: "Cars",
          rating: "G",
          runtime: "117 mins",
          image: "images/cars.jpg",
          desc: "The ultimate family favorite. Follow Lightning McQueen on Route 66 in an uplifting adventure suitable for all ages.",
          param: "Cars"
        };
      } else {
        matchedMovie = {
          title: "The Wild Robot",
          rating: "PG",
          runtime: "102 mins",
          image: "images/thewildrobot.jpg",
          desc: "A heartwarming, beautifully animated story about survival, friendship, and family bonds in the wild.",
          param: "The+Wild+Robot"
        };
      }
    }
    // Rule Set 2: Teen or Sports/Comedy preference
    else if (ageGroup === "Teen" || genre === "Comedy") {
      matchedMovie = {
        title: "GOAT",
        rating: "PG",
        runtime: "102 mins",
        image: "images/goat.jpg",
        desc: "An underdog animated sports comedy filled with fast-paced laughs, perfect for teens and hanging out with friends.",
        param: "GOAT"
      };
    }
    // Rule Set 3: Adult Sci-Fi or Solo cinema viewing
    else if (genre === "Sci-Fi" || preference === "Solo") {
      matchedMovie = {
        title: "Interstellar",
        rating: "M",
        runtime: "169 mins",
        image: "images/interstellar.jpg",
        desc: "A breathtaking sci-fi masterpiece exploring deep space and human devotion. Unrivaled for solo cinephiles in IMAX.",
        param: "Interstellar"
      };
    }
    // Rule Set 4: Date night or Epic historical
    else if (genre === "Epic" || preference === "Date Night") {
      matchedMovie = {
        title: "The Odyssey",
        rating: "M",
        runtime: "155 mins",
        image: "images/theodyssey.jpg",
        desc: "A thrilling mythological voyage across ancient seas. Gripping drama and epic battles made for an exciting date night.",
        param: "The+Odyssey"
      };
    }
    // Rule Set 5: Default Action / Crime / Friends
    else {
      matchedMovie = {
        title: "The Dark Knight",
        rating: "M",
        runtime: "152 mins",
        image: "images/thedarkknight.jpg",
        desc: "The definitive cinematic superhero thriller. An electrifying face-off between Batman and the Joker to enjoy with friends.",
        param: "The+Dark+Knight"
      };
    }

    renderRecommendation(matchedMovie);
  });
}

function renderRecommendation(movie) {
  const resultContainer = document.getElementById("recommendation-result");
  if (!resultContainer) return;

  resultContainer.innerHTML = `
    <div class="result-card">
      <div class="result-badge">Top Match For You</div>
      <div class="result-body">
        <img src="${movie.image}" alt="${movie.title} Movie Poster">
        <div class="result-info">
          <h3>${movie.title}</h3>
          <p><strong>Rating:</strong> ${movie.rating} | <strong>Runtime:</strong> ${movie.runtime}</p>
          <p class="result-desc">${movie.desc}</p>
          <a href="booking.html?movie=${movie.param}" class="btn btn-primary">Book This Movie Now</a>
        </div>
      </div>
    </div>
  `;

  resultContainer.scrollIntoView({ behavior: "smooth" });
}

/* ==========================================================================
   SECTION D: REUSABLE ERROR HELPER UTILITIES
   ========================================================================== */
function showError(elementId, message) {
  const errorElement = document.getElementById(elementId);
  if (errorElement) {
    errorElement.textContent = message;
  }
}

function clearAllErrors(form) {
  const errorElements = form.querySelectorAll(".error-msg");
  errorElements.forEach(function (el) {
    el.textContent = "";
  });
}