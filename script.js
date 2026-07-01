const MAP_IMAGE_URL = "./assets/world-map-transparent-2x.png";

const CATEGORY_TREE = {
  "Crew, Medical & Welfare Services": [
    "Accommodation & Hotels",
    "Catering & Welfare Services",
    "Crew Management & Manning",
    "Emergency Response Services",
    "Medical Care & Offshore Doctors",
    "Recruitment & Training",
    "Repatriation Services"
  ],
  "Green Solutions & Sustainability": [
    "Alternative Fuels (LNG, Methanol, Hydrogen)",
    "Decommissioning Solutions",
    "Emission Reduction Technologies",
    "Energy Efficiency Solutions",
    "Environmental Monitoring",
    "ESG & Carbon Reporting",
    "Waste Management & Recycling"
  ],
  "Legal, Insurance & Finance": [
    "Claims Handling",
    "Contract & Commercial Consultancy",
    "HSE & Safety Consultancy",
    "Insurance & P&I Services",
    "Maritime & Offshore Legal Services",
    "Regulatory & Compliance Advisory",
    "Risk Management",
    "Ship Finance and Leasing"
  ],
  "Logistics, Transport & Port Services": [
    "Crew Transport & Transfers",
    "Customs, Clearance & Documentation",
    "Freight Forwarding & Shipping",
    "Port Logistics & Stevedoring",
    "Road Transport & Heavy Lifting",
    "Ship Agency Services",
    "Vehicle Rental",
    "Warehousing & Storage"
  ],
  "Marine Equipment & Systems": [
    "Deck Machinery & Lifting Equipment",
    "DP Systems",
    "Mooring & Anchoring Systems",
    "Navigation & Communication Systems",
    "Power Generation & Energy Storage",
    "Propulsion & Thrusters",
    "Safety & Firefighting Equipment",
    "Subsea & Offshore Equipment"
  ],
  "Offshore & Marine Support Services": [
    "Diving Services",
    "Marine Coordination",
    "Offshore & Maritime Security",
    "Offshore Installation Support",
    "Project Management",
    "ROV & Inspection Services",
    "Survey & Positioning"
  ],
  "Offshore Wind & Renewable Services": [
    "Cable Laying & Protection",
    "Crew Transfer Vessels (CTV)",
    "Foundations & Substructures",
    "Inspection & Repair Services",
    "Operations & Maintenance (O&M)",
    "Service Operation Vessels (SOV)",
    "Wind Farm Installation"
  ],
  "Shipbuilding, Repair & Maintenance": [
    "Coating, Painting & Blasting",
    "Dry Docking",
    "Electrical & Automation",
    "HVAC & Ventilation",
    "Inspection, Survey & Certification",
    "Mechanical & Engine Services",
    "Ship Repair & Conversion",
    "Steel, Hull & Structural Works"
  ],
  "Shipyards & Newbuild Projects": [
    "Concept Design & Engineering",
    "Dredging Vessel Construction",
    "Newbuild Vessel Projects",
    "Offshore Wind Newbuilds",
    "Security & Patrol Vessel Programs",
    "Series & Semi-Series Production",
    "Specialized & Custom-Built Vessels",
    "Turnkey Shipbuilding"
  ],
  "Spare Parts & Consumables": [
    "Electrical & Electronic Components",
    "Engine & Machinery Spare Parts",
    "Filters, Lubricants & Fluids",
    "Hydraulic & Pneumatic Parts",
    "Safety Equipment & PPE",
    "Stores & Provisions",
    "Tools & Workshop Equipment"
  ],
  "Technology, Digital & Innovation": [
    "Automation & AI",
    "Cybersecurity",
    "Data Analytics",
    "Digital Twin Solutions",
    "Fleet Management Systems",
    "IoT & Remote Monitoring",
    "Maritime Software"
  ]
};

