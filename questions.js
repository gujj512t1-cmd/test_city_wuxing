// 五行与城市数据
const cityData = {
    wood: [
        { 
            name: "杭州", 
            description: "水木之城，木气最旺，特别利于木火产业如丝绸、茶叶、文创和互联网经济。杭州的自然环境与人文氛围能激发创造力，适合追求成长和创新的性格。",
            elementColor: "element-wood"
        },
        { 
            name: "苏州", 
            description: "园林之城，木气旺盛，适合从事文化、艺术、设计等创意行业的人士。苏州的精致与和谐能滋养温和而有规划性的性格。",
            elementColor: "element-wood"
        },
        { 
            name: "福州", 
            description: "榕城，树木繁茂，木属性强，适合温和性格、从事教育或文化工作的人。福州的生活节奏适宜，能提供稳定的成长环境。",
            elementColor: "element-wood"
        }
    ],
    fire: [
        { 
            name: "广州", 
            description: "火旺之地，作为国际开放港口，适合走食神生财路线，强调灵活性、实干和口才。广州的热情与活力能激发行动力和创造力。",
            elementColor: "element-fire"
        },
        { 
            name: "深圳", 
            description: "水火既济，以火为主，非常适合创业，适合拥有高学历和高创造性的朋友。深圳的创新氛围与快节奏能匹配富有激情的性格。",
            elementColor: "element-fire"
        },
        { 
            name: "长沙", 
            description: "娱乐之都，火属性强，适合从事媒体、娱乐、餐饮等热情洋溢的行业。长沙的文化活力与美食能滋养外向活泼的性格。",
            elementColor: "element-fire"
        }
    ],
    earth: [
        { 
            name: "北京", 
            description: "五行属湿土，水土相生形成厚重底蕴，适合依附大型机构发展，尤利体制内领域。北京的稳重与历史感能匹配务实可靠的性格。",
            elementColor: "element-earth"
        },
        { 
            name: "郑州", 
            description: "中原之地，土气厚重，适合追求稳定生活，在传统行业或制造业发展。郑州的平实与包容能提供安全感和归属感。",
            elementColor: "element-earth"
        },
        { 
            name: "西安", 
            description: "土金旺相，气质雄浑苍凉，历史遗迹多，适合喜欢干燥环境和历史文化的人。西安的厚重与传承能滋养重视传统与稳定的性格。",
            elementColor: "element-earth"
        }
    ],
    metal: [
        { 
            name: "上海", 
            description: "金水为主，木为辅，商业金融中心，适合喜金水的朋友，旺财运和工作机会。上海的效率与精致能匹配追求完美和高质量生活的性格。",
            elementColor: "element-metal"
        },
        { 
            name: "重庆", 
            description: "山城，金气凝聚，适合坚韧不拔、在挑战中成长的性格。重庆的立体与层次能激发决断力和适应力。",
            elementColor: "element-metal"
        },
        { 
            name: "南京", 
            description: "六朝古都，金气内敛，适合从事教育、研究和行政管理的人。南京的沉稳与学府气息能滋养理性分析和系统思考的性格。",
            elementColor: "element-metal"
        }
    ],
    water: [
        { 
            name: "青岛", 
            description: "海滨城市，水属性强，适合思维活跃、从事科研、创意或需要灵感的工作。青岛的海洋气息能激发灵活变通和适应能力。",
            elementColor: "element-water"
        },
        { 
            name: "宁波", 
            description: "港口城市，水运发达，适合从事贸易、航运或需要流动性的行业。宁波的开放与流动性能匹配善于沟通和协调的性格。",
            elementColor: "element-water"
        },
        { 
            name: "大连", 
            description: "北方滨海，水气充沛，适合从事贸易、旅游和海洋产业的人。大连的海洋文化与开放性能滋养包容和适应性强的性格。",
            elementColor: "element-water"
        }
    ]
};

const elementNames = { 
    wood: "木属性", 
    fire: "火属性", 
    earth: "土属性", 
    metal: "金属性", 
    water: "水属性" 
};

