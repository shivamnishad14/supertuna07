const scriptURL = 'https://script.google.com/macros/s/AKfycbwo0DkTP3dtvHgr5_2Iw4aCGG2bG50brR2RxeiMW5Gs1hBTjZmZ8wvoFkuE00pQZpvE/exec'
const form = document.getElementById('contactForm');

form.addEventListener('submit', async (e) => {
  e.preventDefault(); // Prevent default form submission

  try {
    // Convert form data to a plain object
    const formData = new FormData(form);
    const payload = {};
    formData.forEach((value, key) => {
      payload[key] = value;
    });

    console.log("Payload:", payload);

    // Sending the POST request
    const response = await fetch(scriptURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', // Set the content type to JSON
      },
      body: JSON.stringify(payload), // Stringify the payload object
    });

    if (response.ok) {
      alert('Thank you! Your form has been submitted successfully.');
      form.reset(); // Reset form fields
    } else {
      throw new Error('Failed to submit the form.');
    }
  } catch (error) {
    console.error('Error:', error.message);
    alert('An error occurred while submitting the form. Please try again.');
  }
});
