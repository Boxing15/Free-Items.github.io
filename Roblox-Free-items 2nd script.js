const translations = {
    en: {
        title:"Select A Language First:",
        Update:"Revamp+LessLagUpdate🛠️.",
        Welcome1:"Welcome too the Roblox free items Searching website:",
        Welcome2:"Current language:-English",
        Welcome3:"Click any language button above to switch. Your choice will be saved",
        Number1:"1)R゘blox Marketplace🔍.",
        Number101:"Meaning of:",
        Number102:"MarketPlace",
        Number103:"🆓Ugc Gammes",
        Number104:"Pls D゘nate", 
        Number2:"2)R゘blox Promo codes💡:",
        Number201:"All working promo codes + Click Copy to copy the codes.",
        Border202:"PromoCodes",
        Border203:"🆓items",
        Border204:"images",
        Border205:"Tutorial",
        Border206:"PromocodeSection",
        Number3:"3)R゘blox Free items games:",
        Number301:"Game items name/Eazy",
        Border302:"Link",
        Border303:"Game items name/Medium",
        Number4:"4)Roblox free Classique tshirts:",
        Download1:"Download T-Shirt",
    },
    fr: {
        title:"Sélectionnez d'abord une langue :",
        Update:"Refonte + Mise à jour Moin Lag🛠️.",
        Welcome1:"Bienvenue sur le site de recherche d'objets gratuits Roblox :",
        Welcome2:"Langue actuelle :-Français.",
        Welcome3:"Cliquez sur le bouton de langue de votre choix ci-dessus pour changer de langue,Votre choix sera enregistré",
        Number1:"1)R゘blox Marchet🔍.",
        Number101:"Signification de :",
        Number102:"Place de marcher",
        Number103:"Jeux 🆓UGC",
        Number104:"Veuillez D゘nate",
        Number2:"2)Les Promo codes de R゘blox💡:",
        Number201:"Tous les codes promotionnels valides + Cliquez sur Copier pour copier les codes",
        Border202:"Des PromoCodes",
        Border203:"Les 🆓items",
        Border204:"Les images",
        Border205:"Tuto",
        Border206:"Section des codes promotion",
        Number3:"3) Jeux d'objets gratuits R゘blox :",
        Number301:"Nom des objets du jeu/Facile",
        Border302:"Lien",
        Border303:"Nom de l'objet du jeu/Moyen",
        Number4:"4)T-shirts classiques gratuits R゘blox:",
        Download1:"Télécharger le t-shirt",
    },
    ar: {
        title:"اختر اللغة أولاً:",
        Update:".🛠️تحديث مُحسّن + تقليل التأخير",
        Welcome1:"مرحباً بكم في موقع البحث عن العناصر المجانية في روبلوكس:",
        Welcome2:"اللغة الحالية: -العربية",
        Welcome3:"انقر على أي زر لغة أعلاه للتبديل. سيتم حفظ اختيارك",
        Number1:"1) سوق روبلوكس🔍",
        Number101:":معنى",
        Number102:"السوق",
        Number103:"UGC🆓ألعاب",
        Number104:"الرجاء التبرع",
        Number2:"2) أكواد خصم R゘blox💡:",
        Number201:"جميع رموز العروض الترويجية الفعّالة + انقر على نسخ لنسخ الرموز.",
        Border202:"رموز ترويجية",
        Border203:"منتجات مجانية",
        Border204:"صور",
        Border205:"توتوريل",
        Border206:"قسم الرموز الترويجية",
        Number3:"3) ألعاب العناصر المجانية في R゘blox:",
        Number301:"اسم عناصر اللعبة/سهل",
        Border302:"بايو",
        Border303:"اسم عنصر اللعبة/الوسيط",
        Number4:"4)تيشرتات كلاسيكية مجانية من روبلوكس:",
        Download1:"حمل تي شيرت",
    }
};

let currentLang = 'en';

const langButtons = document.querySelectorAll('.lang-btn');
const translatableElements = document.querySelectorAll('[data-key]');

function switchLanguage(lang) {
    if (lang === currentLang) return;
   
    currentLang = lang;
   
    langButtons.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });
   
    document.body.classList.toggle('rtl', lang === 'ar');
    document.documentElement.lang = lang;
   
        translatableElements.forEach(el => {
        const key = el.dataset.key;
        if (translations[lang] && translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });
   
    localStorage.setItem('preferredLanguage', lang);
}

langButtons.forEach(btn => {
    btn.addEventListener('click', () => switchLanguage(btn.dataset.lang));
});

document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('preferredLanguage');
    const browserLang = navigator.language.slice(0, 2);
   
        if (savedLang && ['en', 'fr', 'ar'].includes(savedLang)) {
        switchLanguage(savedLang);
    } else if (['en', 'fr', 'ar'].includes(browserLang)) {
        switchLanguage(browserLang);
    } else {
        switchLanguage('en');
    }
});
function myFunction() {
  navigator.clipboard.writeText(document.querySelector("#text1").innerText);
  var tooltip = document.getElementById("myBtn");
  tooltip.innerHTML = "📋";
}
function outFunc() {
  var tooltip = document.getElementById("myBtn");
  tooltip.innerHTML = "📋";
}

function myFunction_1() {
  navigator.clipboard.writeText(document.querySelector("#text2").innerText);
  var tooltip = document.getElementById("myBtn-1");
  tooltip.innerHTML = "📋";
}
function outFunc() {
  var tooltip = document.getElementById("myBtn-1");
  tooltip.innerHTML = "📋";
}

function myFunction_2() {
  navigator.clipboard.writeText(document.querySelector("#text3").innerText);
  var tooltip = document.getElementById("myBtn-2");
  tooltip.innerHTML = "📋";
}
function outFunc() {
  var tooltip = document.getElementById("myBtn-2");
  tooltip.innerHTML = "📋";
}
