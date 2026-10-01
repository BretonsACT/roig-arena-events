// Roig Arena Events Calendar App Logic

const ROIG_EVENTS = [
  {
    id: "roig-1",
    title: "Yandel Sinfónico",
    category: "Concert",
    date: "2026-07-31",
    startTime: "21:00",
    endTime: "23:30",
    location: "Roig Arena, Av. de Fernando Abril Martorell, 46013 Valencia, Spain",
    description: "Yandel presents Yandel Sinfónico live in concert at Roig Arena Valencia.",
    url: "https://www.roigarena.com/"
  },
  {
    id: "roig-2",
    title: "Las Noches del Arena - Reguetón de Siempre",
    category: "Party",
    date: "2026-07-31",
    startTime: "23:00",
    endTime: "03:00",
    location: "Roig Arena, Av. de Fernando Abril Martorell, 46013 Valencia, Spain",
    description: "Las Noches del Arena featuring iconic Latin Reguetón hitmakers live.",
    url: "https://www.roigarena.com/"
  },
  {
    id: "roig-3",
    title: "Mumiy Troll Live",
    category: "Concert",
    date: "2026-08-15",
    startTime: "20:00",
    endTime: "22:30",
    location: "Roig Arena, Av. de Fernando Abril Martorell, 46013 Valencia, Spain",
    description: "Mumiy Troll live in concert at Roig Arena Valencia.",
    url: "https://www.roigarena.com/"
  },
  {
    id: "roig-4",
    title: "Judas Priest - Heavy Metal Night",
    category: "Concert",
    date: "2026-08-20",
    startTime: "21:00",
    endTime: "23:30",
    location: "Roig Arena, Av. de Fernando Abril Martorell, 46013 Valencia, Spain",
    description: "Heavy Metal legends Judas Priest performing live at Roig Arena Valencia.",
    url: "https://www.roigarena.com/"
  },
  {
    id: "roig-5",
    title: "The Waterboys feat. Steve Earle",
    category: "Concert",
    date: "2026-09-03",
    startTime: "21:00",
    endTime: "23:30",
    location: "Roig Arena, Av. de Fernando Abril Martorell, 46013 Valencia, Spain",
    description: "Fisherman's Blues Revue featuring Steve Earle live at Roig Arena Valencia.",
    url: "https://www.roigarena.com/"
  },
  {
    id: "roig-6",
    title: "La Oreja de Van Gogh (Night 1)",
    category: "Concert",
    date: "2026-09-04",
    startTime: "21:00",
    endTime: "23:30",
    location: "Roig Arena, Av. de Fernando Abril Martorell, 46013 Valencia, Spain",
    description: "Tantas Cosas Que Contar Tour 2026 - First night at Roig Arena.",
    url: "https://www.roigarena.com/"
  },
  {
    id: "roig-7",
    title: "La Oreja de Van Gogh (Night 2)",
    category: "Concert",
    date: "2026-09-05",
    startTime: "21:00",
    endTime: "23:30",
    location: "Roig Arena, Av. de Fernando Abril Martorell, 46013 Valencia, Spain",
    description: "Tantas Cosas Que Contar Tour 2026 - Second night at Roig Arena.",
    url: "https://www.roigarena.com/"
  },
  {
    id: "roig-8",
    title: "El Kuelgue",
    category: "Concert",
    date: "2026-09-06",
    startTime: "20:00",
    endTime: "22:30",
    location: "Roig Arena, Av. de Fernando Abril Martorell, 46013 Valencia, Spain",
    description: "El Kuelgue performing live at Roig Arena Valencia.",
    url: "https://www.roigarena.com/"
  },
  {
    id: "roig-9",
    title: "Valencia Basket vs FC Barcelona (Liga Endesa Opener)",
    category: "Sports",
    date: "2026-09-27",
    startTime: "18:30",
    endTime: "20:30",
    location: "Roig Arena, Av. de Fernando Abril Martorell, 46013 Valencia, Spain",
    description: "Liga Endesa 2026-2027 season opening match at Roig Arena Valencia.",
    url: "https://www.valenciabasket.com/"
  },
  {
    id: "roig-10",
    title: "Valencia Basket Femení vs Perfumerías Avenida",
    category: "Sports",
    date: "2026-10-09",
    startTime: "19:15",
    endTime: "21:15",
    location: "Roig Arena, Av. de Fernando Abril Martorell, 46013 Valencia, Spain",
    description: "Liga Femenina Endesa fixture at Roig Arena Valencia.",
    url: "https://www.valenciabasket.com/"
  },
  {
    id: "roig-11",
    title: "Valencia Basket vs Real Madrid",
    category: "Sports",
    date: "2026-10-18",
    startTime: "18:30",
    endTime: "20:30",
    location: "Roig Arena, Av. de Fernando Abril Martorell, 46013 Valencia, Spain",
    description: "Liga Endesa regular season basketball match at Roig Arena.",
    url: "https://www.valenciabasket.com/"
  },
  {
    id: "roig-12",
    title: "Valencia Basket vs FC Barcelona (EuroLeague)",
    category: "Sports",
    date: "2026-10-29",
    startTime: "20:30",
    endTime: "22:30",
    location: "Roig Arena, Av. de Fernando Abril Martorell, 46013 Valencia, Spain",
    description: "Turkish Airlines EuroLeague basketball fixture at Roig Arena.",
    url: "https://www.valenciabasket.com/"
  },
  {
    id: "roig-13",
    title: "Bryan Adams - Roll With The Punches",
    category: "Concert",
    date: "2026-11-08",
    startTime: "21:00",
    endTime: "23:30",
    location: "Roig Arena, Av. de Fernando Abril Martorell, 46013 Valencia, Spain",
    description: "Bryan Adams live at Roig Arena Valencia.",
    url: "https://www.roigarena.com/"
  },
  {
    id: "roig-14",
    title: "Valencia Basket vs Panathinaikos AKTOR",
    category: "Sports",
    date: "2026-11-19",
    startTime: "20:45",
    endTime: "22:45",
    location: "Roig Arena, Av. de Fernando Abril Martorell, 46013 Valencia, Spain",
    description: "EuroLeague regular season match vs Panathinaikos at Roig Arena.",
    url: "https://www.valenciabasket.com/"
  },
  {
    id: "roig-15",
    title: "Valencia Basket vs Unicaja Málaga",
    category: "Sports",
    date: "2026-12-20",
    startTime: "18:30",
    endTime: "20:30",
    location: "Roig Arena, Av. de Fernando Abril Martorell, 46013 Valencia, Spain",
    description: "Liga Endesa regular season fixture vs Unicaja Málaga at Roig Arena.",
    url: "https://www.valenciabasket.com/"
  },
  {
    id: "roig-16",
    title: "Valencia Basket vs Olympiacos BC",
    category: "Sports",
    date: "2027-01-14",
    startTime: "20:30",
    endTime: "22:30",
    location: "Roig Arena, Av. de Fernando Abril Martorell, 46013 Valencia, Spain",
    description: "EuroLeague regular season match vs Olympiacos BC at Roig Arena.",
    url: "https://www.valenciabasket.com/"
  },
  {
    id: "roig-17",
    title: "Copa del Rey de Baloncesto 2027",
    category: "Sports",
    date: "2027-02-18",
    startTime: "18:00",
    endTime: "23:00",
    location: "Roig Arena, Av. de Fernando Abril Martorell, 46013 Valencia, Spain",
    description: "Official Copa del Rey 2027 tournament hosted at Roig Arena Valencia.",
    url: "https://www.valenciabasket.com/"
  },
  {
    id: "roig-18",
    title: "Valencia Basket Femení vs Casademont Zaragoza",
    category: "Sports",
    date: "2027-03-20",
    startTime: "18:00",
    endTime: "20:00",
    location: "Roig Arena, Av. de Fernando Abril Martorell, 46013 Valencia, Spain",
    description: "Liga Femenina Endesa match at Roig Arena Valencia.",
    url: "https://www.valenciabasket.com/"
  },
  {
    id: "roig-19",
    title: "Thirty Seconds To Mars",
    category: "Concert",
    date: "2027-04-09",
    startTime: "21:00",
    endTime: "23:30",
    location: "Roig Arena, Av. de Fernando Abril Martorell, 46013 Valencia, Spain",
    description: "Thirty Seconds To Mars World Tour at Roig Arena Valencia.",
    url: "https://www.roigarena.com/"
  },
  {
    id: "roig-20",
    title: "Valencia Basket vs Baskonia",
    category: "Sports",
    date: "2027-04-18",
    startTime: "18:30",
    endTime: "20:30",
    location: "Roig Arena, Av. de Fernando Abril Martorell, 46013 Valencia, Spain",
    description: "Liga Endesa regular season fixture vs Baskonia at Roig Arena.",
    url: "https://www.valenciabasket.com/"
  },
  {
    id: "roig-21",
    title: "Hans Zimmer Live",
    category: "Concert",
    date: "2027-05-10",
    startTime: "20:00",
    endTime: "23:00",
    location: "Roig Arena, Av. de Fernando Abril Martorell, 46013 Valencia, Spain",
    description: "Hans Zimmer Live - The Next Level with full orchestral score.",
    url: "https://www.roigarena.com/"
  }
];

