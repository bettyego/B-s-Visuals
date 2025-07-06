// Accessibility utilities

export const trapFocus = (element) => {
  const focusableElements = element.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
  
  const firstElement = focusableElements[0];
  const lastElement = focusableElements[focusableElements.length - 1];

  const handleTabKey = (e) => {
    if (e.key === 'Tab') {
      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          lastElement.focus();
          e.preventDefault();
        }
      } else {
        if (document.activeElement === lastElement) {
          firstElement.focus();
          e.preventDefault();
        }
      }
    }
  };

  element.addEventListener('keydown', handleTabKey);
  firstElement.focus();

  return () => {
    element.removeEventListener('keydown', handleTabKey);
  };
};

export const announceToScreenReader = (message, priority = 'polite') => {
  const announcement = document.createElement('div');
  announcement.setAttribute('aria-live', priority);
  announcement.setAttribute('aria-atomic', 'true');
  announcement.className = 'sr-only';
  announcement.textContent = message;
  
  document.body.appendChild(announcement);
  
  setTimeout(() => {
    document.body.removeChild(announcement);
  }, 1000);
};

export const handleKeyboardNavigation = (e, onEnter, onEscape) => {
  switch (e.key) {
    case 'Enter':
    case ' ':
      e.preventDefault();
      onEnter?.();
      break;
    case 'Escape':
      e.preventDefault();
      onEscape?.();
      break;
  }
};

export const getAriaLabel = (action, item) => {
  const labels = {
    open: `Open ${item}`,
    close: `Close ${item}`,
    next: `Go to next ${item}`,
    previous: `Go to previous ${item}`,
    select: `Select ${item}`,
    filter: `Filter by ${item}`
  };
  
  return labels[action] || `${action} ${item}`;
};

export const checkColorContrast = (foreground, background) => {
  // Simple contrast ratio calculation
  const getLuminance = (color) => {
    const rgb = parseInt(color.slice(1), 16);
    const r = (rgb >> 16) & 0xff;
    const g = (rgb >> 8) & 0xff;
    const b = (rgb >> 0) & 0xff;
    
    const [rs, gs, bs] = [r, g, b].map(c => {
      c = c / 255;
      return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
    });
    
    return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
  };
  
  const l1 = getLuminance(foreground);
  const l2 = getLuminance(background);
  const ratio = (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05);
  
  return {
    ratio,
    aa: ratio >= 4.5,
    aaa: ratio >= 7
  };
};
