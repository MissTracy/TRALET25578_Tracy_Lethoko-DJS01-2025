import { DateUtils } from "../utils/DateUtils.js";
import { GenreService } from "../utils/GenreService.js";

export function createPodcastCard(podcast, onClick) {
  const card = document.createElement("div");
  card.classList.add("podcast-card");

  const genres = GenreService.getNames(podcast.genres).join(", ");
  const updated = DateUtils.format(podcast.updated);

  card.innerHTML = `
    <img src="${podcast.image}" alt="${podcast.title}" />
    <h3>${podcast.title}</h3>
    <p>${podcast.seasons} seasons</p>
    <p>${genres}</p>
    <p>${updated}</p>
  `;

  card.addEventListener("click", () => onClick(podcast));

  return card;
}