// 2008/7/3 Scripted by K-Factory@migiwa
// 2009/1/27 Modified by K-Factory@migiwa

// *****************************************************************************
str_CenterT = 'Tie!';
str_CenterB = 'Undo last choice';

str_ImgPath = '';
var bln_ResultMode = 1;
var int_ResultImg = 2;
var int_ResultRank = 3;

var bln_ResultStyle = 0;

var bln_ProgessBar = 1;

var int_Colspan = 3;
var ary_TitleData = [
   "Korean Albums",
   "Japanese Albums",
   "Group OSTs",
   "Solo Work"
];

var ary_CharacterData = [
   [1, "O.K.",						[1,0,0,0], "images/sorter/lets-fly.png"], 
   [1, "Remember",					[1,0,0,0], "images/sorter/lets-fly.png"], 
   [1, "못된 것만 배워서 (Only Learned Bad Things)",	[1,0,0,0], "images/sorter/lets-fly.png"], 
   [1, "Bling Girl",					[1,0,0,0], "images/sorter/lets-fly.png"],
   [1, "Only One",					[1,0,0,0], "images/sorter/lets-fly.png"],

   [1, "Beautiful Target",				[1,0,0,0], "images/sorter/it-b1a4.png"],
   [1, "My Love",					[1,0,0,0], "images/sorter/it-b1a4.png"],
   [1, "쮸쮸쮸 (Chu Chu Chu)",				[1,0,0,0], "images/sorter/it-b1a4.png"],
   [1, "Wonderful Tonight",				[1,0,0,0], "images/sorter/it-b1a4.png"],
   [1, "Fooool",					[1,0,0,0], "images/sorter/it-b1a4.png"],

   [1, "Sky",						[0,0,1,0], "images/sorter/sky.png"],

   [1, "Baby I'm Sorry",				[1,0,0,0], "images/sorter/ignition-special.jpg"],
   [1, "This Time is Over",				[1,0,0,0], "images/sorter/ignition-special.jpg"],
   [1, "So Fine",					[1,0,0,0], "images/sorter/ignition-special.jpg"],
   [1, "Super Sonic",					[1,0,0,0], "images/sorter/ignition-special.jpg"],
   [1, "둘만 있으면 (Just the Two of Us)",			[1,0,0,0], "images/sorter/ignition-special.jpg"],
   [1, "웃어봐 (Smile)",					[1,0,0,0], "images/sorter/ignition-special.jpg"],
   [1, "Feeling",					[1,0,0,0], "images/sorter/ignition-special.jpg"],
   [1, "짝사랑 (Crush)",					[1,0,0,0], "images/sorter/ignition-special.jpg"],
   [1, "Wonderful Tonight (Unplugged Remix)",		[1,0,0,0], "images/sorter/ignition-special.jpg"],
   [1, "잘자요 굿나잇 (Baby Good Night)",			[1,0,0,0], "images/sorter/ignition-special.jpg"],
   [1, "너때문에 (Because of You)",			[1,0,0,0], "images/sorter/ignition-special.jpg"],

   [1, "Hey Girl",					[0,0,1,0], "images/sorter/hey-girl.png"],

   [1, "Beautiful Lie",					[0,1,0,0], "images/sorter/1.png"],
   [1, "Empty Mind",					[0,1,0,0], "images/sorter/1.png"],
   [1, "Tipping Point",					[0,1,0,0], "images/sorter/1.png"],
   [1, "Wake Me Up",					[0,1,0,0], "images/sorter/1.png"],
   [1, "One Love",					[0,1,0,0], "images/sorter/1.png"],

   [1, "걸어 본다 (Tried To Walk)",			          [1,0,0,0], "images/sorter/in-the-wind.png"],
   [1, "너만 있으면 (If...)",				        [1,0,0,0], "images/sorter/in-the-wind.png"],
   [1, "나쁜 짓안 할게요 (I Won't Do Bad Things)",
		[1,0,0,0], "images/sorter/in-the-wind.png"],
   [1, "뭐 할래요 (What Do You Want To Do)",		  [1,0,0,0], "images/sorter/in-the-wind.png"],
   [1, "Be My Girl"					                 [1,0,0,0], "images/sorter/in-the-wind.png"],
   [1, "In The Air",					           [1,0,0,0], "images/sorter/in-the-wind.png"],
    
   [1, "Ready To Go",				[0,1,0,0], "images/sorter/beautiful-target-jp.png"],
    
   [1, "Fly Away",				[0,1,0,0], "images/sorter/baby-good-night-jp.png"],
   [1, "So Fine (Japanese ver.)",				[0,1,0,0], "images/sorter/baby-good-night-jp.png"],

   [1, "별빛의 노래 (Starlight Song)",			[1,0,0,0], "images/sorter/whats-happening.png"],
   [1, "이게무슨일이야 (What's Happening?)",
		[1,0,0,0], "images/sorter/whats-happening.png"],
   [1, "Yesterday",					[1,0,0,0], "images/sorter/whats-happening.png"],
   [1, "Good Love",					[1,0,0,0], "images/sorter/whats-happening.png"],
   [1, "몇 번을 (How Many Times)",
			[1,0,0,0], "images/sorter/whats-happening.png"],

   [1, "Sunshine",					     [0,0,1,0], "images/sorter/sunshine.png"],

   [1, "그대와 함께 (With You)",				[0,0,1,0], "images/sorter/with-you.png"],
    
   [1, "Beautiful Target -like it MIX-",				[0,1,0,0], "images/sorter/beautiful-target-jp.png"],

   [1, "없구나 (Lonely)",					[1,0,0,0], "images/sorter/who-am-i.png"],
   [1, "사랑 그땐 (Love Then)",				[1,0,0,0], "images/sorter/who-am-i.png"],
   [1, "Amazing",					[1,0,0,0], "images/sorter/who-am-i.png"],
   [1, "Baby",						[1,0,0,0], "images/sorter/who-am-i.png"],
   [1, "Oh My God",					[1,0,0,0], "images/sorter/who-am-i.png"],
   [1, "벅차 (Too Much)",					[1,0,0,0], "images/sorter/who-am-i.png"],
   [1, "Pretty",					[1,0,0,0], "images/sorter/who-am-i.png"],
   [1, "Who Am I",					[1,0,0,0], "images/sorter/who-am-i.png"],
   [1, "음악에 취해 (Feel The Music)",			[1,0,0,0], "images/sorter/who-am-i.png"],
   [1, "길 (Road)",					[1,0,0,0], "images/sorter/who-am-i.png"],
   [1, "Seoul",						[1,0,0,0], "images/sorter/who-am-i.png"],

   [1, "Believe In Love",				[0,1,0,0], "images/sorter/2.png"],
   [1, "Angel Eyes",					[0,1,0,0], "images/sorter/2.png"],
   [1, "HEY!!",						[0,1,0,0], "images/sorter/2.png"],

   [1, "Solo Day",					[1,0,0,0], "images/sorter/solo-day.png"],
   [1, "내가 뭐가돼 (You Make Me A Fool)",			[1,0,0,0], "images/sorter/solo-day.png"],
   [1, "잘돼가 (Are You Happy (with him?))",			[1,0,0,0], "images/sorter/solo-day.png"],
   [1, "물한잔 (A Glass Of Water)",			[1,0,0,0], "images/sorter/solo-day.png"],
   [1, "Drive",						[1,0,0,0], "images/sorter/solo-day.png"],
   [1, "You (feat. Sunmi)",				[1,0,0,0], "images/sorter/solo-day.png"],

   [1, "Sweet Girl",					[1,0,0,0], "images/sorter/sweet-girl.png"],
   [1, "You Are a Girl I Am a Boy",			[1,0,0,0], "images/sorter/sweet-girl.png"],
   [1, "10년 후 (After 10 Years)",			[1,0,0,0], "images/sorter/sweet-girl.png"],
   [1, "Wait",						[1,0,0,0], "images/sorter/sweet-girl.png"],
   [1, "Love is Magic",					[1,0,0,0], "images/sorter/sweet-girl.png"],
   [1, "Let's Be Happy",					[1,0,0,0], "images/sorter/sweet-girl.png"],

   [1, "モッポンゴヤ〜見なかったことに･･･ (I Didn't See It)",	[0,1,0,0], "images/sorter/3.png"],
   [1, "Somebody To Love",				[0,1,0,0], "images/sorter/3.png"],
    
   [1, "白いキセキ (White Miracle)",			[0,1,0,0], "images/sorter/shiroi-kiseki.png"],
    
   [1, "Happy Days",					[0,1,0,0], "images/sorter/happy-days.png"],
   [1, "Colorful",					[0,1,0,0], "images/sorter/happy-days.png"],
 //  [1, "Bana Song",					[0,1,0,0], "images/sorter/happy-days.png"],
    
   [1, "Tell Me Why",					[0,1,0,0], "images/sorter/solo-day-jp.png"],
    
   [1, "Stay As You Are",					[0,0,0,1], "images/sorter/stay-as-you-are.png"],
   [1, "Home",					[0,0,0,1], "images/sorter/stay-as-you-are.png"],
   [1, "My Childhood Story",					[0,0,0,1], "images/sorter/stay-as-you-are.png"],
   [1, "Ya!",					[0,0,0,1], "images/sorter/stay-as-you-are.png"],
   [1, "The Way With You",					[0,0,0,1], "images/sorter/stay-as-you-are.png"],

   [1, "거짓말이야 (A Lie)",				[1,0,0,0], "images/sorter/good-timing.png"],
   [1, "너에게 한 번 더 반하는 순간 (Crushing On You Again)",	[1,0,0,0], "images/sorter/good-timing.png"],
   [1, "Good Timing",					[1,0,0,0], "images/sorter/good-timing.png"],
   [1, "악몽 (Nightmare)",				[1,0,0,0], "images/sorter/good-timing.png"],
   [1, "꿍에 (In Dreams)",				[1,0,0,0], "images/sorter/good-timing.png"],
   [1, "Sparkling",					[1,0,0,0], "images/sorter/good-timing.png"],
   [1, "To My Star",					[1,0,0,0], "images/sorter/good-timing.png"],
   [1, "멜랑꼴리 (Melancholy)",				[1,0,0,0], "images/sorter/good-timing.png"],
   [1, "내가 널 첮을게 (I Will Find You",			[1,0,0,0], "images/sorter/good-timing.png"],
   [1, "Drunk On You",					[1,0,0,0], "images/sorter/good-timing.png"],
   [1, "함께 (Together)",					[1,0,0,0], "images/sorter/good-timing.png"],
   [1, "눈이 오면 (When It Snows)",			[1,0,0,0], "images/sorter/good-timing.png"],

   [1, "Choo Choo Train",				[0,1,0,0], "images/sorter/you-and-i.png"],
   [1, "以心電信 (Ishin Denshin)",				[0,1,0,0], "images/sorter/follow-me.png"],
    
   [1, "好きだからしょうがない (Sukidakara Shouganai)",		[0,1,0,0], "images/sorter/4.png"],
   [1, "Emotion",					[0,1,0,0], "images/sorter/4.png"],
   [1, "Love You Love You",				[0,1,0,0], "images/sorter/4.png"],
   [1, "Follow Me",					[0,1,0,0], "images/sorter/follow-me.png"],
   [1, "You and I",					[0,1,0,0], "images/sorter/you-and-i.png"],
   [1, "そうすれば (Sou Sureba)",				[0,1,0,0], "images/sorter/4.png"],
   [1, "Blue Moon",					[0,1,0,0], "images/sorter/4.png"],
   [1, "Light On",					[0,1,0,0], "images/sorter/4.png"],
   [1, "Thank You Hate You",				[0,1,0,0], "images/sorter/4.png"],
   [1, "二人で (Futari de)",				[0,1,0,0], "images/sorter/4.png"],
   [1, "キミ色 (Kimi-iro)",				[0,1,0,0], "images/sorter/4.png"],

   [1, "Rollin'",					[1,0,0,0], "images/sorter/rollin.png"],
   [1, "너는 내가 필요해 (You Need Me)",			[1,0,0,0], "images/sorter/rollin.png"],
   [1, "Love Emotion",					[1,0,0,0], "images/sorter/rollin.png"],
   [1, "Smile Mask",					[1,0,0,0], "images/sorter/rollin.png"],
   [1, "내게 전화해 (Call Me)",				[1,0,0,0], "images/sorter/rollin.png"],
   [1, "아이처럼 (Like A Child)",				[1,0,0,0], "images/sorter/rollin.png"],
   
   [1, "You Are My Baby",           [0,0,1,0], "images/sorter/you-are-my-baby.png"],
    
   [1, "Bana Song",				[0,1,0,0], "images/sorter/square.png"],
   
   [1, "Do You Remember",				[0,1,0,0], "images/sorter/do-you-remember.png"],
   [1, "Paradise",				[0,1,0,0], "images/sorter/do-you-remember.png"],
    
   [1, "会えるまで (Aerumade)",				[0,1,0,0], "images/sorter/aerumade.png"],
   [1, "Mommy Mommy",				[0,1,0,0], "images/sorter/aerumade.png"],
   [1, "Lost",				[0,1,0,0], "images/sorter/aerumade.png"],
    
   [1, "I Need You",				[0,1,0,0], "images/sorter/5.png"],
   [1, "迷路 (Maze)",				[0,1,0,0], "images/sorter/5.png"],
   [1, "Humming Bird",				[0,1,0,0], "images/sorter/5.png"],
   [1, "Who Are You",				[0,1,0,0], "images/sorter/5.png"],
   [1, "Every Time",				[0,1,0,0], "images/sorter/5.png"],

];	