/**
 * MWEB — Core Interactive Logic, Terminal Mechanics & Bilingual Arabic/English Support
 * Grounded in digital craft & phosphor terminal aesthetic of mweb.png
 */

document.addEventListener('DOMContentLoaded', () => {
  initLanguage();
  initMatrixCanvas();
  initTerminalTabs();
  initEstimatorConsole();
  initAccordion();
  initInquiryForm();
});

/* --------------------------------------------------------------------------
   1. Bilingual Translation Engine (English & Arabic)
   -------------------------------------------------------------------------- */
const translations = {
  en: {
    tagline: "PROFESSIONAL WEBSITES",
    nav_discipline: "[ Discipline ]",
    nav_capabilities: "[ Capabilities ]",
    nav_estimator: "[ Scope Calculator ]",
    nav_faq: "[ FAQ ]",
    nav_cta: "Initiate Project",

    hero_status_studio: "MWEB ATELIER // SYS_ONLINE",
    hero_status_inquiries: "ACCEPTING NEW CLIENT ARCHITECTURE INQUIRIES",
    hero_h1_lead: "We engineer",
    hero_h1_green: "professional websites",
    hero_h1_tail: "that load in 200ms and convert visitors.",
    hero_sub: "No cookie-cutter themes. No bloated drag-and-drop builders. MWEB is an elite engineering studio crafting high-velocity web applications and digital flagships for founders who demand technical supremacy.",
    hero_cta_brief: "Initiate Project Brief",
    hero_cta_caps: "Explore Capabilities",

    term_ttfb_label: "TIME TO FIRST BYTE",
    term_ttfb_sub: "Edge cached",
    term_perf_label: "LIGHTHOUSE PERF",
    term_perf_sub: "Zero layout shift",
    term_bundle_label: "CLIENT JS BUNDLE",
    term_bundle_sub: "RSC streaming",
    term_wcag_label: "WCAG CONTRAST",
    term_wcag_sub: "9.24:1 ratio",
    term_note: "// Automated assertion: All 32 global edge points responding within latency SLA.",

    disc_badge: "[ 01 // DISCIPLINE ]",
    disc_title: "What \"Professional Websites\" Means to Us",
    disc_desc: "Most digital agencies sell bloated template setups wrapped in buzzwords. We treat web development as high-precision engineering.",
    disc_agency_title: "<span>✕</span> The Generic Agency Status Quo",
    disc_agency_1: "Heavy bloated themes loaded with 50+ unmaintained third-party plugins.",
    disc_agency_2: "3.5s+ page load times causing 40% bounce rate before visitors even read your headline.",
    disc_agency_3: "Generic cookie-cutter templates that make your brand look identical to every competitor.",
    disc_agency_4: "Fragile offshore handoffs with zero documentation or ongoing engineering accountability.",
    disc_mweb_title: "<span>✔</span> The MWEB Professional Standard",
    disc_mweb_1: "<strong>Zero Bloat:</strong> Custom semantic code, strictly typed TypeScript, and hand-tuned component systems.",
    disc_mweb_2: "<strong>Sub-200ms Hydration:</strong> Optimized edge distribution, sub-second TTFB, and guaranteed 95+ Core Web Vitals.",
    disc_mweb_3: "<strong>Bespoke Brand Expression:</strong> Pixel-perfect typography, fluid micro-interactions, and custom visual assets.",
    disc_mweb_4: "<strong>100% Code Ownership:</strong> Committed directly to your GitHub/GitLab repositories from day one.",

    cap_badge: "[ 02 // CAPABILITIES ]",
    cap_title: "Full-Spectrum Web Engineering",
    cap_desc: "Whether you need a ground-up platform build or a rescue refactor of a slow application, we deliver clean, durable software.",
    svc_1_title: "Custom SaaS & Web Applications",
    svc_1_desc: "Production web applications engineered for heavy concurrent usage. Complex interactive dashboards, real-time WebSockets, multi-tenant database partitions, and enterprise authorization.",
    svc_2_title: "High-Conversion Brand Flagships",
    svc_2_desc: "Story-driven digital experiences that command attention in crowded markets. Interactive 3D graphics, tactile micro-motion, and lightning-fast page transitions designed to drive inbound pipeline.",
    svc_3_title: "Headless Digital Commerce",
    svc_3_desc: "Decoupled storefronts with sub-second cart checkout, international multi-currency settlement, and custom product bundling engines that systematically increase average order value.",
    svc_4_title: "Speed Audits & Architecture Refactoring",
    svc_4_desc: "Have an existing slow or fragile codebase? We execute deep profiling, eradicate blocking scripts, rebuild layout shifts, and guarantee sub-400ms global response times on real user devices.",

    est_badge: "[ 03 // ESTIMATOR ]",
    est_title: "Interactive Build Estimator",
    est_desc: "Select your technical parameters below to calculate an immediate timeline and investment estimate. No sales runarounds.",
    est_step1_title: "01 // Choose System Type",
    est_type_flagship_title: "Brand Flagship",
    est_type_flagship_sub: "Marketing & 3D WebGL",
    est_type_webapp_title: "SaaS Platform",
    est_type_webapp_sub: "Full-stack web application",
    est_type_commerce_title: "Headless Store",
    est_type_commerce_sub: "Shopify Plus / Stripe Cart",
    est_type_audit_title: "Speed Audit",
    est_type_audit_sub: "Sub-400ms Core Vitals",

    est_step2_title: "02 // Scope Complexity Tier",
    est_scope_core_title: "Core Sprint (1-5 views)",
    est_scope_core_sub: "Focused launch MVP",
    est_scope_std_title: "Standard Production (6-15 views)",
    est_scope_std_sub: "Complete system & CMS integration",
    est_scope_ent_title: "Enterprise Scale (15+ views)",
    est_scope_ent_sub: "Multi-tier RBAC & microservices",

    est_step3_title: "03 // Strategic Add-ons",
    est_addon_tokens: "Design Token System (+Figma)",
    est_addon_ai: "Real-time AI / LLM Streaming",
    est_addon_speed: "Expedited Rapid Delivery (Under 1 Week)",

    est_res_price_label: "ESTIMATED INVESTMENT SPECTRUM:",
    est_res_time_label: "ESTIMATED TIMELINE:",
    est_transfer_btn: "Lock in Scope & Discuss",

    std_arch: "Custom Architecture",
    std_speed: "Target Edge Response",
    std_ownership: "Direct Code Ownership",
    std_a11y: "Accessibility AA Standard",

    faq_badge: "[ 04 // FAQ ]",
    faq_title: "Frequently Asked Inquiries",
    faq_q1: "How fast can MWEB deliver our project?",
    faq_a1: "Our delivery cycle is engineered for speed: every project is architected, built, and delivered within 2 to 7 days (guaranteed under one week). We initiate the build sprint within 24 hours of confirmation.",
    faq_q2: "Do we hold 100% intellectual property ownership?",
    faq_a2: "Yes, unreservedly. You hold 100% ownership of all source code, Figma design systems, database migrations, and deployment pipelines. Everything is committed directly to your private repositories from day one.",
    faq_q3: "What technology stacks do you build with?",
    faq_a3: "Our core frontend weapon is Next.js 15, React 19, TypeScript, and Tailwind CSS. For 3D graphics we use Three.js and WebGL shaders. For backend architectures, we deploy Go, Node.js, distributed PostgreSQL, Redis, and edge serverless nodes on Cloudflare/AWS.",
    faq_q4: "Can you collaborate alongside our existing in-house team?",
    faq_a4: "Yes. We often operate as an elite strike squad, owning the high-stakes frontend redesign, performance refactor, or greenfield web application while your in-house engineers remain focused on core backend business logic.",

    contact_badge: "[ 05 // CONTACT ]",
    contact_title: "Initiate Project Brief",
    contact_desc: "Send us your project specifications. Our senior engineering squad will review your technical parameters and reply with architecture notes and timeline within 4 business hours.",
    contact_direct_label: "DIRECT DISPATCH:",
    contact_sla_label: "RESPONSE TIME SLA:",
    contact_sla_val: "< 4 Hours (Business Days)",
    contact_loc_label: "STUDIO LOCATIONS:",
    contact_loc_val: "San Francisco, CA • London, UK",

    form_name_label: "Name / Title *",
    form_email_label: "Work Email *",
    form_budget_label: "Budget Spectrum",
    form_opt_1: "1,500 – 3,000 EGP",
    form_opt_2: "3,000 – 4,500 EGP",
    form_opt_3: "4,500 – 6,000 EGP (Max)",
    form_opt_4: "Custom Scope (Under 6,000 EGP)",
    form_brief_label: "Project Brief & Objectives *",
    form_nda: "Strict NDA enforced on all submissions.",
    form_submit: "Transmit Packet",

    foot_discipline: "Discipline",
    foot_capabilities: "Capabilities",
    foot_estimator: "Estimator",
    foot_faq: "FAQ",
    foot_copyright: "© 2026 MWEB ATELIER. RAW DIGITAL CRAFT. ALL RIGHTS RESERVED.",
    foot_status: "ALL SYSTEMS GREEN",

    toast_title: "PACKET RECEIVED // SYS.ACK",
    toast_sub: "Our senior engineering squad will reply within 4 hours."
  },

  ar: {
    tagline: "مواقع ويب احترافية",
    nav_discipline: "[ المنهجية ]",
    nav_capabilities: "[ القدرات ]",
    nav_estimator: "[ حاسبة التكلفة ]",
    nav_faq: "[ الأسئلة الشائعة ]",
    nav_cta: "ابدأ مشروعك",

    hero_status_studio: "استوديو MWEB // النظام نشط",
    hero_status_inquiries: "نستقبل استشارات المشاريع الجديدة لعام 2026",
    hero_h1_lead: "نهندس",
    hero_h1_green: "مواقع ويب احترافية",
    hero_h1_tail: "تحمّل في 200 مللي ثانية وتحقق أعلى معدلات تحويل.",
    hero_sub: "بدون قوالب جاهزة مكررة، وبدون أدوات سحب وإفلات بطيئة. MWEB استوديو هندسي نخبوي يطور تطبيقات ويب فائقة السرعة وواجهات رقمية رائدة للمؤسسين الباحثين عن التفوق التقني.",
    hero_cta_brief: "أرسل تفاصيل مشروعك",
    hero_cta_caps: "استكشف القدرات التقنية",

    term_ttfb_label: "زمن الاستجابة الأولي TTFB",
    term_ttfb_sub: "موزع سحابياً",
    term_perf_label: "أداء LIGHTHOUSE",
    term_perf_sub: "انعدام الإزاحة الهيكلية",
    term_bundle_label: "حجم حزمة الكود",
    term_bundle_sub: "بث المكونات الخادمة",
    term_wcag_label: "معيار التباين البصري",
    term_wcag_sub: "فئة AAA الأعلى",
    term_note: "// فحص آلي: جميع نقاط التوزيع السحابية تستجيب ضمن اتفاقية مستوى الخدمة.",

    disc_badge: "[ 01 // المنهجية ]",
    disc_title: "ماذا تعني \"المواقع الاحترافية\" بالنسبة لنا",
    disc_desc: "معظم الوكالات تبيع قوالب مسبقة الصنع مغلفة بوعود تسويقية رنانة. نحن نتعامل مع تطوير الويب كهندسة برمجية عالية الدقة.",
    disc_agency_title: "<span>✕</span> أسلوب الوكالات التقليدية",
    disc_agency_1: "قوالب بطيئة ومحشوة بأكثر من 50 إضافة خارجية غير مدعومة ومفتوحة للثغرات.",
    disc_agency_2: "أوقات تحميل تتجاوز 3.5 ثوانٍ تسبب ارتداد 40% من الزوار قبل قراءة عنوان الصفحة.",
    disc_agency_3: "تصاميم جاهزة مكررة تجعل علامتك التجارية تبدو كنسخة طبق الأصل من المنافسين.",
    disc_agency_4: "تسليم برمجيات هشة لفرق خارجية بدون توثيق هندسي أو التزام طويل الأمد.",
    disc_mweb_title: "<span>✔</span> معيار MWEB الاحترافي",
    disc_mweb_1: "<strong>صفر حشو زائد:</strong> كود مخصص، لغة TypeScript صارمة، ومكونات مبنية يدوياً بدقة تامة.",
    disc_mweb_2: "<strong>تفاعل فوري تحت 200ms:</strong> توزيع سحابي متطور، وسرعة استجابة فائقة تضمن 95+ في مؤشرات الويب.",
    disc_mweb_3: "<strong>هوية مميزة للعلامة:</strong> خطوط متناسقة بدقة البكسل، وتفاعلات دقيقة تعزز حضورك في السوق.",
    disc_mweb_4: "<strong>ملكية كاملة للكود 100%:</strong> تسليم مباشر وكامل في مستودعات GitHub/GitLab الخاصة بك من اليوم الأول.",

    cap_badge: "[ 02 // القدرات البرمجية ]",
    cap_title: "هندسة برمجية شاملة للويب",
    cap_desc: "سواء كنت تؤسس منصة جديدة من الصفر أو تعيد هندسة موقع بطيء لرفع أدائه، نضمن لك كوداً نظيفاً ومستداماً.",
    svc_1_title: "تطبيقات الساس (SaaS) والويب المخصصة",
    svc_1_desc: "تطبيقات إنتاجية مهندسة لتحمل أعداد ضخمة من المستخدمين بالتزامن. لوحات تحكم تفاعلية معقدة، تحديث بيانات لحظي عبر WebSockets، وصلاحيات أمان مشددة.",
    svc_2_title: "واجهات رقمية رائدة للعلامات التجارية",
    svc_2_desc: "تجارب رقمية مبهرة تفرض حضورها في الأسواق التنافسية. رسومات ثلاثية الأبعاد تفاعلية عبر WebGL وحركات سلسة تضاعف تحويل الزوار إلى عملاء.",
    svc_3_title: "التجارة الإلكترونية الحديثة (Headless)",
    svc_3_desc: "متاجر إلكترونية مستقلة تقدم تجربة شراء فائقة السرعة، ودعم الدفع متعدد العملات، مع محركات متطورة لتجميع المنتجات ترفع متوسط قيمة الطلب.",
    svc_4_title: "تدقيق الأداء وإعادة هيكلة السرعة",
    svc_4_desc: "لديك موقع يعاني من البطء أو الهشاشة؟ نقوم بتحليل عميق للأداء، إزالة النصوص المعطلة، وضمان زمن استجابة عالمي يقل عن 400ms على أجهزة المستخدمين الحقيقية.",

    est_badge: "[ 03 // الحاسبة التقديرية ]",
    est_title: "حاسبة تقدير المشروع التفاعلية",
    est_desc: "حدد المتطلبات التقنية لمشروعك أدناه للحصول على تقدير فوري للتكلفة (بحد أقصى 6000 ج.م) والجدول الزمني (لا يتجاوز أسبوعاً واحداً) بدون أي تعقيدات.",
    est_step1_title: "01 // اختر نوع المشروع",
    est_type_flagship_title: "موقع علامة تجارية رائد",
    est_type_flagship_sub: "تسويق متقدم وتفاعل 3D WebGL",
    est_type_webapp_title: "منصة ويب / SaaS",
    est_type_webapp_sub: "تطبيق ويب شامل ومتكامل",
    est_type_commerce_title: "متجر إلكتروني مستقل",
    est_type_commerce_sub: "Shopify Plus / بوابة دفع Stripe",
    est_type_audit_title: "تدقيق وتسريع شامل",
    est_type_audit_sub: "تحقيق مؤشرات ويب تحت 400ms",

    est_step2_title: "02 // حجم ونطاق المشروع",
    est_scope_core_title: "نطاق أساسي (1-5 واجهات)",
    est_scope_core_sub: "إطلاق سريع لمنتج أولي MVP",
    est_scope_std_title: "إنتاج قياسي (6-15 واجهة)",
    est_scope_std_sub: "نظام كامل مع ربط إدارة المحتوى CMS",
    est_scope_ent_title: "نطاق مؤسسي (أكثر من 15 واجهة)",
    est_scope_ent_sub: "خدمات مصغرة متعددة وصلاحيات معقدة",

    est_step3_title: "03 // إضافات استراتيجية اختيارية",
    est_addon_tokens: "نظام تصميم ورموز التصميم (+ملف Figma)",
    est_addon_ai: "بث ذكاء اصطناعي ونماذج LLM فورية",
    est_addon_speed: "تسليم سريع فائق (خلال أسبوع كحد أقصى)",

    est_res_price_label: "النطاق التقديري للاستثمار:",
    est_res_time_label: "الجدول الزمني التقديري:",
    est_transfer_btn: "اعتماد النطاق وبدء النقاش",

    std_arch: "بنية برمجية مخصصة 100%",
    std_speed: "استجابة سحابية أقل من 200ms",
    std_ownership: "ملكية الكود بالكامل للعميل",
    std_a11y: "معيار الوصول العالمي WCAG 2.2 AA",

    faq_badge: "[ 04 // الأسئلة الشائعة ]",
    faq_title: "الأسئلة الشائعة والاستفسارات",
    faq_q1: "كم يستغرق استوديو MWEB لتسليم المشروع بالكامل؟",
    faq_a1: "دورة التسليم لدينا مهندسة لتحقيق أقصى سرعة إنجاز: يتم تسليم جميع المشاريع بالكامل خلال 2 إلى 7 أيام فقط (بحد أقصى أسبوع واحد بدون أي تأخير) مع التزام هندسي كامل من اليوم الأول.",
    faq_q2: "هل نمتلك 100% من الملكية الفكرية والأكواد البرمجية؟",
    faq_a2: "نعم وبشكل قاطع. تمتلك الملكية الكاملة وغير المقيدة لجميع الأكواد المصدرية، ملفات Figma، وقواعد البيانات. يتم إيداع الكود مباشرة في مستودعاتك الخاصة من اليوم الأول.",
    faq_q3: "ما هي التقنيات الأساسية التي تعتمدون عليها؟",
    faq_a3: "نعتمد بشكل أساسي على Next.js 15 وReact 19 وTypeScript وTailwind CSS. للرسومات ثلاثية الأبعاد نستخدم Three.js وWebGL. وفي الواجهات الخلفية نعتمد Go وNode.js وقواعد بيانات PostgreSQL وRedis الموزعة عالمياً.",
    faq_q4: "هل يمكنكم التعاون والاندماج مع فريقنا الداخلي الحالي؟",
    faq_a4: "بالتأكيد. نعمل باستمرار كفريق هندسي متخصص يتولى هندسة الواجهات الأمامية المعقدة أو تطوير وحدات جديدة، بينما يركز فريقك الداخلي على المنطق البرمجي الأساسي للشركة.",

    contact_badge: "[ 05 // تواصل معنا ]",
    contact_title: "أرسل تفاصيل مشروعك",
    contact_desc: "أرسل لنا متطلبات مشروعك وسيقوم فريقنا الهندسي بدراسة التفاصيل الفنية والرد بملاحظات معمارية وجدول زمني خلال 4 ساعات عمل.",
    contact_direct_label: "البريد الهندسي المباشر:",
    contact_sla_label: "زمن الاستجابة المضمون:",
    contact_sla_val: "أقل من 4 ساعات (أيام العمل)",
    contact_loc_label: "مواقع الاستوديو:",
    contact_loc_val: "سان فرانسيسكو، كاليفورنيا • لندن، المملكة المتحدة",

    form_name_label: "الاسم / المسمى الوظيفي *",
    form_email_label: "البريد الإلكتروني للعمل *",
    form_budget_label: "الميزانية التقديرية",
    form_opt_1: "1,500 – 3,000 ج.م",
    form_opt_2: "3,000 – 4,500 ج.م",
    form_opt_3: "4,500 – 6,000 ج.م (الحد الأقصى)",
    form_opt_4: "نطاق مخصص (أقل من 6,000 ج.م)",
    form_brief_label: "تفاصيل وأهداف المشروع *",
    form_nda: "اتفاقية سرية بيانات (NDA) صارمة ومفعلة على كافة البيانات.",
    form_submit: "إرسال التفاصيل الفنية",

    foot_discipline: "المنهجية",
    foot_capabilities: "القدرات",
    foot_estimator: "حاسبة التكلفة",
    foot_faq: "الأسئلة الشائعة",
    foot_copyright: "© 2026 استوديو MWEB. هندسة برمجية خالصة. جميع الحقوق محفوظة.",
    foot_status: "جميع الأنظمة تعمل بكفاءة",

    toast_title: "تم استلام التفاصيل الفنية // بنجاح",
    toast_sub: "سيقوم فريقنا الهندسي بدراسة المشروع والرد خلال 4 ساعات عمل."
  }
};