const REGIONS = [
  { name: "Australia / Oceania", x: 84.8, y: 78.3 },
  { name: "Central Africa", x: 53.3, y: 65.0 },
  { name: "East Africa", x: 58.1, y: 64.2 },
  { name: "East Asia", x: 77.6, y: 45.0 },
  { name: "Middle East", x: 58.1, y: 50.0 },
  { name: "North Africa", x: 51.4, y: 50.0 },
  { name: "North America", x: 22.0, y: 45.8 },
  { name: "Northern Europe", x: 53.8, y: 28.3 },
  { name: "South America", x: 31.4, y: 70.0 },
  { name: "South Asia", x: 68.6, y: 55.0 },
  { name: "Southeast Asia", x: 77.1, y: 62.5 },
  { name: "Southeastern Europe", x: 55.7, y: 40.0 },
  { name: "Southern Africa", x: 53.3, y: 78.3 },
  { name: "Southern Europe", x: 51.9, y: 38.3 },
  { name: "West Africa", x: 47.6, y: 60.8 },
  { name: "West Asia", x: 60.5, y: 39.2 }
];

const PARTNERS = [
  {
    region: "Northern Europe",
    country: "Netherlands",
    tier: "Industry Partner",
    category: "Shipbuilding, Repair & Maintenance",
    subcategories: [
      "Ship Repair & Conversion",
      "Dry Docking",
      "Steel, Hull & Structural Works"
    ],
    name: "Van Wijngaarden Marine Services",
    description: "Supporting maritime and offshore clients with reliable marine services across Northern Europe.",
    testimonial: "The partner program has strengthened our global reach and opened new opportunities.",
    contactName: "John Smith",
    contactTitle: "Managing Director",
    websiteUrl: "https://example.com",
    ctaLabel: "Visit Website",
    contactUrl: "mailto:contact@example.com?subject=Partner Network Inquiry",
    contactCtaLabel: "Contact Partner"
  },
  {
    region: "North America",
    country: "United States",
    tier: "Featured",
    category: "Logistics, Transport & Port Services",
    subcategories: [
      "Port Logistics & Stevedoring",
      "Road Transport & Heavy Lifting",
      "Warehousing & Storage"
    ],
    name: "Example Marine Services",
    description: "Providing regional vessel support and marine services for offshore and coastal projects.",
    testimonial: "",
    contactName: "Jane Doe",
    contactTitle: "Commercial Director",
    websiteUrl: "https://example.com",
    ctaLabel: "Learn More",
    contactUrl: "mailto:contact@example.com?subject=Partner Network Inquiry",
    contactCtaLabel: "Contact Partner"
  },
  {
    region: "Southeast Asia",
    country: "Singapore",
    tier: "Industry Partner",
    category: "Offshore & Marine Support Services",
    subcategories: [
      "Offshore Installation Support",
      "Marine Coordination",
      "Project Management"
    ],
    name: "Example Offshore Asia",
    description: "Supporting offshore projects across Southeast Asia with regional maritime expertise.",
    testimonial: "",
    contactName: "Alex Tan",
    contactTitle: "General Manager",
    websiteUrl: "https://example.com",
    ctaLabel: "Visit Website",
    contactUrl: "mailto:contact@example.com?subject=Partner Network Inquiry",
    contactCtaLabel: "Contact Partner"
  }
];

const root = document.getElementById("partner-map-app");

let activeKeyword = "";
let activeCategory = "All Categories";
let activeSubcategory = "All Subcategories";
let activeRegion = "All Regions";

const categoryOptions = ["All Categories"].concat(Object.keys(CATEGORY_TREE).sort());
const regionOptions = ["All Regions"].concat(REGIONS.map(region => region.name).sort());

