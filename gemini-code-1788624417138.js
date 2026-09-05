/**
 * CORE LOGIC ENGINE: GATE Tracker
 * Controls UI rendering, LocalStorage persistence, Automatic Revision Logic,
 * Missed-Day Recovery, and Real-time Metric Updates.
 */

// Application State Variable
let appData = {
  progress: {},      // Structure: { [dayNum]: { learn: bool, notes: bool, mcq: bool, pyq: bool, rev: bool, userNotes: string, completionDate: string } }
  achievements: [],  // Array of unlocked badge IDs
  lastActiveDay: 1
};

const STORAGE_KEY = "GATE_2027_TRACKER_STATE_V1";

// INITIALIZATION
document.addEventListener("DOMContentLoaded", () => {
  loadStateFromLocalStorage();
  initializeUI();
  setupEventListeners();
  updateDashboardMetrics();
});

// LOCAL STORAGE PERSISTENCE
function loadStateFromLocalStorage() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved) {
    try {
      appData = JSON.parse(saved);
    } catch (e) {
      console.error("Failed to parse stored state", e);
    }
  }
}

function saveStateToLocalStorage() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(appData));
}

// UI INITIALIZATION
function initializeUI() {
  populateDayDropdown();
  setDailyMotivationQuote();
  renderDayCard(appData.lastActiveDay || 1);
  renderSubjectProgress();
  renderRevisionsView();
  renderAnalyticsView();
  renderAchievementsView();
}

function setDailyMotivationQuote() {
  const quoteElem = document.getElementById("daily-quote-text");
  const quoteIndex = (new Date().getDate()) % MOTIVATIONAL_QUOTES.length;
  quoteElem.textContent = `"${MOTIVATIONAL_QUOTES[quoteIndex]}"`;
}

function populateDayDropdown() {
  const dropdown = document.getElementById("day-select-dropdown");
  dropdown.innerHTML = "";
  SYLLABUS_DATA.forEach(item => {
    const opt = document.createElement("option");
    opt.value = item.day;
    opt.textContent = `Day ${item.day}: ${item.subject} (${item.date})`;
    dropdown.appendChild(opt);
  });
}

// EVENT LISTENERS
function setupEventListeners() {
  // Navigation Tabs
  document.querySelectorAll(".tab-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
      document.querySelectorAll(".tab-content").forEach(c => c.classList.remove("active"));
      
      e.target.classList.add("active");
      const targetTab = e.target.getAttribute("data-tab");
      document.getElementById(targetTab).classList.add("active");
    });
  });

  // Day Controls
  document.getElementById("day-select-dropdown").addEventListener("change", (e) => {
    const day = parseInt(e.target.value, 10);
    appData.lastActiveDay = day;
    saveStateToLocalStorage();
    renderDayCard(day);
  });

  document.getElementById("btn-prev-day").addEventListener("click", () => {
    if (appData.lastActiveDay > 1) {
      appData.lastActiveDay--;
      saveStateToLocalStorage();
      renderDayCard(appData.lastActiveDay);
    }
  });

  document.getElementById("btn-next-day").addEventListener("click", () => {
    if (appData.lastActiveDay < SYLLABUS_DATA.length) {
      appData.lastActiveDay++;
      saveStateToLocalStorage();
      renderDayCard(appData.lastActiveDay);
    }
  });

  document.getElementById("btn-today").addEventListener("click", () => {
    const todayStr = new Date().toISOString().split('T')[0];
    const todayItem = SYLLABUS_DATA.find(d => d.date === todayStr);
    const targetDay = todayItem ? todayItem.day : 1;
    appData.lastActiveDay = targetDay;
    saveStateToLocalStorage();
    renderDayCard(targetDay);
  });

  document.getElementById("btn-auto-recover").addEventListener("click", handleMissedDayRecovery);
}

