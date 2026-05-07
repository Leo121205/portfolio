(function () {
  'use strict';

  const RESPONSES = [
    {
      p: ['bonjour','salut','hello','hey','bonsoir','coucou','hi'],
      fr: 'Bonjour ! Je suis l\'assistant de Leo. Posez-moi vos questions sur ses compétences, projets ou disponibilité !',
      en: 'Hello! I\'m Leo\'s assistant. Ask me anything about his skills, projects or availability!'
    },
    {
      p: ['compétence','compétences','tech','technologie','stack','maîtrise','skill','skills'],
      fr: 'Leo maîtrise : Windows Server & Active Directory, Linux Debian, Cisco VLAN, Microsoft Azure, GLPI, Kali Linux, PHP 8/MySQL/PDO, Python, PowerShell et Bash. Option SISR du BTS SIO.',
      en: 'Leo\'s skills: Windows Server & Active Directory, Linux Debian, Cisco VLAN, Microsoft Azure, GLPI, Kali Linux, PHP 8/MySQL/PDO, Python, PowerShell and Bash. BTS SIO SISR track.'
    },
    {
      p: ['projet','projets','réalisation','travaux','project','projects','réalisé','fait'],
      fr: '10 projets réalisés : Active Directory, VLAN Cisco, Vulnérabilités, Cloud Azure, GLPI, Serveur LAMP, Wi-Fi sécurisé, Sauvegarde 3-2-1, Réseau virtuel et E-commerce VoyageHub. Visitez la page Projets !',
      en: '10 completed projects: Active Directory, Cisco VLAN, Vulnerability Analysis, Azure Cloud, GLPI, LAMP Server, Secure Wi-Fi, 3-2-1 Backup, Virtual Network and VoyageHub E-commerce. Check the Projects page!'
    },
    {
      p: ['stage','alternance','disponible','disponibilité','recrutement','emploi','intern','internship','hire','job','embauche'],
      fr: 'Leo recherche une alternance de 12 mois (2j école / 3j entreprise) en systèmes & réseaux ou cybersécurité en Île-de-France. Stage confirmé à l\'Université Paris-Saclay.',
      en: 'Leo is looking for a 12-month apprenticeship (2 days school / 3 days company) in systems & networks or cybersecurity in Île-de-France. Confirmed internship at Paris-Saclay University.'
    },
    {
      p: ['contact','contacter','email','mail','écrire','joindre','téléphone','phone','appeler','reach','numéro'],
      fr: 'Contactez Leo : 📧 leopakiam.bigote@gmail.com · 📞 07 69 37 46 57 · LinkedIn : leo-bigote. Ou utilisez le formulaire en bas de la page d\'accueil !',
      en: 'Contact Leo: 📧 leopakiam.bigote@gmail.com · 📞 +33 7 69 37 46 57 · LinkedIn: leo-bigote. Or use the contact form at the bottom of the home page!'
    },
    {
      p: ['azure','cloud','microsoft'],
      fr: 'Leo a déployé une infrastructure hybride Azure : VMs, VNet, Azure AD Connect, Azure Backup et Azure Monitor. Il a aussi déployé GLPI sur Azure avec sauvegardes automatisées vers Google Drive.',
      en: 'Leo deployed a hybrid Azure infrastructure: VMs, VNet, Azure AD Connect, Azure Backup and Azure Monitor. He also deployed GLPI on Azure with automated backups to Google Drive.'
    },
    {
      p: ['active directory','active-directory','windows server','gpo','domaine','domain','ad'],
      fr: 'Leo a configuré efrei.local sous Windows Server 2022 : contrôleur de domaine, OUs, utilisateurs, groupes, 3 GPO déployées et jonction de postes clients.',
      en: 'Leo set up efrei.local on Windows Server 2022: domain controller, OUs, users, groups, 3 deployed GPOs and client workstation joins.'
    },
    {
      p: ['vlan','cisco','réseau','routage','network','switch','trunk'],
      fr: 'Leo a configuré des VLANs 802.1Q sur switches Cisco avec routage inter-VLAN et ACL de sécurité, simulé sous Packet Tracer.',
      en: 'Leo configured 802.1Q VLANs on Cisco switches with inter-VLAN routing and security ACLs, simulated in Packet Tracer.'
    },
    {
      p: ['sécurité','securite','cyber','kali','pentest','mitm','sql','xss','csrf','hacking','security','hack'],
      fr: 'Leo a pratiqué en lab isolé : MITM (ARP Poisoning), SQL Injection, XSS réfléchi/persistant et CSRF sur DVWA avec Kali Linux. Il maîtrise aussi les contre-mesures.',
      en: 'Leo practiced in isolated lab: MITM (ARP Poisoning), SQL Injection, Reflected/Stored XSS and CSRF on DVWA with Kali Linux. He also knows the corresponding countermeasures.'
    },
    {
      p: ['glpi','helpdesk','parc','itsm','ticket'],
      fr: 'Leo a déployé GLPI sur Linux Debian puis Azure pour la gestion de parc : inventaire, tickets helpdesk et sauvegardes automatisées vers Google Drive via scripts bash.',
      en: 'Leo deployed GLPI on Linux Debian then Azure for IT asset management: inventory, helpdesk tickets and automated backups to Google Drive via bash scripts.'
    },
    {
      p: ['cv','curriculum','vitae','resume'],
      fr: 'Le CV de Leo est disponible via "Télécharger mon CV" dans le menu principal ou dans la section Contact en bas de page.',
      en: 'Leo\'s CV is available via "Download my CV" in the main menu or in the Contact section at the bottom of the page.'
    },
    {
      p: ['php','mysql','pdo','ecommerce','e-commerce','voyagehub','web'],
      fr: 'Leo a développé VoyageHub, un e-commerce complet en PHP 8/MySQL/PDO : catalogue dynamique, commandes avec calcul métier, code promo BTS2026 (-10%). Projet en binôme BTS 1ère année.',
      en: 'Leo developed VoyageHub, a full e-commerce site in PHP 8/MySQL/PDO: dynamic catalog, orders with business logic, promo code BTS2026 (-10%). Team project in first year of BTS SIO.'
    },
    {
      p: ['linux','debian','bash','shell','apache','lamp'],
      fr: 'Leo a installé et configuré des serveurs Linux Debian : stack LAMP, Apache avec SSL Let\'s Encrypt, Fail2ban, scripts bash pour les sauvegardes et automatisations.',
      en: 'Leo installed and configured Linux Debian servers: LAMP stack, Apache with SSL Let\'s Encrypt, Fail2ban, bash scripts for backups and automation.'
    },
    {
      p: ['wifi','wi-fi','wireless','radius','wpa','wpa2'],
      fr: 'Leo a déployé une infrastructure Wi-Fi sécurisée avec WPA2-Enterprise, FreeRADIUS et portail captif pour les invités.',
      en: 'Leo deployed a secure Wi-Fi infrastructure with WPA2-Enterprise, FreeRADIUS and a guest captive portal.'
    },
    {
      p: ['merci','thanks','super','parfait','bien','great','thank','nickel','cool'],
      fr: 'Avec plaisir ! N\'hésitez pas si vous avez d\'autres questions sur Leo.',
      en: 'You\'re welcome! Feel free to ask if you have more questions about Leo.'
    },
    {
      p: ['au revoir','bye','ciao','adieu','goodbye','bonne journée'],
      fr: 'À bientôt ! N\'hésitez pas à revenir pour toute question.',
      en: 'Goodbye! Feel free to come back anytime.'
    },
  ];

  const DEFAULT_FR = 'Je ne suis pas sûr de comprendre. Essayez : compétences, projets, alternance, contact ou CV !';
  const DEFAULT_EN = 'I\'m not sure I understand. Try: skills, projects, internship, contact or CV!';

  const SUGGESTIONS = {
    fr: ['Compétences', 'Projets', 'Alternance', 'Contact', 'CV'],
    en: ['Skills', 'Projects', 'Internship', 'Contact', 'CV'],
  };

  function norm(s) {
    return s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
  }

  function findReply(input) {
    const n = norm(input);
    const l = (window.getPortfolioLang && window.getPortfolioLang()) ||
              localStorage.getItem('portfolio-lang') || 'fr';
    for (const r of RESPONSES) {
      if (r.p.some(p => n.includes(norm(p)))) return l === 'en' ? r.en : r.fr;
    }
    return l === 'en' ? DEFAULT_EN : DEFAULT_FR;
  }

  function getLang() {
    return (window.getPortfolioLang && window.getPortfolioLang()) ||
           localStorage.getItem('portfolio-lang') || 'fr';
  }

  // ── Build widget ──────────────────────────────────────────────
  const bubble = document.createElement('button');
  bubble.className = 'chatbot-bubble';
  bubble.setAttribute('aria-label', 'Chatbot');
  bubble.innerHTML = '<i class="fa-solid fa-robot"></i><span class="cb-notif">1</span>';

  const win = document.createElement('div');
  win.className = 'chatbot-window';
  win.innerHTML = `
    <div class="chatbot-header">
      <div class="chatbot-avatar"><i class="fa-solid fa-robot"></i></div>
      <div class="chatbot-header-info">
        <strong>Assistant Leo</strong>
        <span style="font-size:0.7rem;color:var(--accent);">&#x25cf; En ligne</span>
      </div>
      <button class="chatbot-close" id="chatbot-close" aria-label="Fermer"><i class="fa-solid fa-xmark"></i></button>
    </div>
    <div class="chatbot-messages" id="chatbot-msgs"></div>
    <div class="chatbot-suggestions" id="chatbot-suggestions"></div>
    <div class="chatbot-input-area">
      <input type="text" class="chatbot-input" id="chatbot-input" placeholder="Posez votre question…" maxlength="200" autocomplete="off">
      <button class="chatbot-send" id="chatbot-send" aria-label="Envoyer"><i class="fa-solid fa-paper-plane"></i></button>
    </div>`;

  document.body.appendChild(bubble);
  document.body.appendChild(win);

  const msgsEl   = document.getElementById('chatbot-msgs');
  const inputEl  = document.getElementById('chatbot-input');
  const sugEl    = document.getElementById('chatbot-suggestions');
  let opened = false;

  function addMsg(text, type) {
    const el = document.createElement('div');
    el.className = 'chatbot-msg ' + type;
    el.textContent = text;
    msgsEl.appendChild(el);
    msgsEl.scrollTop = msgsEl.scrollHeight;
  }

  function showTyping() {
    const el = document.createElement('div');
    el.className = 'chatbot-typing';
    el.innerHTML = '<span></span><span></span><span></span>';
    msgsEl.appendChild(el);
    msgsEl.scrollTop = msgsEl.scrollHeight;
    return el;
  }

  function renderSuggestions() {
    const l = getLang();
    sugEl.innerHTML = '';
    SUGGESTIONS[l].forEach(s => {
      const btn = document.createElement('button');
      btn.className = 'chatbot-suggestion';
      btn.textContent = s;
      btn.addEventListener('click', () => send(s));
      sugEl.appendChild(btn);
    });
  }

  function send(text) {
    if (!text.trim()) return;
    inputEl.value = '';
    addMsg(text, 'user');
    const typing = showTyping();
    setTimeout(() => {
      typing.remove();
      addMsg(findReply(text), 'bot');
    }, 500 + Math.random() * 500);
  }

  function open() {
    opened = true;
    win.classList.add('open');
    const notif = bubble.querySelector('.cb-notif');
    if (notif) notif.remove();
    if (!msgsEl.children.length) {
      const l = getLang();
      addMsg(l === 'en'
        ? 'Hello! I\'m Leo\'s assistant. Ask me anything about his skills, projects or availability!'
        : 'Bonjour ! Je suis l\'assistant de Leo. Posez-moi vos questions sur ses compétences, projets ou disponibilité !',
        'bot');
      renderSuggestions();
    }
    setTimeout(() => inputEl.focus(), 150);
  }

  function close() {
    opened = false;
    win.classList.remove('open');
  }

  bubble.addEventListener('click', () => opened ? close() : open());
  document.getElementById('chatbot-close').addEventListener('click', close);
  document.getElementById('chatbot-send').addEventListener('click', () => send(inputEl.value));
  inputEl.addEventListener('keydown', e => { if (e.key === 'Enter') send(inputEl.value); });
})();