root.innerHTML = `
  <div class="map-module">
    <div class="map-stage">
      <img src="${MAP_IMAGE_URL}" class="map-image" alt="Interactive global partner network map" />

      <div class="filter-bar">
        <label class="filter-label">
          Keyword Search
          <div class="keyword-wrap">
            <input class="filter-input keyword-search" type="search" placeholder="Search partners, countries, services..." autocomplete="off" />
            <div class="keyword-results"></div>
          </div>
        </label>

        <label class="filter-label">
          Partner Category
          <div class="typeahead-wrap">
            <input class="filter-input category-input" type="search" placeholder="Type category..." autocomplete="off" />
            <div class="typeahead-results category-results"></div>
          </div>
        </label>

        <label class="filter-label">
          Partner Subcategory
          <div class="typeahead-wrap">
            <input class="filter-input subcategory-input" type="search" placeholder="Type subcategory..." autocomplete="off" />
            <div class="typeahead-results subcategory-results"></div>
          </div>
        </label>

        <label class="filter-label">
          Region
          <div class="typeahead-wrap">
            <input class="filter-input region-input" type="search" placeholder="Type region..." autocomplete="off" />
            <div class="typeahead-results region-results"></div>
          </div>
        </label>

        <div class="clear-filters-wrap">
          <button class="clear-filters-button" type="button" aria-label="Clear all filters" title="Clear all filters">×</button>
        </div>
      </div>

      <div class="modal" role="dialog" aria-modal="true" aria-label="Partner details">
        <div class="modal-card"></div>
      </div>
    </div>

    <section class="testimonial-section">
      <div class="testimonial-header">
        <div class="testimonial-kicker">Partner Testimonials</div>
        <h2 class="testimonial-title">Trusted Partner Feedback</h2>
        <div class="testimonial-subtitle">Partners with testimonials are highlighted on the map and shown below.</div>
      </div>
      <div class="testimonial-grid"></div>
    </section>
  </div>
`;

const stage = root.querySelector(".map-stage");
const keywordSearch = root.querySelector(".keyword-search");
const keywordResults = root.querySelector(".keyword-results");
const categoryInput = root.querySelector(".category-input");
const subcategoryInput = root.querySelector(".subcategory-input");
const regionInput = root.querySelector(".region-input");
const categoryResults = root.querySelector(".category-results");
const subcategoryResults = root.querySelector(".subcategory-results");
const regionResults = root.querySelector(".region-results");
const clearFiltersButton = root.querySelector(".clear-filters-button");
const modal = root.querySelector(".modal");
const modalCard = root.querySelector(".modal-card");
const testimonialGrid = root.querySelector(".testimonial-grid");

renderAll();

function renderAll() {
  const partners = getFilteredPartners();
  renderFilters();
  renderRegionPins(partners);
  renderTestimonials(partners);
  renderKeywordResults();
}

function getFilteredPartners() {
  const keyword = activeKeyword.trim().toLowerCase();

  return PARTNERS.filter(partner => {
    const searchableText = [
      partner.name,
      partner.country,
      partner.region,
      partner.tier,
      partner.category,
      Array.isArray(partner.subcategories) ? partner.subcategories.join(" ") : "",
      partner.description,
      partner.testimonial,
      partner.contactName,
      partner.contactTitle
    ]
      .filter(Boolean)
      .join(" ")
      .toLowerCase();

    const keywordMatch = !keyword || searchableText.includes(keyword);
    const categoryMatch = activeCategory === "All Categories" || partner.category === activeCategory;
    const subcategoryMatch = activeSubcategory === "All Subcategories" || partnerHasSubcategory(partner, activeSubcategory);
    const regionMatch = activeRegion === "All Regions" || partner.region === activeRegion;

    return keywordMatch && categoryMatch && subcategoryMatch && regionMatch;
  });
}

function anyFilterActive() {
  return activeKeyword.trim() !== "" ||
    activeCategory !== "All Categories" ||
    activeSubcategory !== "All Subcategories" ||
    activeRegion !== "All Regions";
}