const placeholders = {
  en: {
    form_name_ph: "e.g. Alex Chen, CTO",
    form_email_ph: "alex@company.com",
    form_brief_ph: "Summarize your product requirements, target deadlines, and performance expectations..."
  },
  ar: {
    form_name_ph: "مثال: طارق المنصور، المدير التقني",
    form_email_ph: "tariq@company.com",
    form_brief_ph: "اكتب ملخصاً للمشروع، الجدول الزمني المستهدف، والمتطلبات الفنية الرئيسية..."
  }
};

let currentLang = 'en';

function initLanguage() {
  const toggleBtn = document.getElementById('lang-toggle-btn');
  const savedLang = localStorage.getItem('mweb-lang') || 'en';
  setLanguage(savedLang);

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const nextLang = currentLang === 'en' ? 'ar' : 'en';
      setLanguage(nextLang);
    });
  }
}

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('mweb-lang', lang);

  const isAr = lang === 'ar';
  document.documentElement.lang = isAr ? 'ar' : 'en';
  document.documentElement.dir = isAr ? 'rtl' : 'ltr';

  const toggleBtn = document.getElementById('lang-toggle-btn');
  if (toggleBtn) {
    if (isAr) {
      toggleBtn.innerHTML = `<span class="text-mweb-green font-bold text-sm">English</span> <span class="text-mweb-text-dim text-[10px]">/ عربية</span>`;
      toggleBtn.setAttribute('aria-label', 'Switch to English');
    } else {
      toggleBtn.innerHTML = `<span class="text-mweb-green font-bold text-sm">العربية</span> <span class="text-mweb-text-dim text-[10px]">/ EN</span>`;
      toggleBtn.setAttribute('aria-label', 'التبديل إلى العربية');
    }
  }

  // Update text elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key] !== undefined) {
      el.innerHTML = translations[lang][key];
    }
  });

  // Update placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (placeholders[lang] && placeholders[lang][key] !== undefined) {
      el.placeholder = placeholders[lang][key];
    }
  });

  // Re-run estimator to update localized timeline strings
  if (typeof updateEstimatorOutput === 'function') {
    updateEstimatorOutput();
  }
}

