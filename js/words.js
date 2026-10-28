/**
 * Nuance - Curated Daily Vocabulary Database
 * High-yield, sophisticated words tailored for everyday speech, social conversations, and professional life.
 * Focus: Elevating speech naturally without sounding pretentious or archaic.
 */

const VOCAB_PACKS = [
  {
    id: 1,
    title: "Day 1: Precision in Decision-Making",
    subtitle: "Saying what you mean with clarity and sound judgment",
    words: [
      {
        id: "w1",
        word: "Pragmatic",
        phonetic: "/præɡˈmætɪk/",
        partOfSpeech: "adjective",
        simpleDefinition: "Dealing with things sensibly and realistically, based on practical rather than theoretical considerations.",
        insteadOf: "really practical / realistic / down to earth",
        whyUseIt: "Signals maturity and focus on what actually works without getting bogged down in endless debate.",
        casualExample: "Look, taking two flights saves us $300, but pragmatically speaking, we'll lose half a day.",
        proExample: "Let's take a pragmatic approach: release the core feature now, and refine edge cases next month.",
        nuanceTip: "Don't confuse with 'cynical' or 'pessimistic'. A pragmatic person isn't negative; they simply favor actionable results over idealistic theories.",
        missions: [
          "Use 'pragmatic' when discussing plans or logistics with a friend today.",
          "Swap 'let's be realistic' with 'let's take a pragmatic look at this'."
        ],
        practiceQuestion: {
          scenario: "Your friend wants to renovate their entire kitchen in two days before hosting a party. You tell them:",
          options: [
            "That's a very pragmatic schedule.",
            "That's simply not pragmatic given how long tile adhesive takes to cure.",
            "You are being too pragmatic about dinner."
          ],
          correctIndex: 1,
          explanation: "Pragmatic refers to practical feasibility. Two days is unrealistic, so it's *not* pragmatic."
        },
        writingPrompt: "Describe a decision you made recently where you had to balance what you wished would happen with what was actually pragmatic."
      },
      {
        id: "w2",
        word: "Nuance",
        phonetic: "/ˈnuː.ɑːns/",
        partOfSpeech: "noun",
        simpleDefinition: "A subtle difference in or shade of meaning, expression, or sound.",
        insteadOf: "subtle detail / fine difference / tiny catch",
        whyUseIt: "Shows you understand that real life isn't just black and white; there are layers to the situation.",
        casualExample: "I like his sense of humor, but there's a lot of nuance in his sarcasm that people miss.",
        proExample: "There's a subtle nuance between asking for feedback and asking for permission.",
        nuanceTip: "Often used with 'lost in' (e.g. 'the nuance got lost in text messages') or 'appreciate the nuance'.",
        missions: [
          "Use 'nuance' when pointing out that an issue is more complex than it appears.",
          "Notice how tone of voice changes meaning in a phone call today."
        ],
        practiceQuestion: {
          scenario: "You're reviewing a customer complaint and realize the client wasn't angry about the product itself, but how the policy was worded. You remark:",
          options: [
            "We need to eliminate all nuance in our emails.",
            "There's an important nuance here: the product worked, but our phrasing felt dismissive.",
            "The client has zero nuance for our company."
          ],
          correctIndex: 1,
          explanation: "Nuance highlights a crucial subtle distinction between two closely related things."
        },
        writingPrompt: "Write one sentence about a topic where people often overlook the nuance (e.g., remote vs in-office work, diet trends, or movies)."
      },
      {
        id: "w3",
        word: "Tenable",
        phonetic: "/ˈten.ə.bəl/",
        partOfSpeech: "adjective",
        simpleDefinition: "Able to be maintained, defended, or justified against objection or difficulty.",
        insteadOf: "defensible / workable / sustainable",
        whyUseIt: "Much crisper than saying 'we can keep doing this without falling apart'.",
        casualExample: "Staying up until 2 AM every night to study just isn't tenable long term.",
        proExample: "Our current staffing model is no longer tenable if sales double next quarter.",
        nuanceTip: "Frequently heard in the negative: 'untenable' (e.g., 'an untenable situation').",
        missions: [
          "Use 'tenable' or 'untenable' to describe a busy schedule or routine this week.",
          "Think of a habit that is no longer sustainable and call it 'untenable'."
        ],
        practiceQuestion: {
          scenario: "Commuting three hours each way every day in heavy traffic has burned someone out. They say:",
          options: [
            "This commute is completely tenable.",
            "This daily commute is simply not tenable anymore.",
            "I feel very tenable when driving."
          ],
          correctIndex: 1,
          explanation: "'Not tenable' (or untenable) means it cannot be reasonably sustained."
        },
        writingPrompt: "Think about a project or lifestyle habit. Is it tenable for the next 12 months? Why or why not?"
      },
      {
        id: "w4",
        word: "Delineate",
        phonetic: "/dɪˈlɪn.i.eɪt/",
        partOfSpeech: "verb",
        simpleDefinition: "To describe, explain, or outline with precision and clear boundaries.",
        insteadOf: "map out / clearly explain / spell out",
        whyUseIt: "Sounds decisive and structured, especially when dividing responsibilities.",
        casualExample: "Before we split the road trip costs, let's delineate who paid for gas versus groceries.",
        proExample: "The contract clearly delineates where the contractor's scope ends and ours begins.",
        nuanceTip: "Think of drawing a clean boundary line (from the Latin 'linea' = line).",
        missions: [
          "Use 'delineate' when setting clear boundaries or expectations in a chat.",
          "Mentally substitute 'delineate' when someone says 'can you outline that?'"
        ],
        practiceQuestion: {
          scenario: "You are planning an event with two friends and want to avoid overlapping tasks. You say:",
          options: [
            "Let's delineate our individual responsibilities so nobody duplicates work.",
            "Can you delineate this sandwich for me?",
            "I'm feeling very delineated today."
          ],
          correctIndex: 0,
          explanation: "'Delineate' means clearly outlining roles and boundaries."
        },
        writingPrompt: "Write a sentence delineating two different priorities you have for this month."
      },
      {
        id: "w5",
        word: "Salient",
        phonetic: "/ˈseɪ.li.ənt/",
        partOfSpeech: "adjective",
        simpleDefinition: "Most noticeable, prominent, or important.",
        insteadOf: "most important / key / standout",
        whyUseIt: "Helps you cut through fluff and bring people's focus directly to what matters.",
        casualExample: "She talked for twenty minutes, but the most salient point was that she's moving away.",
        proExample: "Let me summarize the three salient takeaways from today's client discussion.",
        nuanceTip: "Often paired with 'points', 'features', or 'facts'. Distinct from just 'interesting'—it must be crucially relevant.",
        missions: [
          "Highlight a 'salient point' in your next conversation or meeting.",
          "Identify the single most salient lesson you learned yesterday."
        ],
        practiceQuestion: {
          scenario: "After listening to an hour-long podcast with lots of trivia, your friend asks what actually mattered. You reply:",
          options: [
            "The salient point was that sleep quality directly affects morning focus.",
            "All the audio ads were the salient part.",
            "It was totally salient because it was loud."
          ],
          correctIndex: 0,
          explanation: "'Salient' points to the core, most prominent insight."
        },
        writingPrompt: "What is the most salient factor in your current career or personal goal right now?"
      },
      {
        id: "w6",
        word: "Expedient",
        phonetic: "/ɪkˈspiː.di.ənt/",
        partOfSpeech: "adjective",
        simpleDefinition: "Convenient and practical for achieving an immediate end, though sometimes disregarding strict principles.",
        insteadOf: "convenient shortcut / quick fix",
        whyUseIt: "Adds sophisticated color when talking about trade-offs between speed and thoroughness.",
        casualExample: "Ordering takeout was expedient, but making dinner at home would've been healthier.",
        proExample: "Patching the code was an expedient temporary fix, but we still need a permanent architectural redesign.",
        nuanceTip: "Can be neutral ('practical in the moment') or mildly critical ('cutting corners for quick gain').",
        missions: [
          "Use 'expedient' to describe a temporary shortcut you took today.",
          "Notice when someone chooses expediency over perfection."
        ],
        practiceQuestion: {
          scenario: "A team decides to use duct tape on a temporary sign rather than ordering a new frame before the VIP arrives. That choice was:",
          options: [
            "Expedient, though not a permanent solution.",
            "Completely theoretical.",
            "Highly tenable for the next decade."
          ],
          correctIndex: 0,
          explanation: "Expedient means fast and convenient in the moment to solve an immediate problem."
        },
        writingPrompt: "Describe an expedient shortcut you rely on during busy mornings."
      },
      {
        id: "w7",
        word: "Viable",
        phonetic: "/ˈvaɪ.ə.bəl/",
        partOfSpeech: "adjective",
        simpleDefinition: "Capable of working successfully; feasible.",
        insteadOf: "doable / workable / workable idea",
        whyUseIt: "Sounds much more professional than 'we could probably pull it off'.",
        casualExample: "Is driving through rush hour really a viable way to get to the airport on time?",
        proExample: "Until we see sustained user retention, that subscription tier isn't financially viable.",
        nuanceTip: "Comes from the French word for life ('vie')—a viable plan has the ingredients to survive in reality.",
        missions: [
          "Use 'viable alternative' or 'viable option' in casual conversation.",
          "Evaluate two route options for a weekend trip using 'viable'."
        ],
        practiceQuestion: {
          scenario: "You're deciding whether to hike a mountain trail in pouring rain without rain gear. You conclude:",
          options: [
            "It's a viable walk in the park.",
            "Continuing up the slippery peak without gear is not a viable option.",
            "The rain makes our boots very viable."
          ],
          correctIndex: 1,
          explanation: "'Viable' means feasible and capable of succeeding safely."
        },
        writingPrompt: "What is one viable habit change you could adopt this week that takes less than 5 minutes a day?"
      },
      {
        id: "w8",
        word: "Discretion",
        phonetic: "/dɪˈskreʃ.ən/",
        partOfSpeech: "noun",
        simpleDefinition: "1. The freedom to decide what should be done. 2. The quality of behaving in a way to avoid revealing private information.",
        insteadOf: "your choice / keeping it private / good judgment",
        whyUseIt: "Versatile word: 'at your discretion' conveys trust; 'exercise discretion' conveys tact.",
        casualExample: "I told Jake about the surprise party, but I asked him to use discretion so he doesn't spill it.",
        proExample: "You have full discretion on how to allocate the budget across your team.",
        nuanceTip: "Remember the two sides: 'discretionary spend' (freedom to choose) vs 'discreet person' (able to keep secrets).",
        missions: [
          "Use 'at your discretion' instead of 'whatever you want' when offering a choice.",
          "Praise someone for handling sensitive news with 'great discretion'."
        ],
        practiceQuestion: {
          scenario: "Your manager hands you a client gift budget and says you can pick whatever gifts you think fit best. She tells you:",
          options: [
            "You have zero discretion here.",
            "Use your discretion to choose appropriate gifts for each client.",
            "Please delineate your discretion into the box."
          ],
          correctIndex: 1,
          explanation: "'Use your discretion' means trust in your personal judgment to make the call."
        },
        writingPrompt: "Write a message giving someone permission to handle a task 'at their discretion'."
      },
      {
        id: "w9",
        word: "Benchmark",
        phonetic: "/ˈbentʃ.mɑːrk/",
        partOfSpeech: "noun / verb",
        simpleDefinition: "A standard or point of reference against which things may be compared or assessed.",
        insteadOf: "yardstick / point of comparison / standard",
        whyUseIt: "Gives concrete weight to comparisons instead of vague claims.",
        casualExample: "Her sourdough bread has become the benchmark against which I judge all bakeries.",
        proExample: "Let's benchmark our customer response times against the industry average.",
        nuanceTip: "Originally marked on stone by surveyors to place leveling rods. It's the baseline of quality or pace.",
        missions: [
          "Identify personal 'benchmarks' in your fitness, reading, or hobbies.",
          "Use 'benchmark' when comparing two options or past performances."
        ],
        practiceQuestion: {
          scenario: "You read 20 pages every night and use that pace to gauge how fast you'll finish a 400-page book. That 20 pages is your:",
          options: [
            "Benchmark pace.",
            "Equivocal speed.",
            "Delineated secret."
          ],
          correctIndex: 0,
          explanation: "A benchmark is a reference point used to evaluate progress or performance."
        },
        writingPrompt: "Name someone who sets the benchmark for clear communication in your circle, and why."
      },
      {
        id: "w10",
        word: "Untenable",
        phonetic: "/ʌnˈten.ə.bəl/",
        partOfSpeech: "adjective",
        simpleDefinition: "Not able to be defended, maintained, or occupied.",
        insteadOf: "impossible to defend / can't keep going like this",
        whyUseIt: "Instant clarity when an arrangement or argument has completely collapsed.",
        casualExample: "Paying half my salary in rent became untenable, so I found a roommate.",
        proExample: "His position that remote workers are less productive became untenable once the data came out.",
        nuanceTip: "The direct opposite of 'tenable'. Hits harder than 'unreasonable' because it means it literally cannot hold up.",
        missions: [
          "Use 'untenable' when calling out a deadline or process that is destined to break.",
          "Reflect on a past situation that became untenable and how you resolved it."
        ],
        practiceQuestion: {
          scenario: "A restaurant has 1 chef, 80 seats, and orders piling up for two hours with complaints everywhere. The manager says:",
          options: [
            "This kitchen setup is totally tenable.",
            "This operational bottleneck is completely untenable.",
            "Our menu is very nuanced."
          ],
          correctIndex: 1,
          explanation: "'Untenable' describes a breakdown that cannot reasonably continue."
        },
        writingPrompt: "Write a sentence explaining why a 7-day work week is untenable for creative thinking."
      }
    ]
  },
  {
    id: 2,
    title: "Day 2: Persuasion, Evidence & Articulation",
    subtitle: "Making your viewpoints compelling and crystal-clear",
    words: [
      {
        id: "w11",
        word: "Bolster",
        phonetic: "/ˈboʊl.stɚ/",
        partOfSpeech: "verb",
        simpleDefinition: "To support, strengthen, or build up.",
        insteadOf: "back up / support / pump up / make stronger",
        whyUseIt: "Dynamic, active verb that sounds energetic yet sophisticated.",
        casualExample: "A cup of coffee and a brisk walk really bolstered my mood this afternoon.",
        proExample: "We need customer testimonials and raw metrics to bolster our proposal before the board meeting.",
        nuanceTip: "Also a noun (a long thick pillow used for support). As a verb, you bolster arguments, confidence, defenses, or morale.",
        missions: [
          "Use 'bolster' when adding an extra piece of evidence in a friendly discussion.",
          "Notice what simple habits bolster your energy throughout the day."
        ],
        practiceQuestion: {
          scenario: "You want to convince your partner to choose a particular vacation spot, so you show them reviews and a promo code. You are trying to:",
          options: [
            "Bolster your recommendation.",
            "Delineate your boredom.",
            "Precipitate an argument."
          ],
          correctIndex: 0,
          explanation: "'Bolster' means reinforcing or supporting your case with more proof or incentives."
        },
        writingPrompt: "What is one fact or experience you could use to bolster a hobby or skill you recommend to others?"
      },
      {
        id: "w12",
        word: "Articulate",
        phonetic: "/ɑːrˈtɪk.jə.lət/ (adj) or /ɑːrˈtɪk.jə.leɪt/ (verb)",
        partOfSpeech: "adjective / verb",
        simpleDefinition: "Having or showing the ability to speak fluently and coherently; to express an idea clearly.",
        insteadOf: "well-spoken / good talker / express clearly",
        whyUseIt: "The gold standard compliment for someone whose ideas flow logically and effortlessly.",
        casualExample: "Even under pressure in the debate, she remained calm and remarkably articulate.",
        proExample: "Can you help me articulate this concept in simpler terms for the marketing copy?",
        nuanceTip: "Note pronunciation: adjective ends in '-lət', verb ends in '-leɪt'.",
        missions: [
          "Compliment someone today by calling their explanation 'articulate'.",
          "Practice articulating a complex thought in one concise sentence."
        ],
        practiceQuestion: {
          scenario: "Someone in a town hall meeting explains a complicated zoning law so clearly that everybody immediately understands. You tell your neighbor:",
          options: [
            "She's remarkably articulate on this topic.",
            "She speaks in an untenable way.",
            "Her points are very volatile."
          ],
          correctIndex: 0,
          explanation: "Articulate means expressing ideas with exceptional clarity and fluency."
        },
        writingPrompt: "Articulate in two sentences why you want to expand your daily vocabulary."
      },
      {
        id: "w13",
        word: "Cogent",
        phonetic: "/ˈkoʊ.dʒənt/",
        partOfSpeech: "adjective",
        simpleDefinition: "Clear, logical, and convincing.",
        insteadOf: "convincing / makes a lot of sense / solid point",
        whyUseIt: "Elevates an intellectual compliment. It doesn't just mean 'I agree'; it means the logic is airtight.",
        casualExample: "I was skeptical about electric cars, but Maya made a cogent argument about maintenance savings.",
        proExample: "The CFO delivered a cogent case for delaying the acquisition until interest rates stabilize.",
        nuanceTip: "From the Latin 'cogere' (to compel). A cogent argument compels agreement through sheer reason.",
        missions: [
          "Describe a podcast, article, or friend's opinion as 'cogent'.",
          "Strive to make your next feedback or proposal as cogent as possible."
        ],
        practiceQuestion: {
          scenario: "A teammate presents data that disproves a popular rumor with five well-documented charts. Their presentation was:",
          options: [
            "Specious and shaky.",
            "Cogent and impossible to dismiss.",
            "Too reticent to believe."
          ],
          correctIndex: 1,
          explanation: "Cogent means intellectually compelling, well-founded, and clear."
        },
        writingPrompt: "Write a short, cogent argument in favor of getting 8 hours of sleep."
      },
      {
        id: "w14",
        word: "Corroborate",
        phonetic: "/kəˈrɑː.bə.reɪt/",
        partOfSpeech: "verb",
        simpleDefinition: "To confirm or give support to a statement, theory, or finding with additional evidence.",
        insteadOf: "back up / confirm / verify",
        whyUseIt: "Carries weight—sounds like credible, objective verification.",
        casualExample: "I thought I saw a shooting star, and Sam corroborated it a second later.",
        proExample: "Recent customer surveys corroborate the analytics data showing high drop-off during checkout.",
        nuanceTip: "Don't say 'corroborate together' (redundant). You corroborate an account, story, or finding.",
        missions: [
          "Use 'corroborate' when verifying a story someone else told.",
          "Check a source to see if another publication corroborates a news headline."
        ],
        practiceQuestion: {
          scenario: "Two different witnesses describe the same license plate number of a fleeing car. The second witness:",
          options: [
            "Corroborates the first witness's testimony.",
            "Delineates the car's engine.",
            "Is being equivocal about the scene."
          ],
          correctIndex: 0,
          explanation: "'Corroborate' means to confirm or support a statement with independent evidence."
        },
        writingPrompt: "Write a sentence where someone's personal experience corroborates a piece of advice."
      },
      {
        id: "w15",
        word: "Lucid",
        phonetic: "/ˈluː.sɪd/",
        partOfSpeech: "adjective",
        simpleDefinition: "Expressed clearly; easy to understand; thinking clearly.",
        insteadOf: "crystal clear / straightforward / sharp-minded",
        whyUseIt: "Evokes luminous light and transparency. Much more elegant than 'easy to follow'.",
        casualExample: "Despite staying up all night, he gave a remarkably lucid explanation of the game rules.",
        proExample: "Her lucid writing style turns dry compliance manuals into readable guides.",
        nuanceTip: "Can describe both an explanation ('lucid prose') and someone's state of mind ('he was lucid after surgery').",
        missions: [
          "Praise a writer, lecturer, or friend for their 'lucid breakdown'.",
          "Aim for lucid explanations when answering questions today."
        ],
        practiceQuestion: {
          scenario: "You read a guide on personal finance that explains compound interest using zero confusing jargon. The guide is:",
          options: [
            "Lucid and accessible.",
            "Specious and chaotic.",
            "Untenable to follow."
          ],
          correctIndex: 0,
          explanation: "'Lucid' means crystal-clear and effortless to grasp."
        },
        writingPrompt: "Write a one-sentence lucid explanation of what your current job or main hobby entails."
      },
      {
        id: "w16",
        word: "Equivocal",
        phonetic: "/ɪˈkwɪv.ə.kəl/",
        partOfSpeech: "adjective",
        simpleDefinition: "Open to more than one interpretation; ambiguous; uncertain or questionable.",
        insteadOf: "wishy-washy / vague / ambiguous / non-committal",
        whyUseIt: "Perfect for describing answers or body language that refuse to take a clear stance.",
        casualExample: "When I asked if he wanted to come to dinner, he gave an equivocal 'maybe, we'll see'.",
        proExample: "The pilot test results were equivocal; user engagement rose slightly, but session time dropped.",
        nuanceTip: "Opposite is 'unequivocal' (absolute, zero doubt). If someone's words can mean two opposite things, they are equivocal.",
        missions: [
          "Use 'equivocal' to describe mixed signals or an indecisive statement.",
          "Identify an instance where being unequivocal is better than equivocal."
        ],
        practiceQuestion: {
          scenario: "A politician is asked if taxes will rise and answers: 'We will review all necessary levers at appropriate junctures.' That answer was:",
          options: [
            "Unequivocal and clear.",
            "Equivocal and deliberately evasive.",
            "Pragmatic and concise."
          ],
          correctIndex: 1,
          explanation: "'Equivocal' describes language that avoids a direct stance or is deliberately ambiguous."
        },
        writingPrompt: "Describe a situation where someone gave an equivocal response and what you did next."
      },
      {
        id: "w17",
        word: "Construe",
        phonetic: "/kənˈstruː/",
        partOfSpeech: "verb",
        simpleDefinition: "To interpret a word or action in a particular way.",
        insteadOf: "take it to mean / interpret / understand as",
        whyUseIt: "Helps prevent misunderstandings with precision and grace.",
        casualExample: "Please don't construe my silence as anger; I'm just genuinely exhausted.",
        proExample: "His constructive feedback was unfortunately construed by the team as personal criticism.",
        nuanceTip: "Frequently used with 'misconstrue' (misinterpret) and 'could be construed as...'.",
        missions: [
          "Use 'don't construe this as...' when delivering polite, honest feedback.",
          "Notice when someone might have misconstrued a text message."
        ],
        practiceQuestion: {
          scenario: "You tell someone you're skipping their weekend party to catch up on sleep, and you want to be sure they don't think you're mad at them. You say:",
          options: [
            "Don't construe my absence as anything personal—I just need rest.",
            "I am delineating your party.",
            "My attendance is an equivocal benchmark."
          ],
          correctIndex: 0,
          explanation: "'Construe' means to interpret an action or words in a specific way."
        },
        writingPrompt: "Write a clarification starting with: 'Please don't construe my question as skepticism, but...'"
      },
      {
        id: "w18",
        word: "Candid",
        phonetic: "/ˈkæn.dɪd/",
        partOfSpeech: "adjective",
        simpleDefinition: "Truthful and straightforward; frank; sincere.",
        insteadOf: "super honest / blunt without being rude / unfiltered",
        whyUseIt: "Carries warmth and integrity. Unlike 'blunt', 'candid' implies genuine sincerity rather than cruelty.",
        casualExample: "I appreciate your candid opinion on this outfit—I won't buy it.",
        proExample: "In our 1-on-1, she gave me candid feedback on my presentation pacing.",
        nuanceTip: "In photography, a 'candid shot' is unposed and natural. In conversation, it means unvarnished honesty.",
        missions: [
          "Thank someone today for being 'candid' with you.",
          "Say 'To be completely candid...' instead of 'TBH' or 'Honestly speaking'."
        ],
        practiceQuestion: {
          scenario: "Your close friend asks if their resume font looks childish, and you give them gentle but direct advice to switch to a classic serif. You were being:",
          options: [
            "Untenable.",
            "Candid and constructive.",
            "Equivocal and evasive."
          ],
          correctIndex: 1,
          explanation: "'Candid' means straightforward and sincere without hidden agendas."
        },
        writingPrompt: "Give a candid self-assessment of your strongest conversational skill and what you want to improve."
      },
      {
        id: "w19",
        word: "Evocative",
        phonetic: "/ɪˈvɑː.kə.tɪv/",
        partOfSpeech: "adjective",
        simpleDefinition: "Bringing strong images, memories, or feelings to mind.",
        insteadOf: "nostalgic / brings back memories / vivid",
        whyUseIt: "Much richer than 'it reminds me of...'. Sounds poetic and perceptive.",
        casualExample: "The smell of old wood and rain in this cabin is so evocative of my childhood summers.",
        proExample: "The campaign uses evocative storytelling rather than cold product specifications.",
        nuanceTip: "Comes from 'evoke' (to call forth). An evocative song, aroma, or phrase calls up visceral memories.",
        missions: [
          "Describe a song, scent, or photograph as 'evocative'.",
          "Notice how sensory details make your own stories more evocative."
        ],
        practiceQuestion: {
          scenario: "A melody in an old movie instantly makes you picture your grandmother's living room on Sunday mornings. That music is:",
          options: [
            "Evocative.",
            "Expedient.",
            "Untenable."
          ],
          correctIndex: 0,
          explanation: "'Evocative' means powerfully awakening specific memories, sights, or emotions."
        },
        writingPrompt: "Write a sentence describing an aroma or sound that is deeply evocative for you."
      },
      {
        id: "w20",
        word: "Conciliatory",
        phonetic: "/kənˈsɪl.i.ə.tɔːr.i/",
        partOfSpeech: "adjective",
        simpleDefinition: "Intended or likely to placate, pacify, or bring about agreement.",
        insteadOf: "peace-making / wanting to patch things up / olive-branch",
        whyUseIt: "Shows deep emotional intelligence when navigating conflict.",
        casualExample: "After their silly disagreement, he sent a conciliatory text offering to buy lunch.",
        proExample: "The CEO adopted a conciliatory tone during the union negotiations to ease tensions.",
        nuanceTip: "Think of offering an 'olive branch'—conciliatory gestures bridge gaps and reduce defensiveness.",
        missions: [
          "Adopt a conciliatory stance in a disagreement instead of digging your heels in.",
          "Recognize when someone makes a conciliatory remark and accept it with grace."
        ],
        practiceQuestion: {
          scenario: "After a tense argument over chores, your roommate leaves your favorite pastry on the counter with a smiley face note. That gesture was:",
          options: [
            "Conciliatory.",
            "Specious.",
            "Equivocal."
          ],
          correctIndex: 0,
          explanation: "A conciliatory action aims to calm friction, repair goodwill, and restore harmony."
        },
        writingPrompt: "Write a short, conciliatory response you could send after a minor miscommunication."
      }
    ]
  },
  {
    id: 3,
    title: "Day 3: Dynamics, Change & Momentum",
    subtitle: "Describing shifts, progress, and unpredictable situations",
    words: [
      {
        id: "w21",
        word: "Galvanize",
        phonetic: "/ˈɡæl.və.naɪz/",
        partOfSpeech: "verb",
        simpleDefinition: "To shock or excite someone into taking action.",
        insteadOf: "fire up / kick into gear / inspire to act",
        whyUseIt: "Electric energy. Far more active than just 'motivate' or 'encourage'.",
        casualExample: "Seeing the race photos from last year galvanized me to start running every morning.",
        proExample: "The competitor's sudden price drop galvanized our engineering team to ship earlier.",
        nuanceTip: "Originally derived from Luigi Galvani's experiments with electric currents twitching muscles. It conveys an instantaneous spark.",
        missions: [
          "Identify an event or talk that galvanized you recently.",
          "Use 'galvanize' when talking about rallying friends or colleagues."
        ],
        practiceQuestion: {
          scenario: "A community notices their local park is covered in trash, and within 24 hours 100 neighbors organize a cleanup drive. The litter problem:",
          options: [
            "Galvanized the neighborhood into action.",
            "Delineated the park's grass.",
            "Made the neighborhood reticent."
          ],
          correctIndex: 0,
          explanation: "'Galvanize' means to spur a group into rapid, energetic action."
        },
        writingPrompt: "What is an ambition you have that could be galvanized by setting a public deadline?"
      },
      {
        id: "w22",
        word: "Catalyst",
        phonetic: "/ˈkæt̬.əl.ɪst/",
        partOfSpeech: "noun",
        simpleDefinition: "A person or thing that precipitates an event or accelerates change.",
        insteadOf: "spark / trigger / game-changer",
        whyUseIt: "Crisp and scientific yet natural in everyday speech.",
        casualExample: "Moving into my own apartment was the catalyst that taught me how to budget.",
        proExample: "Her hiring proved to be the catalyst for our team's entire cultural turnaround.",
        nuanceTip: "In chemistry, a catalyst speeds up a reaction without being consumed itself. In life, it's the spark that gets things rolling.",
        missions: [
          "Reflect on a book or conversation that served as a personal catalyst.",
          "Use 'catalyst' when explaining why a major life shift began."
        ],
        practiceQuestion: {
          scenario: "A quiet programmer shares a quick script that automates a boring daily spreadsheet, sparking the whole office to rethink their tools. That script was a:",
          options: [
            "Catalyst for modernization.",
            "Conciliatory gesture.",
            "Specious illusion."
          ],
          correctIndex: 0,
          explanation: "A catalyst initiates and speeds up wider transformation."
        },
        writingPrompt: "Write about a small moment that turned out to be a major catalyst in your life."
      },
      {
        id: "w23",
        word: "Mitigate",
        phonetic: "/ˈmɪt̬.ə.ɡeɪt/",
        partOfSpeech: "verb",
        simpleDefinition: "To make less severe, serious, or painful.",
        insteadOf: "soften the blow / lessen the damage / tone down",
        whyUseIt: "Sound proactive and measured. You don't just hope for the best—you mitigate risk.",
        casualExample: "Drinking plenty of water and stretching helps mitigate next-day muscle soreness.",
        proExample: "We can mitigate client friction by proactively sending weekly status updates.",
        nuanceTip: "Don't confuse 'mitigate' with 'militate' (e.g. 'militate against' = fight against). You mitigate risks, harm, or fallout.",
        missions: [
          "Substitute 'mitigate' when discussing ways to reduce stress or risk.",
          "Explain how a simple preparation mitigates an inconvenience."
        ],
        practiceQuestion: {
          scenario: "You back up your phone before doing a major software update in case something crashes. You did that to:",
          options: [
            "Mitigate the risk of data loss.",
            "Galvanize your battery life.",
            "Construe the new features."
          ],
          correctIndex: 0,
          explanation: "'Mitigate' means taking proactive steps to diminish potential harm or loss."
        },
        writingPrompt: "What is one proactive habit you use to mitigate stress during busy weeks?"
      },
      {
        id: "w24",
        word: "Exacerbate",
        phonetic: "/ɪɡˈzæs.ɚ.beɪt/",
        partOfSpeech: "verb",
        simpleDefinition: "To make a problem, bad situation, or negative feeling worse.",
        insteadOf: "make it worse / add fuel to the fire / aggravate",
        whyUseIt: "More articulate and punchy than 'making it worse'.",
        casualExample: "Arguing on an empty stomach only exacerbated our crankiness.",
        proExample: "Interrupting the upset client will only exacerbate the conflict; let them finish first.",
        nuanceTip: "Opposite of 'mitigate'. Think: mitigate cools the flame; exacerbate pours kerosene on it.",
        missions: [
          "Use 'exacerbate' when identifying behaviors that inflame a tricky situation.",
          "Catch yourself before taking an action that might exacerbate tension."
        ],
        practiceQuestion: {
          scenario: "A car has squeaking brakes, and driving it through mud and gravel every day makes the grinding sound twice as loud. That driving:",
          options: [
            "Exacerbated the brake problem.",
            "Mitigated the wear and tear.",
            "Corroborated the wheels."
          ],
          correctIndex: 0,
          explanation: "'Exacerbate' means making an already bad condition significantly worse."
        },
        writingPrompt: "Write a sentence describing how poor communication can exacerbate a minor misunderstanding."
      },
      {
        id: "w25",
        word: "Fleeting",
        phonetic: "/ˈfliː.tɪŋ/",
        partOfSpeech: "adjective",
        simpleDefinition: "Lasting for a very short time; brief or momentary.",
        insteadOf: "short-lived / passes in a blink / here and gone",
        whyUseIt: "Brings poetic sensitivity to everyday moments and time management.",
        casualExample: "We caught a fleeting glimpse of a dolphin just before the boat turned back.",
        proExample: "Viral attention is fleeting; building a dependable product is what creates enduring value.",
        nuanceTip: "Often paired with 'glimpse', 'moment', 'pleasure', or 'youth'. Conveys precious transience.",
        missions: [
          "Describe a beautiful moment today as 'fleeting'.",
          "Remind yourself that temporary frustrations are merely fleeting."
        ],
        practiceQuestion: {
          scenario: "A stunning golden sunset lights up the sky for exactly four minutes before darkness falls. The display was:",
          options: [
            "Fleeting but unforgettable.",
            "Untenable and harsh.",
            "A pragmatic view."
          ],
          correctIndex: 0,
          explanation: "'Fleeting' describes something exquisite or transient that disappears quickly."
        },
        writingPrompt: "Reflect on a fleeting moment today that you appreciated before it passed."
      },
      {
        id: "w26",
        word: "Capricious",
        phonetic: "/kəˈprɪʃ.əs/",
        partOfSpeech: "adjective",
        simpleDefinition: "Given to sudden and unaccountable changes of mood or behavior; unpredictable.",
        insteadOf: "moody / unpredictable / fickle / random",
        whyUseIt: "Far more expressive than 'flakey' or 'erratic'.",
        casualExample: "Spring weather in Melbourne is capricious—sunny one hour, hail the next.",
        proExample: "You can't build a sustainable business model on the capricious whims of social media algorithms.",
        nuanceTip: "Pronounced kuh-PRISH-us. Stems from the goat (capra) leaping unpredictably.",
        missions: [
          "Use 'capricious' to describe volatile weather or fickle trends.",
          "Identify an unpredictability in life that requires flexibility."
        ],
        practiceQuestion: {
          scenario: "A restaurant owner changes the menu every two days based purely on whatever random recipe video popped up on their feed that morning. Their management is:",
          options: [
            "Capricious.",
            "Pragmatic.",
            "Conciliatory."
          ],
          correctIndex: 0,
          explanation: "'Capricious' means governed by sudden, arbitrary impulses."
        },
        writingPrompt: "Write a sentence contrasting a reliable friend with a capricious acquaintance."
      },
      {
        id: "w27",
        word: "Volatile",
        phonetic: "/ˈvɑː.lə.t̬əl/",
        partOfSpeech: "adjective",
        simpleDefinition: "Liable to change rapidly and unpredictably, especially for the worse.",
        insteadOf: "explosive / unstable / jumpy / on edge",
        whyUseIt: "Standard in business, finance, and emotional situations to describe tense instability.",
        casualExample: "The room got volatile the moment politics were brought up at dinner.",
        proExample: "Crypto markets remain highly volatile compared to index funds.",
        nuanceTip: "In chemistry, a volatile liquid evaporates easily or ignites. In human dynamics, it implies a powder keg waiting for a spark.",
        missions: [
          "Describe a fluctuating situation or market as 'volatile'.",
          "De-escalate a volatile tone in a group discussion."
        ],
        practiceQuestion: {
          scenario: "Stock prices swinging up 12% in the morning and crashing 15% by afternoon are experiencing:",
          options: [
            "High volatility (volatile behavior).",
            "A tenable stability.",
            "A conciliatory trend."
          ],
          correctIndex: 0,
          explanation: "'Volatile' characterizes sudden, sharp, and erratic fluctuations."
        },
        writingPrompt: "Write a sentence offering advice on how to stay calm when a situation turns volatile."
      },
      {
        id: "w28",
        word: "Enduring",
        phonetic: "/ɪnˈdʊr.ɪŋ/",
        partOfSpeech: "adjective",
        simpleDefinition: "Continuing or long-lasting; able to withstand hardship over time.",
        insteadOf: "lasting / timeless / sticking around",
        whyUseIt: "Warm, noble, and deeply positive way to describe lasting value or friendship.",
        casualExample: "Despite living in different continents for ten years, they share an enduring friendship.",
        proExample: "Simplicity of design is what gives Apple's industrial aesthetic its enduring appeal.",
        nuanceTip: "Unlike 'permanent' (which sounds rigid), 'enduring' honors things that survive hardships and tests of time.",
        missions: [
          "Praise an 'enduring quality' or relationship in your life.",
          "Distinguish between a passing fad and an enduring trend."
        ],
        practiceQuestion: {
          scenario: "A classic book written 80 years ago still sells millions of copies and resonates with teenage readers today. It has:",
          options: [
            "Enduring relevance.",
            "An expedient lifespan.",
            "An equivocal reputation."
          ],
          correctIndex: 0,
          explanation: "'Enduring' means retaining vitality and worth across extended time."
        },
        writingPrompt: "What is one enduring lesson your parents or mentors taught you?"
      },
      {
        id: "w29",
        word: "Inertia",
        phonetic: "/ɪˈnɝː.ʃə/",
        partOfSpeech: "noun",
        simpleDefinition: "A tendency to do nothing or to remain unchanged; resistance to movement.",
        insteadOf: "getting stuck in a rut / sluggishness / momentum of doing nothing",
        whyUseIt: "Translates a law of physics into a psychological insight: objects at rest stay at rest until acted upon.",
        casualExample: "The hardest part of going to the gym is overcoming morning inertia and getting off the couch.",
        proExample: "Organizational inertia is why legacy corporations struggle to innovate as fast as startups.",
        nuanceTip: "Can refer both to staying still ('overcoming inertia') and continuing in one direction without thinking.",
        missions: [
          "Acknowledge 'inertia' when you feel stuck starting a chore.",
          "Use a 2-minute rule to break physical or mental inertia."
        ],
        practiceQuestion: {
          scenario: "A company continues printing 50-page paper catalogs every week just because 'that's how we've always done it', even though nobody reads them. That is an example of:",
          options: [
            "Institutional inertia.",
            "A pragmatic pivot.",
            "A fleeting impulse."
          ],
          correctIndex: 0,
          explanation: "Inertia is the natural resistance to changing an existing pattern or motion."
        },
        writingPrompt: "Write about a small trick you use to overcome mental inertia when tackling hard tasks."
      },
      {
        id: "w30",
        word: "Precipitate",
        phonetic: "/prɪˈsɪp.ə.teɪt/",
        partOfSpeech: "verb",
        simpleDefinition: "To cause an event or situation (typically an undesirable one) to happen suddenly, unexpectedly, or prematurely.",
        insteadOf: "trigger / bring on / set off / speed up",
        whyUseIt: "Sounds analytical and observant when dissecting cause and effect.",
        casualExample: "His impulsive remark precipitated an awkward silence across the dinner table.",
        proExample: "The surprise resignation of the lead architect precipitated a complete overhaul of the roadmap.",
        nuanceTip: "As a verb: pre-SIP-i-tate. (As an adjective, pronounced pre-SIP-i-tit, it means hasty or rash).",
        missions: [
          "Use 'precipitate' to describe what triggered a chain reaction.",
          "Avoid rash decisions that might precipitate unnecessary stress."
        ],
        practiceQuestion: {
          scenario: "A sudden power outage across three server centers unexpectedly triggered an emergency company-wide shutdown. The outage:",
          options: [
            "Precipitated the shutdown.",
            "Bolstered the server speeds.",
            "Corroborated the power grid."
          ],
          correctIndex: 0,
          explanation: "'Precipitate' means to cause a sudden, consequential event to occur."
        },
        writingPrompt: "Describe an event that precipitated an unexpected change in your routine."
      }
    ]
  },
  {
    id: 4,
    title: "Day 4: Perception, Character & People",
    subtitle: "Reading rooms, understanding people, and expressing character traits",
    words: [
      {
        id: "w31",
        word: "Astute",
        phonetic: "/əˈstuːt/",
        partOfSpeech: "adjective",
        simpleDefinition: "Having or showing an ability to accurately assess situations or people and turn this to one's advantage.",
        insteadOf: "sharp / smart observer / perceptive / street-smart",
        whyUseIt: "A high-tier compliment that recognizes practical intelligence and keen situational awareness.",
        casualExample: "That was an astute observation about why Sarah seemed quiet during dinner.",
        proExample: "Thanks to an astute reading of market trends, the founders pivoted before competitors noticed.",
        nuanceTip: "Astute implies both keen perception AND knowing how to act on it (clever + practical).",
        missions: [
          "Compliment someone's 'astute insight' in a meeting or chat.",
          "Pay close attention to body language today and make an astute observation."
        ],
        practiceQuestion: {
          scenario: "A negotiator notices a slight pause in the seller's voice when discussing delivery dates and realizes delivery speed is their hidden weakness. That negotiator made an:",
          options: [
            "Astute deduction.",
            "Equivocal blunder.",
            "Untenable assumption."
          ],
          correctIndex: 0,
          explanation: "Astute means keenly perceptive and quick to spot tactical details."
        },
        writingPrompt: "Write about an astute observation you made recently about someone's unspoken preference."
      },
      {
        id: "w32",
        word: "Discerning",
        phonetic: "/dɪˈsɝː.nɪŋ/",
        partOfSpeech: "adjective",
        simpleDefinition: "Having or showing good judgment, taste, and discrimination.",
        insteadOf: "picky in a good way / having great taste / selective",
        whyUseIt: "Far more flattering than 'picky'. Conveys refined standards and high discernment.",
        casualExample: "She's a discerning reader who only buys three or four carefully chosen books a year.",
        proExample: "Discerning enterprise clients care much more about uptime and data privacy than flashy animations.",
        nuanceTip: "Comes from 'discern' (to distinguish). A discerning person separates quality from fluff.",
        missions: [
          "Describe someone with great aesthetic taste as 'discerning'.",
          "Apply a discerning eye to your shopping or media consumption today."
        ],
        practiceQuestion: {
          scenario: "A food critic immediately notices when an Italian restaurant uses authentic Sicilian olive oil versus generic vegetable blends. She has a:",
          options: [
            "Discerning palate.",
            "Capricious tongue.",
            "Fleeting taste."
          ],
          correctIndex: 0,
          explanation: "'Discerning' highlights refined discrimination between subtle quality differences."
        },
        writingPrompt: "In what area of your life (music, coffee, tools, books) are you most discerning?"
      },
      {
        id: "w33",
        word: "Reticent",
        phonetic: "/ˈret̬.ə.sənt/",
        partOfSpeech: "adjective",
        simpleDefinition: "Not revealing one's thoughts or feelings readily; reserved or hesitant.",
        insteadOf: "hesitant / shy / keeping quiet / reluctant to share",
        whyUseIt: "More dignified than 'shy'. It implies a deliberate choice to hold back rather than insecurity.",
        casualExample: "He was reticent about his previous job until we got to know each other better.",
        proExample: "Investors were reticent to commit capital until the patent approval came through.",
        nuanceTip: "Don't confuse with 'reluctant'—though reticent often leads to reluctance, it specifically relates to holding back words and feelings.",
        missions: [
          "Use 'reticent' when someone is keeping their cards close to their chest.",
          "Notice when being reticent in a conversation is wiser than oversharing."
        ],
        practiceQuestion: {
          scenario: "When asked about the secret recipe, the chef smiled warmly but politely changed the subject. The chef was:",
          options: [
            "Reticent on the subject.",
            "Exacerbating the kitchen.",
            "Being completely tenable."
          ],
          correctIndex: 0,
          explanation: "'Reticent' means intentionally reserved and disinclined to disclose information."
        },
        writingPrompt: "Describe a topic about which you are naturally reticent in casual social settings."
      },
      {
        id: "w34",
        word: "Gregarious",
        phonetic: "/ɡrɪˈɡer.i.əs/",
        partOfSpeech: "adjective",
        simpleDefinition: "Fond of company; sociable; enjoying being in crowds.",
        insteadOf: "super friendly / life of the party / extroverted",
        whyUseIt: "Vibrant and celebratory description of an outgoing social personality.",
        casualExample: "Leo is so gregarious that within ten minutes at the hostel, he had made five new friends.",
        proExample: "Her gregarious personality makes her a natural fit for client relations and conference hosting.",
        nuanceTip: "From the Latin 'grex' (flock or herd). A gregarious person genuinely thrives in the middle of the flock.",
        missions: [
          "Describe an outgoing friend as 'gregarious'.",
          "Embrace a moment of gregarious energy today by striking up a chat with someone new."
        ],
        practiceQuestion: {
          scenario: "Your cousin loves throwing huge 40-person backyard barbecues and chatting with strangers in elevator lobbies. He is:",
          options: [
            "Gregarious.",
            "Reticent.",
            "Circumspect."
          ],
          correctIndex: 0,
          explanation: "'Gregarious' means naturally enthusiastic about social interaction and crowds."
        },
        writingPrompt: "Are you more reticent or gregarious in large gatherings? Explain in two sentences."
      },
      {
        id: "w35",
        word: "Tacit",
        phonetic: "/ˈtæs.ɪt/",
        partOfSpeech: "adjective",
        simpleDefinition: "Understood or implied without being stated aloud.",
        insteadOf: "unspoken / understood without saying / silent agreement",
        whyUseIt: "Extremely useful in discussing social norms, team dynamics, and unspoken contracts.",
        casualExample: "There's a tacit agreement among our roommates that whoever finishes the milk buys the next carton.",
        proExample: "By not objecting to the revised proposal during the meeting, the board gave its tacit approval.",
        nuanceTip: "Think 'taciturn' (silent). Tacit refers to things that are communicated through silence or implicit consensus.",
        missions: [
          "Identify a 'tacit understanding' that exists in your household or friend group.",
          "Use 'tacit approval' or 'tacit consent' when analyzing a team decision."
        ],
        practiceQuestion: {
          scenario: "Whenever you and your partner go to movies, you hold the tickets and they buy the popcorn—you've never formally discussed it, but you've done it for 5 years. That is a:",
          options: [
            "Tacit agreement.",
            "Capricious mandate.",
            "Specious policy."
          ],
          correctIndex: 0,
          explanation: "'Tacit' describes an understanding that is mutually recognized without being verbally declared."
        },
        writingPrompt: "What is an unspoken tacit rule people follow in your favorite coffee shop or gym?"
      },
      {
        id: "w36",
        word: "Circumspect",
        phonetic: "/ˈsɝː.kəm.spekt/",
        partOfSpeech: "adjective",
        simpleDefinition: "Wary and unwilling to take unnecessary risks; prudent.",
        insteadOf: "cautious / careful / looking before you leap",
        whyUseIt: "Carries intellectual poise. It means you are surveying every angle before committing.",
        casualExample: "After getting scammed on an online marketplace once, he became far more circumspect with sellers.",
        proExample: "Given the shaky macroeconomic climate, our CFO is being circumspect with large capital expenditures.",
        nuanceTip: "From 'circum' (around) + 'spect' (look). Literally 'looking all around you'.",
        missions: [
          "Advise someone to be 'circumspect' before signing a contract.",
          "Describe a calculated, careful pause as circumspect."
        ],
        practiceQuestion: {
          scenario: "Before investing his life savings in a new crypto startup, Marcus hires a financial advisor and reads three audit reports. He is being:",
          options: [
            "Circumspect.",
            "Gregarious.",
            "Precipitate."
          ],
          correctIndex: 0,
          explanation: "'Circumspect' implies carefully considering all risks and potential consequences."
        },
        writingPrompt: "Describe a decision where being circumspect saved you from a headache."
      },
      {
        id: "w37",
        word: "Plausible",
        phonetic: "/ˈplɑː.zə.bəl/",
        partOfSpeech: "adjective",
        simpleDefinition: "Seeming reasonable or probable; believable.",
        insteadOf: "believable / could be true / makes sense",
        whyUseIt: "Nuanced: something can be plausible without necessarily being proven true.",
        casualExample: "His excuse that his phone battery died sounds plausible, but it happens suspiciously often.",
        proExample: "We evaluated three plausible theories for the server crash, and verified the database leak first.",
        nuanceTip: "Often paired with 'plausible deniability' or 'plausible explanation'. It stands up to preliminary logic.",
        missions: [
          "Use 'plausible explanation' when discussing a mystery or odd event.",
          "Distinguish between what is possible vs what is actually plausible."
        ],
        practiceQuestion: {
          scenario: "Someone claims they were late because an alien spaceship blocked the freeway. Is that explanation:",
          options: [
            "Plausible.",
            "Implausible (not plausible).",
            "Tacit."
          ],
          correctIndex: 1,
          explanation: "An alien blocking the freeway defies reason and credibility, making it completely implausible."
        },
        writingPrompt: "Provide a plausible explanation for why a package arrived two days later than expected."
      },
      {
        id: "w38",
        word: "Fastidious",
        phonetic: "/fæsˈtɪd.i.əs/",
        partOfSpeech: "adjective",
        simpleDefinition: "Very attentive to and concerned about accuracy and detail; very particular.",
        insteadOf: "super meticulous / perfectionist / neat freak",
        whyUseIt: "Far more respectful than calling someone 'anal' or 'obsessive'. It honors precision and standards.",
        casualExample: "He's fastidious about his vinyl record collection—nobody touches them without clean hands.",
        proExample: "Our fastidious quality assurance lead caught three minor edge-case bugs before launch.",
        nuanceTip: "Can be complimentary (thorough craft) or mildly critique excessive fussiness depending on tone.",
        missions: [
          "Praise someone's 'fastidious attention to detail'.",
          "Identify an activity where being fastidious is an undeniable advantage."
        ],
        practiceQuestion: {
          scenario: "A watchmaker uses tweezers under a magnifying loupe to position a 0.5-millimeter gear with absolute exactness. The watchmaker is:",
          options: [
            "Fastidious in their craftsmanship.",
            "Volatile in their work.",
            "Equivocal about time."
          ],
          correctIndex: 0,
          explanation: "'Fastidious' describes extreme care, precision, and devotion to minute details."
        },
        writingPrompt: "In what hobby or chore are you most fastidious, and why?"
      },
      {
        id: "w39",
        word: "Unassuming",
        phonetic: "/ˌʌn.əˈsuː.mɪŋ/",
        partOfSpeech: "adjective",
        simpleDefinition: "Not pretentious or arrogant; modest and humble.",
        insteadOf: "humble / low-key / doesn't show off",
        whyUseIt: "A gentle, admiring term for people or places that are deeply competent without needing spotlight.",
        casualExample: "Behind an unassuming little storefront in Chinatown is the best noodle shop in the city.",
        proExample: "Despite founding a billion-dollar company, she remains quiet, approachable, and unassuming.",
        nuanceTip: "Applies to people ('unassuming manner') and places ('an unassuming facade').",
        missions: [
          "Compliment someone's 'unassuming demeanor'.",
          "Notice an unassuming spot in your city that punches well above its weight."
        ],
        practiceQuestion: {
          scenario: "A world-renowned pianist walks into a rehearsal wearing jeans and a faded sweater, treating the stagehands with the exact same warmth as the conductor. The pianist is:",
          options: [
            "Unassuming.",
            "Untenable.",
            "Fastidious and haughty."
          ],
          correctIndex: 0,
          explanation: "'Unassuming' describes someone who is genuinely unpretentious and modest despite great achievements."
        },
        writingPrompt: "Write about an unassuming mentor or colleague who made a lasting impression on you."
      },
      {
        id: "w40",
        word: "Empathetic",
        phonetic: "/ˌem.pəˈθet̬.ɪk/",
        partOfSpeech: "adjective",
        simpleDefinition: "Showing an ability to understand and share the feelings of another.",
        insteadOf: "caring / feeling for them / compassionate",
        whyUseIt: "Distinguishes 'sympathy' (feeling sorry for someone) from 'empathy' (feeling with someone).",
        casualExample: "She gave an empathetic nod that told me she had gone through the exact same heartbreak.",
        proExample: "Empathetic leaders listen to understand pain points before attempting to prescribe solutions.",
        nuanceTip: "Empathy steps into their shoes. Sympathy looks down from the shore with pity.",
        missions: [
          "Deliver an empathetic response instead of jumping straight into problem-solving mode.",
          "Use 'empathetic listener' to describe a supportive friend."
        ],
        practiceQuestion: {
          scenario: "When a colleague confides that they are overwhelmed with elderly parent care, you listen actively, validate their exhaustion, and don't dismiss their stress. You are being:",
          options: [
            "Empathetic.",
            "Expedient.",
            "Taciturn."
          ],
          correctIndex: 0,
          explanation: "Empathy involves genuinely sharing and understanding another's emotional experience."
        },
        writingPrompt: "Write a sentence showing empathetic validation to someone who just had a rough day."
      }
    ]
  },
  {
    id: 5,
    title: "Day 5: Contrast, Complexity & Substance",
    subtitle: "Distinguishing truth from appearance, and identifying patterns",
    words: [
      {
        id: "w41",
        word: "Quintessential",
        phonetic: "/ˌkwɪn.təˈsen.ʃəl/",
        partOfSpeech: "adjective",
        simpleDefinition: "Representing the most perfect or typical example of a quality or class.",
        insteadOf: "the classic example / ultimate / textbook definition",
        whyUseIt: "Flows beautifully in speech and paints an instantly recognizable archetype.",
        casualExample: "Sipping espresso on a rainy Tuesday morning in Rome is the quintessential travel memory.",
        proExample: "This case study provides the quintessential example of what happens when a company ignores customer feedback.",
        nuanceTip: "Root: 'quinta essentia' (the fifth essence/element). It represents the purest, distilled core of something.",
        missions: [
          "Describe your favorite comfort food as the 'quintessential' dish for cold evenings.",
          "Identify the quintessential movie or song of your teenage years."
        ],
        practiceQuestion: {
          scenario: "A friend serves afternoon tea with warm scones, clotted cream, and strawberry jam in vintage porcelain cups in a cottage garden. It was the:",
          options: [
            "Quintessential British afternoon tea.",
            "Untenable British breakfast.",
            "Expedient British snack."
          ],
          correctIndex: 0,
          explanation: "'Quintessential' captures the purest, archetypal embodiment of a cultural experience or concept."
        },
        writingPrompt: "What is your idea of the quintessential lazy Sunday?"
      },
      {
        id: "w42",
        word: "Ubiquitous",
        phonetic: "/juːˈbɪk.wə.t̬əs/",
        partOfSpeech: "adjective",
        simpleDefinition: "Present, appearing, or found everywhere.",
        insteadOf: "everywhere / all over the place / super common",
        whyUseIt: "Replaces the boring phrase 'everywhere you look' with a sharp, literate word.",
        casualExample: "Wireless earbuds have become ubiquitous—almost everyone on the subway has a pair.",
        proExample: "QR codes were once an obscure novelty, but they are now ubiquitous in modern dining.",
        nuanceTip: "Pronounced yoo-BIK-wuh-tuss. Use it for cultural phenomena, objects, or ideas that permeate daily life.",
        missions: [
          "Notice something ubiquitous in public today (e.g. smartphones, tote bags).",
          "Use 'ubiquitous' in a conversation about modern habits."
        ],
        practiceQuestion: {
          scenario: "You travel across three continents and see people in every airport using the exact same water bottle brand. That water bottle has become:",
          options: [
            "Ubiquitous.",
            "Reticent.",
            "Specious."
          ],
          correctIndex: 0,
          explanation: "'Ubiquitous' means universally encountered in nearly all environments."
        },
        writingPrompt: "Write about a technology that wasn't around 15 years ago but is now completely ubiquitous."
      },
      {
        id: "w43",
        word: "Disparity",
        phonetic: "/dɪˈspær.ə.t̬i/",
        partOfSpeech: "noun",
        simpleDefinition: "A great difference or noticeable inequality between two or more things.",
        insteadOf: "big gap / uneven difference / mismatch",
        whyUseIt: "Much stronger and more formal than 'gap' or 'difference'.",
        casualExample: "There was a hilarious disparity between the fancy restaurant menu and the tiny portions served.",
        proExample: "We noticed a wide disparity between what users claimed they wanted and what they actually clicked on.",
        nuanceTip: "Often implies an imbalance or unfairness, but can also simply denote an intriguing mismatch.",
        missions: [
          "Use 'disparity' when comparing expectations versus reality.",
          "Analyze the disparity between two competing products or quotes."
        ],
        practiceQuestion: {
          scenario: "Two contractors quote prices for painting the same bedroom: one asks for $300, the other asks for $2,800. There is a huge:",
          options: [
            "Disparity in their estimates.",
            "Equivocal compromise.",
            "Tacit agreement."
          ],
          correctIndex: 0,
          explanation: "'Disparity' highlights a pronounced, noticeable divergence between figures or circumstances."
        },
        writingPrompt: "Describe a disparity between your expectations of a hobby and the actual reality of doing it."
      },
      {
        id: "w44",
        word: "Paradox",
        phonetic: "/ˈper.ə.dɑːks/",
        partOfSpeech: "noun",
        simpleDefinition: "A seemingly absurd or self-contradictory statement or proposition that when investigated or explained may prove to be well founded or true.",
        insteadOf: "weird contradiction / irony / catch-22",
        whyUseIt: "Invites people to think deeper about complex truths that seem opposed on the surface.",
        casualExample: "It's the paradox of modern dating apps: you have infinite choices, yet people feel more lonely.",
        proExample: "The paradox of high productivity is that the more efficient you become, the more work people assign to you.",
        nuanceTip: "Adjective form is 'paradoxical'. It's not just a contradiction—it has a deeper truth hiding underneath.",
        missions: [
          "Identify a everyday paradox (e.g. sleep, social media, silence).",
          "Use 'paradoxically' to introduce an unexpected insight."
        ],
        practiceQuestion: {
          scenario: "A study discovers that the more convenience apps people install on their phones, the less free time they report feeling. That situation represents a:",
          options: [
            "Modern paradox.",
            "Fastidious rule.",
            "Conciliatory gesture."
          ],
          correctIndex: 0,
          explanation: "A paradox is a contradiction that reveals an intriguing underlying psychological or systemic truth."
        },
        writingPrompt: "Write a sentence articulating the 'paradox of choice' when looking at a huge Netflix catalog."
      },
      {
        id: "w45",
        word: "Arbitrary",
        phonetic: "/ˈɑːr.bə.trer.i/",
        partOfSpeech: "adjective",
        simpleDefinition: "Based on random choice or personal whim, rather than any reason or system.",
        insteadOf: "random / just made up / picked out of thin air",
        whyUseIt: "Sharp intellectual criticism when questioning unnecessary rules or baseless requirements.",
        casualExample: "The rule that we can only wear black socks on Fridays seems completely arbitrary.",
        proExample: "Rather than picking an arbitrary deadline like next Monday, let's estimate the real development hours.",
        nuanceTip: "Opposite of 'principled' or 'methodical'. Calling something arbitrary challenges its legitimacy.",
        missions: [
          "Call out an 'arbitrary deadline' politely and ask for the rationale.",
          "Check whether one of your own assumptions is backed by facts or merely arbitrary."
        ],
        practiceQuestion: {
          scenario: "A manager sets a sales quota of exactly 73 units because 73 is their lucky roulette number. That target was:",
          options: [
            "Arbitrary.",
            "Pragmatic.",
            "Astute."
          ],
          correctIndex: 0,
          explanation: "'Arbitrary' describes choices made on whim or randomness rather than solid evidence."
        },
        writingPrompt: "Write about an arbitrary rule you encountered in school or a past job."
      },
      {
        id: "w46",
        word: "Anomaly",
        phonetic: "/əˈnɑː.mə.li/",
        partOfSpeech: "noun",
        simpleDefinition: "Something that deviates from what is standard, normal, or expected.",
        insteadOf: "fluke / weird exception / outlier",
        whyUseIt: "Sounds clinical, objective, and level-headed. It flags an outlier without panicking.",
        casualExample: "Yesterday's warm 75-degree weather in mid-January was a total anomaly.",
        proExample: "Our server spiked to 90% CPU usage for two minutes, but it appears to have been an isolated anomaly.",
        nuanceTip: "Adjective is 'anomalous'. Often used with 'statistical anomaly' or 'weather anomaly'.",
        missions: [
          "Use 'anomaly' to describe an unusual fluke or one-off occurrence.",
          "Distinguish between a temporary anomaly and a permanent shift in trend."
        ],
        practiceQuestion: {
          scenario: "A basketball player who usually shoots 40% from the three-point line misses 11 shots in a row during one game, then returns to 40% for the rest of the season. That off night was an:",
          options: [
            "Anomaly.",
            "Inertia.",
            "Articulate performance."
          ],
          correctIndex: 0,
          explanation: "An anomaly is an unusual deviation from an otherwise consistent pattern."
        },
        writingPrompt: "Describe an anomaly you noticed in your energy levels or daily routine recently."
      },
      {
        id: "w47",
        word: "Precedent",
        phonetic: "/ˈpres.ə.dənt/",
        partOfSpeech: "noun",
        simpleDefinition: "An earlier event or action that is regarded as an example or guide to be considered in subsequent similar circumstances.",
        insteadOf: "past example / setting an example / rule established before",
        whyUseIt: "Vital for workplace policy, family rules, and agreements: 'This sets a dangerous precedent.'",
        casualExample: "If I let my sister borrow my car once, it'll set a precedent and she'll ask every weekend.",
        proExample: "Offering a 50% discount to this client sets an unsustainable precedent for the rest of the sales team.",
        nuanceTip: "Note pronunciation: PRESS-i-dent (rhymes with president, but spelled differently). Common phrase: 'unprecedented' (never happened before).",
        missions: [
          "Use 'set a precedent' when discussing whether to make an exception to a rule.",
          "Recognize when you are following a healthy personal precedent."
        ],
        practiceQuestion: {
          scenario: "A parent lets their toddler stay up past midnight to eat ice cream on a Tuesday night. The parent worries this will:",
          options: [
            "Set a bad precedent for bedtime routines.",
            "Bolster their vocabulary.",
            "Mitigate all future tantrums."
          ],
          correctIndex: 0,
          explanation: "Setting a precedent creates a baseline expectation that others will point back to in the future."
        },
        writingPrompt: "Write a sentence warning someone why bending a rule today could set a risky precedent tomorrow."
      },
      {
        id: "w48",
        word: "Extrapolate",
        phonetic: "/ɪkˈstræp.ə.leɪt/",
        partOfSpeech: "verb",
        simpleDefinition: "To extend or project known facts or values into an area not yet known to arrive at a conclusion.",
        insteadOf: "guess based on data / project forward / read into the future",
        whyUseIt: "Shows mathematical rigor in casual analysis. You are taking a trend and extending the curve.",
        casualExample: "Just because he was grumpy on Monday morning doesn't mean we can extrapolate that he hates his job.",
        proExample: "Based on our first 500 customers, we can extrapolate that annual recurring revenue will exceed $1M.",
        nuanceTip: "Warn people against 'over-extrapolating' from a tiny sample size.",
        missions: [
          "Use 'extrapolate' when estimating future outcomes from current clues.",
          "Check whether an assumption you made was extrapolated from too little evidence."
        ],
        practiceQuestion: {
          scenario: "You try two bites of a salad at a brand-new restaurant and assume the entire dinner menu must be spectacular. A friend might caution you:",
          options: [
            "Don't extrapolate the quality of the whole menu from just a salad.",
            "Your food is becoming untenable.",
            "That's a very conciliatory fork."
          ],
          correctIndex: 0,
          explanation: "'Extrapolate' means extending an isolated observation into a broad generalized conclusion."
        },
        writingPrompt: "Write a sentence showing how you might extrapolate your savings over the next three years."
      },
      {
        id: "w49",
        word: "Tangible",
        phonetic: "/ˈtæn.dʒə.bəl/",
        partOfSpeech: "adjective",
        simpleDefinition: "Perceptible by touch; clear and definite; real rather than imaginary.",
        insteadOf: "real / concrete / something you can actually see and hold",
        whyUseIt: "Brings abstract discussions down to concrete, measurable reality.",
        casualExample: "Cleaning the garage gave me a tangible sense of accomplishment that organizing my emails never does.",
        proExample: "We need to show the stakeholders tangible business outcomes, not just high-level philosophy.",
        nuanceTip: "Opposite is 'intangible' (like trust, brand equity, or mood). Tangible means touchable or provable.",
        missions: [
          "Identify one 'tangible result' of your daily study or fitness routine.",
          "Ask for 'tangible examples' when someone explains a vague concept."
        ],
        practiceQuestion: {
          scenario: "Instead of saying 'we improved communication', a project lead notes: 'Daily standup duration dropped by 14 minutes and pull request reviews rose by 25%.' These metrics are:",
          options: [
            "Tangible proof of improvement.",
            "Arbitrary feelings.",
            "Equivocal rumors."
          ],
          correctIndex: 0,
          explanation: "'Tangible' signifies concrete, perceptible, and verifiable evidence."
        },
        writingPrompt: "What is one tangible improvement you have noticed in your daily life over the past year?"
      },
      {
        id: "w50",
        word: "Superficial",
        phonetic: "/ˌsuː.pɚˈfɪʃ.əl/",
        partOfSpeech: "adjective",
        simpleDefinition: "Existing or occurring at or on the surface; not thorough, deep, or genuine.",
        insteadOf: "surface-level / shallow / skin-deep",
        whyUseIt: "Cuts through shallow appearances to demand real substance.",
        casualExample: "They seemed like best friends on Instagram, but their connection was completely superficial.",
        proExample: "A superficial fix to the homepage UI won't solve our fundamental database latency issues.",
        nuanceTip: "Can describe physical things ('a superficial scratch on the car door') or intellectual depth ('superficial understanding').",
        missions: [
          "Distinguish between superficial flattery and genuine appreciation.",
          "Look beyond superficial appearances when judging a new experience."
        ],
        practiceQuestion: {
          scenario: "A candidate memorized buzzwords for an interview but cannot explain how any of the algorithms actually work under the hood. Their technical knowledge is:",
          options: [
            "Superficial.",
            "Fastidious.",
            "Astute."
          ],
          correctIndex: 0,
          explanation: "'Superficial' indicates shallow, surface-level familiarity lacking real substance or comprehension."
        },
        writingPrompt: "Write a sentence contrasting a superficial conversation with a deeply engaging one."
      }
    ]
  },
  {
    id: 6,
    title: "Day 6: Social Grace, Tact & Conversation",
    subtitle: "Navigating delicate interactions with elegance and charm",
    words: [
      {
        id: "w51",
        word: "Demur",
        phonetic: "/dɪˈmɝː/",
        partOfSpeech: "verb",
        simpleDefinition: "To raise doubts or objections, or show reluctance; to politely hesitate.",
        insteadOf: "politely push back / hesitate / decline gently",
        whyUseIt: "Expresses respectful hesitation or civilized objection without hostility.",
        casualExample: "When they offered him the last slice of cake, he demurred, saying he was already full.",
        proExample: "The legal advisor demurred at the clause indemnifying the third-party vendor.",
        nuanceTip: "Don't confuse with 'demure' (shy/modest adjective). 'Demur' is a verb meaning to politely object or hold back.",
        missions: [
          "Use 'demur' when describing a polite refusal.",
          "Demur gracefully when offered something you'd rather decline."
        ],
        practiceQuestion: {
          scenario: "Your host insists on paying the entire hefty restaurant bill alone, but you offer to pay the tip and split the wine. You initially:",
          options: [
            "Demurred out of courtesy before compromising.",
            "Precipitated a violent fight.",
            "Were being ubiquitous."
          ],
          correctIndex: 0,
          explanation: "'Demur' signifies polite reluctance or hesitation in accepting something."
        },
        writingPrompt: "Write a sentence showing how someone politely demurred an invitation."
      },
      {
        id: "w52",
        word: "Defer",
        phonetic: "/dɪˈfɝː/",
        partOfSpeech: "verb",
        simpleDefinition: "1. Put off to a later time; postpone. 2. Submit humbly to someone else's wish or judgment out of respect.",
        insteadOf: "let them decide / yield to / postpone",
        whyUseIt: "'I'll defer to your judgment' is one of the most respectful and collaborative phrases in English.",
        casualExample: "You know this neighborhood way better than me, so I defer to you on where we should eat.",
        proExample: "On questions of technical scalability, the product managers defer to the lead systems engineer.",
        nuanceTip: "Two uses: 'defer the meeting' (postpone) vs 'defer to an expert' (respect their authority).",
        missions: [
          "Say 'I'll defer to you on this' to a friend or colleague whose expertise you trust.",
          "Notice when someone defers to your opinion."
        ],
        practiceQuestion: {
          scenario: "You are picking wine for a dinner party with a certified sommelier friend. You hand them the wine list and say:",
          options: [
            "I defer to your palate on this one.",
            "I am delineating your palate.",
            "You are an untenable guest."
          ],
          correctIndex: 0,
          explanation: "'Defer to' means yielding decision-making authority to someone with superior knowledge or authority."
        },
        writingPrompt: "Write a sentence using 'I defer to you' in a collaborative team context."
      },
      {
        id: "w53",
        word: "Diplomatic",
        phonetic: "/ˌdɪp.ləˈmæt̬.ɪk/",
        partOfSpeech: "adjective",
        simpleDefinition: "Having or showing an ability to deal with people in a sensitive, tactful, and effective way.",
        insteadOf: "tactful / polite / knows how to smooth things over",
        whyUseIt: "Celebrates the skill of telling the truth without burning bridges.",
        casualExample: "When asked if he liked the experimental soup, he gave a diplomatic answer about its unique texture.",
        proExample: "She handled the client's angry outburst with diplomatic poise, defusing the room immediately.",
        nuanceTip: "Being diplomatic doesn't mean lying; it means choosing words that preserve relationships and focus on resolution.",
        missions: [
          "Phrase a disagreement diplomatically today.",
          "Compliment someone's diplomatic phrasing after a tense exchange."
        ],
        practiceQuestion: {
          scenario: "A friend asks if their new haircut looks weird, and you say: 'It's a bold and modern change, though I also really loved your shoulder-length curls.' That response was:",
          options: [
            "Diplomatic and kind.",
            "Arbitrary and crude.",
            "Superficial and hostile."
          ],
          correctIndex: 0,
          explanation: "Diplomatic communication delivers honest feedback with tact and empathy."
        },
        writingPrompt: "Write a diplomatic response to a coworker whose idea is impractical."
      },
      {
        id: "w54",
        word: "Concede",
        phonetic: "/kənˈsiːd/",
        partOfSpeech: "verb",
        simpleDefinition: "To admit that something is true or valid after first denying or resisting it; to surrender or yield.",
        insteadOf: "admit you were wrong / give in / admit defeat",
        whyUseIt: "Shows intellectual honesty and confidence. Confident people aren't afraid to concede a point.",
        casualExample: "After re-reading the recipe, I had to concede that she was right about adding the salt earlier.",
        proExample: "The author conceded that the sample size in the preliminary trial was too narrow.",
        nuanceTip: "Conceding a point in a debate makes you look stronger and more trustworthy, not weaker.",
        missions: [
          "Concede a minor point in an argument with good humor.",
          "Say 'I concede that point' when someone presents compelling data."
        ],
        practiceQuestion: {
          scenario: "You insisted that the movie started at 7:30 PM, but your friend pulls out the digital ticket showing 7:00 PM. You say:",
          options: [
            "Alright, I concede—you were right, we need to hurry.",
            "I will bolster my tickets.",
            "Your ticket is completely equivocal."
          ],
          correctIndex: 0,
          explanation: "'Concede' means gracefully acknowledging the validity of the other party's point or evidence."
        },
        writingPrompt: "Write about a time you conceded an argument and felt better for doing so."
      },
      {
        id: "w55",
        word: "Resonate",
        phonetic: "/ˈrez.ən.eɪt/",
        partOfSpeech: "verb",
        simpleDefinition: "To evoke a feeling of shared emotion, agreement, or deep personal significance.",
        insteadOf: "hit home / click with me / struck a chord",
        whyUseIt: "Far more expressive than 'I liked it'. It explains why an idea or story moved you deeply.",
        casualExample: "His speech about finding work-life balance really resonated with everyone in the room.",
        proExample: "The marketing message didn't resonate with older demographics because the references were too niche.",
        nuanceTip: "Acoustically, to resonate is to vibrate in sympathy with a sound wave. Emotionally, it means your soul vibrated with that message.",
        missions: [
          "Tell a friend why a quote or podcast resonated with you today.",
          "Ask someone: 'Did that resonate with what you've been seeing?'"
        ],
        practiceQuestion: {
          scenario: "An author describes the feeling of walking through a quiet hometown after years away, and you feel tears in your eyes because you experienced the exact same thing. That passage:",
          options: [
            "Resonated deeply with you.",
            "Was completely arbitrary.",
            "Exacerbated your reading."
          ],
          correctIndex: 0,
          explanation: "'Resonate' conveys a deep emotional harmony between a message and personal experience."
        },
        writingPrompt: "What is a piece of advice or movie line that continues to resonate with you?"
      },
      {
        id: "w56",
        word: "Understate",
        phonetic: "/ˌʌn.dɚˈsteɪt/",
        partOfSpeech: "verb",
        simpleDefinition: "To describe or represent something as being smaller, worse, or less important than it actually is.",
        insteadOf: "downplay / make light of / play down",
        whyUseIt: "Commonly used in the idiom: 'It's hard to understate how important this is.'",
        casualExample: "Calling that 12-mile uphill hike 'a little walk' was definitely understating it.",
        proExample: "To say our customer support team is busy this week is an understatement.",
        nuanceTip: "Mastery of conversational English often relies on understated British-style irony or humor.",
        missions: [
          "Use the phrase 'to say X is an understatement' to emphasize an extreme situation.",
          "Notice how understating a triumph can sometimes feel classier than bragging."
        ],
        practiceQuestion: {
          scenario: "Someone survives a category 5 hurricane that ripped the roof off their garage and says: 'The wind was a bit breezy outside.' They are:",
          options: [
            "Understating the storm's intensity.",
            "Delineating the clouds.",
            "Being fastidious."
          ],
          correctIndex: 0,
          explanation: "'Understate' means intentionally portraying something as far less severe or massive than it is."
        },
        writingPrompt: "Write a humorous understatement describing a very hectic Monday morning."
      },
      {
        id: "w57",
        word: "Juxtapose",
        phonetic: "/ˈdʒʌk.stə.poʊz/",
        partOfSpeech: "verb",
        simpleDefinition: "To place or deal with close together for contrasting effect.",
        insteadOf: "put side by side / contrast / compare next to each other",
        whyUseIt: "Artistic, analytical word for highlighting contrasts between two images, concepts, or styles.",
        casualExample: "I love how the architect juxtaposed ultra-modern glass panels against centuries-old exposed brick.",
        proExample: "If you juxtapose our product's onboarding flow against our main competitor's, ours has half the steps.",
        nuanceTip: "Noun form: 'juxtaposition'. Use it when placing two distinct things together creates a startling or beautiful contrast.",
        missions: [
          "Notice a visual or stylistic juxtaposition in your city today.",
          "Juxtapose two different approaches to solving a problem in conversation."
        ],
        practiceQuestion: {
          scenario: "An art museum exhibits a 16th-century classical oil painting directly beside a neon cyberpunk digital sculpture to emphasize their differing takes on light. The curator has:",
          options: [
            "Juxtaposed the two artworks.",
            "Mitigated the oil paint.",
            "Dealt with an anomaly."
          ],
          correctIndex: 0,
          explanation: "'Juxtapose' means placing disparate items side-by-side to highlight comparative differences."
        },
        writingPrompt: "Write a sentence juxtaposing a calm morning routine with a chaotic workday."
      },
      {
        id: "w58",
        word: "Elucidate",
        phonetic: "/iˈluː.sə.deɪt/",
        partOfSpeech: "verb",
        simpleDefinition: "To make something clear; explain.",
        insteadOf: "shed light on / clear up / explain in detail",
        whyUseIt: "From the Latin 'lucidus' (light). Asking someone to elucidate is more polite and articulate than 'can you explain what you meant?'.",
        casualExample: "Could you elucidate why you think moving downtown will save us money?",
        proExample: "The professor elucidated the economic theory using simple examples from everyday grocery shopping.",
        nuanceTip: "Use sparingly so it doesn't sound stuffy; ideal when seeking thorough, clarifying elaboration.",
        missions: [
          "Politely ask someone: 'Could you elucidate that point a bit further?'",
          "Elucidate a complex hobby of yours to a curious friend."
        ],
        practiceQuestion: {
          scenario: "A doctor takes out a diagram and explains step-by-step how a new medication regulates blood pressure in clear terms. The doctor:",
          options: [
            "Elucidated the treatment mechanism.",
            "Exacerbated the illness.",
            "Was being equivocal."
          ],
          correctIndex: 0,
          explanation: "'Elucidate' means illuminating and clarifying something complex or opaque."
        },
        writingPrompt: "Write a sentence asking an expert to elucidate a confusing step in a tutorial."
      },
      {
        id: "w59",
        word: "Vindicate",
        phonetic: "/ˈvɪn.də.keɪt/",
        partOfSpeech: "verb",
        simpleDefinition: "To clear someone of blame or suspicion; to show or prove to be right, reasonable, or justified.",
        insteadOf: "prove right / clear my name / show that I wasn't crazy",
        whyUseIt: "Triumphant satisfaction. It's the feeling when time proves your controversial instinct was right all along.",
        casualExample: "I was ridiculed for bringing an umbrella on a sunny morning, but the sudden downpour vindicated me.",
        proExample: "The stellar quarterly earnings vindicated the CEO's controversial decision to acquire the cloud division.",
        nuanceTip: "Two nuances: clearing a person of false blame ('vindicated in court') or proving a prior choice correct ('history vindicated their bet').",
        missions: [
          "Share a story where your intuition was eventually vindicated.",
          "Use 'vindicate' when data proves a contrarian strategy right."
        ],
        practiceQuestion: {
          scenario: "You warned everyone that the bridge would be closed for construction, but they didn't believe you until the GPS redirected all traffic. You felt:",
          options: [
            "Vindicated.",
            "Untenable.",
            "Capricious."
          ],
          correctIndex: 0,
          explanation: "'Vindicated' means proven correct after being doubted or questioned."
        },
        writingPrompt: "Describe a moment when your intuition or unpopular opinion was vindicated."
      },
      {
        id: "w60",
        word: "Rebut",
        phonetic: "/rɪˈbʌt/",
        partOfSpeech: "verb",
        simpleDefinition: "To claim or prove that evidence or an accusation is false; to refute with arguments.",
        insteadOf: "argue back / shoot down / dispute",
        whyUseIt: "Far more disciplined than 'argue back'. Implies presenting methodical reasoning against a claim.",
        casualExample: "He accused me of never calling, but I rebutted with three recent call logs.",
        proExample: "Our legal team prepared a 10-page brief to rebut the competitor's patent infringement claim.",
        nuanceTip: "Noun form is 'rebuttal'. Distinct from merely disagreeing—it requires presenting contrary evidence.",
        missions: [
          "Offer a calm, evidence-based rebuttal instead of an emotional reaction.",
          "Use 'in rebuttal to...' during a debate or review."
        ],
        practiceQuestion: {
          scenario: "A reviewer claims an app crashes on login, and the developer shares a screen recording and server logs showing 100% uptime and smooth logins. The developer:",
          options: [
            "Rebutted the negative claim with proof.",
            "Conceded defeat immediately.",
            "Precipitated the app's deletion."
          ],
          correctIndex: 0,
          explanation: "'Rebut' means offering concrete counter-arguments or evidence to dismantle a claim."
        },
        writingPrompt: "Write a sentence showing how you might rebut a common misconception about your favorite subject."
      }
    ]
  },
  {
    id: 7,
    title: "Day 7: Emotional & Mental States",
    subtitle: "Articulating feelings and mindsets beyond 'happy', 'sad', or 'stressed'",
    words: [
      {
        id: "w61",
        word: "Poignant",
        phonetic: "/ˈpɔɪ.njənt/",
        partOfSpeech: "adjective",
        simpleDefinition: "Evoking a keen sense of sadness, regret, or deep touching emotion.",
        insteadOf: "bittersweet / touching / heart-wrenching / hits you right in the feelings",
        whyUseIt: "One of the most evocative words in English. Describes moments that are beautiful precisely because of their sadness.",
        casualExample: "Looking at photos of our childhood home right before the keys were handed over was deeply poignant.",
        proExample: "The documentary ends with a poignant tribute to the unsung nurses of the pandemic.",
        nuanceTip: "Pronunciation: POIN-yənt (the 'g' is silent). It captures the bittersweet ache of passing time or love.",
        missions: [
          "Identify a poignant moment in a film, song, or memory today.",
          "Describe a bittersweet life milestone as 'poignant'."
        ],
        practiceQuestion: {
          scenario: "An elderly grandfather plays the piano piece his late wife composed for their wedding fifty years ago as his family gathers in silence. The atmosphere was:",
          options: [
            "Poignant and emotionally stirring.",
            "Arbitrary and superficial.",
            "Expedient and brisk."
          ],
          correctIndex: 0,
          explanation: "'Poignant' denotes a piercing, touching mixture of love, memory, and tender sorrow."
        },
        writingPrompt: "Write a sentence capturing a poignant memory from your childhood or family history."
      },
      {
        id: "w62",
        word: "Ambivalent",
        phonetic: "/æmˈbɪv.ə.lənt/",
        partOfSpeech: "adjective",
        simpleDefinition: "Having mixed feelings or contradictory ideas about something or someone.",
        insteadOf: "torn / having mixed feelings / on the fence / conflicted",
        whyUseIt: "Far more precise than 'I don't know'. It means you simultaneously feel two strong, opposing emotions.",
        casualExample: "I feel ambivalent about moving: I'm thrilled about the new job, but devastated to leave my friends.",
        proExample: "Consumer sentiment toward generative AI remains ambivalent—people love the speed, but worry about copyright.",
        nuanceTip: "Don't confuse 'ambivalent' (torn between two feelings) with 'apathetic' (not caring at all). Ambivalence is caring deeply from both sides.",
        missions: [
          "Use 'ambivalent' to describe a decision where pros and cons are equally balanced.",
          "Distinguish between being indifferent versus being ambivalent."
        ],
        practiceQuestion: {
          scenario: "You've been offered a promotion that doubles your salary but requires moving across the country away from your family. You feel:",
          options: [
            "Ambivalent about accepting it.",
            "Completely indifferent and bored.",
            "Fastidious about the country."
          ],
          correctIndex: 0,
          explanation: "Ambivalence is experiencing competing, simultaneous positive and negative motivations."
        },
        writingPrompt: "Describe a decision or opportunity where you felt genuinely ambivalent."
      },
      {
        id: "w63",
        word: "Complacent",
        phonetic: "/kəmˈpleɪ.sənt/",
        partOfSpeech: "adjective",
        simpleDefinition: "Showing smug or uncritical satisfaction with oneself or one's achievements, often unaware of impending danger.",
        insteadOf: "too comfortable / resting on your laurels / getting lazy",
        whyUseIt: "A vital warning against slacking off after achieving initial success.",
        casualExample: "Just because we're up by ten points doesn't mean we can get complacent in the fourth quarter.",
        proExample: "Blockbuster became complacent with its retail video dominance and underestimated Netflix's streaming model.",
        nuanceTip: "Don't confuse with 'complaisant' (eager to please). Complacent means dangerously satisfied with the status quo.",
        missions: [
          "Guard against becoming complacent in a skill you've already mastered.",
          "Use 'complacent' when warning someone against premature celebration."
        ],
        practiceQuestion: {
          scenario: "A champion runner stops training hard three weeks before the finals because they easily beat their opponents last year, only to be overtaken by a newcomer. The champion had grown:",
          options: [
            "Complacent.",
            "Circumspect.",
            "Articulate."
          ],
          correctIndex: 0,
          explanation: "'Complacent' means resting smugly on past success while ignoring present threats."
        },
        writingPrompt: "Write about an area where people easily become complacent once they get comfortable."
      },
      {
        id: "w64",
        word: "Resilient",
        phonetic: "/rɪˈzɪl.jənt/",
        partOfSpeech: "adjective",
        simpleDefinition: "Able to withstand or recover quickly from difficult conditions or trauma.",
        insteadOf: "tough / bounces back / handles stress well",
        whyUseIt: "Acknowledges hardship while highlighting the inner strength to recover and adapt.",
        casualExample: "Children are surprisingly resilient; after a rough scrape and five minutes of crying, she was back on her bike.",
        proExample: "To survive supply chain disruptions, we need to design a more resilient logistics network.",
        nuanceTip: "In materials science, resilience is the capacity to absorb energy and rebound without breaking.",
        missions: [
          "Compliment a friend's resilient attitude after a tough setback.",
          "Reflect on how a past difficulty made you more resilient today."
        ],
        practiceQuestion: {
          scenario: "A startup's first product fails completely, but the team learns from user feedback, redesigns the app in two months, and secures 10,000 paying users on their second launch. The team is:",
          options: [
            "Resilient.",
            "Untenable.",
            "Equivocal."
          ],
          correctIndex: 0,
          explanation: "'Resilient' honors the capacity to endure shocks, adapt, and rebound stronger."
        },
        writingPrompt: "Write a sentence defining what personal resilience means to you in one sentence."
      },
      {
        id: "w65",
        word: "Sanguine",
        phonetic: "/ˈsæŋ.ɡwɪn/",
        partOfSpeech: "adjective",
        simpleDefinition: "Optimistic or positive, especially in an apparently bad or difficult situation.",
        insteadOf: "optimistic / cheerful in tough times / hopeful",
        whyUseIt: "Sounds cultured and measured. It's not naive Pollyanna cheerfulness; it's steady, rational optimism.",
        casualExample: "Despite the gloomy economic forecasts, our business partners remain sanguine about next quarter.",
        proExample: "She took a remarkably sanguine view of the delays, treating them as extra time for QA.",
        nuanceTip: "Originally from Latin 'sanguis' (blood), referring to the medieval bodily humor that made people warm and lively.",
        missions: [
          "Express a 'sanguine outlook' on an upcoming challenge.",
          "Balance cautious planning with a sanguine attitude."
        ],
        practiceQuestion: {
          scenario: "It begins drizzling on the morning of an outdoor wedding, but the bride smiles and says: 'The clouds will make our photos look gorgeous without harsh shadows.' She is being:",
          options: [
            "Sanguine.",
            "Reticent.",
            "Fastidious."
          ],
          correctIndex: 0,
          explanation: "'Sanguine' describes maintaining confident, cheerful optimism amidst adversity."
        },
        writingPrompt: "Write a sentence adopting a sanguine stance regarding an uncertain situation in your life."
      },
      {
        id: "w66",
        word: "Apprehensive",
        phonetic: "/ˌæp.rəˈhen.sɪv/",
        partOfSpeech: "adjective",
        simpleDefinition: "Anxious or fearful that something bad or unpleasant will happen.",
        insteadOf: "worried / nervous / having bad jitters",
        whyUseIt: "More nuanced than 'scared' or 'stressed'. Captures anticipatory unease before an event.",
        casualExample: "I'm a bit apprehensive about flying in this snowstorm, even though pilots are trained for it.",
        proExample: "Staff were apprehensive about the restructuring until leadership outlined the job protections.",
        nuanceTip: "Root: 'apprehend' (to grasp). Your mind is grasping at potential future dangers.",
        missions: [
          "Admit you feel 'a little apprehensive' about an upcoming event rather than claiming you are fine.",
          "Help soothe an apprehensive colleague with clear information."
        ],
        practiceQuestion: {
          scenario: "You have your first dental checkup in three years and your stomach is in knots as you sit in the waiting room. You are feeling:",
          options: [
            "Apprehensive.",
            "Sanguine.",
            "Conciliatory."
          ],
          correctIndex: 0,
          explanation: "'Apprehensive' describes specific anticipatory nervousness about an approaching event."
        },
        writingPrompt: "Describe an experience you were initially apprehensive about that turned out just fine."
      },
      {
        id: "w67",
        word: "Pensive",
        phonetic: "/ˈpen.sɪv/",
        partOfSpeech: "adjective",
        simpleDefinition: "Engaged in, involving, or reflecting deep or serious thought.",
        insteadOf: "lost in thought / daydreaming seriously / looking reflective",
        whyUseIt: "Graceful description of quiet contemplation, often with a hint of gentle melancholy.",
        casualExample: "He sat by the window in a pensive mood, watching the leaves drift into the courtyard.",
        proExample: "After reviewing the candid exit interviews, the founders grew quiet and pensive.",
        nuanceTip: "From the French 'penser' (to think). Suggests thoughtful inward reflection rather than distraction.",
        missions: [
          "Describe someone lost in deep thought as 'looking pensive'.",
          "Take a pensive 10-minute walk without your phone today."
        ],
        practiceQuestion: {
          scenario: "Your friend sits on a park bench gazing at the river, quietly replaying a long conversation they had with their mentor yesterday. They are in a:",
          options: [
            "Pensive state.",
            "Complacent mood.",
            "Capricious mode."
          ],
          correctIndex: 0,
          explanation: "'Pensive' portrays a quiet, solemn absorption in deep thought."
        },
        writingPrompt: "Write a sentence describing what puts you in a pensive state of mind."
      },
      {
        id: "w68",
        word: "Enamored",
        phonetic: "/ɪˈnæm.ɚd/",
        partOfSpeech: "adjective",
        simpleDefinition: "Be filled with a feeling of love for, or captivated and charmed by.",
        insteadOf: "in love with / super into / obsessed with",
        whyUseIt: "Warm and romantic, but equally effective for ideas, cities, books, and hobbies.",
        casualExample: "I spent three days in Kyoto and became completely enamored with Japanese pottery.",
        proExample: "The board was initially enamored with the CEO's charismatic presentation, but later asked for hard numbers.",
        nuanceTip: "Usually used with 'of' or 'with' (e.g. 'enamored with the idea'). Often used in the negative: 'I was not enamored with his tone.'",
        missions: [
          "Express how 'enamored' you are with a new song, author, or city.",
          "Politely indicate that you 'weren't particularly enamored' with an overhyped restaurant."
        ],
        practiceQuestion: {
          scenario: "After visiting a local bakery and tasting their cardamon buns, you talk about the pastry non-stop for three weeks and visit every Saturday. You are:",
          options: [
            "Enamored with their cardamom buns.",
            "Ambivalent toward the bakery.",
            "Reticent about dessert."
          ],
          correctIndex: 0,
          explanation: "'Enamored' means deeply captivated, charmed, and enthusiastic about something."
        },
        writingPrompt: "Write about a city, artist, or hobby you became completely enamored with."
      },
      {
        id: "w69",
        word: "Dispassionate",
        phonetic: "/dɪsˈpæʃ.ən.ət/",
        partOfSpeech: "adjective",
        simpleDefinition: "Not influenced by strong emotion, and so able to be rational and impartial.",
        insteadOf: "unbiased / objective / cool-headed / unemotional",
        whyUseIt: "Commands respect in mediation, analysis, and critical thinking.",
        casualExample: "When deciding whether to sell our family car, we needed a dispassionate look at repair costs vs value.",
        proExample: "A great judge must listen to heart-wrenching stories while maintaining a dispassionate adherence to the law.",
        nuanceTip: "It doesn't mean cold-hearted or robotic—it means having the self-control to keep emotion from distorting truth.",
        missions: [
          "Take a dispassionate view of a personal dispute before responding.",
          "Praise someone for their dispassionate, objective assessment."
        ],
        practiceQuestion: {
          scenario: "Two friends are having a screaming match over a board game rule, and a third friend calmly reads the exact rulebook text without taking sides. That third friend provided a:",
          options: [
            "Dispassionate interpretation.",
            "Volatile explosion.",
            "Capricious verdict."
          ],
          correctIndex: 0,
          explanation: "'Dispassionate' means free from personal passion or bias, enabling fair judgment."
        },
        writingPrompt: "Write a sentence advising a friend on why a dispassionate perspective is needed before sending an angry email."
      },
      {
        id: "w70",
        word: "Indifferent",
        phonetic: "/ɪnˈdɪf.ɚ.ənt/",
        partOfSpeech: "adjective",
        simpleDefinition: "1. Having no particular interest or sympathy; unconcerned. 2. Neither good nor bad; mediocre.",
        insteadOf: "don't care either way / couldn't care less / just okay",
        whyUseIt: "Far cleaner than 'I don't care'. Also useful as a subtle review: 'the meal was indifferent' (mediocre).",
        casualExample: "I'm completely indifferent between Mexican or Thai food tonight—you choose.",
        proExample: "The public remained indifferent to the new product announcement, resulting in sluggish pre-orders.",
        nuanceTip: "Remember both senses: 'indifferent to the score' (unconcerned) vs 'an indifferent cup of coffee' (average/mediocre).",
        missions: [
          "Say 'I'm indifferent between the two' when letting someone else pick.",
          "Notice when genuine indifference frees you from unnecessary stress."
        ],
        practiceQuestion: {
          scenario: "You're asked whether you prefer blue napkins or teal napkins for a casual picnic and honestly have zero preference. You tell them:",
          options: [
            "I'm completely indifferent—pick whichever you like.",
            "I'm deeply poignant about napkins.",
            "That choice is entirely untenable."
          ],
          correctIndex: 0,
          explanation: "'Indifferent' means having no personal preference, bias, or emotional concern."
        },
        writingPrompt: "Write a sentence about a pop culture debate where you are completely indifferent to the outcome."
      }
    ]
  },
  {
    id: 8,
    title: "Day 8: Action, Strategy & Leadership",
    subtitle: "Taking charge, directing initiatives, and driving results",
    words: [
      {
        id: "w71",
        word: "Spearhead",
        phonetic: "/ˈspɪr.hed/",
        partOfSpeech: "verb",
        simpleDefinition: "To lead an organized attack, campaign, or initiative.",
        insteadOf: "lead / be in charge of / take the front seat",
        whyUseIt: "High-impact leadership verb that highlights proactive ownership and momentum.",
        casualExample: "Rachel volunteered to spearhead organizing our annual camping trip this summer.",
        proExample: "He spearheaded the transition to our new customer relationship management software across 12 offices.",
        nuanceTip: "Metaphor from the sharp tip of a weapon piercing through lines. You spearhead initiatives, drives, or reforms.",
        missions: [
          "Volunteer to 'spearhead' a small project or family plan.",
          "Use 'spearhead' on your resume or LinkedIn profile."
        ],
        practiceQuestion: {
          scenario: "When the neighborhood needed a speed bump installed near the school, David collected 500 signatures, drafted the petition, and attended city council. David:",
          options: [
            "Spearheaded the safety initiative.",
            "Demurred at the road work.",
            "Was indifferent to the cars."
          ],
          correctIndex: 0,
          explanation: "'Spearhead' means actively leading and driving a concerted effort from the front."
        },
        writingPrompt: "Describe an initiative or habit you spearheaded in your life or community."
      },
      {
        id: "w72",
        word: "Orchestrate",
        phonetic: "/ˈɔːr.kə.streɪt/",
        partOfSpeech: "verb",
        simpleDefinition: "To arrange or direct the elements of a situation to produce a desired effect, especially secretly or skillfully.",
        insteadOf: "set up / pull strings / coordinate / arrange behind the scenes",
        whyUseIt: "Conveys masterful coordination of multiple moving pieces, like a conductor leading a symphony.",
        casualExample: "My friends orchestrated an elaborate surprise dinner without me suspecting a single thing.",
        proExample: "The marketing director orchestrated a synchronized launch across YouTube, Twitter, and national press.",
        nuanceTip: "Can be positive (great coordination) or slightly devious (orchestrating a coup or corporate takeover).",
        missions: [
          "Praise someone who orchestrated a complex event with ease.",
          "Think about what parts of your daily schedule you can orchestrate more smoothly."
        ],
        practiceQuestion: {
          scenario: "A wedding planner coordinates 12 vendors, florists, musicians, caterers, and lighting technicians to execute a flawless 6-hour evening. The planner:",
          options: [
            "Orchestrated the entire celebration.",
            "Exacerbated the evening.",
            "Remained ambivalent throughout."
          ],
          correctIndex: 0,
          explanation: "'Orchestrate' means deftly harmonizing multiple complex elements toward a seamless outcome."
        },
        writingPrompt: "Write a sentence describing an event or surprise you helped orchestrate."
      },
      {
        id: "w73",
        word: "Streamline",
        phonetic: "/ˈstriːm.laɪn/",
        partOfSpeech: "verb",
        simpleDefinition: "To make an organization, system, or process more efficient and effective by employing faster or simpler working methods.",
        insteadOf: "simplify / trim the fat / make easier / clean up steps",
        whyUseIt: "The ultimate modern efficiency word: implies removing friction, clutter, and wasted motion.",
        casualExample: "I streamlined my morning routine by preparing overnight oats and packing my bag the night before.",
        proExample: "By removing three redundant approval gates, we streamlined the expense reimbursement process from weeks to hours.",
        nuanceTip: "Aerodynamic root: designing a shape that offers the least resistance to airflow. Streamline your processes to reduce friction.",
        missions: [
          "Identify one process in your week that can be streamlined.",
          "Use 'streamline' when proposing a simpler workflow."
        ],
        practiceQuestion: {
          scenario: "A clinic introduces a digital check-in tablet that replaces five paper forms and cuts waiting room time by 15 minutes. The clinic:",
          options: [
            "Streamlined patient intake.",
            "Complicated the benchmark.",
            "Extrapolated the waiting room."
          ],
          correctIndex: 0,
          explanation: "'Streamline' means eliminating redundancies to make an operation run faster and cleaner."
        },
        writingPrompt: "Write about one personal workflow you streamlined and the time it saved you."
      },
      {
        id: "w74",
        word: "Leverage",
        phonetic: "/ˈlev.ɚ.ɪdʒ/",
        partOfSpeech: "verb / noun",
        simpleDefinition: "To use something to maximum advantage.",
        insteadOf: "use / take advantage of / milk it / capitalize on",
        whyUseIt: "A staple in modern professional discourse. It implies using a tool or asset as a force multiplier.",
        casualExample: "We can leverage your student discount to get 20% off all our museum tickets.",
        proExample: "Our team should leverage existing open-source libraries instead of writing custom code from scratch.",
        nuanceTip: "Physical mechanical advantage: a lever lifts heavy weights with minimal effort. In speech: maximize your assets.",
        missions: [
          "Use 'leverage' when finding a smart way to reuse prior work or skills.",
          "Think about what unique strengths you can leverage this month."
        ],
        practiceQuestion: {
          scenario: "You already speak fluent Spanish, so you volunteer for an international project where you can build relationships with Latin American partners. You are:",
          options: [
            "Leveraging your language skills.",
            "Precipitating an obstacle.",
            "Understating your presence."
          ],
          correctIndex: 0,
          explanation: "'Leverage' means turning an existing asset or talent into a competitive advantage."
        },
        writingPrompt: "Write a sentence showing how you can leverage an everyday habit to learn something new."
      },
      {
        id: "w75",
        word: "Pivot",
        phonetic: "/ˈpɪv.ət/",
        partOfSpeech: "verb / noun",
        simpleDefinition: "To turn or change direction quickly; adapt a business or life strategy while staying grounded.",
        insteadOf: "change course / switch gears / turn around",
        whyUseIt: "Far more strategic than 'giving up' or 'quitting'. A pivot keeps one foot planted while turning the other.",
        casualExample: "When the restaurant had a two-hour wait, we quickly pivoted to that cozy taco truck down the street.",
        proExample: "When enterprise software sales slowed, the startup pivoted to consumer subscriptions.",
        nuanceTip: "In basketball, pivoting lets you rotate 360 degrees while keeping one pivot foot grounded. In life, it's nimble adaptation.",
        missions: [
          "Use 'pivot' when an original plan falls through and you switch seamlessly.",
          "Celebrate a smart personal pivot you made in your career or education."
        ],
        practiceQuestion: {
          scenario: "A photography studio's wedding bookings drop in winter, so they quickly switch to shooting corporate headshots and pet portraits until spring. That was a:",
          options: [
            "Strategic pivot.",
            "Capricious downfall.",
            "Tacit catastrophe."
          ],
          correctIndex: 0,
          explanation: "'Pivot' means adapting tactical focus to new conditions without abandoning the core enterprise."
        },
        writingPrompt: "Describe a moment when bad weather or a cancellation forced you to pivot your plans."
      },
      {
        id: "w76",
        word: "Reiterate",
        phonetic: "/riːˈɪt̬.ə.reɪt/",
        partOfSpeech: "verb",
        simpleDefinition: "To say something again or a number of times, typically for emphasis or clarity.",
        insteadOf: "say again / repeat / make clear again",
        whyUseIt: "Far more polite and professional than 'as I already said'.",
        casualExample: "Just to reiterate, we're meeting outside the theater at 6:45, not inside.",
        proExample: "Let me reiterate: data security is not optional; it must be built into every pull request.",
        nuanceTip: "Don't say 'reiterate again' (that's redundant, since reiterate already contains 're'). Just say 'let me reiterate'.",
        missions: [
          "Say 'I'd like to reiterate...' instead of 'Like I said before'.",
          "Reiterate a key deadline before concluding a discussion."
        ],
        practiceQuestion: {
          scenario: "At the end of a long team planning call, the manager recaps the three most critical deliverable dates. The manager is:",
          options: [
            "Reiterating key deadlines.",
            "Demurring on the schedule.",
            "Being supercilious."
          ],
          correctIndex: 0,
          explanation: "'Reiterate' means restating crucial information for absolute clarity and alignment."
        },
        writingPrompt: "Write a message reiterating an important reminder to a group without sounding impatient."
      },
      {
        id: "w77",
        word: "Consolidate",
        phonetic: "/kənˈsɑː.lə.deɪt/",
        partOfSpeech: "verb",
        simpleDefinition: "To combine a number of things into a single, more effective, or coherent whole.",
        insteadOf: "combine / group together / merge / lock down",
        whyUseIt: "Conveys strength and orderliness. Turning scattered pieces into one solid pillar.",
        casualExample: "Let's consolidate all our road trip grocery lists into one shared note.",
        proExample: "The executive team decided to consolidate our three separate messaging apps into Slack.",
        nuanceTip: "Root: 'solidus' (solid). You consolidate debts, files, power, or gains to make them firm and manageable.",
        missions: [
          "Consolidate multiple messy to-do lists into one prioritized checklist.",
          "Use 'consolidate' when suggesting merging two redundant meetings."
        ],
        practiceQuestion: {
          scenario: "You have five different subscription accounts on three credit cards, so you merge them into a single family plan on one card. You have:",
          options: [
            "Consolidated your subscriptions.",
            "Juxtaposed your budget.",
            "Extrapolated your credit."
          ],
          correctIndex: 0,
          explanation: "'Consolidate' means gathering disparate items into a unified, coherent system."
        },
        writingPrompt: "Write a sentence showing how you can consolidate your digital notifications to improve focus."
      },
      {
        id: "w78",
        word: "Circumvent",
        phonetic: "/ˌsɝː.kəmˈvent/",
        partOfSpeech: "verb",
        simpleDefinition: "To find a way around an obstacle or rule, typically in a clever or resourceful way.",
        insteadOf: "bypass / dodge / sneak around / find a loophole",
        whyUseIt: "Clever and resourceful. Describes finding a detour rather than banging your head against a wall.",
        casualExample: "We circumvented the heavy festival traffic by taking backroads through the apple orchards.",
        proExample: "The engineering team circumvented the API rate limit by implementing client-side caching.",
        nuanceTip: "From 'circum' (around) + 'venire' (to come). Literally 'to come around' an obstacle.",
        missions: [
          "Use 'circumvent' when discussing an innovative workaround.",
          "Find a resourceful way to circumvent a daily bottleneck."
        ],
        practiceQuestion: {
          scenario: "A website button is broken on mobile safari, so a user rotates the screen to desktop mode to complete their booking. The user:",
          options: [
            "Circumvented the UI bug.",
            "Corroborated the screen.",
            "Bolstered the browser."
          ],
          correctIndex: 0,
          explanation: "'Circumvent' denotes intelligently routing around an impediment or restriction."
        },
        writingPrompt: "Describe a clever workaround you used to circumvent a frustrating delay or bureaucracy."
      },
      {
        id: "w79",
        word: "Prioritize",
        phonetic: "/praɪˈɔːr.ə.taɪz/",
        partOfSpeech: "verb",
        simpleDefinition: "To designate or treat something as more important than other things.",
        insteadOf: "put first / focus on / give top billing",
        whyUseIt: "Fundamental to disciplined speech. Highlights deliberate choice in the face of scarcity.",
        casualExample: "This weekend, I'm going to prioritize getting eight hours of sleep over going to parties.",
        proExample: "When engineering resources are scarce, we must prioritize core stability over brand new features.",
        nuanceTip: "Remember: 'If you have more than three priorities, you have none.' Prioritizing means actively saying no to good things for great things.",
        missions: [
          "Name the single task you prioritize above all others today.",
          "Use 'prioritize' when explaining why you cannot take on additional commitments."
        ],
        practiceQuestion: {
          scenario: "You have 5 chores to do in two hours before family visits, and you clean the bathroom and vacuum the living room first, leaving the garage for next week. You:",
          options: [
            "Prioritized guest-facing spaces.",
            "Exacerbated the house.",
            "Rebutted the chores."
          ],
          correctIndex: 0,
          explanation: "'Prioritize' means ranking tasks by urgency or impact and executing them first."
        },
        writingPrompt: "Write a sentence declaring your single highest priority for personal growth this year."
      },
      {
        id: "w80",
        word: "Implement",
        phonetic: "/ˈɪm.plə.ment/",
        partOfSpeech: "verb",
        simpleDefinition: "To put a decision, plan, or agreement into effect.",
        insteadOf: "put into action / carry out / roll out / execute",
        whyUseIt: "Takes an idea out of the realm of daydreaming into operational execution.",
        casualExample: "We finally implemented that 'no phones at the dinner table' rule, and conversations are so much better.",
        proExample: "Our IT department successfully implemented multi-factor authentication across all staff accounts.",
        nuanceTip: "As a noun ('IM-pluh-ment'), it means a tool or instrument (e.g. agricultural implements). As a verb ('IM-pluh-ment'), it means to put into action.",
        missions: [
          "Implement one small daily habit today without postponing.",
          "Ask a team member: 'How and when do we plan to implement this?'"
        ],
        practiceQuestion: {
          scenario: "After talking for months about wanting to save money, a couple sets up an automated monthly transfer of $200 into a high-yield account. They have:",
          options: [
            "Implemented their savings plan.",
            "Demurred on saving.",
            "Been ambivalent about money."
          ],
          correctIndex: 0,
          explanation: "'Implement' means executing a deliberate strategy and turning concepts into working reality."
        },
        writingPrompt: "Write about one healthy routine you successfully implemented into your life."
      }
    ]
  },
  {
    id: 9,
    title: "Day 9: Skepticism, Truth & Integrity",
    subtitle: "Distinguishing genuine substance from false pretenses",
    words: [
      {
        id: "w81",
        word: "Specious",
        phonetic: "/ˈspiː.ʃəs/",
        partOfSpeech: "adjective",
        simpleDefinition: "Superficially plausible, but actually wrong or misleading.",
        insteadOf: "sounds good on the surface but is BS / fake logic / misleading",
        whyUseIt: "Sharp intellectual scalpel. Dismantles arguments that sound slick but collapse upon inspection.",
        casualExample: "His excuse that he couldn't text back because of poor cell reception felt pretty specious.",
        proExample: "The advertiser made specious claims about the supplement's ability to 'detoxify' cells.",
        nuanceTip: "Related to 'species' and 'spectacle'. It looks pretty to the eye, but is hollow or deceptive inside.",
        missions: [
          "Identify a specious marketing claim on social media today.",
          "Use 'specious logic' when calling out an argument that doesn't add up."
        ],
        practiceQuestion: {
          scenario: "A fitness guru claims that drinking lemon water at 5:00 AM burns 800 calories without exercise because 'the acid melts body fat'. That claim is:",
          options: [
            "Specious and unscientific.",
            "Astute and tenable.",
            "Sanguine and resilient."
          ],
          correctIndex: 0,
          explanation: "'Specious' characterizes statements that seem appealingly plausible on the surface but are fundamentally false."
        },
        writingPrompt: "Write a sentence exposing a specious argument you heard recently."
      },
      {
        id: "w82",
        word: "Disingenuous",
        phonetic: "/ˌdɪs.ɪnˈdʒen.ju.əs/",
        partOfSpeech: "adjective",
        simpleDefinition: "Not candid or sincere, typically by pretending that one knows less about something than one really does.",
        insteadOf: "playing dumb / fake / dishonest / pretending not to know",
        whyUseIt: "Far more accurate than just calling someone a liar. It calls out calculated insincerity.",
        casualExample: "It's disingenuous of him to act surprised about the layoffs when he was in the planning meetings.",
        proExample: "The spokesperson gave a disingenuous statement pretending the company was unaware of the privacy glitch.",
        nuanceTip: "Opposite of 'ingenious' or 'ingenuous' (naive and candid). A disingenuous person plays innocent to manipulate.",
        missions: [
          "Recognize when someone is being disingenuous by pretending ignorance.",
          "Always strive to be candid rather than disingenuous in disagreements."
        ],
        practiceQuestion: {
          scenario: "A politician who voted in favor of a bill last week holds a press conference expressing shock and outrage that the bill was enacted. Their outrage is:",
          options: [
            "Disingenuous.",
            "Fastidious.",
            "Dispassionate."
          ],
          correctIndex: 0,
          explanation: "'Disingenuous' describes calculated insincerity, often feigning naivety or surprise."
        },
        writingPrompt: "Write a sentence calling out a disingenuous excuse while remaining calm and composed."
      },
      {
        id: "w83",
        word: "Fallible",
        phonetic: "/ˈfæl.ə.bəl/",
        partOfSpeech: "adjective",
        simpleDefinition: "Capable of making mistakes or being wrong.",
        insteadOf: "human / capable of messing up / not perfect",
        whyUseIt: "Humble and philosophical. Reminds us that even experts and institutions make errors.",
        casualExample: "Even the best GPS apps are fallible; always pay attention to physical road signs.",
        proExample: "Human memory is notoriously fallible, which is why written documentation is vital in auditing.",
        nuanceTip: "Opposite is 'infallible' (incapable of error). Acknowledging that you are fallible builds trust.",
        missions: [
          "Acknowledge with humor that your memory is fallible today.",
          "Use 'fallible' when reminding someone not to put heroes on pedestals."
        ],
        practiceQuestion: {
          scenario: "A world-renowned chess grandmaster blunders a rook in a casual exhibition match. This proves that:",
          options: [
            "Even masters are fallible.",
            "The chessboard was untenable.",
            "Chess is arbitrary."
          ],
          correctIndex: 0,
          explanation: "'Fallible' means liable to err, reminding us that no human is immune to mistakes."
        },
        writingPrompt: "Write a sentence reflecting on how acknowledging that we are fallible fosters empathy."
      },
      {
        id: "w84",
        word: "Infallible",
        phonetic: "/ɪnˈfæl.ə.bəl/",
        partOfSpeech: "adjective",
        simpleDefinition: "Incapable of making mistakes or being wrong; never failing.",
        insteadOf: "flawless / never makes a mistake / bulletproof",
        whyUseIt: "Usually used to emphasize that NO system or person is truly infallible.",
        casualExample: "No security lock is completely infallible, but this one will definitely deter casual thieves.",
        proExample: "No algorithmic trading model is infallible when unprecedented market panics hit.",
        nuanceTip: "Historically used in theology ('papal infallibility'). Today, used skeptically to remind people that nothing is foolproof.",
        missions: [
          "Remind a friend that no single piece of advice is infallible.",
          "Test a process to find where its supposed 'infallibility' breaks down."
        ],
        practiceQuestion: {
          scenario: "A software vendor claims their automated code tester catches 100% of all software bugs with zero exceptions forever. You remain skeptical because:",
          options: [
            "No software tool is infallible.",
            "The vendor is too gregarious.",
            "The code is poignant."
          ],
          correctIndex: 0,
          explanation: "'Infallible' means completely incapable of error, a standard that practically nothing meets."
        },
        writingPrompt: "Write a sentence reminding yourself or a teammate that no plan is infallible."
      },
      {
        id: "w85",
        word: "Dogmatic",
        phonetic: "/dɑːɡˈmæt̬.ɪk/",
        partOfSpeech: "adjective",
        simpleDefinition: "Inclined to lay down principles as incontrovertibly true, without consideration of evidence or the opinions of others.",
        insteadOf: "stubborn / narrow-minded / preaching as if they can't be wrong",
        whyUseIt: "Captures rigid, inflexible adherence to dogma over actual observation.",
        casualExample: "He's so dogmatic about his strict keto diet that he won't even eat a blueberry.",
        proExample: "Good product leaders stay curious and data-driven rather than dogmatic about their initial hypotheses.",
        nuanceTip: "Opposite of 'pragmatic'. A dogmatic thinker forces the world to fit their rulebook, regardless of facts.",
        missions: [
          "Catch yourself before taking a dogmatic stance on an issue.",
          "Notice when someone is defending a position dogmatically rather than logically."
        ],
        practiceQuestion: {
          scenario: "A music fan insists that any song produced after 1989 is automatically garbage, refusing to even listen to any modern album. Their view is:",
          options: [
            "Dogmatic and close-minded.",
            "Dispassionate and objective.",
            "Conciliatory and gentle."
          ],
          correctIndex: 0,
          explanation: "'Dogmatic' means rigidly imposing an unyielding doctrine regardless of merit or fresh evidence."
        },
        writingPrompt: "Write a sentence showing how dogmatic thinking impedes creative problem-solving."
      },
      {
        id: "w86",
        word: "Skeptical",
        phonetic: "/ˈskep.tɪ.kəl/",
        partOfSpeech: "adjective",
        simpleDefinition: "Not easily convinced; having doubts or reservations.",
        insteadOf: "doubtful / suspicious / side-eying",
        whyUseIt: "The bedrock of scientific inquiry. Healthy skepticism is a sign of an alert, thinking mind.",
        casualExample: "I was skeptical about whether an air fryer was really worth the counter space, but it's fantastic.",
        proExample: "Given the missing audit logs, the board was understandably skeptical of the reported user numbers.",
        nuanceTip: "Skeptical is not cynical: a cynic expects the worst from people; a skeptic simply asks for proof before believing.",
        missions: [
          "Express healthy skepticism toward a sensational headline.",
          "Ask: 'What evidence would convince a skeptical observer?'"
        ],
        practiceQuestion: {
          scenario: "An email claims you have won 10 million dollars from a lottery you never entered. You are rightly:",
          options: [
            "Extremely skeptical of the email's legitimacy.",
            "Complacent about your new wealth.",
            "Enamored with the sender."
          ],
          correctIndex: 0,
          explanation: "'Skeptical' denotes prudent doubt and reserving belief until evidence is provided."
        },
        writingPrompt: "Write about a product or trend you were initially skeptical about before trying it."
      },
      {
        id: "w87",
        word: "Intrinsic",
        phonetic: "/ɪnˈtrɪn.zɪk/",
        partOfSpeech: "adjective",
        simpleDefinition: "Belonging naturally; essential; inherent.",
        insteadOf: "built-in / comes from within / natural part of it",
        whyUseIt: "Distinguishes between internal worth and external rewards (e.g. intrinsic motivation vs money).",
        casualExample: "She doesn't run marathons for medals; for her, the intrinsic joy is being out in nature early.",
        proExample: "Risk is an intrinsic part of investing in early-stage startups; you can't eliminate it entirely.",
        nuanceTip: "Opposite of 'extrinsic' (external). Intrinsic motivation comes from love of the craft itself.",
        missions: [
          "Identify one hobby you pursue purely for its 'intrinsic value'.",
          "Distinguish between intrinsic worth and external validation."
        ],
        practiceQuestion: {
          scenario: "A musician practices the cello for three hours every day simply because the sound brings them peace, not because they plan to sell records. Their motivation is:",
          options: [
            "Intrinsic.",
            "Extrinsic.",
            "Specious."
          ],
          correctIndex: 0,
          explanation: "'Intrinsic' describes value or motivation that originates from the inherent nature of the activity itself."
        },
        writingPrompt: "What is an activity that gives you pure intrinsic satisfaction regardless of any outcome?"
      },
      {
        id: "w88",
        word: "Extrinsic",
        phonetic: "/ɪkˈstrɪn.zɪk/",
        partOfSpeech: "adjective",
        simpleDefinition: "Not part of the essential nature of someone or something; coming or operating from outside.",
        insteadOf: "external / coming from outside / surface reward",
        whyUseIt: "Pairs with 'intrinsic' to explain human behavior and motivation with psychological precision.",
        casualExample: "Grades and trophies are extrinsic motivators, while curiosity is intrinsic.",
        proExample: "The factory's sudden productivity drop was due to extrinsic factors like shipping strikes and port closures.",
        nuanceTip: "Extrinsic rewards (cash bonuses, prizes, titles) work well for routine tasks, but can crush creative drive.",
        missions: [
          "Notice when you are driven by an extrinsic reward (e.g. praise, bonus).",
          "Balance extrinsic incentives with intrinsic passion."
        ],
        practiceQuestion: {
          scenario: "A child only cleans their bedroom because their parents pay them $5 every time they do it. The child's motivation is:",
          options: [
            "Extrinsic.",
            "Intrinsic.",
            "Fastidious."
          ],
          correctIndex: 0,
          explanation: "'Extrinsic' describes influences, pressures, or rewards originating outside the core person or task."
        },
        writingPrompt: "Write a sentence showing how extrinsic rewards can sometimes distract from intrinsic purpose."
      },
      {
        id: "w89",
        word: "Warranted",
        phonetic: "/ˈwɔːr.ən.t̬ɪd/",
        partOfSpeech: "adjective",
        simpleDefinition: "Justified, deserved, or necessary under the circumstances.",
        insteadOf: "justified / called for / made sense to do / deserved",
        whyUseIt: "Balanced and objective when determining if a reaction or consequence was fair.",
        casualExample: "His frustration was completely warranted after waiting in line for three hours only to be turned away.",
        proExample: "Given the unprecedented market downturn, a hiring freeze is entirely warranted.",
        nuanceTip: "Opposite is 'unwarranted' (e.g. 'unwarranted criticism' = uncalled for / unfair attack).",
        missions: [
          "Validate someone by telling them their reaction was 'entirely warranted'.",
          "Dismiss unwarranted gossip or worry."
        ],
        practiceQuestion: {
          scenario: "A tenant complains to the landlord when the building's heat breaks down in the middle of a sub-zero blizzard. The tenant's complaint was:",
          options: [
            "Entirely warranted.",
            "Wholly untenable.",
            "Capricious and arbitrary."
          ],
          correctIndex: 0,
          explanation: "'Warranted' signifies that an action or feeling is well-founded, reasonable, and fully justified."
        },
        writingPrompt: "Write a sentence validating a colleague's concern as being completely warranted."
      },
      {
        id: "w90",
        word: "Pragmatism",
        phonetic: "/ˈpræɡ.mə.tɪz.əm/",
        partOfSpeech: "noun",
        simpleDefinition: "An approach that assesses the truth of meaning of theories or beliefs in terms of the success of their practical application.",
        insteadOf: "practicality / common sense / what actually works",
        whyUseIt: "The underlying philosophy of getting things done in the real world.",
        casualExample: "There's a healthy pragmatism to his cooking: he buys pre-chopped onions to save twenty minutes.",
        proExample: "The governor is known for his political pragmatism, working across party lines to pass infrastructure bills.",
        nuanceTip: "A core philosophical tradition (William James, John Dewey) that defines truth by practical fruitfulness.",
        missions: [
          "Apply a dose of pragmatism to an over-complicated plan today.",
          "Describe someone's level-headed lifestyle as guided by pragmatism."
        ],
        practiceQuestion: {
          scenario: "Instead of arguing endlessly about the theoretical merits of two coding styles, the team leader tests both on a staging branch to see which runs faster. That is:",
          options: [
            "Pragmatism in action.",
            "Dogmatic theory.",
            "An arbitrary whim."
          ],
          correctIndex: 0,
          explanation: "'Pragmatism' evaluates ideas and procedures based strictly on observable, practical utility."
        },
        writingPrompt: "Write about a situation where pure pragmatism solved a problem that idealism couldn't."
      }
    ]
  },
  {
    id: 10,
    title: "Day 10: Wit, Expression & Eloquence",
    subtitle: "Speaking with panache, gravitas, and memorable flair",
    words: [
      {
        id: "w91",
        word: "Apt",
        phonetic: "/æpt/",
        partOfSpeech: "adjective",
        simpleDefinition: "1. Appropriate or suitable in the circumstances. 2. Having a tendency to do something.",
        insteadOf: "fitting / perfect choice / spot on / tends to",
        whyUseIt: "Short, punchy, and supremely literate. 'An apt description' sounds ten times cleaner than 'a good description'.",
        casualExample: "'Bittersweet' was an apt description for our graduation day.",
        proExample: "Her apt summary of the competitor's flaw saved our team three months of misguided development.",
        nuanceTip: "Two common meanings: 'apt to forget' (likely to) vs 'an apt analogy' (fitting/suitable).",
        missions: [
          "Compliment a friend's comment by saying: 'That is an exceptionally apt metaphor.'",
          "Notice when an analogy is truly apt versus stretched."
        ],
        practiceQuestion: {
          scenario: "Someone describes a crowded subway car in summer as 'a moving sauna with neckties'. That description was:",
          options: [
            "Hilariously apt.",
            "Untenable and equivocal.",
            "Disingenuous and reticent."
          ],
          correctIndex: 0,
          explanation: "'Apt' means remarkably fitting, felicitous, and well-suited to the circumstance."
        },
        writingPrompt: "Write an apt comparison for what a slow Wi-Fi connection feels like in 2026."
      },
      {
        id: "w92",
        word: "Pithy",
        phonetic: "/ˈpɪθ.i/",
        partOfSpeech: "adjective",
        simpleDefinition: "Concise and forcefully expressive; brief and to the point.",
        insteadOf: "short and sweet / punchy / to the point",
        whyUseIt: "Praises brevity combined with depth. A pithy statement says in six words what others take sixty to express.",
        casualExample: "I love Mark Twain's quotes—they are always so funny and remarkably pithy.",
        proExample: "Keep your product one-liner pithy: investors remember clear phrases, not paragraphs.",
        nuanceTip: "From 'pith' (the central, vital sponge core of a plant stem). A pithy phrase hits right at the vital core.",
        missions: [
          "Edit a wordy text message to make it pithy and punchy before sending.",
          "Describe a memorable proverb as 'pithy'."
        ],
        practiceQuestion: {
          scenario: "When asked the secret to longevity, a 100-year-old smiles and says: 'Keep breathing and avoid boring people.' That advice was:",
          options: [
            "Pithy and memorable.",
            "Dogmatic and rambling.",
            "Superficial and tenuous."
          ],
          correctIndex: 0,
          explanation: "'Pithy' denotes language that is concise, witty, and packed with substance."
        },
        writingPrompt: "Write a pithy piece of life advice in seven words or fewer."
      },
      {
        id: "w93",
        word: "Eloquent",
        phonetic: "/ˈel.ə.kwənt/",
        partOfSpeech: "adjective",
        simpleDefinition: "Fluent or persuasive in speaking or writing; clearly expressing or indicating something.",
        insteadOf: "well-spoken / poetic / speaks so nicely",
        whyUseIt: "Timeless praise for someone whose speech flows like music and persuades the heart.",
        casualExample: "His wedding toast was so eloquent that half the room was wiping away tears.",
        proExample: "She gave an eloquent defense of open-source development at the global tech summit.",
        nuanceTip: "Can also describe non-verbal expressions: 'an eloquent silence' or 'an eloquent shrug' (spoke volumes without words).",
        missions: [
          "Describe a persuasive speech or letter as 'eloquent'.",
          "Deliver an eloquent word of gratitude to someone who helped you."
        ],
        practiceQuestion: {
          scenario: "A defense attorney delivers a closing statement that weaves law, history, and human compassion into a breathtaking 15-minute argument. The attorney was:",
          options: [
            "Eloquent.",
            "Capricious.",
            "Specious."
          ],
          correctIndex: 0,
          explanation: "'Eloquent' denotes mastery of moving, persuasive, and beautifully constructed expression."
        },
        writingPrompt: "Write an eloquent two-sentence thank-you note to an inspiring teacher or friend."
      },
      {
        id: "w94",
        word: "Banter",
        phonetic: "/ˈbæn.t̬ɚ/",
        partOfSpeech: "noun / verb",
        simpleDefinition: "The playful and friendly exchange of teasing remarks.",
        insteadOf: "playful teasing / joking back and forth / friendly ribbing",
        whyUseIt: "The universal mark of lively, charming chemistry between friends and partners.",
        casualExample: "What I missed most while working from home was the spontaneous banter across our desks.",
        proExample: "The co-hosts have an effortless, witty banter that makes their podcast addictive to listen to.",
        nuanceTip: "True banter is never malicious; it is affectionate, lighthearted verbal sparring that builds connection.",
        missions: [
          "Engage in lighthearted banter with a coworker or friend today.",
          "Notice how good-natured banter lifts the energy of a room."
        ],
        practiceQuestion: {
          scenario: "Two longtime friends tease each other about their high school hairstyles while laughing over coffee. That conversation is:",
          options: [
            "Good-natured banter.",
            "Volatile discord.",
            "A specious argument."
          ],
          correctIndex: 0,
          explanation: "'Banter' denotes warm, playful, and quick-witted verbal sparring between people."
        },
        writingPrompt: "Write a two-line snippet of playful banter between two friends deciding what movie to watch."
      },
      {
        id: "w95",
        word: "Colloquial",
        phonetic: "/kəˈloʊ.kwi.əl/",
        partOfSpeech: "adjective",
        simpleDefinition: "Used in ordinary or familiar conversation; not formal or literary.",
        insteadOf: "slangy / everyday casual talk / informal language",
        whyUseIt: "Vital for linguistics and writing. It explains the natural register of how real people speak.",
        casualExample: "In Australian colloquial speech, an afternoon is simply called an 'arvo'.",
        proExample: "While the official legal report was formal, her presentation to the team was delightfully colloquial.",
        nuanceTip: "From 'colloquium' (speaking together). 'Colloquial' is not bad English—it is genuine living speech.",
        missions: [
          "Notice a colloquial phrase unique to your hometown or country.",
          "Use 'colloquial expression' when explaining a local idiom."
        ],
        practiceQuestion: {
          scenario: "Saying 'I gotta hit the hay' instead of 'I intend to retire to bed' is an example of:",
          options: [
            "Colloquial phrasing.",
            "Dogmatic doctrine.",
            "Fastidious syntax."
          ],
          correctIndex: 0,
          explanation: "'Colloquial' refers to informal, everyday conversational idioms rather than rigid formal prose."
        },
        writingPrompt: "What is your favorite colloquial phrase from your native region and what does it mean?"
      },
      {
        id: "w96",
        word: "Panache",
        phonetic: "/pəˈnæʃ/",
        partOfSpeech: "noun",
        simpleDefinition: "Flamboyant, confident, and stylish flair of manner.",
        insteadOf: "swagger / style / flair / doing it with flair",
        whyUseIt: "Exudes continental sophistication, charisma, and joyful confidence.",
        casualExample: "She flipped the crepes in the pan with such panache that our guests started applauding.",
        proExample: "Steve Jobs introduced new Apple hardware with unmatched theatrical panache.",
        nuanceTip: "Originally the plume of feathers on a knight's helmet. It means having an unmistakable signature flair.",
        missions: [
          "Do a simple task today (like plating lunch or opening a door) with exaggerated panache.",
          "Compliment someone's stylish panache."
        ],
        practiceQuestion: {
          scenario: "A bartender spins a shaker in mid-air, catches it behind their back, and pours a cocktail with a dazzling smile. The bartender has:",
          options: [
            "Panache.",
            "Inertia.",
            "Complacency."
          ],
          correctIndex: 0,
          explanation: "'Panache' denotes an exuberant, confident, and stylish manner of execution."
        },
        writingPrompt: "Describe someone you know who carries themselves with effortless panache."
      },
      {
        id: "w97",
        word: "Gravitas",
        phonetic: "/ˈɡræv.ə.tɑːs/",
        partOfSpeech: "noun",
        simpleDefinition: "Dignity, seriousness, or solemnity of manner that commands respect.",
        insteadOf: "weight / presence / seriousness / commanding respect",
        whyUseIt: "One of the cardinal Roman virtues. When someone has gravitas, the room falls silent and listens.",
        casualExample: "Even in casual clothes, his deep voice and calm posture gave him an undeniable gravitas.",
        proExample: "The new chairwoman brought instant gravitas to the board, settling months of petty infighting.",
        nuanceTip: "Root of 'gravity' (heaviness/weight). A person with gravitas carries intellectual and moral weight.",
        missions: [
          "Bring quiet gravitas to an important presentation by speaking slower.",
          "Notice how silence can convey more gravitas than shouting."
        ],
        practiceQuestion: {
          scenario: "A veteran judge enters a chaotic courtroom, sits in silence for five seconds, and speaks in a measured, calm baritone that makes everyone immediately cease bickering. The judge possesses:",
          options: [
            "Gravitas.",
            "Panache alone.",
            "Capriciousness."
          ],
          correctIndex: 0,
          explanation: "'Gravitas' signifies a dignified weight and quiet authority that commands innate respect."
        },
        writingPrompt: "Write a sentence describing what physical cues give a speaker natural gravitas."
      },
      {
        id: "w98",
        word: "Nonchalant",
        phonetic: "/ˌnɑːn.ʃəˈlɑːnt/",
        partOfSpeech: "adjective",
        simpleDefinition: "Feeling or appearing casually calm and relaxed; not displaying anxiety, interest, or enthusiasm.",
        insteadOf: "cool as a cucumber / acting like it's no big deal / unfazed",
        whyUseIt: "French coolness. Perfect for describing someone who stays relaxed when everyone else is freaking out.",
        casualExample: "He was totally nonchalant about winning first prize, as if he won trophies every Thursday.",
        proExample: "When the live television teleprompter failed, the anchor stayed nonchalant and continued ad-libbing.",
        nuanceTip: "From French 'non' + 'chaloir' (not to care/be warm). It looks effortlessly chill on the outside.",
        missions: [
          "Maintain a nonchalant exterior when dealing with minor unexpected chaos.",
          "Describe an unfazed reaction as nonchalant."
        ],
        practiceQuestion: {
          scenario: "A waiter trips slightly, catches three wine glasses on a tray without spilling a single drop, winks at the table, and continues walking smoothly. The waiter was:",
          options: [
            "Nonchalant.",
            "Apprehensive.",
            "Untenable."
          ],
          correctIndex: 0,
          explanation: "'Nonchalant' describes a calm, relaxed, and composed manner under pressure."
        },
        writingPrompt: "Write about a situation where acting nonchalant helped calm down the people around you."
      },
      {
        id: "w99",
        word: "Self-deprecating",
        phonetic: "/ˌselfˈdep.rə.keɪ.t̬ɪŋ/",
        partOfSpeech: "adjective",
        simpleDefinition: "Modest about or critical of oneself, especially humorously so.",
        insteadOf: "making fun of oneself / humble joking / not taking oneself too seriously",
        whyUseIt: "The secret weapon of likable charm. Confident people use self-deprecating humor to disarm others.",
        casualExample: "His self-deprecating jokes about his terrible dancing skills instantly broke the ice.",
        proExample: "The keynote speaker used a touch of self-deprecating humor to make his extraordinary achievements feel relatable.",
        nuanceTip: "Key nuance: it must be playful and light. If it's too harsh, it sounds insecure rather than charming.",
        missions: [
          "Use a touch of self-deprecating humor when breaking the ice with a stranger.",
          "Notice how self-deprecating wit disarms tension."
        ],
        practiceQuestion: {
          scenario: "A master chef drops an egg on the floor, laughs, and tells the workshop: 'Well, that's why my dog loves being my assistant.' That comment was:",
          options: [
            "Charmingly self-deprecating.",
            "Dogmatic and bitter.",
            "Specious and evasive."
          ],
          correctIndex: 0,
          explanation: "'Self-deprecating' refers to lighthearted, modest humor directed at one's own foibles."
        },
        writingPrompt: "Write a lighthearted self-deprecating remark about a silly habit of yours."
      },
      {
        id: "w100",
        word: "Uncanny",
        phonetic: "/ʌnˈkæn.i/",
        partOfSpeech: "adjective",
        simpleDefinition: "Strange or mysterious, especially in an unsettling or eerily accurate way.",
        insteadOf: "spooky / eerily accurate / creepily exact",
        whyUseIt: "Expressive word for coincidences, facial resemblances, and eerily accurate instincts.",
        casualExample: "She has an uncanny knack for guessing the exact ending of mystery novels by chapter three.",
        proExample: "The resemblance between the daughter's presentation style and her father's was uncanny.",
        nuanceTip: "Often heard in psychology/robotics: 'the uncanny valley' (when an AI or android looks almost human but eerily off).",
        missions: [
          "Point out an 'uncanny resemblance' or coincidence today.",
          "Notice when someone's intuition is uncanny in its accuracy."
        ],
        practiceQuestion: {
          scenario: "You think of an obscure song you haven't heard in 12 years, and 30 seconds later the coffee shop radio starts playing that exact song. That coincidence was:",
          options: [
            "Uncanny.",
            "Pragmatic.",
            "Extrinsic."
          ],
          correctIndex: 0,
          explanation: "'Uncanny' captures an eerie, mysterious, and strikingly accurate or strange event."
        },
        writingPrompt: "Write about an uncanny coincidence you experienced in your life."
      }
    ]
  }
];

// Helper functions for easy consumption
if (typeof window !== 'undefined') {
  window.VOCAB_PACKS = VOCAB_PACKS;
}
