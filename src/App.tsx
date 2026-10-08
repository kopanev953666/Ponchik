import React, { useState } from 'react';
import { 
  Sparkles, 
  Shuffle, 
  X, 
  ZoomIn, 
  Heart, 
  Compass, 
  Coffee, 
  ShieldCheck, 
  Ban, 
  CheckCircle2,
  ChevronDown
} from 'lucide-react';

// Imported generated donut photos
import imgHeroGalaxy from './assets/images/hero_donut_galaxy_1791484934388.jpg';
import imgPinkHomer from './assets/images/donut_pink_homer_1791484944805.jpg';
import imgDarkChoco from './assets/images/donut_dark_choco_1791484955628.jpg';
import imgMatchaZen from './assets/images/donut_matcha_zen_1791484964887.jpg';
import imgCaramelCrunch from './assets/images/donut_caramel_crunch_1791484973215.jpg';
import imgLemonMeringue from './assets/images/donut_lemon_meringue_1791485010533.jpg';
import imgBerryBerliner from './assets/images/donut_berry_berliner_1791485021999.jpg';
import imgCinnamonCrush from './assets/images/donut_cinnamon_crush_1791485031483.jpg';

interface DonutItem {
  id: string;
  name: string;
  alias: string;
  category: 'classic' | 'drama' | 'gourmet' | 'cosmic';
  image: string;
  shortDesc: string;
  fullDesc: string;
  funFact: string;
  meta: string[];
  vibe: string;
  dangerLevel: string;
  holeStatus: string;
}