let eventsState = [...ROIG_EVENTS];
let currentCategory = "All";
let searchQuery = "";

document.addEventListener("DOMContentLoaded", () => {
  initFeedUrl();
  loadLiveStatus();
  loadLiveEvents();
  renderEvents();
  setupEventListeners();
  updateStats();
  renderGuideTab('gcal');
});

function getIcsHttpUrl() {
  const loc = window.location;
  if (loc.protocol === 'file:' || !loc.host.includes('github.io')) {
    return 'https://bretonsact.github.io/roig-arena-events/Roig_Arena_Events.ics';
  }
  const basePath = loc.pathname.substring(0, loc.pathname.lastIndexOf('/') + 1);
  return `${loc.protocol}//${loc.host}${basePath}Roig_Arena_Events.ics`;
}

function getWebcalUrl() {
  const httpUrl = getIcsHttpUrl();
  return httpUrl.replace(/^https?:/, 'webcal:');
}

function initFeedUrl() {
  const urlInput = document.getElementById("feedUrlInput");
  if (urlInput) {
    urlInput.value = getIcsHttpUrl();
  }
}

function subscribeWebcal() {
  const webcal = getWebcalUrl();
  window.open(webcal, '_self');
  showToast("📡 Launching calendar app to subscribe...");
}

function copyIcsUrl() {
  const url = getIcsHttpUrl();
  navigator.clipboard.writeText(url).then(() => {
    showToast("📋 iCal Feed URL copied to clipboard!");
  }).catch(() => {
    const input = document.getElementById("feedUrlInput");
    if (input) {
      input.select();
      document.execCommand('copy');
      showToast("📋 iCal Feed URL copied to clipboard!");
    }
  });
}

