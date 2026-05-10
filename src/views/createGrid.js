
import { createPodcastCard } from "../components/createPodcastCard.js";

export function createGrid() {
  const container = document.getElementById("podcastGrid");

  function render(podcastList) {
    container.innerHTML = "";

    podcastList.forEach((podcast) => {
      const card = createPodcastCard(podcast, () => {
        console.log("Clicked:", podcast.title);
      });

      container.appendChild(card);
    });
  }

  return { render };
}