const DONUTS: DonutItem[] = [
  {
    id: 'homer-pink',
    name: 'Гомер-Классик',
    alias: 'Эталон Спрингфилда 1989',
    category: 'classic',
    image: imgPinkHomer,
    shortDesc: 'Каноническая клубничная глазурь и россыпь радужной кондитерской посыпки. Вызывает протяжное «Ммм...» и полную капитуляцию силы воли.',
    fullDesc: 'Золотой стандарт мировой пончиковой индустрии. Создан для людей, которые не хотят усложнять жизнь экзотическими начинками. Если долго смотреть на этот пончик, можно услышать голос Гомера Симпсона.',
    funFact: 'Каждая посыпка расположена в строгом хаотическом порядке, одобренном Международным институтом сахара.',
    meta: ['Опасность: 11/10', 'Ностальгия: 100%', 'Дырка: Идеальный круг'],
    vibe: 'Чистая детская радость без капли раскаяния',
    dangerLevel: 'Критическая для белых скатертей',
    holeStatus: 'Каноническая пустота',
  },
  {
    id: 'dark-choco',
    name: 'Тёмная Драма',
    alias: 'Экзистенциальный Какао-Кризис',
    category: 'drama',
    image: imgDarkChoco,
    shortDesc: 'Тройной тёмный шоколад с хлопьями морской соли. Создан для тех, кто слушает меланхоличную музыку под дождём.',
    fullDesc: 'Этот пончик познал всю бренность бытия. Он не пытается вам понравиться — вы сами должны дорасти до его глубокого горького ганаша. Морская соль добавлена, чтобы напомнить: жизнь — это сочетание слёз и какао.',
    funFact: 'Идеально сочетается с чтением экзистенциалистов и взглядом в никуда.',
    meta: ['Горькая правда: 85%', 'Морская соль: Вместо слёз', 'Сложность: Высокая'],
    vibe: 'Достоевский на утреннем кофе-брейке',
    dangerLevel: 'Тяжелый вздох после каждого укуса',
    holeStatus: 'Чёрная дыра поглощения калорий',
  },
  {
    id: 'cosmic-galaxy',
    name: 'Космическая Одиссея',
    alias: 'Межгалактический Реликт №01',
    category: 'cosmic',
    image: imgHeroGalaxy,
    shortDesc: 'Чернично-ежевичный космос с пищевой звёздной пылью. Согласно теории относительности, его дырка расширяется со скоростью Вселенной.',
    fullDesc: 'Замешан в условиях микрогравитации. Глазурь напоминает снимок телескопа Джеймс Уэбб. Астрономы утверждают, что в центре этого пончика искривляется пространственно-временной континуум сладкоежек.',
    funFact: 'Звёздочки на глазури съедобны, хотя некоторые астрофизики предлагали занести их в каталог небесных тел.',
    meta: ['Гравитация: Непреодолимая', 'Происхождение: Млечный Путь', 'Энергия: Сверхновая'],
    vibe: 'Полет к дальним рубежам галактики без скафандра',
    dangerLevel: 'Затягивает в сингулярность',
    holeStatus: 'Квантовая червоточина',
  },
  {
    id: 'matcha-zen',
    name: 'Дзен и Тишина',
    alias: 'Медитативный Зеленый Чай',
    category: 'gourmet',
    image: imgMatchaZen,
    shortDesc: 'Церемониальный чай матча и жареный черный кунжут. Этот пончик не осуждает вас за лишние калории — он принимает вас целиком.',
    fullDesc: 'Если бы тибетские монахи готовили выпечку во фритюре, она выглядела бы именно так. Спокойная травянистая горчинка матчи нейтрализует угрызения совести на ментальном уровне.',
    funFact: 'Кунжутинки на глазури выложены по законам японского сада камней.',
    meta: ['Уровень осознанности: Просветление', 'Шум в голове: 0%', 'Баланс: Инь и Ян'],
    vibe: 'Шелест бамбука и безмятежное чаепитие',
    dangerLevel: 'Риск забыть, что пора на работу',
    holeStatus: 'Окно во внутреннюю тишину',
  },
  {
    id: 'caramel-crunch',
    name: 'Карамельный Архитектор',
    alias: 'Инженерная Конструкция с Пеканом',
    category: 'gourmet',
    image: imgCaramelCrunch,
    shortDesc: 'Тягучая солёная карамель, дроблёный пекан и маслянистый тоффи. Требует серьёзного инженерного подхода при откусывании.',
    fullDesc: 'Сложнейший структурный объект в кондитерском мире. Неправильный угол атаки зубами может привести к обрушению орехового перекрытия. Рекомендуется есть в строительной каске или с большим количеством салфеток.',
    funFact: 'По шкале хруста Мооса твёрдость карамельной корочки превосходит полевой шпат.',
    meta: ['Индекс хруста: 9.9/10', 'Липкость пальцев: Неизбежна', 'Удовлетворение: 100%'],
    vibe: 'Уверенность в завтрашнем дне и прочные перекрытия',
    dangerLevel: 'Карамель склеивает челюсть при попытке пожаловаться',
    holeStatus: 'Технологическое отверстие для циркуляции пара',
  },
  {
    id: 'lemon-meringue',
    name: 'Лимонный Барон',
    alias: 'Королевское Обожжённое Безе',
    category: 'gourmet',
    image: imgLemonMeringue,
    shortDesc: 'Обожжённые пики итальянской меренги, золотая пыльца и бодрящий лимонный курд. Выглядит как фамильная корона.',
    fullDesc: 'Аристократ среди пончиков. При взгляде на него хочется расправить плечи, выпрямить спину и потребовать серебряную десертную вилочку. Правда, через минуту вы всё равно будете слизывать меренгу прямо с пальцев.',
    funFact: 'Меренга обжигается газовой горелкой с температурой, способной растопить даже самое чёрствое сердце.',
    meta: ['Аристократизм: 99%', 'Кислинка: Отрезвляющая', 'Время жизни: 15 секунд'],
    vibe: 'Приём в Версале, но в домашних тапочках',
    dangerLevel: 'Взбитые белки остаются на кончике носа',
    holeStatus: 'Скрыта под королевской мантией',
  },
  {
    id: 'berry-berliner',
    name: 'Тайный Берлинер',
    alias: 'Диверсант с Малиновым Джемом',
    category: 'classic',
    image: imgBerryBerliner,
    shortDesc: 'Пышный шарик в сахарной пудре с коварным джемом внутри. Первое правило: джем всегда стреляет на самую светлую одежду.',
    fullDesc: 'Загадочный агент без дырки. Весь его смысл заключён в центре давления. Как только вы делаете неосторожный укус с севера, ягодная начинка вероломно прорывает оборону на юге.',
    funFact: 'Сахарная пудра на этом пончике летучее гелия: вдохните рядом, и вы станете похожи на кондитера-стажёра.',
    meta: ['Фактор риска для рубашки: 99.9%', 'Дырка: Законодательно запрещена', 'Малина: Взрывная'],
    vibe: 'Опасная спецоперация за завтраком',
    dangerLevel: 'Химчистка уже готовит счёт',
    holeStatus: 'Заполнена до отказа',
  },
  {
    id: 'cinnamon-crush',
    name: 'Старомодный Хруст',
    alias: 'Ветеран на Творожном Тесте',
    category: 'classic',
    image: imgCinnamonCrush,
    shortDesc: 'Растрескавшийся, хрустящий олд-фэшн с коричной глазурью. Он помнит те времена, когда пончики продавались по 5 копеек.',
    fullDesc: 'Суровый, рельефный и неподкупный. Он не признаёт современный маркетинг, посыпки цвета единорога и фисташковую пасту. Ему нужен только крутой кипяток или крепкий черный кофе без сахара.',
    funFact: 'Трещины на его поверхности в точности повторяют карту каньонов штата Юта.',
    meta: ['Текстура: Горный хребет', 'Характер: Нордический', 'Мудрость: Безграничная'],
    vibe: 'Утренний туман, дровяная печь и старые пластинки',
    dangerLevel: 'Хруст слышен соседям через две стены',
    holeStatus: 'Неровная, высеченная ветрами времени',
  },
];

