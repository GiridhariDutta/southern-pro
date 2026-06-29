// Southern Pro Roofing & Restoration Application Engine

document.addEventListener('DOMContentLoaded', () => {
  console.log('Southern Pro Application loaded.');

  const leadForm = document.getElementById('leadForm');
  if (leadForm) {
    leadForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('leadName').value.trim();
      const service = document.getElementById('leadService').value;
      alert(`Thank you, ${name}! Your free inspection request for ${service} has been submitted successfully.`);
      leadForm.reset();
    });
  }

  const heroBookBtn = document.getElementById('heroBookBtn');
  if (heroBookBtn) {
    heroBookBtn.addEventListener('click', () => {
      document.getElementById('leadName').focus();
    });
  }

  const cardAiSendBtn = document.getElementById('cardAiSendBtn');
  const cardAiInput = document.getElementById('cardAiInput');
  if (cardAiSendBtn && cardAiInput) {
    cardAiSendBtn.addEventListener('click', () => {
      if (cardAiInput.value.trim()) {
        alert("Southern Pro AI: Thank you! Our specialist will contact you immediately regarding: " + cardAiInput.value);
        cardAiInput.value = '';
      }
    });
  }
});
