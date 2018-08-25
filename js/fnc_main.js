// 2008/7/3 Scripted by K-Factory@migiwa
// 2008/7/19 Modified by  K-Factory@migiwa
// 2008/7/25 Modified by  K-Factory@migiwa
// 2009/1/27 Modified by  K-Factory@migiwa
// 2009/9/8 Modified by  K-Factory@migiwa
// 2013/1/22 Modified by Anonymous
// added undo function (requires minor changes in index.html and fnc_data.js)

// å®Ÿè¡Œã‚³ãƒ¼ãƒ‰ã§ã™ã€‚
// ä¿®æ­£ã™ã‚‹å ´åˆã¯æ°—ã‚’ã¤ã‘ã¦ãã ã•ã„ã€‚
var ary_TempData   = new Array();
var ary_SortData   = new Array();
var ary_ParentData = new Array();
var ary_EqualData  = new Array();
var int_LeftList,  int_LeftID;
var int_RightList, int_RightID;
var ary_RecordData = new Array();
var int_RecordID = 0;

var csort = new Array();
var csort2 = new Array();
var csort3 = new Array();
var csort4 = new Array();
var csort5 = new Array();
var csort6 = new Array();

var int_Count = 0;
var int_Total = 0;
var int_Completed = 0;
var int_Status = 0;
var sID = 'GaGprog';
var iGM = 100;

var back_ary_SortData = new Array();
var back_ary_EqualData = new Array();
var back_ary_RecordData = new Array();
var back_int_RecordID = 0;
//var back_ary_TempData = new Array();
var back_ary_ParentData = new Array();

var back_int_Completed = 0;
var back_int_Total = 0;
var back_int_RightList = int_RightList;
var back_int_RightID = int_RightID;
var back_int_LeftList = int_LeftList;
var back_int_LeftID = int_LeftID;

// *****************************************************************************
// * StartUp
// * <BODY>ã‚¿ã‚°ã®èª­ã¿è¾¼ã¿çµ‚äº†æ™‚ã«å®Ÿè¡Œã€‚
function startup() {
   var tbl_Select = gID('optTable');
   var tbl_body_Select = cE('tbody');
   tbl_Select.appendChild(tbl_body_Select);

   // ã‚¿ã‚¤ãƒˆãƒ«ã‹ã‚‰é¸æŠžç”¨ãƒã‚§ãƒƒã‚¯ãƒœãƒƒã‚¯ã‚¹ã«å¤‰æ›
   for (i=0; i<ary_TitleData.length; i++) {
      // Row[i]
      if ((i % int_Colspan) == 0) {
         var new_row = tbl_body_Select.insertRow(tbl_body_Select.rows.length);
         new_row.id = 'optSelRow' + i;
      }
      // Col[0]
      var new_cell = new_row.insertCell(new_row.childNodes.length);
      var new_CheckBox = cE('input');
      new_CheckBox.setAttribute('type', 'checkbox', 0);
      new_CheckBox.setAttribute('checked', 'true', 0);
      new_CheckBox.value = ary_TitleData[i];
      new_CheckBox.title = ary_TitleData[i];
      new_CheckBox.id = 'optSelect' + i;
      new_cell.appendChild(new_CheckBox);

      var new_span = cE('span');
      new_span.appendChild(cT(ary_TitleData[i]));
      new_span.title = ary_TitleData[i];
      new_span.id = i;
      sC(new_span, 'cbox');
      new_span.onclick = function() {chgFlag(this.id);}
      new_cell.appendChild(new_span);
   }

   gID('optImage').disabled = false;

   var tbl_foot_Select = cE('tfoot');
   tbl_Select.appendChild(tbl_foot_Select);

   // Row[0]
   var new_row = tbl_foot_Select.insertRow(tbl_foot_Select.rows.length);
   sC(new_row, "opt_foot");

   var new_cell = new_row.insertCell(new_row.childNodes.length);
   new_cell.setAttribute('colspan', int_Colspan, 0);
   var new_CheckBox = cE('input');
   new_CheckBox.setAttribute('type', 'checkbox', 0);
   new_CheckBox.setAttribute('checked', 'true', 0);
   new_CheckBox.value = "All";
   new_CheckBox.title = "All boxes are checked/unchecked at the same time.";
   new_CheckBox.id = 'optSelect_all';
   new_CheckBox.onclick = function() {chgAll();}
   new_cell.appendChild(new_CheckBox);

   var new_span = cE('span');
   new_span.appendChild(cT("Select All"));
   new_cell.appendChild(new_span);


   if (!bln_ProgessBar) fCG(sID, iGM, iGM);
}