const ORACLE_PREDICTIONS = [
  {
    donut: 'Гомер-Классик',
    title: 'День розовой стабильности',
    quote: 'Сегодня все сложные проблемы решаются фразой «я подумаю об этом после перекуса». Не пытайтесь быть сложнее, чем вы есть.',
  },
  {
    donut: 'Тёмная Драма',
    title: 'День глубокого вздоха',
    quote: 'Сегодня идеально надеть черное, налить крепкий кофе и смотреть в окно с выражением человека, познавшего тайны Вселенной.',
  },
  {
    donut: 'Космическая Одиссея',
    title: 'День расширения горизонтов',
    quote: 'Ваша продуктивность сегодня движется со скоростью света, но строго по круговой орбите вокруг холодильника.',
  },
  {
    donut: 'Дзен и Тишина',
    title: 'День умиротворения',
    quote: 'Если кто-то на работе пытается вас вывести из себя — представьте, что они просто не ели матча-пончик.',
  },
  {
    donut: 'Карамельный Архитектор',
    title: 'День масштабных планов',
    quote: 'Конструкция ваших планов на сегодня держится исключительно на силе воли и липкой карамели. И этого вполне достаточно!',
  },
  {
    donut: 'Лимонный Барон',
    title: 'День королевских манер',
    quote: 'Вы сегодня выглядите роскошно, даже если сидите перед монитором в пижаме. Держите осанку!',
  },
  {
    donut: 'Тайный Берлинер',
    title: 'День неожиданных сюрпризов',
    quote: 'Сегодня судьба готовит для вас яркую начинку. Главное — не заляпать белую рубашку.',
  },
  {
    donut: 'Старомодный Хруст',
    title: 'День непоколебимого опыта',
    quote: 'Никакие новые тренды не собьют вас с толку. Хрустите уверенно и не обращайте внимания на суету.',
  },
];

const LAWS_OF_PHYSICS = [
  {
    num: '01',
    name: 'Закон Сохранения Дырки',
    desc: 'Если убрать из пончика дырку, он необратимо деградирует до состояния обычного пирожка. А пирожок не способен так гордо смотреть в вечность.',
  },
  {
    num: '02',
    name: 'Теорема Падающей Глазури',
    desc: 'Количество упавшей глазури прямо пропорционально важности документа или чистоте брюк, над которыми совершается укус.',
  },
  {
    num: '03',
    name: 'Парадокс Дюжины',
    desc: 'Один пончик — это мало. Два пончика — это компромисс. Коробка из двенадцати пончиков — это уже взвешенная философская позиция.',
  },
  {
    num: '04',
    name: 'Квантовая Нулевая Калорийность',
    desc: 'Пончик, съеденный тайно на кухне в темноте при свете холодильника, не фиксируется внешними наблюдателями и, следовательно, не существует в таблице калорий.',
  },
];

