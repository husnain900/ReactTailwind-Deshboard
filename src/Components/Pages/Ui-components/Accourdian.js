import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
const items = [
  'تسجيل حساب جديد في سلة',
  'إنشاء متجر جديد على سلة',
  'الأسئلة الشائعة حول متجرك الجديد على سلة',
];
const items1 = [
  'بطاقة المنتج وإضافة منتج جاهز جديد',
  'إدارة تصنيفات المنتجات',
  'إضافة خدمة حسب الطلب',
  'إدارة خيارات المنتج وطريقة ظهوره للعميل',
  'إضافة منتج أكل',
  'إضافة صور وفيديوهات المنتج',
  'إضافة منتج رقمي',
  'إضافة منتج الحجوزات',
  'جدول المقاسات',
  'إضافة بطاقة رقمية',
  'إضافة مجموعة منتجات',
  'إضافة منتج من نماذج/قوالب المنتجات',
  'إضافة MPN, GTIN لتعزيز ظهور المنتج على محركات البحث',
  'إعدادات التصفية والفلاتر',
  'تطبيق استيراد البيانات (منتجات - عملاء)  باستخدام الـ API',
  'استيراد البيانات (منتجات - عملاء) باستخدام الأكسل',
  'تحديث منتجات متجرك',
  'استيراد كميات وأسعار المنتجات',
  'التعديل الشامل على الأسعار',
  'التعديل الشامل على المنتجات',
  'اعلمني عند التوفر',
  'حول زر (المزيد) من صفحة المنتج',
  'حول الزر (خدمات) من صفحة المنتجات',
  'الماركات التجارية',
  'جرد المنتجات',
  'وسوم المنتجات',
  'ترتيب المنتجات',
  'اعلمني قبل نفاد الكمية',
  'وضع تاق على صور المنتجات في انستقرام',
];
const items2 = [
  'إضافة طلب جديد يدوياً',
  'إدارة استرجاع الطلبات',
  'الأسئلة الشائعة حول خيارات التحكم بالطلبات',
  'إضافة وتعديل وحذف الطلبات',
  'الأسئلة الشائعة حول استرجاع الطلبات',
  'تخصيص حالات الطلب',
  'إعداد إصدار فواتير الطلبات',
  'البحث وفرز الطلبات',
  'طباعة قائمة تجهيز الطلبات',
  'عرض وطباعة الفواتير الإلكترونية (الفاتورة الإلكترونية)',
  'إلغاء العميل للطلب قبل التنفيذ',
  'عرض تفاصيل الشحن في صفحة العميل',
  'تصدير الطلبات',
  'إضافة وسوم للطلب',
  'تحديد كل الطلبات واجراء تحرير سريع',
  'إسناد الطلبات للموظفين',
  'تفعيل الشراء السريع',
  'تحديث حالة الطلب باستيراد ملف أكسل',
  'استعادة الطلبات والمنتجات المحذوفة',
];
const items3 = [
  'كتابة مقالة جديد على مدونة متجرك',
  'إدارة مدونة متجرك على سلة',
  'إدارة نظام الولاء',
  'إضافة عرض خاص جديد',
  'إدارة صفحة السلات المتروكة',
  'تفعيل نظام ولاء العملاء',
  'تخصيص نص العروض الخاصة',
  'الأسئلة الشائعة حول نظام الولاء',
  'أسئلة شائعة حول العروض الخاصة',
  'التذكير بالسلة المتروكة بدون إرسال خصم',
  'العمل مع الحملات التسويقية',
  'التذكير بالسلة المتروكة مع إرسال خصم عليها',
  'إنشاء كوبون جديد',
  'خطوات الحصول على App signing key certificate',
  'بطاقات الإهداء الرقمية',
  'تفعيل الخصم المؤقت على السلات المتروكة',
  'تفعيل الطلب المباشر في المتجر',
  'إنشاء مجموعات كوبونات',
  'الربط بوبتن poptin للنوافذ المنبثقة',
  'أسئلة شائعة حول كوبونات التخفيض',
  'إكمال الطلب للسلات المتروكة',
  'الربط مع بريفي Privy للتسويق الإلكتروني',
  'الحد الأعلى للخصم في الكوبون',
  'التسويق بالعمولة',
  'أسئلة شائعة حول السلات المتروكة',
  'ربط الكوبون مع طريقة دفع معينة',
  'خيارات التحكم بالكوبونات وطريقة عرضها',
  'الكوبون التسويقي',
  'الربط مع PopupSmart لإدارة الحملات الإعلانية',
  'الربط مع تطبيق صفحات هبوط المنتج',
  'الإعلانات',
  'الربط مع Crazy Egg',
];

