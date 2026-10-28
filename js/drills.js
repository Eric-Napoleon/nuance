/**
 * Interactive Drills & Exercises Module
 * Handles Context Drills, Sentence Crafting, Quick Review Quizzes, and Daily Missions.
 */

const DrillsManager = {
  // Check user written sentence
  evaluateSentence(wordObj, userSentence) {
    if (!userSentence || userSentence.trim().length < 8) {
      return {
        valid: false,
        message: "Please write a full sentence with at least a few words."
      };
    }

    const trimmed = userSentence.trim();
    // Normalize word stems (e.g. pragmatic / pragmatically, delineate / delineated / delineates)
    const baseWord = wordObj.word.toLowerCase();
    const cleanSentence = trimmed.toLowerCase().replace(/[^a-z0-9\s]/g, ' ');
    const tokens = cleanSentence.split(/\s+/);

    // Stems & variations
    const stem = baseWord.length > 5 ? baseWord.slice(0, baseWord.length - 2) : baseWord;
    const containsWord = tokens.some(t => t.startsWith(stem) || t === baseWord);

    if (!containsWord) {
      return {
        valid: false,
        message: `Make sure to include "${wordObj.word}" (or its variations) in your sentence!`
      };
    }

    // Heuristics for sentence quality
    const hasPunctuation = /[.!?]$/.test(trimmed);
    const wordCount = tokens.filter(t => t.length > 0).length;

    let compliment = "Great sentence!";
    if (wordCount >= 8 && hasPunctuation) {
      compliment = "Excellent conversational context!";
    }

    return {
      valid: true,
      compliment: compliment,
      message: `You successfully used "${wordObj.word}". Notice how naturally it conveys the idea compared to "${wordObj.insteadOf}".`
    };
  },

  // Generate a random 5-question speed quiz from all unlocked words
  generateSpeedQuiz(unlockedWords, count = 5) {
    if (!unlockedWords || unlockedWords.length === 0) return [];

    const shuffled = [...unlockedWords].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, Math.min(count, shuffled.length));

    return selected.map(target => {
      // Create 3 distractors
      const distractors = unlockedWords
        .filter(w => w.id !== target.id)
        .sort(() => 0.5 - Math.random())
        .slice(0, 3);

      // If we don't have enough distractors from unlocked, grab from all words
      if (distractors.length < 3 && window.VOCAB_PACKS) {
        const allWords = window.VOCAB_PACKS.flatMap(p => p.words);
        const fillers = allWords
          .filter(w => w.id !== target.id && !distractors.some(d => d.id === w.id))
          .sort(() => 0.5 - Math.random())
          .slice(0, 3 - distractors.length);
        distractors.push(...fillers);
      }

      const options = [target, ...distractors].sort(() => 0.5 - Math.random());
      const correctIndex = options.findIndex(o => o.id === target.id);

      // Question types: 1) What word replaces "Instead of...", 2) Definition match
      const isUpgradeStyle = Math.random() > 0.4;
      let promptText = "";
      if (isUpgradeStyle && target.insteadOf) {
        promptText = `Which word elevates: "${target.insteadOf}"?`;
      } else {
        promptText = `Which word means: "${target.simpleDefinition}"?`;
      }

      return {
        targetWord: target,
        prompt: promptText,
        options: options.map(o => o.word),
        correctIndex: correctIndex,
        explanation: `"${target.word}" means ${target.simpleDefinition.toLowerCase()}`
      };
    });
  }
};

if (typeof window !== 'undefined') {
  window.DrillsManager = DrillsManager;
}
