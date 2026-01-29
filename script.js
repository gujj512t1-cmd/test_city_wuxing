// 初始化年份选择器（1920-2024年）
function initYearSelector() {
    const yearSelect = document.getElementById('year-select');
    const currentYear = new Date().getFullYear();
    
    for (let year = currentYear; year >= 1920; year--) {
        const option = document.createElement('option');
        option.value = year;
        option.textContent = year + '年';
        yearSelect.appendChild(option);
    }
}

// 初始化日期选择器
function initDaySelector() {
    const daySelect = document.getElementById('day-select');
    daySelect.innerHTML = '<option value="">选择日期</option>';
    
    for (let day = 1; day <= 31; day++) {
        const option = document.createElement('option');
        option.value = day;
        option.textContent = day + '日';
        daySelect.appendChild(option);
    }
}

// 根据年月更新日期选择器
function updateDaySelector() {
    const year = parseInt(document.getElementById('year-select').value);
    const month = parseInt(document.getElementById('month-select').value);
    const daySelect = document.getElementById('day-select');
    
    if (!year || !month) {
        daySelect.innerHTML = '<option value="">选择日期</option>';
        for (let day = 1; day <= 31; day++) {
            const option = document.createElement('option');
            option.value = day;
            option.textContent = day + '日';
            daySelect.appendChild(option);
        }
        return;
    }
    
    // 计算当月天数
    const daysInMonth = new Date(year, month, 0).getDate();
    
    daySelect.innerHTML = '<option value="">选择日期</option>';
    for (let day = 1; day <= daysInMonth; day++) {
        const option = document.createElement('option');
        option.value = day;
        option.textContent = day + '日';
        daySelect.appendChild(option);
    }
    
    // 启用下一步按钮检查
    checkBirthdayInput();
}

const heavenlyStems = [
  { name: '甲', element: 'wood' },
  { name: '乙', element: 'wood' },
  { name: '丙', element: 'fire' },
  { name: '丁', element: 'fire' },
  { name: '戊', element: 'earth' },
  { name: '己', element: 'earth' },
  { name: '庚', element: 'metal' },
  { name: '辛', element: 'metal' },
  { name: '壬', element: 'water' },
  { name: '癸', element: 'water' }
];

function calculateElementFromBirth(year, month, day) {
  const stem = getDayStem(year, month, day);

  const elementDescriptions = {
    wood: "木属性代表生长、规划与创造力，重视长期发展。",
    fire: "火属性代表热情、行动与表现力，重视效率与当下。",
    earth: "土属性代表稳定、承载与平衡，重视安全与责任。",
    metal: "金属性代表秩序、执行与决断力，重视规则与结果。",
    water: "水属性代表智慧、流动与适应力，重视变化与思考。"
  };

  const elementSymbols = {
    wood: "🌳",
    fire: "🔥",
    earth: "⛰️",
    metal: "⚙️",
    water: "💧"
  };

  const elementNames = {
    wood: "木",
    fire: "火",
    earth: "土",
    metal: "金",
    water: "水"
  };

  return {
    mainElement: stem.element,
    description: elementDescriptions[stem.element],
    symbol: elementSymbols[stem.element],
    name: elementNames[stem.element],
    stemName: stem.name // 甲 / 乙 / 丙……
  };
}

// 检查出生日期输入是否完整
function checkBirthdayInput() {
    const year = document.getElementById('year-select').value;
    const month = document.getElementById('month-select').value;
    const day = document.getElementById('day-select').value;
    const nextBtn = document.getElementById('birthday-next-btn');
    
    if (year && month && day) {
        nextBtn.disabled = false;
    } else {
        nextBtn.disabled = true;
    }
}

// 获取五行相生相克关系
function getElementRelations(mainElement) {
    // 五行相生关系：木→火→土→金→水→木
    const generateRelations = {
        wood: 'fire',
        fire: 'earth',
        earth: 'metal',
        metal: 'water',
        water: 'wood'
    };
    
    // 五行相克关系：木→土→水→火→金→木
    const restrictRelations = {
        wood: 'earth',
        earth: 'water',
        water: 'fire',
        fire: 'metal',
        metal: 'wood'
    };
    
    // 被什么五行生
    const generatedBy = Object.keys(generateRelations).find(key => generateRelations[key] === mainElement);
    
    // 被什么五行克
    const restrictedBy = Object.keys(restrictRelations).find(key => restrictRelations[key] === mainElement);
    
    return {
        generateTo: generateRelations[mainElement], // 我生什么
        generatedBy: generatedBy, // 什么生我
        restrictTo: restrictRelations[mainElement], // 我克什么
        restrictedBy: restrictedBy // 什么克我
    };
}