/* --------------------------------------------------------------------------
   2. Pixel Grid / Interactive Matrix Canvas
   -------------------------------------------------------------------------- */
function initMatrixCanvas() {
  const canvas = document.getElementById('pixel-matrix-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let animationFrame;

  let width = (canvas.width = canvas.parentElement.offsetWidth);
  let height = (canvas.height = canvas.parentElement.offsetHeight);

  window.addEventListener('resize', () => {
    width = canvas.width = canvas.parentElement.offsetWidth;
    height = canvas.height = canvas.parentElement.offsetHeight;
  });

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return;
  }

  const cols = Math.floor(width / 24);
  const drops = Array(cols).fill(1);
  const chars = '0123456789ABCDEF<>/*{}[]_~#+=mwebموقع';

  function draw() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.08)';
    ctx.fillRect(0, 0, width, height);

    ctx.fillStyle = '#61C37D';
    ctx.font = '12px "JetBrains Mono", monospace';

    for (let i = 0; i < drops.length; i++) {
      const text = chars[Math.floor(Math.random() * chars.length)];
      const x = i * 24;
      const y = drops[i] * 24;

      ctx.globalAlpha = Math.random() * 0.45 + 0.15;
      ctx.fillText(text, x, y);

      if (y > height && Math.random() > 0.985) {
        drops[i] = 0;
      }
      drops[i]++;
    }
    ctx.globalAlpha = 1.0;
    animationFrame = requestAnimationFrame(draw);
  }

  draw();
}

