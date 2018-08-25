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
   [1, "O.K.",						[1,0,0,0], "https://78.media.tumblr.com/fdec93440760d2c30850c8cb6e33939f/tumblr_inline_p2vax2K6Ti1vy5rsk_540.png"], 
   [1, "Remember",					[1,0,0,0], "https://78.media.tumblr.com/fdec93440760d2c30850c8cb6e33939f/tumblr_inline_p2vax2K6Ti1vy5rsk_540.png"], 
   [1, "못된 것만 배워서 (Only Learned Bad Things)",	[1,0,0,0], "https://78.media.tumblr.com/fdec93440760d2c30850c8cb6e33939f/tumblr_inline_p2vax2K6Ti1vy5rsk_540.png"], 
   [1, "Bling Girl",					[1,0,0,0], "https://78.media.tumblr.com/fdec93440760d2c30850c8cb6e33939f/tumblr_inline_p2vax2K6Ti1vy5rsk_540.png"],
   [1, "Only One",					[1,0,0,0], "https://78.media.tumblr.com/fdec93440760d2c30850c8cb6e33939f/tumblr_inline_p2vax2K6Ti1vy5rsk_540.png"],

   [1, "Beautiful Target",				[1,0,0,0], "https://78.media.tumblr.com/8bfab46830aff5f2a7522d72ff0541d1/tumblr_inline_p2vax1L0iN1vy5rsk_540.png"],
   [1, "My Love",					[1,0,0,0], "https://78.media.tumblr.com/8bfab46830aff5f2a7522d72ff0541d1/tumblr_inline_p2vax1L0iN1vy5rsk_540.png"],
   [1, "쮸쮸쮸 (Chu Chu Chu)",				[1,0,0,0], "https://78.media.tumblr.com/8bfab46830aff5f2a7522d72ff0541d1/tumblr_inline_p2vax1L0iN1vy5rsk_540.png"],
   [1, "Wonderful Tonight",				[1,0,0,0], "https://78.media.tumblr.com/8bfab46830aff5f2a7522d72ff0541d1/tumblr_inline_p2vax1L0iN1vy5rsk_540.png"],
   [1, "Fooool",					[1,0,0,0], "https://78.media.tumblr.com/8bfab46830aff5f2a7522d72ff0541d1/tumblr_inline_p2vax1L0iN1vy5rsk_540.png"],

   [1, "Sky",						[0,0,1,0], "https://78.media.tumblr.com/5d8c48cd9613fd05176962e3d04a1f55/tumblr_inline_p2vcz8yPLk1vy5rsk_540.png"],

   [1, "Baby I'm Sorry",				[1,0,0,0], "https://78.media.tumblr.com/dccf6f0e0aa61973b517836ae9ea5cde/tumblr_inline_p2vawzwrOI1vy5rsk_540.png"],
   [1, "This Time is Over",				[1,0,0,0], "https://78.media.tumblr.com/dccf6f0e0aa61973b517836ae9ea5cde/tumblr_inline_p2vawzwrOI1vy5rsk_540.png"],
   [1, "So Fine",					[1,0,0,0], "https://78.media.tumblr.com/dccf6f0e0aa61973b517836ae9ea5cde/tumblr_inline_p2vawzwrOI1vy5rsk_540.png"],
   [1, "Super Sonic",					[1,0,0,0], "https://78.media.tumblr.com/dccf6f0e0aa61973b517836ae9ea5cde/tumblr_inline_p2vawzwrOI1vy5rsk_540.png"],
   [1, "둘만 있으면 (Just the Two of Us)",			[1,0,0,0], "https://78.media.tumblr.com/dccf6f0e0aa61973b517836ae9ea5cde/tumblr_inline_p2vawzwrOI1vy5rsk_540.png"],
   [1, "웃어봐 (Smile)",					[1,0,0,0], "https://78.media.tumblr.com/dccf6f0e0aa61973b517836ae9ea5cde/tumblr_inline_p2vawzwrOI1vy5rsk_540.png"],
   [1, "Feeling",					[1,0,0,0], "https://78.media.tumblr.com/dccf6f0e0aa61973b517836ae9ea5cde/tumblr_inline_p2vawzwrOI1vy5rsk_540.png"],
   [1, "짝사랑 (Crush)",					[1,0,0,0], "https://78.media.tumblr.com/dccf6f0e0aa61973b517836ae9ea5cde/tumblr_inline_p2vawzwrOI1vy5rsk_540.png"],
   [1, "Wonderful Tonight (Unplugged Remix)",		[1,0,0,0], "https://78.media.tumblr.com/dccf6f0e0aa61973b517836ae9ea5cde/tumblr_inline_p2vawzwrOI1vy5rsk_540.png"],
   [1, "잘자요 굿나잇 (Baby Good Night)",			[1,0,0,0], "https://78.media.tumblr.com/dccf6f0e0aa61973b517836ae9ea5cde/tumblr_inline_p2vawzwrOI1vy5rsk_540.png"],
   [1, "너때문에 (Because of You)",			[1,0,0,0], "https://78.media.tumblr.com/dccf6f0e0aa61973b517836ae9ea5cde/tumblr_inline_p2vawzwrOI1vy5rsk_540.png"],

   [1, "Hey Girl",					[0,0,1,0], "https://78.media.tumblr.com/51ecf8e5ff284dc0b8fd3b2d5c06835d/tumblr_inline_p2vcz8DsAW1vy5rsk_540.png"],

   [1, "Beautiful Lie",					[0,1,0,0], "https://78.media.tumblr.com/3c8f6d2279648e2f102561fa2cede629/tumblr_inline_p2vbe2oOCR1vy5rsk_540.png"],
   [1, "Empty Mind",					[0,1,0,0], "https://78.media.tumblr.com/3c8f6d2279648e2f102561fa2cede629/tumblr_inline_p2vbe2oOCR1vy5rsk_540.png"],
   [1, "Tipping Point",					[0,1,0,0], "https://78.media.tumblr.com/3c8f6d2279648e2f102561fa2cede629/tumblr_inline_p2vbe2oOCR1vy5rsk_540.png"],
   [1, "Wake Me Up",					[0,1,0,0], "https://78.media.tumblr.com/3c8f6d2279648e2f102561fa2cede629/tumblr_inline_p2vbe2oOCR1vy5rsk_540.png"],
   [1, "One Love",					[0,1,0,0], "https://78.media.tumblr.com/3c8f6d2279648e2f102561fa2cede629/tumblr_inline_p2vbe2oOCR1vy5rsk_540.png"],

   [1, "걸어 본다 (Tried To Walk)",			          [1,0,0,0], "https://78.media.tumblr.com/9c650591cdbc05f61edca3a21d63c83a/tumblr_inline_p2vax1LtRK1vy5rsk_540.png"],
   [1, "너만 있으면 (If...)",				        [1,0,0,0], "https://78.media.tumblr.com/9c650591cdbc05f61edca3a21d63c83a/tumblr_inline_p2vax1LtRK1vy5rsk_540.png"],
   [1, "나쁜 짓안 할게요 (I Won't Do Bad Things)",
		[1,0,0,0], "https://78.media.tumblr.com/9c650591cdbc05f61edca3a21d63c83a/tumblr_inline_p2vax1LtRK1vy5rsk_540.png"],
   [1, "뭐 할래요 (What Do You Want To Do)",		  [1,0,0,0], "https://78.media.tumblr.com/9c650591cdbc05f61edca3a21d63c83a/tumblr_inline_p2vax1LtRK1vy5rsk_540.png"],
   [1, "Be My Girl"					                 [1,0,0,0], "https://78.media.tumblr.com/9c650591cdbc05f61edca3a21d63c83a/tumblr_inline_p2vax1LtRK1vy5rsk_540.png"],
   [1, "In The Air",					           [1,0,0,0], "https://78.media.tumblr.com/9c650591cdbc05f61edca3a21d63c83a/tumblr_inline_p2vax1LtRK1vy5rsk_540.png"],
    
   [1, "Ready To Go",				[0,1,0,0], "https://78.media.tumblr.com/22c7ce43e1add634c2329e514c6d7d3b/tumblr_inline_p2vck6mi6D1vy5rsk_540.png"],
    
   [1, "Fly Away",				[0,1,0,0], "https://78.media.tumblr.com/aa6fe1b52b428389ff33cf593b733b1a/tumblr_inline_p2vck5wT9x1vy5rsk_540.png"],
   [1, "So Fine (Japanese ver.)",				[0,1,0,0], "https://78.media.tumblr.com/aa6fe1b52b428389ff33cf593b733b1a/tumblr_inline_p2vck5wT9x1vy5rsk_540.png"],

   [1, "별빛의 노래 (Starlight Song)",			[1,0,0,0], "https://78.media.tumblr.com/595a0ad112cf0a39361a1b9475750181/tumblr_inline_p2vax3s3TE1vy5rsk_540.png"],
   [1, "이게무슨일이야 (What's Happening?)",
		[1,0,0,0], "https://78.media.tumblr.com/595a0ad112cf0a39361a1b9475750181/tumblr_inline_p2vax3s3TE1vy5rsk_540.png"],
   [1, "Yesterday",					[1,0,0,0], "https://78.media.tumblr.com/595a0ad112cf0a39361a1b9475750181/tumblr_inline_p2vax3s3TE1vy5rsk_540.png"],
   [1, "Good Love",					[1,0,0,0], "https://78.media.tumblr.com/595a0ad112cf0a39361a1b9475750181/tumblr_inline_p2vax3s3TE1vy5rsk_540.png"],
   [1, "몇 번을 (How Many Times)",
			[1,0,0,0], "https://78.media.tumblr.com/595a0ad112cf0a39361a1b9475750181/tumblr_inline_p2vax3s3TE1vy5rsk_540.png"],

   [1, "Sunshine",					     [0,0,1,0], "https://78.media.tumblr.com/ea67e520d1059c803c86e111392a082f/tumblr_inline_p2vcz85TvS1vy5rsk_540.png"],

   [1, "그대와 함께 (With You)",				[0,0,1,0], "https://78.media.tumblr.com/db9719fdebf2caf9fb5f28ac1d4f6ca7/tumblr_inline_p2vcz9vfPy1vy5rsk_540.png"],
    
   [1, "Beautiful Target -like it MIX-",				[0,1,0,0], "https://78.media.tumblr.com/3a374ef29b7343d688dd9ef5e75151d2/tumblr_inline_p2vck9Uhfw1vy5rsk_540.png"],

   [1, "없구나 (Lonely)",					[1,0,0,0], "https://static.tumblr.com/z3asruv/MACp2v9m9/who_am_i.png"],
   [1, "사랑 그땐 (Love Then)",				[1,0,0,0], "https://static.tumblr.com/z3asruv/MACp2v9m9/who_am_i.png"],
   [1, "Amazing",					[1,0,0,0], "https://static.tumblr.com/z3asruv/MACp2v9m9/who_am_i.png"],
   [1, "Baby",						[1,0,0,0], "https://static.tumblr.com/z3asruv/MACp2v9m9/who_am_i.png"],
   [1, "Oh My God",					[1,0,0,0], "https://static.tumblr.com/z3asruv/MACp2v9m9/who_am_i.png"],
   [1, "벅차 (Too Much)",					[1,0,0,0], "https://static.tumblr.com/z3asruv/MACp2v9m9/who_am_i.png"],
   [1, "Pretty",					[1,0,0,0], "https://static.tumblr.com/z3asruv/MACp2v9m9/who_am_i.png"],
   [1, "Who Am I",					[1,0,0,0], "https://static.tumblr.com/z3asruv/MACp2v9m9/who_am_i.png"],
   [1, "음악에 취해 (Feel The Music)",			[1,0,0,0], "https://static.tumblr.com/z3asruv/MACp2v9m9/who_am_i.png"],
   [1, "길 (Road)",					[1,0,0,0], "https://static.tumblr.com/z3asruv/MACp2v9m9/who_am_i.png"],
   [1, "Seoul",						[1,0,0,0], "https://static.tumblr.com/z3asruv/MACp2v9m9/who_am_i.png"],

   [1, "Believe In Love",				[0,1,0,0], "https://78.media.tumblr.com/201cdc58c338507a359ae340dad08c51/tumblr_inline_p2vbe2cKNg1vy5rsk_540.png"],
   [1, "Angel Eyes",					[0,1,0,0], "https://78.media.tumblr.com/201cdc58c338507a359ae340dad08c51/tumblr_inline_p2vbe2cKNg1vy5rsk_540.png"],
   [1, "HEY!!",						[0,1,0,0], "https://78.media.tumblr.com/201cdc58c338507a359ae340dad08c51/tumblr_inline_p2vbe2cKNg1vy5rsk_540.png"],

   [1, "Solo Day",					[1,0,0,0], "https://78.media.tumblr.com/24b2f024917940973717348499fb7d32/tumblr_inline_p2vax2yGms1vy5rsk_540.png"],
   [1, "내가 뭐가돼 (You Make Me A Fool)",			[1,0,0,0], "https://78.media.tumblr.com/24b2f024917940973717348499fb7d32/tumblr_inline_p2vax2yGms1vy5rsk_540.png"],
   [1, "잘돼가 (Are You Happy (with him?))",			[1,0,0,0], "https://78.media.tumblr.com/24b2f024917940973717348499fb7d32/tumblr_inline_p2vax2yGms1vy5rsk_540.png"],
   [1, "물한잔 (A Glass Of Water)",			[1,0,0,0], "https://78.media.tumblr.com/24b2f024917940973717348499fb7d32/tumblr_inline_p2vax2yGms1vy5rsk_540.png"],
   [1, "Drive",						[1,0,0,0], "https://78.media.tumblr.com/24b2f024917940973717348499fb7d32/tumblr_inline_p2vax2yGms1vy5rsk_540.png"],
   [1, "You (feat. Sunmi)",				[1,0,0,0], "https://78.media.tumblr.com/24b2f024917940973717348499fb7d32/tumblr_inline_p2vax2yGms1vy5rsk_540.png"],

   [1, "Sweet Girl",					[1,0,0,0], "https://78.media.tumblr.com/7ed2df41a07c356faa86e16d37faf3af/tumblr_inline_p2vax3QxMB1vy5rsk_540.png"],
   [1, "You Are a Girl I Am a Boy",			[1,0,0,0], "https://78.media.tumblr.com/7ed2df41a07c356faa86e16d37faf3af/tumblr_inline_p2vax3QxMB1vy5rsk_540.png"],
   [1, "10년 후 (After 10 Years)",			[1,0,0,0], "https://78.media.tumblr.com/7ed2df41a07c356faa86e16d37faf3af/tumblr_inline_p2vax3QxMB1vy5rsk_540.png"],
   [1, "Wait",						[1,0,0,0], "https://78.media.tumblr.com/7ed2df41a07c356faa86e16d37faf3af/tumblr_inline_p2vax3QxMB1vy5rsk_540.png"],
   [1, "Love is Magic",					[1,0,0,0], "https://78.media.tumblr.com/7ed2df41a07c356faa86e16d37faf3af/tumblr_inline_p2vax3QxMB1vy5rsk_540.png"],
   [1, "Let's Be Happy",					[1,0,0,0], "https://78.media.tumblr.com/7ed2df41a07c356faa86e16d37faf3af/tumblr_inline_p2vax3QxMB1vy5rsk_540.png"],

   [1, "モッポンゴヤ〜見なかったことに･･･ (I Didn't See It)",	[0,1,0,0], "https://78.media.tumblr.com/fd40fdc3027949e057ac0b2ce66503ed/tumblr_inline_p2vck4kdc41vy5rsk_540.png"],
   [1, "Somebody To Love",				[0,1,0,0], "https://78.media.tumblr.com/fd40fdc3027949e057ac0b2ce66503ed/tumblr_inline_p2vck4kdc41vy5rsk_540.png"],
    
   [1, "白いキセキ (White Miracle)",			[0,1,0,0], "https://78.media.tumblr.com/51661cc6f09ed9e94aa4c8cea450d79a/tumblr_inline_p2vck8skux1vy5rsk_540.png"],
    
   [1, "Happy Days",					[0,1,0,0], "https://78.media.tumblr.com/906ffa7ee945a906fceb4c552bd831da/tumblr_inline_p2vck8PVJc1vy5rsk_540.png"],
   [1, "Colorful",					[0,1,0,0], "https://78.media.tumblr.com/906ffa7ee945a906fceb4c552bd831da/tumblr_inline_p2vck8PVJc1vy5rsk_540.png"],
 //  [1, "Bana Song",					[0,1,0,0], "https://78.media.tumblr.com/906ffa7ee945a906fceb4c552bd831da/tumblr_inline_p2vck8PVJc1vy5rsk_540.png"],
    
   [1, "Tell Me Why",					[0,1,0,0], "https://78.media.tumblr.com/9546a7bdfe3da7a3c4eb8c87cedf5cf5/tumblr_inline_p2vck81kvR1vy5rsk_540.png"],
    
   [1, "Stay As You Are",					[0,0,0,1], "https://78.media.tumblr.com/285bd2d18eb5cd1cbcbbaf6b07fac7ad/tumblr_inline_p3ujrfVbHF1vy5rsk_540.png"],
   [1, "Home",					[0,0,0,1], "https://78.media.tumblr.com/285bd2d18eb5cd1cbcbbaf6b07fac7ad/tumblr_inline_p3ujrfVbHF1vy5rsk_540.png"],
   [1, "My Childhood Story",					[0,0,0,1], "https://78.media.tumblr.com/285bd2d18eb5cd1cbcbbaf6b07fac7ad/tumblr_inline_p3ujrfVbHF1vy5rsk_540.png"],
   [1, "Ya!",					[0,0,0,1], "https://78.media.tumblr.com/285bd2d18eb5cd1cbcbbaf6b07fac7ad/tumblr_inline_p3ujrfVbHF1vy5rsk_540.png"],
   [1, "The Way With You",					[0,0,0,1], "https://78.media.tumblr.com/285bd2d18eb5cd1cbcbbaf6b07fac7ad/tumblr_inline_p3ujrfVbHF1vy5rsk_540.png"],

   [1, "거짓말이야 (A Lie)",				[1,0,0,0], "https://78.media.tumblr.com/206c3be24d9ca6a114c018cb78371a8a/tumblr_inline_p2vawzgJ2K1vy5rsk_540.png"],
   [1, "너에게 한 번 더 반하는 순간 (Crushing On You Again)",	[1,0,0,0], "https://78.media.tumblr.com/206c3be24d9ca6a114c018cb78371a8a/tumblr_inline_p2vawzgJ2K1vy5rsk_540.png"],
   [1, "Good Timing",					[1,0,0,0], "https://78.media.tumblr.com/206c3be24d9ca6a114c018cb78371a8a/tumblr_inline_p2vawzgJ2K1vy5rsk_540.png"],
   [1, "악몽 (Nightmare)",				[1,0,0,0], "https://78.media.tumblr.com/206c3be24d9ca6a114c018cb78371a8a/tumblr_inline_p2vawzgJ2K1vy5rsk_540.png"],
   [1, "꿍에 (In Dreams)",				[1,0,0,0], "https://78.media.tumblr.com/206c3be24d9ca6a114c018cb78371a8a/tumblr_inline_p2vawzgJ2K1vy5rsk_540.png"],
   [1, "Sparkling",					[1,0,0,0], "https://78.media.tumblr.com/206c3be24d9ca6a114c018cb78371a8a/tumblr_inline_p2vawzgJ2K1vy5rsk_540.png"],
   [1, "To My Star",					[1,0,0,0], "https://78.media.tumblr.com/206c3be24d9ca6a114c018cb78371a8a/tumblr_inline_p2vawzgJ2K1vy5rsk_540.png"],
   [1, "멜랑꼴리 (Melancholy)",				[1,0,0,0], "https://78.media.tumblr.com/206c3be24d9ca6a114c018cb78371a8a/tumblr_inline_p2vawzgJ2K1vy5rsk_540.png"],
   [1, "내가 널 첮을게 (I Will Find You",			[1,0,0,0], "https://78.media.tumblr.com/206c3be24d9ca6a114c018cb78371a8a/tumblr_inline_p2vawzgJ2K1vy5rsk_540.png"],
   [1, "Drunk On You",					[1,0,0,0], "https://78.media.tumblr.com/206c3be24d9ca6a114c018cb78371a8a/tumblr_inline_p2vawzgJ2K1vy5rsk_540.png"],
   [1, "함께 (Together)",					[1,0,0,0], "https://78.media.tumblr.com/206c3be24d9ca6a114c018cb78371a8a/tumblr_inline_p2vawzgJ2K1vy5rsk_540.png"],
   [1, "눈이 오면 (When It Snows)",			[1,0,0,0], "https://78.media.tumblr.com/206c3be24d9ca6a114c018cb78371a8a/tumblr_inline_p2vawzgJ2K1vy5rsk_540.png"],

   [1, "Choo Choo Train",				[0,1,0,0], "https://78.media.tumblr.com/f3c48a03597ec3b4fdc39d9dc17cc582/tumblr_inline_p2vck9GLmb1vy5rsk_540.png"],
   [1, "以心電信 (Ishin Denshin)",				[0,1,0,0], "https://78.media.tumblr.com/b22ee330d46c015f56000e91b80e6a20/tumblr_inline_p2vck7QDxi1vy5rsk_540.png"],
    
   [1, "好きだからしょうがない (Sukidakara Shouganai)",		[0,1,0,0], "https://78.media.tumblr.com/c365618104bfd2df9b6a46c0f123bb37/tumblr_inline_p2vbe34UlH1vy5rsk_540.png"],
   [1, "Emotion",					[0,1,0,0], "https://78.media.tumblr.com/c365618104bfd2df9b6a46c0f123bb37/tumblr_inline_p2vbe34UlH1vy5rsk_540.png"],
   [1, "Love You Love You",				[0,1,0,0], "https://78.media.tumblr.com/c365618104bfd2df9b6a46c0f123bb37/tumblr_inline_p2vbe34UlH1vy5rsk_540.png"],
   [1, "Follow Me",					[0,1,0,0], "https://78.media.tumblr.com/b22ee330d46c015f56000e91b80e6a20/tumblr_inline_p2vck7QDxi1vy5rsk_540.png"],
   [1, "You and I",					[0,1,0,0], "https://78.media.tumblr.com/f3c48a03597ec3b4fdc39d9dc17cc582/tumblr_inline_p2vck9GLmb1vy5rsk_540.png"],
   [1, "そうすれば (Sou Sureba)",				[0,1,0,0], "https://78.media.tumblr.com/c365618104bfd2df9b6a46c0f123bb37/tumblr_inline_p2vbe34UlH1vy5rsk_540.png"],
   [1, "Blue Moon",					[0,1,0,0], "https://78.media.tumblr.com/c365618104bfd2df9b6a46c0f123bb37/tumblr_inline_p2vbe34UlH1vy5rsk_540.png"],
   [1, "Light On",					[0,1,0,0], "https://78.media.tumblr.com/c365618104bfd2df9b6a46c0f123bb37/tumblr_inline_p2vbe34UlH1vy5rsk_540.png"],
   [1, "Thank You Hate You",				[0,1,0,0], "https://78.media.tumblr.com/c365618104bfd2df9b6a46c0f123bb37/tumblr_inline_p2vbe34UlH1vy5rsk_540.png"],
   [1, "二人で (Futari de)",				[0,1,0,0], "https://78.media.tumblr.com/c365618104bfd2df9b6a46c0f123bb37/tumblr_inline_p2vbe34UlH1vy5rsk_540.png"],
   [1, "キミ色 (Kimi-iro)",				[0,1,0,0], "https://78.media.tumblr.com/c365618104bfd2df9b6a46c0f123bb37/tumblr_inline_p2vbe34UlH1vy5rsk_540.png"],

   [1, "Rollin'",					[1,0,0,0], "https://static.tumblr.com/z3asruv/e2qp2v9m6/rollin.png"],
   [1, "너는 내가 필요해 (You Need Me)",			[1,0,0,0], "https://static.tumblr.com/z3asruv/e2qp2v9m6/rollin.png"],
   [1, "Love Emotion",					[1,0,0,0], "https://static.tumblr.com/z3asruv/e2qp2v9m6/rollin.png"],
   [1, "Smile Mask",					[1,0,0,0], "https://static.tumblr.com/z3asruv/e2qp2v9m6/rollin.png"],
   [1, "내게 전화해 (Call Me)",				[1,0,0,0], "https://static.tumblr.com/z3asruv/e2qp2v9m6/rollin.png"],
   [1, "아이처럼 (Like A Child)",				[1,0,0,0], "https://static.tumblr.com/z3asruv/e2qp2v9m6/rollin.png"],
   
   [1, "You Are My Baby",           [0,0,1,0], "https://78.media.tumblr.com/972ffd0521f4c595fcde4e85c6cdc60a/tumblr_inline_p2vcz9d0VS1vy5rsk_540.png"],
    
   [1, "Bana Song",				[0,1,0,0], "https://78.media.tumblr.com/e1148292d8c1cbe22dede08bfc38e6f1/tumblr_inline_p6wqkoNd9F1vy5rsk_540.png"],
   
   [1, "Do You Remember",				[0,1,0,0], "https://78.media.tumblr.com/1eebc4d10f3f2d2cb56f664061db0a64/tumblr_inline_p2vck73XLO1vy5rsk_540.png"],
   [1, "Paradise",				[0,1,0,0], "https://78.media.tumblr.com/1eebc4d10f3f2d2cb56f664061db0a64/tumblr_inline_p2vck73XLO1vy5rsk_540.png"],
    
   [1, "会えるまで (Aeru Made)",				[0,1,0,0], "https://78.media.tumblr.com/837315d3b5bfbdaee7fd032846c77d2a/tumblr_inline_p6wqqlWLV71vy5rsk_540.png"],
   [1, "Mommy Mommy",				[0,1,0,0], "https://78.media.tumblr.com/837315d3b5bfbdaee7fd032846c77d2a/tumblr_inline_p6wqqlWLV71vy5rsk_540.png"],
   [1, "Lost",				[0,1,0,0], "https://78.media.tumblr.com/837315d3b5bfbdaee7fd032846c77d2a/tumblr_inline_p6wqqlWLV71vy5rsk_540.png"],
    
   [1, "I Need You",				[0,1,0,0], "https://78.media.tumblr.com/60c5709ee65ed0f24cccf14576fd108e/tumblr_inline_pazudnyZgx1vy5rsk_540.png"],
   [1, "迷路 (Maze)",				[0,1,0,0], "https://78.media.tumblr.com/60c5709ee65ed0f24cccf14576fd108e/tumblr_inline_pazudnyZgx1vy5rsk_540.png"],
   [1, "Humming Bird",				[0,1,0,0], "https://78.media.tumblr.com/60c5709ee65ed0f24cccf14576fd108e/tumblr_inline_pazudnyZgx1vy5rsk_540.png"],
   [1, "Who Are You",				[0,1,0,0], "https://78.media.tumblr.com/60c5709ee65ed0f24cccf14576fd108e/tumblr_inline_pazudnyZgx1vy5rsk_540.png"],
   [1, "Every Time",				[0,1,0,0], "https://78.media.tumblr.com/60c5709ee65ed0f24cccf14576fd108e/tumblr_inline_pazudnyZgx1vy5rsk_540.png"],

];	