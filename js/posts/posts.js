import { loadPosts } from "./renderposts.js";
import { applyFilter } from "../events/filter.js";
import { setupPostLightbox } from "./postsLightbox.js";
document.addEventListener("DOMContentLoaded", async () => {
  await loadPosts();
  const defaultFilter = document.querySelector(".filter-btn.active");
  applyFilter(defaultFilter);
  setupPostLightbox();
});
