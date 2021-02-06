// Generated by RPG Maker.
// Do not edit this file directly.
var $plugins =
[
{"name":"EasingPicture","status":false,"description":"ピクチャーの移動パターンを増やします。","parameters":{}},
{"name":"MoreCharacterFrames","status":true,"description":"キャラクターの3フレーム以上のアニメーションを可能にします。","parameters":{}},
{"name":"OnlineAvatar","status":true,"description":"Firebaseを使ってプレイヤーをオンライン同期します。","parameters":{"apiKey":"AIzaSyARuSLKWc7WAJT-PuEyLRo8NrlgiEDsSVc","authDomain":"purgo-339a5.firebaseapp.com","databaseURL":"https://purgo-339a5.firebaseio.com","avatarEvent":"200","syncSwitchStart":"600","syncSwitchEnd":"700","syncVariableStart":"362","syncVariableEnd":"550"}},
{"name":"smoothscroll","status":false,"description":"カメラの移動を滑らかにするプラグインです。","parameters":{}},
{"name":"Yami_8DIR","status":true,"description":"プレイヤーの8方向の移動が可能になります。","parameters":{}},
{"name":"AutoLoad","status":true,"description":"タイトル画面仕様変更プラグイン","parameters":{"効果音演奏":"false","タイトルスキップポリシー":"1","タイトルマップID":"0"}},
{"name":"TemplateEvent","status":true,"description":"テンプレートイベントプラグイン","parameters":{"TemplateMapId":"156","KeepEventId":"false","OverrideTarget":"{\"Image\":\"true\",\"Direction\":\"true\",\"Move\":\"true\",\"Priority\":\"true\",\"Trigger\":\"true\",\"Option\":\"true\"}","AutoOverride":"false","IntegrateNote":"0"}},
{"name":"EventReSpawn","status":true,"description":"イベント動的生成プラグイン","parameters":{"keepSelfSwitch":"false","tryRandomCount":"1000","CertainSpawnSwitch":"0"}},
{"name":"YEP_SaveEventLocations","status":true,"description":"マップに出入りする際でも、マップ上のイベントの位置を\n保存・維持させることができるようになります。","parameters":{}},
{"name":"TitleImageChange","status":true,"description":"タイトル画面変更プラグイン","parameters":{"進行度変数":"180","優先度変数":"0","タイトル1の進行度":"1","タイトル1の画像":"kuro","タイトル1のBGM":"1231","タイトル2の進行度":"2","タイトル2の画像":"!siroiheya","タイトル2のBGM":"band4","タイトル3の進行度":"3","タイトル3の画像":"hakoya","タイトル3のBGM":"moe","以降の進行度":"4","以降の画像":"last","以降のBGM":"ki"}},
{"name":"YEP_CoreEngine","status":true,"description":"Yanfly Engine Scriptsの大元となる機能です。\r\nRPGツクールMVのバグを修正したり、様々なカスタムを行います。","parameters":{"---スクリーン---":"","Screen Width":"816","Screen Height":"624","Scale Battlebacks":"true","Scale Title":"true","Open Console":"false","Reposition Battlers":"true","---ゴールド---":"","Gold Max":"99999999","Gold Font Size":"20","Gold Icon":"313","Gold Overlap":"a lotta","---アイテム---":"","Default Max":"99","Quantity Text Size":"20","---ステータス---":"","Max Level":"99","Actor MaxHP":"9999","Actor MaxMP":"9999","Actor Parameter":"999","Enemy MaxHP":"999999","Enemy MaxMP":"9999","Enemy Parameter":"999","---バトル---":"","Animation Rate":"4","Flash Target":"false","---フォント---":"","Chinese Font":"SimHei, Heiti TC, sans-serif","Korean Font":"Dotum, AppleGothic, sans-serif","Default Font":"GameFont, Verdana, Arial, Courier New","Font Size":"28","Text Align":"left","---ウィンドウ---":"","Digit Grouping":"true","Line Height":"36","Icon Width":"32","Icon Height":"32","Face Width":"144","Face Height":"144","Window Padding":"18","Text Padding":"6","Window Opacity":"192","Gauge Outline":"true","Gauge Height":"18","Menu TP Bar":"true","---ウィンドウカラー---":"","Color: Normal":"0","Color: System":"16","Color: Crisis":"17","Color: Death":"18","Color: Gauge Back":"19","Color: HP Gauge 1":"20","Color: HP Gauge 2":"21","Color: MP Gauge 1":"22","Color: MP Gauge 2":"23","Color: MP Cost":"23","Color: Power Up":"24","Color: Power Down":"25","Color: TP Gauge 1":"28","Color: TP Gauge 2":"29","Color: TP Cost Color":"29"}},
{"name":"YEP_SaveEventLocations","status":true,"description":"マップに出入りする際でも、マップ上のイベントの位置を\n保存・維持させることができるようになります。","parameters":{}},
{"name":"YEP_RegionRestrictions","status":true,"description":"v1.00 Use regions to block out Events and/or the player from\nbeing able to venture into those spots.","parameters":{"Player Restrict":"2","Event Restrict":"3","All Restrict":"1","Player Allow":"4","Event Allow":"5","All Allow":"6"}},
{"name":"YEP_MessageCore","status":true,"description":"メッセージの表示方法や機能をカスタマイズすることができます。","parameters":{"---一般---":"","Default Rows":"4","Default Width":"Graphics.boxWidth","Face Indent":"Window_Base._faceWidth + 24","Fast Forward":"Input.isPressed('pagedown')","Word Wrapping":"false","Description Wrap":"false","---フォント---":"","Font Name":"GameFont","Font Size":"24","Font Size Change":"12","Font Changed Max":"96","Font Changed Min":"12","---Name Box---":"","Name Box Buffer X":"-28","Name Box Buffer Y":"0","Name Box Padding":"this.standardPadding() * 4","Name Box Color":"0","Name Box Clear":"false","Name Box Added Text":"\\c[6]"}},
{"name":"Yami_SkipTitle","status":false,"description":"テストプレイ用にタイトルシーンを飛ばすことができます。","parameters":{}},
{"name":"YEP_EventChasePlayer","status":true,"description":"プレイヤーが近づいた際に、イベントがプレイヤーを追いかけたり\nプレイヤーから逃げるアクションを取ります","parameters":{"Sight Lock":"300","See Player":"true","Alert Timer":"120","Alert Balloon":"1","Alert Sound":"Attack1","Alert Common Event":"0"}},
{"name":"YED_WordWrap","status":true,"description":"文章の改行機能を提供します。長文を適切な位置で改行します。","parameters":{"Break Word":"false"}},
{"name":"SmartPath","status":true,"description":"イベントもしくはプレイヤーに、高度な経路探索を提供します。","parameters":{}},
{"name":"ScreenResolution","status":true,"description":"ゲームスクリーンの解像度を好きなように変更することができます","parameters":{"Screen Width":"1280","Screen Height":"720"}},
{"name":"No Autoshadow","status":true,"description":"ゲーム内で自動生成される影を非表示にします。","parameters":{}},
{"name":"CP_Star_Passability_Fix","status":true,"description":"★タイルに対して、4方向の通行指定が可能になります。","parameters":{}},
{"name":"OverpassTile","status":true,"description":"キャラクターが下をくぐり抜けられる橋の設定です。","parameters":{"Overpass Region ID":"255","Gateway Region ID":"254"}},
{"name":"SAN_AnalogMove","status":true,"description":"アナログムーブ ver1.33\r\n1ピクセル単位の移動 アナログスティック・タッチパッド対応","parameters":{"Valid":"OFF","Player":"OFF"}},
{"name":"KockaRespawnEvent","status":true,"description":"Allows adding timers for events to respawn","parameters":{}},
{"name":"TMBtnPicture","status":true,"description":"ピクチャをタップ（クリック）でコモンイベントを起動します。","parameters":{}},
{"name":"KMS_WaterMapEffect","status":true,"description":"[v1.1.0] マップに水中エフェクトを適用します。","parameters":{"Flicker image":"KMS_cloud","Wave image":"KMS_wave","Wave opacity":"2","Speed X":"0.02","Speed Y":"0.02","Auto tone change":"1"}},
{"name":"CharacterGraphicExtend","status":true,"description":"キャラクターグラフィック表示拡張プラグイン","parameters":{"イベント消去無効":"OFF"}},
{"name":"TMCharacterEx","status":true,"description":"イベントに表示位置補正、回転、拡大の機能を追加します。","parameters":{}},
{"name":"EST_Save_Map_Event","status":true,"description":"This plugin can make us save the map events so it won't be reloaded from database when entering new map.\r\n<EST_SAVE_MAP_EVENT>","parameters":{}},
{"name":"MessageWindowPopup","status":true,"description":"フキダシウィンドウプラグイン","parameters":{"フォントサイズ":"22","余白":"2","自動設定":"ON","フェイス倍率":"75","ウィンドウ連携":"ON","行間":"4","ウィンドウ透過":"OFF"}},
{"name":"MovieManager","status":true,"description":"動画管理プラグイン","parameters":{}},
{"name":"ThroughFailedToLoad","status":true,"description":"ロード失敗エラーのすり抜けプラグイン","parameters":{"テストプレー時無効":"OFF","Web版で無効":"false","無視種別":"3"}},
{"name":"TMAnimeLight","status":true,"description":"イベントにアニメーション付きの明かりを表示します。","parameters":{"range":"0.1","defaultZ":"4","frames":"30"}},
{"name":"PictureCallCommon","status":true,"description":"ピクチャのボタン化プラグイン","parameters":{"透明色を考慮":"OFF","ピクチャ番号の変数番号":"100","ポインタX座標の変数番号":"101","ポインタY座標の変数番号":"102","タッチ操作抑制":"OFF"}},
{"name":"RotatePictureEx","status":true,"description":"ピクチャを指定した角度とフレーム数で回転させます","parameters":{}},
{"name":"MOG_TreasurePopup","status":false,"description":"(v1.0) Apresenta o ícone e o nome do tesouro ganho.","parameters":{"Duration":"15","Fade Speed":"5","X - Axis":"0","Y - Axis":"-32","Random Movement":"false","X Speed":"0","Y Speed":"1","Font Size":"16","Icon Scale":"0.60","Treasure Space Y-Axis":"20","Zoom Effect":"false","Gold Popup":"true","Gold Icon Index":"163"}},
{"name":"idou","status":true,"description":"","parameters":{}},
{"name":"MousePointerExtend","status":true,"description":"マウスポインタ拡張プラグイン","parameters":{"形状タイプ1":"url1","スイッチ1":"31","形状タイプ2":"url2","スイッチ2":"38","形状タイプ3":"auto","スイッチ3":"0","形状タイプ4":"auto","スイッチ4":"0","形状タイプ5":"auto","スイッチ5":"0","デフォルト形状タイプ":"auto","独自画像1":"knife_CE42.png","独自画像2":"match_CE80.png","独自画像3":"","独自画像4":"","独自画像5":"","キー入力で消去":"ON","ポインタファイルパス":""}},
{"name":"TriggerExtension","status":true,"description":"タッチでイベントを実行するなど、イベントページのトリガーを拡張します","parameters":{}},
{"name":"HIME_SelfVariables","status":true,"description":"v1.4 - Allows you to create and manage self-variables for all\r\nof your events!","parameters":{}},
{"name":"TkoolMV_PluginCommandBook","status":true,"description":"プラグインコマンド集","parameters":{"制御文字の拡張":"はい","スクリプトに制御文字適用":"いいえ"}},
{"name":"CustomizeMaxSaveFile","status":true,"description":"最大セーブファイル数変更プラグイン","parameters":{"セーブファイル数":"1"}},
{"name":"SaveFileDrawFace","status":true,"description":"セーブファイルのフェイス表示プラグイン","parameters":{"表示行数":"1","マップ名表示":"OFF","ゲームタイトル非表示":"ON"}},
{"name":"TerraxLighting","status":true,"description":"v1.4.0 Creates an extra layer that darkens a map and adds lightsources!","parameters":{"Player radius":"500","Reset Lights":"No","Save DaynightHours":"0","Save DaynightMinutes":"0","Save DaynightSeconds":"0","Flashlight offset":"0","Screensize X":"1280","Screensize Y":"720","Kill Switch":"No"}},
{"name":"Foreground","status":true,"description":"マップに合わせてスクロールする近景の設定","parameters":{}},
{"name":"ParallelPreload","status":false,"description":"並列プリロードプラグイン","parameters":{"素材一覧データ":"MV_Project","ロード間隔":"0","ログ出力":"OFF"}},
{"name":"DTextPicture","status":true,"description":"動的文字列ピクチャ生成プラグイン","parameters":{"itemIconSwitchId":"0","lineSpacingVariableId":"0","frameWindowSkin":"","frameWindowPadding":"18","padCharacter":"0","prefixText":""}},
{"name":"111_InputForm","status":true,"description":"フォーム作って文字入力（修正版）","parameters":{}},
{"name":"TMNamePop","status":true,"description":"イベントの頭上に文字列を表示する機能を追加します。","parameters":{"backOpacity":"255","fontSize":"20","fontOutlineWidth":"4","fontOutlineColor":"rgba(0, 0, 0, 0.5)","width":"300","useRoundRect":"0","roundRectRadius":"6"}},
{"name":"TMNamePop2","status":true,"description":"イベントの頭上に文字列を表示する機能を追加します。","parameters":{"backOpacity":"0","fontSize":"18","fontOutlineWidth":"2","fontOutlineColor":"rgba(100, 0, 200, 0.5)","width":"160","useRoundRect":"0","roundRectRadius":"6"}},
{"name":"TMCommonEventKey","status":true,"description":"任意のキーにコモンイベントを設定し、マップシーンで\nショートカットキーとして利用できるようにします。","parameters":{"commonKey0":"100","commonKey1":"180","commonKey2":"181","commonKey3":"182","commonKey4":"183","commonKey5":"184","commonKey6":"185","commonKey7":"186","commonKey8":"187","commonKey9":"171","commonKeyA":"160","commonKeyB":"0","commonKeyC":"198","commonKeyD":"162","commonKeyE":"0","commonKeyF":"0","commonKeyG":"0","commonKeyH":"0","commonKeyI":"202","commonKeyJ":"0","commonKeyK":"0","commonKeyL":"0","commonKeyM":"1","commonKeyN":"0","commonKeyO":"157","commonKeyP":"158","commonKeyQ":"0","commonKeyR":"0","commonKeyS":"161","commonKeyT":"0","commonKeyU":"0","commonKeyV":"0","commonKeyW":"159","commonKeyX":"0","commonKeyY":"0","commonKeyZ":"0","commonKeyF1":"0","commonKeyF2":"0","commonKeyF3":"0","commonKeyF4":"0","commonKeyF5":"0","commonKeyF6":"0","commonKeyF7":"0","commonKeyF8":"0","commonKeyF9":"0","commonKeyF10":"0","commonKeyF11":"0","commonKeyF12":"0","freeMove":"true"}},
{"name":"OggOnly","status":true,"description":"音声ファイルの再生にoggファイルのみを使用します。","parameters":{"deleteM4a":"false"}},
{"name":"MemoryCheatingBlocker","status":false,"description":"メモリ改竄チートを予防するプラグイン","parameters":{"----基本的な設定----":"","不正警告イベント":"100"}},
{"name":"OperateDearFollowers","status":true,"description":"フォロワーを操作するプラグインです。","parameters":{"----基本的な設定----":"","操作用スイッチ番号":"247"}},
{"name":"HorizontalScrollingMove","status":true,"description":"横スクロール移動プラグイン","parameters":{"有効スイッチ番号":"0","プレイヤー上向き許容":"false","イベント上向き許容":"true","画像のみ向き制限":"true"}},
{"name":"PD_DelayTitle","status":true,"description":"タイトル画面の各画像の表示にディレイとフェードイン機能を追加します。","parameters":{"Delay BG1":"0","Fade BG1":"300","Delay BG2":"60","Fade BG2":"60","Delay Title":"300","Fade Title":"250","Delay Command":"300","Pass To Decide":"0"}},
{"name":"DataCacheBlocker","status":true,"description":"キャッシュを阻止します。（dataフォルダのみ）","parameters":{}},
{"name":"AutoTranslation","status":false,"description":"自動翻訳プラグイン","parameters":{"ToLanguage":"[\"ja\",\"en\",\"zh-Hans\",\"ko\",\"ru\"]","TranslateDatabase":"false","TranslateMessage":"true","RealtimeTranslate":"true","TranslationSwitchId":"397","LanguageVariableId":"302","InvertTranslationSwitch":"false","SubscriptionKey":"","OutLog":"TEST"}},
{"name":"TMEventClick","status":true,"description":"イベントをクリックして起動、ドラッグで移動させる機能を\n追加します。","parameters":{"dropStart":"false","canMultipleDrop":"false","lockTurnEnabled":"false","noDropRegions":""}},
{"name":"AudioSource","status":true,"description":"音源と聞き手の位置関係に応じて自動的に音量・位相を調節します。","parameters":{"listener":"screen","decay":"85","pan":"10","cutoff":"0"}},
{"name":"hit","status":true,"description":"This plugin can add size to event so it can become large event. also add extra trigger coordinate.\r\n<EST_EVENT_SIZE_AND_TRIGGERS>","parameters":{}},
{"name":"KNH_CharacterShadow","status":true,"description":"キャラクターに影をつけるプラグイン","parameters":{"影画像":"Shadow2"}},
{"name":"CustomizeConfigItem","status":true,"description":"オプション任意項目作成プラグイン","parameters":{"数値項目":"","文字項目":"","スイッチ項目":"","音量項目":""}},
{"name":"MadeWithMv","status":false,"description":"メイン画面へ進む前に、\"Made with MV\"のスプラッシュ画面もしくはカスタマイズされたスプラッシュ画面を表示します。","parameters":{"Show Made With MV":"true","Made with MV Image":"MadeWithMv","Show Custom Splash":"false","Custom Image":"","Fade Out Time":"","Fade In Time":"","Wait Time":"","Sound Effect":""}},
{"name":"SlotMachine","status":true,"description":"Slot Machine scene","parameters":{"Variable ID":"162","Help Text":"カーソルキーの上でベット、カーソルキーの下でスタート","Won Text":"おめでとうございます！Win Coin枚獲得です！","Lost Text":"残念でした。","Replay Text":"もう一度やりますか？","Coin Full Text":"コイン枚数が制限に達しました。","Bet Text":"ベット","Spin Text":"スピン","Yes Text":"はい","No Text":"いいえ"}},
{"name":"-VISUAL","status":false,"description":"","parameters":{}},
{"name":"------------------------","status":false,"description":"----------------------------------------------------------------------------------","parameters":{}},
{"name":"MOG_AnimatedText","status":true,"description":"(v1.3) Apresenta multiplos textos animados.","parameters":{"Letter Space X-Axis":"0","Letter Space Y-Axis":"0"}},
{"name":"MOG_CharacterMotion","status":true,"description":"(v1.1) Sistema de animações dos sprites dos personagens.","parameters":{}},
{"name":"MOG_CharParticles","status":false,"description":"(v1.1) Adiciona o sistema de partículas nos characters.","parameters":{}},
{"name":"MOG_CharShatterEffect","status":true,"description":"(v1.1) Cria o efeito de shatter nos sprites dos characters.","parameters":{}},
{"name":"MOG_EventIndicators","status":true,"description":"(v1.0) Apresenta indicadores animados acima do evento.","parameters":{"Default Font Size":"16","Default X - Axis":"0","Default Y - Axis":"0"}},
{"name":"MOG_EventText","status":true,"description":"(v1.2) Adiciona um texto em cima do evento.","parameters":{"X axis":"0","Y axis":"0","Font Size":"18"}},
{"name":"MOG_PictureEffects","status":true,"description":"(v1.3) Adiciona novas funções no sistema de mostrar imagens.","parameters":{}},
{"name":"MOG_PictureGallery","status":false,"description":"(v1.5) O plugin adiciona uma cena de galeria de imagens.","parameters":{"Number of Pictures":"4","Command Menu":"true","Command Word":"Picture Gallery","Completion Word":"Completion","Number Word":"Pic","Thumbnails For Line":"3","Thumbnail X-Axis":"23","Thumbnail Y-Axis":"25","Number X-Axis":"0","Number Y-Axis":"-32","Info Visible":"true","Info X-Axis":"0","Info Y-Axis":"0","Info Duration":"90","Double Click Speed":"10","File Directory":"img/pictures/","File Name":"Pic_","Fit Screen Key":"pagedown","Set Wallpaper":"true","Set Wallpaper Key":"pageup"}},
{"name":"MOG_PixiFilters","status":true,"description":"(v1.5) Ativa alguns filtros gráficos padrões do Rpg Maker MV.","parameters":{}},
{"name":"MOG_TreasurePopup","status":true,"description":"(v1.0) Apresenta o ícone e o nome do tesouro ganho.","parameters":{"Duration":"15","Fade Speed":"5","X - Axis":"0","Y - Axis":"-32","Random Movement":"false","X Speed":"0","Y Speed":"1","Font Size":"16","Icon Scale":"0","Treasure Space Y-Axis":"20","Zoom Effect":"false","Gold Popup":"true","Gold Icon Index":"0"}},
{"name":"MOG_Weather_EX","status":true,"description":"(v2.0) Adiciona novos efeitos de climas.","parameters":{}},
{"name":"YEP_EventProxActivate","status":true,"description":"v1.01 Allows events to activate by being in range of them\ninstead of needing to be exactly next to or on top of them.","parameters":{}},
{"name":"GALV_VisualNovelChoices","status":false,"description":"(v.1.6) Changes how the \"Choice\" message boxes display to appear more like visual novels.","parameters":{"Command Width":"700","Command Height":"48","Always Middle":"true","Message Gap":"0","Disabled Button":"3"}}
];