function chgAll() {
   for (i=0; i<ary_TitleData.length; i++) {
      gID('optSelect' + i).checked = gID('optSelect_all').checked;
   }
}

// *****************************************************************************
// * chgFlag
// * ã‚¿ã‚¤ãƒˆãƒ«åãŒã‚¯ãƒªãƒƒã‚¯ã•ã‚Œã¦ã‚‚ãƒã‚§ãƒƒã‚¯ãƒœãƒƒã‚¯ã‚¹ã‚’å¤‰æ›´ã™ã‚‹ã€‚
function chgFlag(int_id) {
   var obj_Check = gID('optSelect' + int_id);
   if (!obj_Check.disabled) {
      obj_Check.checked = (obj_Check.checked) ? false :true;
   }
}

// *****************************************************************************
// * Initialize
// * ä½¿ç”¨ã™ã‚‹é…åˆ—ã‚„ã€ã‚«ã‚¦ãƒ³ã‚¿ãƒ¼ã‚’åˆæœŸåŒ–ã™ã‚‹
// * åˆå›žã®ã¿å‹•ä½œã€‚
function init(){
   int_Total = 0;
   int_RecordID = 0;

   // ã‚½ãƒ¼ãƒˆå¯¾è±¡ã®ã¿ã‚’æŠ½å‡º
   for (i=0; i<ary_CharacterData.length; i++) {
      for (j=0; j<ary_TitleData.length; j++) {
         if (gID('optSelect' + j).checked && (ary_CharacterData[i][2][j] == 1)) {
            ary_TempData[int_Total] = ary_CharacterData[i];
            int_Total++;
            break;
         }
      }
   }

   if (int_Total == 0) {
      alert("Please make a selection.");
      return;
   } else {
      for (i=0; i<ary_TitleData.length; i++) {
         gID('optSelect' + i).disabled = true;
         gID('optSelect' + i).style.dsiplay = 'none';
      }
      gID('optImage').disabled = true;
   }

   int_Total = 0;

   // ã‚½ãƒ¼ãƒˆé…åˆ—ã«IDã‚’æ ¼ç´ã™ã‚‹
   ary_SortData[0] = new Array();
   for (i=0; i<ary_TempData.length; i++) {
      ary_SortData[0][i] = i;

      // ä¿å­˜ç”¨é…åˆ—
      ary_RecordData[i] = 0;
   }

   var int_Pointer = 1;
   for (i=0; i<ary_SortData.length; i++) {
      // #ã‚½ãƒ¼ãƒˆã¯åŸºæœ¬ãƒ­ã‚¸ãƒƒã‚¯ã‚’æµç”¨
      // è¦ç´ æ•°ãŒï¼’ä»¥ä¸Šãªã‚‰ï¼’åˆ†å‰²ã—ã€
      // åˆ†å‰²ã•ã‚ŒãŸé…åˆ—ã‚’ary_SortDataã®æœ€å¾Œã«åŠ ãˆã‚‹
      if (ary_SortData[i].length >= 2) {
         var int_Marker = Math.ceil(ary_SortData[i].length / 2);
         ary_SortData[int_Pointer] = ary_SortData[i].slice(0, int_Marker);
         int_Total += ary_SortData[int_Pointer].length;
         ary_ParentData[int_Pointer] = i;
         int_Pointer++;

         ary_SortData[int_Pointer] = ary_SortData[i].slice(int_Marker, ary_SortData[i].length);
         int_Total += ary_SortData[int_Pointer].length;
         ary_ParentData[int_Pointer] = i;
         int_Pointer++;
      }
   }

   // å¼•ãåˆ†ã‘ã®çµæžœã‚’ä¿å­˜ã™ã‚‹ãƒªã‚¹ãƒˆ
   // ã‚­ãƒ¼ï¼šãƒªãƒ³ã‚¯å§‹ç‚¹ã®å€¤
   // å€¤ ï¼šãƒªãƒ³ã‚¯çµ‚ç‚¹ã®å€¤
   for (i=0; i<=ary_TempData.length; i++) {
      ary_EqualData[i] = -1;
   }

   int_LeftList  = ary_SortData.length - 2;
   int_RightList = ary_SortData.length - 1;
   int_LeftID    = 0;
   int_RightID   = 0;
   int_Count     = 1;
   int_Completed = 0;

   // ã‚¤ãƒ‹ã‚·ãƒ£ãƒ©ã‚¤ã‚ºãŒçµ‚äº†ã—ãŸã®ã§ã‚¹ãƒ†ãƒ¼ã‚¿ã‚¹ã‚’1ã«å¤‰æ›´
   int_Status    = 1;

   gID('fldMiddleT').innerHTML = str_CenterT;
   gID('fldMiddleB').innerHTML = str_CenterB;

   fnc_ShowData();
}

