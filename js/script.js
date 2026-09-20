/* ==========================================
   ALPHABET V2.0
   WEBSITE ANNOUNCEMENT
=========================================== */

document.addEventListener("DOMContentLoaded", () => {
  const announcement = document.createElement("section");

  announcement.className = "v2";

  announcement.setAttribute("aria-label", "Alphabet v2.0 announcement");

  announcement.innerHTML = `
    <div class="v2-content">

      <!-- Decorative Alphabet Badge -->
      <div class="v2-badge" aria-hidden="true">
        <span>A</span>
        <span>B</span>
        <span>C</span>
      </div>

      <!-- Announcement Content -->
      <div class="v2-info">

        <div class="v2-label">
          ✨ NEW EXPERIENCE
        </div>

        <h2>
          Meet Alphabet v2.0
        </h2>

        <p>
          Our new and improved Alphabet website is here!
          Discover a more colorful, fun and interactive
          experience for children.
        </p>

      </div>

      <!-- CTA -->
      <a
        class="v2-button"
        href="https://vatsalsaxena22.github.io/alphabet-v2.0/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span>Explore v2.0</span>
        <span class="v2-arrow" aria-hidden="true">→</span>
      </a>

    </div>

    <!-- Decorative Shapes -->
    <span
      class="v2-shape v2-shape-1"
      aria-hidden="true"
    ></span>

    <span
      class="v2-shape v2-shape-2"
      aria-hidden="true"
    ></span>

    <span
      class="v2-shape v2-shape-3"
      aria-hidden="true"
    ></span>
  `;

  /*
   * Insert announcement as the first element
   * inside <body>.
   */
  document.body.prepend(announcement);
});
