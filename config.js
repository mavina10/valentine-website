const CONFIG = {

    valentineName: "Mario",

    // The title that appears in the browser tab
    pageTitle: "Will You Be My Forever Valentine? 💝",

    floatingEmojis: {
        hearts: ['❤️', '💖', '💝', '💗', '💓'],  // Heart emojis
        bears: ['🧸']                               // Cute bear emojis
    },

    // Questions and answers
    questions: {
        first: {
            text: "Will you be my Valentine forever?",
            yesBtn: "Yes 💖",
            noBtn: "No 😢",
            secretAnswer: "Forever and always ❤️"
        },
        second: {
            text: "How much do I adore you?",
            startText: "So much! 💕",
            nextBtn: "Next ❤️"
        },
        third: {
            text: "Do you want to spend forever together?",
            yesBtn: "Absolutely! 💘",
            noBtn: "Maybe 😔"
        }
    },

    // Love meter messages
    loveMessages: {
        extreme: "Always dream come true",
        high: "Forever come true",
        normal: "ALWAYS and I hope there!"
    },

    // Messages that appear after they say "Yes!"
    celebration: {
        title: "Yay! I'm the luckiest person in the world! 🎉💝💖💝💓",
        message: "Kiss forever",
        emojis: "💖💝❤️💕"
    },

    // Color scheme for the website
    colors: {
        backgroundStart: "#ffafbd",
        backgroundEnd: "#ffc3a0",
        buttonBackground: "#ff6b6b",
        buttonHover: "#ff8787",
        textColor: "#ff4757"
    },

    // Animation settings
    animations: {
        floatDuration: "15s",
        floatDistance: "50px",
        bounceSpeed: "0.5s",
        heartExplosionSize: 1.5
    },

    // Background Music (Optional)
    music: {
        enabled: true,
        autoplay: true,
        musicUrl: "https://soundcloud.com/liluzivert/chrome-heart-tags?in=evan33/sets/uzi&si=e50a721ea4e0413a8c253ccb426fa23c&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
        startText: "🎵 Play Music",
        stopText: "🔇 Stop Music",
        volume: 0.5
    }
};

// Don't modify anything below this line unless you know what you're doing
window.VALENTINE_CONFIG = CONFIG;
