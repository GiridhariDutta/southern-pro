// Southern Pro Roofing & Restoration Interactive JavaScript
document.addEventListener('DOMContentLoaded', () => {
  
  // Lead Form Submission
  const leadForm = document.getElementById('leadForm');
  if (leadForm) {
    leadForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('leadName').value;
      alert(`Thank you ${name}! Your free roof inspection request has been received. Our team will contact you within 15 minutes.`);
      leadForm.reset();
    });
  }

  // Hero CTA Smooth Scroll
  const heroBookBtn = document.getElementById('heroBookBtn');
  if (heroBookBtn) {
    heroBookBtn.addEventListener('click', () => {
      const formCard = document.querySelector('.hero-floating-card');
      if (formCard) formCard.scrollIntoView({ behavior: 'smooth' });
    });
  }

  // Floating AI Chat Widget Elements
  const aiChatToggleBtn = document.getElementById('aiChatToggleBtn');
  const aiChatCloseBtn = document.getElementById('aiChatCloseBtn');
  const aiChatModal = document.getElementById('aiChatModal');
  const widgetChatInput = document.getElementById('widgetChatInput');
  const widgetSendBtn = document.getElementById('widgetSendBtn');
  const aiChatBody = document.getElementById('aiChatBody');

  // Toggle Chat Modal
  if (aiChatToggleBtn && aiChatModal) {
    aiChatToggleBtn.addEventListener('click', () => {
      const isVisible = aiChatModal.style.display === 'flex';
      aiChatModal.style.display = isVisible ? 'none' : 'flex';
      if (!isVisible && widgetChatInput) widgetChatInput.focus();
    });
  }

  if (aiChatCloseBtn && aiChatModal) {
    aiChatCloseBtn.addEventListener('click', () => {
      aiChatModal.style.display = 'none';
    });
  }

  // Send Message Logic
  function sendMessage(text) {
    if (!text.trim()) return;

    const userMsg = document.createElement('div');
    userMsg.className = 'chat-msg user-msg';
    userMsg.textContent = text;
    aiChatBody.appendChild(userMsg);
    aiChatBody.scrollTop = aiChatBody.scrollHeight;

    if (widgetChatInput) widgetChatInput.value = '';

    setTimeout(() => {
      const aiMsg = document.createElement('div');
      aiMsg.className = 'chat-msg ai-msg';
      
      const lower = text.toLowerCase();
      if (lower.includes('inspection') || lower.includes('schedule') || lower.includes('book')) {
        aiMsg.textContent = "I can certainly schedule a 100% Free On-Site Inspection for you! Please enter your name and phone number in the form above, or call us directly at (254) 661-4064.";
      } else if (lower.includes('estimate') || lower.includes('cost') || lower.includes('price')) {
        aiMsg.textContent = "Roof replacements typically range based on square footage and materials (Architectural Shingles vs 200+ MPH Wind Metal). We offer free line-item estimates! Would you like a free inspection?";
      } else if (lower.includes('storm') || lower.includes('claim') || lower.includes('hail') || lower.includes('wind')) {
        aiMsg.textContent = "We are Licensed Insurance Claim Experts! We perform free storm damage assessments and work directly with State Farm, Allstate, USAA, Farmers, and all major carriers.";
      } else if (lower.includes('finance') || lower.includes('payment')) {
        aiMsg.textContent = "We offer flexible financing options with approved credit, including low monthly payment plans and $0 down options!";
      } else {
        aiMsg.textContent = "Thank you for reaching out to Southern Pro! How can I assist you with your roofing or restoration project today? You can also call our 24/7 hotline at (254) 661-4064.";
      }

      aiChatBody.appendChild(aiMsg);
      aiChatBody.scrollTop = aiChatBody.scrollHeight;
    }, 600);
  }

  if (widgetSendBtn && widgetChatInput) {
    widgetSendBtn.addEventListener('click', () => {
      sendMessage(widgetChatInput.value);
    });

    widgetChatInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        sendMessage(widgetChatInput.value);
      }
    });
  }

  // Handle Quick Suggestion Chips
  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('chip-btn')) {
      const query = e.target.getAttribute('data-query');
      sendMessage(query);
    }
  });

  // Embedded Card AI Input
  const cardAiSendBtn = document.getElementById('cardAiSendBtn');
  const cardAiInput = document.getElementById('cardAiInput');
  if (cardAiSendBtn && cardAiInput) {
    cardAiSendBtn.addEventListener('click', () => {
      const val = cardAiInput.value;
      if (val.trim()) {
        if (aiChatModal) aiChatModal.style.display = 'flex';
        sendMessage(val);
        cardAiInput.value = '';
      }
    });
  }

  // DESIGN MOCKUP LIGHTBOX MODAL LOGIC
  const designModalOverlay = document.getElementById('designModalOverlay');
  const designModalTitle = document.getElementById('designModalTitle');
  const designModalImage = document.getElementById('designModalImage');
  const designModalClose = document.getElementById('designModalClose');

  document.addEventListener('click', (e) => {
    const previewLink = e.target.closest('.design-preview-link');
    if (previewLink) {
      e.preventDefault();
      const imgFile = previewLink.getAttribute('data-img');
      const title = previewLink.getAttribute('data-title') || 'Design Mockup Sample';

      if (designModalOverlay && designModalImage && designModalTitle) {
        designModalImage.src = imgFile;
        designModalTitle.textContent = title;
        designModalOverlay.style.display = 'flex';
      }
    }
  });

  if (designModalClose && designModalOverlay) {
    designModalClose.addEventListener('click', () => {
      designModalOverlay.style.display = 'none';
    });
  }

  if (designModalOverlay) {
    designModalOverlay.addEventListener('click', (e) => {
      if (e.target === designModalOverlay) {
        designModalOverlay.style.display = 'none';
      }
    });
  }

});
