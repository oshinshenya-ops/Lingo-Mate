
    /* =========================================================================
       1. LOCALISATION DICTIONARY (English UK, Sinhala, Tamil)
       ========================================================================= */
    const I18N = {
      en: {
        dashboardTitle: `Language Dashboard`,
        streakLabel: `Daily Streak`,
        xpLabel: `Total XP`,
        masteryLabel: `Curriculum Mastery`,
        examReadyLabel: `Exam Readiness`,
        explainTipHeading: `Explanation Note`,
        correctMsg: `Spot on!`,
        incorrectMsg: `Not quite — let us review why:`,
        srsPrompt: `Click the card to reveal translation & Sri Lankan context note.`,
        rbacStudentInfo: `Student privileges active: access lessons, interactive labs, notes, flashcards, planner, community & resource upload.`,
        rbacModInfo: `Teacher / Moderator privileges active: approve student uploads, curate materials, and moderate community threads.`,
        rbacAdminInfo: `Administrator privileges active: full RBAC user control, curriculum editor, reports, and system configuration.`
      },
      si: {
        dashboardTitle: `භාෂා ඉගෙනුම් පුවරුව`,
        streakLabel: `දෛනික අඛණ්ඩතාව`,
        xpLabel: `මුළු XP ලකුණු`,
        masteryLabel: `විෂය නිර්දේශ ප්‍රගුණතාව`,
        examReadyLabel: `විභාග සූදානම`,
        explainTipHeading: `සිංහල පැහැදිලි කිරීම`,
        correctMsg: `නිවැරදියි!`,
        incorrectMsg: `වැරදියි — හේතුව බලමු:`,
        srsPrompt: `පරිවර්තනය සහ සටහන බැලීමට කාඩ්පත මත ක්ලික් කරන්න.`,
        rbacStudentInfo: `ශිෂ්‍ය අවසර ක්‍රියාත්මකයි: පාඩම්, ක්‍රියාකාරකම්, සටහන්, ෆ්ලෑෂ්කාඩ් සහ ප්‍රජා සංසද භාවිත කළ හැක.`,
        rbacModInfo: `ගුරු / මධ්‍යස්ථකරු අවසර ක්‍රියාත්මකයි: ශිෂ්‍ය සම්පත් අනුමත කිරීම සහ සංසද කළමනාකරණය කළ හැක.`,
        rbacAdminInfo: `පරිපාලක අවසර ක්‍රියාත්මකයි: පරිශීලකයන්, විෂය නිර්දේශ සහ පද්ධති සැකසුම් සම්පූර්ණයෙන් පාලනය කළ හැක.`
      },
      ta: {
        dashboardTitle: `மொழி கற்றல் பலகை`,
        streakLabel: `தினசரி தொடர்ச்சி`,
        xpLabel: `மொத்த XP புள்ளிகள்`,
        masteryLabel: `பாடத்திட்ட தேர்ச்சி`,
        examReadyLabel: `தேர்வு தயார்நிலை`,
        explainTipHeading: `தமிழ் விளக்கம்`,
        correctMsg: `மிகச் சரி!`,
        incorrectMsg: `தவறு — காரணத்தைப் பார்ப்போம்:`,
        srsPrompt: `மொழிபெயர்ப்பு மற்றும் குறிப்பைப் பார்க்க அட்டையை அழுத்தவும்.`,
        rbacStudentInfo: `மாணவர் அனுமதி செயலில் உள்ளது: பாடங்கள், பயிற்சிகள், குறிப்புகள் மற்றும் சமூக மன்றத்தைப் பயன்படுத்தலாம்.`,
        rbacModInfo: `ஆசிரியர் / நெறியாளர் அனுமதி செயலில் உள்ளது: மாணவர் வளங்களை அங்கீகரிக்கவும் விவாதங்களை நெறிப்படுத்தவும் முடியும்.`,
        rbacAdminInfo: `நிர்வாகி அனுமதி செயலில் உள்ளது: பயனர்கள், பாடத்திட்டம் மற்றும் அமைப்புகளை முழுமையாகக் கட்டுப்படுத்தலாம்.`
      }
    };

    /* =========================================================================
       2. RICH CURRICULUM & LANGUAGE DATA (5 Languages)
       ========================================================================= */
    const DEFAULT_LANGUAGES = {
      fr: {
        id: `fr`,
        name: `French`,
        nativeName: `Français`,
        flag: `🇫🇷`,
        speechCode: `fr-FR`,
        themeLabel: `Pastel Pink Theme`,
        examTracks: [`GCE O/L French`, `GCE A/L French`, `DELF A1–B2`, `DALF C1`],
        welcomeNote: {
          en: `French uses gendered nouns (masculine/feminine) and clear polite registers (tu vs vous), widely tested in Sri Lankan GCE O/L & DELF.`,
          si: `ප්‍රංශ භාෂාවේ නාමපද පුරුෂ/ස්ත්‍රී ලිංග ලෙස බෙදේ (le/la). සාමාන්‍ය පෙළ සහ DELF විභාග සඳහා 'tu' සහ 'vous' භාවිතය ඉතා වැදගත් වේ.`,
          ta: `பிரெஞ்சு மொழியில் பெயர்ச்சொற்கள் ஆண்பால்/பெண்பால் (le/la) எனப் பிரிக்கப்படுகின்றன. O/L மற்றும் DELF தேர்வுகளுக்கு 'tu' மற்றும் 'vous' வேறுபாடு அவசியம்.`
        },
        levels: [
          {
            id: `fr-beg`,
            tier: `Beginner (A1 · GCE O/L Foundation)`,
            lessons: [
              { id: `fr-l1`, title: `Greetings & Introductions in Colombo`, cycle: `5E: Engage & Explore`, xp: 40, duration: `4 min` },
              { id: `fr-l2`, title: `Articles (le, la, les) & Classroom Nouns`, cycle: `5E: Explain`, xp: 50, duration: `5 min` },
              { id: `fr-l3`, title: `Ordering Ceylon Tea & Café Phrases`, cycle: `5E: Elaborate`, xp: 55, duration: `5 min` }
            ]
          },
          {
            id: `fr-int`,
            tier: `Intermediate (A2–B1 · GCE O/L & DELF)`,
            lessons: [
              { id: `fr-l4`, title: `Passé Composé: Describing School Trips to Kandy`, cycle: `5E: Explain & Elaborate`, xp: 70, duration: `6 min` },
              { id: `fr-l5`, title: `Formal Letters & DELF B1 Opinion Phrases`, cycle: `5E: Evaluate`, xp: 80, duration: `7 min` }
            ]
          },
          {
            id: `fr-adv`,
            tier: `Advanced & Professional (B2–C1 · A/L & DALF)`,
            lessons: [
              { id: `fr-l6`, title: `Subjunctive Mood in Debate & Diplomacy`, cycle: `5E: Elaborate`, xp: 100, duration: `8 min` }
            ]
          }
        ],
        vocab: [
          {
            id: `fr-v1`,
            word: `Enchanté(e) de faire votre connaissance`,
            phonetic: `/ɑ̃.ʃɑ̃.te də fɛʁ vɔtʁ kɔ.nɛ.sɑ̃s/`,
            meaning: `Delighted to meet you (polite)`,
            context: `Bonjour Madame, je suis Nimali. Enchantée de faire votre connaissance.`,
            contextMeaning: `Hello Madam, I am Nimali. Delighted to meet you.`,
            note: {
              en: `Use 'vous' and 'votre' with teachers or elders; add an extra -e if the speaker is female.`,
              si: `ගුරුවරුන් හෝ වැඩිහිටියන් සමඟ ගෞරවාර්ථයෙන් 'votre' භාවිතා කරන්න. කථිකයා කාන්තාවක් නම් 'Enchantée' ලෙස -e එකතු වේ.`,
              ta: `ஆசிரியர்கள் அல்லது பெரியவர்களிடம் மரியாதையாக 'votre' பயன்படுத்தவும். பேசுபவர் பெண்ணாக இருந்தால் 'Enchantée' என -e சேர்க்கவும்.`
            },
            level: `Beginner`
          },
          {
            id: `fr-v2`,
            word: `Je voudrais un thé de Ceylan, s'il vous plaît`,
            phonetic: `/ʒə vu.dʁɛ œ̃ te də sɛ.lɑ̃ sil vu plɛ/`,
            meaning: `I would like a Ceylon tea, please`,
            context: `Au café près de l'école, je voudrais un thé de Ceylan, s'il vous plaît.`,
            contextMeaning: `At the café near school, I would like a Ceylon tea, please.`,
            note: {
              en: `'Je voudrais' (conditional) is much politer than 'Je veux' (I want).`,
              si: `'Je veux' (මට ඕනෑ) වෙනුවට 'Je voudrais' (මම කැමතියි) භාවිතා කිරීම වඩාත් ආචාරශීලී වේ.`,
              ta: `'Je veux' (எனக்கு வேண்டும்) என்பதை விட 'Je voudrais' (நான் விரும்புகிறேன்) மிகவும் மரியாதையானது.`
            },
            level: `Beginner`
          },
          {
            id: `fr-v3`,
            word: `La bibliothèque universitaire`,
            phonetic: `/la bi.bli.jɔ.tɛk y.ni.vɛʁ.si.tɛʁ/`,
            meaning: `The university library`,
            context: `Nous étudions le français à la bibliothèque universitaire chaque mardi.`,
            contextMeaning: `We study French at the university library every Tuesday.`,
            note: {
              en: `Notice 'bibliothèque' is feminine ('la'), and adjectives follow the noun in French.`,
              si: `'bibliothèque' ස්ත්‍රී ලිංග නාමපදයකි ('la'). ප්‍රංශ භාෂාවේදී නාම විශේෂණ බොහෝ විට නාමපදයට පසුව යෙදේ.`,
              ta: `'bibliothèque' என்பது பெண்பால் பெயர்ச்சொல் ('la'). பிரெஞ்சு மொழியில் பெயரடைகள் பெயர்ச்சொல்லுக்குப் பின் வரும்.`
            },
            level: `Intermediate`
          },
          {
            id: `fr-v4`,
            word: `Cependant, il faut agir`,
            phonetic: `/sə.pɑ̃.dɑ̃ il fo a.ʒiʁ/`,
            meaning: `However, one must act`,
            context: `Le temps est limité ; cependant, il faut agir avec calme pour réussir.`,
            contextMeaning: `Time is limited; however, one must act calmly to succeed.`,
            note: {
              en: `High-value discourse connector for GCE A/L essays and DELF B2 synthesis tasks.`,
              si: `උසස් පෙළ රචනා සහ DELF B2 කථන විභාග සඳහා 'Cependant' (කෙසේ වෙතත්) ඉතා ප්‍රයෝජනවත් සම්බන්ධක පදයකි.`,
              ta: `A/L கட்டுரைகள் மற்றும் DELF B2 தேர்வுகளுக்கு 'Cependant' (இருப்பினும்) மிக முக்கியமான இணைப்புச் சொல்.`
            },
            level: `Advanced`
          }
        ],
        grammar: {
          ruleTitle: `Negation Sandwich: ne … pas`,
          explanation: {
            en: `To make a present-tense French sentence negative, wrap the conjugated verb with 'ne' before it and 'pas' after it: "Je ne parle pas vite."`,
            si: `ප්‍රංශ වාක්‍යයක් නැත යන අර්ථයට හැරවීමේදී ක්‍රියාපදය දෙපසින් 'ne' සහ 'pas' යොදයි. උදා: "Je ne parle pas vite."`,
            ta: `பிரெஞ்சு வாக்கியத்தை எதிர்மறையாக மாற்ற வினைச்சொல்லுக்கு முன் 'ne' மற்றும் பின் 'pas' சேர்க்க வேண்டும்: "Je ne parle pas vite."`
          },
          puzzlePrompt: `Arrange the words to say: "I do not study in Kandy."`,
          tokens: [`Kandy`, `pas`, `étudie`, `à`, `n'`, `Je`],
          answer: [`Je`, `n'`, `étudie`, `pas`, `à`, `Kandy`],
          feedbackCorrect: {
            en: `Notice how 'ne' shortens to "n'" before the vowel in 'étudie'!`,
            si: `'étudie' ස්වරයකින් ආරම්භ වන නිසා 'ne' යන්න "n'" ලෙස කෙටි වන ආකාරය හොඳින් නිරීක්ෂණය කරන්න!`,
            ta: `'étudie' உயிரெழுத்தில் தொடங்குவதால் 'ne' என்பது "n'" ஆகச் சுருங்குவதைக் கவனியுங்கள்!`
          }
        },
        reading: {
          title: `Une journée à Colombo`,
          passage: `Chaque matin, Kavindu prend le train de Mount Lavinia à Colombo Fort. Pendant le trajet, il écoute des podcasts en français et révise dix nouveaux mots. À midi, il discute avec son amie française au café.`,
          translation: `Every morning, Kavindu takes the train from Mount Lavinia to Colombo Fort. During the journey, he listens to French podcasts and revises ten new words. At midday, he chats with his French friend at the café.`,
          question: `What does Kavindu do during his train journey?`,
          options: [`He sleeps until Colombo Fort`, `He listens to French podcasts and revises ten words`, `He meets his friend on the train`],
          correctIdx: 1,
          explanation: {
            en: `The text states: "Pendant le trajet, il écoute des podcasts en français et révise dix nouveaux mots."`,
            si: `ඡේදයේ සඳහන් වන්නේ ඔහු දුම්රිය ගමන අතරතුර ප්‍රංශ පොඩ්කාස්ට් අසමින් නව වචන දහයක් පුනරීක්ෂණය කරන බවයි.`,
            ta: `ரயில் பயணத்தின் போது அவன் பிரெஞ்சு ஒலிபரப்புகளைக் கேட்டு பத்து புதிய சொற்களைத் திருப்புகிறான் எனப் பத்தியில் உள்ளது.`
          }
        },
        writingSamples: [`Bonjour`, `Ça va ?`, `Merci`, `À bientôt`],
        listeningPhrase: `Bonjour, je suis étudiant au Sri Lanka et j'adore apprendre le français.`,
        listeningPhonetic: `bohn-zhoor, zhuh swee ay-too-dyahn oh sree lahn-kah ay zhah-dor ah-prahn-druh luh frahn-say`,
        quiz: [
          {
            q: `Which sentence uses the polite register for a Sri Lankan school principal?`,
            options: [`Salut, tu vas bien ?`, `Bonjour Monsieur, comment allez-vous ?`, `Tu veux du thé ?`],
            correct: 1,
            explain: {
              en: `'Monsieur' and 'vous' express formal respect, whereas 'tu' and 'Salut' are reserved for close friends.`,
              si: `විදුහල්පතිවරයෙකු වැනි ගෞරවනීය අයෙකුට 'Monsieur' සහ 'vous' භාවිතා කළ යුතුය.`,
              ta: `அதிபர் போன்ற பெரியவர்களிடம் மரியாதையாக 'Monsieur' மற்றும் 'vous' பயன்படுத்த வேண்டும்.`
            }
          },
          {
            q: `Complete the sentence: "Hier, nous ___ visité le jardin botanique de Peradeniya."`,
            options: [`sommes`, `avons`, `êtes`],
            correct: 1,
            explain: {
              en: `The verb 'visiter' takes the auxiliary 'avoir' (nous avons visité) in the passé composé.`,
              si: `'visiter' ක්‍රියාපදයේ අතීත කාලය (passé composé) සඳහා 'avoir' (nous avons) උපකාරක ක්‍රියාව භාවිතා වේ.`,
              ta: `'visiter' வினைச்சொல்லின் இறந்த காலத்திற்கு 'avoir' (nous avons visité) துணை வினைச்சொல் பயன்படும்.`
            }
          },
          {
            q: `In DELF A1/O/L listening, "Quelle heure est-il ?" asks about:`,
            options: [`The weather`, `The time`, `The ticket price`],
            correct: 1,
            explain: {
              en: `'Heure' means hour/time — "Il est huit heures" means "It is eight o'clock."`,
              si: `'Quelle heure est-il ?' යනු 'වේලාව කීයද?' යන්නයි.`,
              ta: `'Quelle heure est-il ?' என்பது 'மணி என்ன?' எனக் கேட்கும் கேள்வியாகும்.`
            }
          }
        ],
        cultural: [
          { title: `GCE O/L & DELF Bridge`, body: `O/L French focuses on everyday dialogues, short letters, and reading comprehension — matching DELF A1–A2 themes closely.` },
          { title: `La Bise & Sri Lankan Ayubowan`, body: `In France, friends greet with cheek kisses ('la bise'), whereas in formal Sri Lankan settings a polite handshake or Ayubowan pairs naturally with "Bonjour".` }
        ]
      },

      de: {
        id: `de`,
        name: `German`,
        nativeName: `Deutsch`,
        flag: `🇩🇪`,
        speechCode: `de-DE`,
        themeLabel: `Pastel Blue Theme`,
        examTracks: [`GCE O/L German`, `GCE A/L German`, `Goethe-Zertifikat A1–C1`, `TestDaF`],
        welcomeNote: {
          en: `German capitalises all nouns and places the conjugated verb in the second position (V2 rule) in main clauses.`,
          si: `ජර්මානු භාෂාවේ සෑම නාමපදයක්ම කැපිටල් අකුරකින් ආරම්භ වන අතර ප්‍රධාන වාක්‍යවල ක්‍රියාපදය සැමවිටම දෙවන ස්ථානයේ (V2) යෙදේ.`,
          ta: `ஜெர்மன் மொழியில் எல்லா பெயர்ச்சொற்களும் பெரிய எழுத்தில் தொடங்கும்; முக்கிய வாக்கியங்களில் வினைச்சொல் இரண்டாவது இடத்தில் வரும்.`
        },
        levels: [
          {
            id: `de-beg`,
            tier: `Beginner (A1 · Goethe Start Deutsch 1)`,
            lessons: [
              { id: `de-l1`, title: `V2 Word Order & Everyday Greetings`, cycle: `5E: Engage & Explore`, xp: 40, duration: `4 min` },
              { id: `de-l2`, title: `Der, Die, Das: Mastering Noun Genders`, cycle: `5E: Explain`, xp: 55, duration: `5 min` },
              { id: `de-l3`, title: `Numbers, Timetables & Colombo Buses`, cycle: `5E: Elaborate`, xp: 55, duration: `5 min` }
            ]
          },
          {
            id: `de-int`,
            tier: `Intermediate (A2–B1 · GCE O/L & Goethe B1)`,
            lessons: [
              { id: `de-l4`, title: `Accusative & Dative Cases in Context`, cycle: `5E: Explain & Elaborate`, xp: 75, duration: `6 min` },
              { id: `de-l5`, title: `Separable Verbs (aufstehen, mitkommen)`, cycle: `5E: Evaluate`, xp: 80, duration: `6 min` }
            ]
          },
          {
            id: `de-adv`,
            tier: `Advanced (B2–C1 · STEM & DAAD Study Prep)`,
            lessons: [
              { id: `de-l6`, title: `Subordinate Clauses (weil, obwohl) & Academic Writing`, cycle: `5E: Elaborate`, xp: 100, duration: `8 min` }
            ]
          }
        ],
        vocab: [
          {
            id: `de-v1`,
            word: `Guten Tag, freut mich sehr`,
            phonetic: `/ˈɡuːtn̩ taːk fʁɔɪ̯t mɪç zeːɐ̯/`,
            meaning: `Good day, very pleased to meet you`,
            context: `Guten Tag Frau Silva, freut mich sehr, Sie kennenzulernen.`,
            contextMeaning: `Good day Mrs Silva, very pleased to meet you.`,
            note: {
              en: `Use 'Sie' (always capitalised) for polite formal address in German.`,
              si: `ගෞරවාර්ථයෙන් 'ඔබ' යන්න දැක්වීමට සැමවිටම කැපිටල් 'Sie' භාවිතා කරයි.`,
              ta: `மரியாதையாக 'நீங்கள்' என்பதைக் குறிக்க எப்போதும் பெரிய எழுத்தில் 'Sie' பயன்படுத்தவும்.`
            },
            level: `Beginner`
          },
          {
            id: `de-v2`,
            word: `Der Stundenplan`,
            phonetic: `/deːɐ̯ ˈʃtʊndn̩ˌplaːn/`,
            meaning: `The school timetable`,
            context: `Mein Stundenplan für die elfte Klasse ist heute voll.`,
            contextMeaning: `My timetable for Grade 11 is full today.`,
            note: {
              en: `Compound noun: 'Stunde' (hour) + 'Plan' (plan). The gender follows the last word ('der Plan').`,
              si: `සංයුක්ත නාමපදයක ලිංගය තීරණය වන්නේ අවසාන වචනය ('der Plan') අනුවය.`,
              ta: `கூட்டுப் பெயர்ச்சொல்லின் பால் வகை கடைசிச் சொல்லான 'der Plan' அடிப்படையில் அமையும்.`
            },
            level: `Beginner`
          },
          {
            id: `de-v3`,
            word: `Mit dem Zug fahren`,
            phonetic: `/mɪt deːm tsuːk ˈfaːʁən/`,
            meaning: `To travel by train`,
            context: `Am Wochenende fahre ich mit dem Zug nach Galle.`,
            contextMeaning: `At the weekend I am travelling to Galle by train.`,
            note: {
              en: `The preposition 'mit' ALWAYS triggers the Dative case: 'der Zug' becomes 'dem Zug'.`,
              si: `'mit' නිපාතය සැමවිටම Dative විභක්තිය ඉල්ලයි — එබැවින් 'der Zug' යන්න 'dem Zug' බවට පත්වේ.`,
              ta: `'mit' என்ற முன்னிடைச்சொல் எப்போதும் Dative வேற்றுமையை எடுக்கும் ('der Zug' → 'dem Zug').`
            },
            level: `Intermediate`
          },
          {
            id: `de-v4`,
            word: `Die Forschungsmöglichkeiten`,
            phonetic: `/diː ˈfɔʁʃʊŋsˌmøːklɪçkaɪ̯tn̩/`,
            meaning: `The research opportunities`,
            context: `Deutschland bietet gute Forschungsmöglichkeiten für Ingenieure.`,
            contextMeaning: `Germany offers great research opportunities for engineers.`,
            note: {
              en: `Useful vocabulary for Sri Lankan students applying for DAAD or Ausbildung programmes.`,
              si: `ජර්මානු විශ්වවිද්‍යාල හා DAAD ශිෂ්‍යත්ව සඳහා අයදුම් කරන සිසුන්ට මෙම වචනය වැදගත් වේ.`,
              ta: `ஜெர்மன் பல்கலைக்கழகங்கள் மற்றும் DAAD உதவித்தொகைக்கு விண்ணப்பிக்கும் மாணவர்களுக்குப் பயனுள்ள சொல்.`
            },
            level: `Advanced`
          }
        ],
        grammar: {
          ruleTitle: `Verb-Second (V2) Rule`,
          explanation: {
            en: `In a German statement, the conjugated verb MUST sit in position 2 — even if a time phrase starts the sentence: "Heute lerne ich Deutsch."`,
            si: `ජර්මානු වාක්‍යයක් කාල පදයකින් ('Heute') ආරම්භ වුවද, ක්‍රියාපදය ('lerne') දෙවන ස්ථානයේම තැබිය යුතුය.`,
            ta: `ஜெர்மன் வாக்கியம் காலச் சொல்லில் ('Heute') தொடங்கினாலும், வினைச்சொல் ('lerne') இரண்டாவது இடத்திலேயே இருக்க வேண்டும்.`
          },
          puzzlePrompt: `Arrange the words to say: "Tomorrow I am travelling to Kandy."`,
          tokens: [`ich`, `Kandy`, `Morgen`, `nach`, `fahre`],
          answer: [`Morgen`, `fahre`, `ich`, `nach`, `Kandy`],
          feedbackCorrect: {
            en: `Spot on! Because 'Morgen' takes slot 1, 'fahre' stays in slot 2 and 'ich' moves to slot 3.`,
            si: `නියමයි! 'Morgen' පළමු ස්ථානය ගත් නිසා 'fahre' දෙවන ස්ථානයේ රැඳී 'ich' තෙවන ස්ථානයට යයි.`,
            ta: `சிறப்பு! 'Morgen' முதல் இடத்தில் இருப்பதால் 'fahre' இரண்டாவது இடத்தில் நிலைக்கும்.`
          }
        },
        reading: {
          title: `Studieren und Arbeiten in Berlin`,
          passage: `Ruwan kommt aus Matara und lernt seit zwei Jahren Deutsch. Im Juni hat er das Goethe-Zertifikat B1 bestanden. Jetzt bewirbt er sich um ein Ingenieurstudium in München.`,
          translation: `Ruwan comes from Matara and has been learning German for two years. In June he passed the Goethe-Zertifikat B1. Now he is applying for an engineering degree in Munich.`,
          question: `Which exam did Ruwan pass in June?`,
          options: [`Goethe-Zertifikat A1`, `Goethe-Zertifikat B1`, `TestDaF C2`],
          correctIdx: 1,
          explanation: {
            en: `"Im Juni hat er das Goethe-Zertifikat B1 bestanden" directly states he passed B1 in June.`,
            si: `ඡේදයට අනුව රුවන් ජූනි මාසයේදී Goethe-Zertifikat B1 විභාගය සමත් විය.`,
            ta: `பத்தியின்படி ருவான் ஜூன் மாதத்தில் Goethe-Zertifikat B1 தேர்வில் தேர்ச்சி பெற்றார்.`
          }
        },
        writingSamples: [`Guten Tag`, `Danke schön`, `Bitte`, `Tschüss`],
        listeningPhrase: `Ich lerne jeden Tag zwanzig Minuten Deutsch für meine Prüfung.`,
        listeningPhonetic: `ikh lair-nuh yay-dun tahk tsvahn-tsikh mee-noo-tun doytsh fyoor my-nuh pryoo-foong`,
        quiz: [
          {
            q: `Which noun is grammatically masculine ('der')?`,
            options: [`die Schule (school)`, `der Lehrer (male teacher)`, `das Buch (book)`],
            correct: 1,
            explain: {
              en: `'Lehrer' takes the masculine article 'der' (der Lehrer).`,
              si: `'Lehrer' (ගුරුවරයා) පුරුෂ ලිංග නාමපදයක් බැවින් 'der' යෙදේ.`,
              ta: `'Lehrer' (ஆசிரியர்) ஆண்பால் என்பதால் 'der' பயன்படும்.`
            }
          },
          {
            q: `In a 'weil' (because) clause, where does the conjugated verb go?`,
            options: [`Position 1`, `Position 2`, `At the very end of the clause`],
            correct: 2,
            explain: {
              en: `Subordinating conjunctions like 'weil' and 'dass' send the conjugated verb to the end: "...weil ich Deutsch lerne."`,
              si: `'weil' වැනි අනුබද්ධ පදයකින් පසු ක්‍රියාපදය වාක්‍යයේ අවසානයට යයි.`,
              ta: `'weil' போன்ற இணைப்புச் சொற்கள் வினைச்சொல்லை வாக்கியத்தின் இறுதிக்கு அனுப்பும்.`
            }
          },
          {
            q: `What does "Entschuldigung, wo ist der Bahnhof?" mean?`,
            options: [`Excuse me, where is the railway station?`, `Goodbye, see you tomorrow`, `How much is the ticket?`],
            correct: 0,
            explain: {
              en: `'Entschuldigung' = Excuse me; 'der Bahnhof' = the railway station.`,
              si: `'Bahnhof' යනු දුම්රිය ස්ථානයයි.`,
              ta: `'Bahnhof' என்றால் ரயில் நிலையம் என்று பொருள்.`
            }
          }
        ],
        cultural: [
          { title: `Goethe-Institut Colombo & O/L`, body: `Sri Lankan learners can sit Goethe-Zertifikat A1–B2 in Colombo; B1/B2 opens doors to German dual vocational training (Ausbildung).` },
          { title: `Pünktlichkeit (Punctuality)`, body: `Arriving 5 minutes early for meetings and classes is strongly valued across Germany, Austria, and Switzerland.` }
        ]
      },

      ja: {
        id: `ja`,
        name: `Japanese`,
        nativeName: `日本語`,
        flag: `🇯🇵`,
        speechCode: `ja-JP`,
        themeLabel: `Pastel Green Theme`,
        examTracks: [`GCE O/L Japanese`, `GCE A/L Japanese`, `JLPT N5–N1`, `JFT-Basic`],
        welcomeNote: {
          en: `Japanese uses Subject-Object-Verb (SOV) order — just like Sinhala and Tamil! That gives Sri Lankan learners a natural head start.`,
          si: `ජපන් භාෂාවේ වාක්‍ය රටාව (කර්තෘ-කර්ම-ක්‍රියා / SOV) සිංහල හා දෙමළ භාෂා වලට බෙහෙවින් සමාන බැවින් ශ්‍රී ලාංකික සිසුන්ට ඉගෙනීම පහසුය!`,
          ta: `ஜப்பானிய மொழியின் வாக்கிய அமைப்பு (எழுவாய்-செயப்படுபொருள்-பயனிலை) தமிழ் மற்றும் சிங்களம் போலவே இருப்பதால் கற்பது மிகவும் எளிது!`
        },
        levels: [
          {
            id: `ja-beg`,
            tier: `Beginner (JLPT N5 · GCE O/L Core)`,
            lessons: [
              { id: `ja-l1`, title: `Hiragana Foundations & Polite Greetings`, cycle: `5E: Engage & Explore`, xp: 45, duration: `5 min` },
              { id: `ja-l2`, title: `Particles は (wa), を (o) & です/ます`, cycle: `5E: Explain`, xp: 55, duration: `5 min` },
              { id: `ja-l3`, title: `Katakana Loanwords & Daily Numbers`, cycle: `5E: Elaborate`, xp: 60, duration: `5 min` }
            ]
          },
          {
            id: `ja-int`,
            tier: `Intermediate (JLPT N4–N3 · GCE A/L)`,
            lessons: [
              { id: `ja-l4`, title: `て-Form Requests & Connecting Actions`, cycle: `5E: Explain & Elaborate`, xp: 80, duration: `7 min` },
              { id: `ja-l5`, title: `Essential 150 Kanji for O/L & N4 Reading`, cycle: `5E: Evaluate`, xp: 85, duration: `7 min` }
            ]
          },
          {
            id: `ja-adv`,
            tier: `Advanced (JLPT N2–N1 · Keigo & Career)`,
            lessons: [
              { id: `ja-l6`, title: `Sonkeigo & Kenjōgo (Respectful Business Speech)`, cycle: `5E: Elaborate`, xp: 105, duration: `8 min` }
            ]
          }
        ],
        vocab: [
          {
            id: `ja-v1`,
            word: `おはようございます`,
            phonetic: `Ohayō gozaimasu`,
            meaning: `Good morning (polite)`,
            context: `先生、おはようございます。今日もよろしくお願いします。`,
            contextMeaning: `Good morning, Teacher. Please guide me today as well.`,
            note: {
              en: `Add 'gozaimasu' when speaking to teachers or elders; 'ohayō' alone is casual for friends.`,
              si: `ගුරුවරුන්ට 'おはようございます' ලෙස සම්පූර්ණයෙන් කියන්න. මිතුරන්ට 'おはよう' පමණක් ප්‍රමාණවත්ය.`,
              ta: `ஆசிரியர்களிடம் 'おはようございます' என முழுமையாகக் கூறவும். நண்பர்களிடம் 'おはよう' எனக் கூறலாம்.`
            },
            level: `Beginner`
          },
          {
            id: `ja-v2`,
            word: `スリランカから来ました`,
            phonetic: `Suriranka kara kimashita`,
            meaning: `I came from Sri Lanka`,
            context: `はじめまして。わたしはスリランカから来ました。`,
            contextMeaning: `Nice to meet you. I came from Sri Lanka.`,
            note: {
              en: `'Suriranka' is written in Katakana because it is a foreign country name; 'kara' means 'from'.`,
              si: `විදේශීය නාමයක් බැවින් 'スリランカ' කතකනා (Katakana) අකුරින් ලියයි. 'から' යනු 'සිට' යන්නයි.`,
              ta: `வெளிநாட்டுப் பெயர் என்பதால் 'スリランカ' கட்டகானா எழுத்தில் எழுதப்படுகிறது. 'から' என்றால் 'இருந்து'.`
            },
            level: `Beginner`
          },
          {
            id: `ja-v3`,
            word: `図書館で勉強します`,
            phonetic: `Toshokan de benkyō shimasu`,
            meaning: `I study at the library`,
            context: `放課後、ともだちと図書館で日本語を勉強します。`,
            contextMeaning: `After school, I study Japanese at the library with my friend.`,
            note: {
              en: `Particle で (de) marks the location where an action happens (studying at the library).`,
              si: `ක්‍රියාවක් සිදුවන ස්ථානය දැක්වීමට 'で' (de) නිපාතය යොදයි — සිංහලෙන් 'පුස්තකාලයේදී' වැනිය.`,
              ta: `செயல் நடைபெறும் இடத்தைக் குறிக்க 'で' (de) இடைச்சொல் பயன்படுகிறது.`
            },
            level: `Intermediate`
          },
          {
            id: `ja-v4`,
            word: `ご確認ください`,
            phonetic: `Go-kakunin kudasai`,
            meaning: `Please check or verify (respectful)`,
            context: `添付の資料をご確認くださいますようお願いいたします。`,
            contextMeaning: `Kindly check the attached document.`,
            note: {
              en: `Essential polite business phrasing tested in JLPT N3/N2 and workplace interviews.`,
              si: `JLPT N3/N2 සහ රැකියා සම්මුඛ පරීක්ෂණවලදී අත්‍යවශ්‍ය ආචාරශීලී ව්‍යාපාරික යෙදුමකි.`,
              ta: `JLPT N3/N2 மற்றும் வேலை நேர்முகத் தேர்வுகளில் முக்கியமான மரியாதை வணிகச் சொற்றொடர்.`
            },
            level: `Advanced`
          }
        ],
        grammar: {
          ruleTitle: `SOV Order & Particles は (wa) / を (o)`,
          explanation: {
            en: `Just like Sinhala ("මම ජපන් ඉගෙනගන්නවා") and Tamil ("நான் ஜப்பானியம் கற்கிறேன்"), Japanese puts the verb at the end: [Topic は] [Object を] [Verb].`,
            si: `සිංහල වාක්‍ය මෙන්ම ජපන් වාක්‍යයේද ක්‍රියාපදය අවසානයට යෙදේ. මාතෘකාවට පසු 'は' (wa) ද කර්මයට පසු 'を' (o) ද යොදන්න.`,
            ta: `தமிழ் வாக்கியம் போலவே ஜப்பானியிலும் வினைச்சொல் இறுதியில் வரும். கருப்பொருளுக்குப் பின் 'は' (wa), செயப்படுபொருளுக்குப் பின் 'を' (o) வரும்.`
          },
          puzzlePrompt: `Arrange the blocks to say: "I drink Ceylon tea."`,
          tokens: [`飲みます`, `は`, `紅茶`, `わたし`, `を`],
          answer: [`わたし`, `は`, `紅茶`, `を`, `飲みます`],
          feedbackCorrect: {
            en: `Perfect SOV structure! わたし (I) は · 紅茶 (black tea) を · 飲みます (drink).`,
            si: `ඉතා නිවැරදියි! わたし は (මම) · 紅茶 を (කළු තේ) · 飲みます (බොමි).`,
            ta: `மிகச் சரி! わたし は (நான்) · 紅茶 を (தேநீர்) · 飲みます (குடிக்கிறேன்).`
          }
        },
        reading: {
          title: `キャンディへの電車の旅`,
          passage: `日曜日、さくらさんはコロンボからキャンディまで電車で行きました。車窓から緑の山が見えて、とてもきれいでした。午後は仏歯寺を見学しました。`,
          translation: `On Sunday, Sakura travelled from Colombo to Kandy by train. Green mountains were visible from the train window, and it was very beautiful. In the afternoon, she visited the Temple of the Tooth.`,
          question: `How did Sakura travel from Colombo to Kandy?`,
          options: [`By bus`, `By train (電車)`, `By car`],
          correctIdx: 1,
          explanation: {
            en: `電車 (densha) means train; 電車で行きました = went by train.`,
            si: `電車 (densha) යනු දුම්රියයි — ඇය දුම්රියෙන් මහනුවරට ගියාය.`,
            ta: `電車 (densha) என்றால் ரயில் — அவள் ரயிலில் கண்டிக்குச் சென்றாள்.`
          }
        },
        writingSamples: [`あ`, `い`, `う`, `日本`, `茶`],
        listeningPhrase: `おはようございます。わたしはまいにちにほんごをべんきょうします。`,
        listeningPhonetic: `o-ha-yō go-za-i-ma-su. wa-ta-shi wa ma-i-ni-chi ni-hon-go o ben-kyō shi-ma-su.`,
        quiz: [
          {
            q: `Which particle marks the direct object of a verb (e.g., reading a book)?`,
            options: [`は (wa)`, `を (o)`, `の (no)`],
            correct: 1,
            explain: {
              en: `を (pronounced 'o') marks the direct object: 本を読みます (hon o yomimasu = read a book).`,
              si: `ක්‍රියාවේ කර්මය දැක්වීමට 'を' (o) නිපාතය භාවිතා කරයි.`,
              ta: `செயப்படுபொருளைக் குறிக்க 'を' (o) இடைச்சொல் பயன்படுத்தப்படுகிறது.`
            }
          },
          {
            q: `Why is "コロンボ" (Colombo) written in Katakana?`,
            options: [`It is an ancient Kanji`, `Katakana is used for foreign names and loanwords`, `It is a verb ending`],
            correct: 1,
            explain: {
              en: `Katakana represents foreign loanwords, international city names, and countries outside Japan/China.`,
              si: `විදේශීය නගර හා වචන ලිවීමට කතකනා (Katakana) අක්ෂර මාලාව භාවිතා වේ.`,
              ta: `வெளிநாட்டு நகரங்கள் மற்றும் பிறமொழிச் சொற்களுக்கு கட்டகானா (Katakana) எழுத்துக்கள் பயன்படுகின்றன.`
            }
          },
          {
            q: `What does the GCE O/L & JLPT N5 word "毎日 (まいにち)" mean?`,
            options: [`Every week`, `Every day`, `Next month`],
            correct: 1,
            explain: {
              en: `毎 (every) + 日 (day) = 毎日 (mainichi = every day).`,
              si: `毎日 (mainichi) යනු 'සෑම දිනකම' යන්නයි.`,
              ta: `毎日 (mainichi) என்றால் 'தினமும்' என்று பொருள்.`
            }
          }
        ],
        cultural: [
          { title: `GCE O/L & JLPT N5–N4 Alignment`, body: `Mastering Hiragana, Katakana, and ~100 basic Kanji covers both GCE O/L Japanese and JLPT N5.` },
          { title: `Ojigi (Bowing) & Politeness`, body: `A gentle 15° bow accompanies everyday greetings, while 30°–45° bows show deeper gratitude or respect.` }
        ]
      },

      zh: {
        id: `zh`,
        name: `Mandarin Chinese`,
        nativeName: `中文 (普通话)`,
        flag: `🇨🇳`,
        speechCode: `zh-CN`,
        themeLabel: `Pastel Peach Theme`,
        examTracks: [`GCE O/L Chinese`, `GCE A/L Chinese`, `HSK Levels 1–6`, `HSKK Oral`],
        welcomeNote: {
          en: `Mandarin has NO verb conjugations or noun plurals — instead, mastering the 4 Pinyin tones unlocks clear meaning.`,
          si: `මැන්ඩරින් චීන භාෂාවේ ක්‍රියාපද වෙනස් වීම් (conjugations) නොමැති අතර, Pinyin ස්වර 4 නිවැරදිව උච්චාරණය කිරීම ඉතා වැදගත් වේ.`,
          ta: `மாண்டரின் சீன மொழியில் வினைச்சொல் மாற்றங்கள் இல்லை; ஆனால் 4 தொனிகளை (Tones) சரியாக உச்சரிப்பதே பொருளைத் தீர்மானிக்கும்.`
        },
        levels: [
          {
            id: `zh-beg`,
            tier: `Beginner (HSK 1 · Pinyin & Tones)`,
            lessons: [
              { id: `zh-l1`, title: `The 4 Mandarin Tones & Pinyin Basics`, cycle: `5E: Engage & Explore`, xp: 45, duration: `5 min` },
              { id: `zh-l2`, title: `SVO Word Order & Basic Pronouns (我, 你, 他)`, cycle: `5E: Explain`, xp: 50, duration: `5 min` },
              { id: `zh-l3`, title: `Measure Words (个, 本, 杯) & Ordering Tea`, cycle: `5E: Elaborate`, xp: 60, duration: `5 min` }
            ]
          },
          {
            id: `zh-int`,
            tier: `Intermediate (HSK 2–3 · GCE O/L & A/L)`,
            lessons: [
              { id: `zh-l4`, title: `Aspect Particle 了 (le) & Past Experiences (过)`, cycle: `5E: Explain & Elaborate`, xp: 75, duration: `6 min` },
              { id: `zh-l5`, title: `300 Core Hanzi Radicals & Reading Stories`, cycle: `5E: Evaluate`, xp: 85, duration: `7 min` }
            ]
          },
          {
            id: `zh-adv`,
            tier: `Advanced (HSK 4–6 · Trade & Diplomacy)`,
            lessons: [
              { id: `zh-l6`, title: `Chengyu (4-Character Idioms) & Formal Essays`, cycle: `5E: Elaborate`, xp: 105, duration: `8 min` }
            ]
          }
        ],
        vocab: [
          {
            id: `zh-v1`,
            word: `你好，很高兴认识你`,
            phonetic: `Nǐ hǎo, hěn gāoxìng rènshi nǐ`,
            meaning: `Hello, very glad to meet you`,
            context: `老师您好！我叫阿努，很高兴认识您。`,
            contextMeaning: `Hello Teacher! My name is Anu, very glad to meet you.`,
            note: {
              en: `Use '您 (nín)' instead of '你 (nǐ)' to show respect to teachers and elders.`,
              si: `ගුරුවරුන්ට හෝ වැඩිහිටියන්ට ගෞරව දැක්වීමට '你 (nǐ)' වෙනුවට '您 (nín)' භාවිතා කරයි.`,
              ta: `ஆசிரியர்கள் அல்லது பெரியவர்களிடம் மரியாதையாக '你 (nǐ)' என்பதற்குப் பதிலாக '您 (nín)' பயன்படுத்தவும்.`
            },
            level: `Beginner`
          },
          {
            id: `zh-v2`,
            word: `斯里兰卡红茶`,
            phonetic: `Sīlǐlánkǎ hóngchá`,
            meaning: `Sri Lankan black tea (lit. red tea)`,
            context: `我爸爸每天早上喝一杯斯里兰卡红茶。`,
            contextMeaning: `My father drinks a cup of Sri Lankan black tea every morning.`,
            note: {
              en: `In Chinese, black tea is called 红茶 (hóngchá, "red tea") because of the brewed liquor's colour!`,
              si: `චීන භාෂාවේ කළු තේ හඳුන්වන්නේ '红茶' (හොංචා - රතු තේ) යනුවෙනි.`,
              ta: `சீன மொழியில் கருப்புத் தேநீர் '红茶' (சிவப்புத் தேநீர்) என அழைக்கப்படுகிறது.`
            },
            level: `Beginner`
          },
          {
            id: `zh-v3`,
            word: `图书馆`,
            phonetic: `Túshūguǎn`,
            meaning: `Library`,
            context: `下课以后，我们去图书馆准备汉语考试。`,
            contextMeaning: `After class, we go to the library to prepare for the Chinese exam.`,
            note: {
              en: `馆 (guǎn) denotes public cultural buildings: 图书馆 (library), 博物馆 (museum), 饭馆 (restaurant).`,
              si: `'馆 (guǎn)' යන අක්ෂරය පොදු ගොඩනැගිලි හැඳින්වීමට යෙදේ (පුස්තකාලය, කෞතුකාගාරය).`,
              ta: `'馆 (guǎn)' என்ற எழுத்து பொதுக் கட்டிடங்களைக் குறிக்கப் பயன்படுகிறது (நூலகம், அருங்காட்சியகம்).`
            },
            level: `Intermediate`
          },
          {
            id: `zh-v4`,
            word: `坚持不懈`,
            phonetic: `Jiānchí bùxiè`,
            meaning: `Persevere unremittingly`,
            context: `只要坚持不懈，就一定能通过HSK四级考试。`,
            contextMeaning: `As long as you persevere unremittingly, you will pass the HSK Level 4 exam.`,
            note: {
              en: `Classic 4-character idiom (成语) ideal for HSK 4–6 and GCE A/L writing.`,
              si: `HSK 4–6 සහ උසස් පෙළ රචනා සඳහා ඉතා අගනා චීන ප්‍රස්තාව පිරුළකි (Chengyu).`,
              ta: `HSK 4–6 மற்றும் A/L கட்டுரைகளுக்குச் சிறந்த நான்கு-எழுத்துச் சீனப் பழமொழி.`
            },
            level: `Advanced`
          }
        ],
        grammar: {
          ruleTitle: `Time-Before-Verb & Yes/No Questions with 吗 (ma)`,
          explanation: {
            en: `Time expressions sit right after or before the subject (never at the end!), and adding 吗 (ma) turns any statement into a yes/no question.`,
            si: `චීන වාක්‍යවල කාලය දැක්වෙන පද ('明天' - හෙට) ක්‍රියාපදයට පෙර යෙදේ. වාක්‍යය අවසානයට '吗 (ma)' එකතු කිරීමෙන් ප්‍රශ්නයක් සෑදේ.`,
            ta: `சீன வாக்கியங்களில் நேரச் சொல் ('明天' - நாளை) வினைச்சொல்லுக்கு முன் வரும். இறுதியில் '吗 (ma)' சேர்த்தால் கேள்வியாகும்.`
          },
          puzzlePrompt: `Arrange the characters to ask: "Do you study Chinese tomorrow?"`,
          tokens: [`吗`, `学习`, `你`, `汉语`, `明天`],
          answer: [`你`, `明天`, `学习`, `汉语`, `吗`],
          feedbackCorrect: {
            en: `Spot on! 你 (you) · 明天 (tomorrow) · 学习 (study) · 汉语 (Chinese) · 吗 (?)`,
            si: `නිවැරදියි! 你 (ඔබ) · 明天 (හෙට) · 学习 (ඉගෙනගන්නවා) · 汉语 (චීන භාෂාව) · 吗 (?)`,
            ta: `மிகச் சரி! 你 (நீங்கள்) · 明天 (நாளை) · 学习 (படிக்கிறீர்களா) · 汉语 (சீன மொழி) · 吗 (?)`
          }
        },
        reading: {
          title: `在科伦坡学习中文`,
          passage: `玛丽是科伦坡的一名中学生。她每天早上用二十分钟练习声调，然后读一篇短文。她希望明年去北京参加汉语桥比赛。`,
          translation: `Mali is a secondary school student in Colombo. Every morning she spends twenty minutes practising tones, then reads a short passage. She hopes to go to Beijing next year to join the Chinese Bridge competition.`,
          question: `What does Mali practise for twenty minutes every morning?`,
          options: [`Calligraphy`, `Mandarin tones (声调)`, `Cooking`],
          correctIdx: 1,
          explanation: {
            en: `声调 (shēngdiào) means Mandarin tones.`,
            si: `声调 (shēngdiào) යනු චීන ස්වර උච්චාරණයයි.`,
            ta: `声调 (shēngdiào) என்பது மாண்டரின் தொனி உச்சரிப்பைக் குறிக்கும்.`
          }
        },
        writingSamples: [`你`, `好`, `茶`, `学`, `中`],
        listeningPhrase: `你好，我是斯里兰卡学生，我很喜欢学中文。`,
        listeningPhonetic: `nǐ hǎo, wǒ shì sīlǐlánkǎ xuésheng, wǒ hěn xǐhuan xué zhōngwén.`,
        quiz: [
          {
            q: `Why does changing tone on 'ma' (mā vs mǎ) change the meaning?`,
            options: [`Mandarin is a tonal language: mā = mother, mǎ = horse`, `It only changes politeness`, `It marks past tense`],
            correct: 0,
            explain: {
              en: `Pitch contour is part of the word itself in Mandarin: 1st tone mā (妈 = mother), 3rd tone mǎ (马 = horse).`,
              si: `ස්වරය වෙනස් වීමෙන් වචනයේ අර්ථයම වෙනස් වේ (mā = අම්මා, mǎ = අශ්වයා).`,
              ta: `தொனி மாறும்போது சொல்லின் பொருளே மாறும் (mā = அம்மா, mǎ = குதிரை).`
            }
          },
          {
            q: `Which measure word is needed for books: "三 ___ 书" (three books)?`,
            options: [`杯 (bēi)`, `本 (běn)`, `条 (tiáo)`],
            correct: 1,
            explain: {
              en: `本 (běn) is the classifier/measure word for bound books and notebooks; 杯 (bēi) is for cups.`,
              si: `පොත් ගණන් කිරීමට '本 (běn)' භාවිතා කරයි; '杯 (bēi)' කෝප්ප සඳහා යෙදේ.`,
              ta: `புத்தகங்களை எண்ண '本 (běn)' பயன்படும்; '杯 (bēi)' கோப்பைகளுக்குப் பயன்படும்.`
            }
          },
          {
            q: `In HSK 1, how do you negate "有 (yǒu, to have)"?`,
            options: [`不有 (bù yǒu)`, `没有 (méi yǒu)`, `吗有 (ma yǒu)`],
            correct: 1,
            explain: {
              en: `'有' is the one verb always negated with 没 (méi), never 不 (bù): 没有!`,
              si: `'有' (ඇත) නැත යන්න දැක්වීමට සැමවිටම '没有 (méi yǒu)' යොදයි.`,
              ta: `'有' (உள்ளது) என்பதன் எதிர்மறை எப்போதும் '没有 (méi yǒu)' ஆகும்.`
            }
          }
        ],
        cultural: [
          { title: `Confucius Institutes & HSK in Sri Lanka`, body: `HSK exams are hosted regularly in Colombo and Kelaniya, supporting GCE O/L, A/L, and university scholarships.` },
          { title: `Tea Hospitality`, body: `Just like Sri Lankan tea culture, pouring tea for elders and guests first is a hallmark of Chinese etiquette.` }
        ]
      },

      ko: {
        id: `ko`,
        name: `Korean`,
        nativeName: `한국어`,
        flag: `🇰🇷`,
        speechCode: `ko-KR`,
        themeLabel: `Pastel Lavender Theme`,
        examTracks: [`GCE O/L Korean`, `TOPIK I (L1–2)`, `TOPIK II (L3–6)`, `EPS-TOPIK`],
        welcomeNote: {
          en: `Hangul was scientifically designed in 1443 so vowels and consonants mirror mouth shapes — you can learn to read it in one afternoon!`,
          si: `කොරියානු හංගුල් (Hangul) අක්ෂර මාලාව ඉතා විද්‍යාත්මකව නිර්මාණය කර ඇති බැවින් පැය කිහිපයකින් කියවීමට ඉගෙන ගත හැකිය!`,
          ta: `கொரிய ஹங்குல் (Hangul) எழுத்துக்கள் அறிவியல் ரீதியாக வடிவமைக்கப்பட்டவை — சில மணிநேரங்களில் படிக்கக் கற்றுக்கொள்ளலாம்!`
        },
        levels: [
          {
            id: `ko-beg`,
            tier: `Beginner (Hangul & TOPIK I Level 1)`,
            lessons: [
              { id: `ko-l1`, title: `Hangul Syllable Blocks (자모) & Greetings`, cycle: `5E: Engage & Explore`, xp: 45, duration: `5 min` },
              { id: `ko-l2`, title: `Particles 은/는 & 이/가 with SOV Sentences`, cycle: `5E: Explain`, xp: 55, duration: `5 min` },
              { id: `ko-l3`, title: `Polite Present Tense (-아/어요) & Numbers`, cycle: `5E: Elaborate`, xp: 60, duration: `5 min` }
            ]
          },
          {
            id: `ko-int`,
            tier: `Intermediate (TOPIK I L2 – TOPIK II L3 · EPS)`,
            lessons: [
              { id: `ko-l4`, title: `Honorifics (-시-) & Workplace Politeness`, cycle: `5E: Explain & Elaborate`, xp: 80, duration: `6 min` },
              { id: `ko-l5`, title: `Past & Future (-았/었어요, -(으)ㄹ 거예요)`, cycle: `5E: Evaluate`, xp: 85, duration: `7 min` }
            ]
          },
          {
            id: `ko-adv`,
            tier: `Advanced (TOPIK II L4–6 · GKS Academic)`,
            lessons: [
              { id: `ko-l6`, title: `Formal Essay Endings (-는다/-다) & Discourse Markers`, cycle: `5E: Elaborate`, xp: 105, duration: `8 min` }
            ]
          }
        ],
        vocab: [
          {
            id: `ko-v1`,
            word: `안녕하세요, 만나서 반갑습니다`,
            phonetic: `Annyeonghaseyo, mannaseo bangapseumnida`,
            meaning: `Hello, pleased to meet you`,
            context: `선생님, 안녕하세요! 저는 스리랑카에서 온 학생이에요.`,
            contextMeaning: `Hello Teacher! I am a student from Sri Lanka.`,
            note: {
              en: `Adding -요 (-yo) keeps speech polite; -습니다 (-seumnida) is formal for interviews and classrooms.`,
              si: `'-요' යෙදීම සාමාන්‍ය ආචාරශීලී රටාව වන අතර '-습니다' වඩාත් විධිමත් හා ගෞරවාන්විත රටාවයි.`,
              ta: `'-요' என்பது மரியாதையான பேச்சு வழக்கு; '-습니다' என்பது மிக முறையான பேச்சு வழக்கு.`
            },
            level: `Beginner`
          },
          {
            id: `ko-v2`,
            word: `도서관에서 공부해요`,
            phonetic: `Doseogwan-eseo gongbuhaeyo`,
            meaning: `I study at the library`,
            context: `주말마다 친구와 함께 도서관에서 한국어를 공부해요.`,
            contextMeaning: `Every weekend I study Korean at the library with my friend.`,
            note: {
              en: `Use -에서 (-eseo) for the place where an active verb (like studying) happens.`,
              si: `ක්‍රියාවක් සිදුවන ස්ථානය පෙන්වීමට '-에서' (-eseo) යොදයි.`,
              ta: `செயல் நடக்கும் இடத்தைக் குறிக்க '-에서' (-eseo) பயன்படும்.`
            },
            level: `Beginner`
          },
          {
            id: `ko-v3`,
            word: `열심히 노력하겠습니다`,
            phonetic: `Yeolsimhi noryeokhagesseumnida`,
            meaning: `I will work / try hard`,
            context: `이번 토픽 시험에 합격하기 위해 열심히 노력하겠습니다.`,
            contextMeaning: `I will work hard to pass this TOPIK exam.`,
            note: {
              en: `Great expression for EPS-TOPIK and GKS scholarship interviews.`,
              si: `EPS-TOPIK සහ GKS ශිෂ්‍යත්ව සම්මුඛ පරීක්ෂණ සඳහා ඉතා ප්‍රයෝජනවත් යෙදුමකි.`,
              ta: `EPS-TOPIK மற்றும் GKS உதவித்தொகை நேர்முகத் தேர்வுகளுக்குப் பயனுள்ள சொற்றொடர்.`
            },
            level: `Intermediate`
          },
          {
            id: `ko-v4`,
            word: `지속 가능한 발전`,
            phonetic: `Jisok ganeunghan baljeon`,
            meaning: `Sustainable development`,
            context: `환경 보호와 지속 가능한 발전은 모두에게 중요합니다.`,
            contextMeaning: `Environmental protection and sustainable development are important for everyone.`,
            note: {
              en: `Core TOPIK II essay vocabulary for Level 4–6 writing task 54.`,
              si: `TOPIK II විභාගයේ රචනා ප්‍රශ්න සඳහා නිතර යෙදෙන උසස් වචන මාලාවකි.`,
              ta: `TOPIK II கட்டுரைத் தேர்வுகளில் அடிக்கடி வரும் உயர்தரச் சொற்கள்.`
            },
            level: `Advanced`
          }
        ],
        grammar: {
          ruleTitle: `Subject/Topic Particles & Verb-Final SOV Order`,
          explanation: {
            en: `Like Sinhala and Tamil, Korean verbs always come last! Attach -는 after a vowel (저는) and -은 after a consonant (학생은).`,
            si: `සිංහල හා දෙමළ මෙන් කොරියානු ක්‍රියාපදය අවසානයට යෙදේ. ස්වරයකට පසු '-는' ද ව්‍යංජනයකට පසු '-은' ද යොදන්න.`,
            ta: `தமிழ் போலவே கொரிய வினைச்சொல்லும் இறுதியில் வரும். உயிர் முடிவுக்குப் பின் '-는', மெய் முடிவுக்குப் பின் '-은' சேர்க்கவும்.`
          },
          puzzlePrompt: `Arrange the blocks to say: "I study Korean."`,
          tokens: [`공부해요`, `한국어를`, `저는`],
          answer: [`저는`, `한국어를`, `공부해요`],
          feedbackCorrect: {
            en: `Spot on! 저는 (I + topic) · 한국어를 (Korean + object) · 공부해요 (study).`,
            si: `නියමයි! 저는 (මම) · 한국어를 (කොරියානු භාෂාව) · 공부해요 (ඉගෙනගනිමි).`,
            ta: `சிறப்பு! 저는 (நான்) · 한국어를 (கொரிய மொழியை) · 공부해요 (படிக்கிறேன்).`
          }
        },
        reading: {
          title: `서울에서의 첫날`,
          passage: `타린두는 어제 인천공항에 도착했습니다. 오늘은 지하철을 타고 한국어 학당에 갑니다. 선생님이 친절해서 기분이 아주 좋습니다.`,
          translation: `Tharindu arrived at Incheon Airport yesterday. Today he takes the subway to the Korean language institute. Because the teacher is kind, he feels very happy.`,
          question: `How does Tharindu travel to the Korean language institute today?`,
          options: [`By taxi`, `By subway (지하철)`, `On foot`],
          correctIdx: 1,
          explanation: {
            en: `지하철을 타고 = taking the subway (지하철).`,
            si: `'지하철을 타고' යනු උමං දුම්රියෙන් (subway) යන අර්ථයයි.`,
            ta: `'지하철을 타고' என்றால் சுரங்க ரயிலில் (subway) என்று பொருள்.`
          }
        },
        writingSamples: [`가`, `나`, `한`, `글`, `차`],
        listeningPhrase: `안녕하세요. 저는 스리랑카에서 왔어요. 한국어를 열심히 배웁니다.`,
        listeningPhonetic: `an-nyeong-ha-se-yo. jeo-neun seu-ri-rang-ka-e-seo wa-sseo-yo. han-gu-geo-reul yeol-sim-hi bae-um-ni-da.`,
        quiz: [
          {
            q: `Choose the right topic particle after the consonant-ending noun "학생" (student):`,
            options: [`학생는`, `학생은`, `학생를`],
            correct: 1,
            explain: {
              en: `'학생' ends in consonant ㅇ (ng), so it takes -은 (학생은). Vowel-ending words take -는.`,
              si: `'학생' වචනය ව්‍යංජනාක්ෂරයකින් (ㅇ) අවසන් වන නිසා '-은' යෙදේ.`,
              ta: `'학생' மெய்யெழுத்தில் (ㅇ) முடிவதால் '-은' சேரும்.`
            }
          },
          {
            q: `Why does "공부해요" go at the very end of the sentence?`,
            options: [`Korean follows SOV (Subject-Object-Verb) order`, `It is optional`, `Only questions end in verbs`],
            correct: 0,
            explain: {
              en: `Korean is strictly verb-final (SOV), matching Sinhala and Tamil clause order.`,
              si: `කොරියානු භාෂාවේ ක්‍රියාපදය සැමවිටම වාක්‍යයේ අවසානයේ පිහිටයි (SOV).`,
              ta: `கொரிய மொழி எழுவாய்-செயப்படுபொருள்-பயனிலை (SOV) வரிசையைப் பின்பற்றுகிறது.`
            }
          },
          {
            q: `What is the polite way to thank someone in Korean?`,
            options: [`미안합니다`, `감사합니다`, `안녕히 가세요`],
            correct: 1,
            explain: {
              en: `감사합니다 (Gamsahamnida) = Thank you; 미안합니다 = Sorry.`,
              si: `'감사합니다' යනු 'ස්තූතියි' යන්නයි.`,
              ta: `'감사합니다' என்றால் 'நன்றி' என்று பொருள்.`
            }
          }
        ],
        cultural: [
          { title: `TOPIK & EPS-TOPIK in Sri Lanka`, body: `Both academic TOPIK (for GKS scholarships) and EPS-TOPIK (for skilled employment in Korea) are widely taken in Sri Lanka.` },
          { title: `Two-Handed Respect`, body: `Just like offering/receiving with both hands in Sri Lanka, Koreans pass items to elders using both hands or supporting the forearm.` }
        ]
      }
    };

    /* =========================================================================
       3. DEFAULT PERSISTED APPLICATION STATE
       ========================================================================= */
    function createInitialProgress() {
      return {
        fr: { xp: 145, streak: 4, completedLessons: [`fr-l1`], skills: { vocab: 62, grammar: 54, reading: 58, writing: 40, listening: 52, speaking: 44, cultural: 70 }, quizScores: [80, 100], srsIndex: 0, srsRatings: {}, weeklyMinutes: [15, 25, 20, 30, 18, 22, 10] },
        de: { xp: 90, streak: 2, completedLessons: [`de-l1`], skills: { vocab: 48, grammar: 42, reading: 45, writing: 35, listening: 40, speaking: 30, cultural: 55 }, quizScores: [67], srsIndex: 0, srsRatings: {}, weeklyMinutes: [10, 15, 0, 20, 15, 10, 12] },
        ja: { xp: 185, streak: 6, completedLessons: [`ja-l1`, `ja-l2`], skills: { vocab: 70, grammar: 66, reading: 60, writing: 55, listening: 62, speaking: 48, cultural: 75 }, quizScores: [100, 85], srsIndex: 0, srsRatings: {}, weeklyMinutes: [20, 25, 30, 25, 30, 25, 15] },
        zh: { xp: 65, streak: 1, completedLessons: [], skills: { vocab: 36, grammar: 30, reading: 28, writing: 32, listening: 42, speaking: 25, cultural: 45 }, quizScores: [], srsIndex: 0, srsRatings: {}, weeklyMinutes: [10, 0, 15, 10, 12, 0, 8] },
        ko: { xp: 120, streak: 3, completedLessons: [`ko-l1`], skills: { vocab: 58, grammar: 50, reading: 52, writing: 48, listening: 54, speaking: 42, cultural: 60 }, quizScores: [67, 100], srsIndex: 0, srsRatings: {}, weeklyMinutes: [15, 20, 15, 25, 10, 20, 15] }
      };
    }

    const DEFAULT_STATE = {
      activeLang: `fr`,
      explanationLang: `en`,
      userRole: `student`,
      activeTab: `dashboard`,
      practiceSubTab: `vocab`,
      progress: createInitialProgress(),
      notes: [
        { id: `n-1`, lang: `fr`, title: `DELF A1 Polite Phrases`, body: `Always use "Je voudrais..." at cafés and "Excusez-moi, Monsieur/Madame" when asking directions.`, updated: `2026-11-22` },
        { id: `n-2`, lang: `ja`, title: `SOV Particle Reminder`, body: `は (wa) marks topic, を (o) marks object, で (de) marks place of action — matches Sinhala endings!`, updated: `2026-11-23` }
      ],
      customFlashcards: [
        { id: `cf-1`, lang: `fr`, front: `L'emploi du temps`, phonetic: `/lɑ̃.plwa dy tɑ̃/`, back: `The timetable`, note: `Great for O/L school essays` }
      ],
      bookmarks: [`fr-l2`, `ja-l1`, `ko-l1`],
      planner: {
        dailyGoalMinutes: 25,
        targetExam: `GCE O/L & JLPT N5`,
        targetDate: `2027-05-15`,
        tasks: [
          { id: `pt-1`, lang: `fr`, text: `Complete 10 French spaced-repetition cards`, done: false },
          { id: `pt-2`, lang: `ja`, text: `Practise 5 Hiragana & Kanji strokes on canvas`, done: true },
          { id: `pt-3`, lang: `de`, text: `Review V2 word order puzzle`, done: false }
        ]
      },
      communityPosts: [
        {
          id: `cp-1`,
          lang: `fr`,
          author: `Kasun Wijeratne (Grade 11, Kandy)`,
          title: `Tips for GCE O/L French Picture Description?`,
          body: `How do you structure the 5-sentence picture description in Paper II without repeating "Il y a"?`,
          tag: `GCE O/L`,
          upvotes: 14,
          pinned: true,
          flagged: false,
          replies: [
            { author: `Ms. Dilhani Fernando (Teacher)`, text: `Start with location ("Au premier plan, on voit..."), then describe actions in the present tense, and end with weather or mood.` }
          ]
        },
        {
          id: `cp-2`,
          lang: `ja`,
          author: `Tharushi Silva (Colombo)`,
          title: `Connecting Sinhala SOV to Japanese particles helped me score 92%!`,
          body: `Thinking of は/を/で like Sinhala case endings made JLPT N5 grammar click instantly.`,
          tag: `JLPT N5`,
          upvotes: 21,
          pinned: false,
          flagged: false,
          replies: []
        },
        {
          id: `cp-3`,
          lang: `ko`,
          author: `Dinesh Rajapaksa (Kurunegala)`,
          title: `Best strategy for TOPIK I listening section?`,
          body: `Look at the 4 answer choices before the audio plays so you know whether it is asking time, place, or reason.`,
          tag: `TOPIK I`,
          upvotes: 9,
          pinned: false,
          flagged: true,
          replies: []
        }
      ],
      resourceUploads: [
        {
          id: `ru-1`,
          lang: `fr`,
          submitter: `Nimali Perera`,
          title: `GCE O/L French Irregular Verbs Cheat-Sheet (EN/SI)`,
          type: `Grammar Summary`,
          description: `Covers être, avoir, aller, faire, and vouloir in present & passé composé with Sinhala examples.`,
          status: `pending`,
          curatorTag: `Unreviewed`,
          modNote: ``
        },
        {
          id: `ru-2`,
          lang: `zh`,
          submitter: `Sahan Jayawardena`,
          title: `HSK 1 Tone-Pair Listening Drill List`,
          type: `Audio & Tone Guide`,
          description: `20 common Mandarin tone-pair words grouped by 1st+2nd, 2nd+3rd, and 3rd+4th tone combinations.`,
          status: `pending`,
          curatorTag: `Unreviewed`,
          modNote: ``
        },
        {
          id: `ru-3`,
          lang: `ja`,
          submitter: `Ms. Kumari Senanayake`,
          title: `5E Inquiry Lesson: Katakana for Sri Lankan Foods`,
          type: `5E Lesson Pack`,
          description: `Engages students with Katakana transcription of hoppers, kottu, and Ceylon tea.`,
          status: `approved`,
          curatorTag: `GCE O/L Verified`,
          modNote: `Reviewed for accuracy and classroom readiness.`
        }
      ],
      adminUsers: [
        { id: `u-1`, name: `Nimali Perera`, district: `Colombo`, role: `student`, status: `active`, focusLang: `fr` },
        { id: `u-2`, name: `Ms. Dilhani Fernando`, district: `Kandy`, role: `moderator`, status: `active`, focusLang: `fr` },
        { id: `u-3`, name: `K. Senthilkumar`, district: `Jaffna`, role: `student`, status: `active`, focusLang: `de` },
        { id: `u-4`, name: `Dr. Ashan Wickramasinghe`, district: `Galle`, role: `admin`, status: `active`, focusLang: `ja` }
      ],
      customLessons: [],
      auditLog: [
        { ts: `2026-11-24 09:15`, actor: `Ms. Dilhani Fernando`, action: `Approved resource "5E Inquiry Lesson: Katakana for Sri Lankan Foods"`, outcome: `200 OK` }
      ],
      systemSettings: {
        strictRbac: true,
        maintenanceBanner: false,
        defaultSinhalaTamilScaffolding: true,
        xpMultiplier: `1.0`
      }
    };

    /* =========================================================================
       4. RUNTIME STATE & SHIM PERSISTENCE
       ========================================================================= */
    let appState = JSON.parse(JSON.stringify(DEFAULT_STATE));
    let skillChartInstance = null;
    let adminChartInstance = null;

    // Transient UI state for active interactive exercises
    let uiTransient = {
      cardFlipped: false,
      puzzlePlaced: [],
      puzzleStatus: null,
      readingSelected: null,
      readingStatus: null,
      quizIdx: 0,
      quizCorrectCount: 0,
      quizAnswered: null,
      quizFinished: false,
      speakingTranscript: ``,
      speakingScoreText: ``,
      activeScriptCharIdx: 0,
      adminSubTab: `users`,
      communityFilter: `all`
    };

    /* Simulated Server-Side RBAC Matrix */
    const RBAC_PERMISSIONS = {
      student: [`learn`, `notes`, `flashcards`, `planner`, `community_post`, `upload_resource`],
      moderator: [`learn`, `notes`, `flashcards`, `planner`, `community_post`, `upload_resource`, `moderate_community`, `review_uploads`, `curate_materials`],
      admin: [`learn`, `notes`, `flashcards`, `planner`, `community_post`, `upload_resource`, `moderate_community`, `review_uploads`, `curate_materials`, `manage_users`, `manage_curriculum`, `manage_settings`, `view_audit`]
    };

    function rbacCheck(permission) {
      const allowed = (RBAC_PERMISSIONS[appState.userRole] || []).includes(permission);
      if (!allowed && appState.systemSettings.strictRbac) {
        logAudit(`RBAC Guard`, `Blocked "${permission}" attempt by role "${appState.userRole}"`, `403 Forbidden`);
        showBanner(`Access Denied (403 RBAC): Your current role (${appState.userRole}) does not hold "${permission}" permission.`, `err`);
        return false;
      }
      return true;
    }

    function logAudit(actor, action, outcome) {
      const now = new Date();
      const ts = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, `0`)}-${String(now.getDate()).padStart(2, `0`)} ${String(now.getHours()).padStart(2, `0`)}:${String(now.getMinutes()).padStart(2, `0`)}`;
      appState.auditLog.unshift({ ts, actor, action, outcome });
      if (appState.auditLog.length > 25) appState.auditLog.pop();
    }

    async function persistState() {
      try {
        if (window.notebookAppApi && typeof window.notebookAppApi.setAppState === `function`) {
          await window.notebookAppApi.setAppState(appState);
        }
      } catch (e) {
        // Non-fatal in preview environments
      }
    }

    function mergeSavedState(saved) {
      if (!saved || typeof saved !== `object`) return;
      appState = {
        ...JSON.parse(JSON.stringify(DEFAULT_STATE)),
        ...saved,
        progress: { ...createInitialProgress(), ...(saved.progress || {}) },
        planner: { ...DEFAULT_STATE.planner, ...(saved.planner || {}) },
        systemSettings: { ...DEFAULT_STATE.systemSettings, ...(saved.systemSettings || {}) }
      };
    }

    /* =========================================================================
       5. HELPERS: TRANSLATION, AUDIO, CANVAS & BANNER
       ========================================================================= */
    function t(key) {
      const lang = appState.explanationLang || `en`;
      return (I18N[lang] && I18N[lang][key]) || I18N.en[key] || key;
    }

    function tObj(obj) {
      if (!obj) return ``;
      if (typeof obj === `string`) return obj;
      const lang = appState.explanationLang || `en`;
      return obj[lang] || obj.en || ``;
    }

    function escapeHtml(str) {
      return String(str)
        .replace(/&/g, `&amp;`)
        .replace(/</g, `&lt;`)
        .replace(/>/g, `&gt;`)
        .replace(/"/g, `&quot;`)
        .replace(/'/g, `&#39;`);
    }

    function getActiveLanguageData() {
      const base = DEFAULT_LANGUAGES[appState.activeLang] || DEFAULT_LANGUAGES.fr;
      // Merge any admin-added custom lessons
      const extraLessons = (appState.customLessons || []).filter(l => l.lang === base.id);
      if (extraLessons.length === 0) return base;
      const cloned = JSON.parse(JSON.stringify(base));
      cloned.levels[0].lessons = cloned.levels[0].lessons.concat(extraLessons);
      return cloned;
    }

    function showBanner(msg, type = `info`) {
      const el = document.getElementById(`global-banner`);
      if (!el) return;
      el.className = `feedback-box ${type}`;
      el.textContent = msg;
      el.style.display = `block`;
      clearTimeout(el._timer);
      el._timer = setTimeout(() => {
        el.style.display = `none`;
      }, 4500);
    }

    function speakText(text, langCode, rate = 1.0) {
      if (`speechSynthesis` in window) {
        try {
          window.speechSynthesis.cancel();
          const utter = new SpeechSynthesisUtterance(text);
          utter.lang = langCode;
          utter.rate = rate;
          window.speechSynthesis.speak(utter);
          showBanner(`Playing audio (${langCode} · ${rate}x): "${text}"`, `info`);
          return;
        } catch (e) {
          // Fallback to Web Audio chime below
        }
      }
      playWebAudioChime(440);
      showBanner(`Audio pronunciation cue played for: "${text}"`, `info`);
    }

    function playWebAudioChime(freq) {
      try {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        if (!AudioCtx) return;
        const ctx = new AudioCtx();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = `sine`;
        osc.frequency.setValueAtTime(freq, ctx.currentTime);
        gain.gain.setValueAtTime(0.08, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.25);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + 0.26);
      } catch (e) {}
    }

    function awardXp(basePoints, skillKey) {
      const mult = parseFloat(appState.systemSettings.xpMultiplier || `1.0`) || 1.0;
      const gained = Math.round(basePoints * mult);
      const prog = appState.progress[appState.activeLang];
      prog.xp += gained;
      if (skillKey && prog.skills[skillKey] !== undefined) {
        prog.skills[skillKey] = Math.min(100, prog.skills[skillKey] + 4);
      }
      playWebAudioChime(587.33);
      return gained;
    }

    /* =========================================================================
       6. TOP-LEVEL SWITCHER HANDLERS (Hoisted Functions)
       ========================================================================= */
    function selectLanguage(langId) {
      if (!DEFAULT_LANGUAGES[langId]) return;
      appState.activeLang = langId;
      uiTransient.cardFlipped = false;
      uiTransient.puzzlePlaced = [];
      uiTransient.puzzleStatus = null;
      uiTransient.readingSelected = null;
      uiTransient.readingStatus = null;
      uiTransient.quizIdx = 0;
      uiTransient.quizCorrectCount = 0;
      uiTransient.quizAnswered = null;
      uiTransient.quizFinished = false;
      uiTransient.activeScriptCharIdx = 0;
      uiTransient.speakingTranscript = ``;
      uiTransient.speakingScoreText = ``;
      persistState();
      renderAll();
    }

    function setExplanationLang(expLang) {
      appState.explanationLang = expLang;
      persistState();
      renderAll();
    }

    function setUserRole(role) {
      appState.userRole = role;
      if (role === `moderator`) {
        appState.activeTab = `moderator`;
      } else if (role === `admin`) {
        appState.activeTab = `admin`;
      } else if (appState.activeTab === `moderator` || appState.activeTab === `admin`) {
        appState.activeTab = `dashboard`;
      }
      persistState();
      renderAll();
      const key = role === `student` ? `rbacStudentInfo` : role === `moderator` ? `rbacModInfo` : `rbacAdminInfo`;
      showBanner(t(key), `info`);
    }

    function setActiveTab(tab) {
      if (tab === `moderator` && !rbacCheck(`review_uploads`)) return;
      if (tab === `admin` && !rbacCheck(`manage_users`)) return;
      appState.activeTab = tab;
      persistState();
      renderAll();
    }

    function setPracticeSubTab(subTab) {
      appState.practiceSubTab = subTab;
      persistState();
      renderWorkspace();
    }

    function exportUserStudyData() {
      const langData = getActiveLanguageData();
      const prog = appState.progress[appState.activeLang];
      const rows = [
        [`Lingo Mate Progress Export`, langData.name, `Role: ${appState.userRole}`],
        [`Metric`, `Value`],
        [`Total XP`, prog.xp],
        [`Daily Streak`, `${prog.streak} days`],
        [`Completed Lessons`, prog.completedLessons.length],
        [`Vocabulary Mastery`, `${prog.skills.vocab}%`],
        [`Grammar Mastery`, `${prog.skills.grammar}%`],
        [`Reading Mastery`, `${prog.skills.reading}%`],
        [`Writing Mastery`, `${prog.skills.writing}%`],
        [`Listening Mastery`, `${prog.skills.listening}%`],
        [`Speaking Mastery`, `${prog.skills.speaking}%`],
        [`Cultural Readiness`, `${prog.skills.cultural}%`]
      ];
      const csv = rows.map(r => r.map(v => `"${String(v).replace(/"/g, `""`)}"`).join(`,`)).join(`\n`);
      if (window.notebookAppApi && typeof window.notebookAppApi.triggerFileDownload === `function`) {
        window.notebookAppApi.triggerFileDownload({
          content: csv,
          contentType: `text/csv`,
          encoding: `UTF-8`,
          filename: `lingo-mate-${appState.activeLang}-progress.csv`
        });
      }
      showBanner(`Exported ${langData.name} progress report as CSV.`, `ok`);
    }

    function handleResetAllState(btn) {
      if (btn.dataset.armed !== `true`) {
        btn.dataset.armed = `true`;
        btn.textContent = `Click again to confirm reset`;
        setTimeout(() => {
          if (btn) {
            btn.dataset.armed = `false`;
            btn.textContent = `Reset Saved Progress`;
          }
        }, 4000);
        return;
      }
      btn.dataset.armed = `false`;
      btn.textContent = `Reset Saved Progress`;
      appState = JSON.parse(JSON.stringify(DEFAULT_STATE));
      persistState();
      renderAll();
      showBanner(`All language progress, notes, and role settings restored to defaults.`, `ok`);
    }

    /* =========================================================================
       7. STUDENT LEARNING INTERACTION HANDLERS
       ========================================================================= */
    function toggleLessonComplete(lessonId, xpAmount) {
      const prog = appState.progress[appState.activeLang];
      const idx = prog.completedLessons.indexOf(lessonId);
      if (idx === -1) {
        prog.completedLessons.push(lessonId);
        const gained = awardXp(xpAmount, `reading`);
        showBanner(`Lesson completed! +${gained} XP added to your ${getActiveLanguageData().name} track.`, `ok`);
      } else {
        prog.completedLessons.splice(idx, 1);
        showBanner(`Lesson marked incomplete for further revision.`, `info`);
      }
      persistState();
      renderWorkspace();
    }

    function toggleBookmark(lessonId) {
      const idx = appState.bookmarks.indexOf(lessonId);
      if (idx === -1) {
        appState.bookmarks.push(lessonId);
        showBanner(`Bookmarked to My Study Space.`, `ok`);
      } else {
        appState.bookmarks.splice(idx, 1);
        showBanner(`Removed from bookmarks.`, `info`);
      }
      persistState();
      renderWorkspace();
    }

    function flipVocabCard() {
      uiTransient.cardFlipped = !uiTransient.cardFlipped;
      renderWorkspace();
    }

    function rateSrsCard(rating) {
      const langData = getActiveLanguageData();
      const prog = appState.progress[appState.activeLang];
      const card = langData.vocab[prog.srsIndex % langData.vocab.length];
      prog.srsRatings[card.id] = rating;
      const bonus = rating === `Easy` ? 20 : rating === `Good` ? 15 : 10;
      const gained = awardXp(bonus, `vocab`);
      prog.srsIndex = (prog.srsIndex + 1) % langData.vocab.length;
      uiTransient.cardFlipped = false;
      persistState();
      renderWorkspace();
      showBanner(`Spaced-repetition interval scheduled (${rating}). +${gained} XP!`, `ok`);
    }

    function prevSrsCard() {
      const langData = getActiveLanguageData();
      const prog = appState.progress[appState.activeLang];
      prog.srsIndex = (prog.srsIndex - 1 + langData.vocab.length) % langData.vocab.length;
      uiTransient.cardFlipped = false;
      persistState();
      renderWorkspace();
    }

    function addPuzzleTokenByIdx(remIdx) {
      const g = getActiveLanguageData().grammar;
      const remaining = [...g.tokens];
      uiTransient.puzzlePlaced.forEach(pt => {
        const idx = remaining.indexOf(pt);
        if (idx !== -1) remaining.splice(idx, 1);
      });
      if (remaining[remIdx] !== undefined) {
        uiTransient.puzzlePlaced.push(remaining[remIdx]);
        uiTransient.puzzleStatus = null;
        renderWorkspace();
      }
    }

    function speakActiveVocabCard() {
      const langData = getActiveLanguageData();
      const prog = appState.progress[appState.activeLang];
      const card = langData.vocab[prog.srsIndex % langData.vocab.length];
      if (card) speakText(card.word, langData.speechCode, 0.9);
    }

    function speakReadingPassage() {
      const langData = getActiveLanguageData();
      speakText(langData.reading.passage, langData.speechCode, 0.85);
    }

    function speakListeningPhrase(rate) {
      const langData = getActiveLanguageData();
      speakText(langData.listeningPhrase, langData.speechCode, rate);
    }

    function removePuzzleToken(idx) {
      uiTransient.puzzlePlaced.splice(idx, 1);
      uiTransient.puzzleStatus = null;
      renderWorkspace();
    }

    function resetPuzzle() {
      uiTransient.puzzlePlaced = [];
      uiTransient.puzzleStatus = null;
      renderWorkspace();
    }

    function checkGrammarPuzzle() {
      const langData = getActiveLanguageData();
      const expected = langData.grammar.answer.join(` `);
      const actual = uiTransient.puzzlePlaced.join(` `);
      if (actual === expected) {
        const gained = awardXp(35, `grammar`);
        uiTransient.puzzleStatus = { ok: true, msg: `${t(`correctMsg`)} ${tObj(langData.grammar.feedbackCorrect)} (+${gained} XP)` };
        persistState();
      } else {
        uiTransient.puzzleStatus = { ok: false, msg: `${t(`incorrectMsg`)} Target order: "${expected}". ${tObj(langData.grammar.explanation)}` };
      }
      renderWorkspace();
    }

    function answerReadingQuestion(idx) {
      const langData = getActiveLanguageData();
      uiTransient.readingSelected = idx;
      if (idx === langData.reading.correctIdx) {
        const gained = awardXp(30, `reading`);
        uiTransient.readingStatus = { ok: true, msg: `${t(`correctMsg`)} ${tObj(langData.reading.explanation)} (+${gained} XP)` };
        persistState();
      } else {
        uiTransient.readingStatus = { ok: false, msg: `${t(`incorrectMsg`)} ${tObj(langData.reading.explanation)}` };
      }
      renderWorkspace();
    }

    function selectScriptChar(idx) {
      uiTransient.activeScriptCharIdx = idx;
      renderWorkspace();
    }

    function checkDictationInput() {
      const inp = document.getElementById(`dictation-input`);
      const fb = document.getElementById(`dictation-feedback`);
      if (!inp || !fb) return;
      const val = inp.value.trim();
      if (val.length < 3) {
        fb.className = `feedback-box err`;
        fb.textContent = `Please type at least 3 characters from the phrase you heard.`;
        fb.style.display = `block`;
        return;
      }
      const target = getActiveLanguageData().listeningPhrase.toLowerCase();
      const hit = target.includes(val.toLowerCase()) || val.length >= 8;
      if (hit) {
        const gained = awardXp(25, `listening`);
        fb.className = `feedback-box ok`;
        fb.textContent = `${t(`correctMsg`)} Great listening recognition! (+${gained} XP)`;
        persistState();
      } else {
        fb.className = `feedback-box err`;
        fb.textContent = `Listen again at 0.75x speed and check spelling or script characters.`;
      }
      fb.style.display = `block`;
    }

    function startSpeechCheck() {
      const langData = getActiveLanguageData();
      const SpeechRec = window.SpeechRecognition || window.webkitSpeechRecognition;
      if (SpeechRec) {
        try {
          const rec = new SpeechRec();
          rec.lang = langData.speechCode;
          rec.interimResults = false;
          rec.maxAlternatives = 1;
          uiTransient.speakingScoreText = `Listening via microphone… speak "${langData.listeningPhrase}"`;
          renderWorkspace();
          rec.onresult = (ev) => {
            const said = ev.results[0][0].transcript;
            const gained = awardXp(30, `speaking`);
            uiTransient.speakingTranscript = said;
            uiTransient.speakingScoreText = `Captured: "${said}" — Fluency check passed (+${gained} XP)!`;
            persistState();
            renderWorkspace();
          };
          rec.onerror = () => {
            const gained = awardXp(20, `speaking`);
            uiTransient.speakingScoreText = `Microphone unavailable in sandbox preview — simulated pronunciation self-check completed (+${gained} XP).`;
            persistState();
            renderWorkspace();
          };
          rec.start();
          return;
        } catch (e) {}
      }
      const gained = awardXp(20, `speaking`);
      uiTransient.speakingTranscript = langData.listeningPhrase;
      uiTransient.speakingScoreText = `Pronunciation self-assessment logged against phonetic guide (+${gained} XP).`;
      persistState();
      renderWorkspace();
    }

    function submitQuizAnswer(optIdx) {
      const langData = getActiveLanguageData();
      const q = langData.quiz[uiTransient.quizIdx];
      if (!q || uiTransient.quizAnswered !== null) return;
      uiTransient.quizAnswered = optIdx;
      if (optIdx === q.correct) {
        uiTransient.quizCorrectCount += 1;
        awardXp(30, `grammar`);
      }
      persistState();
      renderWorkspace();
    }

    function nextQuizQuestion() {
      const langData = getActiveLanguageData();
      if (uiTransient.quizIdx + 1 < langData.quiz.length) {
        uiTransient.quizIdx += 1;
        uiTransient.quizAnswered = null;
      } else {
        uiTransient.quizFinished = true;
        const pct = Math.round((uiTransient.quizCorrectCount / langData.quiz.length) * 100);
        appState.progress[appState.activeLang].quizScores.push(pct);
        awardXp(25, `cultural`);
        persistState();
      }
      renderWorkspace();
    }

    function restartQuiz() {
      uiTransient.quizIdx = 0;
      uiTransient.quizCorrectCount = 0;
      uiTransient.quizAnswered = null;
      uiTransient.quizFinished = false;
      renderWorkspace();
    }

    /* Notes, Custom Flashcards & Study Planner */
    function handleCreateNote(ev) {
      ev.preventDefault();
      const titleEl = document.getElementById(`note-title-input`);
      const bodyEl = document.getElementById(`note-body-input`);
      if (!titleEl || !bodyEl) return;
      const title = titleEl.value.trim();
      const body = bodyEl.value.trim();
      if (!title || !body) {
        showBanner(`Please fill in both the note title and content.`, `err`);
        return;
      }
      appState.notes.unshift({
        id: `n-${Date.now()}`,
        lang: appState.activeLang,
        title,
        body,
        updated: `2026-11-24`
      });
      awardXp(15, `writing`);
      persistState();
      renderWorkspace();
      showBanner(`Study note saved to your ${getActiveLanguageData().name} notebook.`, `ok`);
    }

    function deleteNote(noteId) {
      appState.notes = appState.notes.filter(n => n.id !== noteId);
      persistState();
      renderWorkspace();
    }

    function handleCreateFlashcard(ev) {
      ev.preventDefault();
      const front = document.getElementById(`fc-front`)?.value.trim() || ``;
      const phonetic = document.getElementById(`fc-phonetic`)?.value.trim() || ``;
      const back = document.getElementById(`fc-back`)?.value.trim() || ``;
      const note = document.getElementById(`fc-note`)?.value.trim() || ``;
      if (!front || !back) {
        showBanner(`Enter both the foreign expression and its English/Sinhala/Tamil meaning.`, `err`);
        return;
      }
      appState.customFlashcards.unshift({
        id: `cf-${Date.now()}`,
        lang: appState.activeLang,
        front,
        phonetic,
        back,
        note
      });
      awardXp(15, `vocab`);
      persistState();
      renderWorkspace();
      showBanner(`Custom flashcard created!`, `ok`);
    }

    function deleteCustomFlashcard(id) {
      appState.customFlashcards = appState.customFlashcards.filter(c => c.id !== id);
      persistState();
      renderWorkspace();
    }

    function handleSavePlannerGoal(ev) {
      ev.preventDefault();
      const mins = parseInt(document.getElementById(`planner-mins`)?.value || `25`, 10);
      const exam = document.getElementById(`planner-exam`)?.value.trim() || `GCE O/L`;
      const date = document.getElementById(`planner-date`)?.value || `2027-05-15`;
      appState.planner.dailyGoalMinutes = Math.max(5, Math.min(180, mins));
      appState.planner.targetExam = exam;
      appState.planner.targetDate = date;
      persistState();
      renderWorkspace();
      showBanner(`Study planner goal updated (${appState.planner.dailyGoalMinutes} mins/day).`, `ok`);
    }

    function handleAddPlannerTask(ev) {
      ev.preventDefault();
      const inp = document.getElementById(`planner-task-input`);
      if (!inp) return;
      const text = inp.value.trim();
      if (!text) return;
      appState.planner.tasks.unshift({ id: `pt-${Date.now()}`, lang: appState.activeLang, text, done: false });
      persistState();
      renderWorkspace();
    }

    function togglePlannerTask(id) {
      const task = appState.planner.tasks.find(x => x.id === id);
      if (task) {
        task.done = !task.done;
        if (task.done) awardXp(15, `cultural`);
        persistState();
        renderWorkspace();
      }
    }

    /* =========================================================================
       8. COMMUNITY & RESOURCE SHARING HANDLERS
       ========================================================================= */
    function setCommunityFilter(val) {
      uiTransient.communityFilter = val;
      renderWorkspace();
    }

    function handleCreateCommunityPost(ev) {
      ev.preventDefault();
      if (!rbacCheck(`community_post`)) return;
      const title = document.getElementById(`cp-title`)?.value.trim() || ``;
      const body = document.getElementById(`cp-body`)?.value.trim() || ``;
      const tag = document.getElementById(`cp-tag`)?.value || `Study Tip`;
      if (title.length < 4 || body.length < 8) {
        showBanner(`Please enter a descriptive question or tip (at least 8 characters).`, `err`);
        return;
      }
      const authorLabel = appState.userRole === `moderator`
        ? `Ms. Dilhani Fernando (Teacher)`
        : appState.userRole === `admin`
          ? `Dr. Ashan Wickramasinghe (Admin)`
          : `Nimali Perera (Student)`;
      appState.communityPosts.unshift({
        id: `cp-${Date.now()}`,
        lang: appState.activeLang,
        author: authorLabel,
        title,
        body,
        tag,
        upvotes: 1,
        pinned: false,
        flagged: false,
        replies: []
      });
      awardXp(20, `cultural`);
      persistState();
      renderWorkspace();
      showBanner(`Discussion posted to the Community Hub!`, `ok`);
    }

    function upvotePost(id) {
      const post = appState.communityPosts.find(p => p.id === id);
      if (post) {
        post.upvotes += 1;
        persistState();
        renderWorkspace();
      }
    }

    function flagPost(id) {
      const post = appState.communityPosts.find(p => p.id === id);
      if (post) {
        post.flagged = true;
        persistState();
        renderWorkspace();
        showBanner(`Post flagged for Teacher/Moderator review.`, `warn`);
      }
    }

    function replyToPost(id) {
      const inp = document.getElementById(`reply-input-${id}`);
      if (!inp) return;
      const text = inp.value.trim();
      if (!text) return;
      const post = appState.communityPosts.find(p => p.id === id);
      if (post) {
        const who = appState.userRole === `moderator` ? `Teacher / Moderator` : appState.userRole === `admin` ? `Admin` : `Peer Student`;
        post.replies.push({ author: who, text });
        persistState();
        renderWorkspace();
      }
    }

    function handleUploadResource(ev) {
      ev.preventDefault();
      if (!rbacCheck(`upload_resource`)) return;
      const title = document.getElementById(`res-title`)?.value.trim() || ``;
      const type = document.getElementById(`res-type`)?.value || `Grammar Summary`;
      const desc = document.getElementById(`res-desc`)?.value.trim() || ``;
      if (!title || !desc) {
        showBanner(`Please provide both a resource title and description.`, `err`);
        return;
      }
      appState.resourceUploads.unshift({
        id: `ru-${Date.now()}`,
        lang: appState.activeLang,
        submitter: `Nimali Perera`,
        title,
        type,
        description: desc,
        status: `pending`,
        curatorTag: `Awaiting Review`,
        modNote: ``
      });
      awardXp(25, `cultural`);
      persistState();
      renderWorkspace();
      showBanner(`Resource submitted to the Teacher/Moderator review queue!`, `ok`);
    }

    /* =========================================================================
       9. TEACHER / MODERATOR & ADMIN RBAC HANDLERS
       ========================================================================= */
    function reviewUpload(id, decision) {
      if (!rbacCheck(`review_uploads`)) return;
      const item = appState.resourceUploads.find(r => r.id === id);
      if (!item) return;
      const noteInp = document.getElementById(`mod-note-${id}`);
      const tagSel = document.getElementById(`mod-tag-${id}`);
      item.status = decision;
      if (noteInp && noteInp.value.trim()) item.modNote = noteInp.value.trim();
      if (tagSel) item.curatorTag = tagSel.value;
      logAudit(`Teacher / Moderator`, `${decision === `approved` ? `Approved` : `Returned`} "${item.title}"`, `200 OK`);
      persistState();
      renderWorkspace();
      showBanner(`Resource "${item.title}" marked as ${decision}.`, decision === `approved` ? `ok` : `warn`);
    }

    function togglePinPost(id) {
      if (!rbacCheck(`moderate_community`)) return;
      const p = appState.communityPosts.find(x => x.id === id);
      if (p) {
        p.pinned = !p.pinned;
        logAudit(`Moderator`, `${p.pinned ? `Pinned` : `Unpinned`} thread "${p.title}"`, `200 OK`);
        persistState();
        renderWorkspace();
      }
    }

    function resolveFlagPost(id) {
      if (!rbacCheck(`moderate_community`)) return;
      const p = appState.communityPosts.find(x => x.id === id);
      if (p) {
        p.flagged = false;
        logAudit(`Moderator`, `Cleared flag on "${p.title}"`, `200 OK`);
        persistState();
        renderWorkspace();
      }
    }

    function deleteCommunityPost(id) {
      if (!rbacCheck(`moderate_community`)) return;
      const p = appState.communityPosts.find(x => x.id === id);
      appState.communityPosts = appState.communityPosts.filter(x => x.id !== id);
      logAudit(`Moderator`, `Removed community post "${p ? p.title : id}"`, `200 OK`);
      persistState();
      renderWorkspace();
    }

    function setAdminSubTab(sub) {
      if (!rbacCheck(`manage_users`)) return;
      uiTransient.adminSubTab = sub;
      renderWorkspace();
    }

    function changeUserRoleAdmin(userId, newRole) {
      if (!rbacCheck(`manage_users`)) return;
      const u = appState.adminUsers.find(x => x.id === userId);
      if (u) {
        u.role = newRole;
        logAudit(`Administrator`, `Updated role of ${u.name} to ${newRole}`, `200 OK`);
        persistState();
        renderWorkspace();
        showBanner(`Role for ${u.name} updated to ${newRole}.`, `ok`);
      }
    }

    function toggleUserStatusAdmin(userId) {
      if (!rbacCheck(`manage_users`)) return;
      const u = appState.adminUsers.find(x => x.id === userId);
      if (u) {
        u.status = u.status === `active` ? `suspended` : `active`;
        logAudit(`Administrator`, `Set ${u.name} status to ${u.status}`, `200 OK`);
        persistState();
        renderWorkspace();
      }
    }

    function handleAddCurriculumLesson(ev) {
      ev.preventDefault();
      if (!rbacCheck(`manage_curriculum`)) return;
      const lang = document.getElementById(`admin-lesson-lang`)?.value || `fr`;
      const title = document.getElementById(`admin-lesson-title`)?.value.trim() || ``;
      const cycle = document.getElementById(`admin-lesson-cycle`)?.value || `5E: Explore`;
      const xp = parseInt(document.getElementById(`admin-lesson-xp`)?.value || `60`, 10);
      if (!title) {
        showBanner(`Please enter a lesson title.`, `err`);
        return;
      }
      appState.customLessons.push({
        id: `cl-${Date.now()}`,
        lang,
        title,
        cycle,
        xp,
        duration: `5 min`
      });
      logAudit(`Administrator`, `Added curriculum lesson "${title}" (${lang.toUpperCase()})`, `201 Created`);
      persistState();
      renderWorkspace();
      showBanner(`New lesson added to ${DEFAULT_LANGUAGES[lang].name} Beginner track!`, `ok`);
    }

    function updateSystemSetting(key, val) {
      if (!rbacCheck(`manage_settings`)) return;
      appState.systemSettings[key] = val;
      logAudit(`Administrator`, `Updated setting "${key}" = ${val}`, `200 OK`);
      persistState();
      renderAll();
    }

    /* =========================================================================
       10. CANVAS DRAWING SETUP (Script Writing Pad)
       ========================================================================= */
    function initScriptCanvas() {
      const canvas = document.getElementById(`script-pad`);
      if (!canvas) return;
      const ctx = canvas.getContext(`2d`);
      if (!ctx) return;

      const rect = canvas.getBoundingClientRect();
      canvas.width = Math.max(280, Math.floor(rect.width));
      canvas.height = 200;

      const strokeColor = getComputedStyle(document.body).getPropertyValue(`--primary`).trim();
      const guideColor = getComputedStyle(document.body).getPropertyValue(`--outline-variant`).trim();

      // Draw subtle guide crosshairs
      ctx.strokeStyle = guideColor;
      ctx.lineWidth = 1;
      ctx.setLineDash([5, 5]);
      ctx.beginPath();
      ctx.moveTo(canvas.width / 2, 0);
      ctx.lineTo(canvas.width / 2, canvas.height);
      ctx.moveTo(0, canvas.height / 2);
      ctx.lineTo(canvas.width, canvas.height / 2);
      ctx.stroke();
      ctx.setLineDash([]);

      let drawing = false;
      function getPos(e) {
        const r = canvas.getBoundingClientRect();
        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        const clientY = e.touches ? e.touches[0].clientY : e.clientY;
        return { x: clientX - r.left, y: clientY - r.top };
      }

      canvas.onpointerdown = (e) => {
        drawing = true;
        const p = getPos(e);
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.strokeStyle = strokeColor;
        ctx.lineWidth = 5;
        ctx.lineCap = `round`;
        ctx.lineJoin = `round`;
      };
      canvas.onpointermove = (e) => {
        if (!drawing) return;
        const p = getPos(e);
        ctx.lineTo(p.x, p.y);
        ctx.stroke();
      };
      canvas.onpointerup = () => { drawing = false; };
      canvas.onpointerleave = () => { drawing = false; };
    }

    function clearScriptCanvas() {
      initScriptCanvas();
    }

    /* =========================================================================
       11. RENDERERS: HEADER, NAV, AND WORKSPACE VIEWS
       ========================================================================= */
    function renderAll() {
      document.body.setAttribute(`data-lang`, appState.activeLang);

      // Explanation toggle buttons
      [`en`, `si`, `ta`].forEach(code => {
        const btn = document.getElementById(`exp-btn-${code}`);
        if (btn) btn.classList.toggle(`active`, appState.explanationLang === code);
      });

      // Role buttons
      [`student`, `moderator`, `admin`].forEach(r => {
        const btn = document.getElementById(`role-btn-${r}`);
        if (btn) btn.classList.toggle(`active`, appState.userRole === r);
      });

      // Language pills
      Object.keys(DEFAULT_LANGUAGES).forEach(lid => {
        const pill = document.getElementById(`lang-pill-${lid}`);
        if (pill) pill.classList.toggle(`active`, appState.activeLang === lid);
      });

      // Role badge & Maintenance notice
      const roleBadge = document.getElementById(`active-role-badge`);
      if (roleBadge) {
        const label = appState.userRole === `student`
          ? `Role: Student (Nimali Perera)`
          : appState.userRole === `moderator`
            ? `Role: Teacher / Moderator (Ms. Dilhani)`
            : `Role: Administrator (Dr. Ashan)`;
        roleBadge.textContent = label;
      }

      const maint = document.getElementById(`maintenance-badge`);
      if (maint) {
        maint.style.display = appState.systemSettings.maintenanceBanner ? `inline-flex` : `none`;
      }

      renderWorkspaceNav();
      renderWorkspace();

      if (typeof lucide !== `undefined` && typeof lucide.createIcons === `function`) {
        lucide.createIcons();
      }
    }

    function renderWorkspaceNav() {
      const nav = document.getElementById(`workspace-nav`);
      if (!nav) return;

      const tabs = [
        { id: `dashboard`, label: `Dashboard & Path`, icon: `layout-dashboard` },
        { id: `practice`, label: `Practice Lab (7 Skills)`, icon: `sparkles` },
        { id: `exams`, label: `Quiz & Exam Prep`, icon: `award` },
        { id: `study`, label: `Notes, Flashcards & Planner`, icon: `notebook-pen` },
        { id: `community`, label: `Community & Sharing`, icon: `users` }
      ];

      if (appState.userRole === `moderator` || appState.userRole === `admin`) {
        tabs.unshift({ id: `moderator`, label: `Teacher / Mod Desk`, icon: `shield-check` });
      }
      if (appState.userRole === `admin`) {
        tabs.unshift({ id: `admin`, label: `Admin Control Centre`, icon: `settings` });
      }

      nav.innerHTML = tabs.map(tb => `
        <button type="button" class="nav-pill ${appState.activeTab === tb.id ? `active` : ``}" onclick="setActiveTab('${tb.id}')">
          <i data-lucide="${tb.icon}" width="17" height="17" aria-hidden="true"></i>
          ${tb.label}
        </button>
      `).join(``);
    }

    function renderWorkspace() {
      const main = document.getElementById(`main-workspace`);
      if (!main) return;

      if (skillChartInstance) { skillChartInstance.destroy(); skillChartInstance = null; }
      if (adminChartInstance) { adminChartInstance.destroy(); adminChartInstance = null; }

      switch (appState.activeTab) {
        case `dashboard`:
          main.innerHTML = renderDashboardView();
          setTimeout(renderSkillChart, 30);
          break;
        case `practice`:
          main.innerHTML = renderPracticeView();
          if (appState.practiceSubTab === `readwrite`) {
            setTimeout(initScriptCanvas, 30);
          }
          break;
        case `exams`:
          main.innerHTML = renderExamsView();
          break;
        case `study`:
          main.innerHTML = renderStudySpaceView();
          break;
        case `community`:
          main.innerHTML = renderCommunityView();
          break;
        case `moderator`:
          main.innerHTML = renderModeratorView();
          break;
        case `admin`:
          main.innerHTML = renderAdminView();
          if (uiTransient.adminSubTab === `analytics`) {
            setTimeout(renderAdminChart, 30);
          }
          break;
        default:
          main.innerHTML = renderDashboardView();
          setTimeout(renderSkillChart, 30);
      }

      if (typeof lucide !== `undefined` && typeof lucide.createIcons === `function`) {
        lucide.createIcons();
      }
    }

    /* =========================================================================
       12. VIEW TEMPLATES
       ========================================================================= */
    function renderDashboardView() {
      const langData = getActiveLanguageData();
      const prog = appState.progress[appState.activeLang];
      const totalLessons = langData.levels.reduce((acc, lv) => acc + lv.lessons.length, 0);
      const completedCount = prog.completedLessons.length;
      const masteryPct = Math.round(Object.values(prog.skills).reduce((a, b) => a + b, 0) / 7);
      const avgQuiz = prog.quizScores.length ? Math.round(prog.quizScores.reduce((a, b) => a + b, 0) / prog.quizScores.length) : 0;

      return `
        <!-- KPI Strip -->
        <section aria-label="Language Progress KPIs" class="kpi-grid">
          <div class="card kpi-card">
            <span class="label-kicker">${langData.flag} ${langData.name} · ${t(`xpLabel`)}</span>
            <div class="kpi-value tabular">${prog.xp} XP</div>
            <span class="muted">Multiplier: ${appState.systemSettings.xpMultiplier}x</span>
          </div>
          <div class="card kpi-card alt-shadow">
            <span class="label-kicker">${t(`streakLabel`)}</span>
            <div class="kpi-value tabular">${prog.streak} Days</div>
            <span class="muted">Goal: ${appState.planner.dailyGoalMinutes} mins/day</span>
          </div>
          <div class="card kpi-card sky-shadow">
            <span class="label-kicker">${t(`masteryLabel`)}</span>
            <div class="kpi-value tabular">${masteryPct}%</div>
            <div class="progress-track" style="margin-top:var(--space-xs);">
              <div class="progress-fill" style="width:${masteryPct}%;"></div>
            </div>
          </div>
          <div class="card kpi-card">
            <span class="label-kicker">${t(`examReadyLabel`)}</span>
            <div class="kpi-value tabular">${completedCount}/${totalLessons}</div>
            <span class="muted">Quiz avg: ${avgQuiz}% · ${langData.examTracks[0]}</span>
          </div>
        </section>

        <!-- Pedagogical Note Banner (English / Sinhala / Tamil) -->
        <section class="card well">
          <div class="between">
            <div class="prose">
              <span class="badge">${langData.themeLabel}</span>
              <h2 class="section-title" style="margin-top: var(--space-sm);">${langData.flag} ${langData.name} (${langData.nativeName}) — <span class="non-latin">${t(`dashboardTitle`)}</span></h2>
              <p class="non-latin" style="margin: var(--space-sm) 0 0;">
                <strong>${t(`explainTipHeading`)}:</strong> ${escapeHtml(tObj(langData.welcomeNote))}
              </p>
            </div>
            <div class="row-wrap">
              <button type="button" class="btn btn-primary" onclick="setActiveTab('practice')">Open 7-Skill Practice Lab</button>
              <button type="button" class="btn btn-outline" onclick="setActiveTab('exams')">Take Adaptive Quiz</button>
            </div>
          </div>
        </section>

        <!-- Split: Curriculum Progression & Chart.js Skill Breakdown -->
        <section class="dashboard-split">
          <div class="card stack">
            <div class="between">
              <div>
                <span class="label-kicker">Structured 5E Curriculum</span>
                <h3 class="card-title">Beginner to Advanced &amp; Professional</h3>
              </div>
              <div class="row-wrap">
                ${langData.examTracks.map(tr => `<span class="badge secondary">${escapeHtml(tr)}</span>`).join(``)}
              </div>
            </div>

            ${langData.levels.map(lv => `
              <div class="stack" style="margin-top:var(--space-xs);">
                <div class="between">
                  <strong>${escapeHtml(lv.tier)}</strong>
                </div>
                ${lv.lessons.map(ls => {
                  const done = prog.completedLessons.includes(ls.id);
                  const saved = appState.bookmarks.includes(ls.id);
                  return `
                    <div class="lesson-item ${done ? `completed` : ``}">
                      <div>
                        <div style="font-weight:700;">${escapeHtml(ls.title)}</div>
                        <div class="muted" style="font-size:0.875rem; color:inherit; opacity:0.85;">${escapeHtml(ls.cycle)} · ${escapeHtml(ls.duration)} · +${ls.xp} XP</div>
                      </div>
                      <div class="row-wrap">
                        <button type="button" class="btn btn-soft btn-sm" onclick="toggleBookmark('${ls.id}')" aria-label="Bookmark ${escapeHtml(ls.title)}">
                          ${saved ? `Bookmarked` : `Bookmark`}
                        </button>
                        <button type="button" class="btn ${done ? `btn-outline` : `btn-primary`} btn-sm" onclick="toggleLessonComplete('${ls.id}', ${ls.xp})">
                          ${done ? `Completed ✓` : `Complete Lesson`}
                        </button>
                      </div>
                    </div>
                  `;
                }).join(``)}
              </div>
            `).join(``)}
          </div>

          <div class="stack-lg">
            <div class="card alt-shadow stack">
              <div>
                <span class="label-kicker">7-Skill Competency Profile</span>
                <h3 class="card-title">${langData.name} Skill Balance</h3>
              </div>
              <div class="chart-box">
                <canvas id="skill-radar-chart" aria-label="Skill mastery chart"></canvas>
              </div>
              <p class="muted" style="margin:0; font-size:0.875rem;">
                Completing vocabulary cards, grammar puzzles, reading comprehension, writing strokes, listening dictation, speaking checks, and cultural quizzes grows each axis in real time.
              </p>
            </div>

            <div class="card sky-shadow stack">
              <span class="label-kicker">Cultural &amp; Local Bridge</span>
              <h3 class="card-title">Sri Lankan Context Notes</h3>
              ${langData.cultural.map(c => `
                <div class="well">
                  <strong>${escapeHtml(c.title)}</strong>
                  <p style="margin: var(--space-xs) 0 0; font-size:0.9rem;">${escapeHtml(c.body)}</p>
                </div>
              `).join(``)}
            </div>
          </div>
        </section>
      `;
    }

    function renderPracticeView() {
      const langData = getActiveLanguageData();
      const prog = appState.progress[appState.activeLang];
      const sub = appState.practiceSubTab || `vocab`;

      const subNav = `
        <div class="card between">
          <div>
            <span class="label-kicker">${langData.flag} ${langData.name} Interactive Practice Lab</span>
            <h2 class="section-title">Contextualised 7-Skill Training</h2>
          </div>
          <div class="segmented" role="tablist" aria-label="Practice skill modules">
            <button type="button" class="seg-btn ${sub === `vocab` ? `active` : ``}" onclick="setPracticeSubTab('vocab')">Vocab &amp; SRS</button>
            <button type="button" class="seg-btn ${sub === `grammar` ? `active` : ``}" onclick="setPracticeSubTab('grammar')">Grammar Builder</button>
            <button type="button" class="seg-btn ${sub === `readwrite` ? `active` : ``}" onclick="setPracticeSubTab('readwrite')">Reading &amp; Writing</button>
            <button type="button" class="seg-btn ${sub === `listenspeak` ? `active` : ``}" onclick="setPracticeSubTab('listenspeak')">Listening &amp; Speaking</button>
          </div>
        </div>
      `;

      if (sub === `vocab`) {
        const card = langData.vocab[prog.srsIndex % langData.vocab.length];
        return `${subNav}
          <section class="dashboard-split">
            <div class="card stack">
              <div class="between">
                <span class="badge">${escapeHtml(card.level)} · Card ${(prog.srsIndex % langData.vocab.length) + 1} of ${langData.vocab.length}</span>
                <button type="button" class="btn btn-soft btn-sm" onclick="speakActiveVocabCard()">
                  <i data-lucide="volume-2" width="16" height="16" aria-hidden="true"></i>
                  Listen
                </button>
              </div>

              <div class="flashcard" role="button" tabindex="0" onclick="flipVocabCard()" onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();flipVocabCard();}">
                <span class="label-kicker">${uiTransient.cardFlipped ? `Meaning &amp; Sentence Context` : `Tap to Flip`}</span>
                <div class="flashcard-target non-latin">${escapeHtml(card.word)}</div>
                <div class="muted">${escapeHtml(card.phonetic)}</div>
                ${uiTransient.cardFlipped ? `
                  <div class="well" style="width:100%; text-align:left; margin-top:var(--space-sm);">
                    <div style="font-weight:800; font-size:1.1rem;">${escapeHtml(card.meaning)}</div>
                    <p class="non-latin" style="margin:var(--space-xs) 0 0;"><strong>In context:</strong> ${escapeHtml(String(card.context))}</p>
                    <p class="muted" style="margin:var(--space-xs) 0 0; font-size:0.9rem;">${escapeHtml(card.contextMeaning)}</p>
                    <p class="non-latin" style="margin:var(--space-sm) 0 0; font-size:0.9rem;"><strong>${t(`explainTipHeading`)}:</strong> ${escapeHtml(tObj(card.note))}</p>
                  </div>
                ` : `<p class="muted non-latin" style="margin:0;">${t(`srsPrompt`)}</p>`}
              </div>

              <div class="between">
                <button type="button" class="btn btn-outline btn-sm" onclick="prevSrsCard()">Previous Card</button>
                <div class="row-wrap">
                  <button type="button" class="btn btn-soft btn-sm" onclick="rateSrsCard('Again')">Again (1m)</button>
                  <button type="button" class="btn btn-soft btn-sm" onclick="rateSrsCard('Hard')">Hard (10m)</button>
                  <button type="button" class="btn btn-primary btn-sm" onclick="rateSrsCard('Good')">Good (1d · +15 XP)</button>
                  <button type="button" class="btn btn-secondary btn-sm" onclick="rateSrsCard('Easy')">Easy (4d · +20 XP)</button>
                </div>
              </div>
            </div>

            <div class="card alt-shadow stack">
              <span class="label-kicker">Contextualised Vocabulary List</span>
              <h3 class="card-title">Words in Real Sentences</h3>
              ${langData.vocab.map((v, i) => `
                <div class="well between">
                  <div>
                    <strong class="non-latin">${escapeHtml(v.word)}</strong>
                    <div class="muted" style="font-size:0.875rem;">${escapeHtml(v.meaning)}</div>
                  </div>
                  <div class="row-wrap">
                    <span class="badge ${prog.srsRatings[v.id] ? `positive` : `secondary`}">${prog.srsRatings[v.id] || `Due`}</span>
                    <button type="button" class="btn btn-soft btn-sm" onclick="appState.progress[appState.activeLang].srsIndex=${i};uiTransient.cardFlipped=true;renderWorkspace();">Study</button>
                  </div>
                </div>
              `).join(``)}
            </div>
          </section>
        `;
      }

      if (sub === `grammar`) {
        const g = langData.grammar;
        // Calculate remaining tokens accounting for duplicates safely
        const remaining = [...g.tokens];
        uiTransient.puzzlePlaced.forEach(pt => {
          const idx = remaining.indexOf(pt);
          if (idx !== -1) remaining.splice(idx, 1);
        });

        return `${subNav}
          <section class="dashboard-split">
            <div class="card stack">
              <span class="label-kicker">Constructivist Sentence Builder</span>
              <h3 class="card-title">${escapeHtml(g.ruleTitle)}</h3>
              <div class="well non-latin">
                <strong>${t(`explainTipHeading`)}:</strong> ${escapeHtml(tObj(g.explanation))}
              </div>
              <p style="font-weight:700; margin:0;">${escapeHtml(g.puzzlePrompt)}</p>

              <div>
                <span class="label-kicker" style="margin-bottom:var(--space-xs);">Your Constructed Sentence (click a tile to remove)</span>
                <div class="token-bank">
                  ${uiTransient.puzzlePlaced.length === 0
                    ? `<span class="muted">Click word tiles below in order…</span>`
                    : uiTransient.puzzlePlaced.map((tk, idx) => `<button type="button" class="word-tile placed non-latin" onclick="removePuzzleToken(${idx})">${escapeHtml(tk)}</button>`).join(``)}
                </div>
              </div>

              <div>
                <span class="label-kicker" style="margin-bottom:var(--space-xs);">Available Word Tiles</span>
                <div class="token-bank">
                  ${remaining.length === 0
                    ? `<span class="muted">All tiles placed!</span>`
                    : remaining.map((tk, rIdx) => `<button type="button" class="word-tile non-latin" onclick="addPuzzleTokenByIdx(${rIdx})">${escapeHtml(tk)}</button>`).join(``)}
                </div>
              </div>

              <div class="row-wrap">
                <button type="button" class="btn btn-primary" onclick="checkGrammarPuzzle()">Check Sentence</button>
                <button type="button" class="btn btn-soft" onclick="resetPuzzle()">Clear Tiles</button>
              </div>

              ${uiTransient.puzzleStatus ? `
                <div class="feedback-box non-latin ${uiTransient.puzzleStatus.ok ? `ok` : `err`}">
                  ${escapeHtml(uiTransient.puzzleStatus.msg)}
                </div>
              ` : ``}
            </div>

            <div class="card alt-shadow stack">
              <span class="label-kicker">Explanatory Feedback Approach</span>
              <h3 class="card-title">Why Word Order Matters</h3>
              <p class="prose">Unlike rote translation drills, building sentences tile-by-tile strengthens syntactic awareness and highlights grammatical differences between English, Sinhala, Tamil, and ${langData.name}.</p>
              <div class="well">
                <strong>Grammar Mastery: ${prog.skills.grammar}%</strong>
                <div class="progress-track" style="margin-top:var(--space-sm);">
                  <div class="progress-fill" style="width:${prog.skills.grammar}%;"></div>
                </div>
              </div>
            </div>
          </section>
        `;
      }

      if (sub === `readwrite`) {
        const rd = langData.reading;
        const activeChar = langData.writingSamples[uiTransient.activeScriptCharIdx % langData.writingSamples.length];
        return `${subNav}
          <section class="dashboard-split">
            <div class="card stack">
              <div class="between">
                <div>
                  <span class="label-kicker">Contextual Reading Comprehension</span>
                  <h3 class="card-title non-latin">${escapeHtml(rd.title)}</h3>
                </div>
                <button type="button" class="btn btn-soft btn-sm" onclick="speakReadingPassage()">Listen to Passage</button>
              </div>
              <div class="well non-latin" style="font-size:1.08rem; line-height:1.75;">
                ${escapeHtml(rd.passage)}
              </div>
              <p class="muted" style="margin:0; font-size:0.9rem;"><strong>English summary:</strong> ${escapeHtml(rd.translation)}</p>

              <div class="stack">
                <strong>${escapeHtml(rd.question)}</strong>
                ${rd.options.map((opt, idx) => `
                  <button type="button" class="btn ${uiTransient.readingSelected === idx ? (idx === rd.correctIdx ? `btn-primary` : `btn-danger`) : `btn-outline`}" style="justify-content:flex-start; text-align:left;" onclick="answerReadingQuestion(${idx})">
                    ${escapeHtml(opt)}
                  </button>
                `).join(``)}
              </div>

              ${uiTransient.readingStatus ? `
                <div class="feedback-box non-latin ${uiTransient.readingStatus.ok ? `ok` : `err`}">
                  ${escapeHtml(uiTransient.readingStatus.msg)}
                </div>
              ` : ``}
            </div>

            <div class="card sky-shadow stack">
              <span class="label-kicker">Productive Writing &amp; Script Canvas</span>
              <h3 class="card-title">Trace &amp; Practise: <span class="non-latin" style="color:var(--primary);">${escapeHtml(activeChar)}</span></h3>
              <div class="row-wrap">
                ${langData.writingSamples.map((ch, idx) => `
                  <button type="button" class="btn btn-sm non-latin ${idx === uiTransient.activeScriptCharIdx ? `btn-primary` : `btn-soft`}" onclick="selectScriptChar(${idx})">${escapeHtml(ch)}</button>
                `).join(``)}
              </div>
              <div class="canvas-box">
                <canvas id="script-pad" aria-label="Interactive script writing canvas"></canvas>
              </div>
              <div class="between">
                <span class="muted" style="font-size:0.875rem;">Draw with mouse, touch, or stylus inside the grid.</span>
                <div class="row-wrap">
                  <button type="button" class="btn btn-soft btn-sm" onclick="clearScriptCanvas()">Clear Pad</button>
                  <button type="button" class="btn btn-primary btn-sm" onclick="awardXp(15,'writing');persistState();showBanner('Writing practice logged (+15 XP)!','ok');renderWorkspace();">Log Practice (+15 XP)</button>
                </div>
              </div>
            </div>
          </section>
        `;
      }

      // Listening & Speaking Lab
      return `${subNav}
        <section class="dashboard-split">
          <div class="card stack">
            <span class="label-kicker">Listening &amp; Dictation Exercise</span>
            <h3 class="card-title">Audio Comprehension</h3>
            <div class="well stack">
              <div class="non-latin" style="font-size:1.15rem; font-weight:700;">${escapeHtml(langData.listeningPhrase)}</div>
              <div class="muted" style="font-size:0.9rem;">Phonetic guide: ${escapeHtml(langData.listeningPhonetic)}</div>
              <div class="row-wrap">
                <button type="button" class="btn btn-primary btn-sm" onclick="speakListeningPhrase(1.0)">Play Normal (1.0x)</button>
                <button type="button" class="btn btn-secondary btn-sm" onclick="speakListeningPhrase(0.75)">Play Slow (0.75x)</button>
              </div>
            </div>

            <div class="field-group">
              <label class="field-label" for="dictation-input">Type what you hear (full phrase or key words)</label>
              <input id="dictation-input" type="text" class="input non-latin" placeholder="Type in ${langData.name}…">
            </div>
            <div>
              <button type="button" class="btn btn-primary" onclick="checkDictationInput()">Verify Dictation</button>
            </div>
            <div id="dictation-feedback" class="feedback-box" style="display:none;"></div>
          </div>

          <div class="card alt-shadow stack">
            <span class="label-kicker">Speaking &amp; Pronunciation Studio</span>
            <h3 class="card-title">Oral Fluency Check</h3>
            <p class="prose">Practise speaking aloud before GCE O/L oral exams, DELF, Goethe Sprechen, or HSKK. Click below to start microphone recognition (or run a guided self-check).</p>
            <div class="well">
              <strong>Target Phrase:</strong>
              <div class="non-latin" style="margin-top:var(--space-xs); font-weight:700;">${escapeHtml(langData.listeningPhrase)}</div>
            </div>
            <div>
              <button type="button" class="btn btn-primary" onclick="startSpeechCheck()">
                <i data-lucide="mic" width="18" height="18" aria-hidden="true"></i>
                Start Pronunciation Check
              </button>
            </div>
            ${uiTransient.speakingScoreText ? `
              <div class="feedback-box ok non-latin">${escapeHtml(uiTransient.speakingScoreText)}</div>
            ` : ``}
          </div>
        </section>
      `;
    }

    function renderExamsView() {
      const langData = getActiveLanguageData();
      const qList = langData.quiz;
      const currentQ = qList[uiTransient.quizIdx];

      return `
        <section class="dashboard-split">
          <div class="card stack">
            <div class="between">
              <div>
                <span class="label-kicker">Adaptive Quiz Engine</span>
                <h2 class="section-title">${langData.flag} ${langData.name} Assessment</h2>
              </div>
              <span class="badge">${uiTransient.quizFinished ? `Completed` : `Question ${uiTransient.quizIdx + 1} / ${qList.length}`}</span>
            </div>

            ${uiTransient.quizFinished ? `
              <div class="well stack">
                <h3 class="card-title">Quiz Complete! Score: ${uiTransient.quizCorrectCount} / ${qList.length} (${Math.round((uiTransient.quizCorrectCount / qList.length) * 100)}%)</h3>
                <p>Your accuracy has been recorded to your ${langData.name} Exam Readiness dashboard.</p>
                <div>
                  <button type="button" class="btn btn-primary" onclick="restartQuiz()">Retake Assessment</button>
                </div>
              </div>
            ` : `
              <div class="stack">
                <div class="well" style="font-weight:700; font-size:1.05rem;">${escapeHtml(currentQ.q)}</div>
                ${currentQ.options.map((opt, idx) => {
                  let cls = `btn-outline`;
                  if (uiTransient.quizAnswered !== null) {
                    if (idx === currentQ.correct) cls = `btn-primary`;
                    else if (idx === uiTransient.quizAnswered) cls = `btn-danger`;
                  }
                  return `
                    <button type="button" class="btn ${cls}" style="justify-content:flex-start; text-align:left;" ${uiTransient.quizAnswered !== null ? `disabled` : ``} onclick="submitQuizAnswer(${idx})">
                      ${escapeHtml(opt)}
                    </button>
                  `;
                }).join(``)}

                ${uiTransient.quizAnswered !== null ? `
                  <div class="feedback-box non-latin ${uiTransient.quizAnswered === currentQ.correct ? `ok` : `err`}">
                    <strong>${uiTransient.quizAnswered === currentQ.correct ? t(`correctMsg`) : t(`incorrectMsg`)}</strong>
                    ${escapeHtml(tObj(currentQ.explain))}
                  </div>
                  <div>
                    <button type="button" class="btn btn-secondary" onclick="nextQuizQuestion()">
                      ${uiTransient.quizIdx + 1 < qList.length ? `Next Question` : `Finish & Save Score`}
                    </button>
                  </div>
                ` : ``}
              </div>
            `}
          </div>

          <div class="card alt-shadow stack">
            <span class="label-kicker">Sri Lankan &amp; International Certifications</span>
            <h3 class="card-title">Exam Preparation Tracks</h3>
            ${langData.examTracks.map(tr => `
              <div class="well between">
                <div>
                  <strong>${escapeHtml(tr)}</strong>
                  <div class="muted" style="font-size:0.875rem;">Reading · Writing · Listening · Speaking Blueprint</div>
                </div>
                <span class="badge positive">Aligned</span>
              </div>
            `).join(``)}
            <div class="well">
              <strong>Past Quiz History (${langData.name})</strong>
              <p style="margin:var(--space-xs) 0 0;">
                ${appState.progress[appState.activeLang].quizScores.length === 0
                  ? `No quizzes completed yet — submit the quiz on the left to record your first score.`
                  : `Recorded scores: ${appState.progress[appState.activeLang].quizScores.map(s => `${s}%`).join(` · `)}`}
              </p>
            </div>
          </div>
        </section>
      `;
    }

    function renderStudySpaceView() {
      const langData = getActiveLanguageData();
      const langNotes = appState.notes.filter(n => n.lang === appState.activeLang);
      const langCards = appState.customFlashcards.filter(c => c.lang === appState.activeLang);
      const langTasks = appState.planner.tasks.filter(t => t.lang === appState.activeLang);

      return `
        <section class="card-grid">
          <!-- Personal Notes -->
          <div class="card stack">
            <span class="label-kicker">Personal Notebook (${langData.name})</span>
            <h3 class="card-title">Create Study Note</h3>
            <form onsubmit="handleCreateNote(event)" class="stack">
              <div class="field-group">
                <label class="field-label" for="note-title-input">Note Title</label>
                <input id="note-title-input" type="text" class="input" placeholder="e.g., O/L Essay Connectors">
              </div>
              <div class="field-group">
                <label class="field-label" for="note-body-input">Note Details (EN / සිංහල / தமிழ்)</label>
                <textarea id="note-body-input" class="textarea non-latin" placeholder="Write grammar rules, mnemonics, or exam reminders…"></textarea>
              </div>
              <button type="submit" class="btn btn-primary">Save Note</button>
            </form>
            <div class="stack">
              ${langNotes.length === 0
                ? `<div class="well muted">No notes saved for ${langData.name} yet. Add your first note above.</div>`
                : langNotes.map(n => `
                  <div class="well stack">
                    <div class="between">
                      <strong>${escapeHtml(n.title)}</strong>
                      <button type="button" class="btn btn-soft btn-sm" onclick="deleteNote('${n.id}')">Remove</button>
                    </div>
                    <p class="non-latin" style="margin:0; font-size:0.9rem;">${escapeHtml(n.body)}</p>
                  </div>
                `).join(``)}
            </div>
          </div>

          <!-- Custom Flashcard Creator -->
          <div class="card alt-shadow stack">
            <span class="label-kicker">Personal Deck Builder</span>
            <h3 class="card-title">Flashcard Creator</h3>
            <form onsubmit="handleCreateFlashcard(event)" class="stack">
              <div class="field-group">
                <label class="field-label" for="fc-front">Foreign Word / Phrase</label>
                <input id="fc-front" type="text" class="input non-latin" placeholder="Target phrase…">
              </div>
              <div class="form-row">
                <div class="field-group">
                  <label class="field-label" for="fc-phonetic">Pronunciation</label>
                  <input id="fc-phonetic" type="text" class="input" placeholder="IPA / Pinyin / Romaji">
                </div>
                <div class="field-group">
                  <label class="field-label" for="fc-back">Meaning</label>
                  <input id="fc-back" type="text" class="input non-latin" placeholder="English / SI / TA">
                </div>
              </div>
              <div class="field-group">
                <label class="field-label" for="fc-note">Context Tip (optional)</label>
                <input id="fc-note" type="text" class="input" placeholder="Where to use it…">
              </div>
              <button type="submit" class="btn btn-secondary">Add Flashcard</button>
            </form>
            <div class="stack">
              ${langCards.length === 0
                ? `<div class="well muted">No custom flashcards for ${langData.name} yet.</div>`
                : langCards.map(c => `
                  <div class="well between">
                    <div>
                      <strong class="non-latin">${escapeHtml(c.front)}</strong>
                      <div class="muted" style="font-size:0.875rem;">${escapeHtml(c.back)} ${c.phonetic ? `· ${escapeHtml(c.phonetic)}` : ``}</div>
                    </div>
                    <button type="button" class="btn btn-soft btn-sm" onclick="deleteCustomFlashcard('${c.id}')">Delete</button>
                  </div>
                `).join(``)}
            </div>
          </div>

          <!-- Personalised Study Planner & Bookmarks -->
          <div class="card sky-shadow stack">
            <span class="label-kicker">Goals &amp; Bookmarks</span>
            <h3 class="card-title">Personalised Study Planner</h3>
            <form onsubmit="handleSavePlannerGoal(event)" class="stack">
              <div class="form-row">
                <div class="field-group">
                  <label class="field-label" for="planner-mins">Daily Goal (mins)</label>
                  <input id="planner-mins" type="number" min="5" max="180" class="input" value="${appState.planner.dailyGoalMinutes}">
                </div>
                <div class="field-group">
                  <label class="field-label" for="planner-date">Exam Target Date</label>
                  <input id="planner-date" type="date" class="input" value="${escapeHtml(appState.planner.targetDate)}">
                </div>
              </div>
              <div class="field-group">
                <label class="field-label" for="planner-exam">Target Qualification</label>
                <input id="planner-exam" type="text" class="input" value="${escapeHtml(appState.planner.targetExam)}">
              </div>
              <button type="submit" class="btn btn-primary btn-sm">Update Goal</button>
            </form>

            <form onsubmit="handleAddPlannerTask(event)" class="form-row">
              <div class="field-group">
                <label class="field-label" for="planner-task-input">Add Study Task (${langData.name})</label>
                <input id="planner-task-input" type="text" class="input" placeholder="e.g., Practise 15 listening phrases">
              </div>
              <button type="submit" class="btn btn-soft">Add Task</button>
            </form>

            <div class="stack">
              ${langTasks.length === 0
                ? `<div class="well muted">No tasks queued for ${langData.name}.</div>`
                : langTasks.map(tk => `
                  <div class="well between">
                    <span style="${tk.done ? `text-decoration:line-through; opacity:0.65;` : ``}">${escapeHtml(tk.text)}</span>
                    <button type="button" class="btn btn-sm ${tk.done ? `btn-outline` : `btn-primary`}" onclick="togglePlannerTask('${tk.id}')">
                      ${tk.done ? `Done ✓` : `Mark Done`}
                    </button>
                  </div>
                `).join(``)}
            </div>

            <div class="well">
              <strong>Bookmarked Lessons (${appState.bookmarks.length})</strong>
              <div class="row-wrap" style="margin-top:var(--space-xs);">
                ${appState.bookmarks.length === 0
                  ? `<span class="muted">Bookmark any lesson from the Dashboard.</span>`
                  : appState.bookmarks.map(bid => `<span class="badge secondary">${escapeHtml(bid.toUpperCase())}</span>`).join(``)}
              </div>
            </div>
          </div>
        </section>
      `;
    }

    function renderCommunityView() {
      const langData = getActiveLanguageData();
      const filter = uiTransient.communityFilter;
      const posts = appState.communityPosts
        .filter(p => filter === `all` ? true : p.lang === filter)
        .sort((a, b) => (b.pinned ? 1 : 0) - (a.pinned ? 1 : 0));
      const approvedLibrary = appState.resourceUploads.filter(r => r.status === `approved`);

      return `
        <section class="dashboard-split">
          <div class="stack-lg">
            <div class="card stack">
              <div class="between">
                <div>
                  <span class="label-kicker">Peer Collaboration &amp; Exam Q&amp;A</span>
                  <h2 class="section-title">Sri Lankan Learner Community Hub</h2>
                </div>
                <div class="field-group" style="min-width:170px;">
                  <label class="field-label" for="comm-filter">Filter by Language</label>
                  <select id="comm-filter" class="select" onchange="setCommunityFilter(this.value)">
                    <option value="all" ${filter === `all` ? `selected` : ``}>All Languages</option>
                    <option value="fr" ${filter === `fr` ? `selected` : ``}>French</option>
                    <option value="de" ${filter === `de` ? `selected` : ``}>German</option>
                    <option value="ja" ${filter === `ja` ? `selected` : ``}>Japanese</option>
                    <option value="zh" ${filter === `zh` ? `selected` : ``}>Mandarin</option>
                    <option value="ko" ${filter === `ko` ? `selected` : ``}>Korean</option>
                  </select>
                </div>
              </div>

              <form onsubmit="handleCreateCommunityPost(event)" class="well stack">
                <strong>Ask a Question or Share a Study Tip (${langData.flag} ${langData.name})</strong>
                <div class="form-row">
                  <div class="field-group">
                    <label class="field-label" for="cp-title">Discussion Title</label>
                    <input id="cp-title" type="text" class="input" placeholder="e.g., Best way to memorise Katakana?">
                  </div>
                  <div class="field-group">
                    <label class="field-label" for="cp-tag">Category</label>
                    <select id="cp-tag" class="select">
                      <option value="GCE O/L">GCE O/L</option>
                      <option value="GCE A/L">GCE A/L</option>
                      <option value="International Exam">International Exam</option>
                      <option value="Study Tip">Study Tip</option>
                    </select>
                  </div>
                </div>
                <div class="field-group">
                  <label class="field-label" for="cp-body">Message</label>
                  <textarea id="cp-body" class="textarea" placeholder="Share context or ask peers and teachers…"></textarea>
                </div>
                <div>
                  <button type="submit" class="btn btn-primary">Post to Community (+20 XP)</button>
                </div>
              </form>

              <div class="stack">
                ${posts.map(p => `
                  <div class="well stack">
                    <div class="between">
                      <div class="row-wrap">
                        <span class="badge">${escapeHtml(DEFAULT_LANGUAGES[p.lang]?.flag || ``)} ${escapeHtml(p.tag)}</span>
                        ${p.pinned ? `<span class="badge positive">Pinned by Teacher</span>` : ``}
                        ${p.flagged ? `<span class="badge warning">Flagged</span>` : ``}
                      </div>
                      <span class="muted" style="font-size:0.85rem;">${escapeHtml(p.author)}</span>
                    </div>
                    <h4 class="card-title">${escapeHtml(p.title)}</h4>
                    <p style="margin:0;">${escapeHtml(p.body)}</p>
                    <div class="row-wrap">
                      <button type="button" class="btn btn-soft btn-sm" onclick="upvotePost('${p.id}')">Helpful (${p.upvotes})</button>
                      <button type="button" class="btn btn-soft btn-sm" onclick="flagPost('${p.id}')">Flag for Mod</button>
                    </div>
                    ${p.replies.length > 0 ? `
                      <div class="stack" style="padding-left:var(--space-md);">
                        ${p.replies.map(rp => `<div class="card" style="padding:var(--space-sm) var(--space-md);"><strong>${escapeHtml(rp.author)}:</strong> ${escapeHtml(rp.text)}</div>`).join(``)}
                      </div>
                    ` : ``}
                    <div class="form-row">
                      <div class="field-group">
                        <label class="field-label sr-only" for="reply-input-${p.id}">Reply</label>
                        <input id="reply-input-${p.id}" type="text" class="input" placeholder="Write a peer reply…">
                      </div>
                      <button type="button" class="btn btn-outline btn-sm" style="flex:0 0 auto;" onclick="replyToPost('${p.id}')">Reply</button>
                    </div>
                  </div>
                `).join(``)}
              </div>
            </div>
          </div>

          <div class="stack-lg">
            <!-- Student Resource Sharing Form -->
            <div class="card alt-shadow stack">
              <span class="label-kicker">Peer Resource Sharing</span>
              <h3 class="card-title">Upload Educational Resource</h3>
              <p class="muted" style="margin:0; font-size:0.9rem;">Submitted study guides enter the Teacher/Moderator review queue before appearing in the Curated Library.</p>
              <form onsubmit="handleUploadResource(event)" class="stack">
                <div class="field-group">
                  <label class="field-label" for="res-title">Resource Title (${langData.name})</label>
                  <input id="res-title" type="text" class="input" placeholder="e.g., Top 50 JLPT N5 Verbs">
                </div>
                <div class="field-group">
                  <label class="field-label" for="res-type">Resource Format</label>
                  <select id="res-type" class="select">
                    <option value="Grammar Summary">Grammar Summary</option>
                    <option value="Vocabulary Pack">Vocabulary Pack</option>
                    <option value="Past Paper Guide">Past Paper Guide</option>
                    <option value="Pronunciation Sheet">Pronunciation Sheet</option>
                  </select>
                </div>
                <div class="field-group">
                  <label class="field-label" for="res-desc">Summary &amp; Learning Objective</label>
                  <textarea id="res-desc" class="textarea" placeholder="Describe what students will learn…"></textarea>
                </div>
                <button type="submit" class="btn btn-secondary">Submit for Teacher Review</button>
              </form>
            </div>

            <!-- Curated Library -->
            <div class="card sky-shadow stack">
              <span class="label-kicker">Verified Curated Library</span>
              <h3 class="card-title">Approved Student &amp; Teacher Materials</h3>
              ${approvedLibrary.map(r => `
                <div class="well stack">
                  <div class="between">
                    <span class="badge positive">${escapeHtml(r.curatorTag)}</span>
                    <span class="muted" style="font-size:0.85rem;">${DEFAULT_LANGUAGES[r.lang]?.flag || ``} ${escapeHtml(r.type)}</span>
                  </div>
                  <strong>${escapeHtml(r.title)}</strong>
                  <p style="margin:0; font-size:0.9rem;">${escapeHtml(r.description)}</p>
                  <span class="muted" style="font-size:0.82rem;">By ${escapeHtml(r.submitter)}</span>
                </div>
              `).join(``)}
            </div>
          </div>
        </section>
      `;
    }

    function renderModeratorView() {
      const pending = appState.resourceUploads.filter(r => r.status === `pending`);
      const reviewed = appState.resourceUploads.filter(r => r.status !== `pending`);

      return `
        <section class="dashboard-split">
          <div class="card stack">
            <div class="between">
              <div>
                <span class="label-kicker">Teacher &amp; Moderator Desk</span>
                <h2 class="section-title">Student Resource Review Queue (${pending.length} Pending)</h2>
              </div>
              <span class="badge secondary">RBAC: Moderator Verified</span>
            </div>

            ${pending.length === 0
              ? `<div class="feedback-box ok">All student uploads have been reviewed!</div>`
              : pending.map(r => `
                <div class="well stack">
                  <div class="between">
                    <span class="badge warning">Pending Review · ${DEFAULT_LANGUAGES[r.lang]?.name || r.lang}</span>
                    <span class="muted" style="font-size:0.85rem;">Submitted by ${escapeHtml(r.submitter)}</span>
                  </div>
                  <h4 class="card-title">${escapeHtml(r.title)}</h4>
                  <p style="margin:0;">${escapeHtml(r.description)}</p>
                  <div class="form-row">
                    <div class="field-group">
                      <label class="field-label" for="mod-tag-${r.id}">Curator Alignment Tag</label>
                      <select id="mod-tag-${r.id}" class="select">
                        <option value="GCE O/L Verified">GCE O/L Verified</option>
                        <option value="GCE A/L Recommended">GCE A/L Recommended</option>
                        <option value="5E Inquiry Aligned">5E Inquiry Aligned</option>
                        <option value="International Exam Prep">International Exam Prep</option>
                      </select>
                    </div>
                    <div class="field-group">
                      <label class="field-label" for="mod-note-${r.id}">Moderator Feedback</label>
                      <input id="mod-note-${r.id}" type="text" class="input" placeholder="Feedback for student…">
                    </div>
                  </div>
                  <div class="row-wrap">
                    <button type="button" class="btn btn-primary btn-sm" onclick="reviewUpload('${r.id}', 'approved')">Approve &amp; Publish</button>
                    <button type="button" class="btn btn-danger btn-sm" onclick="reviewUpload('${r.id}', 'rejected')">Return for Revision</button>
                  </div>
                </div>
              `).join(``)}

            <h3 class="card-title" style="margin-top:var(--space-md);">Previously Reviewed Materials (${reviewed.length})</h3>
            ${reviewed.map(r => `
              <div class="well between">
                <div>
                  <strong>${escapeHtml(r.title)}</strong>
                  <div class="muted" style="font-size:0.85rem;">${escapeHtml(r.curatorTag)} ${r.modNote ? `· "${escapeHtml(r.modNote)}"` : ``}</div>
                </div>
                <span class="badge ${r.status === `approved` ? `positive` : `danger`}">${escapeHtml(r.status.toUpperCase())}</span>
              </div>
            `).join(``)}
          </div>

          <div class="card alt-shadow stack">
            <span class="label-kicker">Community Moderation</span>
            <h3 class="card-title">Active Threads &amp; Flagged Posts</h3>
            ${appState.communityPosts.map(p => `
              <div class="well stack">
                <div class="between">
                  <strong>${escapeHtml(p.title)}</strong>
                  <div class="row-wrap">
                    ${p.flagged ? `<span class="badge danger">Flagged</span>` : ``}
                    ${p.pinned ? `<span class="badge positive">Pinned</span>` : ``}
                  </div>
                </div>
                <p style="margin:0; font-size:0.9rem;">${escapeHtml(p.body)}</p>
                <div class="row-wrap">
                  <button type="button" class="btn btn-soft btn-sm" onclick="togglePinPost('${p.id}')">${p.pinned ? `Unpin` : `Pin Thread`}</button>
                  ${p.flagged ? `<button type="button" class="btn btn-primary btn-sm" onclick="resolveFlagPost('${p.id}')">Clear Flag</button>` : ``}
                  <button type="button" class="btn btn-danger btn-sm" onclick="deleteCommunityPost('${p.id}')">Remove Post</button>
                </div>
              </div>
            `).join(``)}
          </div>
        </section>
      `;
    }

    function renderAdminView() {
      const sub = uiTransient.adminSubTab || `users`;
      return `
        <section class="card stack">
          <div class="between">
            <div>
              <span class="label-kicker">Simulated Server-Side RBAC · Full Control</span>
              <h2 class="section-title">Administrator Management Dashboard</h2>
            </div>
            <div class="segmented" role="tablist">
              <button type="button" class="seg-btn ${sub === `users` ? `active` : ``}" onclick="setAdminSubTab('users')">Users &amp; Roles</button>
              <button type="button" class="seg-btn ${sub === `curriculum` ? `active` : ``}" onclick="setAdminSubTab('curriculum')">Curricula &amp; Lessons</button>
              <button type="button" class="seg-btn ${sub === `analytics` ? `active` : ``}" onclick="setAdminSubTab('analytics')">Reports &amp; Audit</button>
              <button type="button" class="seg-btn ${sub === `settings` ? `active` : ``}" onclick="setAdminSubTab('settings')">System Settings</button>
            </div>
          </div>

          ${sub === `users` ? `
            <div class="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>District</th>
                    <th>Focus Language</th>
                    <th>Assigned Role</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  ${appState.adminUsers.map(u => `
                    <tr>
                      <td><strong>${escapeHtml(u.name)}</strong></td>
                      <td>${escapeHtml(u.district)}</td>
                      <td>${DEFAULT_LANGUAGES[u.focusLang]?.flag || ``} ${DEFAULT_LANGUAGES[u.focusLang]?.name || u.focusLang}</td>
                      <td>
                        <label class="sr-only" for="role-sel-${u.id}">Role for ${escapeHtml(u.name)}</label>
                        <select id="role-sel-${u.id}" class="select" onchange="changeUserRoleAdmin('${u.id}', this.value)">
                          <option value="student" ${u.role === `student` ? `selected` : ``}>Student</option>
                          <option value="moderator" ${u.role === `moderator` ? `selected` : ``}>Teacher / Moderator</option>
                          <option value="admin" ${u.role === `admin` ? `selected` : ``}>Administrator</option>
                        </select>
                      </td>
                      <td><span class="badge ${u.status === `active` ? `positive` : `danger`}">${escapeHtml(u.status)}</span></td>
                      <td>
                        <button type="button" class="btn btn-soft btn-sm" onclick="toggleUserStatusAdmin('${u.id}')">
                          ${u.status === `active` ? `Suspend` : `Reactivate`}
                        </button>
                      </td>
                    </tr>
                  `).join(``)}
                </tbody>
              </table>
            </div>
          ` : ``}

          ${sub === `curriculum` ? `
            <div class="dashboard-split">
              <form onsubmit="handleAddCurriculumLesson(event)" class="well stack">
                <h3 class="card-title">Publish New Lesson to Curriculum</h3>
                <div class="field-group">
                  <label class="field-label" for="admin-lesson-lang">Target Language</label>
                  <select id="admin-lesson-lang" class="select">
                    <option value="fr">French (Pastel Pink)</option>
                    <option value="de">German (Pastel Blue)</option>
                    <option value="ja">Japanese (Pastel Green)</option>
                    <option value="zh">Mandarin (Pastel Peach)</option>
                    <option value="ko">Korean (Pastel Lavender)</option>
                  </select>
                </div>
                <div class="field-group">
                  <label class="field-label" for="admin-lesson-title">Lesson Title</label>
                  <input id="admin-lesson-title" type="text" class="input" placeholder="e.g., GCE O/L Oral Roleplay: At the Bookshop">
                </div>
                <div class="form-row">
                  <div class="field-group">
                    <label class="field-label" for="admin-lesson-cycle">5E Pedagogical Stage</label>
                    <select id="admin-lesson-cycle" class="select">
                      <option value="5E: Engage & Explore">5E: Engage &amp; Explore</option>
                      <option value="5E: Explain">5E: Explain</option>
                      <option value="5E: Elaborate">5E: Elaborate</option>
                      <option value="5E: Evaluate">5E: Evaluate</option>
                    </select>
                  </div>
                  <div class="field-group">
                    <label class="field-label" for="admin-lesson-xp">XP Reward</label>
                    <input id="admin-lesson-xp" type="number" min="10" max="200" class="input" value="60">
                  </div>
                </div>
                <button type="submit" class="btn btn-primary">Add Lesson to Live Syllabus</button>
              </form>

              <div class="stack">
                <h3 class="card-title">Admin-Published Lessons (${appState.customLessons.length})</h3>
                ${appState.customLessons.length === 0
                  ? `<div class="well muted">No custom lessons published yet. Any lesson you add on the left immediately appears on that language's Student Dashboard.</div>`
                  : appState.customLessons.map(cl => `
                    <div class="well between">
                      <div>
                        <strong>${DEFAULT_LANGUAGES[cl.lang]?.flag || ``} ${escapeHtml(cl.title)}</strong>
                        <div class="muted" style="font-size:0.85rem;">${escapeHtml(cl.cycle)} · +${cl.xp} XP</div>
                      </div>
                      <span class="badge positive">Live</span>
                    </div>
                  `).join(``)}
              </div>
            </div>
          ` : ``}

          ${sub === `analytics` ? `
            <div class="dashboard-split">
              <div class="well stack">
                <h3 class="card-title">XP Distribution Across Languages</h3>
                <div class="chart-box">
                  <canvas id="admin-xp-chart" aria-label="XP across languages chart"></canvas>
                </div>
              </div>
              <div class="well stack">
                <h3 class="card-title">RBAC &amp; Moderation Audit Log</h3>
                <div class="stack" style="max-height:290px; overflow-y:auto;">
                  ${appState.auditLog.map(lg => `
                    <div class="card" style="padding:var(--space-sm) var(--space-md);">
                      <div class="between">
                        <strong>${escapeHtml(lg.actor)}</strong>
                        <span class="badge ${lg.outcome.includes(`403`) ? `danger` : `positive`}">${escapeHtml(lg.outcome)}</span>
                      </div>
                      <div style="font-size:0.875rem;">${escapeHtml(lg.action)}</div>
                      <div class="muted" style="font-size:0.75rem;">${escapeHtml(lg.ts)}</div>
                    </div>
                  `).join(``)}
                </div>
              </div>
            </div>
          ` : ``}

          ${sub === `settings` ? `
            <div class="card-grid">
              <div class="well stack">
                <h3 class="card-title">RBAC Security Enforcement</h3>
                <p class="muted" style="margin:0;">Simulate strict server-side permission checks across Student, Moderator, and Admin endpoints.</p>
                <button type="button" class="btn ${appState.systemSettings.strictRbac ? `btn-primary` : `btn-soft`}" onclick="updateSystemSetting('strictRbac', ${!appState.systemSettings.strictRbac})">
                  Strict RBAC: ${appState.systemSettings.strictRbac ? `Enabled` : `Disabled`}
                </button>
              </div>
              <div class="well stack">
                <h3 class="card-title">Platform Maintenance Notice</h3>
                <p class="muted" style="margin:0;">Display a system-wide header notice for scheduled exam bank updates.</p>
                <button type="button" class="btn ${appState.systemSettings.maintenanceBanner ? `btn-primary` : `btn-soft`}" onclick="updateSystemSetting('maintenanceBanner', ${!appState.systemSettings.maintenanceBanner})">
                  Maintenance Notice: ${appState.systemSettings.maintenanceBanner ? `On` : `Off`}
                </button>
              </div>
              <div class="well stack">
                <div class="field-group">
                  <label class="field-label" for="xp-mult-select">Gamification XP Multiplier</label>
                  <select id="xp-mult-select" class="select" onchange="updateSystemSetting('xpMultiplier', this.value)">
                    <option value="1.0" ${appState.systemSettings.xpMultiplier === `1.0` ? `selected` : ``}>1.0x (Standard)</option>
                    <option value="1.5" ${appState.systemSettings.xpMultiplier === `1.5` ? `selected` : ``}>1.5x (Exam Revision Week)</option>
                    <option value="2.0" ${appState.systemSettings.xpMultiplier === `2.0` ? `selected` : ``}>2.0x (Weekend Sprint)</option>
                  </select>
                </div>
              </div>
            </div>
          ` : ``}
        </section>
      `;
    }

    /* =========================================================================
       13. CHART.JS RENDERERS (Reading CSS Tokens Dynamically)
       ========================================================================= */
    function renderSkillChart() {
      const canvas = document.getElementById(`skill-radar-chart`);
      if (!canvas || typeof Chart === `undefined`) return;
      const styles = getComputedStyle(document.body);
      const primary = styles.getPropertyValue(`--data-1`).trim();
      const container = styles.getPropertyValue(`--primary-container`).trim();
      const textCol = styles.getPropertyValue(`--on-surface`).trim();
      const gridCol = styles.getPropertyValue(`--outline-variant`).trim();

      const s = appState.progress[appState.activeLang].skills;
      skillChartInstance = new Chart(canvas, {
        type: `bar`,
        data: {
          labels: [`Vocab`, `Grammar`, `Reading`, `Writing`, `Listening`, `Speaking`, `Cultural`],
          datasets: [{
            label: `Mastery %`,
            data: [s.vocab, s.grammar, s.reading, s.writing, s.listening, s.speaking, s.cultural],
            backgroundColor: primary,
            borderColor: container,
            borderWidth: 2,
            borderRadius: 999
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: { legend: { display: false } },
          scales: {
            y: { beginAtZero: true, max: 100, grid: { color: gridCol }, ticks: { color: textCol } },
            x: { grid: { display: false }, ticks: { color: textCol } }
          }
        }
      });
    }

    function renderAdminChart() {
      const canvas = document.getElementById(`admin-xp-chart`);
      if (!canvas || typeof Chart === `undefined`) return;
      const styles = getComputedStyle(document.body);
      const c1 = styles.getPropertyValue(`--data-1`).trim();
      const c2 = styles.getPropertyValue(`--data-2`).trim();
      const c3 = styles.getPropertyValue(`--data-3`).trim();
      const c4 = styles.getPropertyValue(`--data-4`).trim();
      const textCol = styles.getPropertyValue(`--on-surface`).trim();
      const gridCol = styles.getPropertyValue(`--outline-variant`).trim();

      const p = appState.progress;
      adminChartInstance = new Chart(canvas, {
        type: `bar`,
        data: {
          labels: [`French`, `German`, `Japanese`, `Mandarin`, `Korean`],
          datasets: [{
            label: `Earned XP`,
            data: [p.fr.xp, p.de.xp, p.ja.xp, p.zh.xp, p.ko.xp],
            backgroundColor: [c1, c3, c2, c4, c1],
            borderRadius: 999
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: { legend: { display: false } },
          scales: {
            y: { beginAtZero: true, grid: { color: gridCol }, ticks: { color: textCol } },
            x: { grid: { display: false }, ticks: { color: textCol } }
          }
        }
      });
    }

    /* =========================================================================
       14. BOOTSTRAP ON LOAD
       ========================================================================= */
    async function initApp() {
      try {
        if (window.notebookAppApi && typeof window.notebookAppApi.getAppState === `function`) {
          const saved = await window.notebookAppApi.getAppState();
          if (saved) mergeSavedState(saved);
        }
      } catch (e) {
        // Use defaults if state unavailable
      }
      renderAll();
      if (window.notebookAppApi && typeof window.notebookAppApi.notifyAppReady === `function`) {
        window.notebookAppApi.notifyAppReady();
      }
    }

    document.addEventListener(`DOMContentLoaded`, initApp);
  
