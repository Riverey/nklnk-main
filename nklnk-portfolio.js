// Version 1
(function() {
  const scriptTag = document.currentScript;
  if (!scriptTag) {
    console.warn('Portfolio badge script must be loaded as a script tag');
    return;
  }
  
  const liveUrl = scriptTag.getAttribute("data-live-url") || "#";
  const bgColor = scriptTag.getAttribute("data-bg-color") || "#1E212F";
  const textColor = scriptTag.getAttribute("data-text-color") || "#D9DEF2";

  const style = document.createElement("style");
  style.textContent = `
    .portfolio-badge {
      position: fixed;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: ${bgColor};
      color: ${textColor};
      font-family: sans-serif;
      font-size: 0.875rem;
      line-height: 1.4;
      padding: 1rem 0.75rem;
      cursor: auto !important;
      border-top: 1px solid ${textColor}0D;
      z-index: 9999;
    }
    .portfolio-badge * {
      cursor: auto !important;
    }
    .portfolio-badge .container-medium.w-container {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      gap: 1rem;
      max-width: 960px;
      margin: 0 auto;
    }
    .portfolio-badge .badge-text {
      flex: 1;
    }
    .portfolio-badge a {
      color: ${textColor};
      text-decoration: underline;
      transition: opacity 0.2s ease;
    }
    .portfolio-badge a:hover {
      opacity: 0.7;
    }
    .portfolio-badge button {
      cursor: pointer !important;
      transition: opacity 0.2s ease;
    }
    .portfolio-badge button:hover {
      opacity: 0.7;
    }
    .portfolio-badge .badge-close {
      flex-shrink: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 1.5rem;
      height: 1.5rem;
      background: none;
      border: none;
      padding: 0;
    }
    .portfolio-badge .badge-close svg {
      width: 10px;
      height: 10px;
      color: ${textColor};
    }
  `;

  const badge = document.createElement("div");
  badge.className = "portfolio-badge";
  badge.innerHTML = `
    <div class="container-medium w-container">
      <div class="badge-text">
        Portfolio version of the project by <a href="https://nklnk.com" target="_blank">nklnk</a>.<br>
        The live (modified by the client) version can be found <a href="${liveUrl}" target="_blank">here</a>.
      </div>
      <button class="badge-close" aria-label="Close">
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.50002 2.50002L2.50002 7.5M2.5 2.5L7.50002 7.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
        </svg>
      </button>
    </div>
  `;

  badge.querySelector(".badge-close").addEventListener("click", () => {
    badge.remove();
  });

  document.head.appendChild(style);
  document.body.appendChild(badge);
})();
