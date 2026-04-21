import { useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMAGE = "https://cdn.poehali.dev/projects/e59cb36a-ce44-48ae-a3e8-d42ac89c7838/files/c01a3734-664e-4be7-9b2e-9cf4967a5043.jpg";

const NAV_ITEMS = [
  { id: "home", label: "Главная" },
  { id: "production", label: "О производстве" },
  { id: "brand", label: "О бренде" },
  { id: "catalog", label: "Каталог" },
  { id: "certificates", label: "Сертификаты" },
  { id: "news", label: "Новости" },
  { id: "delivery", label: "Доставка" },
  { id: "contacts", label: "Контакты" },
];

const PRODUCTS = [
  { id: 1, name: "Смазка промышленная МС-1000", category: "Смазки", packing: "1 кг", desc: "Высокотемпературная смазка для подшипников и узлов качения", article: "MC-1000-1" },
  { id: 2, name: "Смазка промышленная МС-1000", category: "Смазки", packing: "5 кг", desc: "Высокотемпературная смазка для подшипников и узлов качения", article: "MC-1000-5" },
  { id: 3, name: "Смазка промышленная МС-1000", category: "Смазки", packing: "18 кг", desc: "Высокотемпературная смазка для подшипников и узлов качения", article: "MC-1000-18" },
  { id: 4, name: "Масло гидравлическое ИГП-30", category: "Масла", packing: "5 л", desc: "Минеральное масло для гидравлических систем с рабочим давлением до 350 бар", article: "IGP-30-5" },
  { id: 5, name: "Масло гидравлическое ИГП-30", category: "Масла", packing: "20 л", desc: "Минеральное масло для гидравлических систем с рабочим давлением до 350 бар", article: "IGP-30-20" },
  { id: 6, name: "Масло гидравлическое ИГП-30", category: "Масла", packing: "200 л", desc: "Минеральное масло для гидравлических систем с рабочим давлением до 350 бар", article: "IGP-30-200" },
  { id: 7, name: "Антикоррозийный состав АК-70", category: "Защита металла", packing: "1 кг", desc: "Защитное покрытие от коррозии для промышленного оборудования", article: "AK-70-1" },
  { id: 8, name: "Антикоррозийный состав АК-70", category: "Защита металла", packing: "5 кг", desc: "Защитное покрытие от коррозии для промышленного оборудования", article: "AK-70-5" },
  { id: 9, name: "Промывочная жидкость ПЖ-120", category: "Очистители", packing: "5 л", desc: "Концентрат для промывки топливных и масляных систем", article: "PJ-120-5" },
  { id: 10, name: "Промывочная жидкость ПЖ-120", category: "Очистители", packing: "20 л", desc: "Концентрат для промывки топливных и масляных систем", article: "PJ-120-20" },
  { id: 11, name: "Редукторное масло РМ-680", category: "Масла", packing: "10 л", desc: "Синтетическое масло для редукторов и зубчатых передач", article: "RM-680-10" },
  { id: 12, name: "Редукторное масло РМ-680", category: "Масла", packing: "200 л", desc: "Синтетическое масло для редукторов и зубчатых передач", article: "RM-680-200" },
];

const CATEGORIES = ["Все", "Смазки", "Масла", "Защита металла", "Очистители"];
const PACKINGS = ["Все", "1 кг", "5 кг", "5 л", "10 л", "18 кг", "20 л", "200 л"];

const PRICELISTS = [
  { name: "Полный прайс-лист", date: "Апрель 2026", size: "PDF, 420 КБ", file: "#" },
  { name: "Прайс-лист: Смазки", date: "Апрель 2026", size: "PDF, 180 КБ", file: "#" },
  { name: "Прайс-лист: Масла", date: "Апрель 2026", size: "PDF, 210 КБ", file: "#" },
  { name: "Прайс-лист: Защита металла", date: "Март 2026", size: "PDF, 95 КБ", file: "#" },
];

const CERTS = [
  { name: "ISO 9001:2015", org: "Система менеджмента качества", year: "2024" },
  { name: "ГОСТ Р ИСО 9001", org: "Национальный стандарт РФ", year: "2024" },
  { name: "ТУ 38.301-40-51", org: "Технические условия на масла", year: "2023" },
  { name: "Соответствие REACH", org: "Европейский регламент по химии", year: "2024" },
];

const NEWS = [
  { date: "15 апр 2026", title: "Расширение производственных мощностей в 2026 году", text: "Запущена новая линия по производству синтетических масел. Производительность увеличена на 40%." },
  { date: "02 мар 2026", title: "Участие в выставке Нефтегаз-2026", text: "Компания представила линейку новых продуктов для нефтегазовой отрасли на крупнейшей профессиональной выставке." },
  { date: "18 янв 2026", title: "Новый дистрибьютор в Сибирском федеральном округе", text: "Подписано соглашение о партнёрстве с ведущим поставщиком промышленной химии в регионе." },
];

const STATS = [
  { value: "25+", label: "Лет на рынке" },
  { value: "500+", label: "Наименований продукции" },
  { value: "3 000+", label: "Клиентов по России" },
  { value: "ISO 9001", label: "Сертификация качества" },
];

export default function Index() {
  const [activeSection, setActiveSection] = useState("home");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("Все");
  const [activePacking, setActivePacking] = useState("Все");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const filteredProducts = PRODUCTS.filter((p) => {
    const matchSearch =
      searchQuery === "" ||
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.article.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.desc.toLowerCase().includes(searchQuery.toLowerCase());
    const matchCat = activeCategory === "Все" || p.category === activeCategory;
    const matchPack = activePacking === "Все" || p.packing === activePacking;
    return matchSearch && matchCat && matchPack;
  });

  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollTo("home")}>
              <div className="w-8 h-8 fire-gradient flex items-center justify-center">
                <Icon name="Cog" size={18} className="text-white" />
              </div>
              <div>
                <div className="font-oswald font-700 text-lg leading-none tracking-wider text-foreground">ПРОМТЕХ</div>
                <div className="text-[9px] text-muted-foreground tracking-[0.2em] uppercase leading-none mt-0.5">Промышленное производство</div>
              </div>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-6">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`nav-link font-ibm text-sm tracking-wide transition-colors ${
                    activeSection === item.id ? "text-[hsl(var(--primary))]" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* CTA + Mobile */}
            <div className="flex items-center gap-3">
              <a href="tel:+78001234567" className="hidden sm:flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors">
                <Icon name="Phone" size={14} className="text-[hsl(var(--primary))]" />
                <span className="font-ibm">8 800 123-45-67</span>
              </a>
              <button
                className="lg:hidden p-2 text-muted-foreground hover:text-foreground"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <Icon name={mobileMenuOpen ? "X" : "Menu"} size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-border bg-background">
            <nav className="flex flex-col py-2">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className="px-6 py-3 text-left font-ibm text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="home" className="relative min-h-screen flex items-end pt-16">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${HERO_IMAGE})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/20" />
        <div className="absolute inset-0 steel-texture" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 pb-20 w-full">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-0.5 bg-[hsl(var(--primary))]" />
              <span className="font-ibm text-[hsl(var(--primary))] text-sm tracking-widest uppercase">С 1999 года</span>
            </div>
            <h1 className="font-oswald text-5xl sm:text-7xl font-bold leading-none tracking-tight text-foreground mb-6">
              ПРОМЫШЛЕННАЯ<br />
              <span className="text-[hsl(var(--primary))]">ХИМИЯ</span><br />
              ВЫСШЕГО КЛАССА
            </h1>
            <p className="font-ibm text-lg text-muted-foreground max-w-xl mb-10 leading-relaxed">
              Смазки, масла и защитные составы для тяжёлой промышленности.
              Сертифицировано по ISO 9001. Доставка по всей России.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => scrollTo("catalog")}
                className="fire-gradient text-white font-oswald font-500 text-sm tracking-widest uppercase px-8 py-4 hover:opacity-90 transition-opacity"
              >
                Перейти в каталог
              </button>
              <button
                onClick={() => scrollTo("contacts")}
                className="border border-border text-foreground font-oswald font-500 text-sm tracking-widest uppercase px-8 py-4 hover:border-[hsl(var(--primary))] hover:text-[hsl(var(--primary))] transition-colors"
              >
                Связаться с нами
              </button>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="absolute bottom-0 left-0 right-0 border-t border-border bg-background/90 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-border">
              {STATS.map((s) => (
                <div key={s.label} className="py-5 px-6 text-center">
                  <div className="font-oswald text-2xl font-bold text-[hsl(var(--primary))]">{s.value}</div>
                  <div className="font-ibm text-xs text-muted-foreground mt-1 tracking-wide">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* О ПРОИЗВОДСТВЕ */}
      <section id="production" className="py-24 scroll-mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="section-divider pb-10 mb-12">
            <h2 className="font-oswald text-4xl font-bold tracking-wide mt-6">О ПРОИЗВОДСТВЕ</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="font-ibm text-muted-foreground leading-relaxed mb-6 text-base">
                Наш завод оснащён современными производственными линиями с суммарной мощностью <strong className="text-foreground">12 000 тонн продукции в год</strong>. Контроль качества осуществляется на каждом этапе — от входного контроля сырья до отгрузки готовой продукции.
              </p>
              <p className="font-ibm text-muted-foreground leading-relaxed mb-8 text-base">
                Лабораторный комплекс площадью 800 м² позволяет проводить полный цикл испытаний по ГОСТ и международным стандартам. Каждая партия сопровождается паспортом качества.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: "Factory", label: "Площадь завода", value: "18 000 м²" },
                  { icon: "FlaskConical", label: "Объём производства", value: "12 000 т/год" },
                  { icon: "Users", label: "Сотрудников", value: "320 человек" },
                  { icon: "Microscope", label: "Лаборатория", value: "800 м²" },
                ].map((item) => (
                  <div key={item.label} className="bg-card border border-border p-4">
                    <Icon name={item.icon} size={20} className="text-[hsl(var(--primary))] mb-2" />
                    <div className="font-oswald text-xl font-bold text-foreground">{item.value}</div>
                    <div className="font-ibm text-xs text-muted-foreground mt-0.5">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="bg-card border border-border p-1">
                <img src={HERO_IMAGE} alt="Производство" className="w-full h-80 object-cover" />
              </div>
              <div className="absolute -bottom-4 -left-4 fire-gradient p-4 w-36 text-center">
                <div className="font-oswald text-3xl font-bold text-white">25+</div>
                <div className="font-ibm text-xs text-white/80 uppercase tracking-wide">лет опыта</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* О БРЕНДЕ */}
      <section id="brand" className="py-24 bg-card steel-texture scroll-mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="section-divider pb-10 mb-12">
            <h2 className="font-oswald text-4xl font-bold tracking-wide mt-6">О БРЕНДЕ</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <p className="font-ibm text-muted-foreground leading-relaxed mb-6 text-base">
                <strong className="text-foreground font-oswald text-xl">ПРОМТЕХ</strong> — российский производитель промышленной химии с более чем четвертьвековой историей. Мы специализируемся на разработке и производстве смазочных материалов, технических масел и защитных составов для предприятий машиностроения, металлургии, нефтегазового сектора и энергетики.
              </p>
              <p className="font-ibm text-muted-foreground leading-relaxed mb-8 text-base">
                В основе нашей работы — собственная научная база и партнёрство с ведущими исследовательскими институтами. Все рецептуры разработаны с учётом условий эксплуатации российских предприятий.
              </p>
              <div className="flex flex-wrap gap-3">
                {["Машиностроение", "Металлургия", "Нефтегаз", "Энергетика", "Горнодобыча", "Транспорт"].map((s) => (
                  <span key={s} className="border border-border font-ibm text-sm text-muted-foreground px-3 py-1.5 hover:border-[hsl(var(--primary))] hover:text-foreground transition-colors">
                    {s}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-4">
              {[
                { icon: "ShieldCheck", title: "Гарантия качества", text: "Паспорт качества на каждую партию" },
                { icon: "Award", title: "Сертификация", text: "ISO 9001:2015, ГОСТ Р ИСО 9001" },
                { icon: "Leaf", title: "Экобезопасность", text: "Соответствие REACH и экологическим нормам" },
                { icon: "Headphones", title: "Техподдержка", text: "Консультации инженеров-технологов" },
              ].map((item) => (
                <div key={item.title} className="flex gap-3 p-4 border border-border bg-background">
                  <Icon name={item.icon} size={20} className="text-[hsl(var(--primary))] mt-0.5 shrink-0" />
                  <div>
                    <div className="font-oswald text-sm font-bold text-foreground tracking-wide">{item.title}</div>
                    <div className="font-ibm text-xs text-muted-foreground mt-0.5">{item.text}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* КАТАЛОГ */}
      <section id="catalog" className="py-24 scroll-mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="section-divider pb-10 mb-12">
            <h2 className="font-oswald text-4xl font-bold tracking-wide mt-6">КАТАЛОГ ПРОДУКЦИИ</h2>
          </div>

          {/* Search + Pricelists */}
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Icon name="Search" size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder="Поиск по названию, артикулу или описанию..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-card border border-border pl-9 pr-4 py-3 font-ibm text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-[hsl(var(--primary))] transition-colors"
              />
              {searchQuery && (
                <button onClick={() => setSearchQuery("")} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground">
                  <Icon name="X" size={14} />
                </button>
              )}
            </div>
            <button
              onClick={() => scrollTo("pricelists")}
              className="flex items-center gap-2 border border-[hsl(var(--primary))] text-[hsl(var(--primary))] font-oswald text-sm tracking-widest uppercase px-5 py-3 hover:bg-[hsl(var(--primary))] hover:text-white transition-colors whitespace-nowrap"
            >
              <Icon name="Download" size={16} />
              Прайс-листы
            </button>
          </div>

          {/* Filters */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`font-ibm text-xs px-3 py-1.5 border transition-colors ${
                    activeCategory === cat
                      ? "border-[hsl(var(--primary))] bg-[hsl(var(--primary))] text-white"
                      : "border-border text-muted-foreground hover:border-foreground hover:text-foreground"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            <div className="flex flex-wrap gap-2 sm:border-l sm:border-border sm:pl-4">
              {PACKINGS.map((pack) => (
                <button
                  key={pack}
                  onClick={() => setActivePacking(pack)}
                  className={`font-ibm text-xs px-3 py-1.5 border transition-colors ${
                    activePacking === pack
                      ? "border-[hsl(var(--primary))] bg-[hsl(var(--primary))] text-white"
                      : "border-border text-muted-foreground hover:border-foreground hover:text-foreground"
                  }`}
                >
                  {pack}
                </button>
              ))}
            </div>
          </div>

          {/* Results count */}
          <div className="flex items-center justify-between mb-6">
            <span className="font-ibm text-sm text-muted-foreground">
              Найдено: <strong className="text-foreground">{filteredProducts.length}</strong> позиций
            </span>
            {(searchQuery || activeCategory !== "Все" || activePacking !== "Все") && (
              <button
                onClick={() => { setSearchQuery(""); setActiveCategory("Все"); setActivePacking("Все"); }}
                className="font-ibm text-xs text-[hsl(var(--primary))] hover:underline"
              >
                Сбросить фильтры
              </button>
            )}
          </div>

          {/* Products grid */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {filteredProducts.map((product) => (
                <div key={product.id} className="group bg-card border border-border hover:border-[hsl(var(--primary))]/50 transition-all duration-200">
                  <div className="p-5">
                    <div className="flex items-start justify-between gap-2 mb-3">
                      <span className="font-ibm text-[10px] text-[hsl(var(--primary))] uppercase tracking-widest border border-[hsl(var(--primary))]/30 px-2 py-0.5">
                        {product.category}
                      </span>
                      <span className="font-ibm text-[10px] text-muted-foreground border border-border px-2 py-0.5">
                        {product.packing}
                      </span>
                    </div>
                    <h3 className="font-oswald text-base font-bold text-foreground leading-snug mb-2 group-hover:text-[hsl(var(--primary))] transition-colors">
                      {product.name}
                    </h3>
                    <p className="font-ibm text-xs text-muted-foreground leading-relaxed mb-4">
                      {product.desc}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="font-ibm text-[10px] text-muted-foreground">Арт: {product.article}</span>
                      <button className="font-oswald text-[10px] tracking-wider uppercase text-[hsl(var(--primary))] hover:underline flex items-center gap-1">
                        Запросить цену <Icon name="ChevronRight" size={12} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 border border-border">
              <Icon name="SearchX" size={40} className="text-muted-foreground mx-auto mb-4" />
              <div className="font-oswald text-xl text-foreground mb-2">Ничего не найдено</div>
              <p className="font-ibm text-sm text-muted-foreground">Попробуйте изменить запрос или сбросить фильтры</p>
            </div>
          )}
        </div>
      </section>

      {/* ПРАЙС-ЛИСТЫ */}
      <section id="pricelists" className="py-16 bg-card steel-texture scroll-mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="section-divider pb-10 mb-10">
            <h2 className="font-oswald text-3xl font-bold tracking-wide mt-6">ПРАЙС-ЛИСТЫ</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {PRICELISTS.map((pl) => (
              <a
                key={pl.name}
                href={pl.file}
                className="group flex flex-col p-5 bg-background border border-border hover:border-[hsl(var(--primary))] transition-all"
              >
                <div className="w-10 h-10 fire-gradient flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  <Icon name="FileText" size={20} className="text-white" />
                </div>
                <div className="font-oswald text-base font-bold text-foreground mb-1 group-hover:text-[hsl(var(--primary))] transition-colors">
                  {pl.name}
                </div>
                <div className="font-ibm text-xs text-muted-foreground mb-4">{pl.date} · {pl.size}</div>
                <div className="mt-auto flex items-center gap-1.5 font-oswald text-xs tracking-wider uppercase text-[hsl(var(--primary))]">
                  <Icon name="Download" size={12} />
                  Скачать
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* СЕРТИФИКАТЫ */}
      <section id="certificates" className="py-24 scroll-mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="section-divider pb-10 mb-12">
            <h2 className="font-oswald text-4xl font-bold tracking-wide mt-6">СЕРТИФИКАТЫ</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {CERTS.map((cert) => (
              <div key={cert.name} className="group bg-card border border-border p-6 hover:border-[hsl(var(--primary))]/50 transition-all">
                <div className="w-12 h-12 border-2 border-[hsl(var(--primary))] flex items-center justify-center mb-4">
                  <Icon name="Award" size={22} className="text-[hsl(var(--primary))]" />
                </div>
                <div className="font-oswald text-lg font-bold text-foreground mb-1">{cert.name}</div>
                <div className="font-ibm text-xs text-muted-foreground leading-relaxed mb-4">{cert.org}</div>
                <div className="font-ibm text-[10px] text-muted-foreground border-t border-border pt-3 mt-auto">
                  Действителен: {cert.year}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 p-5 bg-card border border-border flex items-start gap-4">
            <Icon name="Info" size={18} className="text-[hsl(var(--primary))] mt-0.5 shrink-0" />
            <p className="font-ibm text-sm text-muted-foreground">
              Копии сертификатов и деклараций соответствия предоставляются по запросу. Свяжитесь с нашим отделом качества.
            </p>
          </div>
        </div>
      </section>

      {/* НОВОСТИ */}
      <section id="news" className="py-24 bg-card steel-texture scroll-mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="section-divider pb-10 mb-12">
            <h2 className="font-oswald text-4xl font-bold tracking-wide mt-6">НОВОСТИ</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {NEWS.map((item, i) => (
              <article key={i} className="group bg-background border border-border p-6 hover:border-[hsl(var(--primary))]/50 transition-all cursor-pointer">
                <div className="font-ibm text-[10px] text-[hsl(var(--primary))] uppercase tracking-widest mb-3">{item.date}</div>
                <h3 className="font-oswald text-lg font-bold text-foreground mb-3 group-hover:text-[hsl(var(--primary))] transition-colors leading-snug">
                  {item.title}
                </h3>
                <p className="font-ibm text-sm text-muted-foreground leading-relaxed mb-4">{item.text}</p>
                <div className="flex items-center gap-1 font-oswald text-xs uppercase tracking-wider text-[hsl(var(--primary))]">
                  Подробнее <Icon name="ArrowRight" size={12} />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ДОСТАВКА */}
      <section id="delivery" className="py-24 scroll-mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="section-divider pb-10 mb-12">
            <h2 className="font-oswald text-4xl font-bold tracking-wide mt-6">ДОСТАВКА</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {[
                  { icon: "Truck", title: "Автодоставка", text: "Собственный парк автотранспорта. Доставка по Москве и МО от 1 рабочего дня." },
                  { icon: "Train", title: "Ж/д отправка", text: "Вагонные и контейнерные отправки по всей России. Крупные партии от 20 тонн." },
                  { icon: "Package", title: "Транспортные компании", text: "Работаем с СДЭК, ПЭК, Деловыми линиями и другими ТК." },
                  { icon: "Warehouse", title: "Самовывоз", text: "Отгрузка со склада в Москве. Адрес предоставляется менеджером." },
                ].map((item) => (
                  <div key={item.title} className="bg-card border border-border p-4">
                    <Icon name={item.icon} size={20} className="text-[hsl(var(--primary))] mb-2" />
                    <div className="font-oswald text-sm font-bold text-foreground mb-1">{item.title}</div>
                    <div className="font-ibm text-xs text-muted-foreground leading-relaxed">{item.text}</div>
                  </div>
                ))}
              </div>
              <div className="p-5 border-l-2 border-[hsl(var(--primary))] bg-card">
                <div className="font-oswald text-base font-bold text-foreground mb-2">Минимальный заказ</div>
                <div className="font-ibm text-sm text-muted-foreground">От 50 кг для оптовых покупателей. Для розницы — без ограничений по количеству.</div>
              </div>
            </div>
            <div>
              <div className="bg-card border border-border p-6">
                <h3 className="font-oswald text-xl font-bold text-foreground mb-6">Рассчитать стоимость доставки</h3>
                <div className="flex flex-col gap-4">
                  <div>
                    <label className="font-ibm text-xs text-muted-foreground uppercase tracking-wide mb-1.5 block">Город доставки</label>
                    <input
                      type="text"
                      placeholder="Введите город..."
                      className="w-full bg-background border border-border px-4 py-2.5 font-ibm text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-[hsl(var(--primary))] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="font-ibm text-xs text-muted-foreground uppercase tracking-wide mb-1.5 block">Вес груза (кг)</label>
                    <input
                      type="number"
                      placeholder="Введите вес..."
                      className="w-full bg-background border border-border px-4 py-2.5 font-ibm text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-[hsl(var(--primary))] transition-colors"
                    />
                  </div>
                  <button className="fire-gradient text-white font-oswald text-sm tracking-widest uppercase py-3 hover:opacity-90 transition-opacity">
                    Рассчитать
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* КОНТАКТЫ */}
      <section id="contacts" className="py-24 bg-card steel-texture scroll-mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="section-divider pb-10 mb-12">
            <h2 className="font-oswald text-4xl font-bold tracking-wide mt-6">КОНТАКТЫ</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact info */}
            <div className="flex flex-col gap-6">
              {[
                { icon: "Phone", label: "Телефон", value: "8 800 123-45-67", sub: "Бесплатно по России" },
                { icon: "Mail", label: "Email", value: "info@promtech.ru", sub: "Ответим в течение 2 часов" },
                { icon: "MapPin", label: "Адрес офиса", value: "г. Москва, ул. Промышленная, 14", sub: "Пн–Пт: 9:00–18:00" },
                { icon: "Building2", label: "Производство", value: "Московская обл., г. Подольск", sub: "Самовывоз по согласованию" },
              ].map((item) => (
                <div key={item.label} className="flex gap-4">
                  <div className="w-10 h-10 fire-gradient flex items-center justify-center shrink-0">
                    <Icon name={item.icon} size={18} className="text-white" />
                  </div>
                  <div>
                    <div className="font-ibm text-[10px] text-muted-foreground uppercase tracking-widest mb-0.5">{item.label}</div>
                    <div className="font-oswald text-base font-bold text-foreground">{item.value}</div>
                    <div className="font-ibm text-xs text-muted-foreground">{item.sub}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Form */}
            <div className="bg-background border border-border p-6">
              <h3 className="font-oswald text-xl font-bold text-foreground mb-6">Оставить заявку</h3>
              <div className="flex flex-col gap-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="font-ibm text-xs text-muted-foreground uppercase tracking-wide mb-1.5 block">Ваше имя</label>
                    <input
                      type="text"
                      placeholder="Иван Иванов"
                      className="w-full bg-card border border-border px-4 py-2.5 font-ibm text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-[hsl(var(--primary))] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="font-ibm text-xs text-muted-foreground uppercase tracking-wide mb-1.5 block">Телефон</label>
                    <input
                      type="tel"
                      placeholder="+7 (999) 000-00-00"
                      className="w-full bg-card border border-border px-4 py-2.5 font-ibm text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-[hsl(var(--primary))] transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="font-ibm text-xs text-muted-foreground uppercase tracking-wide mb-1.5 block">Компания</label>
                  <input
                    type="text"
                    placeholder="Название организации"
                    className="w-full bg-card border border-border px-4 py-2.5 font-ibm text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-[hsl(var(--primary))] transition-colors"
                  />
                </div>
                <div>
                  <label className="font-ibm text-xs text-muted-foreground uppercase tracking-wide mb-1.5 block">Сообщение</label>
                  <textarea
                    rows={4}
                    placeholder="Опишите ваш запрос..."
                    className="w-full bg-card border border-border px-4 py-2.5 font-ibm text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-[hsl(var(--primary))] transition-colors resize-none"
                  />
                </div>
                <button className="fire-gradient text-white font-oswald text-sm tracking-widest uppercase py-3 hover:opacity-90 transition-opacity">
                  Отправить заявку
                </button>
                <p className="font-ibm text-[10px] text-muted-foreground text-center">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 fire-gradient flex items-center justify-center">
                <Icon name="Cog" size={14} className="text-white" />
              </div>
              <div>
                <div className="font-oswald font-700 text-base leading-none tracking-wider text-foreground">ПРОМТЕХ</div>
                <div className="font-ibm text-[9px] text-muted-foreground tracking-[0.15em] uppercase leading-none mt-0.5">© 2026. Все права защищены</div>
              </div>
            </div>
            <div className="flex flex-wrap gap-4">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className="font-ibm text-xs text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}