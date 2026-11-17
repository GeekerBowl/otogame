/*! ©SEGA */
'use strict';
! function(i) {
	var s = {};

	function a(t) {
		if (s[t]) return s[t].exports;
		var d = s[t] = {
			exports: {},
			id: t,
			loaded: !1
		};
		return i[t].call(d.exports, d, d.exports, a), d.loaded = !0, d.exports
	}
	a.m = i, a.c = s, a.p = '', a(0)
}([function(t, d, i) {
	Zero.init({
		template: i(1),
		tags: [i(2), i(3), i(4), i(5), i(6), i(7)],
		data: {},
		computed: {},
		methods: {},
		mounted: function() {}
	})
}, function(t, d) {
	t.exports = '<netheader></netheader> <div> <netmaincontents> <toptext id=gekichumainet /> <standard/> <premium/> </netmaincontents> <registration/> </div> <netfooter></netfooter> '
}, function(t, d) {
	t.exports = "<tag name=event> <section class=Event> <h1><span>事件信息/事件历史</span></h1> <netbgwhite> <div class=Event-mainbox> <h2><el-asset adap src=./title_event.png alt=\"随时查看正在举办的活动和已参加的排行榜活动结果！\" /></h2> <div class=Event-images> <el-asset adap src=./st_img1.png alt=\"随时随地查看游玩数据！\" /> <el-asset adap src=./st_img1.png alt=\"随时随地查看游玩数据！\" /> </div> </div> </netbgwhite></section> </tag> "
}, function(t, d) {
	t.exports = "<tag name=standard> <section class=Standard> <netbgshirokuro> <div class=Standard-mainbox> <div class=Standard-inner> <div class=\"Standard-imgbox w100\"> <h3><span>标准会员</span></h3> <div class=Standard-imgbox-firsttext only-pc> <p>在 ONGEKI NET、CHUNITHM NET 与 maimai DX NET 中，<br> 标准会员均可使用比免费方案更多的功能。<br> ONGEKI NET 提供游玩记录、卡组编辑等主要功能，部分功能除外。<br> CHUNITHM NET 和 maimai DX NET 可使用全部功能。</p> </div> <div class=Standard-imgbox-firsttext only-sp> <p>这是一个可以让您使用比“ONGEKI NET”和“CHUNITHM-NET”免费课程更高级功能的课程！<br> 除了某些功能外，您可以在“ONGEKI NET”中使用检查播放历史记录和编辑牌组等基本功能，并且所有功能都可以在“CHUNITHM-NET”中使用。</p> </div> <div class=Standard-border> <div class=Standard-circleWrap> <div class=Standard-circle> <div class=Standard-images> <el-asset src=ongeki_net_bnr.png alt=\"Ongeki.NET\" /> </div> <div class=Registration-btnBox> <netbtnpink url=./ongeki/#ongekinet class=sizeL text=\"▶ 会员方案\"/> </div> </div> </div> </div> <div class=Standard-border> <div class=Standard-circleWrap> <div class=Standard-circle> <div class=Standard-images> <el-asset src=chunithm_net_bnr.png alt=CHUNITHM.NET /> </div> <div class=Registration-btnBox> <netbtnpink url=./chunithm/#chunithmnet class=sizeL text=\"▶ 会员方案\"/> </div> </div> </div> </div> <div class=Standard-border> <div class=Standard-circleWrap> <div class=Standard-circle> <div class=Standard-images> <el-asset src=maimaidx_net_bnr.png alt=maimai.NET /> </div> <div class=Registration-btnBox> <netbtnpink url=./maimai/#maimainet class=sizeL text=\"▶ 会员方案\"/> </div> </div> </div> </div> </div> <div class=\"Standard-imgbox w100\"> <h3><span>ONGEKI 高级会员</span></h3> <div class=Standard-imgbox-firsttext only-pc> <p>ONGEKI NET 另设高级会员。<br> 可查看计入 Rating 和 BP 的曲目，使用卡片培养等功能。<br> 为进阶游玩提供更多支持。</p> </div> <div class=Standard-imgbox-firsttext only-sp> <p>ONGEKI NET 另设高级会员。<br> 我们将更加有力地支持您的游戏，例如观看符合收视率和BP资格的歌曲以及卡牌开发！</p> </div> <div class=Standard-border> <div class=Standard-circleWrap> <div class=Standard-circle> <div class=Standard-images> <el-asset src=ongeki_net_bnr.png alt=\"Ongeki.NET\" /> </div> <div class=Registration-btnBox> <netbtnpink url=./ongeki/#ongekinet class=sizeL text=\"▶ 会员方案\"/> </div> </div> </div> </div> </div> </div> </div> </netbgshirokuro> </section> </tag> "
}, function(t, d) {
	t.exports = "<tag name=toptext> <section class=Toptext> <h1 class=Toptext-logo>什么是GEKICHUMAI-NET</h1> <h2 class=Toptext-title>让音游体验更有趣！</h2> <div class=Toptext-txt>GEKICHUMAI-NET 为 ONGEKI、CHUNITHM 和 maimai DX 提供游戏配套服务。<br>可用手机或其他设备访问。</div> <div class=Toptext-akari /> <div class=Toptext-aoi /> <div class=Toptext-yuzuko /> </section> </tag> "
}, function(t, d) {
	t.exports = "<tag name=premium> <section class=Premium> <div class=Toptext-course> <div class=Flex> <div class=Flex-box>会员方案</div> <div class=Flex-box>STANDARD 会员</div> <div class=Flex-box>ONGEKI 高级会员</div> <div class=Flex-box>自动续费</div> <div class=Flex-box>45积分/月</div> <div class=Flex-box>15 CREDIT/月 <span class=fontS>*额外费用</span></div> </div> </div> <ul> <li>使用标准课程和音激高级课程时，将收取每个课程的使用费。</li> <li>要使用 Ongeki 高级课程的内容，您必须注册标准课程。</li> <li class=styleNo>*请检查每个 .NET 站点以了解详细信息。</li> </ul> <div class=BtnWrapper><netbtnpink url=./use-right/ class=arrow text=\"单击此处了解有关使用权利的更多信息。\" /></div> </section> </tag> "
}, function(t, d) {
	t.exports = "<tag name=overview> <section class=Overview> <div class=ContensButton @click=\"elOpenDialog('apple')\"><span>单击此处按课程查看内容列表</span></div> <div style=position:relative;z-index:0> <el-dialog name=apple> <div> <table> <tr> <th>功能一览</th> <td>免费方案</td> <td>标准</td> <td>翁吉基高级</td> </tr> <tr> <th>音击-NET 公告</th> <td>○</td> <td>○</td> <td>○</td> </tr> <tr> <th>玩家数据详情</th> <td>○</td> <td>○</td> <td>○</td> </tr> <tr> <th>BP／Rating 计入曲目</th> <td>×</td> <td>×</td> <td>○</td> </tr> <tr> <th>活动记录</th> <td>×</td> <td>○</td> <td>○</td> </tr> <tr> <th>查看联动物品</th> <td>○</td> <td>○</td> <td>○</td> </tr> <tr> <th>编辑玩家名称和留言</th> <td>○</td> <td>○</td> <td>○</td> </tr> <tr> <th>选项设置</th> <td>×</td> <td>○</td> <td>○</td> </tr> <tr> <th>兑换码</th> <td>○</td> <td>○</td> <td>○</td> </tr> <tr> <th>当前活动信息／活动排行榜</th> <td>○</td> <td>○</td> <td>○</td> </tr> <tr> <th>章节信息</th> <td>○</td> <td>○</td> <td>○</td> </tr> <tr> <th>历史活动记录</th> <td>×</td> <td>○</td> <td>○</td> </tr> <tr> <th>播放历史记录</th> <td>×</td> <td>○</td> <td>○</td> </tr> <tr> <th>单曲成绩</th> <td>×</td> <td>○</td> <td>○</td> </tr> <tr> <th>全国行脚</th> <td>×</td> <td>○</td> <td>○</td> </tr> <tr> <th>查看收藏</th> <td>×</td> <td>○</td> <td>○</td> </tr> <tr> <th>设置称号、头像和名牌</th> <td>×</td> <td>○</td> <td>○</td> </tr> <tr> <th>人物信息</th> <td>×</td> <td>○</td> <td>○</td> </tr> <tr> <th>导航语音设置</th> <td>×</td> <td>○</td> <td>○</td> </tr> <tr> <th>卡片列表</th> <td>×</td> <td>○</td> <td>○</td> </tr> <tr> <th>卡片信息</th> <td>×</td> <td>○</td> <td>○</td> </tr> <tr> <th>编辑卡组</th> <td>×</td> <td>○</td> <td>○</td> </tr> <tr> <th>技能一览</th> <td>×</td> <td>○</td> <td>○</td> </tr> <tr> <th>卡片图鉴</th> <td>○</td> <td>○</td> <td>○</td> </tr> <tr> <th>卡片训练</th> <td>×</td> <td>○</td> <td>○</td> </tr> <tr> <th>好友功能（好友对战）</th> <td>×</td> <td>○</td> <td>○</td> </tr> <tr> <th>查看匹配玩家</th> <td>×</td> <td>○</td> <td>○</td> </tr> <tr> <th>单曲排行榜（全国）</th> <td>○</td> <td>○</td> <td>○</td> </tr> <tr> <th>单曲排行榜（按都道府县）</th> <td>×</td> <td>○</td> <td>○</td> </tr> <tr> <th>单曲排行榜（按店铺）</th> <td>×</td> <td>○</td> <td>○</td> </tr> <tr> <th>单曲排行榜（好友）</th> <td>×</td> <td>○</td> <td>○</td> </tr> <tr> <th>BP／Rating／总最高分排行榜（全国）</th> <td>○</td> <td>○</td> <td>○</td> </tr> <tr> <th>BP／Rating／总最高分排行榜（按都道府县）</th> <td>×</td> <td>○</td> <td>○</td> </tr> <tr> <th>BP／Rating／总最高分排行榜（按店铺）</th> <td>×</td> <td>○</td> <td>○</td> </tr> <tr> <th>BP／Rating／总最高分排行榜（好友）</th> <td>×</td> <td>○</td> <td>○</td> </tr> <tr> <th>累计金币／亲密度排行榜（全国）</th> <td>○</td> <td>○</td> <td>○</td> </tr> <tr> <th>累计金币／亲密度排行榜（按都道府县）</th> <td>×</td> <td>○</td> <td>○</td> </tr> <tr> <th>累计金币／亲密度排行榜（按店铺）</th> <td>×</td> <td>○</td> <td>○</td> </tr> <tr> <th>累计金币／亲密度排行榜（好友）</th> <td>×</td> <td>○</td> <td>○</td> </tr> </table> </div> <div slot=after> <button class=ContensClose @click=elCloseDialog()>×</button> </div> </el-dialog> </div> </section> </tag> "
}, function(t, d) {
	t.exports = "<tag name=registration>" + document.getElementById("home-registration-template").textContent.trim() + "</tag>"
}]);