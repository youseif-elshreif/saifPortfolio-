let postsData;

export async function loadPosts() {
  try {
    const res = await fetch("js/posts/posts.json");
    const data = await res.json();
    postsData = data;
    displayPosts();
    return true;
  } catch (error) {
    console.error("Error loading posts:", error);
  }
}

const container = document.querySelector(".posts-grid");
async function displayPosts() {
  postsData.forEach((post) => {
    const postCard = document.createElement("div");
    postCard.className =
      "post-card filter-item design-item standard-shadow bg-lighter rounded p-20";
    postCard.dataset.type = post.type;

    // Tags
    const tagsHTML =
      post.tags?.map((tag) => `<span class="tag">${tag}</span>`).join("") || "";

    // Image block if image type
    let imageBlock = "";
    if (post.type === "image" && post.image) {
      imageBlock = `
        <div class="post-image mb-20">
          <img src="${post.image}" alt="${post.title}" class="rounded w-100" />
        </div>
      `;
    }

    postCard.innerHTML = `
      ${imageBlock}
      <div class="p-15 ${post.type === "image" ? "pt-0" : ""}">
        <div class="post-header d-flex justify-between align-center mb-15 
        ${post.titleDir}">
          <h3 class="text-primary font-heading font-20 m-0">${post.title}</h3>
          <span class="post-date text-body font-14">${post.date}</span>
        </div>
        <p class="post-content text-body font-poppins line-height-1-8">${
          post.content
        }</p>
        <div class="post-footer d-flex justify-between align-center mt-20">
          <div class="post-tags">${tagsHTML}</div>
          <a href="#" class="read-more text-primary font-poppins">Read More</a>
          </div>
      </div>
      `;

    container.appendChild(postCard);
  });
  let preLoader = document.querySelector(".loader");
  await new Promise((resolve) => {
    setTimeout(() => {
      if (preLoader) preLoader.remove();
      resolve();
    }, 1000);
  });
  container.style.display = "grid";
  container.style.opacity = "1";
}
