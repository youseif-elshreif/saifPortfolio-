let count = 0;
export async function loadExperience(link, list) {
  const res = await fetch(link);
  const data = await res.json();

  const container = document.querySelector(list);
  container.innerHTML = "";
  data.forEach((item) => {
    const experienceItem = document.createElement("div");
    experienceItem.className = `experience-item e-${count} d-flex align-center justify-between mb-20 pos-relative`;

    experienceItem.innerHTML = `
      <div class="text">
        <h3
          style="--date: '${item.date}'"
          class="title t-${count} font-roboto font-20 font-weight-700 text-uppercase mb-20 text-body pos-relative"
        >
          ${item.title}
          <div></div>
          <span class="d-block font-18 sub-title font-poppins">
            ${item.company}
          </span>
        </h3>
        <ul class="font-poppins font-16 mb-5 line-height-1-8 pos-relative">
          ${item.description
            .map(
              (desc) => `
              <li>
                ${desc}
              </li>
          `
            )
            .join("")}
        </ul>
      </div>
    `;
    container.appendChild(experienceItem);
    ++count;
  });
}