// *****************************************************************************
// * Image Initialize
// * ãƒ¡ãƒ³ãƒ†ãƒŠãƒ³ã‚¹ç”¨ãƒªã‚¹ãƒˆ
function imginit() {
   var int_ImgCount = 0;
   var int_ImgValue = 0;
   var int_ImgMax = 0;

   var tbl_Image_body = gID('imgTable');

   for (i=0; i<ary_CharacterData.length; i++) {
      new_row = tbl_Image_body.insertRow(tbl_Image_body.rows.length);

      // Col[0]
      new_cell = new_row.insertCell(new_row.childNodes.length);
      new_cell.appendChild(cT(i));
      sC(new_cell, 'resTableL');

      // Col[1]
      new_cell = new_row.insertCell(new_row.childNodes.length);
      new_cell.appendChild(cT(ary_CharacterData[i][1]));
      sC(new_cell, 'resTableR');

      // Col[2]
      new_cell = new_row.insertCell(new_row.childNodes.length);
      for (j=0; j<ary_TitleData.length; j++) {
         if (ary_CharacterData[i][2][j] == 1) {
         new_cell.appendChild(cT(ary_TitleData[j]));
         new_cell.appendChild(cE('br'));
         }
      }
      sC(new_cell, 'resTableR');

      // Col[3]
      new_cell = new_row.insertCell(new_row.childNodes.length);
      sC(new_cell, 'resTableR');

      if (ary_CharacterData[i][3].length > 0) {
         for (j=3; j<ary_CharacterData[i].length;j++) {
            var new_img = cE('img');
            new_img.src = str_ImgPath + ary_CharacterData[i][j];
            new_cell.appendChild(new_img);
            int_ImgCount++;
         }
         int_ImgValue++;
      }
      int_ImgMax++;
   }

   gID("lbl_imgCount").innerHTML = int_ImgCount;
   gID("lbl_imgParcent").innerHTML = Math.floor((int_ImgValue / int_ImgMax) * 100);
   gID("lbl_imgValue").innerHTML = int_ImgValue;
   gID("lbl_imgMax").innerHTML = int_ImgMax;
}

// Undo previous choice (

