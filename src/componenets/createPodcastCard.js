
import { GenreService } from "../services/GenreService.js";
import DateUtils from "../utils/DateUtils.js";

export function createPodcastCard(podcast, onClick) {
  const card = document.createElement("div");
  card.classList.add("podcast-card");

  const genres = GenreService.getNames(podcast.genres);

  card.innerHTML = `
    <img src="${podcast.image}" alt="${podcast.title}" />
    <h3>${podcast.title}</h3>

    <p>${podcast.seasons} seasons</p>

    <div class="genres">
      ${genres.map((g) => `<span>${g}</span>`).join("")}
    </div>

    <p>${DateUtils.format(podcast.updated)}</p>
  `;

  card.addEventListener("click", () => {
    onClick(podcast);
  });

  return card;
}