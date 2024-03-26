const form = document.getElementById("submission_form");
const presentation_card = document.getElementById("presentation_card");
const email_input = document.getElementById("submit_input");
const confirmation_card = document.getElementById("confirmation_card");
const confirmation_instructions_message = document.getElementById(
  "confirmation_instructions_message"
);

email_input.addEventListener("change", () => {
  const labels_div = document.getElementById("labels_input");

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email_input.value)) {
    if (labels_div.lastChild.id === "input_label") {
      labels_div.appendChild(document.createElement("span"));
      const error_message_label = labels_div.lastChild;
      error_message_label.textContent = "Valid email required";
      error_message_label.id = "error_message_label";
    }
    email_input.setCustomValidity("Invalid field.");
  } else {
    email_input.setCustomValidity("");
    if (labels_div.lastChild.id === "error_message_label") {
      const error_message_label = labels_div.lastChild;
      labels_div.removeChild(error_message_label);
    }
  }
});

form.addEventListener("submit", event => {
  event.preventDefault();
  confirmation_card.style.display = "block";
  confirmation_instructions_message.innerHTML = `A confirmation email was sent to <strong>${email_input.value}</strong>.
  Please open it and click the button inside to confirm your subscription`;
  presentation_card.replaceWith(confirmation_card);
});