// 显示五行分析
function showElementAnalysis(year, month, day) {
    const result = calculateElementFromBirth(year, month, day);
    const relations = getElementRelations(result.mainElement);
    
    // 更新五行结果显示
    const elementResultContainer = document.getElementById('element-result-container');
    
    elementResultContainer.innerHTML = `
        <div class="element-result fade-in">
            <div class="result-title">您的先天五行属性</div>
            <div class="main-element">
                <div class="element-icon element-${result.mainElement}">${result.symbol}</div>
               <div class="element-name">
  ${result.stemName}${result.name}命
</div>

            </div>
            <div class="element-description">${result.description}</div>
        </div>
    `;
    
    // 更新五行关系显示
    const elementRelationsContainer = document.getElementById('element-relations');
    
    // 五行符号
    const elementSymbols = {
        wood: "🌳",
        fire: "🔥",
        earth: "⛰️",
        metal: "⚙️",
        water: "💧"
    };
    
    // 五行名称
    const elementNames = {
        wood: "木",
        fire: "火",
        earth: "土",
        metal: "金",
        water: "水"
    };
    
    elementRelationsContainer.innerHTML = `
        <div class="relation-card relation-good fade-in" style="animation-delay: 0.1s;">
            <div class="relation-title">
                <i class="fas fa-heart"></i>
                生您的五行
            </div>
            <div class="relation-elements">
                <div class="relation-element element-${relations.generatedBy || 'earth'}">
                    ${elementSymbols[relations.generatedBy] || '⛰️'}
                </div>
                <div class="relation-arrow">→</div>
                <div class="relation-element element-${result.mainElement}">
                    ${elementSymbols[result.mainElement]}
                </div>
            </div>
        </div>
        
        <div class="relation-card relation-good fade-in" style="animation-delay: 0.2s;">
            <div class="relation-title">
                <i class="fas fa-hand-holding-heart"></i>
                您生的五行
            </div>
            <div class="relation-elements">
                <div class="relation-element element-${result.mainElement}">
                    ${elementSymbols[result.mainElement]}
                </div>
                <div class="relation-arrow">→</div>
                <div class="relation-element element-${relations.generateTo}">
                    ${elementSymbols[relations.generateTo]}
                </div>
            </div>
        </div>
        
        <div class="relation-card relation-bad fade-in" style="animation-delay: 0.3s;">
            <div class="relation-title">
                <i class="fas fa-times-circle"></i>
                克您的五行
            </div>
            <div class="relation-elements">
                <div class="relation-element element-${relations.restrictedBy || 'metal'}">
                    ${elementSymbols[relations.restrictedBy] || '⚙️'}
                </div>
                <div class="relation-arrow">→</div>
                <div class="relation-element element-${result.mainElement}">
                    ${elementSymbols[result.mainElement]}
                </div>
            </div>
        </div>
        
        <div class="relation-card relation-bad fade-in" style="animation-delay: 0.4s;">
            <div class="relation-title">
                <i class="fas fa-ban"></i>
                您克的五行
            </div>
            <div class="relation-elements">
                <div class="relation-element element-${result.mainElement}">
                    ${elementSymbols[result.mainElement]}
                </div>
                <div class="relation-arrow">→</div>
                <div class="relation-element element-${relations.restrictTo}">
                    ${elementSymbols[relations.restrictTo]}
                </div>
            </div>
        </div>
    `;
    
    // 存储用户的先天五行数据
    window.userBirthElement = {
        mainElement: result.mainElement,
        elementName: result.name,
        symbol: result.symbol,
        relations: relations
    };
}

function getDayStem(year, month, day) {
  // 1900-01-31 是公认的：庚子日
  const baseDate = new Date(1900, 0, 31);
  const targetDate = new Date(year, month - 1, day);

  const diffDays = Math.floor(
    (targetDate - baseDate) / (24 * 60 * 60 * 1000)
  );

  const stemIndex = (diffDays % 10 + 10) % 10;
  return heavenlyStems[stemIndex];
}

// 全局变量
let currentQuestion = 0;
let quizScore = { wood: 0, fire: 0, earth: 0, metal: 0, water: 0 };
let selectedOption = null;
let isTransitioning = false;
let autoNextTimer = null;