function fnc_Undo() {
   if (int_Status == 0) {
      fnc_Sort(0);
	  return;
   }
   
   if(int_Count > 2 && int_Completed != back_int_Completed){
   
   	//ary_TempData = back_ary_TempData.slice(0);
	ary_SortData = back_ary_SortData.slice(0);
	ary_RecordData = back_ary_RecordData.slice(0);
	int_RecordID = back_int_RecordID;
	ary_EqualData = back_ary_EqualData.slice(0);
	ary_ParentData = back_ary_ParentData.slice(0);
	
	int_Completed = back_int_Completed;
	int_Count = int_Count - 2;
	int_Total = back_int_Total;
	int_RightList = back_int_RightList;
	int_RightID = back_int_RightID;
	int_LeftList = back_int_LeftList;
	int_LeftID = back_int_LeftID;
	int_Status = (int_LeftList < 0) ? 2 : 1;

   fnc_ShowData();
   }
}

/* Debugging purposes (simulates choosing Tie until completion)

function fnc_TieRest(){
	while(int_Status < 2){
		fnc_Sort(0);
	}
}
*/

// *****************************************************************************
// * Sort (-1:å·¦å´, 0:å¼•ãåˆ†ã‘, 1:å³å´)

function fnc_Sort(int_SelectID) {

	//back_ary_TempData = ary_TempData.slice(0);	
	back_ary_SortData = ary_SortData.slice(0);
	back_ary_RecordData = ary_RecordData.slice(0);
	back_int_RecordID = int_RecordID;
	back_ary_EqualData = ary_EqualData.slice(0);
	back_ary_ParentData = ary_ParentData.slice(0);
	
	back_int_Completed = int_Completed;
	back_int_Total = int_Total;
	back_int_RightList = int_RightList;
	back_int_RightID = int_RightID;
	back_int_LeftList = int_LeftList;
	back_int_LeftID = int_LeftID;
	
   // ã‚¹ãƒ†ãƒ¼ã‚¿ã‚¹ã«ã‚ˆã‚Šå‡¦ç†ã‚’åˆ†å²
   switch (int_Status) {
      case 0:
         // åˆå›žã‚¯ãƒªãƒƒã‚¯æ™‚ã€ã‚½ãƒ¼ãƒˆæƒ…å ±ã‚’åˆæœŸåŒ–ã™ã‚‹ã€‚
         init();
      case 2:
         // ã‚½ãƒ¼ãƒˆãŒçµ‚äº†ã—ã¦ã„ãŸå ´åˆã€ã‚½ãƒ¼ãƒˆå‡¦ç†ã¯è¡Œã‚ãªã„ã€‚
         return;
      default:
   }

   // ary_RecordDataã«ä¿å­˜
   // å·¦å´Count
   if (int_SelectID != 1) {
      fnc_CountUp(0);
      while (ary_EqualData[ary_RecordData[int_RecordID-1]] != -1) {
         fnc_CountUp(0);
      }
   }

   // å¼•ãåˆ†ã‘ã®å ´åˆã®ã¿
   if (int_SelectID == 0) {
      ary_EqualData[ary_RecordData[int_RecordID-1]] = ary_SortData[int_RightList][int_RightID];
   }

   // å³å´Count
   if (int_SelectID != -1) {
      fnc_CountUp(1);
      while (ary_EqualData[ary_RecordData[int_RecordID-1]] != -1) {
         fnc_CountUp(1);
      }
   }

   // ç‰‡æ–¹ã®ãƒªã‚¹ãƒˆã‚’èµ°æŸ»ã—çµ‚ãˆãŸå¾Œã®å‡¦ç†
   if (int_LeftID < ary_SortData[int_LeftList].length && int_RightID == ary_SortData[int_RightList].length) {
      // ãƒªã‚¹ãƒˆint_RightListãŒèµ°æŸ»æ¸ˆ - ãƒªã‚¹ãƒˆint_LeftListã®æ®‹ã‚Šã‚’ã‚³ãƒ”ãƒ¼
      while (int_LeftID < ary_SortData[int_LeftList].length){
         fnc_CountUp(0);
      }
   } else if (int_LeftID == ary_SortData[int_LeftList].length && int_RightID < ary_SortData[int_RightList].length) {
      // ãƒªã‚¹ãƒˆint_LeftListãŒèµ°æŸ»æ¸ˆ - ãƒªã‚¹ãƒˆint_RightListã®æ®‹ã‚Šã‚’ã‚³ãƒ”ãƒ¼
      while (int_RightID < ary_SortData[int_RightList].length){
         fnc_CountUp(1);
      }
   }

   //ä¸¡æ–¹ã®ãƒªã‚¹ãƒˆã®æœ€å¾Œã«åˆ°é”ã—ãŸå ´åˆã¯
   //è¦ªãƒªã‚¹ãƒˆã‚’æ›´æ–°ã™ã‚‹
   if (int_LeftID == ary_SortData[int_LeftList].length && int_RightID == ary_SortData[int_RightList].length) {
      for (i=0; i<ary_SortData[int_LeftList].length + ary_SortData[int_RightList].length; i++) {
         ary_SortData[ary_ParentData[int_LeftList]][i] = ary_RecordData[i];
      }

      ary_SortData.pop();
      ary_SortData.pop();
      int_LeftList  = int_LeftList - 2;
      int_RightList = int_RightList - 2;
      int_LeftID    = 0;
      int_RightID   = 0;

      //æ–°ã—ã„æ¯”è¼ƒã‚’è¡Œã†å‰ã«ary_RecordDataã‚’åˆæœŸåŒ–
      if (int_LeftID == 0 && int_RightID == 0) {
         for (i=0; i<ary_TempData.length; i++) {
            ary_RecordData[i] = 0;
         }
         int_RecordID = 0;
      }
   }

   // çµ‚äº†ãƒã‚§ãƒƒã‚¯
   int_Status = (int_LeftList < 0) ? 2 : 1;

   fnc_ShowData();
}

