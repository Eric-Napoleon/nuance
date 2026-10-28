/**
 * Nuance App - Main Controller
 * State persistence in LocalStorage, UI rendering, event handling.
 */

const STORAGE_KEY = 'nuance_vocab_app_v1';

const App = {
  state: {
    currentPackId: 1,
    currentWordIndex: 0,
    learnedWords: {}, // wordId -> { mastered: bool, starred: bool, sentence: string, completedDate: string }
    dailyMissions: {}, // "YYYY-MM-DD" -> [0, 1, 2]
    streak: 0,
    lastActiveDate: null,
    customWords: [],
    theme: 'dark', // 'dark' or 'light'
    activeTab: 'daily' // 'daily', 'missions', 'quiz', 'vault'
  },

  init() {
    this.loadState();
    this.checkStreak();
    this.applyTheme();
    AudioPlayer.init();
    this.bindEvents();
    this.render();
  },

  loadState() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        this.state = { ...this.state, ...parsed };
      }
    } catch (e) {
      console.error('Error loading state:', e);
    }
  },

  saveState() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.state));
    } catch (e) {
      console.error('Error saving state:', e);
    }
  },

  getTodayString() {
    const now = new Date();
    return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
  },

  checkStreak() {
    const today = this.getTodayString();
    if (!this.state.lastActiveDate) {
      this.state.streak = 1;
      this.state.lastActiveDate = today;
    } else if (this.state.lastActiveDate !== today) {
      const last = new Date(this.state.lastActiveDate);
      const curr = new Date(today);
      const diffDays = Math.round((curr - last) / (1000 * 60 * 60 * 24));
      if (diffDays === 1) {
        this.state.streak += 1;
      } else if (diffDays > 1) {
        this.state.streak = 1;
      }
      this.state.lastActiveDate = today;
    }
    this.saveState();
  },

  applyTheme() {
    const isLight = this.state.theme === 'light';
    document.documentElement.classList.toggle('light-theme', isLight);
    const metaTheme = document.querySelector('meta[name="theme-color"]');
    if (metaTheme) {
      metaTheme.setAttribute('content', isLight ? '#f8fafc' : '#0a0d14');
    }
  },

  setTheme(themeName) {
    this.state.theme = themeName;
    this.applyTheme();
    this.saveState();
    this.renderHeader();
    if (this.state.activeTab === 'vault') {
      this.renderVault();
    }
  },

  toggleTheme() {
    this.setTheme(this.state.theme === 'dark' ? 'light' : 'dark');
  },

  getCurrentPack() {
    return window.VOCAB_PACKS.find(p => p.id === this.state.currentPackId) || window.VOCAB_PACKS[0];
  },

  getCurrentWord() {
    const pack = this.getCurrentPack();
    return pack.words[this.state.currentWordIndex] || pack.words[0];
  },

  getAllUnlockedWords() {
    const all = [];
    window.VOCAB_PACKS.forEach(pack => {
      pack.words.forEach(word => {
        all.push(word);
      });
    });
    // Include custom words
    this.state.customWords.forEach(cw => all.push(cw));
    return all;
  },

  bindEvents() {
    // Navigation tabs
    document.querySelectorAll('.nav-tab').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const tab = e.currentTarget.dataset.tab;
        this.switchTab(tab);
      });
    });

    // Theme toggle
    const themeBtn = document.getElementById('theme-toggle-btn');
    if (themeBtn) {
      themeBtn.addEventListener('click', () => this.toggleTheme());
    }

    // Pack Selector modal/dropdown
    const packBtn = document.getElementById('pack-selector-btn');
    if (packBtn) {
      packBtn.addEventListener('click', () => this.showPackSelector());
    }

    // Modal Close
    document.getElementById('modal-close-btn')?.addEventListener('click', () => this.closeModal());
    document.getElementById('modal-overlay')?.addEventListener('click', (e) => {
      if (e.target.id === 'modal-overlay') this.closeModal();
    });
  },

  switchTab(tabName) {
    this.state.activeTab = tabName;
    document.querySelectorAll('.nav-tab').forEach(b => {
      b.classList.toggle('active', b.dataset.tab === tabName);
    });

    document.querySelectorAll('.tab-view').forEach(view => {
      view.classList.toggle('active', view.id === `view-${tabName}`);
    });

    if (tabName === 'daily') {
      this.renderDailyWord();
    } else if (tabName === 'missions') {
      this.renderDailyMissions();
    } else if (tabName === 'quiz') {
      this.renderQuizView();
    } else if (tabName === 'vault') {
      this.renderVault();
    }
  },

  render() {
    this.renderHeader();
    this.switchTab(this.state.activeTab);
  },

  renderHeader() {
    const streakEl = document.getElementById('streak-count');
    if (streakEl) streakEl.textContent = this.state.streak;

    const themeBtn = document.getElementById('theme-toggle-btn');
    if (themeBtn) {
      themeBtn.innerHTML = this.state.theme === 'dark' 
        ? `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`
        : `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`;
    }
  },

  // ===================== DAILY TAB =====================
  renderDailyWord() {
    const pack = this.getCurrentPack();
    const word = this.getCurrentWord();
    const wordData = this.state.learnedWords[word.id] || {};

    const container = document.getElementById('view-daily');
    if (!container) return;

    // Build Word Stepper / Segmented Progress
    const segmentsHtml = pack.words.map((w, idx) => {
      const isCurrent = idx === this.state.currentWordIndex;
      const isMastered = this.state.learnedWords[w.id]?.mastered;
      const hasAnswered = this.state.learnedWords[w.id]?.drillAnswered;
      let statusClass = '';
      if (isCurrent) statusClass = 'current';
      else if (isMastered) statusClass = 'mastered';
      else if (hasAnswered) statusClass = 'completed';

      return `<button class="progress-segment ${statusClass}" onclick="App.goToWord(${idx})" title="Word ${idx + 1}: ${w.word}">
        <span>${idx + 1}</span>
      </button>`;
    }).join('');

    const isStarred = !!wordData.starred;
    const isMastered = !!wordData.mastered;

    container.innerHTML = `
      <!-- Sleek Daily Dashboard Card -->
      <div class="daily-dashboard-card">
        <div class="dashboard-top-row">
          <button class="day-badge-btn" onclick="App.showPackSelector()" title="Switch Pack">
            <span>Day ${pack.id} of ${window.VOCAB_PACKS.length}</span>
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"></polyline></svg>
          </button>
          <div class="dashboard-progress-label">
            <span>Word <strong class="active-word-num">${this.state.currentWordIndex + 1}</strong> of 10</span>
          </div>
        </div>

        <div class="dashboard-pack-meta">
          <h2 class="dashboard-pack-title">${pack.title.replace(/^Day \d+:\s*/i, '')}</h2>
          <p class="dashboard-pack-sub">${pack.subtitle}</p>
        </div>

        <!-- 10 Word Segment Progress Bar -->
        <div class="segmented-progress-bar">
          ${segmentsHtml}
        </div>
      </div>

      <!-- Main Word Card -->
      <div class="word-card">
        <div class="card-header">
          <div>
            <div class="word-pos">${word.partOfSpeech}</div>
            <div class="word-title-row">
              <h1 class="word-title">${word.word}</h1>
              <button class="audio-btn" id="audio-play-btn" title="Listen to pronunciation">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>
              </button>
            </div>
            <div class="word-phonetic">${word.phonetic}</div>
          </div>
          <div class="card-actions">
            <button class="star-btn ${isStarred ? 'active' : ''}" id="star-btn" title="Star word">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="${isStarred ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
            </button>
          </div>
        </div>

        <!-- Upgrade Contrast Box -->
        <div class="upgrade-box">
          <div class="upgrade-header">
            <span class="lightning-badge">⚡ Conversational Upgrade</span>
          </div>
          <div class="upgrade-contrast">
            <div class="upgrade-from">
              <span class="label">Instead of:</span>
              <span class="text">"${word.insteadOf}"</span>
            </div>
            <div class="upgrade-arrow">➔</div>
            <div class="upgrade-to">
              <span class="label">Elevate to:</span>
              <span class="text">${word.word}</span>
            </div>
          </div>
        </div>

        <!-- Plain English Definition -->
        <div class="definition-box">
          <p class="definition-text">${word.simpleDefinition}</p>
          <p class="why-text"><strong>Why use it:</strong> ${word.whyUseIt}</p>
        </div>

        <!-- Context Examples -->
        <div class="examples-section">
          <h3 class="section-label">Real-World Context</h3>
          
          <div class="example-pill casual">
            <div class="pill-tag">☕ Casual / Everyday</div>
            <p class="pill-text">"${word.casualExample}"</p>
          </div>

          <div class="example-pill pro">
            <div class="pill-tag">💼 Workplace / Eloquent</div>
            <p class="pill-text">"${word.proExample}"</p>
          </div>
        </div>

        <!-- Nuance & Pitfalls -->
        <div class="nuance-tip-box">
          <div class="tip-header">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
            <span>Nuance & How to Use Naturally</span>
          </div>
          <p class="tip-text">${word.nuanceTip}</p>
        </div>

        <!-- INTERACTIVE PRACTICE SECTION -->
        <div class="practice-container">
          <div class="practice-tabs">
            <button class="practice-tab-btn active" id="drill-tab-btn" onclick="App.togglePracticeMode('drill')">
              1. Context Drill
            </button>
            <button class="practice-tab-btn" id="craft-tab-btn" onclick="App.togglePracticeMode('craft')">
              2. Sentence Practice
            </button>
          </div>

          <!-- Mode 1: Context Drill (Multiple Choice in Realistic Dialogue) -->
          <div id="practice-mode-drill" class="practice-subview active">
            <div class="drill-scenario">
              <p class="scenario-prompt"><strong>Scenario:</strong> ${word.practiceQuestion.scenario}</p>
            </div>
            <div class="drill-options" id="drill-options-container">
              ${word.practiceQuestion.options.map((opt, i) => `
                <button class="drill-option-btn" onclick="App.handleDrillAnswer(${i})">
                  <span class="opt-letter">${['A', 'B', 'C', 'D', 'E'][i]}</span>
                  <span class="opt-text">${opt}</span>
                </button>
              `).join('')}
            </div>
            <div id="drill-feedback" class="drill-feedback hidden"></div>
          </div>

          <!-- Mode 2: Sentence Crafting -->
          <div id="practice-mode-craft" class="practice-subview">
            <div class="craft-prompt-box">
              <p class="craft-prompt"><strong>Prompt:</strong> ${word.writingPrompt}</p>
            </div>
            <div class="craft-input-wrapper">
              <textarea id="user-sentence-input" class="craft-textarea" placeholder="Type your sentence using '${word.word}'..." rows="3">${wordData.sentence || ''}</textarea>
              <button class="action-btn-primary" onclick="App.handleSentenceSubmit()">
                Check My Sentence
              </button>
            </div>
            <div id="sentence-feedback" class="drill-feedback hidden"></div>
          </div>
        </div>

        <!-- Mark as Mastered button & Next/Prev Navigation -->
        <div class="card-footer-actions">
          <button class="master-btn ${isMastered ? 'mastered' : ''}" id="master-btn" onclick="App.toggleMasterWord()">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
            <span>${isMastered ? 'Mastered ✓' : 'Mark as Mastered'}</span>
          </button>
        </div>
      </div>

      <!-- Navigation Arrows Bottom Bar -->
      <div class="nav-arrows-bar">
        <button class="arrow-nav-btn" onclick="App.prevWord()" ${this.state.currentWordIndex === 0 ? 'disabled' : ''}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"></polyline></svg>
          Previous
        </button>

        <button class="arrow-nav-btn next" onclick="App.nextWord()">
          ${this.state.currentWordIndex === 9 ? 'Next Day ➔' : 'Next Word ➔'}
        </button>
      </div>
    `;

    // Bind audio button
    document.getElementById('audio-play-btn')?.addEventListener('click', (e) => {
      const btn = e.currentTarget;
      btn.classList.add('playing');
      AudioPlayer.speak(word.word, () => {
        btn.classList.remove('playing');
      });
    });

    // Bind star button
    document.getElementById('star-btn')?.addEventListener('click', () => {
      this.toggleStarWord();
    });

    // Check if drill was already answered previously
    if (wordData.drillAnswered) {
      this.showDrillResult(wordData.drillChosenIndex, word.practiceQuestion.correctIndex, word.practiceQuestion.explanation, false);
    }
  },

  goToWord(index) {
    this.state.currentWordIndex = index;
    this.renderDailyWord();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  },

  nextWord() {
    if (this.state.currentWordIndex < 9) {
      this.state.currentWordIndex += 1;
      this.renderDailyWord();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Advance to next day/pack
      if (this.state.currentPackId < window.VOCAB_PACKS.length) {
        this.state.currentPackId += 1;
        this.state.currentWordIndex = 0;
        this.saveState();
        this.render();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        alert("🎉 Congratulations! You have completed all 10 Days in the foundation library!");
      }
    }
  },

  prevWord() {
    if (this.state.currentWordIndex > 0) {
      this.state.currentWordIndex -= 1;
      this.renderDailyWord();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  },

  togglePracticeMode(mode) {
    document.getElementById('drill-tab-btn')?.classList.toggle('active', mode === 'drill');
    document.getElementById('craft-tab-btn')?.classList.toggle('active', mode === 'craft');
    document.getElementById('practice-mode-drill')?.classList.toggle('active', mode === 'drill');
    document.getElementById('practice-mode-craft')?.classList.toggle('active', mode === 'craft');
  },

  handleDrillAnswer(chosenIndex) {
    const word = this.getCurrentWord();
    const correctIndex = word.practiceQuestion.correctIndex;
    const explanation = word.practiceQuestion.explanation;

    if (!this.state.learnedWords[word.id]) {
      this.state.learnedWords[word.id] = {};
    }
    this.state.learnedWords[word.id].drillAnswered = true;
    this.state.learnedWords[word.id].drillChosenIndex = chosenIndex;
    this.saveState();

    this.showDrillResult(chosenIndex, correctIndex, explanation, true);
  },

  showDrillResult(chosenIndex, correctIndex, explanation, animate) {
    const buttons = document.querySelectorAll('.drill-option-btn');
    buttons.forEach((btn, idx) => {
      btn.disabled = true;
      if (idx === correctIndex) {
        btn.classList.add('correct');
      } else if (idx === chosenIndex) {
        btn.classList.add('incorrect');
      }
    });

    const fb = document.getElementById('drill-feedback');
    if (!fb) return;
    fb.classList.remove('hidden');

    const isCorrect = chosenIndex === correctIndex;
    fb.className = `drill-feedback ${isCorrect ? 'success' : 'warning'}`;
    fb.innerHTML = `
      <div class="feedback-title">${isCorrect ? '✓ Spot on!' : '✕ Not quite.'}</div>
      <p class="feedback-text">${explanation}</p>
    `;
  },

  handleSentenceSubmit() {
    const word = this.getCurrentWord();
    const input = document.getElementById('user-sentence-input');
    const sentence = input?.value || '';

    const evaluation = DrillsManager.evaluateSentence(word, sentence);
    const fb = document.getElementById('sentence-feedback');
    if (!fb) return;
    fb.classList.remove('hidden');

    if (evaluation.valid) {
      if (!this.state.learnedWords[word.id]) {
        this.state.learnedWords[word.id] = {};
      }
      this.state.learnedWords[word.id].sentence = sentence;
      this.saveState();

      fb.className = 'drill-feedback success';
      fb.innerHTML = `
        <div class="feedback-title">✓ ${evaluation.compliment}</div>
        <p class="feedback-text">${evaluation.message}</p>
        <div class="model-sentence-box">
          <span class="label">💡 Model Example:</span>
          <p>"${word.casualExample}"</p>
        </div>
      `;
    } else {
      fb.className = 'drill-feedback warning';
      fb.innerHTML = `
        <div class="feedback-title">⚠️ Needs adjustment</div>
        <p class="feedback-text">${evaluation.message}</p>
      `;
    }
  },

  toggleStarWord() {
    const word = this.getCurrentWord();
    if (!this.state.learnedWords[word.id]) {
      this.state.learnedWords[word.id] = {};
    }
    this.state.learnedWords[word.id].starred = !this.state.learnedWords[word.id].starred;
    this.saveState();
    this.renderDailyWord();
  },

  toggleMasterWord() {
    const word = this.getCurrentWord();
    if (!this.state.learnedWords[word.id]) {
      this.state.learnedWords[word.id] = {};
    }
    this.state.learnedWords[word.id].mastered = !this.state.learnedWords[word.id].mastered;
    this.saveState();
    this.renderDailyWord();
  },

  // ===================== DAILY MISSIONS TAB =====================
  renderDailyMissions() {
    const container = document.getElementById('view-missions');
    if (!container) return;

    const today = this.getTodayString();
    const pack = this.getCurrentPack();
    const completedIndices = this.state.dailyMissions[today] || [];

    // Pull missions from today's pack words
    const missions = [
      {
        id: 0,
        badge: "🗣️ Social Mission",
        text: `Slip "${pack.words[0].word}" or "${pack.words[1].word}" into a casual conversation, phone call, or text message today.`,
        tip: `Instead of saying "${pack.words[0].insteadOf}", say "${pack.words[0].word}".`
      },
      {
        id: 1,
        badge: "👂 Awareness Mission",
        text: `Notice when you or someone else uses an overused simple word, and mentally substitute a more nuanced word like "${pack.words[4].word}".`,
        tip: `Nuance: ${pack.words[4].simpleDefinition}`
      },
      {
        id: 2,
        badge: "✍️ Practice Mission",
        text: `Complete all 10 context drills in Day ${pack.id} to lock in the real-world differences.`,
        tip: `Check off each drill in the Daily 10 tab.`
      }
    ];

    const allDone = missions.every(m => completedIndices.includes(m.id));

    container.innerHTML = `
      <div class="missions-header">
        <h2 class="view-title">Today's Real-Talk Missions</h2>
        <p class="view-subtitle">Active daily challenges to embed your new vocabulary into natural everyday talk.</p>
        <div class="missions-streak-badge">
          🔥 Streak: <strong>${this.state.streak} Days</strong>
        </div>
      </div>

      <div class="missions-list">
        ${missions.map(m => {
          const isDone = completedIndices.includes(m.id);
          return `
            <div class="mission-card ${isDone ? 'completed' : ''}" onclick="App.toggleMission(${m.id})">
              <div class="mission-checkbox">
                ${isDone ? '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg>' : ''}
              </div>
              <div class="mission-content">
                <span class="mission-badge">${m.badge}</span>
                <p class="mission-text">${m.text}</p>
                <div class="mission-tip">${m.tip}</div>
              </div>
            </div>
          `;
        }).join('')}
      </div>

      ${allDone ? `
        <div class="missions-congrats">
          <h3>🎉 All Daily Missions Completed!</h3>
          <p>You're actively turning passive vocabulary into fluid, natural speech. Keep the momentum tomorrow!</p>
        </div>
      ` : ''}
    `;
  },

  toggleMission(missionId) {
    const today = this.getTodayString();
    if (!this.state.dailyMissions[today]) {
      this.state.dailyMissions[today] = [];
    }
    const idx = this.state.dailyMissions[today].indexOf(missionId);
    if (idx >= 0) {
      this.state.dailyMissions[today].splice(idx, 1);
    } else {
      this.state.dailyMissions[today].push(missionId);
    }
    this.saveState();
    this.renderDailyMissions();
  },

  // ===================== SPEED QUIZ & SPACED REPETITION =====================
  quizState: {
    active: false,
    questions: [],
    currentIndex: 0,
    score: 0,
    userAnswers: []
  },

  renderQuizView() {
    const container = document.getElementById('view-quiz');
    if (!container) return;

    if (!this.quizState.active) {
      container.innerHTML = `
        <div class="quiz-intro">
          <div class="quiz-icon-banner">⚡</div>
          <h2 class="view-title">Spaced Repetition Review</h2>
          <p class="view-subtitle">Rapid 5-question workout to test recall and retention across your learned words.</p>
          <div class="quiz-stats-row">
            <div class="quiz-stat-card">
              <div class="num">${Object.keys(this.state.learnedWords).length}</div>
              <div class="lbl">Words Practiced</div>
            </div>
            <div class="quiz-stat-card">
              <div class="num">${Object.values(this.state.learnedWords).filter(w => w.mastered).length}</div>
              <div class="lbl">Mastered</div>
            </div>
          </div>
          <button class="action-btn-primary large" onclick="App.startSpeedQuiz()">
            Start 5-Word Speed Quiz
          </button>
        </div>
      `;
    } else {
      const q = this.quizState.questions[this.quizState.currentIndex];
      const currentNum = this.quizState.currentIndex + 1;
      const total = this.quizState.questions.length;

      container.innerHTML = `
        <div class="quiz-progress-bar">
          <div class="quiz-fill" style="width: ${(currentNum / total) * 100}%"></div>
        </div>
        <div class="quiz-counter">Question ${currentNum} of ${total}</div>

        <div class="quiz-card">
          <div class="quiz-prompt">${q.prompt}</div>
          <div class="quiz-options">
            ${q.options.map((opt, idx) => `
              <button class="quiz-opt-btn" onclick="App.handleQuizAnswer(${idx})">
                ${opt}
              </button>
            `).join('')}
          </div>
          <div id="quiz-feedback-box" class="drill-feedback hidden"></div>
        </div>
      `;
    }
  },

  startSpeedQuiz() {
    const unlocked = this.getAllUnlockedWords();
    this.quizState.questions = DrillsManager.generateSpeedQuiz(unlocked, 5);
    this.quizState.currentIndex = 0;
    this.quizState.score = 0;
    this.quizState.userAnswers = [];
    this.quizState.active = true;
    this.renderQuizView();
  },

  handleQuizAnswer(chosenIndex) {
    const q = this.quizState.questions[this.quizState.currentIndex];
    const isCorrect = chosenIndex === q.correctIndex;
    if (isCorrect) this.quizState.score++;
    this.quizState.userAnswers.push({ chosenIndex, isCorrect });

    const buttons = document.querySelectorAll('.quiz-opt-btn');
    buttons.forEach((btn, idx) => {
      btn.disabled = true;
      if (idx === q.correctIndex) btn.classList.add('correct');
      else if (idx === chosenIndex) btn.classList.add('incorrect');
    });

    const fb = document.getElementById('quiz-feedback-box');
    if (fb) {
      fb.classList.remove('hidden');
      fb.className = `drill-feedback ${isCorrect ? 'success' : 'warning'}`;
      fb.innerHTML = `
        <div class="feedback-title">${isCorrect ? '✓ Correct!' : '✕ Not quite.'}</div>
        <p class="feedback-text">${q.explanation}</p>
        <button class="action-btn-primary" style="margin-top:12px; width:100%;" onclick="App.nextQuizQuestion()">
          ${this.quizState.currentIndex + 1 < this.quizState.questions.length ? 'Next Question ➔' : 'View Results'}
        </button>
      `;
    }
  },

  nextQuizQuestion() {
    if (this.quizState.currentIndex + 1 < this.quizState.questions.length) {
      this.quizState.currentIndex++;
      this.renderQuizView();
    } else {
      this.showQuizSummary();
    }
  },

  showQuizSummary() {
    const container = document.getElementById('view-quiz');
    if (!container) return;

    const score = this.quizState.score;
    const total = this.quizState.questions.length;
    let message = "Keep reviewing to reinforce your instincts!";
    if (score === total) message = "Perfection! Your verbal repertoire is sharp.";
    else if (score >= 3) message = "Solid work! Your recall is progressing nicely.";

    container.innerHTML = `
      <div class="quiz-summary-box">
        <div class="summary-score-circle">
          <span>${score} / ${total}</span>
        </div>
        <h2 class="view-title">Workout Complete!</h2>
        <p class="view-subtitle">${message}</p>
        <div class="summary-actions">
          <button class="action-btn-primary" onclick="App.startSpeedQuiz()">
            Take Another Quiz
          </button>
          <button class="action-btn-secondary" onclick="App.switchTab('daily')">
            Return to Daily Words
          </button>
        </div>
      </div>
    `;
    this.quizState.active = false;
  },

  // ===================== WORD VAULT TAB =====================
  vaultFilter: 'all', // 'all', 'mastered', 'starred'
  vaultQuery: '',

  renderVault() {
    const container = document.getElementById('view-vault');
    if (!container) return;

    const allWords = this.getAllUnlockedWords();
    const filtered = allWords.filter(w => {
      const data = this.state.learnedWords[w.id] || {};
      if (this.vaultFilter === 'mastered' && !data.mastered) return false;
      if (this.vaultFilter === 'starred' && !data.starred) return false;
      if (this.vaultQuery.trim()) {
        const q = this.vaultQuery.toLowerCase();
        return w.word.toLowerCase().includes(q) || 
               w.simpleDefinition.toLowerCase().includes(q) || 
               (w.insteadOf && w.insteadOf.toLowerCase().includes(q));
      }
      return true;
    });

    container.innerHTML = `
      <div class="vault-header">
        <div class="vault-title-row">
          <h2 class="view-title">Word Vault</h2>
          <button class="action-btn-secondary compact" onclick="App.showAddCustomWordModal()">
            + Add Word
          </button>
        </div>
        <p class="view-subtitle">Your personal dictionary of sophisticated vocabulary.</p>

        <!-- Search Bar -->
        <div class="search-input-wrapper">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
          <input type="text" id="vault-search-input" class="search-input" placeholder="Search words, definitions, upgrades..." value="${this.vaultQuery}" oninput="App.handleVaultSearch(this.value)">
        </div>

        <!-- Filter Chips -->
        <div class="filter-chips">
          <button class="filter-chip ${this.vaultFilter === 'all' ? 'active' : ''}" onclick="App.setVaultFilter('all')">
            All (${allWords.length})
          </button>
          <button class="filter-chip ${this.vaultFilter === 'starred' ? 'active' : ''}" onclick="App.setVaultFilter('starred')">
            ★ Starred (${allWords.filter(w => this.state.learnedWords[w.id]?.starred).length})
          </button>
          <button class="filter-chip ${this.vaultFilter === 'mastered' ? 'active' : ''}" onclick="App.setVaultFilter('mastered')">
            ✓ Mastered (${allWords.filter(w => this.state.learnedWords[w.id]?.mastered).length})
          </button>
        </div>
      </div>

      <!-- Word List -->
      <div class="vault-list">
        ${filtered.length === 0 ? `
          <div class="empty-state">
            <p>No words found matching your filter.</p>
          </div>
        ` : filtered.map(w => {
          const data = this.state.learnedWords[w.id] || {};
          return `
            <div class="vault-word-row" onclick="App.openWordDetail('${w.id}')">
              <div class="vault-word-left">
                <div class="vault-word-name">${w.word}</div>
                <div class="vault-word-sub">Instead of: "${w.insteadOf || '...'}"</div>
              </div>
              <div class="vault-word-right">
                ${data.starred ? '<span class="star-icon">★</span>' : ''}
                ${data.mastered ? '<span class="check-icon">✓</span>' : ''}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"></polyline></svg>
              </div>
            </div>
          `;
        }).join('')}
      </div>

      <!-- Settings & Backup Footer -->
      <div class="vault-settings-box">
        <h3>App Settings</h3>

        <div class="settings-group">
          <div class="settings-label">Theme & Appearance</div>
          <div class="theme-switch-group">
            <button class="theme-option-btn ${this.state.theme === 'dark' ? 'active' : ''}" onclick="App.setTheme('dark')">
              <span>🌙 Dark Mode</span>
            </button>
            <button class="theme-option-btn ${this.state.theme === 'light' ? 'active' : ''}" onclick="App.setTheme('light')">
              <span>☀️ Light Mode</span>
            </button>
          </div>
        </div>

        <div class="settings-group">
          <div class="settings-label">Offline Commute Status</div>
          <div class="offline-status-card">
            <span class="status-dot"></span>
            <span>100% Offline Ready (All 100 words, Web Speech pronunciation, drills, & quizzes work without Wi-Fi/cellular)</span>
          </div>
        </div>

        <div class="settings-label">Data & Device</div>
        <div class="settings-btns-row">
          <button class="action-btn-secondary" onclick="App.exportData()">Export Data (JSON)</button>
          <button class="action-btn-secondary" onclick="App.showInstallHelp()">Install to Phone 📱</button>
        </div>
      </div>
    `;
  },

  handleVaultSearch(query) {
    this.vaultQuery = query;
    this.renderVault();
    // Keep focus in search input
    const input = document.getElementById('vault-search-input');
    if (input) {
      input.focus();
      input.setSelectionRange(input.value.length, input.value.length);
    }
  },

  setVaultFilter(filter) {
    this.vaultFilter = filter;
    this.renderVault();
  },

  openWordDetail(wordId) {
    // Find pack and word index
    for (let pIdx = 0; pIdx < window.VOCAB_PACKS.length; pIdx++) {
      const pack = window.VOCAB_PACKS[pIdx];
      const wIdx = pack.words.findIndex(w => w.id === wordId);
      if (wIdx >= 0) {
        this.state.currentPackId = pack.id;
        this.state.currentWordIndex = wIdx;
        this.saveState();
        this.switchTab('daily');
        return;
      }
    }
  },

  // ===================== MODALS =====================
  showPackSelector() {
    const modalContent = document.getElementById('modal-body');
    const modalTitle = document.getElementById('modal-title');
    if (!modalContent || !modalTitle) return;

    modalTitle.textContent = "Select Daily Pack";
    modalContent.innerHTML = `
      <div class="pack-list-modal">
        ${window.VOCAB_PACKS.map(pack => {
          const isCurrent = pack.id === this.state.currentPackId;
          const masteredCount = pack.words.filter(w => this.state.learnedWords[w.id]?.mastered).length;
          return `
            <div class="pack-modal-item ${isCurrent ? 'selected' : ''}" onclick="App.selectPack(${pack.id})">
              <div class="pack-item-num">Day ${pack.id}</div>
              <div class="pack-item-info">
                <div class="pack-item-title">${pack.title.replace(/^Day \d+:\s*/, '')}</div>
                <div class="pack-item-sub">${pack.subtitle}</div>
                <div class="pack-item-progress">${masteredCount} of 10 mastered</div>
              </div>
            </div>
          `;
        }).join('')}
      </div>
    `;
    this.openModal();
  },

  selectPack(packId) {
    this.state.currentPackId = packId;
    this.state.currentWordIndex = 0;
    this.saveState();
    this.closeModal();
    this.render();
  },

  showAddCustomWordModal() {
    const modalContent = document.getElementById('modal-body');
    const modalTitle = document.getElementById('modal-title');
    if (!modalContent || !modalTitle) return;

    modalTitle.textContent = "Add Custom Word";
    modalContent.innerHTML = `
      <div class="custom-word-form">
        <label class="form-label">Word</label>
        <input type="text" id="cw-word" class="craft-textarea" style="height:44px; margin-bottom:12px;" placeholder="e.g. Tenacious">

        <label class="form-label">Instead of saying...</label>
        <input type="text" id="cw-instead" class="craft-textarea" style="height:44px; margin-bottom:12px;" placeholder="e.g. very persistent / never gives up">

        <label class="form-label">Meaning</label>
        <textarea id="cw-def" class="craft-textarea" rows="2" placeholder="Clear, simple definition..."></textarea>

        <label class="form-label" style="margin-top:12px;">Casual Conversation Example</label>
        <textarea id="cw-example" class="craft-textarea" rows="2" placeholder="e.g. She was tenacious about finishing the hike..."></textarea>

        <button class="action-btn-primary" style="margin-top:16px; width:100%;" onclick="App.saveCustomWord()">
          Save Word to Vault
        </button>
      </div>
    `;
    this.openModal();
  },

  saveCustomWord() {
    const word = document.getElementById('cw-word')?.value.trim();
    const instead = document.getElementById('cw-instead')?.value.trim();
    const def = document.getElementById('cw-def')?.value.trim();
    const example = document.getElementById('cw-example')?.value.trim();

    if (!word || !def) {
      alert("Please provide at least the word and its definition.");
      return;
    }

    const newWord = {
      id: `cw_${Date.now()}`,
      word: word,
      phonetic: '',
      partOfSpeech: 'custom',
      simpleDefinition: def,
      insteadOf: instead || 'simple wording',
      whyUseIt: 'Personal vocabulary addition.',
      casualExample: example || `Using "${word}" in daily speech.`,
      proExample: example || `Demonstrating "${word}" effectively.`,
      nuanceTip: 'Use in natural conversational contexts.',
      missions: [`Use "${word}" in a sentence today.`],
      practiceQuestion: {
        scenario: `Practice using "${word}" in conversation:`,
        options: [
          `Applying "${word}" accurately in a fitting conversational context.`,
          `Using "${word}" in an unrelated context with the opposite meaning.`,
          `Using "${word}" as empty filler without clear intent.`,
          `Confusing "${word}" with an unrelated soundalike phrase.`
        ],
        correctIndex: Math.floor(Math.random() * 4),
        explanation: `"${word}" means: ${def}`
      },
      writingPrompt: `Write your own sentence using "${word}".`
    };

    this.state.customWords.push(newWord);
    this.saveState();
    this.closeModal();
    this.renderVault();
  },

  showInstallHelp() {
    const modalContent = document.getElementById('modal-body');
    const modalTitle = document.getElementById('modal-title');
    if (!modalContent || !modalTitle) return;

    modalTitle.textContent = "Install Nuance on Your Phone";
    modalContent.innerHTML = `
      <div class="install-guide">
        <div class="guide-platform">
          <h4>📱 iPhone (Safari)</h4>
          <ol>
            <li>Open this page in <strong>Safari</strong> on your iPhone.</li>
            <li>Tap the <strong>Share</strong> button (the square with arrow pointing up at the bottom).</li>
            <li>Scroll down and tap <strong>Add to Home Screen</strong>.</li>
            <li>Tap <strong>Add</strong> in the top right corner. Nuance will now launch like a full-screen native app!</li>
          </ol>
        </div>

        <div class="guide-platform" style="margin-top:16px;">
          <h4>🤖 Android (Chrome)</h4>
          <ol>
            <li>Open this page in <strong>Chrome</strong> on your Android phone.</li>
            <li>Tap the <strong>three dots menu (⋮)</strong> in the top right.</li>
            <li>Select <strong>Install app</strong> or <strong>Add to Home screen</strong>.</li>
            <li>Follow the prompt to add it to your apps!</li>
          </ol>
        </div>
      </div>
    `;
    this.openModal();
  },

  exportData() {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(this.state, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `nuance_vocab_backup_${this.getTodayString()}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  },

  openModal() {
    document.getElementById('modal-overlay')?.classList.remove('hidden');
  },

  closeModal() {
    document.getElementById('modal-overlay')?.classList.add('hidden');
  }
};

window.App = App;
window.addEventListener('DOMContentLoaded', () => {
  App.init();
});