/* --------------------------------------------------------------------------
   3. Interactive Hero Terminal Tabs
   -------------------------------------------------------------------------- */
function initTerminalTabs() {
  const tabs = document.querySelectorAll('.term-tab-btn');
  const panels = document.querySelectorAll('.term-panel');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => {
        t.classList.remove('text-mweb-green', 'border-mweb-green', 'bg-mweb-surface-elevated');
        t.classList.add('text-mweb-text-dim', 'border-transparent');
        t.setAttribute('aria-selected', 'false');
      });
      panels.forEach(p => p.classList.add('hidden'));

      tab.classList.add('text-mweb-green', 'border-mweb-green', 'bg-mweb-surface-elevated');
      tab.classList.remove('text-mweb-text-dim', 'border-transparent');
      tab.setAttribute('aria-selected', 'true');

      const targetId = tab.getAttribute('data-term-target');
      const targetPanel = document.getElementById(targetId);
      if (targetPanel) targetPanel.classList.remove('hidden');
    });
  });
}

/* --------------------------------------------------------------------------
   4. Interactive Scope & Cost Estimator Console
   -------------------------------------------------------------------------- */
let updateEstimatorOutput = null;

function initEstimatorConsole() {
  const typeChips = document.querySelectorAll('.chip-project-type');
  const scopeChips = document.querySelectorAll('.chip-scope-tier');
  const addOnCheckboxes = document.querySelectorAll('.addon-checkbox');

  const priceOutput = document.getElementById('calc-price-output');
  const timeOutput = document.getElementById('calc-time-output');
  const applyBtn = document.getElementById('calc-transfer-btn');

  let currentType = 'flagship';
  let currentScope = 'standard';
  let currentCalculatedMax = 3500;
  let currentCalculatedMin = 2500;

  typeChips.forEach(chip => {
    chip.addEventListener('click', () => {
      typeChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      currentType = chip.getAttribute('data-type');
      calculate();
    });
  });

  scopeChips.forEach(chip => {
    chip.addEventListener('click', () => {
      scopeChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      currentScope = chip.getAttribute('data-tier');
      calculate();
    });
  });

  addOnCheckboxes.forEach(cb => {
    cb.addEventListener('change', calculate);
  });

  function calculate() {
    let basePrice = 2500;
    let minDays = 2;
    let maxDays = 4;

    if (currentType === 'flagship') {
      basePrice = 2500;
      minDays = 2;
      maxDays = 4;
    } else if (currentType === 'webapp') {
      basePrice = 3400;
      minDays = 3;
      maxDays = 5;
    } else if (currentType === 'commerce') {
      basePrice = 3000;
      minDays = 3;
      maxDays = 5;
    } else if (currentType === 'audit') {
      basePrice = 1500;
      minDays = 1;
      maxDays = 2;
    }

    if (currentScope === 'core') {
      basePrice *= 0.8;
      minDays = Math.max(1, minDays - 1);
      maxDays = Math.max(minDays + 1, maxDays - 1);
    } else if (currentScope === 'advanced') {
      basePrice *= 1.25;
      minDays += 1;
      maxDays += 1;
    }

    let hasExpedited = false;
    addOnCheckboxes.forEach(cb => {
      if (cb.checked) {
        basePrice += parseInt(cb.getAttribute('data-add-cost') || '0', 10);
        if (cb.getAttribute('data-add-cost') === '400') {
          hasExpedited = true;
        }
      }
    });

    if (hasExpedited) {
      minDays = Math.max(1, minDays - 1);
      maxDays = Math.max(minDays + 1, maxDays - 1);
    }

    // Calculate price spectrum
    let min = Math.round((basePrice * 0.9) / 50) * 50;
    let max = Math.round((basePrice * 1.15) / 50) * 50;

    // STRICT GUARANTEE: Price never rises above 6,000 EGP
    if (max > 6000) max = 6000;
    if (min > 5500) min = 5500;
    if (min >= max) min = max - 400;
    if (min < 1200) min = 1200;

    // STRICT GUARANTEE: Deadline never rises above 1 week (7 days)
    if (maxDays > 7) maxDays = 7;
    if (minDays >= maxDays) minDays = maxDays - 1;
    if (minDays < 1) minDays = 1;

    currentCalculatedMax = max;
    currentCalculatedMin = min;

    const isAr = currentLang === 'ar';
    const currency = isAr ? 'ج.م' : 'EGP';
    const daysLabel = isAr ? (maxDays <= 2 ? 'يوم' : 'أيام') : 'DAYS';
    const weekCappedNote = isAr ? '(حد أقصى أسبوع)' : '(Max 1 Week)';

    if (priceOutput) {
      priceOutput.textContent = `${min.toLocaleString()} – ${max.toLocaleString()} ${currency}`;
    }
    if (timeOutput) {
      timeOutput.textContent = `${minDays} – ${maxDays} ${daysLabel} ${weekCappedNote}`;
    }
  }

  updateEstimatorOutput = calculate;

  if (applyBtn) {
    applyBtn.addEventListener('click', () => {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });

        const budgetSelect = document.getElementById('inquiry-budget');
        if (budgetSelect) {
          if (currentCalculatedMax <= 3000) {
            budgetSelect.value = '1.5k-3k';
          } else if (currentCalculatedMax <= 4500) {
            budgetSelect.value = '3k-4.5k';
          } else {
            budgetSelect.value = '4.5k-6k';
          }
        }

        const msgInput = document.getElementById('inquiry-brief');
        if (msgInput) {
          const isAr = currentLang === 'ar';
          if (isAr) {
            msgInput.value = `[المواصفات التقنية]: ${currentType.toUpperCase()} // النطاق: ${currentScope.toUpperCase()}. الاستثمار التقديري: ${priceOutput.textContent}. الجدول الزمني: ${timeOutput.textContent}. نرجو مراجعة التفاصيل.`;
          } else {
            msgInput.value = `[CONFIGURATION]: ${currentType.toUpperCase()} // ${currentScope.toUpperCase()} tier. Estimated: ${priceOutput.textContent}. Timeline: ${timeOutput.textContent}. Please review our architecture scope.`;
          }
        }
      }
    });
  }

  calculate();
}