const items4 = {
  'ثيم المنيو': null,
  'إدارة متجر الثيمات وتصميم المتجر': null,
  'تخصيص تصميم المتجر': null,
  'تخصيص الصفحة الرئيسية': null,
  'بناء ثيم خاص بواسطة Twilight': null,
  'ثيم رقمي': null,
  'ثيم كليك': null,
  'ثيم موعد': null,
  'ثيم مختلف': null,
  'ثيم وسام': null,
  'ثيم زين': null,
  'ثيم رائد': null,
  'ثيم واثق': null,
  'ثيم امتياز': null,
  'ثيم منيو المطاعم': null,
  'ثيم فريد': null,
  'ثيم نمو': null,
};

const items5 = {
  'التسويق والأدوات التسويقية': null,
  'كتابة مقالة جديد على مدونة متجرك': null,
  'إدارة مدونة متجرك على سلة': null,
  'إدارة نظام الولاء': null,
  'إضافة عرض خاص جديد': null,
  'إدارة صفحة السلات المتروكة': null,
  'تفعيل نظام ولاء العملاء': null,
  'تخصيص نص العروض الخاصة': null,
  'الأسئلة الشائعة حول نظام الولاء': null,
  'أسئلة شائعة حول العروض الخاصة': null,
  'التذكير بالسلة المتروكة بدون إرسال خصم': null,
  'العمل مع الحملات التسويقية': null,
  'التذكير بالسلة المتروكة مع إرسال خصم عليها': null,
  'إنشاء كوبون جديد': null,
  'خطوات الحصول على App signing key certificate': null,
  'بطاقات الإهداء الرقمية': null,
  'تفعيل الخصم المؤقت على السلات المتروكة': null,
  'تفعيل الطلب المباشر في المتجر': null,
  'إنشاء مجموعات كوبونات': null,
  'الربط بوبتن poptin للنوافذ المنبثقة': null,
  'أسئلة شائعة حول كوبونات التخفيض': null,
  'إكمال الطلب للسلات المتروكة': null,
  'الربط مع بريفي Privy للتسويق الإلكتروني': null,
  'الحد الأعلى للخصم في الكوبون': null,
  'التسويق بالعمولة': null,
  'أسئلة شائعة حول السلات المتروكة': null,
  'ربط الكوبون مع طريقة دفع معينة': null,
  'خيارات التحكم بالكوبونات وطريقة عرضها': null,
  'الكوبون التسويقي': null,
  'الربط مع PopupSmart لإدارة الحملات الإعلانية': null,
  'الربط مع تطبيق صفحات هبوط المنتج': null,
  الإعلانات: null,
  'الربط مع Crazy Egg': null,
};
const items6 = [
  'توثيق المتجر',
  'محفظة المتجر',
  'إدارة طرق الدفع وتفعيل المدفوعات الإلكترونية',
  'تفعيل الربط مع بايبال PayPal',
  'إدارة سجل طلبات توثيق المتجر',
  'تعيين إعدادات الفوترة في المتجر',
  'إعدادات قيود الدفع',
  'تفعيل الربط مع اس تي سي باي STC Pay',
  'تفعيل وسيلة الدفع الآجل تابي Tabby',
  'أسئلة شائعة حول توثيق المتجر',
  'دعم حفظ بطاقات مدى',
];
const items7 = [
  'طريقة الطلب والشراء من متجر سلة',
  'إدارة باقة المتجر',
  'نقاط الولاء وكوبون الدعوة',
  'إدارة الاشتراك في باقات سلة عبر التطبيق برصيد ايتونز',
];
const items8 = [
  'خدمات الموقع الجغرافي Google maps',
  'خدمات الموقع الجغرافي here',
  'خدمات الموقع الجغرافي LocationIQ',
  'اوردريكا نظام إدارة الطلبات',
  'تواصل إشعارات واتساب',
  'اكتفيد - فيديو تفاعلي',
  'الربط مع تطبيق بوب اب سناب',
  'الربط مع تطبيق توليفاي بلس',
  'الربط مع روليت الكوبونات',
  'الربط مع تطبيق سلايد',
  'تطبيق كرم للمحادثات',
  'تطبيق واتساب لاين',
  'تطبيق شرنك ات',
  'ستوكزونز للدروب شيبينغ والشحن',
  'نقرات لتحليل البيانات',
  'الربط مع منصة أكس X',
  'التحقق من ملكية الموقع عبر Google site verification',
  'متجر التطبيقات',
  'الربط مع شركات SMS',
  'الربط مع شات بوت Chat Bot للمحادثات الآلية مع العملاء',
  'الربط مع كلافيو Klaviyo للبريد الإلكتروني والـ SMS',
  'الربط مع تطبيق convert flow للنوافذ المنبثقة',
  'الربط مع هيئة الزكاة والضريبة',
  'اشعارات الواتساب ريتش',
  'الربط مع Google Analytics',
  'إدارة التطبيقات المثبتة في متجرك',
  'الربط مع Yandex Metrica',
  'الربط مع هيب Heap لتتبع سلوك زوار المتجر',
  'الربط مع فيسبوك كونتاكت أس',
  'الربط مع أكس بكسل كتالوج X Pixel - Catalog',
  'الربط مع تطبيق مسجات',
  'تفاصيل Tafaseel لتحسين ظهور منتجاتك',
  'نظام السعد المحاسبي',
  'الربط مع إعلانات جوجل Google AdWords',
  'تثبيت تطبيق من متجر تطبيقات سلة',
  'الربط مع خدمة البريد Mailchimp',
  'الربط مع Microsoft Clarity لفهم سلوك العملاء',
  'تطبيق دعم الصور ثلاثية الأبعاد 3D Images',
  'الربط مع لينك عربي للتسويق بالعمولة',
  'الربط مع Unifonic SMS',
  'الربط مع واتساب سيراشات',
  'محدث أسعار الذهب',
  'ربط المنتجات مع كتالوج المنتجات لـسوق منصة X',
  'طريقة الربط مع Google Tag Manager',
  'الربط مع Snap Pixel',
  'تثبيت تطبيق من مصدر خارجي',
  'إعداد G Suite',
  'الربط مع هاي فلو Heyflow للأسئلة الشائعة',
  'الربط مع شركة Hi SMS',
  'سيو برو SEO بالذكاء الاصطناعي',
  'الربط مع بلينك شات',
  'الربط مع تطبيق مزدهر',
  'الربط مع إنفينيتي جويليري للمحاسبة',
  'الربط مع بريد ياهو Yahoo Mail',
  'الربط مع واتس لووب جو Whatsloop',
  'Smart Observer لتتبع التحويلات باستخدام Conversion API',
  'الربط مع Snapchat Conversion API',
  'الربط مع فور جوالي 4jawaly',
  'طريقة إنشاء تطبيقات خاصة ونشرها',
  'ربط مع نظام اودو - روابط المعرفة',
  'بوب أتو لجدولة تخفيضات المنتجات',
  'أسئلة شائعة حول Google Tag Manager',
  'ربط تجارتك مع مركز جوجل للبيع بالتجزئة Google Merchant Center',
  'الربط مع كتالوجات المنتجات snapchat catalog',
  'الأسئلة الشائعة حول متجر تطبيقات سلة',
  'إنشاء بريد عمل عن طريق زوهو Zoho',
  'الربط مع ماوس فلو mouseflow لتحليل سلوك المستخدم',
  'أداة عرض الصور 360 درجة',
  'الربط مع المدار التقني orbit SMS',
  'الربط مع سوشيال بوت لأتمتت خدمة العملاء',
  'الربط مع تطبيق النوافذ المنبثقة لمؤقت العد التنازلي',
  'الربط مع نتسويت NETsuite',
  'أسئلة شائعة حول مركز جوجل للبيع بالتجزئة Google Merchant Center',
  'الربط مع تيك توك بكسل - كاتالوج TikTok Pixel - Catalog',
  'الربط المحاسبي ZOHOBOOKS',
  'الربط مع JAWAL B SMS',
  'الربط مع Outlook',
  'الربط مع سمارت لوك Smartlook لتحليل سلوك العملاء',
  'الربط مع عبقري-بوت',
  'الربط مع تطبيق Convert Sales',
  'دليل أعمال دروب شيبينغ للبطاقات الرقمية',
  'عدسة تكبير الصورة',
  'الربط مع قيود',
  'الربط مع ملاذ SMS',
  'بيفاتل بيزنس شات',
  'مسرد AI',
  'تطبيق بين حلول للدروبشيبنج والخدمات اللوجستية',
  'الربط مع TikTok Conversion Api',
  'الربط مع تاجر تقرير',
  'الربط مع دفترة',
  'الربط مع بنترست pinterest',
  'الربط مع رسائلنا للرسائل النصية',
  'الربط مع browsee لفهم وتحليل العملاء',
  'الربط مع اد واتس AdWhats',
  'الربط مع قصص Smartarget',
  'الربط مع تطبيق أهلا',
  'الربط مع Adroll',
  'الربط مع خدمة تقنيات للرسائل النصية',
  'الربط مع Heatmap لعرض الخرائط الحرارية لمتجرك',
  'الربط مع Corner Ribbon للترويج للعروض الخاصة',
  'الربط مع بزنس شات BusinessChat.io',
  'تطبيق تأكيد الطلبات من إينوكولز Innocalls',
  'مستر تحصيل - لتحصيل المبالغ المعلقة والمرتجعات',
  'إعداد مدير الأعمال على فيسبوك',
  'الربط مع شامل SMS',
  'الربط مع جست أونو justuno لتفعيل حركة زوار المتجر',
  'الربط مع Button Builder',
  'الربط مع تطبيق إيزي كونكت',
  'الربط مع تطبيق كندي',
  'برنامج حل للمحاسبة وتخطيط الموارد',
  'ربط فيسبوك بيكسل Facebook Pixel مع متجرك',
  'الربط مع مكلدجر McLedger',
  'الربط مع وسيلة واتساب',
  'الربط مع تطبيق Reviews لعرض تقييمات العملاء',
  'الربط مع تطبيق Looxv لتعديل الصور',
  'الربط مع مينافلو Menaflow',
  'الربط مع Social Proof Sales',
  'الربط مع تطبيق FAQ للإجابة عن الأسئلة الشائعة',
  'الربط مع تطبيق راسلنا',
  'الربط مع تطبيق أوميت ERP',
  'الربط مع Facebook Conversion API',
  'الربط مع Facebook - Instagram Catalog لإدارة الكتالوجات',
  'الربط مع كرزون إشعارت واتساب',
  'الربط مع إكزيت بوب أب Exit Popup من Smartarget',
  'الربط مع نوتي موني NotiMoney',
  'سند لإدارة الموارد البشرية',
  'الربط مع تطبيق لتس بوت lets bot',
  'الربط مع اتصل بنا Contact Us - All in one من Smartarget',
  'الربط مع شريط الرسائل مسج بار Message Bar',
  'الربط مع كودماب codemap للتسويق بالعمولة',
  'الربط مع تطبيق كاشيرك',
  'MutualDropship للدروبشيبيغ',
  'الربط مع ميك make لأتمتة الأعمال',
  'الربط مع تطبيق النوافذ المنبثقة Popup من Smartarget',
  'الربط مع نموذج الاتصال Contact Form',
  'تطبيق ReturnPlus لإدارة استرجاع الطلبات',
  'الربط مع منصة زابير Zapier',
  'الربط مع Click to call للدعم عبر الهاتف',
  'الربط مع كارتات واتساب',
  'الربط مع إدارة للمحاسبة والمستودعات',
  'الربط مع Hotjar',
  'الربط مع Telegram - Contact Us',
  'الربط مع Upp Rewards للمكافآت',
  'الربط مع اوتو واتس Auto Whats',
  'الربط مع كاشو لتحصيل مبالغ طلبات الدفع عند الاستلام',
  'لايك كارد LikeCard للبطاقات الإلكترونية',
  'الربط مع سمارت تارجت واتساب Smartarget Whatsapp',
  'الربط مع فيسبوك - فولو أس',
  'الربط مع وازن ERP',
  'الربط مع عجلة الحظ من Smartarget',
  'الربط مع نيراشات بوت واتساب',
  'الربط مع أمان سوفت للمحاسبة',
  'الربط مع خدمة لايف غولد',
  'الربط مع فال واتساب Faal WhatsApp',
  'الربط مع بوب أب فورمز من Smartarget',
  'تطبيق ربط سلة مع نظام اودو odoo من EASY ARPS',
  'الربط مع منصة مساق',
  'الربط مع سهل بوكس SahelBooks',
  'الربط مع الزبون باك - الواتس آب يرفع مبيعاتك',
  'الشراكة مع باشنورز',
  'الربط مع دردش',
  'الربط مع نيرابوس للمحاسبة',
  'الربط مع Freshworks',
  'الربط مع التسويق بالعمولة للغير Lavana',
  'الربط مع إيراد/ دفاتر للمحاسبة',
  'الربط مع kayako',
  'الربط مع تطبيق فرس للفوترة',
  'الربط مع اوتو تاغ Auto tag لتمييز العملاء',
  'الربط مع Hubspot',
  'الربط مع وافق Wafeq لأتمتة المحاسبة',
  'الربط مع تيك توك فلو أس TikTok - Follow Us',
  'الربط مع Chatra',
  'الربط مع متصل للربط مع الواتساب المؤسسي',
  'الربط مع أودو Odoo لإدارة حسابات المتجر',
  'ليدات leadat لرفع أداء الحملات الإعلانية',
  'الربط مع Zendesk',
  'الربط مع جرين بيل Greenbill لحفظ الفواتير وبطاقات الولاء',
  'الربط مع عين لإدارة الأعمال',
  'الربط مع تطبيق بونات Bonat لولاء العملاء',
  'الربط مع WisePops',
  'تفعيل الربط مع Get Button',
  'الشراكة مع رسال',
  'الربط مع Tawk.to',
  'الربط مع Tidio',
  'الربط مع سوشال فولو أس Social Follow Us',
  'الربط مع Intercom',
  'الربط مع قلام Glam للسلات المتروكة',
  'الربط مع Crisp',
  'الربط مع منصة فومو fomoo',
  'الربط مع Facebook Messenger',
  'الربط مع منجم الذهب',
  'الربط مع Live Chat',
  'الربط مع منصة أبخص',
  'الربط مع Chaport',
  'E2G إيست تو قلوبال East2Global',
  'الشراكة مع المخازن الإلكترونية',
];
const items9 = [
  'خطوات الاشتراك بخدمة صانع التطبيقات من سلة',
  'كيفية إنشاء Apple ID وإدارته',
  'الربط مع AppsFlyer لقياس عوائد الحملات الإعلانية',
  'ما هي خدمة صانع التطبيقات؟',
  'اختيار أيقونة التطبيق',
  'ابدأ بتصميم التطبيق',
  'تصميم التطبيق بالقالب الافتراضي- الصفحة الرئيسية',
  'اختيار اسم التطبيق',
  'إنشاء حساب مطور Apple - كأفراد',
  'الأسئلة الشائعة حول الربط مع AppsFlyer',
  'إنشاء حساب مطور Apple - كشركة أو مؤسسة',
  'اختيار عنوان ووصف التطبيق',
  'تصميم التطبيق بالقالب الافتراضي- التصنيفات',
  'معرف الشركة العالمي رقم DUNS',
  'تصميم التطبيق بالقالب الافتراضي - قوالب التصنيفات',
  'تصميم التطبيق بالقالب الافتراضي-الشريط العلوي والتبويبات',
  'إنشاء حساب مطور Apple عبر تطبيق الجوال',
  'تصميم التطبيق بالقالب الافتراضي - شاشات البداية',
  'إنشاء حساب مطور Apple - مرحلة إتمام الدفع',
  'تصميم التطبيق بالقالب الافتراضي - صفحة تفاصيل المنتج',
  'طلب المساعدة من دعم Apple عن طريق البريد',
  'تصميم التطبيق بالقالب الافتراضي-إعدادت عامة',
  'طلب المساعدة من دعم Apple عن طريق الاتصال',
  'تصميم التطبيق باستخدام قالب المنيو',
  'معاينة التطبيق من صفحة صانع التطبيقات',
  'كيفية تحويل الحساب من فردي إلى حساب شركة',
  'دعم الصور المتحركة (الموشن) في صانع التطبيقات',
  'لوحة تحكم حساب مطور أبل Apple Developer Account',
  'عرض إحصائيات تطبيق أبل App Analytics',
  'صفحة إدارة التطبيق الأساسية My Apps',
  'شراء تحديث لبيانات التطبيق',
  'أسئلة شائعة حول التطبيق',
  'شراء حساب على جوجل بلاي Google Play Console',
  'استخدم Google Play Console لتتبع أداء التطبيق',
  'عرض إحصائيات حول أداء التطبيق على Google Play',
  'عرض تقييمات ومراجعات التطبيق على Google Play',
  'الإدارة الموحدة للتطبيق والمتجر',
  'ربط التطبيق مع خدمة المحادثة Intercom',
  'ربط التطبيق مع خدمة المحادثة Zendesk',
  'ربط التطبيق مع الخدمة الإحصائية Firebase',
  'سياسة نشر التطبيق في متجر التطبيقات',
];
const items10 = [
  'موظفو المتجر',
  'دليل إعدادات خيارات المتجر',
  'إدارة دومين متجرك على سلة',
  'تفعيل تعدد اللغات في متجرك',
  'التحكم بحساب المتجر',
  'حجز دومين جديد من سلة',
  'إعداد خيارات الطلبات',
  'التحكم باللغات المضافة للمتجر',
  'ربط دومين جديد من خارج سلة',
  'الإعدادات الأساسية للمتجر',
  'إعداد خيارات المنتجات',
  'ترجمة المتجر باستخدام الترجمة الفورية',
  'نقل دومين بين متاجر سلة',
  'إعداد خيارات العملاء',
  'الترجمة اليدوية للمتجر باستخدام محرر النصوص',
  'شراء خدمة نقل الدومين',
  'طريقة إدخال البيانات باللغات المختلفة',
  'إعداد خيارات الأسئلة والتقييمات',
  'الأسئلة الشائعة حول إدارة الدومين',
  'الأسئلة الشائعة حول اللغات',
  'إثبات ملكية الدومين لحسابك وإدارة الـ DNS',
  'إعداد خيارات كوبونات التخفيض',
  'إنشاء عناوين بريد إلكتروني مرتبطة بدومين المتجر',
  'إعداد الخيارات العامة للمتجر',
  'تحسين تخصيص قائمة تجهيز الطلبات',
  'تحديد موقع العميل على الخريطة',
  'تخصيص متى يتم تحويل الطلب إلى تمّ التنفيذ',
  'تفعيل الكوبون في سلة المشتريات',
  'إعدادات فروع ومستودعات المتجر',
  'التحكم في عرض منتجات (ربما تعجبك)',
  'استعراض سجل تصدير الملفات',
  'وضع الصيانة',
];
const items11 = [
  'عزز مبيعات متجرك من خلال بطاقات الهدايا',
  'أفكار ترويجية لمتجرك',
  'أساسيات حول حملات إعادة الاستهداف Retargeting',
  'إعادة الإستهداف على سناب شات snapchat',
  'ضاعف تفاعل عملائك من خلال نظام الولاء',
  'أهم الاستراتيجيات لنجاح التسويق بالعمولة في متجرك',
  'أفكار لتسويق متجرك بيوم تأسيس المملكة',
  'إعادة الاستهداف على منصة X',
  'زيادة المبيعات من خلال السلات المتروكة',
  'حملة إعادة الاستهداف على تيك توك TikTok',
  'تحسين حملاتك الإعلانية بتفعيل الإحالات الناجحة المحسنة',
  'مضاعفة مبيعاتك من خلال تقسيم العملاء',
  'كتابة إعلانات تحقق استجابة مباشرة وجذب انتباه الجمهور المستهدف',
  'حفّز العملاء على تكرار الشراء',
  'تعزيز الثقة بمتجرك الالكتروني باستخدام مفهوم الدليل الاجتماعي',
  'إعادة الاستهداف على Google',
  'ضاعف مبيعاتك بتخصيص كوبونات التخفيض لعملاء محددين',
  'أفضل الممارسات لإعداد كتالوج احترافي على Facebook',
  'إعادة الاستهداف على فيسبوك Facebook',
  'إنشاء إعلان على منصة انستقرام instagram',
  'زيادة مبيعاتك من خلال المسوقين بالعمولة',
];
const items12 = [
  'طريقة تفعيل تطبيق ولاء العملاء من سلة في متجرك الالكتروني.',
  'طريقة إدارة تطبيق ولاء العملاء في متجرك الالكتروني.',
  'طريقة تثبيت Google ads وتفعيله في متجرك الالكتروني.',
  'كيف تنشئ حملتك الإعلانية الأولى عن طريق Google ads',
  'طريقة تفعيل تطبيق متاجر التجزئة في متجرك.',
  'طريقة إضافة منتج الحجوزات وإدارته',
  'تطبيق بطاقات الإهداء - التثبيت والإعداد',
  'طريقة اختيار ثيم من متجر الثيمات لتصميم المتجر الإلكتروني.',
  'طريقة تخصيص الصفحة الرئيسية في تصميم المتجر الإلكتروني.',
  'طريقة تخصيص القوالب في متجر الثيمات في المتجر الإلكتروني.',
  'طريقة تعديل أسعار المنتجات في المتجر الإلكتروني.',
  'طريقة إستعادة البيانات المحذوفة في المتجر الإلكتروني.',
  'تفعيل ميزة أعلمني عند التوفّر في المتجر الإلكتروني.',
  'تفعيل ميزة الإقرار بالاستلام في المتجر الإلكتروني.',
  'طريقة إظهار عدد مرات الشراء في متجرك الإلكتروني.',
  'تفعيل ميزة تخصيص حالات الطلب في متجرك الإلكتروني.',
  'طريقة إصدار وثيقة العمل الحر للمتجر الإلكتروني.',
  'طريقة تفعيل الشحن المجاني في متجرك الإلكتروني.',
  'طريقة إضافة مندوب توصيل لمتجرك الإلكتروني.',
  'طريقة إنشاء رابط التسويق بالعمولة لمتجرك الإلكتروني.',
  'طريقة استيراد المنتجات إلى متجرك الإلكتروني.',
  'طريقة إنشاء الصفحات التعريفية في متجرك الإلكتروني.',
  'طريقة إنشاء الحملات التسويقية في متجرك الإلكتروني.',
  'طريقة إنشاء كوبون تخفيض بمتجرك الإلكتروني.',
  'طريقة تفعيل ميزة الأسئلة والتقييمات بمتجرك الإلكتروني',
  'طريقة استخدام ميزة مجموعة العملاء على متجرك الإلكتروني.',
  'طريقة تخصيص رابط / دومين متجرك',
  'طريقة تحسين الظهور على محركات البحث SEO',
  'طريقة ربط قوقل أناليتكس مع متجرك الإلكتروني',
  'خطوات إدارة أول طلب في متجرك الإلكتروني',
  'خطوات إنشاء التطبيق بقالب منيو في صانع تطبيقات سلة',
  'كيفية ضبط الإعدادات الأساسية لمتجرك على سلة',
  'نظام المدفوعات الإلكترونية في متجرك',
  'طريقة إدارة الاسترجاع الكامل والجزئي للطلبات',
  'طريقة تعديل بيانات و كميات منتجات متجرك الالكتروني',
  'طريقة إضافة خيارات متعددة لمنتجاتك وإدارتها',
  'كيفية التسويق لعملاء السلات المتروكة',
  'طريقة إدارة طلبات متجرك',
  'طريقة تخصيص العروض الخاصة بمتجرك الالكتروني',
  'إضافة أول منتج والتحكم ببياناته',
  'طريقة ضبط إعدادات الفوترة لمتجرك في سلة',
  'طريقة إدارة المحفظة والفواتير بمتجرك على سلة',
  'طريقة إعداد منتج بطاقة رقمية في سلة',
  'طريقة إعداد منتجات حسب الطلب',
  'طريقة إعداد المنتج الرقمي في سلة',
  'طريقة تصنيف منتجات متجرك',
  'سلسلة تفعيل اللغات',
  'تصميم متجرك باستخدام ثيم نمو',
  'طريقة التحقق من صحة بيانات التاجر',
  'بوليصات الشحن خطوة بخطوة',
  'التسويق بالعمولة',
  'صانع التطبيقات',
  'الربط مع سناب كتالوج',
  'طريقة ربط متجرك مع جوجل ميرشنت Google Merchant',
  'تويتر بكسل Twitter Pixel',
  'تيك توك بيكسل TikTok Pixel',
  'فيسبوك بيكسل Facebook Pixel',
  'سناب بيكسل Snapchat Pixel',
  'طريقة ربط أداة Yandex Metrica',
];

