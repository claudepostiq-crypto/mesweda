// Ocean Iraq prototype content DB (sample copy, unverified, replace via CMS)
export const DB = {
  guides: [
    {id:'china-guide', cat:'دليل دولة', catEn:'Country guide', ar:'الدليل الشامل للشحن من الصين إلى العراق', en:'Complete Guide to Shipping from China to Iraq', dAr:'الطرق والمدد والتكاليف والمستندات المطلوبة، خطوة بخطوة.', dEn:'Routes, lead times, costs and documents, step by step.', mins:12, pattern:'sea'},
    {id:'customs', cat:'الجمارك', catEn:'Customs', ar:'التخليص الجمركي في العراق: المستندات والإجراءات', en:'Customs Clearance in Iraq: Documents and Process', dAr:'كل ما تحتاجه لتخليص شحنتك دون تأخير.', dEn:'Everything you need to clear cargo without delays.', mins:9, pattern:'land'},
    {id:'umm-qasr', cat:'الشحن البحري', catEn:'Sea freight', ar:'الشحن البحري إلى ميناء أم قصر', en:'Sea Freight to Umm Qasr', dAr:'دليل الميناء الأهم في العراق: الوصول، المناولة، والتخليص.', dEn:'Iraq\u2019s main port: arrival, handling and clearance.', mins:8, pattern:'sea'},
    {id:'air-vs-sea', cat:'الشحن', catEn:'Freight', ar:'الاختيار بين الشحن الجوي والبحري', en:'Choosing Between Air and Sea Freight', dAr:'متى تدفع أكثر مقابل السرعة، ومتى تنتظر وتوفر؟', dEn:'When speed is worth it, and when to wait and save.', mins:6, pattern:'air'},
    {id:'containers', cat:'الشحن البحري', catEn:'Sea freight', ar:'فهم أنواع الحاويات وأحجامها', en:'Understanding Container Types', dAr:'من حاويات 20 قدم إلى المبردة والمفتوحة، أيها يناسب بضاعتك؟', dEn:'From 20ft to reefer and open-top, which fits your cargo?', mins:7, pattern:'sea'},
    {id:'docs-checklist', cat:'الجمارك', catEn:'Customs', ar:'قائمة مستندات الاستيراد إلى العراق', en:'Import Documents Checklist', dAr:'قائمة تحقق قابلة للتنزيل بكل مستند تحتاجه قبل الشحن.', dEn:'A downloadable checklist of every document you need.', mins:5, pattern:'land'},
  ],
  services: [
    {id:'intl', ar:'الشحن الدولي', en:'International shipping', pattern:'air'},
    {id:'air', ar:'الشحن الجوي', en:'Air freight', pattern:'air'},
    {id:'sea', ar:'الشحن البحري', en:'Sea freight', pattern:'sea'},
    {id:'land', ar:'الشحن البري', en:'Land freight', pattern:'land'},
    {id:'customs-svc', ar:'التخليص الجمركي', en:'Customs clearance', pattern:'land'},
    {id:'warehousing', ar:'التخزين والمستودعات', en:'Warehousing', pattern:'land'},
    {id:'distribution', ar:'التوزيع', en:'Distribution', pattern:'land'},
    {id:'fulfilment', ar:'تجهيز الطلبات', en:'Fulfilment', pattern:'land'},
    {id:'procurement', ar:'دعم المشتريات', en:'Procurement support', pattern:'air'},
    {id:'scm', ar:'إدارة سلاسل التوريد', en:'Supply-chain management', pattern:'air'},
    {id:'project', ar:'شحنات المشاريع', en:'Project cargo', pattern:'sea'},
    {id:'coldchain', ar:'النقل المبرد', en:'Temperature-controlled', pattern:'sea'},
  ],
  countries: [
    {id:'cn', ar:'الصين', en:'China', mode:'sea', days:'25 إلى 35 يوم بحرًا'},
    {id:'tr', ar:'تركيا', en:'Türkiye', mode:'land', days:'5 إلى 10 أيام برًا'},
    {id:'ae', ar:'الإمارات', en:'UAE', mode:'sea', days:'7 إلى 12 يوم بحرًا'},
    {id:'sa', ar:'السعودية', en:'Saudi Arabia', mode:'land', days:'3 إلى 7 أيام برًا'},
    {id:'jo', ar:'الأردن', en:'Jordan', mode:'land', days:'2 إلى 5 أيام برًا'},
    {id:'kw', ar:'الكويت', en:'Kuwait', mode:'land', days:'2 إلى 4 أيام برًا'},
    {id:'qa', ar:'قطر', en:'Qatar', mode:'sea', days:'6 إلى 10 أيام بحرًا'},
    {id:'in', ar:'الهند', en:'India', mode:'sea', days:'14 إلى 20 يوم بحرًا'},
    {id:'eu', ar:'أوروبا', en:'Europe', mode:'air', days:'خيارات جوية وبحرية'},
    {id:'uk', ar:'المملكة المتحدة', en:'United Kingdom', mode:'air', days:'خيارات جوية وبحرية'},
    {id:'us', ar:'الولايات المتحدة', en:'United States', mode:'air', days:'خيارات جوية وبحرية'},
  ],
  industries: [
    {id:'construction', ar:'الإنشاءات', en:'Construction'},
    {id:'oilgas', ar:'النفط والغاز', en:'Oil & gas'},
    {id:'health', ar:'الرعاية الصحية', en:'Healthcare'},
    {id:'pharma', ar:'الأدوية', en:'Pharmaceuticals'},
    {id:'mfg', ar:'التصنيع', en:'Manufacturing'},
    {id:'retail', ar:'التجزئة', en:'Retail'},
    {id:'food', ar:'الأغذية', en:'Food'},
    {id:'ecom', ar:'التجارة الإلكترونية', en:'E-commerce'},
    {id:'gov', ar:'القطاع الحكومي', en:'Government'},
    {id:'ngo', ar:'المنظمات', en:'NGOs'},
    {id:'auto', ar:'السيارات', en:'Automotive'},
    {id:'tech', ar:'التقنية', en:'Technology'},
  ],
  faqs: [
    {q:'كم تستغرق الشحنة من الصين إلى بغداد؟', a:'عادة 25 إلى 35 يومًا بحرًا حتى أم قصر ثم 2 إلى 4 أيام برًا إلى بغداد. (محتوى تجريبي، بانتظار التحقق)', en:'How long does shipping from China to Baghdad take?'},
    {q:'ما المستندات المطلوبة للاستيراد التجاري؟', a:'فاتورة تجارية، قائمة تعبئة، بوليصة شحن، شهادة منشأ، وإجازة استيراد حسب نوع البضاعة. (محتوى تجريبي)', en:'What documents are required for commercial import?'},
    {q:'هل تتعاملون مع البضائع الخطرة؟', a:'نعم، ضمن اشتراطات التصنيف والتغليف والتوثيق المعتمدة دوليًا. (محتوى تجريبي)', en:'Do you handle dangerous goods?'},
    {q:'كم تبلغ تكلفة الحاوية؟', a:'تختلف حسب المنشأ والحجم والموسم، احجز مكالمة للحصول على تسعيرة دقيقة. (محتوى تجريبي)', en:'How much does a container cost?'},
    {q:'هل توفرون تخزينًا في بغداد؟', a:'نعم، مستودعات تجارية مع إدارة مخزون وتوزيع. (محتوى تجريبي)', en:'Do you offer warehousing in Baghdad?'},
    {q:'ما هي شروط التسليم Incoterms المناسبة لي؟', a:'يعتمد على من يتحمل مسؤولية النقل والتأمين، دليلنا يشرح كل شرط ببساطة. (محتوى تجريبي)', en:'Which Incoterms are right for me?'},
  ],
  glossary: [
    {term:'بوليصة الشحن', termEn:'Bill of Lading', def:'مستند يصدره الناقل يثبت استلام البضاعة وشروط نقلها.'},
    {term:'الرموز الجمركية', termEn:'HS Codes', def:'نظام دولي لتصنيف البضائع لأغراض الجمارك والرسوم.'},
    {term:'شروط التسليم', termEn:'Incoterms', def:'قواعد دولية تحدد مسؤوليات البائع والمشتري في النقل.'},
    {term:'حاوية كاملة', termEn:'FCL', def:'حجز حاوية كاملة لشحنة واحدة.'},
    {term:'حاوية مشتركة', termEn:'LCL', def:'مشاركة حاوية مع شحنات أخرى لتقليل التكلفة.'},
    {term:'شهادة المنشأ', termEn:'Certificate of Origin', def:'مستند يثبت بلد تصنيع البضاعة.'},
    {term:'التخليص الجمركي', termEn:'Customs Clearance', def:'إجراءات إدخال البضاعة رسميًا عبر الجمارك.'},
    {term:'الشحن متعدد الوسائط', termEn:'Multimodal', def:'نقل شحنة واحدة عبر أكثر من وسيلة (بحر + بر مثلًا).'},
  ],
  news: [
    {date:'تموز 2026', ar:'تحديث إجراءات المعاينة في ميناء أم قصر', en:'Inspection procedure update at Umm Qasr', tag:'الموانئ'},
    {date:'تموز 2026', ar:'دليل جديد: الشحن المبرد للأغذية والأدوية', en:'New guide: cold-chain for food & pharma', tag:'أدلة'},
    {date:'حزيران 2026', ar:'مواسم الذروة: كيف تخطط لشحنات نهاية السنة', en:'Peak season: planning year-end shipments', tag:'تخطيط'},
    {date:'حزيران 2026', ar:'تحديث مسارات الشحن البري من تركيا', en:'Land route updates from Türkiye', tag:'الطرق'},
    {date:'أيار 2026', ar:'قراءة في اشتراطات إجازة الاستيراد', en:'Understanding import licence requirements', tag:'الجمارك'},
  ],
  popular: ['تكاليف الشحن','التخليص الجمركي','الصين إلى العراق','تركيا إلى العراق','التخزين','إجازات الاستيراد','الشحن البحري','الشحن الجوي','البضائع المقيدة','شروط التسليم','أحجام الحاويات'],
  suggestions: ['الشحن من الصين إلى العراق','التخليص الجمركي في العراق','كم تبلغ تكلفة الحاوية؟','Sea freight to Iraq','Baghdad warehousing','Shipping from Türkiye','HS codes','Incoterms'],
};
export function search(q){
  const norm=s=>(s||'').toLowerCase();
  const nq=norm(q); if(!nq) return [];
  const out=[];
  const push=(type,typeAr,title,sub,extra)=>{out.push({type,typeAr,title,sub,extra})};
  for(const g of DB.guides){ if(norm(g.ar+g.en+g.dAr+g.dEn+g.cat+g.catEn).includes(nq)) push('article','الأدلة والمقالات',g.ar,g.en,g.mins+' دقائق قراءة'); }
  for(const s of DB.services){ if(norm(s.ar+s.en).includes(nq)) push('service','الخدمات',s.ar,s.en,''); }
  for(const c of DB.countries){ if(norm(c.ar+c.en).includes(nq)) push('country','أدلة الدول',('الشحن من '+c.ar+' إلى العراق'),c.en,c.days); }
  for(const f of DB.faqs){ if(norm(f.q+f.a+f.en).includes(nq)) push('faq','الأسئلة الشائعة',f.q,f.en,''); }
  for(const t of DB.glossary){ if(norm(t.term+t.termEn+t.def).includes(nq)) push('glossary','المصطلحات',t.term+'، '+t.termEn,t.def,''); }
  for(const n of DB.news){ if(norm(n.ar+n.en+n.tag).includes(nq)) push('news','آخر المستجدات',n.ar,n.en,n.date); }
  return out;
}