function renderFilters() {
  keywordSearch.value = activeKeyword;

  keywordSearch.oninput = function () {
    activeKeyword = keywordSearch.value;
    closeModal();
    renderAll();
  };

  keywordSearch.onfocus = renderKeywordResults;

  keywordSearch.onblur = function () {
    setTimeout(() => keywordResults.classList.remove("is-open"), 180);
  };

  let subcategoryOptions = [];

  if (activeCategory === "All Categories") {
    Object.keys(CATEGORY_TREE).forEach(category => {
      subcategoryOptions = subcategoryOptions.concat(CATEGORY_TREE[category]);
    });
  } else {
    subcategoryOptions = CATEGORY_TREE[activeCategory] || [];
  }

  subcategoryOptions = ["All Subcategories"].concat(unique(subcategoryOptions).sort());

  if (!subcategoryOptions.includes(activeSubcategory)) {
    activeSubcategory = "All Subcategories";
  }

  categoryInput.value = activeCategory === "All Categories" ? "" : activeCategory;
  subcategoryInput.value = activeSubcategory === "All Subcategories" ? "" : activeSubcategory;
  regionInput.value = activeRegion === "All Regions" ? "" : activeRegion;

  bindTypeaheadFilter({
    input: categoryInput,
    results: categoryResults,
    options: categoryOptions,
    emptyLabel: "All Categories",
    onSelect: value => {
      activeCategory = value || "All Categories";
      activeSubcategory = "All Subcategories";
      closeModal();
      renderAll();
    }
  });

  bindTypeaheadFilter({
    input: subcategoryInput,
    results: subcategoryResults,
    options: subcategoryOptions,
    emptyLabel: "All Subcategories",
    onSelect: value => {
      activeSubcategory = value || "All Subcategories";
      closeModal();
      renderAll();
    }
  });

  bindTypeaheadFilter({
    input: regionInput,
    results: regionResults,
    options: regionOptions,
    emptyLabel: "All Regions",
    onSelect: value => {
      activeRegion = value || "All Regions";
      closeModal();
      renderAll();
    }
  });

  clearFiltersButton.classList.toggle("is-disabled", !anyFilterActive());
  clearFiltersButton.onclick = clearAllFilters;
}

function bindTypeaheadFilter(config) {
  const input = config.input;
  const results = config.results;
  const options = config.options || [];
  const emptyLabel = config.emptyLabel;
  const onSelect = config.onSelect;

  let activeIndex = -1;
  let currentMatches = [];

  function selectValue(value) {
    input.value = value === emptyLabel ? "" : value;
    results.classList.remove("is-open");
    activeIndex = -1;
    onSelect(value);
  }

  function updateActiveOption() {
    const buttons = results.querySelectorAll(".typeahead-option");

    buttons.forEach((button, index) => {
      button.classList.toggle("is-active", index === activeIndex);

      if (index === activeIndex) {
        button.scrollIntoView({ block: "nearest" });
      }
    });
  }

  function renderMatches() {
    const query = input.value.trim().toLowerCase();

    currentMatches = options
      .filter(option => !query || String(option).toLowerCase().includes(query))
      .slice(0, 8);

    activeIndex = currentMatches.length ? 0 : -1;

    if (!currentMatches.length) {
      results.innerHTML = `<div class="typeahead-empty">No matching options</div>`;
      results.classList.add("is-open");
      return;
    }

    results.innerHTML = currentMatches.map((option, index) => `
      <button type="button" class="typeahead-option ${index === activeIndex ? "is-active" : ""}" data-value="${escapeAttr(option)}">
        ${escapeHtml(option)}
      </button>
    `).join("");

    results.classList.add("is-open");

    results.querySelectorAll(".typeahead-option").forEach(button => {
      button.addEventListener("mousedown", event => event.preventDefault());
      button.addEventListener("click", () => selectValue(button.getAttribute("data-value")));
    });
  }

  input.onfocus = renderMatches;

  input.oninput = function () {
    const typedValue = input.value.trim();

    renderMatches();

    if (!typedValue) {
      onSelect(emptyLabel);
      return;
    }

    const exactMatch = options.find(option => option.toLowerCase() === typedValue.toLowerCase());

    if (exactMatch) {
      onSelect(exactMatch);
    }
  };

  input.onkeydown = function (event) {
    const isOpen = results.classList.contains("is-open");

    if (event.key === "ArrowDown") {
      event.preventDefault();

      if (!isOpen) {
        renderMatches();
        return;
      }

      if (!currentMatches.length) return;

      activeIndex = activeIndex < currentMatches.length - 1 ? activeIndex + 1 : 0;
      updateActiveOption();
      return;
    }

    if (event.key === "ArrowUp") {
      event.preventDefault();

      if (!isOpen) {
        renderMatches();
        return;
      }

      if (!currentMatches.length) return;

      activeIndex = activeIndex > 0 ? activeIndex - 1 : currentMatches.length - 1;
      updateActiveOption();
      return;
    }

    if (event.key === "Enter") {
      event.preventDefault();

      if (!isOpen) {
        renderMatches();
        return;
      }

      if (activeIndex >= 0 && currentMatches[activeIndex]) {
        selectValue(currentMatches[activeIndex]);
      }

      return;
    }

    if (event.key === "Escape") {
      results.classList.remove("is-open");
      activeIndex = -1;
    }
  };

  input.onblur = function () {
    setTimeout(() => {
      results.classList.remove("is-open");
      activeIndex = -1;
    }, 180);
  };
}

