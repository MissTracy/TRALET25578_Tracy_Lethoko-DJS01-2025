
import { createPodcastCard } from "../components/createPodcastCard.js";
import { createModal } from "../components/createModal.js";

export function createGrid() {
  const container = document.getElementById("podcastGrid");

  function render(podcastList) {
    container.innerHTML = "";

    podcastList.forEach((podcast) => {
      const card = createPodcastCard(podcast, () => {
        createModal.open(podcast);
      });

      container.appendChild(card);
    });
  }

  return { render };
}