export default function AccordionUsage() {
  return (
    <div>
      <Accordion className="shadow-none py-2" defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          className="hover:text-[#76E8D0] duration-200 cursor-pointer"
          aria-controls="panel3-content"
          id="panel3-header"
        >
          إعداد المتجر لأول مرة{' '}
        </AccordionSummary>
        <AccordionDetails>
          <ul>
            {items.map((item, index) => (
              <li key={index}>
                <a
                  className="hover:text-[#76E8D0] duration-200 cursor-pointer mb-2"
                  href="#"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </AccordionDetails>
        <AccordionActions></AccordionActions>
      </Accordion>
      <Accordion className="shadow-none py-2">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          className="hover:text-[#76E8D0] duration-200 cursor-pointer"
          aria-controls="panel3-content"
          id="panel3-header"
        >
          المنتجات{' '}
        </AccordionSummary>
        <AccordionDetails>
          <ul>
            {items1.map((item, index) => (
              <li key={index}>
                <a
                  className="hover:text-[#76E8D0] duration-200 cursor-pointer"
                  href="#"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </AccordionDetails>
        <AccordionActions></AccordionActions>
      </Accordion>
      <Accordion className="shadow-none py-2">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          className="hover:text-[#76E8D0] duration-200 cursor-pointer"
          aria-controls="panel3-content"
          id="panel3-header"
        >
          الطلبات
        </AccordionSummary>
        <AccordionDetails>
          <ul>
            {items2.map((item, index) => (
              <li key={index}>
                <a
                  className="hover:text-[#76E8D0] duration-200 cursor-pointer mb-2"
                  href="#"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </AccordionDetails>
        <AccordionActions></AccordionActions>
      </Accordion>
      <Accordion className="shadow-none py-2">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          className="hover:text-[#76E8D0] duration-200 cursor-pointer"
          aria-controls="panel1-content"
          id="panel1-header"
        >
          التسويق والأدوات التسويقية
        </AccordionSummary>
        <AccordionDetails>
          <ul>
            {items3.map((item, index) => (
              <li key={index}>
                <a
                  className="hover:text-[#76E8D0] duration-200 cursor-pointer"
                  href="#"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </AccordionDetails>
      </Accordion>
      <Accordion className="shadow-none py-2">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          className="hover:text-[#76E8D0] duration-200 cursor-pointer"
          aria-controls="panel2-content"
          id="panel2-header"
        >
          الثيمات وتصميم المتجر
        </AccordionSummary>
        <AccordionDetails>
          <ul>
            {Object.keys(items4).map((item, index) => (
              <li key={index}>
                <a
                  className="hover:text-[#76E8D0] duration-200 cursor-pointer"
                  href="#"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </AccordionDetails>
      </Accordion>

      <Accordion className="shadow-none py-2">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          className="hover:text-[#76E8D0] duration-200 cursor-pointer"
          aria-controls="panel1-content"
          id="panel1-header"
        >
          الشحن والتوصيل
        </AccordionSummary>
        <AccordionDetails>
          <ul>
            {Object.keys(items5).map((item, index) => (
              <li key={index}>
                <a
                  className="hover:text-[#76E8D0] duration-200 cursor-pointer"
                  href="#"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </AccordionDetails>
      </Accordion>

      <Accordion className="shadow-none py-2">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          className="hover:text-[#76E8D0] duration-200 cursor-pointer"
          aria-controls="panel2-content"
          id="panel2-header"
        >
          إدارة المدفوعات ومحفظة المتجر{' '}
        </AccordionSummary>
        <AccordionDetails>
          <ul>
            {items6.map((item, index) => (
              <li key={index}>
                <a
                  className="hover:text-[#76E8D0] duration-200 cursor-pointer mb-2"
                  href="#"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </AccordionDetails>
      </Accordion>
      <Accordion className="shadow-none py-2">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          className="hover:text-[#76E8D0] duration-200 cursor-pointer"
          aria-controls="panel1-content"
          id="panel1-header"
        >
          باقات ومتجر سلة{' '}
        </AccordionSummary>
        <AccordionDetails>
          <ul>
            {items7.map((item, index) => (
              <li key={index}>
                <a
                  className="hover:text-[#76E8D0] duration-200 cursor-pointer mb-2"
                  href="#"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </AccordionDetails>
      </Accordion>
      <Accordion className="shadow-none py-2">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          className="hover:text-[#76E8D0] duration-200 cursor-pointer"
          aria-controls="panel2-content"
          id="panel2-header"
        >
          متجر التطبيقات{' '}
        </AccordionSummary>
        <AccordionDetails>
          <ul>
            {items8.map((item, index) => (
              <li key={index}>
                <a
                  className="hover:text-[#76E8D0] duration-200 cursor-pointer mb-2"
                  href="#"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </AccordionDetails>
      </Accordion>
      <Accordion className="shadow-none py-2">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          className="hover:text-[#76E8D0] duration-200 cursor-pointer"
          aria-controls="panel1-content"
          id="panel1-header"
        >
          صانع التطبيقات{' '}
        </AccordionSummary>
        <AccordionDetails>
          <ul>
            {items9.map((item, index) => (
              <li key={index}>
                <a
                  className="hover:text-[#76E8D0] duration-200 cursor-pointer mb-2"
                  href="#"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </AccordionDetails>
      </Accordion>
      <Accordion className="shadow-none py-2">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          className="hover:text-[#76E8D0] duration-200 cursor-pointer"
          aria-controls="panel2-content"
          id="panel2-header"
        >
          إعدادات وخيارات المتجر{' '}
        </AccordionSummary>
        <AccordionDetails>
          <ul>
            {items10.map((item, index) => (
              <li key={index}>
                <a
                  className="hover:text-[#76E8D0] duration-200 cursor-pointer mb-2"
                  href="#"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </AccordionDetails>
      </Accordion>
      <Accordion className="shadow-none py-2">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          className="hover:text-[#76E8D0] duration-200 cursor-pointer"
          aria-controls="panel2-content"
          id="panel2-header"
        >
          تلميحات التسويق وإعادة الاستهداف{' '}
        </AccordionSummary>
        <AccordionDetails>
          <ul>
            {items11.map((item, index) => (
              <li key={index}>
                <a
                  className="hover:text-[#76E8D0] duration-200 cursor-pointer mb-2"
                  href="#"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </AccordionDetails>
      </Accordion>
      <Accordion className="shadow-none py-2">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          className="hover:text-[#76E8D0] duration-200 cursor-pointer"
          aria-controls="panel1-content"
          id="panel1-header"
        >
          الفيديوهات التعليمية{' '}
        </AccordionSummary>
        <AccordionDetails>
          <ul>
            {items12.map((item, index) => (
              <li key={index}>
                <a
                  className="hover:text-[#76E8D0] duration-200 cursor-pointer mb-2"
                  href="#"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </AccordionDetails>
      </Accordion>
      {/* <Accordion className="shadow-none py-2">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          className="hover:text-[#76E8D0] duration-200 cursor-pointer"
          aria-controls="panel2-content"
          id="panel2-header"
        >
          إعداد المتجر لأول مرة
        </AccordionSummary>
        <AccordionDetails>
          <ul>
            {items.map((item, index) => (
              <li key={index}>
                <a
                  className="hover:text-[#76E8D0] duration-200 cursor-pointer mb-2"
                  href="#"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </AccordionDetails>
      </Accordion> */}
    </div>
  );
}
