## APP简介
tBox是一款多功能APP空壳，支持导入直播源、影视和听书源。

在影视点播方面，用户可播放4K网盘资源，也可自行编写简单的规则实现嗅探网页播放; 听书模式则允许后台熄屏播放。

此外，从1.0.9版开始 理论上点播、直播功能也支持后台熄屏播放音频。

tBox虽然在UI设计上借鉴了猫影视的风格，但其源码是完全不同的。
猫影视作为一款经典应用，我个人作为业余开发者，自认为难以超越。
我从猫影视的安卓低版本就开始使用，后来也见证了tvbox的诞生。非常感谢各位开发者，让我们能够实现观影自由。

## 温馨提示
夸克网盘需最低88会员观看、UC网盘+天翼云盘无需会员。由于网盘自身限制，夸克+UC切换剧集时建议间隔最少10秒。（播放网盘资源时，建议设置中调整播放器缓存为128M）

搜索影片之前，请关闭不常用的站源。

## 规则或APP更新

天翼云盘：首次使用在设置中登录天翼云盘及打开一次雷鲸。
天翼云盘的cookie有IP验证,切换IP后cookie会无效，且ipv4和ipv6的cookie无法混用。建议在电信的WIFI环境下使用(ipv4)。
如雷鲸无返回数据，请在设置中打开一次该站点，该站点有时需效验。

1.0.10版更新：优化历史记录、收藏记录按站源显示；修复素白白、奇优访问异常；修复直播收藏分类中点击同名频道会被多选的问题。

#### 12月14日：增加南风短剧（夸克网盘）

因安卓端优秀APP很多、再加上工作繁忙，暂不对安卓端进行新版发布（旧版可正常使用）

后台听书配置如下（1.0.9版开始支持后台听书、听广播模式）：

"selectedPlayer": "2" 选择音频播放器

```json
{
	"key": "6yueting",
	"name": "6️⃣六月┃听书",
	"type": 5,
	"searchable": 1,
	"filterClass": "",
	"firstClass": "",
	"filterPlay": "",
	"firstPlay": "",
	"ext": "https://ghp.ci/raw.githubusercontent.com/leevi0709/tBox/refs/heads/main/js/6yueting.js",
	"flagable": 0,
	"filterPlayFileKeywords": "",
	"keepPlayFileKeywords": "",
	"selectedPlayer": "2"
}
```


```json
{
	"key": "haiyang",
	"name": "🌊海洋┃听书",
	"type": 5,
	"searchable": 1,
	"filterClass": "",
	"firstClass": "",
	"filterPlay": "",
	"firstPlay": "",
	"ext": "https://ghp.ci/raw.githubusercontent.com/leevi0709/tBox/refs/heads/main/js/haiyang.js",
	"flagable": 0,
	"filterPlayFileKeywords": "",
	"keepPlayFileKeywords": "",
	"selectedPlayer": "2"
}
```

```json
{
	"key": "qtradio",
	"name": "🎧蜻蜓┃FM广播",
	"type": 5,
	"searchable": 1,
	"filterClass": "",
	"firstClass": "",
	"filterPlay": "",
	"firstPlay": "",
	"ext": "https://ghp.ci/raw.githubusercontent.com/leevi0709/tBox/refs/heads/main/js/qtradio.js",
	"flagable": 0,
	"filterPlayFileKeywords": "",
	"keepPlayFileKeywords": "",
	"selectedPlayer": "2"
}
```

------------------------------------------------------
该直播源大部分频道需要ipv6访问，其他源请自行从github搜索。

直播源名称：电视直播

源链接：https://tv.iill.top/m3u/Gather

User-Agent: okHttp

---------------------------------------------------
直播源名称：网络直播

源链接：https://tv.iill.top/m3u/Live

User-Agent: okHttp

------------------------------------------------
### 视频源配置链接
ios端配置（支持嗅探）：https://ghp.ci/raw.githubusercontent.com/leevi0709/tBox/refs/heads/main/配置.json

安卓端配置（不支持嗅探）：https://ghp.ci/raw.githubusercontent.com/leevi0709/tBox/refs/heads/main/安卓配置.json


**关于tBox的更新：**

* 由于个人工作繁忙，我并未计划频繁更新tBox，只要APP能正常使用，满足基本的观影需求即可。
* 我个人的要求比较简单，能流畅观影就好，从未想过与其他软件进行比较。

**最后，感谢大家的理解和支持！** 
