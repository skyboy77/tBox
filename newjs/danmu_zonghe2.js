class DanMu {
  constructor() {
      /**
       * 弹幕内容
       * @type {string}
       */
      this.content = ''

      /**
       * 弹幕出现时间 单位秒
       * @type {number}
       */
      this.time = 0

      /**
       * 弹幕颜色
       * @type {string}
       */
      this.color = ''
  }
}

class BackData {
  constructor() {
      /**
       * 弹幕数据
       * @type {DanMu[]}
       */
      this.data = []
      /**
       * 错误信息
       * @type {string}
       */
      this.error = ''
  }
}


//let result = await searchDanMu("大奉打更人","03");
//console.log(result);


/**
* 搜索弹幕
* @param {string} name - 动画或影片的名称
* @param {string} episode - 动画或影片的集数
* @param {string} playurl - 播放链接
* @returns {Promise<BackData>} backData - 返回一个 Promise 对象
*/
async function searchDanMu(name, episode, playurl) {
  let backData = new BackData();
  try {
    let all = [];
    // MARK: - 实现你的弹幕搜索逻辑
    let ddpList = await searchByDandanPlay(name, episode, playurl || undefined);
    all = all.concat(ddpList);
    backData.data = all;
  } catch (error) {
    backData.error = error.toString();
  }
  if (backData.data.length == 0) {
    backData.error = '未找到弹幕';
  }
  //console.log(JSON.stringify(backData));
  return JSON.stringify(backData);
}

async function searchByDandanPlay(name, episode, playurl) {
  let list = [];
  let retries = 3;
  try {
    // 发起搜索请求
    var response = await req(
      `https://api.so.360kan.com/index?force_v=1&kw=${encodeURI(name)}'&from=&pageno=1&v_ap=1&tab=all`,
    );
    const searchResult = await response.json();
    // 检查搜索结果
    if (searchResult.data.longData.rows[0].seriesPlaylinks?.length > 0) {
      // 将 episode 转换成整数
      const episodeIndex = parseInt(episode, 10) - 1;
      let episodeId = searchResult.data.longData.rows[0].seriesPlaylinks[episodeIndex].url;
      if (!episodeId) {
        episodeId = Object.values(searchResult.data.longData.rows[0].playlinks)[0];
      }

      console.log(episodeId);

      // 检查 episodeId 是否为空
      if (episodeId) {
        // 获取弹幕数据
        let danMuResult;
        let retryCount = 0;
        while (retryCount < retries) {
          var response2 = await req(
            `https://fc.lyz05.cn/?url=${episodeId}`
          );
          danMuResult = await response2.text(); // 获取XML字符串

          // 使用正则表达式解析XML
          const regex = /<d p="([^"]+)">([^<]+)<\/d>/g;
          let match = regex.exec(danMuResult);

          if (match) {
            while (match !== null) {
              const pAttributes = match[1].split(','); // 分割 p 属性
              const time = parseFloat(pAttributes[0]); // 提取 time
              const content = match[2]; // 提取 content
              list.push({ time, content });
              match = regex.exec(danMuResult);
            }
            break; // 成功解析，退出重试循环
          } else {
            retryCount++;
            console.log(`No match found, retrying... (${retryCount}/${retries})`);
            await toast(`弹幕数据获取失败，正在重试... (${retryCount}/${retries})`);
            await new Promise(resolve => setTimeout(resolve, 1000)); // 等待1秒后重试
          }
        }

        if (retryCount === retries) {
          console.log('Max retries reached, no danmu data found.');
          await toast('弹幕数据解析失败，请稍后重试!');
        }
      } else {
        console.log('episodeId is empty, skipping danmu request.');
        await toast('未匹配到官方链接，无法查找弹幕!');
      }
    }
  } catch (error) {
    console.error('Error in searchByDandanPlay:', error);
  }
  return list;
}





async function homeContent() {
}

async function playerContent(vod_id) {
}

async function searchContent(keyword) {
}

async function detailContent(ids) {
}

async function categoryContent(tid, pg = 1, extend) {
}