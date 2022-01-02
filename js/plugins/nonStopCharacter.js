﻿//=============================================================================
// マップ外イベントノンストッププラグイン
// nonStopCharacter.js
// Copyright (c) 2018 村人Ａ
//=============================================================================

/*:ja
 * @plugindesc 画面外に出たマップイベントの動きを停止しないようにするプラグインです。
 * @author 村人A
 *
 * @help
 * 画面外に出たマップイベントの動きを停止しないようにするプラグインです。
 *
 */
(function() {
	Game_CharacterBase.prototype.isNearTheScreen = function() {
		return true;
	};
})();