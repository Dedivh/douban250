const movieJSON = function() {
    let d = [
        {
            "name": "追风筝的人",
            "score": 8.9,
            "quote": "为你，千千万万遍",
            "coverUrl": "https://img3.doubanio.com/view/subject/m/public/s1727290.jpg",
            "writer": "[美] 卡勒德·胡赛尼 ",
            "judgements": 337454,
            "publicHouse": " 上海人民出版社 ",
            "price": " 29.00元"
        },
        {
            "name": "解忧杂货店",
            "score": 8.6,
            "quote": "一碗精心熬制的东野牌鸡汤，拒绝很难",
            "coverUrl": "https://img3.doubanio.com/view/subject/m/public/s27264181.jpg",
            "writer": "[日] 东野圭吾 ",
            "judgements": 311352,
            "publicHouse": " 南海出版公司 ",
            "price": " 39.50元"
        },
        {
            "name": "小王子",
            "score": 9,
            "quote": "献给长成了大人的孩子们",
            "coverUrl": "https://img3.doubanio.com/view/subject/m/public/s1103152.jpg",
            "writer": "[法] 圣埃克苏佩里 ",
            "judgements": 260866,
            "publicHouse": " 人民文学出版社 ",
            "price": " 22.00元"
        },
        {
            "name": "白夜行",
            "score": 9.1,
            "quote": "暗夜独行的残破灵魂，爱与恶本就难分难舍",
            "coverUrl": "https://img3.doubanio.com/view/subject/m/public/s4610502.jpg",
            "writer": "[日] 东野圭吾 ",
            "judgements": 228853,
            "publicHouse": " 南海出版公司 ",
            "price": " 29.80元"
        },
        {
            "name": "围城",
            "score": 8.9,
            "quote": "对于“人艰不拆”四个字最彻底的违抗",
            "coverUrl": "https://img3.doubanio.com/view/subject/m/public/s1070222.jpg",
            "writer": "[中] 钱锺书 ",
            "judgements": 209564,
            "publicHouse": " 人民文学出版社 ",
            "price": " 19.00"
        },
        {
            "name": "三体",
            "score": 8.8,
            "quote": "你我不过都是虫子",
            "coverUrl": "https://img1.doubanio.com/view/subject/m/public/s2768378.jpg",
            "writer": "[中] 刘慈欣 ",
            "judgements": 185125,
            "publicHouse": " 重庆出版社 ",
            "price": " 23.00"
        },
        {
            "name": "挪威的森林",
            "score": 8,
            "quote": "村上之发轫，多少人的青春启蒙",
            "coverUrl": "https://img3.doubanio.com/view/subject/m/public/s1228930.jpg",
            "writer": "[日] 村上春树 ",
            "judgements": 202905,
            "publicHouse": " 上海译文出版社 ",
            "price": " 18.80元"
        },
        {
            "name": "嫌疑人X的献身",
            "score": 8.9,
            "quote": "数学好是一种极致的浪漫",
            "coverUrl": "https://img3.doubanio.com/view/subject/m/public/s3254244.jpg",
            "writer": "[日] 东野圭吾 ",
            "judgements": 179286,
            "publicHouse": " 南海出版公司 ",
            "price": " 28.00"
        },
        {
            "name": "活着",
            "score": 9.1,
            "quote": "活着本身就是人生最大的意义",
            "coverUrl": "https://img3.doubanio.com/view/subject/m/public/s23836852.jpg",
            "writer": "[中] 余华 ",
            "judgements": 161353,
            "publicHouse": " 南海出版公司 ",
            "price": " 12.00元"
        },
        {
            "name": "红楼梦",
            "score": 9.6,
            "quote": "谁解其中味？",
            "coverUrl": "https://img1.doubanio.com/view/subject/m/public/s1070959.jpg",
            "writer": "[清] 曹雪芹 著 ",
            "judgements": 139001,
            "publicHouse": " 人民文学出版社 ",
            "price": " 59.70元"
        },
        {
            "name": "百年孤独",
            "score": 9.2,
            "quote": "尼采所谓的永劫复归，一场无始无终的梦魇",
            "coverUrl": "https://img3.doubanio.com/view/subject/m/public/s6384944.jpg",
            "writer": "[哥伦比亚] 加西亚·马尔克斯 ",
            "judgements": 143805,
            "publicHouse": " 南海出版公司 ",
            "price": " 39.50元"
        },
        {
            "name": "看见",
            "score": 8.8,
            "quote": "在这里看见中国",
            "coverUrl": "https://img3.doubanio.com/view/subject/m/public/s24468373.jpg",
            "writer": "[中] 柴静 ",
            "judgements": 139853,
            "publicHouse": " 广西师范大学出版社 ",
            "price": " 39.80元"
        },
        {
            "name": "不能承受的生命之轻",
            "score": 8.5,
            "quote": "朝向媚俗的一次伟大的进军",
            "coverUrl": "https://img1.doubanio.com/view/subject/m/public/s1091698.jpg",
            "writer": "[捷克] 米兰·昆德拉 ",
            "judgements": 144716,
            "publicHouse": " 上海译文出版社 ",
            "price": " 23.00元"
        },
        {
            "name": "达·芬奇密码",
            "score": 8.2,
            "quote": "一切畅销的因素都有了",
            "coverUrl": "https://img3.doubanio.com/view/subject/m/public/s1513425.jpg",
            "writer": "[美] 丹·布朗 ",
            "judgements": 136375,
            "publicHouse": " 上海人民出版社 ",
            "price": " 28.00元"
        },
        {
            "name": "平凡的世界（全三部）",
            "score": 9,
            "quote": "中国当代城乡生活全景",
            "coverUrl": "https://img3.doubanio.com/view/subject/m/public/s2335693.jpg",
            "writer": "[中] 路遥 ",
            "judgements": 116095,
            "publicHouse": " 人民文学出版社 ",
            "price": " 64.00元"
        },
        {
            "name": "三体Ⅱ",
            "score": 9.3,
            "quote": "无边的黑暗森林，比第一部更为恢弘壮丽",
            "coverUrl": "https://img3.doubanio.com/view/subject/m/public/s3078482.jpg",
            "writer": "[中] 刘慈欣 ",
            "judgements": 108885,
            "publicHouse": " 重庆出版社 ",
            "price": " 32.00"
        },
        {
            "name": "三体Ⅲ",
            "score": 9.2,
            "quote": "终章，何去何从",
            "coverUrl": "https://img3.doubanio.com/view/subject/m/public/s26012674.jpg",
            "writer": "[中] 刘慈欣 ",
            "judgements": 109092,
            "publicHouse": " 重庆出版社 ",
            "price": " 38.00元"
        },
        {
            "name": "简爱（英文全本）",
            "score": 8.5,
            "quote": "灰姑娘在十九世纪",
            "coverUrl": "https://img3.doubanio.com/view/subject/m/public/s5924326.jpg",
            "writer": "[英] 夏洛蒂·勃朗特 ",
            "judgements": 115980,
            "publicHouse": " 世界图书出版公司 ",
            "price": " 18.00元"
        },
        {
            "name": "哈利·波特与魔法石",
            "score": 9,
            "quote": "羽加迪姆勒维奥萨！",
            "coverUrl": "https://img3.doubanio.com/view/subject/m/public/s1990480.jpg",
            "writer": "[英] J. K. 罗琳 ",
            "judgements": 95206,
            "publicHouse": " 人民文学出版社 ",
            "price": " 19.50元"
        },
        {
            "name": "天才在左 疯子在右",
            "score": 8.2,
            "quote": "简称“疯癫与文明”",
            "coverUrl": "https://img1.doubanio.com/view/subject/m/public/s6340977.jpg",
            "writer": "[中] 高铭 ",
            "judgements": 106212,
            "publicHouse": " 武汉大学出版社 ",
            "price": " 29.80元"
        },
        {
            "name": "我们仨",
            "score": 8.7,
            "quote": "平淡，坚忍，温情",
            "coverUrl": "https://img3.doubanio.com/view/subject/m/public/s1015872.jpg",
            "writer": "[中] 杨绛 ",
            "judgements": 96822,
            "publicHouse": " 生活·读书·新知三联书店 ",
            "price": " 18.80元"
        },
        {
            "name": "傲慢与偏见",
            "score": 8.8,
            "quote": "所有现代言情小说的母体",
            "coverUrl": "https://img3.doubanio.com/view/subject/m/public/s4250062.jpg",
            "writer": "[英] 奥斯丁 ",
            "judgements": 94426,
            "publicHouse": " 人民文学出版社 ",
            "price": " 13.00元"
        },
        {
            "name": "送你一颗子弹",
            "score": 8.6,
            "quote": "犀利又温柔，穿过胸口隐隐作痛",
            "coverUrl": "https://img1.doubanio.com/view/subject/m/public/s4243447.jpg",
            "writer": "[中] 刘瑜 ",
            "judgements": 96064,
            "publicHouse": " 上海三联书店 ",
            "price": " 25.00元"
        },
        {
            "name": "飘",
            "score": 9.3,
            "quote": "革命时期的爱情，随风而逝",
            "coverUrl": "https://img1.doubanio.com/view/subject/m/public/s1078958.jpg",
            "writer": "[美国] 玛格丽特·米切尔 ",
            "judgements": 86930,
            "publicHouse": " 译林出版社 ",
            "price": " 40.00元"
        },
        {
            "name": "明朝那些事儿（壹）",
            "score": 8.7,
            "quote": "历史本就是一件件“事儿”拼成的",
            "coverUrl": "https://img3.doubanio.com/view/subject/m/public/s1872653.jpg",
            "writer": "[中] 当年明月 ",
            "judgements": 91949,
            "publicHouse": " 中国友谊出版公司 ",
            "price": " 24.80"
        },
        {
            "name": "倾城之恋",
            "score": 8.5,
            "quote": "一段姻缘，需要一座城的倾覆来成全",
            "coverUrl": "https://img3.doubanio.com/view/subject/m/public/s1077102.jpg",
            "writer": "[中] 花城出版社 ",
            "judgements": 95669,
            "publicHouse": " 1997-3-1 "
        },
        {
            "name": "目送",
            "score": 8.7,
            "quote": "不必追",
            "coverUrl": "https://img1.doubanio.com/view/subject/m/public/s3984108.jpg",
            "writer": "[中] 龙应台 ",
            "judgements": 92379,
            "publicHouse": " 生活·读书·新知三联书店 ",
            "price": " 39.00元"
        },
        {
            "name": "月亮和六便士",
            "score": 9,
            "quote": "有多少人会经历顿悟，就有更少的人甘愿自我放逐",
            "coverUrl": "https://img1.doubanio.com/view/subject/m/public/s2659208.jpg",
            "writer": "[英] 毛姆 ",
            "judgements": 85794,
            "publicHouse": " 上海译文出版社 ",
            "price": " 15.00元"
        },
        {
            "name": "情人",
            "score": 8.1,
            "quote": "我已经老了，你呢？",
            "coverUrl": "https://img1.doubanio.com/view/subject/m/public/s1444578.jpg",
            "writer": "[法] 玛格丽特·杜拉斯 ",
            "judgements": 93198,
            "publicHouse": " 上海译文出版社 ",
            "price": " 20.00元"
        },
        {
            "name": "恶意",
            "score": 8.4,
            "quote": "无缘由的恨，冰冷彻骨",
            "coverUrl": "https://img3.doubanio.com/view/subject/m/public/s3814606.jpg",
            "writer": "[日] 东野圭吾 ",
            "judgements": 85838,
            "publicHouse": " 南海出版公司 ",
            "price": " 18.00"
        },
        {
            "name": "霍乱时期的爱情",
            "score": 9,
            "quote": "义无反顾地直达爱情的核心",
            "coverUrl": "https://img3.doubanio.com/view/subject/m/public/s11284102.jpg",
            "writer": "[哥伦比亚] 加西亚·马尔克斯 ",
            "judgements": 79893,
            "publicHouse": " 南海出版公司 ",
            "price": " 39.50元"
        },
        {
            "name": "哈利·波特与阿兹卡班的囚徒",
            "score": 8.9,
            "quote": "小天狼星布莱克",
            "coverUrl": "https://img3.doubanio.com/view/subject/m/public/s1074376.jpg",
            "writer": "[英] J. K. 罗琳 ",
            "judgements": 78937,
            "publicHouse": " 人民文学出版社 ",
            "price": " 26.50元"
        },
        {
            "name": "狼图腾",
            "score": 8.3,
            "quote": "我们都是 狼的传人？",
            "coverUrl": "https://img3.doubanio.com/view/subject/m/public/s1466042.jpg",
            "writer": "[中] 姜戎 ",
            "judgements": 84793,
            "publicHouse": " 长江文艺出版社 ",
            "price": " 32.00元"
        },
        {
            "name": "哈利·波特与火焰杯",
            "score": 9,
            "quote": "整个系列的分水岭，暗色渐浓",
            "coverUrl": "https://img3.doubanio.com/view/subject/m/public/s1072746.jpg",
            "writer": "[英] J. K. 罗琳 ",
            "judgements": 76382,
            "publicHouse": " 人民文学出版社 ",
            "price": " 39.80元"
        },
        {
            "name": "边城",
            "score": 8.6,
            "quote": "如水一般的忧愁与怅惘",
            "coverUrl": "https://img1.doubanio.com/view/subject/m/public/s1595557.jpg",
            "writer": "[中] 沈从文 ",
            "judgements": 80494,
            "publicHouse": " 北岳文艺出版社 ",
            "price": " 12.00元"
        },
        {
            "name": "1Q84 BOOK 1",
            "score": 8.3,
            "quote": "村上的野望，欢迎来到1Q84年",
            "coverUrl": "https://img3.doubanio.com/view/subject/m/public/s4363464.jpg",
            "writer": "[日] 村上春树 ",
            "judgements": 83519,
            "publicHouse": " 南海出版公司 ",
            "price": " 36.00元"
        },
        {
            "name": "哈利·波特与密室",
            "score": 8.9,
            "quote": "渐入佳境，魔法世界全貌初现",
            "coverUrl": "https://img3.doubanio.com/view/subject/m/public/s1557672.jpg",
            "writer": "[英] J. K. 罗琳 ",
            "judgements": 76355,
            "publicHouse": " 人民文学出版社 ",
            "price": " 22.00元"
        },
        {
            "name": "穆斯林的葬礼",
            "score": 8.2,
            "quote": "时代烙印鲜明的民族史诗",
            "coverUrl": "https://img3.doubanio.com/view/subject/m/public/s1790771.jpg",
            "writer": "[中] 霍达 ",
            "judgements": 79926,
            "publicHouse": " 北京十月文艺出版社 ",
            "price": " 32.00"
        },
        {
            "name": "许三观卖血记",
            "score": 8.7,
            "quote": "余华的悲凉，都在那一碗炒猪肝里了",
            "coverUrl": "https://img3.doubanio.com/view/subject/m/public/s1074291.jpg",
            "writer": "[中] 余华 ",
            "judgements": 74674,
            "publicHouse": " 南海出版公司 ",
            "price": " 16.80元"
        },
        {
            "name": "撒哈拉的故事",
            "score": 9,
            "quote": "关于漂泊的一切",
            "coverUrl": "https://img3.doubanio.com/view/subject/m/public/s3563113.jpg",
            "writer": "[中] 三毛 ",
            "judgements": 71545,
            "publicHouse": " 皇冠出版社 ",
            "price": " 160 TWD"
        },
        {
            "name": "万历十五年",
            "score": 8.9,
            "quote": "见微知著，历史观的颠覆",
            "coverUrl": "https://img3.doubanio.com/view/subject/m/public/s1800355.jpg",
            "writer": "[美] 黄仁宇 ",
            "judgements": 71557,
            "publicHouse": " 生活·读书·新知三联书店 ",
            "price": " 18.00元"
        },
        {
            "name": "莲花",
            "score": 8,
            "quote": "三个生命的交逢，灵魅清冷",
            "coverUrl": "https://img1.doubanio.com/view/subject/m/public/s1513548.jpg",
            "writer": "[中] 安妮宝贝 ",
            "judgements": 79635,
            "publicHouse": " 作家出版社 ",
            "price": " 25.00元"
        },
        {
            "name": "向左走·向右走",
            "score": 8.4,
            "quote": "两条平行线相遇的可能",
            "coverUrl": "https://img3.doubanio.com/view/subject/m/public/s1557610.jpg",
            "writer": "[中] 幾米 ",
            "judgements": 73935,
            "publicHouse": " 生活·读书·新知三联书店 ",
            "price": " 16.00元"
        },
        {
            "name": "哈利·波特与混血王子",
            "score": 8.8,
            "quote": "感情线纷乱的一部。再见邓布利多",
            "coverUrl": "https://img3.doubanio.com/view/subject/m/public/s1447381.jpg",
            "writer": "[英] J. K. 罗琳 ",
            "judgements": 66926,
            "publicHouse": " 人民文学出版社 ",
            "price": " 58.00元"
        },
        {
            "name": "盗墓笔记",
            "score": 8.3,
            "quote": "想象奇诡的大型RPG游戏",
            "coverUrl": "https://img3.doubanio.com/view/subject/m/public/s4442295.jpg",
            "writer": "[中] 南派三叔 ",
            "judgements": 70715,
            "publicHouse": " 中国友谊出版公司 ",
            "price": " 26.80元"
        },
        {
            "name": "黄金时代",
            "score": 8.8,
            "quote": "能把性爱写得如此坦荡的，大概只有王二了",
            "coverUrl": "https://img3.doubanio.com/view/subject/m/public/s1076372.jpg",
            "writer": "[中] 王小波 ",
            "judgements": 66170,
            "publicHouse": " 花城出版社 ",
            "price": " 19.00元"
        },
        {
            "name": "窗边的小豆豆",
            "score": 8.7,
            "quote": "真正懂孩子的教育经",
            "coverUrl": "https://img3.doubanio.com/view/subject/m/public/s1067911.jpg",
            "writer": "[日] 黑柳彻子 著 ",
            "judgements": 66549,
            "publicHouse": " 南海出版公司 ",
            "price": " 20.00元"
        },
        {
            "name": "苏菲的世界",
            "score": 8.5,
            "quote": "最平易近人的哲学入门",
            "coverUrl": "https://img3.doubanio.com/view/subject/m/public/s2153661.jpg",
            "writer": "[中] （挪威）乔斯坦·贾德 ",
            "judgements": 67942,
            "publicHouse": " 作家出版社 ",
            "price": " 26.80元"
        },
        {
            "name": "天龙八部",
            "score": 9.1,
            "quote": "“有情皆孽，无人不冤”",
            "coverUrl": "https://img1.doubanio.com/view/subject/m/public/s23632058.jpg",
            "writer": "[中] 金庸 ",
            "judgements": 61122,
            "publicHouse": " 生活.读书.新知三联书店 ",
            "price": " 96.0"
        },
        {
            "name": "三国演义（全二册）",
            "score": 9.2,
            "quote": "是非成败转头空",
            "coverUrl": "https://img3.doubanio.com/view/subject/m/public/s1076932.jpg",
            "writer": "[明] 罗贯中 ",
            "judgements": 60080,
            "publicHouse": " 人民文学出版社 ",
            "price": " 39.50元"
        },
        {
            "name": "哈利·波特与凤凰社",
            "score": 8.7,
            "quote": "暴脾气的哈利",
            "coverUrl": "https://img3.doubanio.com/view/subject/m/public/s1822013.jpg",
            "writer": "[英] J. K. 罗琳 ",
            "judgements": 63359,
            "publicHouse": " 人民文学出版社 ",
            "price": " 59.00元"
        },
        {
            "name": "悟空传",
            "score": 8.4,
            "quote": "猴子还是那个猴子，世界早已不是原来的世界",
            "coverUrl": "https://img3.doubanio.com/view/subject/m/public/s9026255.jpg",
            "writer": "[中] 今何在 ",
            "judgements": 66576,
            "publicHouse": " 光明日报出版社 ",
            "price": " 14.80元"
        },
        {
            "name": "牧羊少年奇幻之旅",
            "score": 8.6,
            "quote": "你自己就是最大的宝藏",
            "coverUrl": "https://img1.doubanio.com/view/subject/m/public/s3668327.jpg",
            "writer": "[巴西]保罗·柯艾略 ",
            "judgements": 64021,
            "publicHouse": " 南海出版公司 ",
            "price": " 25.00元"
        },
        {
            "name": "哈利·波特与死亡圣器",
            "score": 8.9,
            "quote": "",
            "coverUrl": "https://img1.doubanio.com/view/subject/m/public/s2752367.jpg",
            "writer": "[英] J. K. 罗琳 ",
            "judgements": 59843,
            "publicHouse": " 人民文学出版社 ",
            "price": " 66.00元"
        },
        {
            "name": "海边的卡夫卡",
            "score": 8.1,
            "quote": "背负诅咒的少年，平行世界中的奥德赛",
            "coverUrl": "https://img3.doubanio.com/view/subject/m/public/s1094940.jpg",
            "writer": "[日] 村上春树 ",
            "judgements": 65997,
            "publicHouse": " 上海译文出版社 ",
            "price": " 25.00元"
        },
        {
            "name": "灿烂千阳",
            "score": 8.8,
            "quote": "唯有希望与爱可以驱散阴霾",
            "coverUrl": "https://img3.doubanio.com/view/subject/m/public/s2651394.jpg",
            "writer": "[美] 卡勒德·胡赛尼 ",
            "judgements": 59458,
            "publicHouse": " 上海人民出版社 ",
            "price": " 28.00元"
        },
        {
            "name": "呼啸山庄",
            "score": 8.4,
            "quote": "近乎暴虐的爱与恨，中文译名后无来者",
            "coverUrl": "https://img3.doubanio.com/view/subject/m/public/s1095383.jpg",
            "writer": "[中] （英）勃朗特 ",
            "judgements": 62545,
            "publicHouse": " 人民文学出版社 ",
            "price": " 27.30元"
        },
        {
            "name": "亲爱的安德烈",
            "score": 8.7,
            "quote": "龙应台母子对话，两代人的思想碰撞",
            "coverUrl": "https://img1.doubanio.com/view/subject/m/public/s3993878.jpg",
            "writer": "[中] 龙应台 ",
            "judgements": 59856,
            "publicHouse": " 人民文学出版社 ",
            "price": " 26.00"
        },
        {
            "name": "兄弟（上）",
            "score": 8.3,
            "quote": "历史苦难中的个人灾变",
            "coverUrl": "https://img3.doubanio.com/view/subject/m/public/s1427312.jpg",
            "writer": "[中] 余华 ",
            "judgements": 61927,
            "publicHouse": " 上海文艺出版社 ",
            "price": " 16.00元"
        },
        {
            "name": "老人与海",
            "score": 8.3,
            "quote": "正是悲壮赋予生活以意义",
            "coverUrl": "https://img3.doubanio.com/view/subject/m/public/s1050021.jpg",
            "writer": "[中] 海明威 ",
            "judgements": 61966,
            "publicHouse": " 上海译文出版社 ",
            "price": " 8.20元"
        },
        {
            "name": "少有人走的路",
            "score": 8.4,
            "quote": "成熟的心智通向更完善的自我",
            "coverUrl": "https://img3.doubanio.com/view/subject/m/public/s2144391.jpg",
            "writer": "[美] M·斯科特·派克 ",
            "judgements": 60660,
            "publicHouse": " 吉林文史出版社 ",
            "price": " 26.00元"
        },
        {
            "name": "基督山伯爵",
            "score": 9,
            "quote": "完美的复仇，金庸用法语写作应该就是这样",
            "coverUrl": "https://img3.doubanio.com/view/subject/m/public/s3248016.jpg",
            "writer": "[中] 大仲马 ",
            "judgements": 56060,
            "publicHouse": " 上海译文出版社 ",
            "price": " 43.90元"
        },
        {
            "name": "人类简史",
            "score": 9.1,
            "quote": "跟着人类一同走过十万年",
            "coverUrl": "https://img3.doubanio.com/view/subject/m/public/s27814883.jpg",
            "writer": "[以色列]尤瓦尔·赫拉利 ",
            "judgements": 54741,
            "publicHouse": " 中信出版社 ",
            "price": " CNY 68.00"
        },
        {
            "name": "1984",
            "score": 9.3,
            "quote": "栗树荫下，我出卖你，你出卖我",
            "coverUrl": "https://img1.doubanio.com/view/subject/m/public/s4371408.jpg",
            "writer": "[英] 乔治·奥威尔 ",
            "judgements": 53014,
            "publicHouse": " 北京十月文艺出版社 ",
            "price": " 28.00"
        },
        {
            "name": "笑傲江湖（全四册）",
            "score": 9,
            "quote": "武侠的壳，政治斗争的核",
            "coverUrl": "https://img3.doubanio.com/view/subject/m/public/s2157335.jpg",
            "writer": "[中] 金庸 ",
            "judgements": 54298,
            "publicHouse": " 生活·读书·新知三联书店 ",
            "price": " 76.80元"
        },
        {
            "name": "民主的细节",
            "score": 8.6,
            "quote": "公民养成手册",
            "coverUrl": "https://img1.doubanio.com/view/subject/m/public/s4146437.jpg",
            "writer": "[中] 刘瑜 ",
            "judgements": 56926,
            "publicHouse": " 上海三联书店 ",
            "price": " 25.00"
        },
        {
            "name": "人间失格",
            "score": 8.3,
            "quote": "令人无从怜悯的绝望",
            "coverUrl": "https://img3.doubanio.com/view/subject/m/public/s6100756.jpg",
            "writer": "[中] 太宰治 ",
            "judgements": 59227,
            "publicHouse": " 吉林出版集团有限责任公司 ",
            "price": " 16.00元"
        },
        {
            "name": "福尔摩斯探案全集（上中下）",
            "score": 9.2,
            "quote": "侦探小说鼻祖",
            "coverUrl": "https://img3.doubanio.com/view/subject/m/public/s1229240.jpg",
            "writer": "[英] 阿·柯南道尔 ",
            "judgements": 51695,
            "publicHouse": " 丁钟华 等 ",
            "price": " 1981-8 "
        },
        {
            "name": "无声告白",
            "score": 8.2,
            "quote": "莉迪亚死了，可他们还不知道",
            "coverUrl": "https://img3.doubanio.com/view/subject/m/public/s28109182.jpg",
            "writer": "[美] 伍绮诗 ",
            "judgements": 58441,
            "publicHouse": " 江苏凤凰文艺出版社 ",
            "price": " 35.00元"
        },
        {
            "name": "遇见未知的自己",
            "score": 8.1,
            "quote": "都市灵修速成",
            "coverUrl": "https://img3.doubanio.com/view/subject/m/public/s3403254.jpg",
            "writer": "[中] 张德芬 ",
            "judgements": 57355,
            "publicHouse": " 华夏出版社 ",
            "price": " 29.00"
        },
        {
            "name": "情书",
            "score": 8.6,
            "quote": "一场误会中的两段爱情，东方式的含蓄隐忍",
            "coverUrl": "https://img3.doubanio.com/view/subject/m/public/s1127135.jpg",
            "writer": "[日] 岩井俊二 ",
            "judgements": 52043,
            "publicHouse": " 天津人民出版社 ",
            "price": " 18.00元"
        },
        {
            "name": "茶花女",
            "score": 8.2,
            "quote": "妓女应当拥有爱情吗？",
            "coverUrl": "https://img1.doubanio.com/view/subject/m/public/s1008927.jpg",
            "writer": "[中] 小仲马 ",
            "judgements": 55204,
            "publicHouse": " 外国文学出版社 ",
            "price": " 9.00元"
        },
        {
            "name": "白鹿原",
            "score": 8.6,
            "quote": "中国乡村史诗",
            "coverUrl": "https://img1.doubanio.com/view/subject/m/public/s9137567.jpg",
            "writer": "[中] 陈忠实 ",
            "judgements": 50479,
            "publicHouse": " 人民文学出版社 ",
            "price": " 28.00元"
        },
        {
            "name": "一个陌生女人的来信",
            "score": 8.7,
            "quote": "暗恋的极致",
            "coverUrl": "https://img1.doubanio.com/view/subject/m/public/s2611329.jpg",
            "writer": "[奥] 斯台芬·茨威格 ",
            "judgements": 51066,
            "publicHouse": " 上海译文出版社 ",
            "price": " 20.00元"
        },
        {
            "name": "神雕侠侣",
            "score": 8.8,
            "quote": "至情至性，情大于武",
            "coverUrl": "https://img3.doubanio.com/view/subject/m/public/s26018916.jpg",
            "writer": "[中] 金庸 ",
            "judgements": 49150,
            "publicHouse": " 生活·读书·新知三联书店 ",
            "price": " 76.80元"
        },
        {
            "name": "沉默的大多数",
            "score": 9.1,
            "quote": "沉默是沉默者的通行证",
            "coverUrl": "https://img1.doubanio.com/view/subject/m/public/s1447349.jpg",
            "writer": "[中] 王小波 ",
            "judgements": 48090,
            "publicHouse": " 中国青年出版社 ",
            "price": " 27.00元"
        },
        {
            "name": "当我谈跑步时我谈些什么",
            "score": 8.1,
            "quote": "村上同志告诉我们，身体是革命的本钱",
            "coverUrl": "https://img3.doubanio.com/view/subject/m/public/s3507580.jpg",
            "writer": "[日] 村上春树 ",
            "judgements": 50644,
            "publicHouse": " 南海出版公司 ",
            "price": " 25.00"
        },
        {
            "name": "东方快车谋杀案",
            "score": 9,
            "quote": "谋杀诡计惊人，波洛的抉择耐人寻味",
            "coverUrl": "https://img1.doubanio.com/view/subject/m/public/s1765799.jpg",
            "writer": "[英] 阿加莎·克里斯蒂 ",
            "judgements": 44582,
            "publicHouse": " 人民文学出版社 ",
            "price": " 18.00元"
        },
        {
            "name": "这些人，那些事",
            "score": 8.8,
            "quote": "平淡叙述下的惊心动魄",
            "coverUrl": "https://img3.doubanio.com/view/subject/m/public/s6828981.jpg",
            "writer": "[中] 吴念真 ",
            "judgements": 45499,
            "publicHouse": " 译林出版社 ",
            "price": " 28.00元"
        },
        {
            "name": "肖申克的救赎",
            "score": 9.1,
            "quote": "希望让人自由，电影实在太有名",
            "coverUrl": "https://img3.doubanio.com/view/subject/m/public/s4007145.jpg",
            "writer": "[美] 斯蒂芬·金 ",
            "judgements": 43398,
            "publicHouse": " 人民文学出版社 ",
            "price": " 29.90元"
        },
        {
            "name": "鲁滨逊漂流记",
            "score": 8,
            "quote": "最早的荒野求生",
            "coverUrl": "https://img3.doubanio.com/view/subject/m/public/s1242786.jpg",
            "writer": "[英] 笛福 ",
            "judgements": 50144,
            "publicHouse": " 广西民族出版社 ",
            "price": " 9.20元"
        },
        {
            "name": "局外人",
            "score": 9,
            "quote": "人生在世，永远也不该演戏作假",
            "coverUrl": "https://img3.doubanio.com/view/subject/m/public/s4468484.jpg",
            "writer": "[法] 阿尔贝·加缪 ",
            "judgements": 43741,
            "publicHouse": " 上海译文出版社 ",
            "price": " 22.00元"
        },
        {
            "name": "这些都是你给我的爱",
            "score": 8.4,
            "quote": "只言片语的温暖",
            "coverUrl": "https://img3.doubanio.com/view/subject/m/public/s4219471.jpg",
            "writer": "[中] 文：安东尼 ",
            "judgements": 46006,
            "publicHouse": " 长江文艺出版社 ",
            "price": " 24.80元"
        },
        {
            "name": "巴黎圣母院",
            "score": 8.3,
            "quote": "潜藏于残缺下的美与崇高",
            "coverUrl": "https://img3.doubanio.com/view/subject/m/public/s4493741.jpg",
            "writer": "[法]雨果 ",
            "judgements": 46218,
            "publicHouse": " 人民文学出版社 ",
            "price": " 22.50元"
        },
        {
            "name": "羊脂球",
            "score": 8.1,
            "quote": "资产阶级的道貌岸然",
            "coverUrl": "https://img3.doubanio.com/view/subject/m/public/s1469280.jpg",
            "writer": "[中] （法）莫泊桑 ",
            "judgements": 47418,
            "publicHouse": " 北京燕山出版社 ",
            "price": " 13.50元"
        },
        {
            "name": "喜宝",
            "score": 8,
            "quote": "爱情才是终极的奢侈品",
            "coverUrl": "https://img1.doubanio.com/view/subject/m/public/s5813979.jpg",
            "writer": "[中] 亦舒 ",
            "judgements": 47438,
            "publicHouse": " 新世界出版社 ",
            "price": " 22.00元"
        },
        {
            "name": "陪安东尼度过漫长岁月",
            "score": 8.3,
            "quote": "真正的片段式写作",
            "coverUrl": "https://img3.doubanio.com/view/subject/m/public/s2998096.jpg",
            "writer": "[中] 安东尼 ",
            "judgements": 44408,
            "publicHouse": " 长江文艺出版社 ",
            "price": " 18.00"
        },
        {
            "name": "呐喊",
            "score": 8.8,
            "quote": "新文学的第一声呐喊",
            "coverUrl": "https://img3.doubanio.com/view/subject/m/public/s4696893.jpg",
            "writer": "[中] 鲁迅 ",
            "judgements": 41454,
            "publicHouse": " 人民文学出版社 ",
            "price": " 0.36元"
        },
        {
            "name": "无人生还",
            "score": 8.9,
            "quote": "童谣杀人案",
            "coverUrl": "https://img3.doubanio.com/view/subject/m/public/s2962510.jpg",
            "writer": "[英] 阿加莎・克里斯蒂 ",
            "judgements": 41220,
            "publicHouse": " 人民文学出版社 ",
            "price": " 19.00"
        },
        {
            "name": "爱你就像爱生命",
            "score": 8.8,
            "quote": "王小波与李银河的两地书",
            "coverUrl": "https://img3.doubanio.com/view/subject/m/public/s4661043.jpg",
            "writer": "[中] 王小波 ",
            "judgements": 41451,
            "publicHouse": " 上海锦绣文章出版社 ",
            "price": " 18.00元"
        },
        {
            "name": "红玫瑰与白玫瑰",
            "score": 8.4,
            "quote": "蚊子血还是饭黏子？",
            "coverUrl": "https://img3.doubanio.com/view/subject/m/public/s3695882.jpg",
            "writer": "[中] 张爱玲 ",
            "judgements": 43914,
            "publicHouse": " 花城出版社 ",
            "price": " 12.80元"
        },
        {
            "name": "巨人的陨落",
            "score": 8.9,
            "quote": "五个家族，一场战争",
            "coverUrl": "https://img3.doubanio.com/view/subject/m/public/s28668834.jpg",
            "writer": "[英] 肯·福莱特 ",
            "judgements": 40450,
            "publicHouse": " 江苏凤凰文艺出版社 ",
            "price": " 129.80元"
        },
        {
            "name": "了不起的盖茨比",
            "score": 8.3,
            "quote": "梦，就像黛西家的那一缕绿光",
            "coverUrl": "https://img3.doubanio.com/view/subject/m/public/s1005875.jpg",
            "writer": "[中] 菲茨杰拉德 ",
            "judgements": 43492,
            "publicHouse": " 人民文学出版社 ",
            "price": " 12.00元"
        },
        {
            "name": "华胥引（全二册）",
            "score": 8.4,
            "quote": "现实不如梦中的圆满",
            "coverUrl": "https://img3.doubanio.com/view/subject/m/public/s4599550.jpg",
            "writer": "[中] 唐七公子 ",
            "judgements": 42510,
            "publicHouse": " 现代出版社 ",
            "price": " 39.80元"
        },
        {
            "name": "乌合之众",
            "score": 8.3,
            "quote": "群氓心理剖析",
            "coverUrl": "https://img3.doubanio.com/view/subject/m/public/s1988393.jpg",
            "writer": "[中] （法）勒庞 ",
            "judgements": 43605,
            "publicHouse": " 中央编译出版社 ",
            "price": " 16.00元"
        },
        {
            "name": "动物农场",
            "score": 9.2,
            "quote": "太阳底下并无新事",
            "coverUrl": "https://img3.doubanio.com/view/subject/m/public/s2347590.jpg",
            "writer": "[英] 乔治·奥威尔 ",
            "judgements": 38203,
            "publicHouse": " 上海译文出版社 ",
            "price": " 10.00元"
        },
        {
            "name": "鬼吹灯之精绝古城",
            "score": 8.1,
            "quote": "盗墓祖师名不虚传",
            "coverUrl": "https://img3.doubanio.com/view/subject/m/public/s6048082.jpg",
            "writer": "[中] 天下霸唱 ",
            "judgements": 43086,
            "publicHouse": " 安徽文艺出版社 ",
            "price": " 25.0"
        },
        {
            "name": "安徒生童话故事集",
            "score": 9.2,
            "quote": "远不是童话那么简单",
            "coverUrl": "https://img3.doubanio.com/view/subject/m/public/s1034062.jpg",
            "writer": "[中] （丹麦）安徒生 ",
            "judgements": 37991,
            "publicHouse": " 人民文学出版社 ",
            "price": " 25.00"
        },
        {
            "name": "半生缘",
            "score": 8.6,
            "quote": "世钧，我们回不去了",
            "coverUrl": "https://img1.doubanio.com/view/subject/m/public/s2838737.jpg",
            "writer": "[中] 张爱玲 ",
            "judgements": 40135,
            "publicHouse": " 北京十月文艺出版社 ",
            "price": " 28.00元"
        },
        {
            "name": "地下铁",
            "score": 8.3,
            "quote": "黑暗世界中的点滴亮光",
            "coverUrl": "https://img3.doubanio.com/view/subject/m/public/s1672971.jpg",
            "writer": "[中] 幾米 ",
            "judgements": 40546,
            "publicHouse": " 辽宁教育出版社 ",
            "price": " 32.00元"
        },
        {
            "name": "骆驼祥子",
            "score": 8.3,
            "quote": "如骆驼喘息般深刻的绝望",
            "coverUrl": "https://img3.doubanio.com/view/subject/m/public/s1146040.jpg",
            "writer": "[中] 老舍 ",
            "judgements": 39873,
            "publicHouse": " 人民文学出版社 ",
            "price": " 12.00"
        },
        {
            "name": "射雕英雄传（全四册）",
            "score": 8.9,
            "quote": "侠之大者，为国为民",
            "coverUrl": "https://img3.doubanio.com/view/subject/m/public/s2157336.jpg",
            "writer": "[中] 金庸 ",
            "judgements": 35434,
            "publicHouse": " 生活·读书·新知三联书店 ",
            "price": " 47.00元"
        },
        {
            "name": "月亮忘記了",
            "score": 8.6,
            "quote": "月明星稀的晚上，看不见的，看见了",
            "coverUrl": "https://img1.doubanio.com/view/subject/m/public/s1385508.jpg",
            "writer": "[中] 幾米 ",
            "judgements": 36568,
            "publicHouse": " 格林 ",
            "price": " NT$ 299"
        },
        {
            "name": "此间的少年",
            "score": 8.4,
            "quote": "象牙塔里的金庸群侠",
            "coverUrl": "https://img1.doubanio.com/view/subject/m/public/s1068707.jpg",
            "writer": "[中] 江南 ",
            "judgements": 37111,
            "publicHouse": " 华文出版社 ",
            "price": " 25.00元"
        },
        {
            "name": "如何阅读一本书",
            "score": 8.4,
            "quote": "读书的方法论",
            "coverUrl": "https://img1.doubanio.com/view/subject/m/public/s1670978.jpg",
            "writer": "[美] 莫提默·J. 艾德勒 ",
            "judgements": 36999,
            "publicHouse": " 商务印书馆 ",
            "price": " 38.00元"
        },
        {
            "name": "孤独六讲",
            "score": 8.1,
            "quote": "作为一种美学的孤独",
            "coverUrl": "https://img3.doubanio.com/view/subject/m/public/s4075572.jpg",
            "writer": "[中] 蒋勋 ",
            "judgements": 38539,
            "publicHouse": " 广西师范大学出版社 ",
            "price": " 36.00元"
        },
        {
            "name": "一個人住第5年",
            "score": 8.4,
            "quote": "独居生活之乐",
            "coverUrl": "https://img3.doubanio.com/view/subject/m/public/s7059163.jpg",
            "writer": "[中] 高木直子 ",
            "judgements": 35814,
            "publicHouse": " 大田 ",
            "price": " NT$220"
        },
        {
            "name": "步步惊心",
            "score": 8.1,
            "quote": "现世太苦，不如穿越回去从头来过",
            "coverUrl": "https://img3.doubanio.com/view/subject/m/public/s1681146.jpg",
            "writer": "[中] 桐华 ",
            "judgements": 36766,
            "publicHouse": " 民族出版社 ",
            "price": " 25.00元"
        },
        {
            "name": "一个人的朝圣",
            "score": 8.1,
            "quote": "关于爱和信念的旅行",
            "coverUrl": "https://img3.doubanio.com/view/subject/m/public/s26936721.jpg",
            "writer": "[中] 【英】蕾秋·乔伊斯 ",
            "judgements": 37022,
            "publicHouse": " 北京联合出版公司 ",
            "price": " 32.80"
        },
        {
            "name": "常识",
            "score": 8.1,
            "quote": "献给这个常识稀缺的时代",
            "coverUrl": "https://img3.doubanio.com/view/subject/m/public/s3588323.jpg",
            "writer": "[中] 梁文道 ",
            "judgements": 36667,
            "publicHouse": " 广西师范大学出版社 ",
            "price": " 38.00"
        },
        {
            "name": "阿Q正传",
            "score": 8.7,
            "quote": "哀其不幸，怒其不争",
            "coverUrl": "https://img3.doubanio.com/view/subject/m/public/s1074811.jpg",
            "writer": "[中] 鲁迅 ",
            "judgements": 33919,
            "publicHouse": " 上海书店出版社 ",
            "price": " 14.50元"
        },
        {
            "name": "寻路中国",
            "score": 9,
            "quote": "中国在路上，非虚构写作所能达到的高度",
            "coverUrl": "https://img1.doubanio.com/view/subject/m/public/s4575849.jpg",
            "writer": "[美] 彼得·海斯勒 ",
            "judgements": 32449,
            "publicHouse": " 上海译文出版社 ",
            "price": " 33.00元"
        },
        {
            "name": "时间旅行者的妻子",
            "score": 8.1,
            "quote": "在时间的缝隙中穿行，然后相遇",
            "coverUrl": "https://img3.doubanio.com/view/subject/m/public/s2375756.jpg",
            "writer": "[美] 奥德丽·尼芬格 ",
            "judgements": 36260,
            "publicHouse": " 人民文学出版社 ",
            "price": " 29.90元"
        },
        {
            "name": "荆棘鸟",
            "score": 8.6,
            "quote": "澳洲乱世情",
            "coverUrl": "https://img3.doubanio.com/view/subject/m/public/s2781615.jpg",
            "writer": "[澳] 考琳·麦卡洛 ",
            "judgements": 33463,
            "publicHouse": " 译林出版社 ",
            "price": " 28.00元"
        },
        {
            "name": "刀锋",
            "score": 9,
            "quote": "一把刀的锋刃不容易越过；因此智者说得救之道是困难的",
            "coverUrl": "https://img3.doubanio.com/view/subject/m/public/s2347562.jpg",
            "writer": "[英]毛姆 ",
            "judgements": 31878,
            "publicHouse": " 上海译文出版社 ",
            "price": " 18.00元"
        },
        {
            "name": "哭泣的骆驼",
            "score": 8.9,
            "quote": "沙漠中寻常的生与死",
            "coverUrl": "https://img3.doubanio.com/view/subject/m/public/s1020454.jpg",
            "writer": "[中] 三毛 ",
            "judgements": 31703,
            "publicHouse": " 哈尔滨出版社 ",
            "price": " 15.80元"
        },
        {
            "name": "孩子你慢慢来",
            "score": 8.8,
            "quote": "我们现在怎样做母亲",
            "coverUrl": "https://img3.doubanio.com/view/subject/m/public/s4124434.jpg",
            "writer": "[中] 龙应台 ",
            "judgements": 32380,
            "publicHouse": " 生活·读书·新知三联书店 ",
            "price": " 28.00元"
        },
        {
            "name": "一只特立独行的猪",
            "score": 8.8,
            "quote": "生活就是个缓慢受锤的过程，至少还可以特立独行",
            "coverUrl": "https://img3.doubanio.com/view/subject/m/public/s1670642.jpg",
            "writer": "[中] 王小波 ",
            "judgements": 32385,
            "publicHouse": " 北方文艺出版社 ",
            "price": " 18.80元"
        },
        {
            "name": "失恋33天",
            "score": 8.1,
            "quote": "失恋是一种病，痊愈之后百毒不侵",
            "coverUrl": "https://img3.doubanio.com/view/subject/m/public/s6980516.jpg",
            "writer": "[中] 鲍鲸鲸 ",
            "judgements": 34633,
            "publicHouse": " 中信出版社 ",
            "price": " 25.00元"
        },
        {
            "name": "你好，旧时光（上 下）",
            "score": 8.8,
            "quote": "原作名切题",
            "coverUrl": "https://img1.doubanio.com/view/subject/m/public/s4293097.jpg",
            "writer": "[中] 八月长安 ",
            "judgements": 31082,
            "publicHouse": " 新世界出版社 ",
            "price": " 39.80元"
        },
        {
            "name": "梦里花落知多少",
            "score": 8.9,
            "quote": "哀而不伤",
            "coverUrl": "https://img3.doubanio.com/view/subject/m/public/s2393243.jpg",
            "writer": "[中] 三毛 ",
            "judgements": 31326,
            "publicHouse": " 北京十月文艺出版社 ",
            "price": " 28.00元"
        },
        {
            "name": "格林童话全集",
            "score": 8.9,
            "quote": "许多隐晦",
            "coverUrl": "https://img3.doubanio.com/view/subject/m/public/s1134341.jpg",
            "writer": "[中] 格林兄弟 ",
            "judgements": 30687,
            "publicHouse": " 人民文学出版社 ",
            "price": " 21.45元"
        },
        {
            "name": "尘埃落定",
            "score": 8.4,
            "quote": "一个傻子的土司家族传奇",
            "coverUrl": "https://img3.doubanio.com/view/subject/m/public/s9140762.jpg",
            "writer": "[中] 阿来 ",
            "judgements": 32646,
            "publicHouse": " 人民文学出版社 ",
            "price": " 22.0"
        },
        {
            "name": "麦琪的礼物",
            "score": 8.6,
            "quote": "日常的奇迹",
            "coverUrl": "https://img3.doubanio.com/view/subject/m/public/s1137441.jpg",
            "writer": "[美] 欧·亨利 ",
            "judgements": 31885,
            "publicHouse": " 上海社会科学院出版社 ",
            "price": " 25.00元"
        },
        {
            "name": "那些回不去的年少时光",
            "score": 8.5,
            "quote": "所有你曾热爱却正在遗忘的人和事",
            "coverUrl": "https://img3.doubanio.com/view/subject/m/public/s4130990.jpg",
            "writer": "[中] 桐华 ",
            "judgements": 31342,
            "publicHouse": " 江苏文艺出版社 ",
            "price": " 23.80元"
        },
        {
            "name": "金锁记",
            "score": 8.5,
            "quote": "曹七巧就像希克厉，一个扭曲的英雄",
            "coverUrl": "https://img3.doubanio.com/view/subject/m/public/s2976745.jpg",
            "writer": "[中] 张爱玲 ",
            "judgements": 31770,
            "publicHouse": " 哈尔滨出版社 ",
            "price": " 13.5元"
        },
        {
            "name": "房思琪的初恋乐园",
            "score": 9.2,
            "quote": "以血书写的文学",
            "coverUrl": "https://img3.doubanio.com/view/subject/m/public/s29651121.jpg",
            "writer": "[中] 林奕含 ",
            "judgements": 29491,
            "publicHouse": " 北京联合出版公司 ",
            "price": " 45.00元"
        },
        {
            "name": "海贼王",
            "score": 9.5,
            "quote": "热血，梦想，希望",
            "coverUrl": "https://img1.doubanio.com/view/subject/m/public/s1492518.jpg",
            "writer": "[中] 尾田荣一郎 ",
            "judgements": 27570,
            "publicHouse": " 浙江人民美术出版社 ",
            "price": " 7.50元"
        },
        {
            "name": "历史深处的忧虑",
            "score": 9,
            "quote": "窥见美国社会的一扇窗",
            "coverUrl": "https://img3.doubanio.com/view/subject/m/public/s1768916.jpg",
            "writer": "[中] 林达 ",
            "judgements": 29355,
            "publicHouse": " 生活·读书·新知三联书店 ",
            "price": " 19.00元"
        },
        {
            "name": "城南旧事",
            "score": 8.9,
            "quote": "长亭外，古道边，芳草碧连天",
            "coverUrl": "https://img1.doubanio.com/view/subject/m/public/s2654869.jpg",
            "writer": "[中] 林海音 文 ",
            "judgements": 29394,
            "publicHouse": " 中国青年出版社 ",
            "price": " 16.00元"
        },
        {
            "name": "鹿鼎记（全五册）",
            "score": 8.8,
            "quote": "武侠的解构，流氓的狂欢",
            "coverUrl": "https://img3.doubanio.com/view/subject/m/public/s3134040.jpg",
            "writer": "[中] 金庸 ",
            "judgements": 29384,
            "publicHouse": " 广州出版社 花城出版社 ",
            "price": " 108.00元"
        },
        {
            "name": "悲惨世界（上中下）",
            "score": 8.9,
            "quote": "现实主义与浪漫主义的至高杰作",
            "coverUrl": "https://img3.doubanio.com/view/subject/m/public/s1148102.jpg",
            "writer": "[法] 雨果 ",
            "judgements": 28815,
            "publicHouse": " 人民文学出版社 ",
            "price": " 66.00元"
        },
        {
            "name": "大地之灯",
            "score": 8.2,
            "quote": "两代人的成长与救赎",
            "coverUrl": "https://img3.doubanio.com/view/subject/m/public/s1994710.jpg",
            "writer": "[中] 七堇年 ",
            "judgements": 31599,
            "publicHouse": " 长江文艺出版社 ",
            "price": " 22.00元"
        },
        {
            "name": "我不喜欢这世界，我只喜欢你",
            "score": 8,
            "quote": "一想到能和你共度余生，我就对余生充满期待",
            "coverUrl": "https://img1.doubanio.com/view/subject/m/public/s28342099.jpg",
            "writer": "[中] 乔一 ",
            "judgements": 30447,
            "publicHouse": " 湖南少年儿童出版社 ",
            "price": " 29.80元"
        },
        {
            "name": "史蒂夫·乔布斯传",
            "score": 8.7,
            "quote": "完美主义者的最高形态",
            "coverUrl": "https://img3.doubanio.com/view/subject/m/public/s6974202.jpg",
            "writer": "[美] 沃尔特·艾萨克森 ",
            "judgements": 29421,
            "publicHouse": " 中信出版社 ",
            "price": " 68.00元"
        },
        {
            "name": "球状闪电",
            "score": 8.7,
            "quote": "量子之外，没有真相",
            "coverUrl": "https://img3.doubanio.com/view/subject/m/public/s26040205.jpg",
            "writer": "[中] 刘慈欣 ",
            "judgements": 29545,
            "publicHouse": " 四川科学技术出版社 ",
            "price": " 22.00元"
        },
        {
            "name": "菊与刀",
            "score": 8.2,
            "quote": "复杂矛盾的日本民族",
            "coverUrl": "https://img3.doubanio.com/view/subject/m/public/s1074166.jpg",
            "writer": "[中] （美）鲁思・本尼迪克特 ",
            "judgements": 31804,
            "publicHouse": " 商务印书馆 ",
            "price": " 16.00"
        },
        {
            "name": "东霓",
            "score": 8.1,
            "quote": "自毁而偏执的东霓",
            "coverUrl": "https://img3.doubanio.com/view/subject/m/public/s4397380.jpg",
            "writer": "[中] 笛安 ",
            "judgements": 31421,
            "publicHouse": " 长江文艺出版社 ",
            "price": " 26.80元"
        },
        {
            "name": "长恨歌",
            "score": 8.2,
            "quote": "现代上海史诗",
            "coverUrl": "https://img3.doubanio.com/view/subject/m/public/s3018752.jpg",
            "writer": "[中] 王安忆 ",
            "judgements": 31260,
            "publicHouse": " 南海出版公司 ",
            "price": " 22.00元"
        },
        {
            "name": "你一定爱读的极简欧洲史",
            "score": 8.3,
            "quote": "欧洲，为什么老是抢第一？",
            "coverUrl": "https://img3.doubanio.com/view/subject/m/public/s4542951.jpg",
            "writer": "[中] 约翰·赫斯特（John Hirst） ",
            "judgements": 30459,
            "publicHouse": " 广西师范大学出版社 ",
            "price": " 25.00元"
        },
        {
            "name": "看不见的城市",
            "score": 8.8,
            "quote": "每一座城市都只在想象中耸立，又在描述中坍圮",
            "coverUrl": "https://img3.doubanio.com/view/subject/m/public/s1804710.jpg",
            "writer": "[意大利]伊塔洛·卡尔维诺 ",
            "judgements": 27865,
            "publicHouse": " 译林出版社 ",
            "price": " 16.00元"
        },
        {
            "name": "香水",
            "score": 8.5,
            "quote": "恋味癖谋杀案",
            "coverUrl": "https://img1.doubanio.com/view/subject/m/public/s1556748.jpg",
            "writer": "[德] 帕·聚斯金德 ",
            "judgements": 28736,
            "publicHouse": " 上海译文出版社 ",
            "price": " 20.00元"
        },
        {
            "name": "橙",
            "score": 8.2,
            "quote": "定做一个刻着“不过如此”的章，盖在封面上",
            "coverUrl": "https://img3.doubanio.com/view/subject/m/public/s4512594.jpg",
            "writer": "[中] 安东尼 ",
            "judgements": 29175,
            "publicHouse": " 长江文艺出版社 ",
            "price": " 28.80元"
        },
        {
            "name": "一九八四·动物农场",
            "score": 9.3,
            "quote": "一个预言和一个寓言，令人窒息的政治恐怖",
            "coverUrl": "https://img3.doubanio.com/view/subject/m/public/s1089916.jpg",
            "writer": "[英] 乔治·奥威尔 ",
            "judgements": 25902,
            "publicHouse": " 上海译文出版社 ",
            "price": " 23.00元"
        },
        {
            "name": "飞鸟集",
            "score": 8.8,
            "quote": "淡泊，超脱",
            "coverUrl": "https://img3.doubanio.com/view/subject/m/public/s1044902.jpg",
            "writer": "[印] 罗宾德拉纳德·泰戈尔 ",
            "judgements": 27363,
            "publicHouse": " 哈尔滨出版社 ",
            "price": " 16.80元"
        },
        {
            "name": "查令十字街84号",
            "score": 8.3,
            "quote": "文艺青年的爱情地标",
            "coverUrl": "https://img3.doubanio.com/view/subject/m/public/s1326174.jpg",
            "writer": "[美] 海莲·汉芙 ",
            "judgements": 29092,
            "publicHouse": " 译林出版社 ",
            "price": " 18.00元"
        },
        {
            "name": "匆匆那年（上下）",
            "score": 8.3,
            "quote": "不悔梦归处 只恨太匆匆",
            "coverUrl": "https://img3.doubanio.com/view/subject/m/public/s2892553.jpg",
            "writer": "[中] 九夜茴 ",
            "judgements": 28505,
            "publicHouse": " 东方出版社 ",
            "price": " 29.00"
        },
        {
            "name": "往事并不如烟",
            "score": 8.6,
            "quote": "知识分子的命运浮沉",
            "coverUrl": "https://img1.doubanio.com/view/subject/m/public/s1108667.jpg",
            "writer": "[中] 章诒和 ",
            "judgements": 27249,
            "publicHouse": " 人民文学出版社 ",
            "price": " 35.00元"
        },
        {
            "name": "伊豆的舞女",
            "score": 8.2,
            "quote": "静美又残酷，无限柔软的川端",
            "coverUrl": "https://img3.doubanio.com/view/subject/m/public/s1056010.jpg",
            "writer": "[日] 川端康成 ",
            "judgements": 29014,
            "publicHouse": " 广西师范大学出版社 ",
            "price": " 23.80元"
        },
        {
            "name": "江城",
            "score": 9,
            "quote": "外国人的寻路中国",
            "coverUrl": "https://img3.doubanio.com/view/subject/m/public/s7019913.jpg",
            "writer": "[美] 彼得·海斯勒 ",
            "judgements": 25839,
            "publicHouse": " 上海译文出版社 ",
            "price": " 36.00元"
        },
        {
            "name": "世界尽头与冷酷仙境",
            "score": 8.6,
            "quote": "交叉平行蒙太奇",
            "coverUrl": "https://img1.doubanio.com/view/subject/m/public/s1801057.jpg",
            "writer": "[日] 村上春树 ",
            "judgements": 27407,
            "publicHouse": " 上海译文出版社 ",
            "price": " 23.00元"
        },
        {
            "name": "把时间当作朋友",
            "score": 8.5,
            "quote": "反成功学的成功学",
            "coverUrl": "https://img3.doubanio.com/view/subject/m/public/s3778613.jpg",
            "writer": "[中] 李笑来 ",
            "judgements": 27660,
            "publicHouse": " 电子工业出版社 ",
            "price": " 32.00元"
        },
        {
            "name": "富爸爸，穷爸爸",
            "score": 8.2,
            "quote": "人穷穷观念，人富钱生钱",
            "coverUrl": "https://img3.doubanio.com/view/subject/m/public/s1429010.jpg",
            "writer": "[中] （美）罗伯特・T・清崎 ",
            "judgements": 28207,
            "publicHouse": " 世界图书出版公司 ",
            "price": " 18.80"
        },
        {
            "name": "影响力",
            "score": 8.6,
            "quote": "营销防骗指南",
            "coverUrl": "https://img3.doubanio.com/view/subject/m/public/s1657785.jpg",
            "writer": "[美] 罗伯特·西奥迪尼 ",
            "judgements": 26919,
            "publicHouse": " 中国人民大学出版社 ",
            "price": " 45.00元"
        },
        {
            "name": "倚天屠龙记(共四册)",
            "score": 8.5,
            "quote": "不识张郎是张郎",
            "coverUrl": "https://img1.doubanio.com/view/subject/m/public/s1829709.jpg",
            "writer": "[中] 金庸 ",
            "judgements": 27152,
            "publicHouse": " 三联书店 ",
            "price": " 0"
        },
        {
            "name": "中国历代政治得失",
            "score": 9.1,
            "quote": "一部简明的“中国政治制度史”",
            "coverUrl": "https://img3.doubanio.com/view/subject/m/public/s1319205.jpg",
            "writer": "[中] 钱穆 ",
            "judgements": 25182,
            "publicHouse": " 生活·读书·新知三联书店 ",
            "price": " 12.00元"
        },
        {
            "name": "冰与火之歌（卷一）",
            "score": 9.3,
            "quote": "凛冬将至。无比宏大的世界观",
            "coverUrl": "https://img3.doubanio.com/view/subject/m/public/s1358984.jpg",
            "writer": "[美] 乔治·R. R. 马丁 ",
            "judgements": 24486,
            "publicHouse": " 重庆出版社 ",
            "price": " 68.00元"
        },
        {
            "name": "七夜雪",
            "score": 8.4,
            "quote": "抵不过时间",
            "coverUrl": "https://img1.doubanio.com/view/subject/m/public/s3007857.jpg",
            "writer": "[中] 沧月 ",
            "judgements": 26656,
            "publicHouse": " 北京十月文艺出版社 ",
            "price": " 25.00元"
        },
        {
            "name": "那些年，我们一起追的女孩",
            "score": 8.2,
            "quote": "那些年错过的大雨",
            "coverUrl": "https://img3.doubanio.com/view/subject/m/public/s1982025.jpg",
            "writer": "[中] 九把刀 ",
            "judgements": 27445,
            "publicHouse": " 花山文艺出版社 ",
            "price": " 20.00元"
        },
        {
            "name": "朝花夕拾",
            "score": 8.7,
            "quote": "鲁迅的旧事重提",
            "coverUrl": "https://img3.doubanio.com/view/subject/m/public/s2875823.jpg",
            "writer": "[中] 鲁迅 ",
            "judgements": 25912,
            "publicHouse": " 人民文学出版社 ",
            "price": " 0.25元"
        },
        {
            "name": "ZOO",
            "score": 8.6,
            "quote": "噩梦中的一丝温度",
            "coverUrl": "https://img1.doubanio.com/view/subject/m/public/s2756239.jpg",
            "writer": "[日] 乙一 ",
            "judgements": 26011,
            "publicHouse": " 当代世界出版社 ",
            "price": " 20.00元"
        },
        {
            "name": "红与黑",
            "score": 8.2,
            "quote": "阴谋与爱情",
            "coverUrl": "https://img3.doubanio.com/view/subject/m/public/s1988674.jpg",
            "writer": "[中] 司汤达 ",
            "judgements": 27683,
            "publicHouse": " 译林出版社 ",
            "price": " 20.00"
        },
        {
            "name": "蔷薇岛屿",
            "score": 8,
            "quote": "你们不会彼此遗忘。只会彼此消失",
            "coverUrl": "https://img3.doubanio.com/view/subject/m/public/s3237601.jpg",
            "writer": "[中] 安妮宝贝 ",
            "judgements": 28111,
            "publicHouse": " 作家出版社 ",
            "price": " 18.00元"
        },
        {
            "name": "阿狸·梦之城堡",
            "score": 9,
            "quote": "治愈",
            "coverUrl": "https://img3.doubanio.com/view/subject/m/public/s3721175.jpg",
            "writer": "[中] hans ",
            "judgements": 24506,
            "publicHouse": " 上海锦绣文章出版社 ",
            "price": " 36.80元"
        },
        {
            "name": "时间简史",
            "score": 8.8,
            "quote": "霍金与上帝的战争",
            "coverUrl": "https://img3.doubanio.com/view/subject/m/public/s1914861.jpg",
            "writer": "[英] 史蒂芬·霍金 ",
            "judgements": 25092,
            "publicHouse": " 湖南科学技术出版社 ",
            "price": " 45.00元"
        },
        {
            "name": "天使与魔鬼",
            "score": 8.2,
            "quote": "科学与宗教的大乱斗",
            "coverUrl": "https://img3.doubanio.com/view/subject/m/public/s1914485.jpg",
            "writer": "[美] 丹.布朗 ",
            "judgements": 26985,
            "publicHouse": " 人民文学出版社 ",
            "price": " 29.80元"
        },
        {
            "name": "水浒传（全二册）",
            "score": 8.5,
            "quote": "风风火火闯九州",
            "coverUrl": "https://img3.doubanio.com/view/subject/m/public/s1147854.jpg",
            "writer": "[明] 施耐庵 ",
            "judgements": 25378,
            "publicHouse": " 人民文学出版社 ",
            "price": " 50.60元"
        },
        {
            "name": "最初的爱情 最后的仪式",
            "score": 8,
            "quote": "别被封面骗了",
            "coverUrl": "https://img3.doubanio.com/view/subject/m/public/s3979661.jpg",
            "writer": "[英] 伊恩·麦克尤恩 ",
            "judgements": 27251,
            "publicHouse": " 南京大学出版社 ",
            "price": " 22.00元"
        },
        {
            "name": "杀死一只知更鸟",
            "score": 9.2,
            "quote": "有一种东西不能遵循从众原则，那就是——人的良心",
            "coverUrl": "https://img3.doubanio.com/view/subject/m/public/s23128183.jpg",
            "writer": "[美] 哈珀·李 ",
            "judgements": 23232,
            "publicHouse": " 译林出版社 ",
            "price": " 32.00元"
        },
        {
            "name": "陆犯焉识",
            "score": 8.8,
            "quote": "翻手为苍凉，覆手为繁华",
            "coverUrl": "https://img3.doubanio.com/view/subject/m/public/s6987353.jpg",
            "writer": "[中] 严歌苓 ",
            "judgements": 24062,
            "publicHouse": " 作家出版社 ",
            "price": " 35.00元"
        },
        {
            "name": "国境以南 太阳以西",
            "score": 8.3,
            "quote": "灾星下出生的恋人们",
            "coverUrl": "https://img3.doubanio.com/view/subject/m/public/s2333463.jpg",
            "writer": "[日] 村上春树 ",
            "judgements": 25797,
            "publicHouse": " 上海译文出版社 ",
            "price": " 13.50元"
        },
        {
            "name": "佛祖在一号线",
            "score": 8.2,
            "quote": "嬉笑怒骂的常识分子",
            "coverUrl": "https://img1.doubanio.com/view/subject/m/public/s4397779.jpg",
            "writer": "[中] 李海鹏 ",
            "judgements": 25761,
            "publicHouse": " 文化艺术出版社 ",
            "price": " 25.00元"
        },
        {
            "name": "最好的我们",
            "score": 8.8,
            "quote": "耿耿余淮",
            "coverUrl": "https://img3.doubanio.com/view/subject/m/public/s26720726.jpg",
            "writer": "[中] 八月长安 ",
            "judgements": 23294,
            "publicHouse": " 湖南文艺出版社 ",
            "price": " 55"
        },
        {
            "name": "西游记（全二册）",
            "score": 8.8,
            "quote": "取经之路就在脚下",
            "coverUrl": "https://img3.doubanio.com/view/subject/m/public/s1627374.jpg",
            "writer": "[中] 吴承恩 ",
            "judgements": 23767,
            "publicHouse": " 人民文学出版社 ",
            "price": " 47.20元"
        },
        {
            "name": "雷雨",
            "score": 8.5,
            "quote": "人的心都靠不住，我并不是说人坏，我就是恨人性太弱，太容易变了",
            "coverUrl": "https://img1.doubanio.com/view/subject/m/public/s23579217.jpg",
            "writer": "[中] 曹禺 ",
            "judgements": 24743,
            "publicHouse": " 人民文学出版社 ",
            "price": " 9.20"
        },
        {
            "name": "瓦尔登湖",
            "score": 8.4,
            "quote": "另一种生活",
            "coverUrl": "https://img1.doubanio.com/view/subject/m/public/s1999119.jpg",
            "writer": "[美] 梭罗 ",
            "judgements": 24903,
            "publicHouse": " 上海译文出版社 ",
            "price": " 11.00元"
        },
        {
            "name": "生活在别处",
            "score": 8.4,
            "quote": "此处的生活唯有残酷",
            "coverUrl": "https://img3.doubanio.com/view/subject/m/public/s1069535.jpg",
            "writer": "[捷克] 米兰·昆德拉 ",
            "judgements": 25046,
            "publicHouse": " 上海译文出版社 ",
            "price": " 25.00元"
        },
        {
            "name": "自控力",
            "score": 8.3,
            "quote": "要么瘦，要么死",
            "coverUrl": "https://img3.doubanio.com/view/subject/m/public/s10685385.jpg",
            "writer": "[美]  凯利·麦格尼格尔 ",
            "judgements": 24795,
            "publicHouse": " 文化发展出版社(原印刷工业出版社) ",
            "price": " 39.80元"
        },
        {
            "name": "心是孤独的猎手",
            "score": 8.5,
            "quote": "镇上有两个哑巴，他们总是在一起。",
            "coverUrl": "https://img1.doubanio.com/view/subject/m/public/s1436379.jpg",
            "writer": "[美] 卡森·麦卡勒斯 ",
            "judgements": 24009,
            "publicHouse": " 上海三联书店 ",
            "price": " 25.00元"
        },
        {
            "name": "京华烟云",
            "score": 8.5,
            "quote": "林语堂的《红楼梦》",
            "coverUrl": "https://img1.doubanio.com/view/subject/m/public/s1395779.jpg",
            "writer": "[中] 林语堂 ",
            "judgements": 23959,
            "publicHouse": " 陕西师范大学出版社 ",
            "price": " 43.00元"
        },
        {
            "name": "设计中的设计",
            "score": 8.6,
            "quote": "日常生活的无限可能性",
            "coverUrl": "https://img3.doubanio.com/view/subject/m/public/s2165932.jpg",
            "writer": "[日] 原研哉 ",
            "judgements": 23408,
            "publicHouse": " 山东人民出版社 ",
            "price": " 48.00元"
        },
        {
            "name": "夏洛的网",
            "score": 8.5,
            "quote": "猪与蜘蛛",
            "coverUrl": "https://img1.doubanio.com/view/subject/m/public/s1120437.jpg",
            "writer": "[美] E.B.怀特 ",
            "judgements": 23458,
            "publicHouse": " 上海译文出版社 ",
            "price": " 17.00元"
        },
        {
            "name": "我执",
            "score": 8,
            "quote": "梁文道的私密日记",
            "coverUrl": "https://img1.doubanio.com/view/subject/m/public/s3705488.jpg",
            "writer": "[中] 梁文道 ",
            "judgements": 25177,
            "publicHouse": " 广西师范大学出版社 ",
            "price": " 35.00元"
        },
        {
            "name": "狂人日记",
            "score": 8.7,
            "quote": "中国现代文学史上第一篇真正的现代白话小说",
            "coverUrl": "https://img1.doubanio.com/view/subject/m/public/s1426308.jpg",
            "writer": "[中] 鲁迅 ",
            "judgements": 23045,
            "publicHouse": " 京华出版社 ",
            "price": " 39.80元"
        },
        {
            "name": "变形记",
            "score": 8.4,
            "quote": "格里高里清早醒来发现自己变成了甲虫",
            "coverUrl": "https://img3.doubanio.com/view/subject/m/public/s26042134.jpg",
            "writer": "[奥] 卡夫卡 ",
            "judgements": 23898,
            "publicHouse": " 浙江文艺出版社 ",
            "price": " 16.00元"
        },
        {
            "name": "偷书贼",
            "score": 8,
            "quote": "不能说偷，是窃，窃你懂吗",
            "coverUrl": "https://img3.doubanio.com/view/subject/m/public/s2686452.jpg",
            "writer": "[澳] 马克斯·苏萨克 ",
            "judgements": 24760,
            "publicHouse": " 南海出版公司 ",
            "price": " 25.00元"
        },
        {
            "name": "没有色彩的多崎作和他的巡礼之年",
            "score": 8.2,
            "quote": "并不是一切都消失在了时间的长河里",
            "coverUrl": "https://img3.doubanio.com/view/subject/m/public/s27094300.jpg",
            "writer": "[日] 村上春树 ",
            "judgements": 23963,
            "publicHouse": " 南海出版公司 ",
            "price": " 39.50元"
        },
        {
            "name": "海底两万里",
            "score": 8.4,
            "quote": "你听说过鹦鹉螺号吗？",
            "coverUrl": "https://img3.doubanio.com/view/subject/m/public/s1817666.jpg",
            "writer": "[法国] 儒尔·凡尔纳 ",
            "judgements": 23669,
            "publicHouse": " 译林出版社 ",
            "price": " 19.50元"
        },
        {
            "name": "激荡三十年（上）",
            "score": 8.8,
            "quote": "这是一个最好的时代，也是一个最坏的时代",
            "coverUrl": "https://img3.doubanio.com/view/subject/m/public/s10431840.jpg",
            "writer": "[中] 吴晓波 ",
            "judgements": 21903,
            "publicHouse": " 中信出版社 浙江人民出版社 ",
            "price": " 35.00"
        },
        {
            "name": "文学回忆录（全2册）",
            "score": 9.2,
            "quote": "木心留给世界的礼物",
            "coverUrl": "https://img1.doubanio.com/view/subject/m/public/s24611679.jpg",
            "writer": "[中] 木心 口述 ",
            "judgements": 20741,
            "publicHouse": " 广西师范大学出版社 ",
            "price": " 98.00元"
        },
        {
            "name": "人性的弱点全集",
            "score": 8.3,
            "quote": "西方世界最持久的人文畅销书",
            "coverUrl": "https://img3.doubanio.com/view/subject/m/public/s27266511.jpg",
            "writer": "[美] 戴尔·卡耐基 ",
            "judgements": 22832,
            "publicHouse": " 中国发展出版社 ",
            "price": " 25.00元"
        },
        {
            "name": "一句顶一万句",
            "score": 8.7,
            "quote": "一句胜过千年",
            "coverUrl": "https://img1.doubanio.com/view/subject/m/public/s6916838.jpg",
            "writer": "[中] 刘震云 ",
            "judgements": 21710,
            "publicHouse": " 长江文艺出版社 ",
            "price": " 29.80"
        },
        {
            "name": "九州·缥缈录",
            "score": 8.8,
            "quote": "乱世的英雄史诗",
            "coverUrl": "https://img1.doubanio.com/view/subject/m/public/s1520169.jpg",
            "writer": "[中] 江南 ",
            "judgements": 20879,
            "publicHouse": " 新世界出版社 ",
            "price": " 20.00元"
        },
        {
            "name": "你今天真好看",
            "score": 8.7,
            "quote": "呆萌可爱的动物段子手",
            "coverUrl": "https://img3.doubanio.com/view/subject/m/public/s28369176.jpg",
            "writer": "[美]莉兹•克里莫 ",
            "judgements": 21715,
            "publicHouse": " 周高逸 ",
            "price": "天津人民出版社 "
        },
        {
            "name": "呼兰河传",
            "score": 8.9,
            "quote": "萧红的童年往事",
            "coverUrl": "https://img3.doubanio.com/view/subject/m/public/s1167060.jpg",
            "writer": "[中] 萧红 ",
            "judgements": 21104,
            "publicHouse": " 百花文艺出版社 ",
            "price": " 19.00"
        },
        {
            "name": "尼罗河上的惨案",
            "score": 8.7,
            "quote": "阿婆代表作之一",
            "coverUrl": "https://img1.doubanio.com/view/subject/m/public/s1683067.jpg",
            "writer": "[英] 阿加莎·克里斯蒂 ",
            "judgements": 21383,
            "publicHouse": " 人民文学出版社 ",
            "price": " 22.00元"
        },
        {
            "name": "我与地坛",
            "score": 9,
            "quote": "这是你的罪孽与福祉",
            "coverUrl": "https://img1.doubanio.com/view/subject/m/public/s1151479.jpg",
            "writer": "[中] 史铁生 ",
            "judgements": 20158,
            "publicHouse": " 春风文艺出版社 ",
            "price": " 25.00元"
        },
        {
            "name": "人生",
            "score": 8.4,
            "quote": "如果你是高加林，你要如何选择？",
            "coverUrl": "https://img3.doubanio.com/view/subject/m/public/s3847911.jpg",
            "writer": "[中] 路遥 ",
            "judgements": 21482,
            "publicHouse": " 北京十月文艺出版社 ",
            "price": " 20.00元"
        },
        {
            "name": "我的精神家园",
            "score": 9.1,
            "quote": "活过，爱过，写过",
            "coverUrl": "https://img3.doubanio.com/view/subject/m/public/s1016763.jpg",
            "writer": "[中] 王小波 ",
            "judgements": 19691,
            "publicHouse": " 文化艺术出版社 ",
            "price": " 18.80元"
        },
        {
            "name": "占星术杀人魔法",
            "score": 8.3,
            "quote": "一桩占星术连续杀人案件",
            "coverUrl": "https://img3.doubanio.com/view/subject/m/public/s3943801.jpg",
            "writer": "[日] 岛田庄司 ",
            "judgements": 21240,
            "publicHouse": " 新星出版社 ",
            "price": " 28.00"
        },
        {
            "name": "浮生六记",
            "score": 8.9,
            "quote": "",
            "coverUrl": "https://img3.doubanio.com/view/subject/m/public/s2280094.jpg",
            "writer": "[中] （清）沈复 ",
            "judgements": 20200,
            "publicHouse": " 1999",
            "price": " 5.70元"
        },
        {
            "name": "浪潮之巅",
            "score": 9.1,
            "quote": "了解IT领域的入门读物",
            "coverUrl": "https://img3.doubanio.com/view/subject/m/public/s6807265.jpg",
            "writer": "[中] 吴军 ",
            "judgements": 19385,
            "publicHouse": " 电子工业出版社 ",
            "price": " 55.00元"
        },
        {
            "name": "舞！舞！舞！",
            "score": 8.3,
            "quote": "深入村上春树的心灵腹地",
            "coverUrl": "https://img3.doubanio.com/view/subject/m/public/s1231290.jpg",
            "writer": "[日] 村上春树 ",
            "judgements": 21384,
            "publicHouse": " 上海译文出版社 ",
            "price": " 25.00元"
        },
        {
            "name": "野火集",
            "score": 8.8,
            "quote": "中国人你为什么不生气？",
            "coverUrl": "https://img1.doubanio.com/view/subject/m/public/s1469589.jpg",
            "writer": "[中] 龙应台 ",
            "judgements": 20032,
            "publicHouse": " 文汇出版社 ",
            "price": " 25.00元"
        },
        {
            "name": "妻妾成群",
            "score": 8.2,
            "quote": "",
            "coverUrl": "https://img3.doubanio.com/view/subject/m/public/s6478105.jpg",
            "writer": "[中] 苏童 ",
            "judgements": 21646,
            "publicHouse": " 上海文艺出版社 ",
            "price": " 23.00元"
        },
        {
            "name": "高效能人士的七个习惯（精华版）",
            "score": 8.2,
            "quote": "",
            "coverUrl": "https://img3.doubanio.com/view/subject/m/public/s1067863.jpg",
            "writer": "[美] 史蒂芬·柯维 ",
            "judgements": 20844,
            "publicHouse": " 中国青年出版社 ",
            "price": " 29.00元"
        },
        {
            "name": "海子的诗",
            "score": 8.9,
            "quote": "",
            "coverUrl": "https://img3.doubanio.com/view/subject/m/public/s1067491.jpg",
            "writer": "[中] 海子 ",
            "judgements": 18727,
            "publicHouse": " 人民文学出版社 ",
            "price": " 15.40"
        },
        {
            "name": "项链",
            "score": 8.3,
            "quote": "",
            "coverUrl": "https://img1.doubanio.com/view/subject/m/public/s1240228.jpg",
            "writer": "[法] 莫泊桑 ",
            "judgements": 20217,
            "publicHouse": " 河北教育出版社 ",
            "price": " 28.00元"
        },
        {
            "name": "教父",
            "score": 9,
            "quote": "",
            "coverUrl": "https://img1.doubanio.com/view/subject/m/public/s2832939.jpg",
            "writer": "[美]马里奥·普佐 ",
            "judgements": 18361,
            "publicHouse": " 译林出版社 ",
            "price": " 23.30元"
        },
        {
            "name": "娱乐至死",
            "score": 8.6,
            "quote": "",
            "coverUrl": "https://img3.doubanio.com/view/subject/m/public/s6776106.jpg",
            "writer": "[美] 尼尔·波兹曼 ",
            "judgements": 19341,
            "publicHouse": " 广西师范大学出版社 ",
            "price": " 29.80元"
        },
        {
            "name": "观念的水位",
            "score": 8.3,
            "quote": "",
            "coverUrl": "https://img3.doubanio.com/view/subject/m/public/s26846213.jpg",
            "writer": "[中] 刘瑜 ",
            "judgements": 19671,
            "publicHouse": " 浙江大学出版社 ",
            "price": " 36.00元"
        },
        {
            "name": "父与子全集",
            "score": 9.1,
            "quote": "",
            "coverUrl": "https://img1.doubanio.com/view/subject/m/public/s1094608.jpg",
            "writer": "[德] 埃·奥·卜劳恩 绘 ",
            "judgements": 17615,
            "publicHouse": " 中国工人出版社 ",
            "price": " 20.00元"
        },
        {
            "name": "动物凶猛",
            "score": 8.3,
            "quote": "",
            "coverUrl": "https://img1.doubanio.com/view/subject/m/public/s9853099.jpg",
            "writer": "[中] 王朔 ",
            "judgements": 19748,
            "publicHouse": " 中国电影出版社 ",
            "price": " 15.5"
        },
        {
            "name": "罗杰疑案",
            "score": 8.9,
            "quote": "",
            "coverUrl": "https://img1.doubanio.com/view/subject/m/public/s1772249.jpg",
            "writer": "[英] 阿加莎·克里斯蒂 ",
            "judgements": 18061,
            "publicHouse": " 人民文学出版社 ",
            "price": " 21.00元"
        },
        {
            "name": "中国大历史",
            "score": 8.3,
            "quote": "",
            "coverUrl": "https://img3.doubanio.com/view/subject/m/public/s2523433.jpg",
            "writer": "[中] 黄仁宇 ",
            "judgements": 19734,
            "publicHouse": " 生活·读书·新知三联书店 ",
            "price": " 19.00元"
        },
        {
            "name": "子不语1",
            "score": 9,
            "quote": "",
            "coverUrl": "https://img1.doubanio.com/view/subject/m/public/s4158947.jpg",
            "writer": "[中] 夏达 ",
            "judgements": 17685,
            "publicHouse": " 新世纪出版社 ",
            "price": " RMB36.00"
        },
        {
            "name": "寻羊冒险记",
            "score": 8.1,
            "quote": "",
            "coverUrl": "https://img1.doubanio.com/view/subject/m/public/s1029647.jpg",
            "writer": "[日] 村上春树 ",
            "judgements": 19998,
            "publicHouse": " 上海译文出版社 ",
            "price": " 18.80元"
        },
        {
            "name": "带一本书去巴黎",
            "score": 8.5,
            "quote": "",
            "coverUrl": "https://img3.doubanio.com/view/subject/m/public/s3186863.jpg",
            "writer": "[中] 林达 ",
            "judgements": 18947,
            "publicHouse": " 生活·读书·新知三联书店 ",
            "price": " 35.00元"
        },
        {
            "name": "巨流河",
            "score": 8.7,
            "quote": "",
            "coverUrl": "https://img1.doubanio.com/view/subject/m/public/s4494379.jpg",
            "writer": "[中] 齐邦媛 ",
            "judgements": 18555,
            "publicHouse": " 生活·读书·新知三联书店 ",
            "price": " 39.00元"
        },
        {
            "name": "小姨多鹤",
            "score": 8.6,
            "quote": "",
            "coverUrl": "https://img1.doubanio.com/view/subject/m/public/s4045138.jpg",
            "writer": "[中] 严歌苓 ",
            "judgements": 18658,
            "publicHouse": " 作家出版社 ",
            "price": " 28.00元"
        },
        {
            "name": "斯通纳",
            "score": 8.8,
            "quote": "",
            "coverUrl": "https://img3.doubanio.com/view/subject/m/public/s28332051.jpg",
            "writer": "[美] 约翰·威廉斯 ",
            "judgements": 17975,
            "publicHouse": " 杨向荣 ",
            "price": "上海人民出版社 "
        },
        {
            "name": "第一炉香",
            "score": 8.4,
            "quote": "",
            "coverUrl": "https://img1.doubanio.com/view/subject/m/public/s1077099.jpg",
            "writer": "[中] 张爱玲 ",
            "judgements": 19120,
            "publicHouse": " 花城出版社 ",
            "price": " 11.5"
        },
        {
            "name": "芳华",
            "score": 8.1,
            "quote": "",
            "coverUrl": "https://img3.doubanio.com/view/subject/m/public/s29418322.jpg",
            "writer": "[中] 严歌苓 ",
            "judgements": 19559,
            "publicHouse": " 人民文学出版社 ",
            "price": " CNY 39.00"
        },
        {
            "name": "爱的艺术",
            "score": 8.8,
            "quote": "",
            "coverUrl": "https://img3.doubanio.com/view/subject/m/public/s2990934.jpg",
            "writer": "[美] 艾·弗洛姆 ",
            "judgements": 17807,
            "publicHouse": " 上海译文出版社 ",
            "price": " 15.00元"
        },
        {
            "name": "退步集",
            "score": 8.1,
            "quote": "",
            "coverUrl": "https://img3.doubanio.com/view/subject/m/public/s1311084.jpg",
            "writer": "[中] 陈丹青 ",
            "judgements": 19424,
            "publicHouse": " 广西师范大学出版社 ",
            "price": " 38.00元"
        },
        {
            "name": "未来简史",
            "score": 8.5,
            "quote": "",
            "coverUrl": "https://img3.doubanio.com/view/subject/m/public/s29287103.jpg",
            "writer": "[以色列] 尤瓦尔·赫拉利 ",
            "judgements": 18565,
            "publicHouse": " 中信出版社 ",
            "price": " 68"
        },
        {
            "name": "人间词话",
            "score": 9,
            "quote": "",
            "coverUrl": "https://img1.doubanio.com/view/subject/m/public/s9130587.jpg",
            "writer": "[中] 王国维 ",
            "judgements": 17360,
            "publicHouse": " 上海古籍出版社 ",
            "price": " 9.80元"
        },
        {
            "name": "夹边沟记事",
            "score": 9.2,
            "quote": "",
            "coverUrl": "https://img3.doubanio.com/view/subject/m/public/s3455551.jpg",
            "writer": "[中] 杨显惠 ",
            "judgements": 16599,
            "publicHouse": " 花城出版社 ",
            "price": " 34.00元"
        },
        {
            "name": "云中歌1",
            "score": 8.1,
            "quote": "",
            "coverUrl": "https://img1.doubanio.com/view/subject/m/public/s2742719.jpg",
            "writer": "[中] 桐华 ",
            "judgements": 19059,
            "publicHouse": " 作家出版社 ",
            "price": " 24.80元"
        },
        {
            "name": "来不及说我爱你",
            "score": 8.1,
            "quote": "",
            "coverUrl": "https://img1.doubanio.com/view/subject/m/public/s4596329.jpg",
            "writer": "[中] 匪我思存 ",
            "judgements": 18888,
            "publicHouse": " 新世界出版社 ",
            "price": " 20.00元"
        },
        {
            "name": "一千零一夜",
            "score": 8.6,
            "quote": "",
            "coverUrl": "https://img1.doubanio.com/view/subject/m/public/s1070937.jpg",
            "writer": "[中] 纳训 ",
            "judgements": 17755,
            "publicHouse": " 人民文学出版社 ",
            "price": " 22.0"
        },
        {
            "name": "相约星期二",
            "score": 8.4,
            "quote": "",
            "coverUrl": "https://img3.doubanio.com/view/subject/m/public/s29237651.jpg",
            "writer": "[美] 米奇·阿尔博姆 ",
            "judgements": 17968,
            "publicHouse": " 上海译文出版社 ",
            "price": " 19.00元"
        },
        {
            "name": "可爱的洪水猛兽",
            "score": 8.1,
            "quote": "",
            "coverUrl": "https://img3.doubanio.com/view/subject/m/public/s3947864.jpg",
            "writer": "[中] 韩寒 ",
            "judgements": 18817,
            "publicHouse": " 万卷出版公司 ",
            "price": " 25.00元"
        },
        {
            "name": "白银时代",
            "score": 8.4,
            "quote": "",
            "coverUrl": "https://img3.doubanio.com/view/subject/m/public/s1072540.jpg",
            "writer": "[中] 王小波 ",
            "judgements": 18059,
            "publicHouse": " 花城出版社 ",
            "price": " 10.00元"
        },
        {
            "name": "罗生门",
            "score": 8.7,
            "quote": "",
            "coverUrl": "https://img1.doubanio.com/view/subject/m/public/s3435158.jpg",
            "writer": "[日]芥川龙之介 ",
            "judgements": 17367,
            "publicHouse": " 上海译文出版社 ",
            "price": " 12.00元"
        },
        {
            "name": "台北人",
            "score": 8.9,
            "quote": "",
            "coverUrl": "https://img3.doubanio.com/view/subject/m/public/s4526465.jpg",
            "writer": "[中] 白先勇 ",
            "judgements": 16684,
            "publicHouse": " 广西师范大学出版社 ",
            "price": " 38.00元"
        },
        {
            "name": "万水千山走遍",
            "score": 8.8,
            "quote": "",
            "coverUrl": "https://img3.doubanio.com/view/subject/m/public/s1099483.jpg",
            "writer": "[中] 三毛 ",
            "judgements": 16835,
            "publicHouse": " 哈尔滨出版社 ",
            "price": " 13.80"
        },
        {
            "name": "面纱",
            "score": 8.7,
            "quote": "",
            "coverUrl": "https://img3.doubanio.com/view/subject/m/public/s9038826.jpg",
            "writer": "[英] W.萨默塞特·毛姆 ",
            "judgements": 17097,
            "publicHouse": " 重庆出版社 ",
            "price": " 32.00元"
        },
        {
            "name": "哈姆莱特",
            "score": 8.5,
            "quote": "",
            "coverUrl": "https://img1.doubanio.com/view/subject/m/public/s27009357.jpg",
            "writer": "[英] 莎士比亚 ",
            "judgements": 17504,
            "publicHouse": " 人民文学出版社 ",
            "price": " 7.00元"
        },
        {
            "name": "告白",
            "score": 8.6,
            "quote": "",
            "coverUrl": "https://img3.doubanio.com/view/subject/m/public/s3931802.jpg",
            "writer": "[中] 湊佳苗 ",
            "judgements": 17045,
            "publicHouse": " 時報文化 ",
            "price": " NT$250"
        },
        {
            "name": "雨季不再来",
            "score": 8.7,
            "quote": "",
            "coverUrl": "https://img1.doubanio.com/view/subject/m/public/s2563279.jpg",
            "writer": "[中] 三毛 ",
            "judgements": 17014,
            "publicHouse": " 北京十月文艺出版社 ",
            "price": " 28.00元"
        },
        {
            "name": "琅琊榜",
            "score": 8.6,
            "quote": "",
            "coverUrl": "https://img3.doubanio.com/view/subject/m/public/s8994402.jpg",
            "writer": "[中] 海宴 ",
            "judgements": 16704,
            "publicHouse": " 朝华出版社 ",
            "price": " 49.80元"
        },
        {
            "name": "后宫·甄嬛传Ⅰ",
            "score": 8,
            "quote": "",
            "coverUrl": "https://img3.doubanio.com/view/subject/m/public/s2894734.jpg",
            "writer": "[中] 流潋紫 ",
            "judgements": 18181,
            "publicHouse": " 花山文艺出版社 ",
            "price": " 22.00元"
        },
        {
            "name": "朗读者",
            "score": 8.3,
            "quote": "",
            "coverUrl": "https://img3.doubanio.com/view/subject/m/public/s3628415.jpg",
            "writer": "[德] 本哈德·施林克 ",
            "judgements": 17450,
            "publicHouse": " 译林出版社 ",
            "price": " 22.00"
        },
        {
            "name": "星空",
            "score": 9,
            "quote": "",
            "coverUrl": "https://img3.doubanio.com/view/subject/m/public/s4150073.jpg",
            "writer": "[中] 幾米 ",
            "judgements": 15909,
            "publicHouse": " 大塊文化 ",
            "price": " NT369"
        },
        {
            "name": "雾都孤儿",
            "score": 8.1,
            "quote": "",
            "coverUrl": "https://img3.doubanio.com/view/subject/m/public/s1300531.jpg",
            "writer": "[英]狄更斯 ",
            "judgements": 18018,
            "publicHouse": " 上海译文出版社 ",
            "price": " 10.10元"
        },
        {
            "name": "阿麦从军：全新修订版",
            "score": 8.9,
            "quote": "",
            "coverUrl": "https://img3.doubanio.com/view/subject/m/public/s29490160.jpg",
            "writer": "[中] 鲜橙 ",
            "judgements": 15128,
            "publicHouse": " 作家出版社 ",
            "price": " 108.00元"
        },
        {
            "name": "枪炮、病菌与钢铁",
            "score": 8.8,
            "quote": "",
            "coverUrl": "https://img3.doubanio.com/view/subject/m/public/s1738643.jpg",
            "writer": "[美] 贾雷德·戴蒙德 ",
            "judgements": 16281,
            "publicHouse": " 上海世纪出版集团 ",
            "price": " 45.00元"
        },
        {
            "name": "红拂夜奔",
            "score": 8.6,
            "quote": "",
            "coverUrl": "https://img3.doubanio.com/view/subject/m/public/s26384792.jpg",
            "writer": "[中] 王小波 ",
            "judgements": 16586,
            "publicHouse": " 江苏文艺出版社 ",
            "price": " 28.00元"
        },
        {
            "name": "深夜食堂 01",
            "score": 9.1,
            "quote": "",
            "coverUrl": "https://img3.doubanio.com/view/subject/m/public/s24569060.jpg",
            "writer": "[日] 安倍夜郎 ",
            "judgements": 15483,
            "publicHouse": " 湖南文艺出版社 ",
            "price": " 25.00元"
        }

    ]
    return d
}