/* --------------------------------------------------------------------------
   5. FAQ Accordion
   -------------------------------------------------------------------------- */
function initAccordion() {
  const items = document.querySelectorAll('.mweb-accordion-item');

  items.forEach(item => {
    const header = item.querySelector('.mweb-accordion-header');
    if (!header) return;

    header.addEventListener('click', () => {
      const isOpen = item.classList.contains('active');

      items.forEach(other => {
        other.classList.remove('active');
        const btn = other.querySelector('.mweb-accordion-header');
        if (btn) btn.setAttribute('aria-expanded', 'false');
      });

      if (!isOpen) {
        item.classList.add('active');
        header.setAttribute('aria-expanded', 'true');
      }
    });
  });
}

/* --------------------------------------------------------------------------
   6. Inquiry Form Submission & Toast Alert
   -------------------------------------------------------------------------- */
function initInquiryForm() {
  const form = document.getElementById('mweb-inquiry-form');
  const toast = document.getElementById('mweb-toast-alert');
  const errorBox = document.getElementById('form-error-msg');

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('inquiry-name').value.trim();
    const email = document.getElementById('inquiry-email').value.trim();
    const brief = document.getElementById('inquiry-brief').value.trim();
    const isAr = currentLang === 'ar';

    if (errorBox) {
      errorBox.classList.add('hidden');
      errorBox.textContent = '';
    }

    if (!name) {
      showError(isAr ? "خطأ: يرجى كتابة الاسم أو اسم الشركة." : "NAME_REQUIRED: Please enter your name or company title.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      showError(isAr ? "خطأ: يرجى إدخال بريد إلكتروني صالح للعمل." : "EMAIL_INVALID: Please enter a valid business email address.");
      return;
    }

    if (!brief || brief.length < 8) {
      showError(isAr ? "خطأ: يرجى إدخال نبذة لا تقل عن 8 أحرف عن متطلبات المشروع." : "BRIEF_TOO_SHORT: Please provide a brief project summary (min 8 chars).");
      return;
    }

    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = `<span>${isAr ? 'جاري إرسال البيانات...' : 'DISPATCHING PACKET...'}</span>`;

    setTimeout(() => {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalText;
      form.reset();

      if (toast) {
        toast.classList.add('show');
        setTimeout(() => toast.classList.remove('show'), 5000);
      }
    }, 850);
  });

  function showError(msg) {
    if (errorBox) {
      errorBox.textContent = msg;
      errorBox.classList.remove('hidden');
    }
  }
}
