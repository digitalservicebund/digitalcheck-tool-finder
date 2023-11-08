import "./style.css";

const app = document.querySelector<HTMLElement>("#app");

if (app)
  app.innerHTML = `
  <div class="container mx-auto px-16 flex flex-col h-screen">
    <div class="flex flex-col items-center m-40">
      <h1 class="ds-heading-01-reg mb-40 text-center">Digitalcheck Werkzeugfinder</h1>
      <button class="ds-button ds-button-large">
        <span class="ds-button-label">Click me for nothing</span>
      </button>
    </div>
  </div>
`;