export default function App() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedDonut, setSelectedDonut] = useState<DonutItem | null>(null);
  const [bitesCount, setBitesCount] = useState<number>(0);
  const [biteReaction, setBiteReaction] = useState<string>('Нажмите на космический пончик, чтобы сделать виртуальный укус!');
  const [oracleResult, setOracleResult] = useState<typeof ORACLE_PREDICTIONS[0] | null>(null);
  const [isOracleSpinning, setIsOracleSpinning] = useState<boolean>(false);
  const [likedDonuts, setLikedDonuts] = useState<Record<string, number>>({
    'homer-pink': 342,
    'dark-choco': 289,
    'cosmic-galaxy': 512,
    'matcha-zen': 214,
    'caramel-crunch': 391,
    'lemon-meringue': 188,
    'berry-berliner': 405,
    'cinnamon-crush': 267,
  });

  const filteredDonuts = activeCategory === 'all' 
    ? DONUTS 
    : DONUTS.filter(d => d.category === activeCategory);

  const handleBite = () => {
    const newBites = bitesCount + 1;
    setBitesCount(newBites);

    const reactions = [
      'Хрусть! Первая молекула глазури благополучно усвоена.',
      'Осторожно! Дырка от пончика расширилась ещё на 4.2%.',
      'Внимание: зарегистрирован прилив чистого эндорфина.',
      'Гравитационное поле пончика временно стабилизировалось.',
      'Ученые подтверждают: виртуальные калории равны нулю!',
      'Вы вошли в режим дзен-поглощения сладостей.',
      'Тесто было настолько воздушным, что улетело в стратосферу.',
      'Браво! Этот виртуальный укус войдет в анналы кондитерской науки.',
    ];
    setBiteReaction(reactions[newBites % reactions.length]);
  };

  const handleRandomDonut = () => {
    const random = DONUTS[Math.floor(Math.random() * DONUTS.length)];
    setSelectedDonut(random);
  };

  const handleRollOracle = () => {
    setIsOracleSpinning(true);
    setTimeout(() => {
      const pred = ORACLE_PREDICTIONS[Math.floor(Math.random() * ORACLE_PREDICTIONS.length)];
      setOracleResult(pred);
      setIsOracleSpinning(false);
    }, 400);
  };

  const handleLike = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setLikedDonuts(prev => ({
      ...prev,
      [id]: (prev[id] || 0) + 1
    }));
  };

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 font-sans selection:bg-amber-200 selection:text-amber-900">
      
      {/* 1. TOP BAR CONTRACT: Zone 1 (Wordmark) — Zone 2 (Nav Links) — Zone 3 (Single Action) */}
      <header className="sticky top-0 z-40 bg-stone-50/90 backdrop-blur-md border-b border-stone-200">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          
          {/* Zone 1: Single text element wordmark */}
          <a href="#" className="font-serif-title text-2xl font-bold tracking-tight text-stone-900 hover:text-amber-800 transition-colors">
            Пончикопедия
          </a>

          {/* Zone 2: Clean text navigation links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-stone-600">
            <a href="#gallery" className="hover:text-stone-950 transition-colors">Экспонаты</a>
            <a href="#oracle" className="hover:text-stone-950 transition-colors">Оракул Дня</a>
            <a href="#laws" className="hover:text-stone-950 transition-colors">Законы Физики</a>
            <a href="#manifesto" className="hover:text-stone-950 transition-colors">Манифест</a>
          </nav>

          {/* Zone 3: Primary action button */}
          <div className="flex items-center gap-3">
            <button
              onClick={handleRandomDonut}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-stone-900 bg-amber-200/80 hover:bg-amber-300 rounded-lg transition-colors whitespace-nowrap cursor-pointer active:scale-95"
            >
              <Shuffle className="w-3.5 h-3.5 text-stone-800" />
              <span>Случайный пончик</span>
            </button>
          </div>
        </div>
      </header>

      {/* 2. HERO SECTION */}
      <section className="relative pt-12 pb-20 md:pt-16 md:pb-28 overflow-hidden border-b border-stone-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Editorial Headline & Stance */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="text-xs uppercase tracking-widest font-semibold text-amber-800/80">
                Первый некоммерческий заповедник глазури
              </div>

              <h1 className="font-serif-title text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-stone-900 leading-[1.12] text-balance">
                Пончики — это не еда. Это геометрическое совершенство.
              </h1>

              <p className="text-lg text-stone-600 leading-relaxed max-w-xl">
                Мы создали этот сайт без телефонов, без корзин покупок и без спам-рассылок. Только сочные фотографии высочайшего разрешения, абсурдная классификация и чистая радость созерцания дырки от бублика.
              </p>

              {/* Zero-Pill Unboxed Metadata Bar */}
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-stone-500 pt-2 border-t border-stone-200">
                <span>0% коммерции</span>
                <span aria-hidden="true">·</span>
                <span>100% углеводной поэзии</span>
                <span aria-hidden="true">·</span>
                <span>Без звонков оператора</span>
                <span aria-hidden="true">·</span>
                <span>Чистый HTML дух</span>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <a
                  href="#gallery"
                  className="px-6 py-3.5 text-sm font-semibold text-stone-50 bg-stone-900 hover:bg-stone-800 rounded-xl transition-all shadow-sm active:scale-98"
                >
                  Смотреть всю коллекцию
                </a>
                <a
                  href="#oracle"
                  className="px-6 py-3.5 text-sm font-semibold text-stone-700 bg-stone-200/60 hover:bg-stone-200 rounded-xl transition-colors"
                >
                  Узнать свой пончик дня
                </a>
              </div>
            </div>

            {/* Right Column: Hero Showcase Card with Interactive Bite Fun */}
            <div className="lg:col-span-5">
              <div className="bg-white rounded-2xl border border-stone-200/90 shadow-sm overflow-hidden p-4 group">
                <div className="relative aspect-4/3 rounded-xl overflow-hidden bg-stone-900 cursor-pointer" onClick={handleBite}>
                  <img
                    src={imgHeroGalaxy}
                    alt="Космический галактический пончик"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent flex flex-col justify-end p-5 text-white">
                    <span className="text-xs uppercase tracking-wider text-amber-300 font-semibold mb-1">
                      Экспонат месяца
                    </span>
                    <h3 className="font-serif-title text-xl font-bold">
                      Космический Реликт №01
                    </h3>
                    <p className="text-xs text-stone-300 mt-1 line-clamp-2">
                      Замешан в условиях микрогравитации с черничной звёздной глазурью.
                    </p>
                  </div>

                  <div className="absolute top-3 right-3 bg-stone-900/80 backdrop-blur-sm text-stone-200 text-xs px-2.5 py-1 rounded-md border border-stone-700/60 flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3 text-amber-400" />
                    <span>Кликни, чтобы «откусить»</span>
                  </div>
                </div>

                {/* Interactive Bite Tracker */}
                <div className="mt-4 px-2 py-3 bg-stone-50 rounded-xl border border-stone-200/80 text-center">
                  <div className="flex items-center justify-between text-xs text-stone-500 px-2 pb-2 border-b border-stone-200">
                    <span>Счётчик виртуальных укусов:</span>
                    <span className="font-bold text-stone-900 text-sm tabular-nums">{bitesCount}</span>
                  </div>
                  <p className="text-xs text-stone-700 mt-2 font-medium italic">
                    «{biteReaction}»
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. GALLERY & CLASSIFICATION SECTION */}
      <section id="gallery" className="py-20 max-w-6xl mx-auto px-6">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-stone-200">
          <div>
            <div className="text-xs uppercase tracking-widest font-semibold text-amber-800/80 mb-2">
              Шуточная классификация
            </div>
            <h2 className="font-serif-title text-3xl sm:text-4xl font-bold text-stone-900">
              Галерея Великих Экспонатов
            </h2>
            <p className="text-stone-600 text-sm mt-2 max-w-lg">
              Каждый экземпляр прошёл строгий визуальный контроль и готов радовать ваш взор без риска для физической формы.
            </p>
          </div>

          {/* Filter Tabs (Interactive Segmented Control) */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-stone-200/70 rounded-xl">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                activeCategory === 'all'
                  ? 'bg-white text-stone-950 shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Все ({DONUTS.length})
            </button>
            <button
              onClick={() => setActiveCategory('classic')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                activeCategory === 'classic'
                  ? 'bg-white text-stone-950 shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Классика
            </button>
            <button
              onClick={() => setActiveCategory('drama')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                activeCategory === 'drama'
                  ? 'bg-white text-stone-950 shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Драма
            </button>
            <button
              onClick={() => setActiveCategory('gourmet')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                activeCategory === 'gourmet'
                  ? 'bg-white text-stone-950 shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Высокая кухня
            </button>
            <button
              onClick={() => setActiveCategory('cosmic')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                activeCategory === 'cosmic'
                  ? 'bg-white text-stone-950 shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Космос
            </button>
          </div>
        </div>

        {/* Product Cards Grid: Generous Whitespace, Uniform Aspect, High Photographic Clarity */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-10">
          {filteredDonuts.map((donut) => (
            <article
              key={donut.id}
              onClick={() => setSelectedDonut(donut)}
              className="bg-white rounded-2xl border border-stone-200/90 shadow-xs overflow-hidden flex flex-col hover:-translate-y-1 hover:shadow-md transition-all duration-300 cursor-pointer group"
            >
              {/* Product Image Slot */}
              <div className="relative aspect-4/3 overflow-hidden bg-stone-100">
                <img
                  src={donut.image}
                  alt={donut.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                <div className="absolute top-3 left-3 bg-stone-900/75 backdrop-blur-xs text-white text-[11px] font-medium px-2.5 py-1 rounded-md">
                  {donut.alias}
                </div>

                <button
                  onClick={(e) => handleLike(donut.id, e)}
                  title="Поставить сердечко"
                  className="absolute top-3 right-3 bg-white/90 hover:bg-white text-rose-500 p-2 rounded-full shadow-xs transition-transform active:scale-90 flex items-center gap-1 text-xs font-semibold"
                >
                  <Heart className="w-3.5 h-3.5 fill-rose-500" />
                  <span className="tabular-nums text-stone-700 text-[11px] font-medium">{likedDonuts[donut.id] || 0}</span>
                </button>

                <div className="absolute inset-0 bg-stone-900/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                  <span className="bg-white/95 text-stone-900 text-xs font-semibold px-3 py-1.5 rounded-lg shadow-sm flex items-center gap-1.5">
                    <ZoomIn className="w-3.5 h-3.5 text-stone-700" />
                    Рассмотреть детали
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif-title text-xl font-bold text-stone-900 group-hover:text-amber-800 transition-colors">
                    {donut.name}
                  </h3>
                  
                  <p className="text-sm text-stone-600 mt-2.5 leading-relaxed">
                    {donut.shortDesc}
                  </p>
                </div>

                {/* Unboxed Clean Metadata */}
                <div className="mt-6 pt-4 border-t border-stone-100 flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs text-stone-500">
                  {donut.meta.map((m, idx) => (
                    <React.Fragment key={idx}>
                      <span>{m}</span>
                      {idx < donut.meta.length - 1 && <span aria-hidden="true">·</span>}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

      </section>

      {/* 4. DONUT ORACLE / HOROSCOPE (Interactive Fun Feature) */}
      <section id="oracle" className="py-20 bg-stone-100 border-y border-stone-200">
        <div className="max-w-4xl mx-auto px-6 text-center">
          
          <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest font-semibold text-amber-800 mb-3">
            <Compass className="w-4 h-4 text-amber-700" />
            <span>Интерактивный Пончиковый Оракул</span>
          </div>

          <h2 className="font-serif-title text-3xl sm:text-4xl font-bold text-stone-900">
            Какой ты сегодня пончик?
          </h2>

          <p className="text-stone-600 text-base max-w-xl mx-auto mt-3">
            Забудьте знаки зодиака и натальные карты. Единственное, что определяет судьбу человека в течение дня — это его внутренняя глазурь.
          </p>

          <div className="mt-8 flex justify-center">
            <button
              onClick={handleRollOracle}
              disabled={isOracleSpinning}
              className="px-6 py-3.5 text-sm font-semibold text-stone-900 bg-amber-300 hover:bg-amber-400 disabled:opacity-50 rounded-xl transition-all shadow-xs flex items-center gap-2 cursor-pointer active:scale-95"
            >
              <Sparkles className={`w-4 h-4 ${isOracleSpinning ? 'animate-spin' : ''}`} />
              <span>{isOracleSpinning ? 'Оракул медитирует...' : 'Вытянуть пончик судьбы'}</span>
            </button>
          </div>

          {/* Oracle Prediction Card */}
          {oracleResult && (
            <div className="mt-8 max-w-xl mx-auto bg-white p-7 rounded-2xl border border-stone-200 shadow-sm text-left transition-all">
              <div className="flex items-center justify-between pb-3 border-b border-stone-100">
                <span className="text-xs uppercase tracking-wider text-amber-700 font-bold">
                  Ваш тотемный десерт: {oracleResult.donut}
                </span>
                <span className="text-xs text-stone-400">Точность прогноза: 100%</span>
              </div>
              <h3 className="font-serif-title text-2xl font-bold text-stone-900 mt-3">
                {oracleResult.title}
              </h3>
              <p className="text-sm text-stone-700 mt-2.5 leading-relaxed italic">
                «{oracleResult.quote}»
              </p>
            </div>
          )}

        </div>
      </section>

      {/* 5. LAWS OF DONUT PHYSICS */}
      <section id="laws" className="py-20 max-w-6xl mx-auto px-6">
        
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="text-xs uppercase tracking-widest font-semibold text-amber-800/80 mb-2">
            Фундаментальная кондитерская наука
          </div>
          <h2 className="font-serif-title text-3xl sm:text-4xl font-bold text-stone-900">
            Законы Пончиковой Физики
          </h2>
          <p className="text-stone-600 text-sm mt-3">
            Четыре неоспоримых правила Вселенной, выведенные поколениями любителей чаепитий.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {LAWS_OF_PHYSICS.map((law) => (
            <div
              key={law.num}
              className="bg-white p-8 rounded-2xl border border-stone-200/90 shadow-xs relative"
            >
              <span className="text-3xl font-serif-title font-bold text-stone-300">
                {law.num}
              </span>
              <h3 className="text-lg font-bold text-stone-900 mt-2">
                {law.name}
              </h3>
              <p className="text-sm text-stone-600 mt-2 leading-relaxed">
                {law.desc}
              </p>
            </div>
          ))}
        </div>

      </section>

      {/* 6. HUMOROUS MANIFESTO: NO PHONES, NO EMAILS, NO ORDERS */}
      <section id="manifesto" className="py-20 bg-stone-900 text-stone-100">
        <div className="max-w-5xl mx-auto px-6">
          
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-widest font-semibold text-amber-400">
              Честный Манифест Свободы
            </span>
            <h2 className="font-serif-title text-3xl sm:text-4xl font-bold text-white mt-2">
              Почему у нас нет телефонов, почты и форм заказа?
            </h2>
            <p className="text-stone-400 text-sm mt-3 leading-relaxed">
              Этот сайт задуман как шуточный оазис посреди бесконечных воронкообразных интернет-магазинов. Мы сознательно освободили вас от всего лишнего:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            
            <div className="bg-stone-800/70 p-6 rounded-xl border border-stone-700/60">
              <div className="w-9 h-9 rounded-lg bg-rose-500/10 text-rose-400 flex items-center justify-center mb-4">
                <Ban className="w-5 h-5" />
              </div>
              <h3 className="font-semibold text-white text-base">Никаких звонков</h3>
              <p className="text-xs text-stone-400 mt-2 leading-relaxed">
                Наши специалисты постоянно заняты жеванием пончиков, поэтому всё равно не смогут связно ответить в трубку.
              </p>
            </div>

            <div className="bg-stone-800/70 p-6 rounded-xl border border-stone-700/60">
              <div className="w-9 h-9 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center mb-4">
                <Ban className="w-5 h-5" />
              </div>
              <h3 className="font-semibold text-white text-base">Никаких email</h3>
              <p className="text-xs text-stone-400 mt-2 leading-relaxed">
                Ваш ящик и так перегружен письмами с заголовками «Срочно подтвердите заказ». Пончикопедия ценит ваше спокойствие.
              </p>
            </div>

            <div className="bg-stone-800/70 p-6 rounded-xl border border-stone-700/60">
              <div className="w-9 h-9 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center mb-4">
                <Ban className="w-5 h-5" />
              </div>
              <h3 className="font-semibold text-white text-base">Никаких корзин</h3>
              <p className="text-xs text-stone-400 mt-2 leading-relaxed">
                Пончики нельзя купить через сервер — их нужно брать тёплыми в ближайшей уютной пекарне за углом вашего дома.
              </p>
            </div>

            <div className="bg-stone-800/70 p-6 rounded-xl border border-stone-700/60">
              <div className="w-9 h-9 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-4">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h3 className="font-semibold text-white text-base">100% Улыбок</h3>
              <p className="text-xs text-stone-400 mt-2 leading-relaxed">
                Просто полистайте фото, покажите другу, поднимите себе настроение и, возможно, сходите выпить чашку хорошего чая.
              </p>
            </div>

          </div>

          <div className="mt-12 p-6 rounded-xl bg-stone-800/40 border border-stone-700/50 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Coffee className="w-6 h-6 text-amber-400 shrink-0" />
              <span className="text-sm text-stone-300">
                Совет дня: Закройте этот сайт на 15 минут, пройдитесь до соседней булочной и съешьте настоящий пончик!
              </span>
            </div>
            <a
              href="#gallery"
              className="px-4 py-2 text-xs font-semibold text-stone-900 bg-amber-300 hover:bg-amber-400 rounded-lg whitespace-nowrap transition-colors"
            >
              Вернуться к фото
            </a>
          </div>

        </div>
      </section>

      {/* 7. DETAILED MODAL VIEWER */}
      {selectedDonut && (
        <div
          className="fixed inset-0 z-50 bg-stone-950/70 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6"
          onClick={() => setSelectedDonut(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl border border-stone-200 relative animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedDonut(null)}
              className="absolute top-4 right-4 z-10 bg-stone-900/70 hover:bg-stone-900 text-white p-2 rounded-full backdrop-blur-xs transition-colors cursor-pointer"
              title="Закрыть"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Modal Image */}
            <div className="relative aspect-16/9 bg-stone-950 overflow-hidden">
              <img
                src={selectedDonut.image}
                alt={selectedDonut.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-3 left-4 bg-stone-900/80 backdrop-blur-xs text-amber-300 text-xs px-3 py-1 rounded-md">
                {selectedDonut.alias}
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6 sm:p-8 space-y-4">
              <div>
                <h3 className="font-serif-title text-2xl sm:text-3xl font-bold text-stone-900">
                  {selectedDonut.name}
                </h3>
                <p className="text-xs uppercase tracking-wider text-amber-800 font-semibold mt-1">
                  Вайб: {selectedDonut.vibe}
                </p>
              </div>

              <p className="text-stone-700 text-sm leading-relaxed">
                {selectedDonut.fullDesc}
              </p>

              <div className="p-4 bg-amber-50/70 rounded-xl border border-amber-200/60 text-xs text-amber-950">
                <span className="font-bold">Любопытный факт: </span>
                {selectedDonut.funFact}
              </div>

              <div className="grid grid-cols-2 gap-4 pt-2 border-t border-stone-100 text-xs text-stone-600">
                <div>
                  <span className="text-stone-400 block mb-0.5">Статус дырки:</span>
                  <span className="font-semibold text-stone-800">{selectedDonut.holeStatus}</span>
                </div>
                <div>
                  <span className="text-stone-400 block mb-0.5">Уровень опасности:</span>
                  <span className="font-semibold text-stone-800">{selectedDonut.dangerLevel}</span>
                </div>
              </div>

              <div className="pt-4 flex justify-end">
                <button
                  onClick={() => setSelectedDonut(null)}
                  className="px-5 py-2 text-xs font-semibold text-stone-700 bg-stone-100 hover:bg-stone-200 rounded-lg transition-colors cursor-pointer"
                >
                  Закрыть карточку
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 8. FOOTER */}
      <footer className="border-t border-stone-200 bg-stone-50 py-10">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <div>
            <span className="font-serif-title font-bold text-stone-900 text-base mr-2">Пончикопедия</span>
            <span>© 2026. Самый некоммерческий сайт в истории человечества.</span>
          </div>

          <div className="flex items-center gap-4">
            <span>Никаких cookies, номеров и форм</span>
            <span aria-hidden="true">·</span>
            <span>Сделано с любовью к тесту и глазури 🍩</span>
          </div>
        </div>
      </footer>

    </div>
  );
}