// 精确的49道题目
const questions = [
    { question: "你更喜欢哪种自然景观？", options: [
        { text: "茂密的森林和绿地", element: "wood" },
        { text: "阳光灿烂的海滩", element: "fire" },
        { text: "广阔的平原和高原", element: "earth" },
        { text: "巍峨的高山和矿脉", element: "metal" },
        { text: "江河湖海或湿地", element: "water" }
    ]},
    { question: "你的性格更接近哪一种描述？", options: [
        { text: "温和、有耐心、善于成长", element: "wood" },
        { text: "热情、活跃、充满能量", element: "fire" },
        { text: "稳重、务实、值得信赖", element: "earth" },
        { text: "坚定、果断、追求完美", element: "metal" },
        { text: "灵活、变通、适应力强", element: "water" }
    ]},
    { question: "你更喜欢哪种天气？", options: [
        { text: "春风和煦的晴天", element: "wood" },
        { text: "阳光炽热的夏日", element: "fire" },
        { text: "温和干燥的天气", element: "earth" },
        { text: "秋高气爽的时节", element: "metal" },
        { text: "细雨绵绵或雪天", element: "water" }
    ]},
    { question: "在团队中，你通常扮演什么角色？", options: [
        { text: "策划者和创新者", element: "wood" },
        { text: "激励者和推动者", element: "fire" },
        { text: "协调者和稳定器", element: "earth" },
        { text: "组织者和决策者", element: "metal" },
        { text: "沟通者和调节者", element: "water" }
    ]},
    { question: "你更喜欢哪种颜色？", options: [
        { text: "绿色或青色", element: "wood" },
        { text: "红色或橙色", element: "fire" },
        { text: "黄色或棕色", element: "earth" },
        { text: "白色或金色", element: "metal" },
        { text: "黑色或蓝色", element: "water" }
    ]},
    { question: "你的决策风格更接近？", options: [
        { text: "深思熟虑，逐步推进", element: "wood" },
        { text: "直觉驱动，迅速决定", element: "fire" },
        { text: "平衡各方，稳妥选择", element: "earth" },
        { text: "理性分析，追求最优", element: "metal" },
        { text: "随机应变，灵活调整", element: "water" }
    ]},
    { question: "你更喜欢哪种类型的假期？", options: [
        { text: "森林徒步或植物园游览", element: "wood" },
        { text: "海滩度假或参加节庆活动", element: "fire" },
        { text: "乡村体验或参观历史遗迹", element: "earth" },
        { text: "登山探险或参观博物馆", element: "metal" },
        { text: "海滨休闲或乘船游览", element: "water" }
    ]},
    { question: "面对压力时，你通常如何应对？", options: [
        { text: "寻找新的成长机会", element: "wood" },
        { text: "积极行动，释放能量", element: "fire" },
        { text: "保持稳定，寻求支持", element: "earth" },
        { text: "分析问题，制定策略", element: "metal" },
        { text: "冷静观察，顺其自然", element: "water" }
    ]},
    { question: "你更喜欢哪种工作环境？", options: [
        { text: "充满创意和变化的环境", element: "wood" },
        { text: "快节奏、充满挑战的环境", element: "fire" },
        { text: "稳定、可预测的环境", element: "earth" },
        { text: "结构清晰、高效的环境", element: "metal" },
        { text: "自由、宽松、非固定的环境", element: "water" }
    ]},
    { question: "你更看重生活的哪个方面？", options: [
        { text: "个人成长和学习", element: "wood" },
        { text: "激情和体验", element: "fire" },
        { text: "安全和稳定", element: "earth" },
        { text: "成就和效率", element: "metal" },
        { text: "自由和舒适", element: "water" }
    ]},
    { question: "你更喜欢哪种类型的书籍或电影？", options: [
        { text: "成长故事或自然纪录片", element: "wood" },
        { text: "动作冒险或浪漫喜剧", element: "fire" },
        { text: "家庭剧或历史题材", element: "earth" },
        { text: "侦探小说或科幻题材", element: "metal" },
        { text: "悬疑剧情或情感文艺片", element: "water" }
    ]},
    { question: "你如何描述自己的沟通风格？", options: [
        { text: "温和而有说服力", element: "wood" },
        { text: "热情而富有感染力", element: "fire" },
        { text: "务实而值得信赖", element: "earth" },
        { text: "直接而逻辑清晰", element: "metal" },
        { text: "委婉而善于倾听", element: "water" }
    ]},
    { question: "你更喜欢哪种类型的运动？", options: [
        { text: "瑜伽、徒步或高尔夫", element: "wood" },
        { text: "足球、篮球或舞蹈", element: "fire" },
        { text: "健走、园艺或太极", element: "earth" },
        { text: "攀岩、击剑或射击", element: "metal" },
        { text: "游泳、潜水或帆船", element: "water" }
    ]},
    { question: "你的学习方式更接近？", options: [
        { text: "通过探索和实验学习", element: "wood" },
        { text: "通过实践和体验学习", element: "fire" },
        { text: "通过重复和巩固学习", element: "earth" },
        { text: "通过分析和系统化学习", element: "metal" },
        { text: "通过交流和讨论学习", element: "water" }
    ]},
    { question: "你更喜欢哪种艺术形式？", options: [
        { text: "绘画、书法或园艺", element: "wood" },
        { text: "戏剧、音乐或舞蹈", element: "fire" },
        { text: "陶艺、建筑或手工艺", element: "earth" },
        { text: "雕塑、金属工艺或设计", element: "metal" },
        { text: "摄影、电影或多媒体艺术", element: "water" }
    ]},
    { question: "你对未来的规划更倾向于？", options: [
        { text: "灵活适应，不断调整", element: "wood" },
        { text: "追求激情，抓住机遇", element: "fire" },
        { text: "稳步推进，确保安全", element: "earth" },
        { text: "详细规划，追求卓越", element: "metal" },
        { text: "顺其自然，保持开放", element: "water" }
    ]},
    { question: "你更喜欢哪种社交场合？", options: [
        { text: "小型聚会或兴趣小组", element: "wood" },
        { text: "大型派对或庆祝活动", element: "fire" },
        { text: "家庭聚会或社区活动", element: "earth" },
        { text: "专业会议或学术讨论", element: "metal" },
        { text: "咖啡馆聊天或线上交流", element: "water" }
    ]},
    { question: "你如何面对新的挑战？", options: [
        { text: "视为成长的机会", element: "wood" },
        { text: "兴奋并立即行动", element: "fire" },
        { text: "谨慎评估风险", element: "earth" },
        { text: "系统分析并制定计划", element: "metal" },
        { text: "观察后再做决定", element: "water" }
    ]},
    { question: "你更喜欢哪种类型的音乐？", options: [
        { text: "轻音乐、民谣或自然声音", element: "wood" },
        { text: "摇滚、流行或舞曲", element: "fire" },
        { text: "民谣、传统音乐", element: "earth" },
        { text: "古典、爵士或电子音乐", element: "metal" },
        { text: "蓝调、乡村或柔和的歌曲", element: "water" }
    ]},
    { question: "你更看重朋友哪种品质？", options: [
        { text: "真诚和支持", element: "wood" },
        { text: "热情和有趣", element: "fire" },
        { text: "可靠和忠诚", element: "earth" },
        { text: "聪明和理性", element: "metal" },
        { text: "理解和包容", element: "water" }
    ]},
    { question: "你更喜欢哪种类型的食物？", options: [
        { text: "蔬菜、水果和谷物", element: "wood" },
        { text: "辛辣、烤肉或热食", element: "fire" },
        { text: "根茎类、坚果或炖菜", element: "earth" },
        { text: "精致、口感脆的食物", element: "metal" },
        { text: "汤类、海鲜或清淡料理", element: "water" }
    ]},
    { question: "你的消费习惯更接近？", options: [
        { text: "投资于学习和成长", element: "wood" },
        { text: "享受生活和体验", element: "fire" },
        { text: "储蓄和购买实用品", element: "earth" },
        { text: "购买高质量和耐用品", element: "metal" },
        { text: "注重体验而非物质", element: "water" }
    ]},
    { question: "你更喜欢哪种交通方式？", options: [
        { text: "自行车或步行", element: "wood" },
        { text: "快速列车或跑车", element: "fire" },
        { text: "稳定舒适的汽车", element: "earth" },
        { text: "飞机或高科技交通工具", element: "metal" },
        { text: "船舶或水上交通工具", element: "water" }
    ]},
    { question: "你如何面对冲突？", options: [
        { text: "寻求理解和妥协", element: "wood" },
        { text: "直接表达，迅速解决", element: "fire" },
        { text: "保持中立，调解矛盾", element: "earth" },
        { text: "分析原因，寻求公正", element: "metal" },
        { text: "暂时回避，灵活处理", element: "water" }
    ]},
    { question: "你对时间的态度更接近？", options: [
        { text: "顺其自然，遵循节奏", element: "wood" },
        { text: "珍惜当下，充满活力", element: "fire" },
        { text: "稳定规律，有计划性", element: "earth" },
        { text: "高效利用，追求精确", element: "metal" },
        { text: "弹性安排，不拘泥形式", element: "water" }
    ]},
    { question: "你更喜欢哪种家居装饰风格？", options: [
        { text: "自然田园风格", element: "wood" },
        { text: "现代热情风格", element: "fire" },
        { text: "传统稳重风格", element: "earth" },
        { text: "简约工业风格", element: "metal" },
        { text: "海洋或流动风格", element: "water" }
    ]},
    { question: "你的睡眠习惯更接近？", options: [
        { text: "早睡早起，规律作息", element: "wood" },
        { text: "精力充沛，睡眠较少", element: "fire" },
        { text: "睡眠深沉，不易惊醒", element: "earth" },
        { text: "睡眠较浅，容易醒来", element: "metal" },
        { text: "睡眠时间不固定", element: "water" }
    ]},
    { question: "你更喜欢哪种类型的游戏？", options: [
        { text: "策略养成类游戏", element: "wood" },
        { text: "动作竞技类游戏", element: "fire" },
        { text: "模拟经营类游戏", element: "earth" },
        { text: "解谜推理类游戏", element: "metal" },
        { text: "探索冒险类游戏", element: "water" }
    ]},
    { question: "你的穿着风格更接近？", options: [
        { text: "舒适自然的休闲风格", element: "wood" },
        { text: "时尚亮眼的潮流风格", element: "fire" },
        { text: "经典得体的传统风格", element: "earth" },
        { text: "简洁干练的专业风格", element: "metal" },
        { text: "随性自由的混搭风格", element: "water" }
    ]},
    { question: "你更喜欢哪种类型的工作任务？", options: [
        { text: "创造性、有变化的工作", element: "wood" },
        { text: "挑战性、能快速见效的工作", element: "fire" },
        { text: "稳定性、重复性高的工作", element: "earth" },
        { text: "逻辑性、需要精确的工作", element: "metal" },
        { text: "沟通性、需要协调的工作", element: "water" }
    ]},
    { question: "你的记忆力特点更接近？", options: [
        { text: "对图像和场景记忆深刻", element: "wood" },
        { text: "对情感和体验记忆深刻", element: "fire" },
        { text: "对事实和数据记忆深刻", element: "earth" },
        { text: "对逻辑和关系记忆深刻", element: "metal" },
        { text: "对声音和对话记忆深刻", element: "water" }
    ]},
    { question: "你更倾向于哪种旅行方式？", options: [
        { text: "自由行，随性探索", element: "wood" },
        { text: "冒险游，寻求刺激", element: "fire" },
        { text: "跟团游，省心安全", element: "earth" },
        { text: "定制游，精心规划", element: "metal" },
        { text: "度假游，放松休闲", element: "water" }
    ]},
    { question: "你对科技产品的态度是？", options: [
        { text: "喜欢尝试新功能", element: "wood" },
        { text: "追求最新型号", element: "fire" },
        { text: "够用就好，不追新", element: "earth" },
        { text: "研究参数，追求最佳", element: "metal" },
        { text: "注重实用和便捷", element: "water" }
    ]},
    { question: "你的房间通常保持？", options: [
        { text: "有植物，自然清新", element: "wood" },
        { text: "色彩丰富，充满活力", element: "fire" },
        { text: "整洁有序，温馨舒适", element: "earth" },
        { text: "极简主义，干净利落", element: "metal" },
        { text: "随意自在，不拘一格", element: "water" }
    ]},
    { question: "你更喜欢哪种社交方式？", options: [
        { text: "深度交流，分享想法", element: "wood" },
        { text: "热闹聚会，广泛交友", element: "fire" },
        { text: "小圈子活动，稳定关系", element: "earth" },
        { text: "专业交流，价值互换", element: "metal" },
        { text: "轻松随意，线上互动", element: "water" }
    ]},
    { question: "你对风险的态度是？", options: [
        { text: "适度冒险，追求成长", element: "wood" },
        { text: "喜欢冒险，寻求刺激", element: "fire" },
        { text: "规避风险，求稳为主", element: "earth" },
        { text: "计算风险，理性决策", element: "metal" },
        { text: "接受风险，灵活应对", element: "water" }
    ]},
    { question: "你更喜欢哪种类型的故事？", options: [
        { text: "成长与蜕变的故事", element: "wood" },
        { text: "英雄与冒险的故事", element: "fire" },
        { text: "家庭与传承的故事", element: "earth" },
        { text: "推理与智慧的故事", element: "metal" },
        { text: "情感与命运的故事", element: "water" }
    ]},
    { question: "你的思考方式更接近？", options: [
        { text: "发散性思维，联想丰富", element: "wood" },
        { text: "直觉性思维，快速判断", element: "fire" },
        { text: "经验性思维，依赖积累", element: "earth" },
        { text: "系统性思维，逻辑严密", element: "metal" },
        { text: "辩证性思维，多角度看问题", element: "water" }
    ]},
    { question: "你更喜欢哪种气候？", options: [
        { text: "温润多雨的气候", element: "wood" },
        { text: "温暖阳光的气候", element: "fire" },
        { text: "干燥稳定的气候", element: "earth" },
        { text: "凉爽清爽的气候", element: "metal" },
        { text: "湿润温和的气候", element: "water" }
    ]},
    { question: "你对传统与现代的态度？", options: [
        { text: "尊重传统，适度创新", element: "wood" },
        { text: "拥抱变化，追求新颖", element: "fire" },
        { text: "重视传统，保持延续", element: "earth" },
        { text: "理性选择，取其精华", element: "metal" },
        { text: "融合两者，创造平衡", element: "water" }
    ]},
    { question: "你的情绪表达方式是？", options: [
        { text: "温和表达，内敛含蓄", element: "wood" },
        { text: "直接表达，热烈外放", element: "fire" },
        { text: "稳定表达，不易波动", element: "earth" },
        { text: "克制表达，理性分析", element: "metal" },
        { text: "随情境变化，灵活表达", element: "water" }
    ]},
    { question: "你更喜欢哪种类型的城市？", options: [
        { text: "绿化好，环境优美的城市", element: "wood" },
        { text: "活力强，夜生活丰富的城市", element: "fire" },
        { text: "生活节奏慢，人情味浓的城市", element: "earth" },
        { text: "现代化程度高，效率高的城市", element: "metal" },
        { text: "滨水而建，景色宜人的城市", element: "water" }
    ]},
    { question: "你的购物习惯是？", options: [
        { text: "关注环保和可持续性", element: "wood" },
        { text: "追求时尚和潮流", element: "fire" },
        { text: "注重实用和性价比", element: "earth" },
        { text: "看重品质和品牌", element: "metal" },
        { text: "凭感觉和心情购买", element: "water" }
    ]},
    { question: "你更喜欢哪种工作节奏？", options: [
        { text: "弹性工作，自主安排", element: "wood" },
        { text: "快节奏，高强度", element: "fire" },
        { text: "稳定规律，可预测", element: "earth" },
        { text: "高效集中，任务导向", element: "metal" },
        { text: "灵活多变，适应性强", element: "water" }
    ]},
    { question: "你对水的感受是？", options: [
        { text: "喜欢水，但不一定要靠近", element: "wood" },
        { text: "喜欢水，尤其是温暖的水", element: "fire" },
        { text: "对水没有特别感觉", element: "earth" },
        { text: "喜欢清澈流动的水", element: "metal" },
        { text: "特别喜欢水，离不开水", element: "water" }
    ]},
    { question: "你更喜欢哪种类型的建筑？", options: [
        { text: "木质结构，自然风格", element: "wood" },
        { text: "现代设计，色彩鲜明", element: "fire" },
        { text: "传统建筑，稳重厚实", element: "earth" },
        { text: "金属玻璃，简约现代", element: "metal" },
        { text: "流动曲线，未来风格", element: "water" }
    ]},
    { question: "你的饮食习惯更接近？", options: [
        { text: "素食为主，清淡健康", element: "wood" },
        { text: "口味重，喜欢热食", element: "fire" },
        { text: "传统饮食，家常便饭", element: "earth" },
        { text: "精致饮食，注重搭配", element: "metal" },
        { text: "喜欢多样，经常变化", element: "water" }
    ]},
    { question: "你更喜欢哪种类型的节日？", options: [
        { text: "自然主题的节日", element: "wood" },
        { text: "热闹狂欢的节日", element: "fire" },
        { text: "传统家庭团聚的节日", element: "earth" },
        { text: "文化艺术的节日", element: "metal" },
        { text: "放松休闲的节日", element: "water" }
    ]},
    { question: "你的理财观念更接近？", options: [
        { text: "投资于自我成长", element: "wood" },
        { text: "及时行乐，享受当下", element: "fire" },
        { text: "储蓄为主，保守理财", element: "earth" },
        { text: "理性投资，分散风险", element: "metal" },
        { text: "灵活支配，不做严格规划", element: "water" }
    ]}
];