function loadLiveStatus() {
  fetch('status.json')
    .then(res => res.json())
    .then(data => {
      if (data && data.last_updated) {
        const d = new Date(data.last_updated);
        const timeStr = d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        const dateStr = d.toLocaleDateString([], { month: 'short', day: 'numeric' });
        
        const badge = document.getElementById("syncBadgeText");
        const statusTime = document.getElementById("syncStatusTime");
        const statusLabel = document.getElementById("syncStatusLabel");

        if (badge) {
          if (data.all_three_webs_verified) {
            badge.innerText = `✓ 3 Webs Verified & Auto-Synced (${dateStr} ${timeStr})`;
          } else {
            badge.innerText = `Live WebCAL Feed Auto-Synced (${dateStr} ${timeStr})`;
          }
        }
        if (statusTime) statusTime.innerText = `${data.total_events || timeStr}`;
        if (statusLabel) statusLabel.innerText = `Live Events Verified`;
      }
    })
    .catch(() => {
      // Offline or local file preview fallback
    });
}

function loadLiveEvents() {
  fetch('events.json')
    .then(res => {
      if (!res.ok) throw new Error("Status " + res.status);
      return res.json();
    })
    .then(data => {
      if (Array.isArray(data) && data.length > 0) {
        eventsState = data.map((evt, idx) => {
          const startIso = evt.start || "";
          const endIso = evt.end || "";
          const dateStr = startIso.includes("T") ? startIso.split("T")[0] : startIso;
          const timePart = startIso.includes("T") ? startIso.split("T")[1].substring(0, 5) : "20:00";
          const endTimePart = endIso.includes("T") ? endIso.split("T")[1].substring(0, 5) : "22:30";
          
          return {
            id: `roig-${idx + 1}`,
            title: evt.title || (evt.summary || "").replace(/\s*-\s*Roig Arena$/i, ''),
            category: evt.category || "Concert",
            date: dateStr,
            startTime: timePart,
            endTime: endTimePart,
            location: evt.location || "Roig Arena, Av. de Fernando Abril Martorell, 46013 Valencia, Spain",
            description: evt.description || "",
            url: evt.url || "https://www.roigarena.com/",
            ticket_url: evt.ticket_url || evt.url || "https://www.roigarena.com/",
            image_url: evt.image_url || "",
            sources: evt.sources || []
          };
        });
        renderEvents();
        updateStats();
      }
    })
    .catch(err => {
      console.debug("Fallback to bundled static events list:", err);
    });
}