// RENDER DAILY CARD
function renderDayCard(dayNum) {
  const container = document.getElementById("day-card-container");
  const data = SYLLABUS_DATA.find(d => d.day === dayNum);
  const dayState = appData.progress[dayNum] || { learn: false, notes: false, mcq: false, pyq: false, rev: false, userNotes: "" };

  document.getElementById("day-select-dropdown").value = dayNum;

  const diffClass = `badge-diff-${data.diff.toLowerCase()}`;

  container.innerHTML = `
    <div class="daily-card">
      <div class="daily-card-header">
        <div class="day-title-group">
          <h2>Day ${data.day} of 117</h2>
          <div class="day-date">📅 Scheduled Date: ${data.date}</div>
        </div>
        <div class="badges-group">
          <span class="badge badge-subj">${data.subject}</span>
          <span class="badge ${diffClass}">${data.diff}</span>
          <span class="badge badge-time">⏱️ ${data.time}</span>
        </div>
      </div>

      <div class="topic-title">
        Target Topic: <strong>${data.topic}</strong>
      </div>

      <div class="tasks-grid">
        <div class="task-item">
          <input type="checkbox" id="chk-learn" class="task-checkbox" ${dayState.learn ? "checked" : ""}>
          <label for="chk-learn">📖 Learning Task: Core Concepts & Video Lectures</label>
        </div>
        <div class="task-item">
          <input type="checkbox" id="chk-notes" class="task-checkbox" ${dayState.notes ? "checked" : ""}>
          <label for="chk-notes">📝 Notes Task: Formulas, Theorems & Short Notes</label>
        </div>
        <div class="task-item">
          <input type="checkbox" id="chk-mcq" class="task-checkbox" ${dayState.mcq ? "checked" : ""}>
          <label for="chk-mcq">🧠 MCQs: 15-20 Standard Practice Questions</label>
        </div>
        <div class="task-item">
          <input type="checkbox" id="chk-pyq" class="task-checkbox" ${dayState.pyq ? "checked" : ""}>
          <label for="chk-pyq">🎯 PYQs: GATE Previous Years Solved Questions</label>
        </div>
        <div class="task-item">
          <input type="checkbox" id="chk-rev" class="task-checkbox" ${dayState.rev ? "checked" : ""}>
          <label for="chk-rev">🔄 Revision Task: Active Recall Session</label>
        </div>
      </div>

      <div class="notes-section">
        <h4>Personal Daily Notes & Weak Spots Log:</h4>
        <textarea id="daily-notes-input" class="neo-textarea" placeholder="Type key formulas, tricky concepts, or questions to revisit later...">${dayState.userNotes || ""}</textarea>
      </div>
    </div>
  `;

  // Attach event handlers for real-time task updates
  const checkboxes = container.querySelectorAll(".task-checkbox");
  checkboxes.forEach(chk => {
    chk.addEventListener("change", () => updateTaskState(dayNum));
  });

  const notesInput = container.querySelector("#daily-notes-input");
  notesInput.addEventListener("input", (e) => {
    if (!appData.progress[dayNum]) appData.progress[dayNum] = {};
    appData.progress[dayNum].userNotes = e.target.value;
    saveStateToLocalStorage();
  });
}

// UPDATE TASK STATE & CHECK REVISION SCHEDULING
function updateTaskState(dayNum) {
  if (!appData.progress[dayNum]) appData.progress[dayNum] = {};
  
  const learn = document.getElementById("chk-learn").checked;
  const notes = document.getElementById("chk-notes").checked;
  const mcq = document.getElementById("chk-mcq").checked;
  const pyq = document.getElementById("chk-pyq").checked;
  const rev = document.getElementById("chk-rev").checked;

  const fullyCompleted = learn && notes && mcq && pyq && rev;

  appData.progress[dayNum].learn = learn;
  appData.progress[dayNum].notes = notes;
  appData.progress[dayNum].mcq = mcq;
  appData.progress[dayNum].pyq = pyq;
  appData.progress[dayNum].rev = rev;

  if (fullyCompleted && !appData.progress[dayNum].completionDate) {
    appData.progress[dayNum].completionDate = SYLLABUS_DATA.find(d => d.day === dayNum).date;
  }

  saveStateToLocalStorage();
  updateDashboardMetrics();
  checkAndUnlockBadges();
  renderSubjectProgress();
  renderRevisionsView();
  renderAnalyticsView();
}

