


const modal = document.getElementById("modal");

if (!modal) {
  console.error("Modal not found in ");
}

export const createModal = {
  open(podcast) {
    modal.classList.remove("hidden");

    document.getElementById("modal-title").textContent = podcast.title;
    document.getElementById("modal-description").textContent = podcast.description;
    document.getElementById("modal-image").src = podcast.image;
  },

  close() {
    modal.classList.add("hidden");
  }
};