// DOM元素
const birthdayContainer = document.getElementById('birthday-container');
const elementAnalysisContainer = document.getElementById('element-analysis-container');
const instructionContainer = document.getElementById('instruction-container');
const quizContainer = document.getElementById('quiz-container');
const resultContainer = document.getElementById('result-container');
const birthdayNextBtn = document.getElementById('birthday-next-btn');
const analysisNextBtn = document.getElementById('analysis-next-btn');
const startBtn = document.getElementById('start-btn');
const restartBtn = document.getElementById('restart-btn');
const backToBirthBtn = document.getElementById('back-to-birth-btn');
const yearSelect = document.getElementById('year-select');
const monthSelect = document.getElementById('month-select');
const daySelect = document.getElementById('day-select');
const cityNameElement = document.getElementById('city-name');
const elementNameElement = document.getElementById('element-name');
const cityDescriptionElement = document.getElementById('city-description');
const scoreGridElement = document.getElementById('score-grid');

// 页面切换函数
function showPage(pageId) {
    // 隐藏所有页面
    [birthdayContainer, elementAnalysisContainer, instructionContainer, quizContainer, resultContainer].forEach(page => {
        page.classList.add('hidden');
    });
    
    // 显示指定页面
    document.getElementById(pageId).classList.remove('hidden');
}

// 事件监听
birthdayNextBtn.addEventListener('click', () => {
    const year = parseInt(yearSelect.value);
    const month = parseInt(monthSelect.value);
    const day = parseInt(daySelect.value);
    
    if (!year || !month || !day) {
        alert('请完整选择出生年月日');
        return;
    }
    
    // 显示五行分析页面
    showPage('element-analysis-container');
    
    // 计算并显示五行分析
    showElementAnalysis(year, month, day);
});

analysisNextBtn.addEventListener('click', () => {
    showPage('instruction-container');
});

startBtn.addEventListener('click', startQuiz);
restartBtn.addEventListener('click', restartQuiz);
backToBirthBtn.addEventListener('click', () => {
    showPage('birthday-container');
});

// 日期选择器事件
yearSelect.addEventListener('change', () => {
    updateDaySelector();
    checkBirthdayInput();
});

monthSelect.addEventListener('change', () => {
    updateDaySelector();
    checkBirthdayInput();
});

daySelect.addEventListener('change', checkBirthdayInput);

// 初始化
function init() {
    initYearSelector();
    initDaySelector();
    // 确保只显示出生日期页面
    showPage('birthday-container');
}

// 开始测验
function startQuiz() {
    showPage('quiz-container');
    currentQuestion = 0;
    quizScore = { wood: 0, fire: 0, earth: 0, metal: 0, water: 0 };
    isTransitioning = false;
    showQuestion(currentQuestion);
}

// 显示问题
function showQuestion(index) {
    if (autoNextTimer) clearTimeout(autoNextTimer);
    
    isTransitioning = false;
    selectedOption = null;
    
    const question = questions[index];
    
    quizContainer.innerHTML = `
        <div class="question-card fade-in">
            <div class="question-header">
                <div class="question-progress">
                    <div class="question-number">${index + 1} / ${questions.length}</div>
                </div>
                <div class="question-text">${question.question}</div>
            </div>
            <div class="options-container" id="options-container">
                ${question.options.map((option, i) => `
                    <div class="option" data-index="${i}" data-element="${option.element}">
                        <div class="option-label">${String.fromCharCode(65 + i)}</div>
                        <div class="option-text">${option.text}</div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
    
    // 添加选项点击事件
    document.querySelectorAll('.option').forEach(option => {
        option.addEventListener('click', () => {
            if (!isTransitioning) {
                selectOption(option);
            }
        });
    });
}

// 选择选项
function selectOption(optionElement) {
    if (isTransitioning) return;
    
    isTransitioning = true;
    
    // 取消之前选择的选项
    if (selectedOption) {
        selectedOption.classList.remove('selected');
    }
    
    // 标记当前选择的选项
    optionElement.classList.add('selected');
    selectedOption = optionElement;
    
    // 记录分数
    const element = optionElement.dataset.element;
    quizScore[element]++;
    
    // 如果是最后一题，直接显示结果
    if (currentQuestion === questions.length - 1) {
        // 最后一题，等待1秒后显示结果
        setTimeout(() => {
            showResults();
        }, 800);
        return;
    }
    
    // 非最后一题，等待0.8秒后自动进入下一题
    autoNextTimer = setTimeout(() => {
        currentQuestion++;
        
        // 添加转场动画
        const questionCard = document.querySelector('.question-card');
        questionCard.classList.remove('fade-in');
        questionCard.classList.add('slide-out-left');
        
        setTimeout(() => {
            showQuestion(currentQuestion);
        }, 300);
    }, 800);
}