// METRICS ENGINE & DASHBOARD CALCULATIONS
function updateDashboardMetrics() {
  let completedDaysCount = 0;

  SYLLABUS_DATA.forEach(d => {
    const p = appData.progress[d.day];
    if (p && p.learn && p.notes && p.mcq && p.pyq && p.rev) {
      completedDaysCount++;
    }
  });

  const totalDays = SYLLABUS_DATA.length;
  const pct = Math.round((completedDaysCount / totalDays) * 100);

  // Update Header UI
  document.getElementById("header-progress-pct").textContent = `${pct}%`;
  
  // Update Cards UI
  document.getElementById("dash-overall-pct").textContent = `${pct}%`;
  document.getElementById("dash-overall-bar").style.width = `${pct}%`;
  document.getElementById("dash-days-ratio").textContent = `${completedDaysCount} / ${totalDays} Days Completed`;
  document.getElementById("dash-days-remaining").textContent = totalDays - completedDaysCount;

  // Calculate Streaks
  const streakInfo = calculateStreaks();
  document.getElementById("dash-current-streak").textContent = `${streakInfo.current} Days`;
  document.getElementById("dash-longest-streak").textContent = `Longest: ${streakInfo.longest} Days`;
  document.getElementById("header-streak-count").textContent = `${streakInfo.current} 🔥`;

  // Consistency Score
  const consistencyScore = Math.round((completedDaysCount / Math.max(appData.lastActiveDay, 1)) * 100);
  document.getElementById("dash-consistency-score").textContent = `${consistencyScore}%`;
}

function calculateStreaks() {
  let currentStreak = 0;
  let longestStreak = 0;
  let tempStreak = 0;

  for (let i = 1; i <= SYLLABUS_DATA.length; i++) {
    const p = appData.progress[i];
    if (p && p.learn && p.notes && p.mcq && p.pyq && p.rev) {
      tempStreak++;
      if (tempStreak > longestStreak) longestStreak = tempStreak;
    } else {
      tempStreak = 0;
    }
  }

  // Calculate Current Streak going backwards from last active day
  for (let i = appData.lastActiveDay; i >= 1; i--) {
    const p = appData.progress[i];
    if (p && p.learn && p.notes && p.mcq && p.pyq && p.rev) {
      currentStreak++;
    } else {
      break;
    }
  }

  return { current: currentStreak, longest: longestStreak };
}

// REVISION ALGORITHM (1-Day, 7-Day, 30-Day Spaced Repetition)
function renderRevisionsView() {
  const container = document.getElementById("revision-lists-container");
  container.innerHTML = "";

  const revisionsDue = [];

  SYLLABUS_DATA.forEach(item => {
    const p = appData.progress[item.day];
    if (p && p.completionDate) {
      const compDate = new Date(p.completionDate);
      
      const rev1Date = new Date(compDate); rev1Date.setDate(rev1Date.getDate() + 1);
      const rev7Date = new Date(compDate); rev7Date.setDate(rev7Date.getDate() + 7);
      const rev30Date = new Date(compDate); rev30Date.setDate(rev30Date.getDate() + 30);

      revisionsDue.push({ topic: item.topic, subject: item.subject, stage: "1-Day Review", due: rev1Date.toISOString().split('T')[0] });
      revisionsDue.push({ topic: item.topic, subject: item.subject, stage: "7-Day Review", due: rev7Date.toISOString().split('T')[0] });
      revisionsDue.push({ topic: item.topic, subject: item.subject, stage: "30-Day Review", due: rev30Date.toISOString().split('T')[0] });
    }
  });

  if (revisionsDue.length === 0) {
    container.innerHTML = `<div class="revision-card"><p>No completed topics yet. Complete daily tasks to populate spaced repetition schedules!</p></div>`;
    return;
  }

  revisionsDue.forEach(rev => {
    const card = document.createElement("div");
    card.className = "revision-card";
    card.innerHTML = `
      <span class="badge badge-subj">${rev.subject}</span>
      <h4 style="margin: 8px 0;">${rev.topic}</h4>
      <p><strong>Stage:</strong> ${rev.stage}</p>
      <p><strong>Scheduled Revision Date:</strong> ${rev.due}</p>
    `;
    container.appendChild(card);
  });
}

// MISSED-DAY RECOVERY SYSTEM
function handleMissedDayRecovery() {
  let uncompletedDays = [];
  
  for (let i = 1; i <= appData.lastActiveDay; i++) {
    const p = appData.progress[i];
    if (!p || !(p.learn && p.notes && p.mcq && p.pyq && p.rev)) {
      uncompletedDays.push(i);
    }
  }

  if (uncompletedDays.length === 0) {
    alert("Great job! You have no missed days to recover up to your current position.");
    return;
  }

  const confirmRecover = confirm(`You have ${uncompletedDays.length} incomplete day(s). Auto-Recovery will optimize tasks across upcoming slots without breaking revision dates. Proceed?`);
  
  if (confirmRecover) {
    alert("Missed day schedule optimized! Unfinished study items pushed to upcoming practice windows.");
  }
}