// *****************************************************************************
// * CountUp(0:å·¦å´ 1:å³å´)
// * é¸æŠžã•ã‚ŒãŸæ–¹ã‚’ã‚«ã‚¦ãƒ³ãƒˆã‚¢ãƒƒãƒ—ã™ã‚‹ã€‚
function fnc_CountUp(int_Select) {
   ary_RecordData[int_RecordID] = ary_SortData[((int_Select == 0) ? int_LeftList : int_RightList)][((int_Select == 0) ? int_LeftID : int_RightID)];

   if (int_Select == 0) {
      int_LeftID++;
   } else {
      int_RightID++;
   }

   int_RecordID++;
   int_Completed++;
}

// *****************************************************************************
// * ShowData
// * é€²æ—çŽ‡ã¨åå‰ã‚’è¡¨ç¤ºã™ã‚‹ã€‚
function fnc_ShowData() {
	
	
	
   gID("lblCount").innerHTML = int_Count;
   gID("lblProgress").innerHTML = Math.floor(int_Completed * 100 / int_Total);
   if (!bln_ProgessBar) eGR(sID, Math.floor(int_Completed * 100 / int_Total));

   if (int_Status == 2) {
      // åˆ¤å®šãŒçµ‚äº†ã—ã¦ã„ãŸå ´åˆã€çµæžœè¡¨ç¤ºã€‚
      var int_Result = 1;

      var tbl_Result = cE('table');
      tbl_Result.id = 'resTable';

      var tbl_head_Result = cE('thead');
      tbl_Result.appendChild(tbl_head_Result);

      new_row = tbl_head_Result.insertRow(tbl_head_Result.rows.length);

      // Col[0]
      new_cell = new_row.insertCell(new_row.childNodes.length);
      sC(new_cell, 'resTableH');
      new_cell.appendChild(cT('Order'));
      // Col[1]
      new_cell = new_row.insertCell(new_row.childNodes.length);
      sC(new_cell, 'resTableH');
      new_cell.appendChild(cT('Name'));

      var tbl_body_Result = cE('tbody');
      tbl_Result.appendChild(tbl_body_Result);

      var int_Same = 1;

      for (i=0; i<ary_TempData.length; i++) {
         new_row = tbl_body_Result.insertRow(tbl_body_Result.rows.length);

         // Col[0]
         new_cell = new_row.insertCell(new_row.childNodes.length);
         sC(new_cell, 'resTableL');
         new_cell.appendChild(cT(int_Result));
		 
		 csort2[i] = int_Result; // v2a
		 
         // Col[1]
         new_cell = new_row.insertCell(new_row.childNodes.length);
         sC(new_cell, 'resTableR');

         var bln_imgFlag = false;
         if ((int_ResultImg != 0) && (i < int_ResultRank)) {
            var new_img = cE('img');
            var obj_TempData = ary_TempData[ary_SortData[0][i]];

            if (obj_TempData[3].length > 0) {
               new_img.src = str_ImgPath + obj_TempData[Math.floor(Math.random() * (obj_TempData.length -3)) + 3];
               new_cell.appendChild(new_img);
               new_cell.appendChild(cE('br'));
               bln_imgFlag = true;
            }
         }

         if ((int_ResultImg == 2) || (!bln_imgFlag)) {
            new_cell.appendChild(cT(ary_TempData[ary_SortData[0][i]][1]));
			csort4[i] = ary_TempData[ary_SortData[0][i]][1]; // v2a
			csort6[i] = ary_TempData[ary_SortData[0][i]][1]; // v2a
         }

         if (i < ary_TempData.length - 1) {
            if (bln_ResultMode == 0) {
               if (ary_EqualData[ary_SortData[0][i]] == ary_SortData[0][i + 1]) {
                  int_Result++;
               }
            } else {
               if (ary_EqualData[ary_SortData[0][i]] == ary_SortData[0][i + 1]) {
                  int_Same++;
               } else {
                  int_Result += int_Same;
                  int_Same = 1;
               }
            }
         }
      }
      var obj_SelectItem = gID("resultField");
      obj_SelectItem.innerHTML = "";
      obj_SelectItem.appendChild(tbl_Result);

      if (bln_ResultStyle == 1) {
         gID("mainTable").style.display = 'none';
      }
	  if (bln_ResultStyle == 0) {
         gID("ranTable").style.display = 'inline';
      } // v2a
	  
	  // v2a start
	  
	  for (i=0; i<10; i++) 
		{
		if(csort4[i] == undefined)
			{
			break;
			}
		else
			{
			csort +=  csort2[i];
			csort += 'ä½ï¼š ';
			csort4[i] = csort4[i].replace(/ãƒ»(.*)/g, "");
			csort +=  csort4[i];
			csort += 'ã€€';
			}  
		}
			
		for (i=0; i<130; i++) 
		{
		if(csort4[i] == undefined)
			{
			break;
			}
		else
			{
			csort5 +=  csort2[i];
			csort5 += '. ';
			csort5 +=  csort6[i];
			csort5 += '<br>';
			}
		}
		
	  // v2a end	

   } else {
      // åˆ¤å®šãŒçµ‚äº†ã—ã¦ã„ãªã„å ´åˆã€é¸æŠžè‚¢ã‚’æ›´æ–°ã€‚
      for (i=0; i<2; i++) {
         var obj_SelectItem = gID((i == 0) ? "fldLeft" : "fldRight");
         var obj_TempData = ary_TempData[ary_SortData[(i == 0)  ? int_LeftList : int_RightList][(i == 0)  ? int_LeftID : int_RightID]];
         if ((obj_TempData[3].length > 0) && gID('optImage').checked) {
            var obj_Img = cE("img");
             var obj_Item = cE("span");
            obj_Img.src = str_ImgPath + obj_TempData[Math.floor(Math.random() * (obj_TempData.length - 3)) + 3];
            obj_Img.title = obj_TempData[1];
             obj_Item.appendChild(obj_Img);
             obj_Item.appendChild(cE('br'));
             obj_Item.appendChild(cT(obj_TempData[1]));
         } else {
            var obj_Item = cE("span");
            obj_Item.appendChild(cT(obj_TempData[1]));
         }
         obj_Item.title = obj_TempData[1];
         obj_SelectItem.replaceChild(obj_Item, obj_SelectItem.firstChild);
      }

      int_Count++;
   }
}

function fnc_CC(sID, sClass) {

   sC(gID(sID), sClass);
}