// 计算综合五行得分（先天五行 + 性格测验）
function calculateCompositeScore() {
    if (!window.userBirthElement) {
        // 如果没有先天五行数据，只使用测验分数
        const elementScores = Object.entries(quizScore);
        const mainElement = elementScores.reduce((a, b) => a[1] > b[1] ? a : b)[0];
        
        return {
            scores: quizScore,
            mainElement: mainElement
        };
    }
    
    // 先天五行得分（加权40%）
    const birthElement = window.userBirthElement.mainElement;
    const birthScores = {
        wood: birthElement === 'wood' ? 100 : 0,
        fire: birthElement === 'fire' ? 100 : 0,
        earth: birthElement === 'earth' ? 100 : 0,
        metal: birthElement === 'metal' ? 100 : 0,
        water: birthElement === 'water' ? 100 : 0
    };
    
    // 性格测验五行得分（加权60%）
    const quizScores = quizScore;
    
    // 计算综合得分
    const compositeScores = {};
    let mainElement = 'wood';
    let maxScore = 0;
    
    for (const element of ['wood', 'fire', 'earth', 'metal', 'water']) {
        // 先天五行得分（0或100）
        const birthScore = birthScores[element];
        
        // 性格测验得分归一化（最高49分）
        const normalizedQuizScore = (quizScores[element] / 49) * 100;
        
        // 加权计算：先天40% + 测验60%
        compositeScores[element] = Math.round(birthScore * 0.4 + normalizedQuizScore * 0.6);
        
        if (compositeScores[element] > maxScore) {
            maxScore = compositeScores[element];
            mainElement = element;
        }
    }
    
    return {
        scores: compositeScores,
        mainElement: mainElement,
        birthElement: birthElement,
        quizScores: quizScores
    };
}

// 显示结果
function showResults() {
    showPage('result-container');
    
    // 计算综合五行得分
    const compositeResult = calculateCompositeScore();
    const mainElement = compositeResult.mainElement;
    
    // 获取推荐城市
    const cities = cityData[mainElement];
    const randomCity = cities[Math.floor(Math.random() * cities.length)];
    
    // 更新结果页面
    cityNameElement.textContent = randomCity.name;
    elementNameElement.textContent = elementNames[mainElement];
    document.querySelector('.element-dot').className = `element-dot element-${mainElement}`;
    
    // 更新城市描述，加入先天五行考虑
    let description = randomCity.description;
    
    if (window.userBirthElement) {
        const birthMainElement = window.userBirthElement.mainElement;
        
        if (birthMainElement !== mainElement) {
            description += ` 根据您的出生日期分析，您先天为${elementNames[birthMainElement]}，后天性格测验显示为${elementNames[mainElement]}。这个城市能够平衡您的先天与后天属性，达到五行调和的效果。`;
        } else {
            description += ` 您的出生日期与性格测验结果一致，都显示为${elementNames[mainElement]}属性，说明这个城市与您的命理和性格高度契合。`;
        }
    }
    
    cityDescriptionElement.textContent = description;
    
    // 更新五行得分网格
    updateScoreGrid(compositeResult);
}

// 更新五行得分网格
function updateScoreGrid(compositeResult) {
    scoreGridElement.innerHTML = '';
    
    const elements = ['wood', 'fire', 'earth', 'metal', 'water'];
    
    // 排序显示
    const sortedElements = elements.sort((a, b) => compositeResult.scores[b] - compositeResult.scores[a]);
    
    sortedElements.forEach((element, index) => {
        const scoreItem = document.createElement('div');
        scoreItem.className = 'score-item';
        scoreItem.innerHTML = `
            <div class="score-element">
                <div class="element-dot element-${element}"></div>
                <span>${elementNames[element]}</span>
            </div>
            <div class="score-value">${compositeResult.scores[element]}%</div>
        `;
        
        scoreGridElement.appendChild(scoreItem);
    });
}

// 重新开始测验
function restartQuiz() {
    showPage('instruction-container');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// 初始化应用
init();