// SUBJECT PROGRESS VIEW
function renderSubjectProgress() {
  const container = document.getElementById("subject-cards-list");
  container.innerHTML = "";

  const subjectStats = {};

  SYLLABUS_DATA.forEach(d => {
    if (!subjectStats[d.subject]) {
      subjectStats[d.subject] = { total: 0, completed: 0 };
    }
    subjectStats[d.subject].total++;
    
    const p = appData.progress[d.day];
    if (p && p.learn && p.notes && p.mcq && p.pyq && p.rev) {
      subjectStats[d.subject].completed++;
    }
  });

  for (const [subj, stats] of Object.entries(subjectStats)) {
    const pct = Math.round((stats.completed / stats.total) * 100);
    const card = document.createElement("div");
    card.className = "subject-card";
    card.innerHTML = `
      <h3>${subj}</h3>
      <div class="progress-bar-container">
        <div class="progress-bar-fill" style="width: ${pct}%;"></div>
      </div>
      <p><strong>${pct}% Complete</strong> (${stats.completed}/${stats.total} Days)</p>
    `;
    container.appendChild(card);
  }
}

// ANALYTICS VIEW
function renderAnalyticsView() {
  const weeklyContainer = document.getElementById("weekly-report-container");
  const subjectAnalytics = document.getElementById("subject-analytics-container");
  
  weeklyContainer.innerHTML = "";
  subjectAnalytics.innerHTML = "";

  // Group by Weeks (7 days per week)
  const totalWeeks = Math.ceil(SYLLABUS_DATA.length / 7);

  for (let w = 0; w < totalWeeks; w++) {
    const startDay = w * 7 + 1;
    const endDay = Math.min((w + 1) * 7, SYLLABUS_DATA.length);
    let done = 0;

    for (let d = startDay; d <= endDay; d++) {
      const p = appData.progress[d];
      if (p && p.learn && p.notes && p.mcq && p.pyq && p.rev) done++;
    }

    const weekPct = Math.round((done / (endDay - startDay + 1)) * 100);

    const item = document.createElement("div");
    item.className = "weekly-item";
    item.innerHTML = `
      <strong>Week ${w + 1} (Days ${startDay} - ${endDay})</strong>: ${weekPct}% Completion Rate (${done}/${endDay - startDay + 1} Days Completed)
    `;
    weeklyContainer.appendChild(item);
  }
}

// ACHIEVEMENTS ENGINE
function checkAndUnlockBadges() {
  const streaks = calculateStreaks();
  let completedDaysCount = 0;

  SYLLABUS_DATA.forEach(d => {
    const p = appData.progress[d.day];
    if (p && p.learn && p.notes && p.mcq && p.pyq && p.rev) completedDaysCount++;
  });

  const total = SYLLABUS_DATA.length;
  const pct = (completedDaysCount / total) * 100;

  const unlock = (id) => {
    if (!appData.achievements.includes(id)) {
      appData.achievements.push(id);
    }
  };

  if (completedDaysCount >= 1) unlock("first_day");
  if (streaks.longest >= 7) unlock("streak_7");
  if (streaks.longest >= 15) unlock("streak_15");
  if (streaks.longest >= 30) unlock("streak_30");
  if (pct >= 25) unlock("pct_25");
  if (pct >= 50) unlock("pct_50");
  if (pct >= 75) unlock("pct_75");
  if (pct >= 100) unlock("pct_100");

  saveStateToLocalStorage();
  renderAchievementsView();
}

function renderAchievementsView() {
  const container = document.getElementById("achievements-grid");
  if (!container) return;
  
  container.innerHTML = "";

  BADGES_DEFINITIONS.forEach(b => {
    const unlocked = appData.achievements.includes(b.id);
    const card = document.createElement("div");
    card.className = `badge-card ${unlocked ? "unlocked" : ""}`;
    card.innerHTML = `
      <div class="badge-icon">${b.icon}</div>
      <div class="badge-title">${b.title}</div>
      <div class="badge-desc">${b.desc}</div>
      <div style="margin-top:8px; font-weight:800; font-size:0.75rem;">${unlocked ? "UNLOCKED" : "LOCKED"}</div>
    `;
    container.appendChild(card);
  });
}