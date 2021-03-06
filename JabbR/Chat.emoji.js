﻿var Emoji = {};
var EmojiIcons;

(function () {
    "use strict";
    var validEmoji2 = {
        "grinning-face": true, "beaming-face-with-smiling-eyes": true, "face-with-tears-of-joy": true, "rolling-on-the-floor-laughing": true, "grinning-face-with-big-eyes": true, "grinning-face-with-smiling-eyes": true, "grinning-face-with-sweat": true,
        "grinning-squinting-face": true, "winking-face": true, "smiling-face-with-smiling-eyes": true, "face-savoring-food": true, "smiling-face-with-sunglasses": true, "smiling-face-with-heart-eyes": true, "face-blowing-a-kiss": true, "kissing-face": true,
        "kissing-face-with-smiling-eyes": true, "kissing-face-with-closed-eyes": true, "smiling-face": true, "slightly-smiling-face": true, "hugging-face": true, "star-struck": true, "thinking-face": true, "face-with-raised-eyebrow": true, "neutral-face": true,
        "expressionless-face": true, "face-without-mouth": true, "face-with-rolling-eyes": true, "smirking-face": true, "persevering-face": true, "sad-but-relieved-face": true, "face-with-open-mouth": true, "zipper-mouth-face": true, "hushed-face": true,
        "sleepy-face": true, "tired-face": true, "sleeping-face": true, "relieved-face": true, "face-with-tongue": true, "winking-face-with-tongue": true, "squinting-face-with-tongue": true, "drooling-face": true, "unamused-face": true, "downcast-face-with-sweat": true,
        "pensive-face": true, "confused-face": true, "upside-down-face": true, "money-mouth-face": true, "astonished-face": true, "frowning-face": true, "slightly-frowning-face": true, "confounded-face": true, "disappointed-face": true, "worried-face": true,
        "face-with-steam-from-nose": true, "crying-face": true, "loudly-crying-face": true, "frowning-face-with-open-mouth": true, "anguished-face": true, "fearful-face": true, "weary-face": true, "exploding-head": true, "grimacing-face": true,
        "anxious-face-with-sweat": true, "face-screaming-in-fear": true, "flushed-face": true, "zany-face": true, "dizzy-face": true, "pouting-face": true, "angry-face": true, "face-with-symbols-on-mouth": true, "face-with-medical-mask": true,
        "face-with-thermometer": true, "face-with-head-bandage": true, "nauseated-face": true, "face-vomiting": true, "sneezing-face": true, "smiling-face-with-halo": true, "cowboy-hat-face": true, "lying-face": true, "shushing-face": true,
        "face-with-hand-over-mouth": true, "face-with-monocle": true, "nerd-face": true, "smiling-face-with-horns": true, "angry-face-with-horns": true, "clown-face": true, "ogre": true, "goblin": true, "skull": true, "skull-and-crossbones": true,
        "ghost": true, "alien": true, "alien-monster": true, "robot-face": true, "pile-of-poo": true, "grinning-cat-face": true, "grinning-cat-face-with-smiling-eyes": true, "cat-face-with-tears-of-joy": true, "smiling-cat-face-with-heart-eyes": true,
        "cat-face-with-wry-smile": true, "kissing-cat-face": true, "weary-cat-face": true, "crying-cat-face": true, "pouting-cat-face": true, "see-no-evil-monkey": true, "hear-no-evil-monkey": true, "speak-no-evil-monkey": true, "baby": true, "baby-light-skin-tone": true,
        "baby-medium-light-skin-tone": true, "baby-medium-skin-tone": true, "baby-medium-dark-skin-tone": true, "baby-dark-skin-tone": true, "child": true, "child-light-skin-tone": true, "child-medium-light-skin-tone": true, "child-medium-skin-tone": true,
        "child-medium-dark-skin-tone": true, "child-dark-skin-tone": true, "boy": true, "boy-light-skin-tone": true, "boy-medium-light-skin-tone": true, "boy-medium-skin-tone": true, "boy-medium-dark-skin-tone": true, "boy-dark-skin-tone": true, "girl": true,
        "girl-light-skin-tone": true, "girl-medium-light-skin-tone": true, "girl-medium-skin-tone": true, "girl-medium-dark-skin-tone": true, "girl-dark-skin-tone": true, "adult": true, "adult-light-skin-tone": true, "adult-medium-light-skin-tone": true,
        "adult-medium-skin-tone": true, "adult-medium-dark-skin-tone": true, "adult-dark-skin-tone": true, "man": true, "man-light-skin-tone": true, "man-medium-light-skin-tone": true, "man-medium-skin-tone": true, "man-medium-dark-skin-tone": true,
        "man-dark-skin-tone": true, "woman": true, "woman-light-skin-tone": true, "woman-medium-light-skin-tone": true, "woman-medium-skin-tone": true, "woman-medium-dark-skin-tone": true, "woman-dark-skin-tone": true, "older-adult": true, "older-adult-light-skin-tone": true,
        "older-adult-medium-light-skin-tone": true, "older-adult-medium-skin-tone": true, "older-adult-medium-dark-skin-tone": true, "older-adult-dark-skin-tone": true, "old-man": true, "old-man-light-skin-tone": true, "old-man-medium-light-skin-tone": true,
        "old-man-medium-skin-tone": true, "old-man-medium-dark-skin-tone": true, "old-man-dark-skin-tone": true, "old-woman": true, "old-woman-light-skin-tone": true, "old-woman-medium-light-skin-tone": true, "old-woman-medium-skin-tone": true,
        "old-woman-medium-dark-skin-tone": true, "old-woman-dark-skin-tone": true, "man-health-worker": true, "man-health-worker-light-skin-tone": true, "man-health-worker-medium-light-skin-tone": true, "man-health-worker-medium-skin-tone": true,
        "man-health-worker-medium-dark-skin-tone": true, "man-health-worker-dark-skin-tone": true, "woman-health-worker": true, "woman-health-worker-light-skin-tone": true, "woman-health-worker-medium-light-skin-tone": true, "woman-health-worker-medium-skin-tone": true,
        "woman-health-worker-medium-dark-skin-tone": true, "woman-health-worker-dark-skin-tone": true, "man-student": true, "man-student-light-skin-tone": true, "man-student-medium-light-skin-tone": true, "man-student-medium-skin-tone": true,
        "man-student-medium-dark-skin-tone": true, "man-student-dark-skin-tone": true, "woman-student": true, "woman-student-light-skin-tone": true, "woman-student-medium-light-skin-tone": true, "woman-student-medium-skin-tone": true, "woman-student-medium-dark-skin-tone": true,
        "woman-student-dark-skin-tone": true, "man-teacher": true, "man-teacher-light-skin-tone": true, "man-teacher-medium-light-skin-tone": true, "man-teacher-medium-skin-tone": true, "man-teacher-medium-dark-skin-tone": true, "man-teacher-dark-skin-tone": true,
        "woman-teacher": true, "woman-teacher-light-skin-tone": true, "woman-teacher-medium-light-skin-tone": true, "woman-teacher-medium-skin-tone": true, "woman-teacher-medium-dark-skin-tone": true, "woman-teacher-dark-skin-tone": true, "man-judge": true,
        "man-judge-light-skin-tone": true, "man-judge-medium-light-skin-tone": true, "man-judge-medium-skin-tone": true, "man-judge-medium-dark-skin-tone": true, "man-judge-dark-skin-tone": true, "woman-judge": true, "woman-judge-light-skin-tone": true,
        "woman-judge-medium-light-skin-tone": true, "woman-judge-medium-skin-tone": true, "woman-judge-medium-dark-skin-tone": true, "woman-judge-dark-skin-tone": true, "man-farmer": true, "man-farmer-light-skin-tone": true, "man-farmer-medium-light-skin-tone": true,
        "man-farmer-medium-skin-tone": true, "man-farmer-medium-dark-skin-tone": true, "man-farmer-dark-skin-tone": true, "woman-farmer": true, "woman-farmer-light-skin-tone": true, "woman-farmer-medium-light-skin-tone": true, "woman-farmer-medium-skin-tone": true,
        "woman-farmer-medium-dark-skin-tone": true, "woman-farmer-dark-skin-tone": true, "man-cook": true, "man-cook-light-skin-tone": true, "man-cook-medium-light-skin-tone": true, "man-cook-medium-skin-tone": true, "man-cook-medium-dark-skin-tone": true,
        "man-cook-dark-skin-tone": true, "woman-cook": true, "woman-cook-light-skin-tone": true, "woman-cook-medium-light-skin-tone": true, "woman-cook-medium-skin-tone": true, "woman-cook-medium-dark-skin-tone": true, "woman-cook-dark-skin-tone": true,
        "man-mechanic": true, "man-mechanic-light-skin-tone": true, "man-mechanic-medium-light-skin-tone": true, "man-mechanic-medium-skin-tone": true, "man-mechanic-medium-dark-skin-tone": true, "man-mechanic-dark-skin-tone": true, "woman-mechanic": true,
        "woman-mechanic-light-skin-tone": true, "woman-mechanic-medium-light-skin-tone": true, "woman-mechanic-medium-skin-tone": true, "woman-mechanic-medium-dark-skin-tone": true, "woman-mechanic-dark-skin-tone": true, "man-factory-worker": true,
        "man-factory-worker-light-skin-tone": true, "man-factory-worker-medium-light-skin-tone": true, "man-factory-worker-medium-skin-tone": true, "man-factory-worker-medium-dark-skin-tone": true, "man-factory-worker-dark-skin-tone": true, "woman-factory-worker": true,
        "woman-factory-worker-light-skin-tone": true, "woman-factory-worker-medium-light-skin-tone": true, "woman-factory-worker-medium-skin-tone": true, "woman-factory-worker-medium-dark-skin-tone": true, "woman-factory-worker-dark-skin-tone": true,
        "man-office-worker": true, "man-office-worker-light-skin-tone": true, "man-office-worker-medium-light-skin-tone": true, "man-office-worker-medium-skin-tone": true, "man-office-worker-medium-dark-skin-tone": true, "man-office-worker-dark-skin-tone": true,
        "woman-office-worker": true, "woman-office-worker-light-skin-tone": true, "woman-office-worker-medium-light-skin-tone": true, "woman-office-worker-medium-skin-tone": true, "woman-office-worker-medium-dark-skin-tone": true, "woman-office-worker-dark-skin-tone": true,
        "man-scientist": true, "man-scientist-light-skin-tone": true, "man-scientist-medium-light-skin-tone": true, "man-scientist-medium-skin-tone": true, "man-scientist-medium-dark-skin-tone": true, "man-scientist-dark-skin-tone": true, "woman-scientist": true,
        "woman-scientist-light-skin-tone": true, "woman-scientist-medium-light-skin-tone": true, "woman-scientist-medium-skin-tone": true, "woman-scientist-medium-dark-skin-tone": true, "woman-scientist-dark-skin-tone": true, "man-technologist": true,
        "man-technologist-light-skin-tone": true, "man-technologist-medium-light-skin-tone": true, "man-technologist-medium-skin-tone": true, "man-technologist-medium-dark-skin-tone": true, "man-technologist-dark-skin-tone": true, "woman-technologist": true,
        "woman-technologist-light-skin-tone": true, "woman-technologist-medium-light-skin-tone": true, "woman-technologist-medium-skin-tone": true, "woman-technologist-medium-dark-skin-tone": true, "woman-technologist-dark-skin-tone": true, "man-singer": true,
        "man-singer-light-skin-tone": true, "man-singer-medium-light-skin-tone": true, "man-singer-medium-skin-tone": true, "man-singer-medium-dark-skin-tone": true, "man-singer-dark-skin-tone": true, "woman-singer": true, "woman-singer-light-skin-tone": true,
        "woman-singer-medium-light-skin-tone": true, "woman-singer-medium-skin-tone": true, "woman-singer-medium-dark-skin-tone": true, "woman-singer-dark-skin-tone": true, "man-artist": true, "man-artist-light-skin-tone": true, "man-artist-medium-light-skin-tone": true,
        "man-artist-medium-skin-tone": true, "man-artist-medium-dark-skin-tone": true, "man-artist-dark-skin-tone": true, "woman-artist": true, "woman-artist-light-skin-tone": true, "woman-artist-medium-light-skin-tone": true, "woman-artist-medium-skin-tone": true,
        "woman-artist-medium-dark-skin-tone": true, "woman-artist-dark-skin-tone": true, "man-pilot": true, "man-pilot-light-skin-tone": true, "man-pilot-medium-light-skin-tone": true, "man-pilot-medium-skin-tone": true, "man-pilot-medium-dark-skin-tone": true,
        "man-pilot-dark-skin-tone": true, "woman-pilot": true, "woman-pilot-light-skin-tone": true, "woman-pilot-medium-light-skin-tone": true, "woman-pilot-medium-skin-tone": true, "woman-pilot-medium-dark-skin-tone": true, "woman-pilot-dark-skin-tone": true,
        "man-astronaut": true, "man-astronaut-light-skin-tone": true, "man-astronaut-medium-light-skin-tone": true, "man-astronaut-medium-skin-tone": true, "man-astronaut-medium-dark-skin-tone": true, "man-astronaut-dark-skin-tone": true, "woman-astronaut": true,
        "woman-astronaut-light-skin-tone": true, "woman-astronaut-medium-light-skin-tone": true, "woman-astronaut-medium-skin-tone": true, "woman-astronaut-medium-dark-skin-tone": true, "woman-astronaut-dark-skin-tone": true, "man-firefighter": true,
        "man-firefighter-light-skin-tone": true, "man-firefighter-medium-light-skin-tone": true, "man-firefighter-medium-skin-tone": true, "man-firefighter-medium-dark-skin-tone": true, "man-firefighter-dark-skin-tone": true, "woman-firefighter": true,
        "woman-firefighter-light-skin-tone": true, "woman-firefighter-medium-light-skin-tone": true, "woman-firefighter-medium-skin-tone": true, "woman-firefighter-medium-dark-skin-tone": true, "woman-firefighter-dark-skin-tone": true, "police-officer": true,
        "police-officer-light-skin-tone": true, "police-officer-medium-light-skin-tone": true, "police-officer-medium-skin-tone": true, "police-officer-medium-dark-skin-tone": true, "police-officer-dark-skin-tone": true, "man-police-officer": true,
        "man-police-officer-light-skin-tone": true, "man-police-officer-medium-light-skin-tone": true, "man-police-officer-medium-skin-tone": true, "man-police-officer-medium-dark-skin-tone": true, "man-police-officer-dark-skin-tone": true, "woman-police-officer": true,
        "woman-police-officer-light-skin-tone": true, "woman-police-officer-medium-light-skin-tone": true, "woman-police-officer-medium-skin-tone": true, "woman-police-officer-medium-dark-skin-tone": true, "woman-police-officer-dark-skin-tone": true, "detective": true,
        "detective-light-skin-tone": true, "detective-medium-light-skin-tone": true, "detective-medium-skin-tone": true, "detective-medium-dark-skin-tone": true, "detective-dark-skin-tone": true, "man-detective": true, "man-detective-light-skin-tone": true,
        "man-detective-medium-light-skin-tone": true, "man-detective-medium-skin-tone": true, "man-detective-medium-dark-skin-tone": true, "man-detective-dark-skin-tone": true, "woman-detective": true, "woman-detective-light-skin-tone": true,
        "woman-detective-medium-light-skin-tone": true, "woman-detective-medium-skin-tone": true, "woman-detective-medium-dark-skin-tone": true, "woman-detective-dark-skin-tone": true, "guard": true, "guard-light-skin-tone": true, "guard-medium-light-skin-tone": true,
        "guard-medium-skin-tone": true, "guard-medium-dark-skin-tone": true, "guard-dark-skin-tone": true, "man-guard": true, "man-guard-light-skin-tone": true, "man-guard-medium-light-skin-tone": true, "man-guard-medium-skin-tone": true, "man-guard-medium-dark-skin-tone": true,
        "man-guard-dark-skin-tone": true, "woman-guard": true, "woman-guard-light-skin-tone": true, "woman-guard-medium-light-skin-tone": true, "woman-guard-medium-skin-tone": true, "woman-guard-medium-dark-skin-tone": true, "woman-guard-dark-skin-tone": true,
        "construction-worker": true, "construction-worker-light-skin-tone": true, "construction-worker-medium-light-skin-tone": true, "construction-worker-medium-skin-tone": true, "construction-worker-medium-dark-skin-tone": true, "construction-worker-dark-skin-tone": true,
        "man-construction-worker": true, "man-construction-worker-light-skin-tone": true, "man-construction-worker-medium-light-skin-tone": true, "man-construction-worker-medium-skin-tone": true, "man-construction-worker-medium-dark-skin-tone": true,
        "man-construction-worker-dark-skin-tone": true, "woman-construction-worker": true, "woman-construction-worker-light-skin-tone": true, "woman-construction-worker-medium-light-skin-tone": true, "woman-construction-worker-medium-skin-tone": true,
        "woman-construction-worker-medium-dark-skin-tone": true, "woman-construction-worker-dark-skin-tone": true, "prince": true, "prince-light-skin-tone": true, "prince-medium-light-skin-tone": true, "prince-medium-skin-tone": true, "prince-medium-dark-skin-tone": true,
        "prince-dark-skin-tone": true, "princess": true, "princess-light-skin-tone": true, "princess-medium-light-skin-tone": true, "princess-medium-skin-tone": true, "princess-medium-dark-skin-tone": true, "princess-dark-skin-tone": true, "person-wearing-turban": true,
        "person-wearing-turban-light-skin-tone": true, "person-wearing-turban-medium-light-skin-tone": true, "person-wearing-turban-medium-skin-tone": true, "person-wearing-turban-medium-dark-skin-tone": true, "person-wearing-turban-dark-skin-tone": true,
        "man-wearing-turban": true, "man-wearing-turban-light-skin-tone": true, "man-wearing-turban-medium-light-skin-tone": true, "man-wearing-turban-medium-skin-tone": true, "man-wearing-turban-medium-dark-skin-tone": true, "man-wearing-turban-dark-skin-tone": true,
        "woman-wearing-turban": true, "woman-wearing-turban-light-skin-tone": true, "woman-wearing-turban-medium-light-skin-tone": true, "woman-wearing-turban-medium-skin-tone": true, "woman-wearing-turban-medium-dark-skin-tone": true, "woman-wearing-turban-dark-skin-tone": true,
        "man-with-chinese-cap": true, "man-with-chinese-cap-light-skin-tone": true, "man-with-chinese-cap-medium-light-skin-tone": true, "man-with-chinese-cap-medium-skin-tone": true, "man-with-chinese-cap-medium-dark-skin-tone": true, "man-with-chinese-cap-dark-skin-tone": true,
        "woman-with-headscarf": true, "woman-with-headscarf-light-skin-tone": true, "woman-with-headscarf-medium-light-skin-tone": true, "woman-with-headscarf-medium-skin-tone": true, "woman-with-headscarf-medium-dark-skin-tone": true, "woman-with-headscarf-dark-skin-tone": true,
        "bearded-person": true, "bearded-person-light-skin-tone": true, "bearded-person-medium-light-skin-tone": true, "bearded-person-medium-skin-tone": true, "bearded-person-medium-dark-skin-tone": true, "bearded-person-dark-skin-tone": true, "blond-haired-person": true,
        "blond-haired-person-light-skin-tone": true, "blond-haired-person-medium-light-skin-tone": true, "blond-haired-person-medium-skin-tone": true, "blond-haired-person-medium-dark-skin-tone": true, "blond-haired-person-dark-skin-tone": true, "blond-haired-man": true,
        "blond-haired-man-light-skin-tone": true, "blond-haired-man-medium-light-skin-tone": true, "blond-haired-man-medium-skin-tone": true, "blond-haired-man-medium-dark-skin-tone": true, "blond-haired-man-dark-skin-tone": true, "blond-haired-woman": true,
        "blond-haired-woman-light-skin-tone": true, "blond-haired-woman-medium-light-skin-tone": true, "blond-haired-woman-medium-skin-tone": true, "blond-haired-woman-medium-dark-skin-tone": true, "blond-haired-woman-dark-skin-tone": true, "man-in-tuxedo": true,
        "man-in-tuxedo-light-skin-tone": true, "man-in-tuxedo-medium-light-skin-tone": true, "man-in-tuxedo-medium-skin-tone": true, "man-in-tuxedo-medium-dark-skin-tone": true, "man-in-tuxedo-dark-skin-tone": true, "bride-with-veil": true, "bride-with-veil-light-skin-tone": true,
        "bride-with-veil-medium-light-skin-tone": true, "bride-with-veil-medium-skin-tone": true, "bride-with-veil-medium-dark-skin-tone": true, "bride-with-veil-dark-skin-tone": true, "pregnant-woman": true, "pregnant-woman-light-skin-tone": true,
        "pregnant-woman-medium-light-skin-tone": true, "pregnant-woman-medium-skin-tone": true, "pregnant-woman-medium-dark-skin-tone": true, "pregnant-woman-dark-skin-tone": true, "breast-feeding": true, "breast-feeding-light-skin-tone": true,
        "breast-feeding-medium-light-skin-tone": true, "breast-feeding-medium-skin-tone": true, "breast-feeding-medium-dark-skin-tone": true, "breast-feeding-dark-skin-tone": true, "baby-angel": true, "baby-angel-light-skin-tone": true, "baby-angel-medium-light-skin-tone": true,
        "baby-angel-medium-skin-tone": true, "baby-angel-medium-dark-skin-tone": true, "baby-angel-dark-skin-tone": true, "santa-claus": true, "santa-claus-light-skin-tone": true, "santa-claus-medium-light-skin-tone": true, "santa-claus-medium-skin-tone": true,
        "santa-claus-medium-dark-skin-tone": true, "santa-claus-dark-skin-tone": true, "mrs-claus": true, "mrs-claus-light-skin-tone": true, "mrs-claus-medium-light-skin-tone": true, "mrs-claus-medium-skin-tone": true, "mrs-claus-medium-dark-skin-tone": true,
        "mrs-claus-dark-skin-tone": true, "superhero": true, "superhero-light-skin-tone": true, "superhero-medium-light-skin-tone": true, "superhero-medium-skin-tone": true, "superhero-medium-dark-skin-tone": true, "superhero-dark-skin-tone": true, "woman-superhero": true,
        "woman-superhero-light-skin-tone": true, "woman-superhero-medium-light-skin-tone": true, "woman-superhero-medium-skin-tone": true, "woman-superhero-medium-dark-skin-tone": true, "woman-superhero-dark-skin-tone": true, "man-superhero": true,
        "man-superhero-light-skin-tone": true, "man-superhero-medium-light-skin-tone": true, "man-superhero-medium-skin-tone": true, "man-superhero-medium-dark-skin-tone": true, "man-superhero-dark-skin-tone": true, "supervillain": true, "supervillain-light-skin-tone": true,
        "supervillain-medium-light-skin-tone": true, "supervillain-medium-skin-tone": true, "supervillain-medium-dark-skin-tone": true, "supervillain-dark-skin-tone": true, "woman-supervillain": true, "woman-supervillain-light-skin-tone": true,
        "woman-supervillain-medium-light-skin-tone": true, "woman-supervillain-medium-skin-tone": true, "woman-supervillain-medium-dark-skin-tone": true, "woman-supervillain-dark-skin-tone": true, "man-supervillain": true, "man-supervillain-light-skin-tone": true,
        "man-supervillain-medium-light-skin-tone": true, "man-supervillain-medium-skin-tone": true, "man-supervillain-medium-dark-skin-tone": true, "man-supervillain-dark-skin-tone": true, "mage": true, "mage-light-skin-tone": true, "mage-medium-light-skin-tone": true,
        "mage-medium-skin-tone": true, "mage-medium-dark-skin-tone": true, "mage-dark-skin-tone": true, "woman-mage": true, "woman-mage-light-skin-tone": true, "woman-mage-medium-light-skin-tone": true, "woman-mage-medium-skin-tone": true, "woman-mage-medium-dark-skin-tone": true,
        "woman-mage-dark-skin-tone": true, "man-mage": true, "man-mage-light-skin-tone": true, "man-mage-medium-light-skin-tone": true, "man-mage-medium-skin-tone": true, "man-mage-medium-dark-skin-tone": true, "man-mage-dark-skin-tone": true, "fairy": true,
        "fairy-light-skin-tone": true, "fairy-medium-light-skin-tone": true, "fairy-medium-skin-tone": true, "fairy-medium-dark-skin-tone": true, "fairy-dark-skin-tone": true, "woman-fairy": true, "woman-fairy-light-skin-tone": true, "woman-fairy-medium-light-skin-tone": true,
        "woman-fairy-medium-skin-tone": true, "woman-fairy-medium-dark-skin-tone": true, "woman-fairy-dark-skin-tone": true, "man-fairy": true, "man-fairy-light-skin-tone": true, "man-fairy-medium-light-skin-tone": true, "man-fairy-medium-skin-tone": true,
        "man-fairy-medium-dark-skin-tone": true, "man-fairy-dark-skin-tone": true, "vampire": true, "vampire-light-skin-tone": true, "vampire-medium-light-skin-tone": true, "vampire-medium-skin-tone": true, "vampire-medium-dark-skin-tone": true, "vampire-dark-skin-tone": true,
        "woman-vampire": true, "woman-vampire-light-skin-tone": true, "woman-vampire-medium-light-skin-tone": true, "woman-vampire-medium-skin-tone": true, "woman-vampire-medium-dark-skin-tone": true, "woman-vampire-dark-skin-tone": true, "man-vampire": true,
        "man-vampire-light-skin-tone": true, "man-vampire-medium-light-skin-tone": true, "man-vampire-medium-skin-tone": true, "man-vampire-medium-dark-skin-tone": true, "man-vampire-dark-skin-tone": true, "merperson": true, "merperson-light-skin-tone": true,
        "merperson-medium-light-skin-tone": true, "merperson-medium-skin-tone": true, "merperson-medium-dark-skin-tone": true, "merperson-dark-skin-tone": true, "mermaid": true, "mermaid-light-skin-tone": true, "mermaid-medium-light-skin-tone": true,
        "mermaid-medium-skin-tone": true, "mermaid-medium-dark-skin-tone": true, "mermaid-dark-skin-tone": true, "merman": true, "merman-light-skin-tone": true, "merman-medium-light-skin-tone": true, "merman-medium-skin-tone": true, "merman-medium-dark-skin-tone": true,
        "merman-dark-skin-tone": true, "elf": true, "elf-light-skin-tone": true, "elf-medium-light-skin-tone": true, "elf-medium-skin-tone": true, "elf-medium-dark-skin-tone": true, "elf-dark-skin-tone": true, "woman-elf": true, "woman-elf-light-skin-tone": true,
        "woman-elf-medium-light-skin-tone": true, "woman-elf-medium-skin-tone": true, "woman-elf-medium-dark-skin-tone": true, "woman-elf-dark-skin-tone": true, "man-elf": true, "man-elf-light-skin-tone": true, "man-elf-medium-light-skin-tone": true,
        "man-elf-medium-skin-tone": true, "man-elf-medium-dark-skin-tone": true, "man-elf-dark-skin-tone": true, "genie": true, "woman-genie": true, "man-genie": true, "zombie": true, "woman-zombie": true, "man-zombie": true, "person-frowning": true,
        "person-frowning-light-skin-tone": true, "person-frowning-medium-light-skin-tone": true, "person-frowning-medium-skin-tone": true, "person-frowning-medium-dark-skin-tone": true, "person-frowning-dark-skin-tone": true, "man-frowning": true,
        "man-frowning-light-skin-tone": true, "man-frowning-medium-light-skin-tone": true, "man-frowning-medium-skin-tone": true, "man-frowning-medium-dark-skin-tone": true, "man-frowning-dark-skin-tone": true, "woman-frowning": true, "woman-frowning-light-skin-tone": true,
        "woman-frowning-medium-light-skin-tone": true, "woman-frowning-medium-skin-tone": true, "woman-frowning-medium-dark-skin-tone": true, "woman-frowning-dark-skin-tone": true, "person-pouting": true, "person-pouting-light-skin-tone": true,
        "person-pouting-medium-light-skin-tone": true, "person-pouting-medium-skin-tone": true, "person-pouting-medium-dark-skin-tone": true, "person-pouting-dark-skin-tone": true, "man-pouting": true, "man-pouting-light-skin-tone": true, "man-pouting-medium-light-skin-tone": true,
        "man-pouting-medium-skin-tone": true, "man-pouting-medium-dark-skin-tone": true, "man-pouting-dark-skin-tone": true, "woman-pouting": true, "woman-pouting-light-skin-tone": true, "woman-pouting-medium-light-skin-tone": true, "woman-pouting-medium-skin-tone": true,
        "woman-pouting-medium-dark-skin-tone": true, "woman-pouting-dark-skin-tone": true, "person-gesturing-no": true, "person-gesturing-no-light-skin-tone": true, "person-gesturing-no-medium-light-skin-tone": true, "person-gesturing-no-medium-skin-tone": true,
        "person-gesturing-no-medium-dark-skin-tone": true, "person-gesturing-no-dark-skin-tone": true, "man-gesturing-no": true, "man-gesturing-no-light-skin-tone": true, "man-gesturing-no-medium-light-skin-tone": true, "man-gesturing-no-medium-skin-tone": true,
        "man-gesturing-no-medium-dark-skin-tone": true, "man-gesturing-no-dark-skin-tone": true, "woman-gesturing-no": true, "woman-gesturing-no-light-skin-tone": true, "woman-gesturing-no-medium-light-skin-tone": true, "woman-gesturing-no-medium-skin-tone": true,
        "woman-gesturing-no-medium-dark-skin-tone": true, "woman-gesturing-no-dark-skin-tone": true, "person-gesturing-ok": true, "person-gesturing-ok-light-skin-tone": true, "person-gesturing-ok-medium-light-skin-tone": true, "person-gesturing-ok-medium-skin-tone": true,
        "person-gesturing-ok-medium-dark-skin-tone": true, "person-gesturing-ok-dark-skin-tone": true, "man-gesturing-ok": true, "man-gesturing-ok-light-skin-tone": true, "man-gesturing-ok-medium-light-skin-tone": true, "man-gesturing-ok-medium-skin-tone": true,
        "man-gesturing-ok-medium-dark-skin-tone": true, "man-gesturing-ok-dark-skin-tone": true, "woman-gesturing-ok": true, "woman-gesturing-ok-light-skin-tone": true, "woman-gesturing-ok-medium-light-skin-tone": true, "woman-gesturing-ok-medium-skin-tone": true,
        "woman-gesturing-ok-medium-dark-skin-tone": true, "woman-gesturing-ok-dark-skin-tone": true, "person-tipping-hand": true, "person-tipping-hand-light-skin-tone": true, "person-tipping-hand-medium-light-skin-tone": true, "person-tipping-hand-medium-skin-tone": true,
        "person-tipping-hand-medium-dark-skin-tone": true, "person-tipping-hand-dark-skin-tone": true, "man-tipping-hand": true, "man-tipping-hand-light-skin-tone": true, "man-tipping-hand-medium-light-skin-tone": true, "man-tipping-hand-medium-skin-tone": true,
        "man-tipping-hand-medium-dark-skin-tone": true, "man-tipping-hand-dark-skin-tone": true, "woman-tipping-hand": true, "woman-tipping-hand-light-skin-tone": true, "woman-tipping-hand-medium-light-skin-tone": true, "woman-tipping-hand-medium-skin-tone": true,
        "woman-tipping-hand-medium-dark-skin-tone": true, "woman-tipping-hand-dark-skin-tone": true, "person-raising-hand": true, "person-raising-hand-light-skin-tone": true, "person-raising-hand-medium-light-skin-tone": true, "person-raising-hand-medium-skin-tone": true,
        "person-raising-hand-medium-dark-skin-tone": true, "person-raising-hand-dark-skin-tone": true, "man-raising-hand": true, "man-raising-hand-light-skin-tone": true, "man-raising-hand-medium-light-skin-tone": true, "man-raising-hand-medium-skin-tone": true,
        "man-raising-hand-medium-dark-skin-tone": true, "man-raising-hand-dark-skin-tone": true, "woman-raising-hand": true, "woman-raising-hand-light-skin-tone": true, "woman-raising-hand-medium-light-skin-tone": true, "woman-raising-hand-medium-skin-tone": true,
        "woman-raising-hand-medium-dark-skin-tone": true, "woman-raising-hand-dark-skin-tone": true, "person-bowing": true, "person-bowing-light-skin-tone": true, "person-bowing-medium-light-skin-tone": true, "person-bowing-medium-skin-tone": true,
        "person-bowing-medium-dark-skin-tone": true, "person-bowing-dark-skin-tone": true, "man-bowing": true, "man-bowing-light-skin-tone": true, "man-bowing-medium-light-skin-tone": true, "man-bowing-medium-skin-tone": true, "man-bowing-medium-dark-skin-tone": true,
        "man-bowing-dark-skin-tone": true, "woman-bowing": true, "woman-bowing-light-skin-tone": true, "woman-bowing-medium-light-skin-tone": true, "woman-bowing-medium-skin-tone": true, "woman-bowing-medium-dark-skin-tone": true, "woman-bowing-dark-skin-tone": true,
        "person-facepalming": true, "person-facepalming-light-skin-tone": true, "person-facepalming-medium-light-skin-tone": true, "person-facepalming-medium-skin-tone": true, "person-facepalming-medium-dark-skin-tone": true, "person-facepalming-dark-skin-tone": true,
        "man-facepalming": true, "man-facepalming-light-skin-tone": true, "man-facepalming-medium-light-skin-tone": true, "man-facepalming-medium-skin-tone": true, "man-facepalming-medium-dark-skin-tone": true, "man-facepalming-dark-skin-tone": true, "woman-facepalming": true,
        "woman-facepalming-light-skin-tone": true, "woman-facepalming-medium-light-skin-tone": true, "woman-facepalming-medium-skin-tone": true, "woman-facepalming-medium-dark-skin-tone": true, "woman-facepalming-dark-skin-tone": true, "person-shrugging": true,
        "person-shrugging-light-skin-tone": true, "person-shrugging-medium-light-skin-tone": true, "person-shrugging-medium-skin-tone": true, "person-shrugging-medium-dark-skin-tone": true, "person-shrugging-dark-skin-tone": true, "man-shrugging": true,
        "man-shrugging-light-skin-tone": true, "man-shrugging-medium-light-skin-tone": true, "man-shrugging-medium-skin-tone": true, "man-shrugging-medium-dark-skin-tone": true, "man-shrugging-dark-skin-tone": true, "woman-shrugging": true, "woman-shrugging-light-skin-tone": true,
        "woman-shrugging-medium-light-skin-tone": true, "woman-shrugging-medium-skin-tone": true, "woman-shrugging-medium-dark-skin-tone": true, "woman-shrugging-dark-skin-tone": true, "person-getting-massage": true, "person-getting-massage-light-skin-tone": true,
        "person-getting-massage-medium-light-skin-tone": true, "person-getting-massage-medium-skin-tone": true, "person-getting-massage-medium-dark-skin-tone": true, "person-getting-massage-dark-skin-tone": true, "man-getting-massage": true,
        "man-getting-massage-light-skin-tone": true, "man-getting-massage-medium-light-skin-tone": true, "man-getting-massage-medium-skin-tone": true, "man-getting-massage-medium-dark-skin-tone": true, "man-getting-massage-dark-skin-tone": true, "woman-getting-massage": true,
        "woman-getting-massage-light-skin-tone": true, "woman-getting-massage-medium-light-skin-tone": true, "woman-getting-massage-medium-skin-tone": true, "woman-getting-massage-medium-dark-skin-tone": true, "woman-getting-massage-dark-skin-tone": true,
        "person-getting-haircut": true, "person-getting-haircut-light-skin-tone": true, "person-getting-haircut-medium-light-skin-tone": true, "person-getting-haircut-medium-skin-tone": true, "person-getting-haircut-medium-dark-skin-tone": true,
        "person-getting-haircut-dark-skin-tone": true, "man-getting-haircut": true, "man-getting-haircut-light-skin-tone": true, "man-getting-haircut-medium-light-skin-tone": true, "man-getting-haircut-medium-skin-tone": true, "man-getting-haircut-medium-dark-skin-tone": true,
        "man-getting-haircut-dark-skin-tone": true, "woman-getting-haircut": true, "woman-getting-haircut-light-skin-tone": true, "woman-getting-haircut-medium-light-skin-tone": true, "woman-getting-haircut-medium-skin-tone": true, "woman-getting-haircut-medium-dark-skin-tone": true,
        "woman-getting-haircut-dark-skin-tone": true, "person-walking": true, "person-walking-light-skin-tone": true, "person-walking-medium-light-skin-tone": true, "person-walking-medium-skin-tone": true, "person-walking-medium-dark-skin-tone": true,
        "person-walking-dark-skin-tone": true, "man-walking": true, "man-walking-light-skin-tone": true, "man-walking-medium-light-skin-tone": true, "man-walking-medium-skin-tone": true, "man-walking-medium-dark-skin-tone": true, "man-walking-dark-skin-tone": true,
        "woman-walking": true, "woman-walking-light-skin-tone": true, "woman-walking-medium-light-skin-tone": true, "woman-walking-medium-skin-tone": true, "woman-walking-medium-dark-skin-tone": true, "woman-walking-dark-skin-tone": true, "person-running": true,
        "person-running-light-skin-tone": true, "person-running-medium-light-skin-tone": true, "person-running-medium-skin-tone": true, "person-running-medium-dark-skin-tone": true, "person-running-dark-skin-tone": true, "man-running": true, "man-running-light-skin-tone": true,
        "man-running-medium-light-skin-tone": true, "man-running-medium-skin-tone": true, "man-running-medium-dark-skin-tone": true, "man-running-dark-skin-tone": true, "woman-running": true, "woman-running-light-skin-tone": true, "woman-running-medium-light-skin-tone": true,
        "woman-running-medium-skin-tone": true, "woman-running-medium-dark-skin-tone": true, "woman-running-dark-skin-tone": true, "woman-dancing": true, "woman-dancing-light-skin-tone": true, "woman-dancing-medium-light-skin-tone": true, "woman-dancing-medium-skin-tone": true,
        "woman-dancing-medium-dark-skin-tone": true, "woman-dancing-dark-skin-tone": true, "man-dancing": true, "man-dancing-light-skin-tone": true, "man-dancing-medium-light-skin-tone": true, "man-dancing-medium-skin-tone": true, "man-dancing-medium-dark-skin-tone": true,
        "man-dancing-dark-skin-tone": true, "people-with-bunny-ears": true, "men-with-bunny-ears": true, "women-with-bunny-ears": true, "person-in-steamy-room": true, "person-in-steamy-room-light-skin-tone": true, "person-in-steamy-room-medium-light-skin-tone": true,
        "person-in-steamy-room-medium-skin-tone": true, "person-in-steamy-room-medium-dark-skin-tone": true, "person-in-steamy-room-dark-skin-tone": true, "woman-in-steamy-room": true, "woman-in-steamy-room-light-skin-tone": true, "woman-in-steamy-room-medium-light-skin-tone": true,
        "woman-in-steamy-room-medium-skin-tone": true, "woman-in-steamy-room-medium-dark-skin-tone": true, "woman-in-steamy-room-dark-skin-tone": true, "man-in-steamy-room": true, "man-in-steamy-room-light-skin-tone": true, "man-in-steamy-room-medium-light-skin-tone": true,
        "man-in-steamy-room-medium-skin-tone": true, "man-in-steamy-room-medium-dark-skin-tone": true, "man-in-steamy-room-dark-skin-tone": true, "person-climbing": true, "person-climbing-light-skin-tone": true, "person-climbing-medium-light-skin-tone": true,
        "person-climbing-medium-skin-tone": true, "person-climbing-medium-dark-skin-tone": true, "person-climbing-dark-skin-tone": true, "woman-climbing": true, "woman-climbing-light-skin-tone": true, "woman-climbing-medium-light-skin-tone": true,
        "woman-climbing-medium-skin-tone": true, "woman-climbing-medium-dark-skin-tone": true, "woman-climbing-dark-skin-tone": true, "man-climbing": true, "man-climbing-light-skin-tone": true, "man-climbing-medium-light-skin-tone": true, "man-climbing-medium-skin-tone": true,
        "man-climbing-medium-dark-skin-tone": true, "man-climbing-dark-skin-tone": true, "person-in-lotus-position": true, "person-in-lotus-position-light-skin-tone": true, "person-in-lotus-position-medium-light-skin-tone": true, "person-in-lotus-position-medium-skin-tone": true,
        "person-in-lotus-position-medium-dark-skin-tone": true, "person-in-lotus-position-dark-skin-tone": true, "woman-in-lotus-position": true, "woman-in-lotus-position-light-skin-tone": true, "woman-in-lotus-position-medium-light-skin-tone": true,
        "woman-in-lotus-position-medium-skin-tone": true, "woman-in-lotus-position-medium-dark-skin-tone": true, "woman-in-lotus-position-dark-skin-tone": true, "man-in-lotus-position": true, "man-in-lotus-position-light-skin-tone": true,
        "man-in-lotus-position-medium-light-skin-tone": true, "man-in-lotus-position-medium-skin-tone": true, "man-in-lotus-position-medium-dark-skin-tone": true, "man-in-lotus-position-dark-skin-tone": true, "person-taking-bath": true, "person-taking-bath-light-skin-tone": true,
        "person-taking-bath-medium-light-skin-tone": true, "person-taking-bath-medium-skin-tone": true, "person-taking-bath-medium-dark-skin-tone": true, "person-taking-bath-dark-skin-tone": true, "person-in-bed": true, "person-in-bed-light-skin-tone": true,
        "person-in-bed-medium-light-skin-tone": true, "person-in-bed-medium-skin-tone": true, "person-in-bed-medium-dark-skin-tone": true, "person-in-bed-dark-skin-tone": true, "man-in-suit-levitating": true, "man-in-suit-levitating-light-skin-tone": true,
        "man-in-suit-levitating-medium-light-skin-tone": true, "man-in-suit-levitating-medium-skin-tone": true, "man-in-suit-levitating-medium-dark-skin-tone": true, "man-in-suit-levitating-dark-skin-tone": true, "speaking-head": true, "bust-in-silhouette": true,
        "busts-in-silhouette": true, "person-fencing": true, "horse-racing": true, "horse-racing-light-skin-tone": true, "horse-racing-medium-light-skin-tone": true, "horse-racing-medium-skin-tone": true, "horse-racing-medium-dark-skin-tone": true, "horse-racing-dark-skin-tone": true,
        "skier": true, "snowboarder": true, "snowboarder-light-skin-tone": true, "snowboarder-medium-light-skin-tone": true, "snowboarder-medium-skin-tone": true, "snowboarder-medium-dark-skin-tone": true, "snowboarder-dark-skin-tone": true, "person-golfing": true,
        "person-golfing-light-skin-tone": true, "person-golfing-medium-light-skin-tone": true, "person-golfing-medium-skin-tone": true, "person-golfing-medium-dark-skin-tone": true, "person-golfing-dark-skin-tone": true, "man-golfing": true, "man-golfing-light-skin-tone": true,
        "man-golfing-medium-light-skin-tone": true, "man-golfing-medium-skin-tone": true, "man-golfing-medium-dark-skin-tone": true, "man-golfing-dark-skin-tone": true, "woman-golfing": true, "woman-golfing-light-skin-tone": true, "woman-golfing-medium-light-skin-tone": true,
        "woman-golfing-medium-skin-tone": true, "woman-golfing-medium-dark-skin-tone": true, "woman-golfing-dark-skin-tone": true, "person-surfing": true, "person-surfing-light-skin-tone": true, "person-surfing-medium-light-skin-tone": true, "person-surfing-medium-skin-tone": true,
        "person-surfing-medium-dark-skin-tone": true, "person-surfing-dark-skin-tone": true, "man-surfing": true, "man-surfing-light-skin-tone": true, "man-surfing-medium-light-skin-tone": true, "man-surfing-medium-skin-tone": true, "man-surfing-medium-dark-skin-tone": true,
        "man-surfing-dark-skin-tone": true, "woman-surfing": true, "woman-surfing-light-skin-tone": true, "woman-surfing-medium-light-skin-tone": true, "woman-surfing-medium-skin-tone": true, "woman-surfing-medium-dark-skin-tone": true, "woman-surfing-dark-skin-tone": true,
        "person-rowing-boat": true, "person-rowing-boat-light-skin-tone": true, "person-rowing-boat-medium-light-skin-tone": true, "person-rowing-boat-medium-skin-tone": true, "person-rowing-boat-medium-dark-skin-tone": true, "person-rowing-boat-dark-skin-tone": true,
        "man-rowing-boat": true, "man-rowing-boat-light-skin-tone": true, "man-rowing-boat-medium-light-skin-tone": true, "man-rowing-boat-medium-skin-tone": true, "man-rowing-boat-medium-dark-skin-tone": true, "man-rowing-boat-dark-skin-tone": true, "woman-rowing-boat": true,
        "woman-rowing-boat-light-skin-tone": true, "woman-rowing-boat-medium-light-skin-tone": true, "woman-rowing-boat-medium-skin-tone": true, "woman-rowing-boat-medium-dark-skin-tone": true, "woman-rowing-boat-dark-skin-tone": true, "person-swimming": true,
        "person-swimming-light-skin-tone": true, "person-swimming-medium-light-skin-tone": true, "person-swimming-medium-skin-tone": true, "person-swimming-medium-dark-skin-tone": true, "person-swimming-dark-skin-tone": true, "man-swimming": true, "man-swimming-light-skin-tone": true,
        "man-swimming-medium-light-skin-tone": true, "man-swimming-medium-skin-tone": true, "man-swimming-medium-dark-skin-tone": true, "man-swimming-dark-skin-tone": true, "woman-swimming": true, "woman-swimming-light-skin-tone": true, "woman-swimming-medium-light-skin-tone": true,
        "woman-swimming-medium-skin-tone": true, "woman-swimming-medium-dark-skin-tone": true, "woman-swimming-dark-skin-tone": true, "person-bouncing-ball": true, "person-bouncing-ball-light-skin-tone": true, "person-bouncing-ball-medium-light-skin-tone": true,
        "person-bouncing-ball-medium-skin-tone": true, "person-bouncing-ball-medium-dark-skin-tone": true, "person-bouncing-ball-dark-skin-tone": true, "man-bouncing-ball": true, "man-bouncing-ball-light-skin-tone": true, "man-bouncing-ball-medium-light-skin-tone": true,
        "man-bouncing-ball-medium-skin-tone": true, "man-bouncing-ball-medium-dark-skin-tone": true, "man-bouncing-ball-dark-skin-tone": true, "woman-bouncing-ball": true, "woman-bouncing-ball-light-skin-tone": true, "woman-bouncing-ball-medium-light-skin-tone": true,
        "woman-bouncing-ball-medium-skin-tone": true, "woman-bouncing-ball-medium-dark-skin-tone": true, "woman-bouncing-ball-dark-skin-tone": true, "person-lifting-weights": true, "person-lifting-weights-light-skin-tone": true, "person-lifting-weights-medium-light-skin-tone": true,
        "person-lifting-weights-medium-skin-tone": true, "person-lifting-weights-medium-dark-skin-tone": true, "person-lifting-weights-dark-skin-tone": true, "man-lifting-weights": true, "man-lifting-weights-light-skin-tone": true, "man-lifting-weights-medium-light-skin-tone": true,
        "man-lifting-weights-medium-skin-tone": true, "man-lifting-weights-medium-dark-skin-tone": true, "man-lifting-weights-dark-skin-tone": true, "woman-lifting-weights": true, "woman-lifting-weights-light-skin-tone": true, "woman-lifting-weights-medium-light-skin-tone": true,
        "woman-lifting-weights-medium-skin-tone": true, "woman-lifting-weights-medium-dark-skin-tone": true, "woman-lifting-weights-dark-skin-tone": true, "person-biking": true, "person-biking-light-skin-tone": true, "person-biking-medium-light-skin-tone": true,
        "person-biking-medium-skin-tone": true, "person-biking-medium-dark-skin-tone": true, "person-biking-dark-skin-tone": true, "man-biking": true, "man-biking-light-skin-tone": true, "man-biking-medium-light-skin-tone": true, "man-biking-medium-skin-tone": true,
        "man-biking-medium-dark-skin-tone": true, "man-biking-dark-skin-tone": true, "woman-biking": true, "woman-biking-light-skin-tone": true, "woman-biking-medium-light-skin-tone": true, "woman-biking-medium-skin-tone": true, "woman-biking-medium-dark-skin-tone": true,
        "woman-biking-dark-skin-tone": true, "person-mountain-biking": true, "person-mountain-biking-light-skin-tone": true, "person-mountain-biking-medium-light-skin-tone": true, "person-mountain-biking-medium-skin-tone": true, "person-mountain-biking-medium-dark-skin-tone": true,
        "person-mountain-biking-dark-skin-tone": true, "man-mountain-biking": true, "man-mountain-biking-light-skin-tone": true, "man-mountain-biking-medium-light-skin-tone": true, "man-mountain-biking-medium-skin-tone": true, "man-mountain-biking-medium-dark-skin-tone": true,
        "man-mountain-biking-dark-skin-tone": true, "woman-mountain-biking": true, "woman-mountain-biking-light-skin-tone": true, "woman-mountain-biking-medium-light-skin-tone": true, "woman-mountain-biking-medium-skin-tone": true, "woman-mountain-biking-medium-dark-skin-tone": true,
        "woman-mountain-biking-dark-skin-tone": true, "racing-car": true, "motorcycle": true, "person-cartwheeling": true, "person-cartwheeling-light-skin-tone": true, "person-cartwheeling-medium-light-skin-tone": true, "person-cartwheeling-medium-skin-tone": true,
        "person-cartwheeling-medium-dark-skin-tone": true, "person-cartwheeling-dark-skin-tone": true, "man-cartwheeling": true, "man-cartwheeling-light-skin-tone": true, "man-cartwheeling-medium-light-skin-tone": true, "man-cartwheeling-medium-skin-tone": true,
        "man-cartwheeling-medium-dark-skin-tone": true, "man-cartwheeling-dark-skin-tone": true, "woman-cartwheeling": true, "woman-cartwheeling-light-skin-tone": true, "woman-cartwheeling-medium-light-skin-tone": true, "woman-cartwheeling-medium-skin-tone": true,
        "woman-cartwheeling-medium-dark-skin-tone": true, "woman-cartwheeling-dark-skin-tone": true, "people-wrestling": true, "men-wrestling": true, "women-wrestling": true, "person-playing-water-polo": true, "person-playing-water-polo-light-skin-tone": true,
        "person-playing-water-polo-medium-light-skin-tone": true, "person-playing-water-polo-medium-skin-tone": true, "person-playing-water-polo-medium-dark-skin-tone": true, "person-playing-water-polo-dark-skin-tone": true, "man-playing-water-polo": true,
        "man-playing-water-polo-light-skin-tone": true, "man-playing-water-polo-medium-light-skin-tone": true, "man-playing-water-polo-medium-skin-tone": true, "man-playing-water-polo-medium-dark-skin-tone": true, "man-playing-water-polo-dark-skin-tone": true,
        "woman-playing-water-polo": true, "woman-playing-water-polo-light-skin-tone": true, "woman-playing-water-polo-medium-light-skin-tone": true, "woman-playing-water-polo-medium-skin-tone": true, "woman-playing-water-polo-medium-dark-skin-tone": true,
        "woman-playing-water-polo-dark-skin-tone": true, "person-playing-handball": true, "person-playing-handball-light-skin-tone": true, "person-playing-handball-medium-light-skin-tone": true, "person-playing-handball-medium-skin-tone": true,
        "person-playing-handball-medium-dark-skin-tone": true, "person-playing-handball-dark-skin-tone": true, "man-playing-handball": true, "man-playing-handball-light-skin-tone": true, "man-playing-handball-medium-light-skin-tone": true, "man-playing-handball-medium-skin-tone": true,
        "man-playing-handball-medium-dark-skin-tone": true, "man-playing-handball-dark-skin-tone": true, "woman-playing-handball": true, "woman-playing-handball-light-skin-tone": true, "woman-playing-handball-medium-light-skin-tone": true, "woman-playing-handball-medium-skin-tone": true,
        "woman-playing-handball-medium-dark-skin-tone": true, "woman-playing-handball-dark-skin-tone": true, "person-juggling": true, "person-juggling-light-skin-tone": true, "person-juggling-medium-light-skin-tone": true, "person-juggling-medium-skin-tone": true,
        "person-juggling-medium-dark-skin-tone": true, "person-juggling-dark-skin-tone": true, "man-juggling": true, "man-juggling-light-skin-tone": true, "man-juggling-medium-light-skin-tone": true, "man-juggling-medium-skin-tone": true, "man-juggling-medium-dark-skin-tone": true,
        "man-juggling-dark-skin-tone": true, "woman-juggling": true, "woman-juggling-light-skin-tone": true, "woman-juggling-medium-light-skin-tone": true, "woman-juggling-medium-skin-tone": true, "woman-juggling-medium-dark-skin-tone": true, "woman-juggling-dark-skin-tone": true,
        "man-and-woman-holding-hands": true, "two-men-holding-hands": true, "two-women-holding-hands": true, "kiss": true, "kiss-woman,-man": true, "kiss-man,-man": true, "kiss-woman,-woman": true, "couple-with-heart": true, "couple-with-heart-woman,-man": true,
        "couple-with-heart-man,-man": true, "couple-with-heart-woman,-woman": true, "family": true, "family-man,-woman,-boy": true, "family-man,-woman,-girl": true, "family-man,-woman,-girl,-boy": true, "family-man,-woman,-boy,-boy": true, "family-man,-woman,-girl,-girl": true,
        "family-man,-man,-boy": true, "family-man,-man,-girl": true, "family-man,-man,-girl,-boy": true, "family-man,-man,-boy,-boy": true, "family-man,-man,-girl,-girl": true, "family-woman,-woman,-boy": true, "family-woman,-woman,-girl": true, "family-woman,-woman,-girl,-boy": true,
        "family-woman,-woman,-boy,-boy": true, "family-woman,-woman,-girl,-girl": true, "family-man,-boy": true, "family-man,-boy,-boy": true, "family-man,-girl": true, "family-man,-girl,-boy": true, "family-man,-girl,-girl": true, "family-woman,-boy": true,
        "family-woman,-boy,-boy": true, "family-woman,-girl": true, "family-woman,-girl,-boy": true, "family-woman,-girl,-girl": true, "selfie": true, "selfie-light-skin-tone": true, "selfie-medium-light-skin-tone": true, "selfie-medium-skin-tone": true,
        "selfie-medium-dark-skin-tone": true, "selfie-dark-skin-tone": true, "flexed-biceps": true, "flexed-biceps-light-skin-tone": true, "flexed-biceps-medium-light-skin-tone": true, "flexed-biceps-medium-skin-tone": true, "flexed-biceps-medium-dark-skin-tone": true,
        "flexed-biceps-dark-skin-tone": true, "backhand-index-pointing-left": true, "backhand-index-pointing-left-light-skin-tone": true, "backhand-index-pointing-left-medium-light-skin-tone": true, "backhand-index-pointing-left-medium-skin-tone": true,
        "backhand-index-pointing-left-medium-dark-skin-tone": true, "backhand-index-pointing-left-dark-skin-tone": true, "backhand-index-pointing-right": true, "backhand-index-pointing-right-light-skin-tone": true, "backhand-index-pointing-right-medium-light-skin-tone": true,
        "backhand-index-pointing-right-medium-skin-tone": true, "backhand-index-pointing-right-medium-dark-skin-tone": true, "backhand-index-pointing-right-dark-skin-tone": true, "index-pointing-up": true, "index-pointing-up-light-skin-tone": true,
        "index-pointing-up-medium-light-skin-tone": true, "index-pointing-up-medium-skin-tone": true, "index-pointing-up-medium-dark-skin-tone": true, "index-pointing-up-dark-skin-tone": true, "backhand-index-pointing-up": true, "backhand-index-pointing-up-light-skin-tone": true,
        "backhand-index-pointing-up-medium-light-skin-tone": true, "backhand-index-pointing-up-medium-skin-tone": true, "backhand-index-pointing-up-medium-dark-skin-tone": true, "backhand-index-pointing-up-dark-skin-tone": true, "middle-finger": true, "middle-finger-light-skin-tone": true,
        "middle-finger-medium-light-skin-tone": true, "middle-finger-medium-skin-tone": true, "middle-finger-medium-dark-skin-tone": true, "middle-finger-dark-skin-tone": true, "backhand-index-pointing-down": true, "backhand-index-pointing-down-light-skin-tone": true,
        "backhand-index-pointing-down-medium-light-skin-tone": true, "backhand-index-pointing-down-medium-skin-tone": true, "backhand-index-pointing-down-medium-dark-skin-tone": true, "backhand-index-pointing-down-dark-skin-tone": true, "victory-hand": true,
        "victory-hand-light-skin-tone": true, "victory-hand-medium-light-skin-tone": true, "victory-hand-medium-skin-tone": true, "victory-hand-medium-dark-skin-tone": true, "victory-hand-dark-skin-tone": true, "crossed-fingers": true, "crossed-fingers-light-skin-tone": true,
        "crossed-fingers-medium-light-skin-tone": true, "crossed-fingers-medium-skin-tone": true, "crossed-fingers-medium-dark-skin-tone": true, "crossed-fingers-dark-skin-tone": true, "vulcan-salute": true, "vulcan-salute-light-skin-tone": true,
        "vulcan-salute-medium-light-skin-tone": true, "vulcan-salute-medium-skin-tone": true, "vulcan-salute-medium-dark-skin-tone": true, "vulcan-salute-dark-skin-tone": true, "sign-of-the-horns": true, "sign-of-the-horns-light-skin-tone": true,
        "sign-of-the-horns-medium-light-skin-tone": true, "sign-of-the-horns-medium-skin-tone": true, "sign-of-the-horns-medium-dark-skin-tone": true, "sign-of-the-horns-dark-skin-tone": true, "call-me-hand": true, "call-me-hand-light-skin-tone": true,
        "call-me-hand-medium-light-skin-tone": true, "call-me-hand-medium-skin-tone": true, "call-me-hand-medium-dark-skin-tone": true, "call-me-hand-dark-skin-tone": true, "hand-with-fingers-splayed": true, "hand-with-fingers-splayed-light-skin-tone": true,
        "hand-with-fingers-splayed-medium-light-skin-tone": true, "hand-with-fingers-splayed-medium-skin-tone": true, "hand-with-fingers-splayed-medium-dark-skin-tone": true, "hand-with-fingers-splayed-dark-skin-tone": true, "raised-hand": true, "raised-hand-light-skin-tone": true,
        "raised-hand-medium-light-skin-tone": true, "raised-hand-medium-skin-tone": true, "raised-hand-medium-dark-skin-tone": true, "raised-hand-dark-skin-tone": true, "ok-hand": true, "ok-hand-light-skin-tone": true, "ok-hand-medium-light-skin-tone": true,
        "ok-hand-medium-skin-tone": true, "ok-hand-medium-dark-skin-tone": true, "ok-hand-dark-skin-tone": true, "thumbs-up": true, "thumbs-up-light-skin-tone": true, "thumbs-up-medium-light-skin-tone": true, "thumbs-up-medium-skin-tone": true,
        "thumbs-up-medium-dark-skin-tone": true, "thumbs-up-dark-skin-tone": true, "thumbs-down": true, "thumbs-down-light-skin-tone": true, "thumbs-down-medium-light-skin-tone": true, "thumbs-down-medium-skin-tone": true, "thumbs-down-medium-dark-skin-tone": true,
        "thumbs-down-dark-skin-tone": true, "raised-fist": true, "raised-fist-light-skin-tone": true, "raised-fist-medium-light-skin-tone": true, "raised-fist-medium-skin-tone": true, "raised-fist-medium-dark-skin-tone": true, "raised-fist-dark-skin-tone": true,
        "oncoming-fist": true, "oncoming-fist-light-skin-tone": true, "oncoming-fist-medium-light-skin-tone": true, "oncoming-fist-medium-skin-tone": true, "oncoming-fist-medium-dark-skin-tone": true, "oncoming-fist-dark-skin-tone": true, "left-facing-fist": true,
        "left-facing-fist-light-skin-tone": true, "left-facing-fist-medium-light-skin-tone": true, "left-facing-fist-medium-skin-tone": true, "left-facing-fist-medium-dark-skin-tone": true, "left-facing-fist-dark-skin-tone": true, "right-facing-fist": true,
        "right-facing-fist-light-skin-tone": true, "right-facing-fist-medium-light-skin-tone": true, "right-facing-fist-medium-skin-tone": true, "right-facing-fist-medium-dark-skin-tone": true, "right-facing-fist-dark-skin-tone": true, "raised-back-of-hand": true,
        "raised-back-of-hand-light-skin-tone": true, "raised-back-of-hand-medium-light-skin-tone": true, "raised-back-of-hand-medium-skin-tone": true, "raised-back-of-hand-medium-dark-skin-tone": true, "raised-back-of-hand-dark-skin-tone": true, "waving-hand": true,
        "waving-hand-light-skin-tone": true, "waving-hand-medium-light-skin-tone": true, "waving-hand-medium-skin-tone": true, "waving-hand-medium-dark-skin-tone": true, "waving-hand-dark-skin-tone": true, "love-you-gesture": true, "love-you-gesture-light-skin-tone": true,
        "love-you-gesture-medium-light-skin-tone": true, "love-you-gesture-medium-skin-tone": true, "love-you-gesture-medium-dark-skin-tone": true, "love-you-gesture-dark-skin-tone": true, "writing-hand": true, "writing-hand-light-skin-tone": true,
        "writing-hand-medium-light-skin-tone": true, "writing-hand-medium-skin-tone": true, "writing-hand-medium-dark-skin-tone": true, "writing-hand-dark-skin-tone": true, "clapping-hands": true, "clapping-hands-light-skin-tone": true, "clapping-hands-medium-light-skin-tone": true,
        "clapping-hands-medium-skin-tone": true, "clapping-hands-medium-dark-skin-tone": true, "clapping-hands-dark-skin-tone": true, "open-hands": true, "open-hands-light-skin-tone": true, "open-hands-medium-light-skin-tone": true, "open-hands-medium-skin-tone": true,
        "open-hands-medium-dark-skin-tone": true, "open-hands-dark-skin-tone": true, "raising-hands": true, "raising-hands-light-skin-tone": true, "raising-hands-medium-light-skin-tone": true, "raising-hands-medium-skin-tone": true, "raising-hands-medium-dark-skin-tone": true,
        "raising-hands-dark-skin-tone": true, "palms-up-together": true, "palms-up-together-light-skin-tone": true, "palms-up-together-medium-light-skin-tone": true, "palms-up-together-medium-skin-tone": true, "palms-up-together-medium-dark-skin-tone": true,
        "palms-up-together-dark-skin-tone": true, "folded-hands": true, "folded-hands-light-skin-tone": true, "folded-hands-medium-light-skin-tone": true, "folded-hands-medium-skin-tone": true, "folded-hands-medium-dark-skin-tone": true, "folded-hands-dark-skin-tone": true,
        "handshake": true, "nail-polish": true, "nail-polish-light-skin-tone": true, "nail-polish-medium-light-skin-tone": true, "nail-polish-medium-skin-tone": true, "nail-polish-medium-dark-skin-tone": true, "nail-polish-dark-skin-tone": true, "ear": true,
        "ear-light-skin-tone": true, "ear-medium-light-skin-tone": true, "ear-medium-skin-tone": true, "ear-medium-dark-skin-tone": true, "ear-dark-skin-tone": true, "nose": true, "nose-light-skin-tone": true, "nose-medium-light-skin-tone": true, "nose-medium-skin-tone": true,
        "nose-medium-dark-skin-tone": true, "nose-dark-skin-tone": true, "footprints": true, "eyes": true, "eye": true, "eye-in-speech-bubble": true, "brain": true, "tongue": true, "mouth": true, "kiss-mark": true, "heart-with-arrow": true, "red-heart": true, "beating-heart": true,
        "broken-heart": true, "two-hearts": true, "sparkling-heart": true, "growing-heart": true, "blue-heart": true, "green-heart": true, "yellow-heart": true, "orange-heart": true, "purple-heart": true, "black-heart": true, "heart-with-ribbon": true, "revolving-hearts": true,
        "heart-decoration": true, "heavy-heart-exclamation": true, "love-letter": true, "zzz": true, "anger-symbol": true, "bomb": true, "collision": true, "sweat-droplets": true, "dashing-away": true, "dizzy": true, "speech-balloon": true, "left-speech-bubble": true,
        "right-anger-bubble": true, "thought-balloon": true, "hole": true, "glasses": true, "sunglasses": true, "necktie": true, "t-shirt": true, "jeans": true, "scarf": true, "gloves": true, "coat": true, "socks": true, "dress": true, "kimono": true, "bikini": true,
        "womans-clothes": true, "purse": true, "handbag": true, "clutch-bag": true, "shopping-bags": true, "school-backpack": true, "mans-shoe": true, "running-shoe": true, "high-heeled-shoe": true, "womans-sandal": true, "womans-boot": true, "crown": true, "womans-hat": true,
        "top-hat": true, "graduation-cap": true, "billed-cap": true, "rescue-workers-helmet": true, "prayer-beads": true, "lipstick": true, "ring": true, "gem-stone": true, "monkey-face": true, "monkey": true, "gorilla": true, "dog-face": true, "dog": true, "poodle": true,
        "wolf-face": true, "fox-face": true, "cat-face": true, "cat": true, "lion-face": true, "tiger-face": true, "tiger": true, "leopard": true, "horse-face": true, "horse": true, "unicorn-face": true, "zebra": true, "deer": true, "cow-face": true, "ox": true,
        "water-buffalo": true, "cow": true, "pig-face": true, "pig": true, "boar": true, "pig-nose": true, "ram": true, "ewe": true, "goat": true, "camel": true, "two-hump-camel": true, "giraffe": true, "elephant": true, "rhinoceros": true, "mouse-face": true, "mouse": true,
        "rat": true, "hamster-face": true, "rabbit-face": true, "rabbit": true, "chipmunk": true, "hedgehog": true, "bat": true, "bear-face": true, "koala": true, "panda-face": true, "paw-prints": true, "turkey": true, "chicken": true, "rooster": true, "hatching-chick": true,
        "baby-chick": true, "front-facing-baby-chick": true, "bird": true, "penguin": true, "dove": true, "eagle": true, "duck": true, "owl": true, "frog-face": true, "crocodile": true, "turtle": true, "lizard": true, "snake": true, "dragon-face": true, "dragon": true,
        "sauropod": true, "t-rex": true, "spouting-whale": true, "whale": true, "dolphin": true, "fish": true, "tropical-fish": true, "blowfish": true, "shark": true, "octopus": true, "spiral-shell": true, "crab": true, "shrimp": true, "squid": true, "snail": true,
        "butterfly": true, "bug": true, "ant": true, "honeybee": true, "lady-beetle": true, "cricket": true, "spider": true, "spider-web": true, "scorpion": true, "bouquet": true, "cherry-blossom": true, "white-flower": true, "rosette": true, "rose": true, "wilted-flower": true,
        "hibiscus": true, "sunflower": true, "blossom": true, "tulip": true, "seedling": true, "evergreen-tree": true, "deciduous-tree": true, "palm-tree": true, "cactus": true, "sheaf-of-rice": true, "herb": true, "shamrock": true, "four-leaf-clover": true, "maple-leaf": true,
        "fallen-leaf": true, "leaf-fluttering-in-wind": true, "grapes": true, "melon": true, "watermelon": true, "tangerine": true, "lemon": true, "banana": true, "pineapple": true, "red-apple": true, "green-apple": true, "pear": true, "peach": true, "cherries": true,
        "strawberry": true, "kiwi-fruit": true, "tomato": true, "coconut": true, "avocado": true, "eggplant": true, "potato": true, "carrot": true, "ear-of-corn": true, "hot-pepper": true, "cucumber": true, "broccoli": true, "mushroom": true, "peanuts": true, "chestnut": true,
        "bread": true, "croissant": true, "baguette-bread": true, "pretzel": true, "pancakes": true, "cheese-wedge": true, "meat-on-bone": true, "poultry-leg": true, "cut-of-meat": true, "bacon": true, "hamburger": true, "french-fries": true, "pizza": true, "hot-dog": true,
        "sandwich": true, "taco": true, "burrito": true, "stuffed-flatbread": true, "egg": true, "cooking": true, "shallow-pan-of-food": true, "pot-of-food": true, "bowl-with-spoon": true, "green-salad": true, "popcorn": true, "canned-food": true, "bento-box": true,
        "rice-cracker": true, "rice-ball": true, "cooked-rice": true, "curry-rice": true, "steaming-bowl": true, "spaghetti": true, "roasted-sweet-potato": true, "oden": true, "sushi": true, "fried-shrimp": true, "fish-cake-with-swirl": true, "dango": true, "dumpling": true,
        "fortune-cookie": true, "takeout-box": true, "soft-ice-cream": true, "shaved-ice": true, "ice-cream": true, "doughnut": true, "cookie": true, "birthday-cake": true, "shortcake": true, "pie": true, "chocolate-bar": true, "candy": true, "lollipop": true, "custard": true,
        "honey-pot": true, "baby-bottle": true, "glass-of-milk": true, "hot-beverage": true, "teacup-without-handle": true, "sake": true, "bottle-with-popping-cork": true, "wine-glass": true, "cocktail-glass": true, "tropical-drink": true, "beer-mug": true,
        "clinking-beer-mugs": true, "clinking-glasses": true, "tumbler-glass": true, "cup-with-straw": true, "chopsticks": true, "fork-and-knife-with-plate": true, "fork-and-knife": true, "spoon": true, "kitchen-knife": true, "amphora": true, "globe-showing-europe-africa": true,
        "globe-showing-americas": true, "globe-showing-asia-australia": true, "globe-with-meridians": true, "world-map": true, "map-of-japan": true, "snow-capped-mountain": true, "mountain": true, "volcano": true, "mount-fuji": true, "camping": true, "beach-with-umbrella": true,
        "desert": true, "desert-island": true, "national-park": true, "stadium": true, "classical-building": true, "building-construction": true, "houses": true, "derelict-house": true, "house": true, "house-with-garden": true, "office-building": true, "japanese-post-office": true,
        "post-office": true, "hospital": true, "bank": true, "hotel": true, "love-hotel": true, "convenience-store": true, "school": true, "department-store": true, "factory": true, "japanese-castle": true, "castle": true, "wedding": true, "tokyo-tower": true, "statue-of-liberty": true,
        "church": true, "mosque": true, "synagogue": true, "shinto-shrine": true, "kaaba": true, "fountain": true, "tent": true, "foggy": true, "night-with-stars": true, "cityscape": true, "sunrise-over-mountains": true, "sunrise": true, "cityscape-at-dusk": true, "sunset": true,
        "bridge-at-night": true, "hot-springs": true, "milky-way": true, "carousel-horse": true, "ferris-wheel": true, "roller-coaster": true, "barber-pole": true, "circus-tent": true, "locomotive": true, "railway-car": true, "high-speed-train": true, "bullet-train": true,
        "train": true, "metro": true, "light-rail": true, "station": true, "tram": true, "monorail": true, "mountain-railway": true, "tram-car": true, "bus": true, "oncoming-bus": true, "trolleybus": true, "minibus": true, "ambulance": true, "fire-engine": true, "police-car": true,
        "oncoming-police-car": true, "taxi": true, "oncoming-taxi": true, "automobile": true, "oncoming-automobile": true, "sport-utility-vehicle": true, "delivery-truck": true, "articulated-lorry": true, "tractor": true, "bicycle": true, "kick-scooter": true, "motor-scooter": true,
        "bus-stop": true, "motorway": true, "railway-track": true, "oil-drum": true, "fuel-pump": true, "police-car-light": true, "horizontal-traffic-light": true, "vertical-traffic-light": true, "stop-sign": true, "construction": true, "anchor": true, "sailboat": true, "canoe": true,
        "speedboat": true, "passenger-ship": true, "ferry": true, "motor-boat": true, "ship": true, "airplane": true, "small-airplane": true, "airplane-departure": true, "airplane-arrival": true, "seat": true, "helicopter": true, "suspension-railway": true, "mountain-cableway": true,
        "aerial-tramway": true, "satellite": true, "rocket": true, "flying-saucer": true, "bellhop-bell": true, "hourglass-done": true, "hourglass-not-done": true, "watch": true, "alarm-clock": true, "stopwatch": true, "timer-clock": true, "mantelpiece-clock": true,
        "twelve-oclock": true, "twelve-thirty": true, "one-oclock": true, "one-thirty": true, "two-oclock": true, "two-thirty": true, "three-oclock": true, "three-thirty": true, "four-oclock": true, "four-thirty": true, "five-oclock": true, "five-thirty": true, "six-oclock": true,
        "six-thirty": true, "seven-oclock": true, "seven-thirty": true, "eight-oclock": true, "eight-thirty": true, "nine-oclock": true, "nine-thirty": true, "ten-oclock": true, "ten-thirty": true, "eleven-oclock": true, "eleven-thirty": true, "new-moon": true,
        "waxing-crescent-moon": true, "first-quarter-moon": true, "waxing-gibbous-moon": true, "full-moon": true, "waning-gibbous-moon": true, "last-quarter-moon": true, "waning-crescent-moon": true, "crescent-moon": true, "new-moon-face": true, "first-quarter-moon-face": true,
        "last-quarter-moon-face": true, "thermometer": true, "sun": true, "full-moon-face": true, "sun-with-face": true, "star": true, "glowing-star": true, "shooting-star": true, "cloud": true, "sun-behind-cloud": true, "cloud-with-lightning-and-rain": true,
        "sun-behind-small-cloud": true, "sun-behind-large-cloud": true, "sun-behind-rain-cloud": true, "cloud-with-rain": true, "cloud-with-snow": true, "cloud-with-lightning": true, "tornado": true, "fog": true, "wind-face": true, "cyclone": true, "rainbow": true,
        "closed-umbrella": true, "umbrella": true, "umbrella-with-rain-drops": true, "umbrella-on-ground": true, "high-voltage": true, "snowflake": true, "snowman": true, "snowman-without-snow": true, "comet": true, "fire": true, "droplet": true, "water-wave": true,
        "jack-o-lantern": true, "christmas-tree": true, "fireworks": true, "sparkler": true, "sparkles": true, "balloon": true, "party-popper": true, "confetti-ball": true, "tanabata-tree": true, "pine-decoration": true, "japanese-dolls": true, "carp-streamer": true,
        "wind-chime": true, "moon-viewing-ceremony": true, "ribbon": true, "wrapped-gift": true, "reminder-ribbon": true, "admission-tickets": true, "ticket": true, "military-medal": true, "trophy": true, "sports-medal": true, "1st-place-medal": true, "2nd-place-medal": true,
        "3rd-place-medal": true, "soccer-ball": true, "baseball": true, "basketball": true, "volleyball": true, "american-football": true, "rugby-football": true, "tennis": true, "bowling": true, "cricket-game": true, "field-hockey": true, "ice-hockey": true, "ping-pong": true,
        "badminton": true, "boxing-glove": true, "martial-arts-uniform": true, "goal-net": true, "flag-in-hole": true, "ice-skate": true, "fishing-pole": true, "running-shirt": true, "skis": true, "sled": true, "curling-stone": true, "direct-hit": true, "pool-8-ball": true,
        "crystal-ball": true, "video-game": true, "joystick": true, "slot-machine": true, "game-die": true, "spade-suit": true, "heart-suit": true, "diamond-suit": true, "club-suit": true, "chess-pawn": true, "joker": true, "mahjong-red-dragon": true, "flower-playing-cards": true,
        "performing-arts": true, "framed-picture": true, "artist-palette": true, "muted-speaker": true, "speaker-low-volume": true, "speaker-medium-volume": true, "speaker-high-volume": true, "loudspeaker": true, "megaphone": true, "postal-horn": true, "bell": true,
        "bell-with-slash": true, "musical-score": true, "musical-note": true, "musical-notes": true, "studio-microphone": true, "level-slider": true, "control-knobs": true, "microphone": true, "headphone": true, "radio": true, "saxophone": true, "guitar": true,
        "musical-keyboard": true, "trumpet": true, "violin": true, "drum": true, "mobile-phone": true, "mobile-phone-with-arrow": true, "telephone": true, "telephone-receiver": true, "pager": true, "fax-machine": true, "battery": true, "electric-plug": true,
        "laptop-computer": true, "desktop-computer": true, "printer": true, "keyboard": true, "computer-mouse": true, "trackball": true, "computer-disk": true, "floppy-disk": true, "optical-disk": true, "dvd": true, "movie-camera": true, "film-frames": true,
        "film-projector": true, "clapper-board": true, "television": true, "camera": true, "camera-with-flash": true, "video-camera": true, "videocassette": true, "magnifying-glass-tilted-left": true, "magnifying-glass-tilted-right": true, "candle": true, "light-bulb": true,
        "flashlight": true, "red-paper-lantern": true, "notebook-with-decorative-cover": true, "closed-book": true, "open-book": true, "green-book": true, "blue-book": true, "orange-book": true, "books": true, "notebook": true, "ledger": true, "page-with-curl": true,
        "scroll": true, "page-facing-up": true, "newspaper": true, "rolled-up-newspaper": true, "bookmark-tabs": true, "bookmark": true, "label": true, "money-bag": true, "yen-banknote": true, "dollar-banknote": true, "euro-banknote": true, "pound-banknote": true,
        "money-with-wings": true, "credit-card": true, "chart-increasing-with-yen": true, "currency-exchange": true, "heavy-dollar-sign": true, "envelope": true, "e-mail": true, "incoming-envelope": true, "envelope-with-arrow": true, "outbox-tray": true, "inbox-tray": true,
        "package": true, "closed-mailbox-with-raised-flag": true, "closed-mailbox-with-lowered-flag": true, "open-mailbox-with-raised-flag": true, "open-mailbox-with-lowered-flag": true, "postbox": true, "ballot-box-with-ballot": true, "pencil": true, "black-nib": true,
        "fountain-pen": true, "pen": true, "paintbrush": true, "crayon": true, "memo": true, "briefcase": true, "file-folder": true, "open-file-folder": true, "card-index-dividers": true, "calendar": true, "tear-off-calendar": true, "spiral-notepad": true, "spiral-calendar": true,
        "card-index": true, "chart-increasing": true, "chart-decreasing": true, "bar-chart": true, "clipboard": true, "pushpin": true, "round-pushpin": true, "paperclip": true, "linked-paperclips": true, "straight-ruler": true, "triangular-ruler": true, "scissors": true,
        "card-file-box": true, "file-cabinet": true, "wastebasket": true, "locked": true, "unlocked": true, "locked-with-pen": true, "locked-with-key": true, "key": true, "old-key": true, "hammer": true, "pick": true, "hammer-and-pick": true, "hammer-and-wrench": true,
        "dagger": true, "crossed-swords": true, "pistol": true, "bow-and-arrow": true, "shield": true, "wrench": true, "nut-and-bolt": true, "gear": true, "clamp": true, "balance-scale": true, "link": true, "chains": true, "alembic": true, "microscope": true, "telescope": true,
        "satellite-antenna": true, "syringe": true, "pill": true, "door": true, "bed": true, "couch-and-lamp": true, "toilet": true, "shower": true, "bathtub": true, "shopping-cart": true, "cigarette": true, "coffin": true, "funeral-urn": true, "moai": true, "atm-sign": true,
        "litter-in-bin-sign": true, "potable-water": true, "wheelchair-symbol": true, "mens-room": true, "womens-room": true, "restroom": true, "baby-symbol": true, "water-closet": true, "passport-control": true, "customs": true, "baggage-claim": true, "left-luggage": true,
        "warning": true, "children-crossing": true, "no-entry": true, "prohibited": true, "no-bicycles": true, "no-smoking": true, "no-littering": true, "non-potable-water": true, "no-pedestrians": true, "no-mobile-phones": true, "no-one-under-eighteen": true, "radioactive": true,
        "biohazard": true, "up-arrow": true, "up-right-arrow": true, "right-arrow": true, "down-right-arrow": true, "down-arrow": true, "down-left-arrow": true, "left-arrow": true, "up-left-arrow": true, "up-down-arrow": true, "left-right-arrow": true,
        "right-arrow-curving-left": true, "left-arrow-curving-right": true, "right-arrow-curving-up": true, "right-arrow-curving-down": true, "clockwise-vertical-arrows": true, "counterclockwise-arrows-button": true, "back-arrow": true, "end-arrow": true, "on!-arrow": true,
        "soon-arrow": true, "top-arrow": true, "place-of-worship": true, "atom-symbol": true, "om": true, "star-of-david": true, "wheel-of-dharma": true, "yin-yang": true, "latin-cross": true, "orthodox-cross": true, "star-and-crescent": true, "peace-symbol": true, "menorah": true,
        "dotted-six-pointed-star": true, "aries": true, "taurus": true, "gemini": true, "cancer": true, "leo": true, "virgo": true, "libra": true, "scorpio": true, "sagittarius": true, "capricorn": true, "aquarius": true, "pisces": true, "ophiuchus": true,
        "shuffle-tracks-button": true, "repeat-button": true, "repeat-single-button": true, "play-button": true, "fast-forward-button": true, "next-track-button": true, "play-or-pause-button": true, "reverse-button": true, "fast-reverse-button": true, "last-track-button": true,
        "upwards-button": true, "fast-up-button": true, "downwards-button": true, "fast-down-button": true, "pause-button": true, "stop-button": true, "record-button": true, "eject-button": true, "cinema": true, "dim-button": true, "bright-button": true, "antenna-bars": true,
        "vibration-mode": true, "mobile-phone-off": true, "female-sign": true, "male-sign": true, "medical-symbol": true, "infinity": true, "recycling-symbol": true, "fleur-de-lis": true, "trident-emblem": true, "name-badge": true, "japanese-symbol-for-beginner": true,
        "heavy-large-circle": true, "white-heavy-check-mark": true, "ballot-box-with-check": true, "heavy-check-mark": true, "heavy-multiplication-x": true, "cross-mark": true, "cross-mark-button": true, "heavy-plus-sign": true, "heavy-minus-sign": true, "heavy-division-sign": true,
        "curly-loop": true, "double-curly-loop": true, "part-alternation-mark": true, "eight-spoked-asterisk": true, "eight-pointed-star": true, "sparkle": true, "double-exclamation-mark": true, "exclamation-question-mark": true, "question-mark": true, "white-question-mark": true,
        "white-exclamation-mark": true, "exclamation-mark": true, "wavy-dash": true, "copyright": true, "registered": true, "trade-mark": true, "keycap--": true, "keycap-*": true, "keycap-0": true, "keycap-1": true, "keycap-2": true, "keycap-3": true, "keycap-4": true,
        "keycap-5": true, "keycap-6": true, "keycap-7": true, "keycap-8": true, "keycap-9": true, "keycap-10": true, "hundred-points": true, "input-latin-uppercase": true, "input-latin-lowercase": true, "input-numbers": true, "input-symbols": true, "input-latin-letters": true,
        "a-button": true, "ab-button": true, "b-button": true, "cl-button": true, "cool-button": true, "free-button": true, "information": true, "id-button": true, "circled-m": true, "new-button": true, "ng-button": true, "o-button": true, "ok-button": true, "p-button": true,
        "sos-button": true, "up!-button": true, "vs-button": true, "japanese-here-button": true, "japanese-service-charge-button": true, "japanese-monthly-amount-button": true, "japanese-not-free-of-charge-button": true, "japanese-reserved-button": true,
        "japanese-bargain-button": true, "japanese-discount-button": true, "japanese-free-of-charge-button": true, "japanese-prohibited-button": true, "japanese-acceptable-button": true, "japanese-application-button": true, "japanese-passing-grade-button": true,
        "japanese-vacancy-button": true, "japanese-congratulations-button": true, "japanese-secret-button": true, "japanese-open-for-business-button": true, "japanese-no-vacancy-button": true, "black-small-square": true, "white-small-square": true, "white-medium-square": true,
        "black-medium-square": true, "white-medium-small-square": true, "black-medium-small-square": true, "black-large-square": true, "white-large-square": true, "large-orange-diamond": true, "large-blue-diamond": true, "small-orange-diamond": true, "small-blue-diamond": true,
        "red-triangle-pointed-up": true, "red-triangle-pointed-down": true, "diamond-with-a-dot": true, "radio-button": true, "black-square-button": true, "white-square-button": true, "white-circle": true, "black-circle": true, "red-circle": true, "blue-circle": true,
        "chequered-flag": true, "triangular-flag": true, "crossed-flags": true, "black-flag": true, "white-flag": true, "rainbow-flag": true, "pirate-flag": true, "ascension-island": true, "andorra": true, "united-arab-emirates": true, "afghanistan": true, "antigua-and-barbuda": true,
        "anguilla": true, "albania": true, "armenia": true, "angola": true, "antarctica": true, "argentina": true, "american-samoa": true, "austria": true, "australia": true, "aruba": true, "ã…land-islands": true, "azerbaijan": true, "bosnia-and-herzegovina": true, "barbados": true,
        "bangladesh": true, "belgium": true, "burkina-faso": true, "bulgaria": true, "bahrain": true, "burundi": true, "benin": true, "st-barthã©lemy": true, "bermuda": true, "brunei": true, "bolivia": true, "caribbean-netherlands": true, "brazil": true, "bahamas": true,
        "bhutan": true, "bouvet-island": true, "botswana": true, "belarus": true, "belize": true, "canada": true, "cocos-aka-keeling-islands": true, "congo---kinshasa": true, "central-african-republic": true, "congo---brazzaville": true, "switzerland": true, "cã´te-divoire": true,
        "cook-islands": true, "chile": true, "cameroon": true, "china": true, "colombia": true, "clipperton-island": true, "costa-rica": true, "cuba": true, "cape-verde": true, "curaã§ao": true, "christmas-island": true, "cyprus": true, "czechia": true, "germany": true,
        "diego-garcia": true, "djibouti": true, "denmark": true, "dominica": true, "dominican-republic": true, "algeria": true, "ceuta-and-melilla": true, "ecuador": true, "estonia": true, "egypt": true, "western-sahara": true, "eritrea": true, "spain": true, "ethiopia": true,
        "european-union": true, "finland": true, "fiji": true, "falkland-islands": true, "micronesia": true, "faroe-islands": true, "france": true, "gabon": true, "united-kingdom": true, "grenada": true, "georgia": true, "french-guiana": true, "guernsey": true, "ghana": true,
        "gibraltar": true, "greenland": true, "gambia": true, "guinea": true, "guadeloupe": true, "equatorial-guinea": true, "greece": true, "south-georgia-and-south-sandwich-islands": true, "guatemala": true, "guam": true, "guinea-bissau": true, "guyana": true, "hong-kong-sar-china": true,
        "heard-and-mcdonald-islands": true, "honduras": true, "croatia": true, "haiti": true, "hungary": true, "canary-islands": true, "indonesia": true, "ireland": true, "israel": true, "isle-of-man": true, "india": true, "british-indian-ocean-territory": true, "iraq": true,
        "iran": true, "iceland": true, "italy": true, "jersey": true, "jamaica": true, "jordan": true, "japan": true, "kenya": true, "kyrgyzstan": true, "cambodia": true, "kiribati": true, "comoros": true, "st-kitts-and-nevis": true, "north-korea": true, "south-korea": true,
        "kuwait": true, "cayman-islands": true, "kazakhstan": true, "laos": true, "lebanon": true, "st-lucia": true, "liechtenstein": true, "sri-lanka": true, "liberia": true, "lesotho": true, "lithuania": true, "luxembourg": true, "latvia": true, "libya": true, "morocco": true,
        "monaco": true, "moldova": true, "montenegro": true, "st-martin": true, "madagascar": true, "marshall-islands": true, "macedonia": true, "mali": true, "myanmar-aka-burma": true, "mongolia": true, "macau-sar-china": true, "northern-mariana-islands": true, "martinique": true,
        "mauritania": true, "montserrat": true, "malta": true, "mauritius": true, "maldives": true, "malawi": true, "mexico": true, "malaysia": true, "mozambique": true, "namibia": true, "new-caledonia": true, "niger": true, "norfolk-island": true, "nigeria": true, "nicaragua": true,
        "netherlands": true, "norway": true, "nepal": true, "nauru": true, "niue": true, "new-zealand": true, "oman": true, "panama": true, "peru": true, "french-polynesia": true, "papua-new-guinea": true, "philippines": true, "pakistan": true, "poland": true,
        "st-pierre-and-miquelon": true, "pitcairn-islands": true, "puerto-rico": true, "palestinian-territories": true, "portugal": true, "palau": true, "paraguay": true, "qatar": true, "rã©union": true, "romania": true, "serbia": true, "russia": true, "rwanda": true,
        "saudi-arabia": true, "solomon-islands": true, "seychelles": true, "sudan": true, "sweden": true, "singapore": true, "st-helena": true, "slovenia": true, "svalbard-and-jan-mayen": true, "slovakia": true, "sierra-leone": true, "san-marino": true, "senegal": true,
        "somalia": true, "suriname": true, "south-sudan": true, "sao-tome-and-pri­ncipe": true, "el-salvador": true, "sint-maarten": true, "syria": true, "swaziland": true, "tristan-da-cunha": true, "turks-and-caicos-islands": true, "chad": true, "french-southern-territories": true,
        "togo": true, "thailand": true, "tajikistan": true, "tokelau": true, "timor-leste": true, "turkmenistan": true, "tunisia": true, "tonga": true, "turkey-country": true, "trinidad-and-tobago": true, "tuvalu": true, "taiwan": true, "tanzania": true, "ukraine": true, "uganda": true,
        "u.s-outlying-islands": true, "united-nations": true, "united-states": true, "uruguay": true, "uzbekistan": true, "vatican-city": true, "st-vincent-and-grenadines": true, "venezuela": true, "british-virgin-islands": true, "u.s-virgin-islands": true, "vietnam": true,
        "vanuatu": true, "wallis-and-futuna": true, "samoa": true, "kosovo": true, "yemen": true, "mayotte": true, "south-africa": true, "zambia": true, "zimbabwe": true, "england": true, "scotland": true, "wales": true
    };
    var validv4c = {
        "ducktart": "dooktart.png", "ready": "ready.gif", "birry": "ztop.gif", "vdog": "cat.gif", "gaben": "zgabe.gif", "3s": "seal.png", "burd": "birdy.gif", "snoop": "snoop.gif", "jimmies": "jimmy.gif", "sanic": "sonicx.png", "burgirl": "ss.gif", "dilbert": "dilbert.gif",
        "deepdarkfantasy": "fantasy.gif", "bioware": "biogurl.gif", "shazbot": "33.png", "bestkorea": "kim.gif", "hitoame": "shower.gif", "duane": "duane.gif", "keke": "keke6.png", "uncle": "VffoS.jpg", "reshiram": "ee.gif", "push": "push.gif", "autism": "a.gif", "juggalo": "ll.gif",
        "stanza": "heh.png", "bestgames": "pstriple.png", "gamestop": "spekettle.gif", "teto": "oz.gif", "fothegrove": "grove.gif", "aliens": "aliens.gif", "go": "zgo.gif", "pomf": "pomf.png", "kreayshawn": "kray.png", "bodywash": "bodywash.png", "goblinu": "zgobz.jpg",
        "feel": "feel.png", "valien": "ssd.gif", "2spooky4me": "spooky.gif", "gooby": "o2XNE.jpg", "dosh": "dsdasd.png", "8bitdose": "wee2.gif", "costanza": "heh.png", "america": "america.gif", "babyface": "babyface.gif", "babyguitar": "babyguitar.gif", "bearfight": "bearfight.gif",
        "bogs": "bogs.png", "boom": "boom.png", "brobill": "brobill.gif", "chen": "chen.png", "dante": "dante.png", "data": "data.gif", "datass": "datass.gif", "dewbunker": "dewbunker.gif", "dewritos": "dewritos.jpg", "doingitwell": "doingitwell.png", "doot": "doot.gif",
        "dreck": "dreck.png", "el": "el.gif", "facepalm": "facepalm.png", "feelsgud": "feelsgud.png", "fichdich": "fichdich.png", "fresh": "fresh.gif", "gigaduane": "gigaduane.gif", "happening": "happening.gif", "haveaseat": "haveaseat.png", "heero": "heero.png",
        "idontwantthat": "idontwantthat.png", "jaffa": "jaffa.png", "jew": "jew.gif", "jii": "jii.png", "kek": "kek.png", "kfc": "kfc.gif", "kitty": "kitty.gif", "loading": "loading.gif", "manboss": "manboss.gif", "meeku": "meeku.png", "mfw": "mfw.png", "miku": "miku.gif",
        "miku2": "miku2.gif", "morefresh": "morefresh.gif", "mysides": "mysides.png", "nice": "nice.png", "nofun": "nofun.png", "nogaems": "nogaems.gif", "nope": "nope.gif", "obama": "obama.gif", "ohlawd": "ohlawd.png", "oo": "oo.gif", "osama": "osama.png", "otter": "otter.gif",
        "pekaface": "pekaface.png", "pikminu": "pikminu.png", "plzgo": "plzgo.png", "praise": "praise.png", "pumpkindance": "pumpkindance.gif", "raging": "raging.png", "rattle": "rattle.gif", "ravi": "ravi.gif", "raw": "raw.png", "remove": "remove.gif", "rip": "rip.png",
        "satan": "satan.gif", "science": "science.gif", "skeleton": "skeleton.gif", "slam": "slam.png", "slav": "slav.gif", "spherical": "spherical.png", "spurdance": "spurdance.gif", "spurdo": "spurdo.png", "stepfather": "stepfather.png", "stop": "stop.png", "swerve": "swerve.png",
        "tails": "tails.png", "thed": "thed.png", "turkeyo": "turkey.png", "twerk": "twerk.gif", "tyrone": "tyrone.png", "umirin": "umirin.jpg", "usa": "usa.gif", "wabbit": "wabbit.png", "whatastory": "whatastory.png", "why": "why.png", "wow": "wow.png", "yotsubano": "yotsubano.png",
        "pjsalt": "pjsalt.png", "bongocat": "bongocat.gif"
    };
    var validPony = {
        "ajlie": "a", "priceless": "a", "flutterjerk": "a", "flutterroll": "a", "twipride": "a", "celestiamad": "a", "twicrazy": "a", "spikemeh": "a", "lunateehee": "a", "lunawait": "a", "paperbagderpy": "a", "abmeh": "a", "ajhappy": "a", "pinkiefear": "a",
        "twibeam": "a", "scootaderp": "a", "raritydaww": "a", "scootacheer": "a", "swagintosh": "a", "pinkieawe": "a", "ajsup": "a", "flutterwhoa": "a", "rdcry": "a", "silverspoon": "a", "ohcomeon": "a", "ppcute": "a", "abbored": "a", "rarityreally": "a",
        "raritypaper": "a", "sbbook": "a", "scootaplease": "a", "applegasp": "a", "twiright": "a", "celestiawut": "a", "grannysmith": "a", "rarishock": "a", "shiningarmor": "a", "chrysalis": "a", "cadence": "a", "applederp": "a",

        "rdsitting": "c", "rdhappy": "c", "rdannoyed": "c", "trixiesad": "c", "twismug": "c", "twismile": "c", "twistare": "c", "changeling": "c", "ohhi": "c", "party": "c", "hahaha": "c", "rdscared": "c", "flutterblush": "c", "gross": "c", "derpyhappy": "c",
        "twidaww": "c", "ajfrown": "c", "hmmm": "c", "pinkiejoy": "c", "whattheflut": "c", "raritysad": "c", "fabulous": "c", "derp": "c", "cadencesmile": "c", "louder": "c", "lunasad": "c", "derpyshock": "c", "shiningpride": "c", "pinkamina": "c", "loveme": "c",
        "lunagasp": "c", "fluttercry": "c", "scootaloo": "c", "celestia": "c", "angelglare": "c", "sneakybelle": "c", "allmybits": "c", "zecora": "c", "photofinish": "c", "ppreally": "c",

        "flutterfear": "b", "ppboring": "b", "rarityyell": "b", "fluttershy": "b", "ajcower": "b", "ajsly": "b", "eeyup": "b", "rdsmile": "b", "fluttersrs": "b", "raritydress": "b", "takealetter": "b", "rdwut": "b", "ppshrug": "b", "spikenervous": "b", "noooo": "b",
        "dj": "b", "fluttershh": "b", "flutteryay": "b", "squintyjack": "b", "spikepushy": "b", "ajugh": "b", "raritywut": "b", "dumbfabric": "b", "raritywhy": "b", "trixiesmug": "b", "flutterwink": "b", "rarityannoyed": "b", "soawesome": "b", "ajwut": "b",
        "twisquint": "b", "raritywhine": "b", "rdcool": "b", "abwut": "b", "manspike": "b", "cockatrice": "b", "facehoof": "b", "rarityjudge": "b", "rarityprimp": "b", "twirage": "b", "ppseesyou": "b",

        "stonie": "d", "pinkiehigh": "d", "rbtrippin": "d", "spikehigh": "d", "pervertedaj": "d", "twihigh": "d", "fluttersqueak": "d", "happyrarity": "d", "bakedrarity": "d", "rbhigh": "d", "ajhuh": "d", "flutterfree": "d", "celestreeia": "d", "awwshit": "d",
        "treepony": "d", "rbomg": "d", "mobboss": "d", "opalescence": "d", "sneakiepinkie": "d", "dirigible": "d", "trixiehigh": "d", "twiderp": "d", "whoovesing": "d", "twiheh": "d", "flutterhigh": "d", "derpyhigh": "d", "flutteryeah": "d", "spikegimmie": "d",
        "sirderp": "d", "twiblah": "d", "fluttersmoke": "d", "braeburnhuh": "d", "bakedspike": "d", "lunasly": "d", "derpinkie": "d", "lunasilly": "d", "rbreally": "d", "rarityhuh": "d", "bluebowl": "d",

        "fillytgap": "e", "rdhuh": "e", "snails": "e", "twisad": "e", "lyra": "e", "bonbon": "e", "spitfire": "e", "lunamad": "e", "cutealoo": "e", "happyluna": "e", "sotrue": "e", "discordsad": "e", "wahaha": "e", "sbstare": "e", "berry": "e", "maud": "e",
        "huhhuh": "e", "absmile": "e", "dealwithit": "e", "pinkiepout": "e", "nmm": "e", "whooves": "e", "rdsalute": "e", "twisecret": "e", "octavia": "e", "colgate": "e", "cheerilee": "e", "sunsetshimmer": "e", "ajbaffle": "e", "abhuh": "e", "lily": "e",
        "sunsetsneaky": "e", "twiponder": "e", "spikewtf": "e", "awwyeah": "e", "scootablue": "e", "gilda": "e", "discentia": "e", "macintears": "e", "spikehappy": "e",

        "ppsad": "f", "dt": "f", "sombra": "f", "sbshocked": "f", "guard": "f", "abstern": "f", "apathia": "f", "ajcry": "f", "rarityeww": "f", "flutterkay": "f", "starlightrage": "f", "bulkbiceps": "f", "scootaeww": "f", "discordgrump": "f", "troubleshoes": "f",
        "rdsnrk": "f", "thcalm": "f", "ooh": "f", "raritytired": "f", "notangry": "f", "ajdoubt": "f", "spikewhoa": "f", "wasntme": "f", "twipbbt": "f", "flimflam": "f", "cocosmile": "f", "skeptiloo": "f", "limestonegrin": "f", "raritygrump": "f", "goodjob": "f",
        "flutterhay": "f", "sbwtf": "f", "nightmaregrin": "f", "spikeapproves": "f", "flutternice": "f", "ppdont": "f", "ajgrump": "f", "sgpopcorn": "f", "raritysquee": "f", "gummystare": "f",

        "karma": "g", "discentiajudge": "g", "twisnide": "g", "pinkie": "g", "cococold": "g", "quibble": "g", "rdthis": "g", "flutterbrow": "g", "celestiahurt": "g", "sgconcern": "g", "sbfocus": "g", "sgsneaky": "g", "trixieww": "g", "flutterplz": "g", "emberwtf": "g",
        "sunsetwhyme": "g", "abteehee": "g", "squintyglam": "g", "rdsup": "g", "celestiahappy": "g", "lunagrump": "g", "sgeesh": "g", "twieek": "g", "tempest": "g", "tempestsmile": "g", "squeestar": "g", "appleroll": "g", "spikeholdup": "g", "tempestgaze": "g",
        "squeekiepie": "g", "twisheepish": "g", "skystarfine": "g", "ajeesh": "g", "pinkiesugar": "g", "flutternope": "g", "twishame": "g", "pinkiesmoosh": "g", "starlightspittle": "g", "sunburstnervous": "g", "spikewoke": "g",

        "abgrump": "i", "celestiawink": "i", "celestiasquint": "i", "sunsetgrump": "i", "sunspicious": "i", "twicoffee": "i", "twiomg": "i", "yak": "i", "starlightisee": "i", "yona": "i", "gallus": "i", "sandbaruhh": "i", "silverbored": "i", "ocellus": "i",
        "smolder": "i", "smolderwelp": "i", "silverstream": "i", "ajpuzzle": "i", "pinkieeager": "i", "trixiecheer": "i", "cozyglow": "i", "shiningsmug": "i", "rarischeme": "i", "twipudding": "i", "scootaglance": "i", "crazyglow": "i", "starlightsly": "i",
        "rdeyy": "i", "galluswtf": "i", "twifret": "i", "smolderscowl": "i", "pinkiesmug": "i", "peekaloo": "i", "flutterball": "i"
    };

    var validHotglue = {
        "doge": "1", "fertilemeadors": "1", "game": "1", "henohenomoheji": "1", "lolwut": "1", "moar": "1", "pedobear": "1", "wat": "1", "yaranaika1": "1", "yaranaika2": "1", "derika": "1", "babz": "1", "bson": "1", "shanz": "1", "jamesy": "1",
        "kimjongwhere": "1", "doobie": "1"
    };
    var validYukkuri = {
        "marisa": true, "marisakiss": true, "marisalol": true, "marisablank": true, "marisablush": true, "marisasad": true, "marisacry": true, "marisamad": true, "marisaangry": true, "marisahappy": true, "marisacute": true, "marisawhat": true, "marisaannoy": true,
        "marisanervous": true, "marisashock": true, "marisasmile": true,
        "reimu": true, "reimukiss": true, "reimulol": true, "reimublank": true, "reimublush": true, "reimusad": true, "reimucry": true, "reimumad": true, "reimuangry": true, "reimuhappy": true, "reimucute": true, "reimuwhat": true, "reimuannoy": true, "reimunervous": true,
        "reimushock": true, "reimusmile": true
    };
    var validAnimu = {
        // r/anime
        "asuka-shouting": "5", "chiyo-uhh": "5", "she-ded": "5", "deko-cry": "5", "gendo-pls": "5", "haruhi-annoyed": "5", "k-on-hug": "5", "lewd": "5", "nanami-hug": "5", "pika-dead": "5", "super-happy": "5", "yui-crying": "5", "durr": "5", "mugi-fish": "5",
        "objection": "5", "chaika": "4", "chiho-wut": "4", "disapproval-cat": "4", "grrrr": "4", "im-listening": "4", "om-nom": "4", "stare": "4", "u-wat-m8": "4", "what": "4", "wide-face": "4", "ehehehe": "4", "mandom": "4", "pointandlaugh": "3", "smug": "3",
        "confused": "3", "yunocaine": "3", "konahappy": "3", "konacat": "3", "gununu": "3", "catsmile": "3", "somad": "3", "mad": "3", "crying": "3", "catsmirk": "3", "um": "3", "facepalm2": "2", "wtfika": "2", "kanie-disgust": "2", "nerrr": "2", "nico-heart": "2",
        "sonico-wink": "2", "sparkle-ika": "2", "suave": "2", "super-blush": "2", "surprised-blush": "2", "shocked": "2", "thumbsup2": "2", "u-dont-say": "2", "ugh-peasants": "2", "uhhh": "2", "yay": "2", "you-bore-me": "2", "osaka": "2", "kukuku": "2", "toohappy": "2",
        "chitoge-smile": "1", "kininarimasu": "1", "kotori": "1", "kyon-facepalm": "1", "araragi-1": "1", "araragi-2": "1", "blank-stare": "1", "chaika-smile": "1", "chitoge-pissed": "1", "deadpan": "1", "exuberant-shu": "1", "dead-eyed-stare": "1", "gamagori-hnng": "1",
        "glasses-push": "1", "head-tilt": "1", "jiii": "1", "manly-tears": "1", "not-raining": "1", "ohmygod": "1", "shock": "1", "heart-thumbs-up": "1", "worried": "1", "wow-really": "1",

        "evenhappierdera": "6", "abashedbestia": "6", "akyuusqueel": "6", "amagamiplayfulbite": "6", "arakawascream": "6", "asunanotamused": "6", "bakaa": "6", "barakamonnotcool": "6", "bestiablehh": "6", "bestiacheckyourprivilage": "6", "charlming": "6",
        "charlpumped": "6", "charlstunned": "6", "chiyomad": "6", "comewithmeifyouwanttobebestgirl": "6", "containrage": "6", "crazyhatgirl": "6", "crazyhatgirlexcited": "6", "disbelief": "6", "dontdometh": "6", "duckhue": "6", "embarassedisla": "6", "eriribathblush": "6",
        "erirismile": "6", "eririwot": "6", "erunahuh": "6", "etotamadunno": "6", "eyebleed": "6", "flclcatface": "6", "ginkoehh": "6", "gintamacrushed": "6", "gintamadead": "6", "gintamaghost": "6", "gintamaphoneshock": "6", "gintamasunlight": "6", "gintamathispleasesme": "6",
        "happycharl": "6", "happypoi": "6", "insolentkek": "6", "islaforcedsmile": "6", "izananotthisshitagain": "6", "josephcrying": "6", "katoupout": "6", "katoutilt": "6", "nocomment": "6", "kumikouninterested": "6", "kurousagitears": "6", "kyonfacepalm": "6",
        "maidshock": "6", "mariawut": "6", "marikalewd": "6", "masaodidnothingwrong": "6", "mekakucitytaunt": "6", "michiruyeahk": "6", "mug2": "6", "nichijouqq": "6", "pissedinaba": "6", "pissedkaiji": "6", "psychoshock": "6", "racoonwot": "6", "reinastunned": "6",
        "rengehype": "6", "rickastatic": "6", "sayhwatagain": "6", "scaredmio": "6", "scarycharl": "6", "sheerdisgust": "6", "smugflowers": "6", "smugillya": "6", "smuglancer": "6", "smugshinoa": "6", "soumadisdain": "6", "stonedzack": "6", "surprisedandimpressed": "6",
        "surprisedwot": "6", "takeolightning": "6", "takeowut": "6", "thoughtful": "6", "tougouwotmagic": "6", "traumatiseddog": "6", "trollarcher": "6", "uglycry": "6", "umiface": "6", "utahagottrolled": "6", "vashheadscratch": "6", "wryyy": "6", "yuitriggered": "6",
        "yuyuyukek": "6", "yuruyuriapprove": "6", "happydera": "6", "holdme": "6", "misakaheh": "6", "ohnoudidnt": "6", "forcedsmile": "6", "startled": "6", "surprisedblush": "6", "teehee": "6", "tiredfate": "6", "chitogheh": "6",

        "badassmugi": "7", "banjoisahellofadrug": "7", "bearhug": "7", "bearwithme": "7", "biribiricat": "7", "bishoujo": "7", "bunnyisla": "7", "csikon": "7", "elsieqq": "7", "eririmad": "7", "haruhiisnotamused": "7", "hinakonom": "7", "hisokaclown": "7",
        "definitelynotamused": "7", "disgustedmichiru": "7", "hanasakueurgh": "7", "icanteven": "7", "jibrilaww": "7", "jibrilfetish": "7", "jojosafari": "7", "katoupls": "7", "manlyschoolgirls": "7", "massivecontempt": "7", "mechablush": "7", "miiahiss": "7",
        "miiaembarassed": "7", "miiatears": "7", "misakiteehee": "7", "misakiwink": "7", "nononkek": "7", "nozakishock": "7", "ohgodwhathaveidone": "7", "pissedmiia": "7", "pissedtoge": "7", "saltymichiru": "7", "shocklulushock": "7", "smugpoint": "7", "smugshinobu": "7",
        "sparklyisla": "7", "SPORTS": "7", "stunnedryou": "7", "takeoeyesparkle": "7", "takeofiredup": "7", "takeoniceubodi": "7", "takeostubtoe": "7", "typicalyuuko": "7", "vampirickirin": "7", "wankoface": "7", "whowouldathunkit": "7", "yamadashock": "7", "yandereyuno": "7",
        "orly": "7", "cup2": "7", "annoyedkirito": "7", "bestiathumbsup": "7", "flclawe": "7", "crazedlaugh": "7", "cup1": "7", "sunglasses": "7", "eririmadblush": "7", "eriripout": "7", "flclgrit": "7", "gintamashock": "7", "gintamaspillage": "7", "hunchedover": "7",
        "hypeoverload": "7", "infernocopu": "7", "kaorihappy": "7", "michirutilt": "7", "momjitonguepoke": "7", "niatilt": "7", "nosepick": "7", "selfishbestia": "7", "takeotears": "7", "uwannadie": "7", "yuyuyudisapprove": "7", "mug1": "7", "mug3": "7",

        // r/awwnime
        "nosebleed": "a1", "eep": "a1", "pissed": "a1", "pleased": "a1", "shock2": "a1", "somad2": "a1", "sparkle1": "a1", "squee": "a1", "superb": "a1", "tears": "a1", "therethere": "a1", "thumbsup3": "a1", "trollin": "a1", "tsuntsun": "a1", "waa": "a1", "wahahaha": "a1",
        "waow": "a1", "ika-wink": "a1", "somuchyes": "a1", "uguu": "a1",

        "airen": "a2", "awwyeah2": "a2", "bii": "a2", "blush2": "a2", "butwhat": "a2", "catsmile2": "a2", "concentrate": "a2", "contented": "a2", "loli-cry": "a2", "darksad": "a2", "dealwithit2": "a2", "deredere": "a2", "disapproval": "a2", "facepalm3": "a2", "fwaa": "a2",
        "go-on": "a2", "grrrr2": "a2", "hana": "a2", "happy": "a2", "hnng": "a2", "impossibiru": "a2", "itai": "a2", "just-no": "a2", "laugh": "a2", "megane": "a2",

        "rarr": "a3", "blushing": "a3", "headpat": "a3", "heyyou": "a3", "hug": "a3", "kyaa": "a3", "omnom": "a3", "peek": "a3", "sigh": "a3", "trynottopurr": "a3",

        "sonice": "a4", "upset": "a4", "silence": "a4", "confused-smile": "a4", "doteyes": "a4", "chiyonotamused": "a4", "resolved": "a4", "pout": "a4", "lewd2": "a4", "nepnep": "a4",

        // r/pantsu
        "mmm": "p", "nowai": "p", "lovemyhat": "p", "drool": "p", "blush3": "p", "noooo2": "p", "delight": "p", "sparkle2": "p", "disapproval2": "p",
    };

    var validAlias = {
        "m\\:3\\b": ":marisacute:", "m\\^\\^": ":marisahappy:", "m>o<": ":marisaangry:", "m>O<": ":marisaangry:",
        "m\\:o\\b": ":marisashock:", "m\\:O\\b": ":marisashock:", "m\\^\\^;": ":marisanervous:", "m--;": ":marisaannoy:",
        "m\\:\\?": ":marisawhat:", "m==\\b": ":marisablank:", "mXD\\b": ":marisa3:", "m\\:p\\b": ":marisakiss:",
        "m\\:P\\b": ":marisakiss:", "m\\:\\)": ":marisasmile:", "m>\\:\\(": ":marisamad:", "m\\:c\\b": ":marisacry:",
        "m\\:C\\b": ":marisacry:", "m\\:\\(": ":marisasad:", "m\\/\\/\\/": ":marisablush:",

        "r\\:3\\b": ":reimucute:", "r\\^\\^": ":reimuhappy:", "r>o<": ":reimuangry:", "r>O<": ":reimuangry:",
        "r\\:o\\b": ":reimushock:", "r\\:O\\b": ":reimushock:", "r\\^\\^;": ":reimunervous:", "r--;": ":reimuannoy:",
        "r\\:\\?": ":reimuwhat:", "r==\\b": ":reimublank:", "rXD\\b": ":reimulol:", "r\\:p\\b": ":reimukiss:",
        "r\\:P\\b": ":reimukiss:", "r\\:\\)": ":reimusmile:", "r>\\:\\(": ":reimumad:", "r\\:c\\b": ":reimucry:",
        "r\\:C\\b": ":reimucry:", "r\\:\\(": ":reimusad:", "r\\/\\/\\/": ":reimublush:",

        "\\B\\:-?\\)\\B": ":slightly-smiling-face:", "\\B\\:-?D\\b": ":grinning-face:", "\\B;-?\\)\\B": ":winking-face:",
        "\\B\\:-?\\(\\B": ":slightly-frowning-face:", "\\B\\:'-?\\(\\B": ":crying-face:", "\\B\\:-?P\\b": ":face-with-tongue:",
        "\\B\\:-?p\\b": ":face-with-tongue:", "\\B\\:-?O\\b": ":astonished-face:", "\\B\\:-?o\\b": ":astonished-face:", "\\B<3\\b": ":red-heart:",
        "\\B\\:-?\\|\\B": ":neutral-face:", "\\B-\\.-\\B": ":expressionless-face:", "\\B-_-\\B": ":expressionless-face:",
        "\\B\\:-?\\\\\\B": ":confused-face:", "\\B\\:-?\\/\\B": ":confused-face:", "\\B>\\:-?\\(\\B": ":pouting-face:", "\\B8-?\\)\\B": ":smiling-face-with-sunglasses:",

        //"bob": ":babz:", "Bob": ":babz:", "babz": ":babz:", "Babz": ":babz:",
        //"sean": ":shanz:", "Sean": ":shanz:", "shanz": ":shanz:", "Shanz": ":shanz:", "shanley": ":shanz:", "Shanley": ":shanz:",
        //"ben": ":fertilemeadors:", "Ben": ":fertilemeadors:", "benjamin": ":fertilemeadors:", "Benjamin": ":fertilemeadors:", "meadors": ":fertilemeadors:", "Meadors": ":fertilemeadors:",
        //"bson": ":bson:", "benson": ":bson:", "Benson": ":bson:", "benneh": ":bson:",
        //"derika": ":derika:", "Derika": ":derika:",
        //"jamesy": ":jamesy:", "Jamesy": ":jamesy:",
    };

    var validBlob = {
        "blobamused": "blobamused.png", "blobaww": "blobaww.png", "blobbowing": "blobbowing.png", "blobderpy": "blobderpy.png", "blobdrool": "blobdrool.png", "blobglare": "blobglare.png", "blobhighfive": "blobhighfive.png", "blobmelt": "blobmelt.png",
        "blobnervous": "blobnervous.png", "blobneutral": "blobneutral.png", "blobnom": "blobnom.png", "blobnomcookie": "blobnomcookie.png", "blobokhand": "blobokhand.png", "blobowo": "blobowo.png", "blobowoevil": "blobowoevil.png", "blobpats": "blobpats.png",
        "blobpeek": "blobpeek.png", "blobstop": "blobstop.png", "blobsweats": "blobsweats.png", "blobteefs": "blobteefs.png", "blobthinkingsmirk": "blobthinkingsmirk.png", "blobtilt": "blobtilt.png", "blobugh": "blobugh.png", "blobuwu": "blobuwu.png",
        "blobwavereverse": "blobwavereverse.png", "blobwitch": "blobwitch.png", "blobxd": "blobxd.png"
    };

    // initialize emote list dialog
    var emotelistTabs = $('<div/>');

    emotelistTabs.append(
        $('<ul/>')
            .append($('<li/>')
                .append($('<a/>').attr('href', '#emotelisttab-1').attr('title', 'pony-a').text('a')))
            .append($('<li/>')
                .append($('<a/>').attr('href', '#emotelisttab-2').attr('title', 'pony-b').text('b')))
            .append($('<li/>')
                .append($('<a/>').attr('href', '#emotelisttab-3').attr('title', 'pony-c').text('c')))
            .append($('<li/>')
                .append($('<a/>').attr('href', '#emotelisttab-4').attr('title', 'pony-d').text('d')))
            .append($('<li/>')
                .append($('<a/>').attr('href', '#emotelisttab-5').attr('title', 'pony-e').text('e')))
            .append($('<li/>')
                .append($('<a/>').attr('href', '#emotelisttab-6').attr('title', 'pony-f').text('f')))
            .append($('<li/>')
                .append($('<a/>').attr('href', '#emotelisttab-7').attr('title', 'pony-g').text('g')))
            .append($('<li/>')
                .append($('<a/>').attr('href', '#emotelisttab-8').attr('title', 'hotglue').text('h')))
            .append($('<li/>')
                .append($('<a/>').attr('href', '#emotelisttab-9').attr('title', 'pony-h').text('i')))
            .append($('<li/>')
                .append($('<a/>').attr('href', '#emotelisttab-10').attr('title', 'emoji').text('j')))
            .append($('<li/>')
                .append($('<a/>').attr('href', '#emotelisttab-11').attr('title', 'animu').text('m')))
            .append($('<li/>')
                .append($('<a/>').attr('href', '#emotelisttab-12').attr('title', 'animu').text('n')))
            .append($('<li/>')
                .append($('<a/>').attr('href', '#emotelisttab-13').attr('title', 'animu').text('o')))
            .append($('<li/>')
                .append($('<a/>').attr('href', '#emotelisttab-14').attr('title', 'animu').text('p')))
            .append($('<li/>')
                .append($('<a/>').attr('href', '#emotelisttab-15').attr('title', 'blob').text('s')))
            .append($('<li/>')
                .append($('<a/>').attr('href', '#emotelisttab-16').attr('title', 'v4c').text('v')))
            .append($('<li/>')
                .append($('<a/>').attr('href', '#emotelisttab-17').attr('title', 'yukkuri').text('y'))));

    var colCount = { 'a': 0, 'b': 0, 'c': 0, 'd': 0, 'e': 0, 'f': 0, 'g': 0, 'h': 0, 'i': 0, 'j': 0, 'm': 0, 'n': 0, 'o': 0, 'p': 0, 's': 0, 'v': 0, 'y': 0 };
    var rows = { 'a': [], 'b': [], 'c': [], 'd': [], 'e': [], 'f': [], 'g': [], 'h': [], 'i': [], 'j': [], 'm': [], 'n': [], 'o': [], 'p': [], 's': [], 'v': [], 'y': [] };

    for (var key in validPony) {
        var row = '';
        var group = validPony[key];

        colCount[group] = colCount[group] + 1;

        if (colCount[group] == 1)
            row += '<tr>';

        row += '<td class="ponymoticon ponymoticon-' + group + ' ponymoticon-' + key + '" title="' + key + '"></td>';

        if (colCount[group] == 6) {
            row += '</tr>';
            colCount[group] = 0;
        }

        rows[group].push(row);
    }
    for (var key in validHotglue) {
        var row = '';
        var group = 'h';

        colCount[group] = colCount[group] + 1;

        if (colCount[group] == 1)
            row += '<tr>';

        row += '<td class="hotgluemoticon hotgluemoticon-1 hotgluemoticon-' + key + '" title="' + key + '"></td>';

        if (colCount[group] == 6) {
            row += '</tr>';
            colCount[group] = 0;
        }

        rows[group].push(row);
    }
    for (var key in validEmoji2) {
        var row = '';
        var group = 'j';

        colCount[group] = colCount[group] + 1;

        if (colCount[group] == 1)
            row += '<tr>';

        var css = key;
        if (css === '+1') {
            css = 'plus1';    // +1 not valid CSS class
        }
        row += '<td class="emoji21 emoji21-' + css + '" title="' + key + '"></td>';

        if (colCount[group] == 10) {
            row += '</tr>';
            colCount[group] = 0;
        }

        rows[group].push(row);
    }
    for (var key in validYukkuri) {
        var row = '';
        var group = 'y';

        colCount[group] = colCount[group] + 1;

        if (colCount[group] == 1)
            row += '<tr>';

        var css = key;

        row += '<td class="yukkuri yukkuri-' + key + '" title="' + key + '"></td>';

        if (colCount[group] == 8) {
            row += '</tr>';
            colCount[group] = 0;
        }

        rows[group].push(row);
    }
    for (var key in validAnimu) {
        var row = '';
        var group = 'm';
        var section = validAnimu[key];

        if (section[0] == 'a' || section[0] == 'p')
            group = 'n';
        else if (section == '6')
            group = 'o';
        else if (section == '7')
            group = 'p';

        colCount[group] = colCount[group] + 1;

        if (colCount[group] == 1)
            row += '<tr>';

        row += '<td class="animu animu-' + section + ' animu-' + key + '" title="' + key + '"></td>';

        if (colCount[group] == 4) {
            row += '</tr>';
            colCount[group] = 0;
        }

        rows[group].push(row);
    }
    for (var key in validv4c) {
        var row = '';
        var group = 'v';

        colCount[group] = colCount[group] + 1;

        if (colCount[group] == 1)
            row += '<tr>';

        row += '<td title="' + key + '"><img src="Content/images/v4c/' + validv4c[key] + '" alt="' + key + '" class="v4cemote" /></td>';

        if (colCount[group] == 5) {
            row += '</tr>';
            colCount[group] = 0;
        }

        rows[group].push(row);
    }
    for (var key in validBlob) {
        var row = '';
        var group = 's';

        colCount[group] = colCount[group] + 1;

        if (colCount[group] == 1)
            row += '<tr>';

        row += '<td title="' + key + '"><img src="Content/images/blob/' + validBlob[key] + '" alt="' + key + '" class="blobemoji" /></td>';

        if (colCount[group] == 5) {
            row += '</tr>';
            colCount[group] = 0;
        }

        rows[group].push(row);
    }

    emotelistTabs.append(
        $('<div/>').attr('id', 'emotelisttab-1').append($('<table/>').append(rows['a'].join(''))));
    emotelistTabs.append(
        $('<div/>').attr('id', 'emotelisttab-2').append($('<table/>').append(rows['b'].join(''))));
    emotelistTabs.append(
        $('<div/>').attr('id', 'emotelisttab-3').append($('<table/>').append(rows['c'].join(''))));
    emotelistTabs.append(
        $('<div/>').attr('id', 'emotelisttab-4').append($('<table/>').append(rows['d'].join(''))));
    emotelistTabs.append(
        $('<div/>').attr('id', 'emotelisttab-5').append($('<table/>').append(rows['e'].join(''))));
    emotelistTabs.append(
        $('<div/>').attr('id', 'emotelisttab-6').append($('<table/>').append(rows['f'].join(''))));
    emotelistTabs.append(
        $('<div/>').attr('id', 'emotelisttab-7').append($('<table/>').append(rows['g'].join(''))));
    emotelistTabs.append(
        $('<div/>').attr('id', 'emotelisttab-8').append($('<table/>').append(rows['h'].join(''))));
    emotelistTabs.append(
        $('<div/>').attr('id', 'emotelisttab-9').append($('<table/>').append(rows['i'].join(''))));
    emotelistTabs.append(
        $('<div/>').attr('id', 'emotelisttab-10').append($('<table/>').append(rows['j'].join(''))));
    emotelistTabs.append(
        $('<div/>').attr('id', 'emotelisttab-11').append($('<table/>').append(rows['m'].join(''))));
    emotelistTabs.append(
        $('<div/>').attr('id', 'emotelisttab-12').append($('<table/>').append(rows['n'].join(''))));
    emotelistTabs.append(
        $('<div/>').attr('id', 'emotelisttab-13').append($('<table/>').append(rows['o'].join(''))));
    emotelistTabs.append(
        $('<div/>').attr('id', 'emotelisttab-14').append($('<table/>').append(rows['p'].join(''))));
    emotelistTabs.append(
        $('<div/>').attr('id', 'emotelisttab-15').append($('<table/>').append(rows['s'].join(''))));
    emotelistTabs.append(
        $('<div/>').attr('id', 'emotelisttab-16').append($('<table/>').append(rows['v'].join(''))));
    emotelistTabs.append(
        $('<div/>').attr('id', 'emotelisttab-17').append($('<table/>').append(rows['y'].join(''))));

    emotelistTabs.tabs();
    emotelistTabs.tabs({ active: 14 });
    $('#emotelist-dialog').append(emotelistTabs);

    $('#emotelist-dialog td').each(function (i) {
        $(this).click(function () {
            var messageBox = $('#new-message');

            var existingMsg = messageBox.val();

            $('#emotelist-dialog').dialog('close');

            messageBox.focus().val("").val(existingMsg + ':' + $(this).attr('title') + ':');
        });
    });

    Emoji.getIcons = function () {
        if (EmojiIcons == null) {
            EmojiIcons = [];
            for (var key in validEmoji2) {
                if (validEmoji2.hasOwnProperty(key)) {
                    EmojiIcons.push(key + ':');
                }
            }
            for (var key in validYukkuri) {
                if (validYukkuri.hasOwnProperty(key)) {
                    EmojiIcons.push(key + ':');
                }
            }
            for (var key in validv4c) {
                if (validv4c.hasOwnProperty(key)) {
                    EmojiIcons.push(key + ':');
                }
            }
            for (var key in validBlob) {
                if (validBlob.hasOwnProperty(key)) {
                    EmojiIcons.push(key + ':');
                }
            }
            for (var key in validPony) {
                if (validPony.hasOwnProperty(key)) {
                    EmojiIcons.push(key + ':');
                }
            }
            for (var key in validAnimu) {
                if (validAnimu.hasOwnProperty(key)) {
                    EmojiIcons.push(key + ':');
                }
            }
            for (var key in validHotglue) {
                if (validHotglue.hasOwnProperty(key)) {
                    EmojiIcons.push(key + ':');
                }
            }
        }
        return EmojiIcons;
    };

    Emoji.Parser = function () {
        this.parse = function (content) {
            return parseEmoji(content);
        };

        this.transformToHtml = transformToHtml;

        function parseEmoji(content) {
            for (var key in validAlias) {
                if (validAlias.hasOwnProperty(key)) {
                    var regex = new RegExp(key, "g");
                    content = content.replace(regex, '\u200B' + validAlias[key] + '\u200B');
                }
            }

            return content;
        }

        function transformToHtml(content) {
            return content.replace(/:([a-z0-9\+\-\._]+):/g, emojiReplacer);
        }

        function emojiReplacer(str, match) {
            if (validEmoji2[match]) {
                var css = match;
                if (css === '+1') {
                    css = 'plus1';    // +1 not valid CSS class
                }
                return '<span class="emoji21 emoji21-' + css + '" alt="' + match + '" title="' + match + '" />';
            } else if (validYukkuri[match]) {
                return '<span class="yukkuri yukkuri-' + match + '" alt="' + match + '" title="' + match + '" />';
            } else if (validv4c[match]) {
                return '<img src="Content/images/v4c/' + validv4c[match] + '" alt="' + match + '" title="' + match + '" class="v4cemote" />';
            } else if (validBlob[match]) {
                return '<img src="Content/images/blob/' + validBlob[match] + '" alt="' + match + '" title="' + match + '" class="blobemoji" />';
            } else if (validPony[match]) {
                return '<span class="ponymoticon ponymoticon-' + validPony[match] + ' ponymoticon-' + match + '" alt="' + match + '" title="' + match + '" />';
            } else if (validAnimu[match]) {
                return '<span class="animu animu-' + validAnimu[match] + ' animu-' + match + '" alt="' + match + '" title="' + match + '" />';
            } else if (validHotglue[match]) {
                return '<span class="hotgluemoticon hotgluemoticon-' + validHotglue[match] + ' hotgluemoticon-' + match + '" alt="' + match + '" title="' + match + '" />';
            } else {
                return ':' + match + ':';
            }
        }
    };
})();