function renderKeywordResults() {
  const keyword = activeKeyword.trim().toLowerCase();

  if (!keyword) {
    keywordResults.classList.remove("is-open");
    keywordResults.innerHTML = "";
    return;
  }

  const matches = getFilteredPartners().slice(0, 6);

  if (!matches.length) {
    keywordResults.innerHTML = `<div class="keyword-empty">No partner results found</div>`;
    keywordResults.classList.add("is-open");
    return;
  }

  keywordResults.innerHTML = matches.map(partner => `
    <button type="button" class="keyword-result" data-partner-index="${PARTNERS.indexOf(partner)}">
      <span class="keyword-result-name">${escapeHtml(partner.name)}</span>
      <span class="keyword-result-meta">${escapeHtml(partner.country)} · ${escapeHtml(partner.region)}</span>
      <span class="keyword-result-category">${escapeHtml(partner.category || "Industry Partner")}</span>
    </button>
  `).join("");

  keywordResults.classList.add("is-open");

  keywordResults.querySelectorAll(".keyword-result").forEach(button => {
    button.addEventListener("click", () => {
      const partner = PARTNERS[Number(button.getAttribute("data-partner-index"))];

      keywordResults.classList.remove("is-open");

      if (partner) openPartnerDetail(partner);
    });
  });
}

function renderRegionPins(filteredPartners) {
  root.querySelectorAll(".region-pin").forEach(pin => pin.remove());

  REGIONS.forEach(region => {
    const regionPartnersAll = PARTNERS.filter(partner => partner.region === region.name).sort(sortPartners);
    const regionPartnersVisible = filteredPartners.filter(partner => partner.region === region.name).sort(sortPartners);
    const testimonialPartnersVisible = regionPartnersVisible.filter(hasPartnerTestimonial);
    const hasVisibleTestimonials = testimonialPartnersVisible.length > 0;

    const button = document.createElement("button");
    button.type = "button";
    button.className = "region-pin" + (hasVisibleTestimonials ? " has-testimonial" : "");
    button.style.left = Number(region.x) + "%";
    button.style.top = Number(region.y) + "%";
    button.setAttribute("aria-label", region.name);

    if (regionPartnersAll.length || activeSubcategory !== "All Subcategories") {
      button.innerHTML = `
        <span class="pin-tip">
          <span class="tip-region-name">${escapeHtml(region.name)}</span>
          <span class="tip-action">
            ${activeSubcategory !== "All Subcategories"
              ? "Click to open this regional subcategory view."
              : "Click to open this region view."}
          </span>
          ${hasVisibleTestimonials
            ? `<span class="tip-partner-list">${testimonialPartnersVisible.slice(0, 4).map(regionPinPartnerPreviewTemplate).join("")}</span>`
            : ""}
        </span>
      `;
    } else {
      button.title = region.name;
    }

    button.addEventListener("click", () => {
      if (activeSubcategory !== "All Subcategories") {
        window.location.hash = `region/${slugify(region.name)}/${slugify(activeSubcategory)}`;
        return;
      }

      if (anyFilterActive() || !regionPartnersAll.length) {
        window.location.hash = `region/${slugify(region.name)}`;
        return;
      }

      openRegionDetail(region.name);
    });

    stage.appendChild(button);
  });
}

