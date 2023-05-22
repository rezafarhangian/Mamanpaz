const foods = [
    {
        id : 1,
        title: "دیزی",
        mother: "مامان نفس",
        Chefpicture : "/img/Chefs/نفس.jpg",
        score: 4.64,
        images: [
            { img: "/img/Foods/kh1.jpg" }
        ],
        price: 137000,
        recipes: "ابتدا پیاز نگینی شده را کف ظرف دیزی گلی میریزیم بعد نخود و لوبیا سفید را که از قبل خیس کرده ایم داخل ظرف دیزی میریزیم بعد گوشت گوساله و گوسفندی و دنبه میریزیم می‌گذاریم سه الی چهار ساعت بپزد بعد ادویه ولیمو عمانی را اضافه کرده می‌گذاریم بپزد بعد از نیم ساعت رب گوجه و گوجه فرنگی را اضافه کرده می‌گذاریم بپزد بعد از نیم ساعت سیب زمینی را اضافه میکنیم و در نهایت بعداز یک ساعت غذا آماده سرو می باشد.",
        Numberoforders: 1000,
        Foodingredients: [
            { id: 1, img: "/img/FoodIngredients/اویشن.svg", name: "آویشن" },
            { id: 2, img: "/img/FoodIngredients/دنبه.svg", name: "دنبه" },
            { id: 3, img: "/img/FoodIngredients/زردچوبه.svg", name: "زردچوبه" },
            { id: 4, img: "/img/FoodIngredients/زیره.svg", name: "زیره" },
            { id: 5, img: "/img/FoodIngredients/فلفل.svg", name: "فلفل" },
            { id: 6, img: "/img/FoodIngredients/کاری.svg", name: "کاری" },
            { id: 7, img: "/img/FoodIngredients/گوشت.svg", name: "گوشت" },
            { id: 8, img: "/img/FoodIngredients/لوبیا.svg", name: "لوبیا" },
            { id: 9, img: "/img/FoodIngredients/نخود.svg", name: "نخود" },
            { id: 10, img: "/img/FoodIngredients/نمک.svg", name: "نمک" },
        ],

        comments: [
            {   id : 1,
                user: "رضا",
                opinion: "از همه نظر بسیار عالی",
                date: "۱۴۰۲/۰۲/۰۵",
                response: "خوشحالم دوست داشتین ممنون از نظر مثبتتون نوش جانتون"
            },
            {    id : 2,
                user: "مهدیه",
                opinion: "مرسی خوسشمزه بود من دوست داشتم.",
                date: "۱۴۰۱/۱۲/۱۳",
                response: "خوشحالم که دوست داشتین نوش جان"
            },
            {   id : 3,
                user: "ناصر",
                opinion: "خوب بود",
                date: "۱۴۰۱/۱۲/۰۷",
                response: ""
            },
            {   id : 4,
                user: "آرمان",
                opinion: "با تشکر. بسیار عالی بود.",
                date: "۱۴۰۱/۱۱/۲۴",
                response: "خواهش میکنم نوش جانتون خوشحالم راضی بودین"
            },
            {   id : 5,
                user: "امیرحسین",
                opinion: "بسیار بسیار خوشمزه",
                date: "۱۴۰۱/۱۱/۲۴",
                response: "خوشحالم خوشتون اومده نوش جانتون"
            },
        ],
        category : "خوراک",
        count : 0
    },
    {
        id :2,
        title: "دلمه فلفل، گوجه و بادمجان",
        mother: "مامان سها",
        Chefpicture : "/img/Chefs/سها.jpg",
        score: 4.45,
        images: [
            { img: "/img/Foods/kh2.jpg" },
            { img: "/img/Foods/kh2-2.jpg" },
            { img: "/img/Foods/kh2-3.jpg" },
            { img: "/img/Foods/kh2-4.jpg" },
            { img: "/img/Foods/kh2-5.jpg" },
            { img: "/img/Foods/kh2-6.jpg" },
        ],
        price: 108_500,
        recipes: "پیاز و گوشت را تفت می‌دهیم و سپس نمک ، فلفل و ادویه را اضافه می‌کنیم.  برنج ، موادگوشتی ، لپه و سبزی همه را باهم مخلوط می‌کنیم. مواد را در بادمجان ، گوجه و فلفل قرار می‌دهیم و اجازه می دهیم تا با شعله ملایم پخته شوند ، نوش جان",
        Numberoforders: 2000,
        Foodingredients: [
            { id : 1 , img: "/img/FoodIngredients/برنج.svg", name: "برنج" },
            { id : 2 , img: "/img/FoodIngredients/فلفل-دلمه.svg", name: "فلفل دلمه" },
            { id : 3 , img: "/img/FoodIngredients/پیاز.svg", name: "پیاز" },
            { id : 4 , img: "/img/FoodIngredients/بادمجان.svg", name: "بادمجان" },
            { id : 5 , img: "/img/FoodIngredients/گوجه.svg", name: "گوجه" },
            { id : 6 , img: "/img/FoodIngredients/چرخ_گوشت.svg", name: "گوشت چرخ کرده" },
            { id : 7 , img: "/img/FoodIngredients/سبزی-دلمه.svg", name: "سبزی دلمه" },
        
        ],

        comments: [
            {   id : 1,
                user: "سحر",
                opinion: "عالی",
                date: "۱۴۰۲/۰۲/۰۵",
                response: "سپاسگزارم"
            },
            {   id : 2,
                user: "ماهان",
                opinion: "طعمش بی نظیر بود",
                date: "۱۴۰۱/۰۵/۱۱",
                response: "نوش جانتون"
            },
            {   id : 3,
                user: "ساسان",
                opinion: "خوشم نیومد",
                date: "۱۴۰۱/۰۲/۲۱",
                response: ""
            },
            
        ],
        category : "خوراک",
        count : 0
    },
    {
        id : 3,
        title: "خوراک سبزیجات بخار پز",
        mother: "مامان تاج ماه",
        Chefpicture : "/img/Chefs/تاج-ماه.jpg",
        score: 4.90 ,
        images: [
            { img: "/img/Foods/kh3.jpg" },
            { img: "/img/Foods/kh3-2.jpg" },
            { img: "/img/Foods/kh3-3.jpg" },
        ],
        price: 65_000,
        recipes: "تمام سبزیجات را جدا گانه بخار پز میکنیم با کمی نمک و ابلیمو در ظرف مورد نظر چیده و با یک برش لیمو گوجه تزیین میکنیم.        ",
        Numberoforders: 50,
        Foodingredients: [
            { id: 1, img: "/img/FoodIngredients/ابلیمو.svg", name: "آبلیمو" },
            { id: 2, img: "/img/FoodIngredients/لیموترش.svg", name: "لیموترش" },
            { id: 3, img: "/img/FoodIngredients/گوجه.svg", name: "گوجه" },
            { id: 4, img: "/img/FoodIngredients/لوبیا.svg", name: "لوبیا" },
            { id: 5, img: "/img/FoodIngredients/هویج.svg", name: "هویج" },
            { id: 6, img: "/img/FoodIngredients/سیب-زمینی.svg", name: "سیب زمینی" },
            { id: 7, img: "/img/FoodIngredients/کدو.svg", name: "کدو" },
           
        ],

        comments: [
            {   id : 1,
                user: "رقیه",
                opinion: "بسیار عالی و خوشمزه. با کمال تشکر از زحمات مامان تاج عزیز.",
                date: "۱۴۰۲/۰۱/۲۴",
                response: "نوش جونتون باشه ممنون از نظر خوبتون"
            },
            { 
                id : 2,
                user: "مهناز",
                opinion: "از همه نظر عالی",
                date: "۱۴۰۱/۰۴/۰۸",
                response: "نوش جونتون باشه ممنون از نظر خوبتون"
            },
            
        ],
        category : "خوراک",
        count : 0
    },
    {
        id:4,
        title: "دلمه کلم",
        mother: "مامان سها",
        Chefpicture : "/img/Chefs/سها.jpg",
        score: 4.36,
        images: [
            { img: "/img/Foods/kh4.jpg"},
            { img: "/img/Foods/kh4-2.jpg"},
            { img: "/img/Foods/kh4-3.jpg"},
            { img: "/img/Foods/kh4-4.jpg"},
        ],
        price: 98_000,
        recipes: "پیاز و گوشت را تفت داده ، نمک ، فلفل و ادویه را به آن اضافه می‌کنیم. برنج ، مایه گوشتی ، سبزی دلمه ، لپه ،  رب گوجه و آبلیمو همه را باهم مخلوط می‌کنیم و در برگ کلم می‌پیچانیم.",
        Numberoforders: 200,
        Foodingredients: [
            { id: 1, img: "/img/FoodIngredients/زیره.svg", name: "زیره" },
            { id: 2, img: "/img/FoodIngredients/ابلیمو.svg", name: "آبلیمو" },
            { id: 3, img: "/img/FoodIngredients/چرخ_گوشت.svg", name: "گوشت چرخ کرده" },
            { id: 4, img: "/img/FoodIngredients/سبزی-دلمه.svg", name: "سبزی دلمه" },
            { id: 5, img: "/img/FoodIngredients/برنج.svg", name: "برنج" },
            { id: 6, img: "/img/FoodIngredients/لپه.svg", name: "لپه" },

        ],

        comments: [
            {   id : 1,
                user: "رها",
                opinion: "دلمه های سها واقعا عالیه هر سه مدلش دلمه برگ-دلمه بادمجان-دلمه کلم                ",
                date: "۱۴۰۱/۰۸/۱۸",
                response: ""
            },
            {   id : 2,
                user: "محسن",
                opinion: "لذیذ و خوشمزه مثل همیشه، فقط کم نمک تر باشد بهتر است مامان سهای عزیز.                ",
                date: "۱۴۰۰/۰۹/۱۵",
                response: "نوش جان ممنون بله میشد نمکش کمتر باشه ان شاءالله دفعه بعد جبران مبشه                "
            },
            {   id : 3,
                user: "مرضیه",
                opinion: "مثل همیشه عالی و خوشمزه، مامان سها دستت درد نکنه                ",
                date: "۱۴۰۰/۰۶/۱۵",
                response: "نوش جان عزبزم                "
            },
            {   id : 4,
                user: "طوبی",
                opinion: "باعث تعجب بود،من قبلا این غذارو گرفته بودم و راضی بودم ولی اینبار خیلی بی نمک و بدون چاشنی بود و خوب نشد! شاید روزه بودن مامان سها                ",
                date: "۱۴۰۰/۰۱/۳۱",
                response: "خیلی معذرت میخام همینطور که شما فرمودید روزه بودم اشتباه از من بود وقتی روزه ام نباید سفارش قبول کنم انشاءلله جبران میشه بازم ببخشید"
            },
            
        ],
        category : "خوراک",
        count : 0
    },
    {
        id:5,
        title: "چلو خورش قورمه سبزی با گوشت گوسفندی",
        mother: "مامان آرشید",
        Chefpicture : "/img/Chefs/عمومی.jpg",
        score: 4.59,
        images: [
            { img: "/img/Foods/قورمه-سبزی.jpg" }
        ],
        price: 160000,
        recipes: "سبزی را سرخ میکنیم به همراه گوشت و کمی فلفل سیاه و زرچوبه سرخ میکنیم بعد پیاز داغ اضافه میکنیم ولوبیا چیتی به همراه اب چهار ساعت بپزد در اخر نمک و رب و لیمو اضافه میکنیم ",
        Numberoforders: 200,
        Foodingredients: [
            { id: 1, img: "/img/FoodIngredients/لوبیا.svg", name: "لوبیا" },
            { id: 2, img: "/img/FoodIngredients/گوشت.svg", name: "گوشت گوسفندی" },
            { id: 3, img: "/img/FoodIngredients/لیموترش.svg", name: "لیمو عمانی" },
            { id: 4, img: "/img/FoodIngredients/فلفل.svg", name: "فلفل سیاه" },
            { id: 5, img: "/img/FoodIngredients/سبزی-دلمه.svg", name: "سبزی قورمه" },
            { id: 6, img: "/img/FoodIngredients/زردچوبه.svg", name: "زردچوبه" },
            { id: 7, img: "/img/FoodIngredients/برنج.svg", name: "برنج هاشمی" },
            { id: 8, img: "/img/FoodIngredients/پیاز.svg", name: "پیاز" },
            { id: 9, img: "/img/FoodIngredients/رب.svg", name: "رب گوجه" },
            { id: 10, img: "/img/FoodIngredients/رب.svg", name: "رب انار" },
            { id: 11, img: "/img/FoodIngredients/روغن.svg", name: "روغن سرخ کردنی" },

        ],

        comments: [
            {   id : 1,
                user: "امیررضا",
                opinion: "برنج خوب نبودزیاد",
                date: "۱۴۰۰/۱۰/۱۴",
                response: ""
            },
            {   id : 2,
                user: "جعفری",
                opinion: "عالی بود",
                date: "۱۴۰۰/۰۸/۱۲",
                response: "نوش جانتون"
            },
            
        ],
        category : "خورش",
        count : 0
    },
    {
        id:6,
        title: "شله زرد",
        mother: "مامان عهدیه",
        Chefpicture : "/img/Chefs/عمومی.jpg",
        score: 1.03,
        images: [
            { img: "/img/Foods/شله-زرد.jpg" }
        ],
        price: 60000,
        recipes: "برنج را ۲الی۳ ساعت خیس کرده .بادام خلال شده ودر آب جوش امده ریخته وبه مدت نیم ساعت بجوشد سپس برنج را می ریزیم وبعد زعفران و شکر گلاب را اضافه کرده وبه طور منظم همزده تا ته نگیره  بعد ۲الی ۳ ساعت جا می افتد.        ",
        Numberoforders: 1000,
        Foodingredients: [
            { id: 1, img: "/img/FoodIngredients/کره.svg", name: "کره" },
            { id: 2, img: "/img/FoodIngredients/زعفران.svg", name: "زعفران" },
            { id: 3, img: "/img/FoodIngredients/بادام.svg", name: "خلال بادام" },
            { id: 4, img: "/img/FoodIngredients/شکر.svg", name: "شکر" },
            { id: 5, img: "/img/FoodIngredients/برنج.svg", name: "برنج" },
           
        ],

        comments: [
            
        ],
        category : "دسر",
        count : 0
    },
    {
        id :7,
        title: "چلوکباب کوبیده",
        mother: "مامان الناز",
        Chefpicture : "/img/Chefs/عمومی.jpg",
        score: 4.10,
        images: [
            { img: "/img/Foods/کوبیده.jpg" }
        ],
        price: 107000,
        recipes: "گوشت چرخکرده مخلوط راسته گوساله و قلوه گاه گوسفندی (۱۳۰ گرم) را با بک عدد پیاز رنده شده و آب گرفته شده مخلوط میکنیم و به آن نمک و فلفل سیاه اضافه میکنیم و بعد از ورز دادن به سیخ کشیده، داخل یخچال برای استراحت گوشت میگذاریم.پس از کبابی کردن همراه با (۳۵۰ گرم) برنج هاشمی ایرانی و گوجه کبابی و ته دیگ سیب زمینی غذا آماده سرو است.        ",
        Numberoforders: 500,
        Foodingredients: [
            { id: 1, img: "/img/FoodIngredients/برنج.svg", name: "برنج" },
            { id: 2, img: "/img/FoodIngredients/گوشت.svg", name: "گوشت" },
            { id: 3, img: "/img/FoodIngredients/گوجه.svg", name: "گوجه" },
            { id: 4, img: "/img/FoodIngredients/پیاز.svg", name: "پیاز" },
            { id: 5, img: "/img/FoodIngredients/سیب-زمینی.svg", name: "سیب زمینی پخته" },
            { id: 6, img: "/img/FoodIngredients/نمک.svg", name: "سماق" },
           
        ],

        comments: [
            {   id : 1,
                user: "حسام",
                opinion: "خوب نبود کباب خیلی کوچیک بود",
                date: "۱۴۰۱/۱۲/۲۷",
                response: ""
            },
            {   id : 2,
                user: "شیما",
                opinion: "خوب بود",
                date: "۱۴۰۱/۰۹/۲۶",
                response: "خوشحالم که دستپختم مورد پسندتون بود. نوش جان"
            },
           
            
        ],
        category : "کباب",
        count : 0
    },
    {
        id :8,
        title: "سالاد شیرازی",
        mother: "مامان تاچ ماه",
        Chefpicture : "/img/Chefs/تاج-ماه.jpg",
        score: 3.10,
        images: [
            { img: "/img/Foods/سالاد-شیرازی.jpg" }
        ],
        price: 22000,
        recipes: "خیار گوجه پیاز را ریز خرد میکنیم نمک و آبلیمو اضافه میکنیم        ",
        Numberoforders: 200,
        Foodingredients: [
            { id: 1, img: "/img/FoodIngredients/پیاز.svg", name: "پیاز" },
            { id: 2, img: "/img/FoodIngredients/گوجه.svg", name: "گوجه" },
            { id: 3, img: "/img/FoodIngredients/خیار.svg", name: "خیار" },
           
        ],

        comments: [
            {   id : 1,
                user: "طاهره",
                opinion: "بسيار عالي",
                date: "۱۴۰۱/۰۸/۲۵",
                response: "نوش جونتون باشه ممنون از نظر خوبتون"
            },
            
        ],
        category : "سالاد",
        count : 0
    },
    {
        id: 9,
        title: "سالاد فصل",
        mother: "مامان هدا",
        Chefpicture : "/img/Chefs/هدا.jpg",
        score: 2.00,
        images: [
            { img: "/img/Foods/سالاد-فصل.jpg" }
        ],
        price: 28000,
        recipes: "کاهو خردشده وکلم قرمز هویج خیار گوجه فرنگی خرد کرده تزیین میکنیم و سس مایونز را درست کرده در ظرفی جدا ریخته        ",
        Numberoforders: 100,
        Foodingredients: [
            { id:1, img: "/img/FoodIngredients/سس.svg", name: "سس مایونز" },
            { id:2, img: "/img/FoodIngredients/گوجه.svg", name: "گوجه" },
            { id:3, img: "/img/FoodIngredients/کلم.svg", name: "کلم برگ" },
            { id:4, img: "/img/FoodIngredients/کاهو.svg", name: "کاهو" },
            { id:5, img: "/img/FoodIngredients/خیار.svg", name: "خیار" },
           
        ],

        comments: [
            {   id : 1,
                user: "آرین",
                opinion: "خوب بودن ممنون",
                date: "۱۳۹۷/۱۱/۲۸",
                response: ""
            },
            {   id : 2,
                user: "مهتاب",
                opinion: "خوب بود ",
                date: "۱۳۹۷/۰۸/۱۹",
                response: ""
            },
            {   id : 3,
                user: "سعید",
                opinion: "عالی بود",
                date: "۱۳۹۷/۰۴/۰۳۵",
                response: "نوش جان"
            },
            
        ],
        category : "سالاد",
        count : 0
    },
    {
        id : 10,
        title: "چلو جوجه کباب",
        mother: "مامان الناز",
        Chefpicture : "/img/Chefs/عمومی.jpg",
        score: 3.08,
        images: [
            { img: "/img/Foods/جوجه-کباب.jpg" }
        ],
        price: 160000,
        recipes: "سینه مرغ (۱۵۰گرم) با آب لیموی تازه، روغن زیتون، پیاز، فلفل دلمه، کمی سیر، زعفران و نمک و فلفل سیاه طعم دار کرده. پس از کباب کردن به همراه ۳۵۰ گرم برنج هاشمی ایرانی و گوجه کبابی و ته دیگ سیب زمینی آماده سرو میباشد.        ",
        Numberoforders: 300,
        Foodingredients: [
            { id: 1, img: "/img/FoodIngredients/برنج.svg", name: "برنج" },
            { id: 2, img: "/img/FoodIngredients/گوجه.svg", name: "گوجه" },
            { id: 3, img: "/img/FoodIngredients/سیب-زمینی.svg", name: "سیب زمینی" },
            { id: 4, img: "/img/FoodIngredients/کره.svg", name: "کره" },
            { id: 5, img: "/img/FoodIngredients/مرغ.svg", name: "مرغ" },
           
        ],

        comments: [
            {   id : 1,
                user: "صابر",
                opinion: "برنج مرغوب نبود",
                date: "۱۴۰۱/۱۲/۲۴",
                response: "سلام ممنون از نظرتون.حتما اصلاح میکنم"
            },
            {   id : 2,
                user: "نوشین",
                opinion: "کیفیت مثل همیشه نبود",
                date: "۱۴۰۱/۱۱/۰۳",
                response: "سعی میکنم رضایتتون رو مثل قبل جلب کنم.تشکر  "
            },
            
        ],
        category : "کباب",
        count : 0
    },

   
]

export default foods