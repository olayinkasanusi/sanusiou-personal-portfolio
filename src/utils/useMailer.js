import { useState, useCallback } from "react";
import toast from "react-hot-toast";

const API_ENDPOINT = "https://my-portfolio-mailer.vercel.app/send-email";

export const useMailer = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState(null);

  const sendMail = useCallback(async (data) => {
    setIsLoading(true);
    setIsSuccess(false);
    setError(null);

    try {
      const res = await fetch(API_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (res.ok) {
        toast.success(`${result.msg}, you'll receive a reply in due time`);
        setIsSuccess(true);
      } else {
        toast.error(`${result.msg}`);
        setError(result.msg);
      }
    } catch (err) {
      toast.error("Network error or failed to connect to the mail service.");
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return {
    sendMail,
    isLoading,
    isSuccess,
    error,
  };
};

// document.addEventListener("DOMContentLoaded", () => {
//   // 1. Get the form element
//   const form = document.getElementById("contactForm");
//   const statusMessage = document.getElementById("formStatus"); // Assuming you have a div to display success/error

//   if (form) {
//     form.addEventListener("submit", async (e) => {
//       e.preventDefault(); // Stop the default form submission

//       // Clear previous messages
//       statusMessage.textContent = "Sending...";
//       statusMessage.style.color = "blue";

//       // 2. Collect form data
//       const formData = new FormData(form);
//       const data = Object.fromEntries(formData.entries());

//       // 3. Configure the fetch request
//       try {
//         // IMPORTANT: Replace the URL with your server's address (e.g., 'https://yourserver.com/send-email')
//         const response = await fetch("http://localhost:3000/send-email", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(data), // Send the data as a JSON string
//         });

//         // 4. Handle the server response
//         const result = await response.json();

//         if (response.ok) {
//           // Success
//           statusMessage.textContent =
//             result.msg || "Message sent successfully!";
//           statusMessage.style.color = "green";
//           form.reset(); // Clear the form fields on success
//         } else {
//           // Server error (e.g., 400 Bad Request, 500 Internal Server Error)
//           statusMessage.textContent =
//             result.msg || "An error occurred. Please try again.";
//           statusMessage.style.color = "red";
//           console.error("Server response error:", result.error);
//         }
//       } catch (error) {
//         // Network error (e.g., server is offline, CORS issue)
//         statusMessage.textContent =
//           "Network error. Could not connect to the server.";
//         statusMessage.style.color = "red";
//         console.error("Fetch failed:", error);
//       }
//     });
//   }
// });