function openRegionDetail(regionName) {
  const partners = PARTNERS
    .filter(partner => partner.region === regionName)
    .sort(sortPartners);

  if (!partners.length) {
    window.location.hash = `region/${slugify(regionName)}`;
    return;
  }

  modalCard.innerHTML = `
    <div class="modal-header">
      <div class="modal-kicker">Partner Region</div>
      <div class="modal-title-row">
        <div class="modal-title">${escapeHtml(regionName)}</div>
        <div class="modal-actions">
          <a class="modal-link" href="#region/${slugify(regionName)}">View Region Page</a>
          <button class="close-modal" type="button" aria-label="Close partner details">×</button>
        </div>
      </div>
    </div>
    <div class="modal-body">
      <div class="partner-list">${partners.map(partnerCardTemplate).join("")}</div>
    </div>
  `;

  openModal();
}

function openPartnerDetail(partner) {
  if (!partner) return;

  modalCard.innerHTML = `
    <div class="modal-header">
      <div class="modal-kicker">Partner Profile</div>
      <div class="modal-title-row">
        <div></div>
        <div class="modal-actions">
          <a class="modal-link" href="#region/${slugify(partner.region)}">View Region Page</a>
          <button class="close-modal" type="button" aria-label="Close partner details">×</button>
        </div>
      </div>
    </div>
    <div class="modal-body">
      <div class="partner-list">${partnerCardTemplate(partner)}</div>
    </div>
  `;

  openModal();
}

function partnerCardTemplate(partner) {
  const subcategories = Array.isArray(partner.subcategories) ? partner.subcategories.join(", ") : "";

  const contact = partner.contactName || partner.contactTitle
    ? `<div class="partner-meta">${escapeHtml(partner.contactName || "")}${partner.contactTitle ? ` · ${escapeHtml(partner.contactTitle)}` : ""}</div>`
    : "";

  const description = partner.description
    ? `<div class="partner-description">${escapeHtml(partner.description)}</div>`
    : "";

  const testimonial = partner.testimonial
    ? `<div class="partner-testimonial">“${escapeHtml(partner.testimonial)}”</div>`
    : "";

  const websiteLink = partner.websiteUrl
    ? `<a class="card-link" href="${escapeAttr(partner.websiteUrl)}" target="_blank" rel="noopener">${escapeHtml(partner.ctaLabel || "Visit Website")}</a>`
    : "";

  const contactLink = partner.contactUrl
    ? `<a class="contact-link" href="${escapeAttr(partner.contactUrl)}">${escapeHtml(partner.contactCtaLabel || "Contact Partner")}</a>`
    : "";

  return `
    <article class="partner-card">
      <div class="partner-card-top">
        <div>
          <div class="partner-name">${escapeHtml(partner.name)}</div>
          <div class="partner-meta">${escapeHtml(partner.country)} · ${escapeHtml(partner.region)}</div>
        </div>
        <span class="partner-badge">${escapeHtml(partner.tier || "Industry Partner")}</span>
      </div>

      <div class="partner-meta partner-category">
        ${escapeHtml(partner.category || "Industry Partner")}${subcategories ? ` · ${escapeHtml(subcategories)}` : ""}
      </div>

      ${contact}
      ${description}
      ${testimonial}

      ${websiteLink || contactLink ? `<div class="card-actions">${websiteLink}${contactLink}</div>` : ""}
    </article>
  `;
}

