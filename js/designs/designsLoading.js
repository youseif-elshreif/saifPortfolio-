import { setLightbox } from "./displayPics.js";

let designsData;

export async function loadDesigns() {
  try {
    const res = await fetch("js/designs/designs.json");
    const data = await res.json();
    designsData = data;
    getDesigns();
    return true;
  } catch (error) {
    console.error("Error loading designs:", error);
  }
}

const container = document.querySelector(".designs-list");

async function getDesigns() {
  designsData.forEach((design) => {
    const item = document.createElement("div");
    item.className = "custom-item design-item filter-item pos-relative";
    item.dataset.type = design.type;

    if (design.isCampaign) {
      item.dataset.category = "campaign";
      item.dataset.campaignImages = JSON.stringify(design.campaignImages);
      item.dataset.campaignTitles = JSON.stringify(design.campaignTitles);
      item.dataset.campaignDesc = JSON.stringify(design.campaignDesc);
    }

    item.innerHTML = `
      <div class="design-card pos-relative d-flex rounded standard-shadow bg-light">
      <div class="img-container rounded z-2 pos-absolute w-100 h-100">
        <span class="d-name pos-relative">${design.title}</span>
      </div>
        <img src="${design.img}" loading="lazy" alt="${design.alt}" />
        ${
          design.isCampaign
            ? `<div class="campaign-indicator isCampaign pos-absolute">
                <span>Campaign</span>
              </div>`
            : ""
        }
        ${
          design.company
            ? `<div class="campaign-indicator company pos-absolute">
                <span>${design.company}</span>
              </div>`
            : ""
        }
        
        <div class="text pos-absolute w-90 bg-lighter p-15 rounded font-poppins text-body">
          <h3 class="mb-15">${design.title}</h3>
          <div class="more-details d-flex align-center justify-between mt-10 font-weight-500">
            <p>${design.isCampaign ? "View Campaign" : "View design"}</p>
            <i class="fas fa-long-arrow-alt-right"></i>
          </div>
        </div>
      </div>
    `;

    // هنا ضيفنا event بعد ما العنصر اتجهز
    item.addEventListener("click", () => {
      setLightbox(item);
    });

    container.appendChild(item);
  });
  let preLoader = document.querySelector(".loader");
  if (preLoader) preLoader.remove();
  container.style.display = "grid";
  container.style.opacity = "1";
}
