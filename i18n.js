(function () {
  'use strict';

  const T = {
    fr: {
      'nav.home': 'Accueil', 'nav.skills': 'Compétences', 'nav.projects': 'Projets',
      'nav.blocs': 'Blocs', 'nav.contact': 'Contact', 'nav.badge': 'Disponible • 2026',
      'hero.tag': 'BTS SIO • Option SISR • EFREI Paris',
      'hero.sub': 'Étudiant en BTS SIO SISR passionné par l\'<strong>administration systèmes & réseaux</strong>, la <strong>cybersécurité</strong> et le cloud. Stage confirmé à l\'<strong>Université Paris-Saclay</strong> — en recherche d\'<strong>alternance</strong>.',
      'hero.btn.projects': 'Voir mes projets',
      'hero.btn.cv': 'Télécharger mon CV',
      'about.label': 'À propos', 'about.title': 'Qui suis-je ?',
      'about.p1': 'Étudiant en <strong>BTS SIO option SISR</strong> à l\'EFREI Paris, je me spécialise dans la gestion et l\'administration d\'infrastructures informatiques, incluant les environnements <strong>Windows Server, Linux Debian, Cisco</strong> et <strong>Azure</strong>. J\'ai réalisé un stage en tant que <strong>Technicien IT</strong> à l\'<strong>Université Paris-Saclay</strong>.',
      'about.p2': 'Mon parcours m\'a permis de développer une expertise en <strong>Active Directory</strong>, en <strong>virtualisation</strong> (VirtualBox, VMware), en <strong>administration réseau</strong> (VLAN, routage, Wi-Fi) et en <strong>cybersécurité</strong> (MITM, SQLi, XSS). J\'ai également déployé <strong>GLPI sur Azure</strong> pour la gestion de parc informatique, avec automatisation des sauvegardes vers Google Drive.',
      'about.p3': '<strong>Objectif</strong> : décrocher une alternance (12 mois, rythme 2j école / 3j entreprise) en administration systèmes & réseaux / cybersécurité.',
      'about.stat.projects': 'Projets réalisés', 'about.stat.skills': 'Compétences C',
      'about.stat.internship': 'Stage confirmé', 'about.stat.mobility': 'Mobilité totale',
      'info.training': 'Formation', 'info.training.val': 'BTS SIO Option SISR — EFREI Paris',
      'info.avail': 'Disponibilité', 'info.avail.val': 'Alternance — 12 mois · Rythme 2j école / 3j entreprise',
      'info.location': 'Localisation', 'info.location.val': 'Paris, France — Mobilité totale IDF',
      'info.stack': 'Stack technique', 'info.links': 'Liens',
      'projects.label': 'Réalisations', 'projects.title': 'Projets récents',
      'projects.btn': 'Voir tous les projets (10)',
      'blocs.label': 'Documentation BTS SIO', 'blocs.title': 'Compétences professionnelles',
      'contact.label': 'Contact',
      'contact.title': 'Travaillons', 'contact.span': 'ensemble.',
      'contact.sub': 'Je recherche une alternance (12 mois, 2j école / 3j entreprise) en administration systèmes & réseaux / cybersécurité. N\'hésitez pas à me contacter !',
      'contact.form.name': 'Votre nom', 'contact.form.email': 'Votre e-mail',
      'contact.form.msg': 'Votre message…', 'contact.form.send': 'Envoyer le message',
      'contact.success': 'Message envoyé ! Je vous répondrai dès que possible.',
      'contact.error': 'Erreur lors de l\'envoi. Veuillez réessayer ou m\'écrire directement.',
      'footer.copy': '© 2026 Leo BIGOTE — BTS SIO SISR',
    },
    en: {
      'nav.home': 'Home', 'nav.skills': 'Skills', 'nav.projects': 'Projects',
      'nav.blocs': 'Docs', 'nav.contact': 'Contact', 'nav.badge': 'Available • 2026',
      'hero.tag': 'BTS SIO • SISR Track • EFREI Paris',
      'hero.sub': 'IT student passionate about <strong>systems & network administration</strong>, <strong>cybersecurity</strong> and cloud. Confirmed internship at <strong>Paris-Saclay University</strong> — seeking an <strong>apprenticeship</strong>.',
      'hero.btn.projects': 'See my projects',
      'hero.btn.cv': 'Download my CV',
      'about.label': 'About', 'about.title': 'Who am I?',
      'about.p1': 'Student in <strong>BTS SIO SISR</strong> at EFREI Paris, I specialize in managing and administering IT infrastructures including <strong>Windows Server, Linux Debian, Cisco</strong> and <strong>Azure</strong> environments. I completed an internship as an <strong>IT Technician</strong> at <strong>Paris-Saclay University</strong>.',
      'about.p2': 'My training gave me expertise in <strong>Active Directory</strong>, <strong>virtualization</strong> (VirtualBox, VMware), <strong>network administration</strong> (VLAN, routing, Wi-Fi) and <strong>cybersecurity</strong> (MITM, SQLi, XSS). I also deployed <strong>GLPI on Azure</strong> for IT asset management with automated backups to Google Drive.',
      'about.p3': '<strong>Goal</strong>: secure a 12-month apprenticeship (2 days school / 3 days company) in systems & network administration / cybersecurity.',
      'about.stat.projects': 'Projects completed', 'about.stat.skills': 'C Competencies',
      'about.stat.internship': 'Confirmed internship', 'about.stat.mobility': 'Full mobility',
      'info.training': 'Education', 'info.training.val': 'BTS SIO SISR — EFREI Paris',
      'info.avail': 'Availability', 'info.avail.val': 'Apprenticeship — 12 months · 2 days school / 3 days company',
      'info.location': 'Location', 'info.location.val': 'Paris, France — Full IDF mobility',
      'info.stack': 'Tech Stack', 'info.links': 'Links',
      'projects.label': 'Work', 'projects.title': 'Recent projects',
      'projects.btn': 'See all projects (10)',
      'blocs.label': 'BTS SIO Documentation', 'blocs.title': 'Professional competencies',
      'contact.label': 'Contact',
      'contact.title': 'Let\'s work', 'contact.span': 'together.',
      'contact.sub': 'I\'m looking for a 12-month apprenticeship (2 days school / 3 days company) in systems & networks / cybersecurity. Feel free to reach out!',
      'contact.form.name': 'Your name', 'contact.form.email': 'Your email',
      'contact.form.msg': 'Your message…', 'contact.form.send': 'Send message',
      'contact.success': 'Message sent! I\'ll get back to you as soon as possible.',
      'contact.error': 'Error sending. Please try again or write to me directly.',
      'footer.copy': '© 2026 Leo BIGOTE — BTS SIO SISR',
    }
  };

  let lang = localStorage.getItem('portfolio-lang') || 'fr';

  function applyLang(l) {
    const t = T[l];
    if (!t) return;
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const k = el.dataset.i18n;
      if (t[k] !== undefined) el.textContent = t[k];
    });
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const k = el.dataset.i18nHtml;
      if (t[k] !== undefined) el.innerHTML = t[k];
    });
    document.querySelectorAll('[data-i18n-ph]').forEach(el => {
      const k = el.dataset.i18nPh;
      if (t[k] !== undefined) el.placeholder = t[k];
    });
    const btn = document.getElementById('lang-toggle');
    if (btn) btn.textContent = l === 'fr' ? 'EN' : 'FR';
    document.documentElement.lang = l;
    const cbInput = document.getElementById('chatbot-input');
    if (cbInput) cbInput.placeholder = l === 'fr' ? 'Posez votre question…' : 'Ask your question…';
  }

  function toggleLang() {
    lang = lang === 'fr' ? 'en' : 'fr';
    localStorage.setItem('portfolio-lang', lang);
    applyLang(lang);
  }

  document.addEventListener('DOMContentLoaded', function () {
    const navRight = document.querySelector('.nav-right');
    if (navRight) {
      const btn = document.createElement('button');
      btn.id = 'lang-toggle';
      btn.className = 'lang-toggle';
      btn.textContent = lang === 'fr' ? 'EN' : 'FR';
      btn.addEventListener('click', toggleLang);
      const hamburger = navRight.querySelector('.hamburger');
      if (hamburger) navRight.insertBefore(btn, hamburger);
      else navRight.appendChild(btn);
    }
    applyLang(lang);
  });

  window.getPortfolioLang = function () { return lang; };
})();