function renderTestimonials(partners) {
  const testimonialPartners = partners.filter(hasPartnerTestimonial).sort(sortPartners);

  if (!testimonialPartners.length) {
    testimonialGrid.innerHTML = `
      <div class="testimonial-card">
        <div class="testimonial-name">No partner testimonials match this filter</div>
        <div class="testimonial-meta">Try a different category, subcategory, keyword, or region.</div>
      </div>
    `;
    return;
  }

  testimonialGrid.innerHTML = testimonialPartners.map((partner, index) => `
    <article class="testimonial-card" role="button" tabindex="0" data-index="${index}">
      <span class="partner-badge">${escapeHtml(partner.tier || "Industry Partner")}</span>
      <div class="testimonial-name">${escapeHtml(partner.name)}</div>
      <div class="testimonial-meta">${escapeHtml(partner.country)} · ${escapeHtml(partner.region)} · ${escapeHtml(partner.category || "Industry Partner")}</div>
      <div class="partner-testimonial">“${escapeHtml(partner.testimonial)}”</div>
    </article>
  `).join("");

  testimonialGrid.querySelectorAll(".testimonial-card").forEach(card => {
    card.addEventListener("click", () => {
      const partner = testimonialPartners[Number(card.getAttribute("data-index"))];
      openPartnerDetail(partner);
    });

    card.addEventListener("keydown", event => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        const partner = testimonialPartners[Number(card.getAttribute("data-index"))];
        openPartnerDetail(partner);
      }
    });
  });
}

function regionPinPartnerPreviewTemplate(partner) {
  const contact = partner.contactName || partner.contactTitle
    ? `<span class="tip-partner-contact">${escapeHtml(partner.contactName || "")}${partner.contactTitle ? `<br>${escapeHtml(partner.contactTitle)}` : ""}</span>`
    : "";

  return `
    <span class="tip-partner">
      <span class="tip-partner-name">${escapeHtml(partner.name)}</span>
      ${contact}
    </span>
  `;
}

function clearAllFilters() {
  activeKeyword = "";
  activeCategory = "All Categories";
  activeSubcategory = "All Subcategories";
  activeRegion = "All Regions";

  keywordResults.classList.remove("is-open");
  closeModal();
  renderAll();
}

function openModal() {
  modal.classList.add("is-open");
  const closeButton = modalCard.querySelector(".close-modal");

  if (closeButton) {
    closeButton.addEventListener("click", closeModal);
    closeButton.focus();
  }
}

function closeModal() {
  modal.classList.remove("is-open");
  modalCard.innerHTML = "";
}

modal.addEventListener("click", event => {
  if (event.target === modal) closeModal();
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape" && modal.classList.contains("is-open")) {
    closeModal();
  }
});

function partnerHasSubcategory(partner, subcategory) {
  return Array.isArray(partner.subcategories) && partner.subcategories.includes(subcategory);
}

function hasPartnerTestimonial(partner) {
  return Boolean(partner.testimonial && String(partner.testimonial).trim());
}

function sortPartners(a, b) {
  return String(a.name || "").localeCompare(String(b.name || ""));
}

function unique(items) {
  return items.filter((item, index, self) => self.indexOf(item) === index);
}

function slugify(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/\bp\s*&\s*i\b/g, "p and i")
    .replace(/&/g, " and ")
    .replace(/\+/g, " and ")
    .replace(/\//g, " ")
    .replace(/[().,]/g, " ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .replace(/-+/g, "-");
}

function escapeHtml(value) {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function escapeAttr(value) {
  return escapeHtml(value);
}