function renderEvents() {
  const container = document.getElementById("eventsContainer");
  const filtered = eventsState.filter(e => {
    const matchesCat = currentCategory === "All" || e.category.toLowerCase() === currentCategory.toLowerCase();
    const q = searchQuery.toLowerCase().trim();
    const matchesSearch = !q || e.title.toLowerCase().includes(q) || e.description.toLowerCase().includes(q) || e.category.toLowerCase().includes(q);
    return matchesCat && matchesSearch;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; color: var(--text-muted);">
        <p style="font-size: 16px; font-weight: 600; margin-bottom: 8px;">No events match your criteria</p>
        <p style="font-size: 13px;">Try adjusting your category filter or search terms.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(evt => {
    const d = new Date(evt.date);
    const day = evt.date.split('-')[2] || '01';
    const monthStr = !isNaN(d.getTime()) ? d.toLocaleString('en-US', { month: 'short' }) : 'TBD';
    const yearStr = !isNaN(d.getTime()) ? d.getFullYear() : '';
    const isSports = (evt.category || '').toLowerCase() === 'sports';
    const isParty = (evt.category || '').toLowerCase() === 'party';
    
    const catClass = isSports ? 'sports' : isParty ? 'party' : '';
    const gcalUrl = buildGcalUrl(evt);

    return `
      <div class="event-card ${catClass}">
        <div>
          ${evt.image_url ? `
            <div class="event-image-container">
              <img src="${evt.image_url}" alt="${evt.title}" loading="lazy" class="event-thumb" onerror="this.parentElement.style.display='none'">
            </div>
          ` : ''}
          <div class="event-header">
            <span class="category-tag ${catClass}">${evt.category}</span>
            <div class="event-date-box">
              <div class="day">${day}</div>
              <div class="month">${monthStr} ${yearStr}</div>
            </div>
          </div>
          <h3 class="event-title">${evt.title}</h3>
          <p class="event-desc">${evt.description}</p>
          <div class="event-meta">
            <div class="event-meta-item">
              <span>🕒</span>
              <span>${evt.startTime} - ${evt.endTime} (CEST)</span>
            </div>
            <div class="event-meta-item">
              <span>📍</span>
              <span>${evt.location.split(',')[0]}</span>
            </div>
          </div>
        </div>
        <div class="event-footer">
          <a href="${gcalUrl}" target="_blank" class="btn btn-primary" title="Add this event to your Google Calendar">
            <span>📅</span> Add to GCal
          </a>
          ${evt.ticket_url && evt.ticket_url !== evt.url ? `
            <a href="${evt.ticket_url}" target="_blank" class="btn btn-secondary" title="Get Tickets">
              <span>🎟️</span> Tickets
            </a>
          ` : ''}
          <button class="btn btn-secondary" onclick="exportSingleIcs('${evt.id}')" title="Download .ics file">
            <span>📥</span> iCal
          </button>
        </div>
      </div>
    `;
  }).join('');
}

function buildGcalUrl(evt) {
  const title = encodeURIComponent(`${evt.title} - Roig Arena`);
  const details = encodeURIComponent(`${evt.description}\n\nVenue: Roig Arena Valencia\nOfficial Info: ${evt.url}`);
  const location = encodeURIComponent(evt.location);
  
  const dateFormatted = evt.date.replace(/-/g, '');
  const startFormatted = evt.startTime.replace(':', '') + '00';
  const endFormatted = evt.endTime.replace(':', '') + '00';

  const startUtc = `${dateFormatted}T${startFormatted}`;
  const endUtc = `${dateFormatted}T${endFormatted}`;

  return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&details=${details}&location=${location}&dates=${startUtc}/${endUtc}&ctz=Europe/Madrid`;
}

function setupEventListeners() {
  // Category Chips
  document.querySelectorAll('.filter-chip').forEach(chip => {
    chip.addEventListener('click', (e) => {
      document.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
      e.target.classList.add('active');
      currentCategory = e.target.getAttribute('data-cat');
      renderEvents();
    });
  });

  // Search Input
  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      renderEvents();
    });
  }

  // Guide Modal Tabs
  document.querySelectorAll('.guide-tab').forEach(tab => {
    tab.addEventListener('click', (e) => {
      document.querySelectorAll('.guide-tab').forEach(t => t.classList.remove('active'));
      e.target.classList.add('active');
      renderGuideTab(e.target.getAttribute('data-tab'));
    });
  });

  // Modal handlers
  const modal = document.getElementById('addEventModal');
  const openAddBtn = document.getElementById('openAddModalBtn');
  if (openAddBtn) {
    openAddBtn.addEventListener('click', () => {
      modal.classList.add('active');
    });
  }

  const closeAddBtn = document.getElementById('closeModalBtn');
  if (closeAddBtn) {
    closeAddBtn.addEventListener('click', () => {
      modal.classList.remove('active');
    });
  }

  document.getElementById('addEventForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const newEvt = {
      id: 'custom-' + Date.now(),
      title: document.getElementById('eventTitle').value,
      category: document.getElementById('eventCategory').value,
      date: document.getElementById('eventDate').value,
      startTime: document.getElementById('eventTime').value || "20:00",
      endTime: "22:30",
      location: "Roig Arena, Av. de Fernando Abril Martorell, 46013 Valencia, Spain",
      description: document.getElementById('eventDesc').value || "Custom event added to Roig Arena Events.",
      url: "https://www.roigarena.com/"
    };

    eventsState.unshift(newEvt);
    modal.classList.remove('active');
    renderEvents();
    updateStats();
    showToast("✓ Custom event added to your live view!");
  });
}

function openInstructionsModal() {
  document.getElementById('instructionsModal').classList.add('active');
}

function renderGuideTab(tabId) {
  const body = document.getElementById('guideBody');
  if (!body) return;

  const url = getIcsHttpUrl();

  if (tabId === 'gcal') {
    body.innerHTML = `
      <div class="guide-step">
        <div class="guide-step-num">1</div>
        <div>Copy the iCal Subscription Feed URL above.</div>
      </div>
      <div class="guide-step">
        <div class="guide-step-num">2</div>
        <div>Open <a href="https://calendar.google.com" target="_blank" style="color: var(--accent-blue);">Google Calendar</a> on your browser.</div>
      </div>
      <div class="guide-step">
        <div class="guide-step-num">3</div>
        <div>In the left sidebar, next to <strong>"Other calendars"</strong>, click <strong>+</strong> &rarr; <strong>From URL</strong>.</div>
      </div>
      <div class="guide-step">
        <div class="guide-step-num">4</div>
        <div>Paste the copied URL and click <strong>Add calendar</strong>. Google Calendar will now auto-sync all Roig Arena events!</div>
      </div>
    `;
  } else if (tabId === 'apple') {
    body.innerHTML = `
      <div class="guide-step">
        <div class="guide-step-num">1</div>
        <div>Click <strong>Subscribe via WebCAL</strong> button above on your iPhone, iPad, or Mac.</div>
      </div>
      <div class="guide-step">
        <div class="guide-step-num">2</div>
        <div>When prompted by iOS or macOS, click <strong>Subscribe</strong>.</div>
      </div>
      <div class="guide-step">
        <div class="guide-step-num">3</div>
        <div>Set Auto-Refresh frequency to <strong>Every Month</strong> (or <strong>Every Day</strong>) and tap Save.</div>
      </div>
    `;
  } else if (tabId === 'outlook') {
    body.innerHTML = `
      <div class="guide-step">
        <div class="guide-step-num">1</div>
        <div>Open <a href="https://outlook.live.com/calendar" target="_blank" style="color: var(--accent-blue);">Outlook Calendar</a>.</div>
      </div>
      <div class="guide-step">
        <div class="guide-step-num">2</div>
        <div>Click <strong>Add Calendar</strong> in the left pane &rarr; Select <strong>Subscribe from web</strong>.</div>
      </div>
      <div class="guide-step">
        <div class="guide-step-num">3</div>
        <div>Paste the feed URL, name it <strong>Roig Arena Events</strong>, and click <strong>Import</strong>.</div>
      </div>
    `;
  }
}

function updateStats() {
  document.getElementById("totalEventsCount").innerText = eventsState.length;
}

function exportAllIcs() {
  const link = document.createElement('a');
  link.href = 'Roig_Arena_Events.ics';
  link.download = 'Roig_Arena_Events.ics';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  showToast("✓ Downloaded full Roig_Arena_Events.ics file!");
}

function exportSingleIcs(eventId) {
  const evt = eventsState.find(e => e.id === eventId);
  if (!evt) return;

  const dateFormatted = evt.date.replace(/-/g, '');
  const startFormatted = evt.startTime.replace(':', '') + '00';
  const endFormatted = evt.endTime.replace(':', '') + '00';

  const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Roig Arena Valencia//EN
BEGIN:VEVENT
UID:${evt.id}@roigarena.com
DTSTART;TZID=Europe/Madrid:${dateFormatted}T${startFormatted}
DTEND;TZID=Europe/Madrid:${dateFormatted}T${endFormatted}
SUMMARY:${evt.title} - Roig Arena
LOCATION:${evt.location}
DESCRIPTION:${evt.description}
BEGIN:VALARM
ACTION:DISPLAY
DESCRIPTION:Reminder: ${evt.title} starting in 4 hours!
TRIGGER:-PT4H
END:VALARM
END:VEVENT
END:VCALENDAR`;

  const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${evt.title.replace(/[^a-zA-Z0-9]/g, '_')}.ics`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  showToast(`✓ Downloaded iCal file for ${evt.title}`);
}

function createGoogleCalendarPage() {
  window.open('https://calendar.google.com/calendar/r/settings/createcalendar', '_blank');
  showToast("Opening Google Calendar create calendar page...");
}

function showToast(message) {
  const container = document.getElementById('toastContainer');
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerText = message;
  container.appendChild(toast);
  setTimeout(() => {
    toast.remove();
  }, 4000);
}

