// 设施升级数据
const facilityData = {
    warehouse: {
        name: "仓库",
        levels: {
            2: { coins: 5000, materials: {"医疗无人机": 2, "军情录音": 1, "继电器": 3} },
            3: { coins: 10000, materials: {"广角镜头": 2, "一桶油漆": 1, "转换插座": 2, "木雕烟斗": 3} },
            4: { coins: 20000, materials: {"广角镜头": 2, "加密路由器": 2, "生津柠檬茶": 4, "继电器": 6} },
            5: { coins: 40000, materials: {"功绩勋章": 1, "血氧仪": 2, "加密路由器": 3, "固态硬盘": 6} },
            6: { coins: 80000, materials: {"座钟": 1, "高速固态硬盘": 4, "ASOS电脑主板": 6, "内存条": 10} },
            7: { coins: 160000, materials: {"阵列服务器": 1, "军用卫星通讯仪": 3, "广角镜头": 10, "固态硬盘": 10} },
            8: { coins: 320000, materials: {"火箭燃料": 1, "黄金瞪羚": 2, "万足金条": 3, "军用弹道计算机": 5} },
            9: { coins: 640000, materials: {"复苏呼吸机": 1, "强化碳纤维板": 1, "高速磁盘阵列": 1, "强力吸尘器": 1} },
            10: { coins: 1280000, materials: {"非洲之心": 1, "奥莉薇娅香槟": 1, "血氧仪": 1} }
        }
    },
    command: {
        name: "指挥中心",
        levels: {
            2: { coins: 3000, materials: {"资料：军事情报": 2, "继电器": 3} },
            3: { coins: 6000, materials: {"内存条": 1, "医疗无人机": 2, "液晶显示屏": 1} },
            4: { coins: 12000, materials: {"ASOS电脑主板": 2, "GS5 手柄": 2, "间谍笔": 1} },
            5: { coins: 24000, materials: {"单反相机": 2, "数码相机": 1, "加密路由器": 1} },
            6: { coins: 48000, materials: {"量子存储": 1, "功绩勋章": 2, "固态硬盘": 2, "收音机": 4} }
        }
    },
    workbench: {
        name: "工作台",
        levels: {
            1: { coins: 4000, materials: {"军情录音": 1, "液晶显示屏": 1} },
            2: { coins: 11200, materials: {"广角镜头": 2, "一包水泥": 2, "转换插座": 2} },
            3: { coins: 31300, materials: {"军用卫星通讯仪": 1, "ASOS电脑主板": 3, "一包水泥": 5} }
        }
    },
    tech: {
        name: "技术中心",
        levels: {
            1: { coins: 3500, materials: {"GS5 手柄": 1, "医疗无人机": 1, "继电器": 1} },
            2: { coins: 9800, materials: {"ASOS电脑主板": 2, "HIFI声卡": 2, "转换插座": 1} },
            3: { coins: 27400, materials: {"显卡": 1, "ASOS电脑主板": 2, "液晶显示屏": 1} }
        }
    },
    range: {
        name: "靶场",
        levels: {
            1: { coins: 3500, materials: {"摩卡咖啡壶": 1, "转换插座": 1, "继电器": 1} },
            2: { coins: 7000, materials: {"军用热像仪": 1, "液晶显示屏": 1, "摩卡咖啡壶": 2} },
            3: { coins: 14000, materials: {"广角镜头": 2, "内存条": 2, "军情录音": 2} },
            4: { coins: 28000, materials: {"咖啡": 3, "血氧仪": 2, "血压仪": 1, "燃气罐": 2} },
            5: { coins: 56000, materials: {"单反相机": 2, "镜头": 3, "手机": 3, "军情录音": 6} },
            6: { coins: 112000, materials: {"滑膛枪展品": 1, "军用卫星通讯仪": 3, "CPU": 2, "一包水泥": 3} },
            7: { coins: 224000, materials: {"飞行记录仪": 1, "军用电台": 1, "军用卫星通讯仪": 3} }
        }
    },
    training: {
        name: "训练中心",
        levels: {
            1: { coins: 4000, materials: {"三角洲特种部队：刺刀特遣队": 1, "摩卡咖啡壶": 1, "转换插座": 1} },
            2: { coins: 8000, materials: {"广角镜头": 1, "HIFI声卡": 2, "军情录音": 1} },
            3: { coins: 16000, materials: {"咖啡": 1, "手机": 1, "黄金饰章": 5} },
            4: { coins: 32000, materials: {"军用炸药": 2, "数码相机": 2, "骨锯": 5} },
            5: { coins: 64000, materials: {"燃料电池": 1, "军用望远镜": 3, "仪典匕首": 2} },
            6: { coins: 128000, materials: {"呼吸机": 1, "显卡": 1, "纯金打火机": 4, "电动车电池": 7} },
            7: { coins: 256000, materials: {"笔记本电脑": 1, "G.T.I卫星通信天线": 1, "阿萨拉特色酒杯": 10, "军用炸药": 7} }
        }
    },
    pharmacy: {
        name: "制药台",
        levels: {
            1: { coins: 3000, materials: {"血压仪": 1, "转换插座": 1} },
            2: { coins: 8400, materials: {"静脉定位器": 1, "骨锯": 3, "医疗无人机": 1} },
            3: { coins: 23500, materials: {"实验数据": 1, "静脉定位器": 1, "血氧仪": 1, "骨锯": 1} }
        }
    },
    armor: {
        name: "防具台",
        levels: {
            1: { coins: 4000, materials: {"资料：军事情报": 2, "液晶显示屏": 1, "间谍笔": 1} },
            2: { coins: 11200, materials: {"电动车电池": 1, "黄金饰章": 2, "医疗无人机": 2} },
            3: { coins: 31300, materials: {"燃料电池": 1, "电动车电池": 1, "加密路由器": 1} }
        }
    }
};

function calculateMaterials() {
    const facilities = ['warehouse', 'command', 'workbench', 'tech', 'range', 'training', 'pharmacy', 'armor'];
    
    let totalCoins = 0;
    let totalMaterials = {};

    // 计算每个设施的升级成本
    facilities.forEach(facility => {
        const currentLevel = parseInt(document.getElementById(`${facility}-current`).value) || 0;
        const targetLevel = parseInt(document.getElementById(`${facility}-target`).value) || 0;
        const facilityInfo = facilityData[facility];
        
        if (facilityInfo && targetLevel > currentLevel) {
            // 计算从当前等级升到目标等级的总成本
            for (let level = currentLevel + 1; level <= targetLevel; level++) {
                const levelData = facilityInfo.levels[level];
                if (levelData) {
                    totalCoins += levelData.coins;
                    
                    // 累加材料
                    Object.keys(levelData.materials).forEach(material => {
                        if (totalMaterials[material]) {
                            totalMaterials[material] += levelData.materials[material];
                        } else {
                            totalMaterials[material] = levelData.materials[material];
                        }
                    });
                }
            }
        }
    });

    // 计算材料总价值（使用网页中的价格数据）
    const materialPrices = {
        "医疗无人机": 83385,
        "军情录音": 26863,
        "继电器": 9173,
        "广角镜头": 51038,
        "一桶油漆": 21439,
        "转换插座": 9542,
        "木雕烟斗": 14389,
        "加密路由器": 39220,
        "生津柠檬茶": 14953,
        "功绩勋章": 81543,
        "血氧仪": 59718,
        "固态硬盘": 33791,
        "座钟": 197677,
        "高速固态硬盘": 74908,
        "ASOS电脑主板": 44936,
        "内存条": 26303,
        "阵列服务器": 879368,
        "军用卫星通讯仪": 196467,
        "火箭燃料": 2,
        "黄金瞪羚": 428853,
        "万足金条": 330986,
        "军用弹道计算机": 91410,
        "复苏呼吸机": 7193834,
        "强化碳纤维板": 2230928,
        "高速磁盘阵列": 3344151,
        "强力吸尘器": 1545291,
        "非洲之心": 13276444,
        "奥莉薇娅香槟": 337596,
        "资料：军事情报": 12604,
        "液晶显示屏": 22275,
        "GS5 手柄": 28624,
        "间谍笔": 21051,
        "单反相机": 126090,
        "数码相机": 70783,
        "量子存储": 277315,
        "收音机": 24277,
        "一包水泥": 49004,
        "显卡": 331975,
        "HIFI声卡": 25097,
        "摩卡咖啡壶": 16187,
        "军用热像仪": 63416,
        "咖啡": 68416,
        "血压仪": 36818,
        "燃气罐": 21626,
        "镜头": 65754,
        "手机": 61368,
        "滑膛枪展品": 654065,
        "CPU": 64154,
        "飞行记录仪": 2974405,
        "军用电台": 816590,
        "三角洲特种部队：刺刀特遣队": 11374,
        "黄金饰章": 20417,
        "军用炸药": 128801,
        "骨锯": 20568,
        "燃料电池": 371830,
        "军用望远镜": 93548,
        "仪典匕首": 97846,
        "呼吸机": 447049,
        "纯金打火机": 61637,
        "电动车电池": 77666,
        "笔记本电脑": 1935465,
        "G.T.I卫星通信天线": 2,
        "阿萨拉特色酒杯": 62771,
        "实验数据": 230065,
        "静脉定位器": 78126
    };

    let totalMaterialValue = 0;
    Object.keys(totalMaterials).forEach(material => {
        const price = materialPrices[material] || 0;
        totalMaterialValue += price * totalMaterials[material];
    });

    // 更新显示
    document.getElementById('totalCoins').textContent = totalCoins.toLocaleString();
    document.getElementById('totalMaterials').textContent = totalMaterialValue.toLocaleString();
    document.getElementById('totalCost').textContent = (totalCoins + totalMaterialValue).toLocaleString();

    // 显示材料清单
    displayMaterialsList(totalMaterials);
}

function displayMaterialsList(materials) {
    const materialsListDiv = document.getElementById('materialsList');
    
    if (Object.keys(materials).length === 0) {
        materialsListDiv.innerHTML = '<div class="empty-state">请输入设施等级并点击计算</div>';
        return;
    }

    // 按材料名称排序
    const sortedMaterials = Object.keys(materials).sort();
    
    let html = '';
    sortedMaterials.forEach(material => {
        html += `
            <div class="material-item">
                <span class="material-name">${material}</span>
                <span class="material-count">${materials[material]}</span>
            </div>
        `;
    });
    
    materialsListDiv.innerHTML = html;
}

function clearAll() {
    const facilities = ['warehouse', 'command', 'workbench', 'tech', 'range', 'training', 'pharmacy', 'armor'];
    
    // 清空所有输入框，重置为默认值
    facilities.forEach(facility => {
        const currentInput = document.getElementById(`${facility}-current`);
        const targetSelect = document.getElementById(`${facility}-target`);
        
        if (facility === 'warehouse' || facility === 'command') {
            currentInput.value = 1; // 仓库和指挥中心默认从1级开始
        } else {
            currentInput.value = 0; // 其他设施默认从0级开始
        }
        
        // 重置目标等级为最高级
        targetSelect.selectedIndex = targetSelect.options.length - 1;
    });
    
    // 清空结果显示
    document.getElementById('totalCoins').textContent = '0';
    document.getElementById('totalMaterials').textContent = '0';
    document.getElementById('totalCost').textContent = '0';
    document.getElementById('materialsList').innerHTML = '<div class="empty-state">请输入设施等级并点击计算</div>';
}

// 页面加载时初始化
document.addEventListener('DOMContentLoaded', function() {
    // 为所有输入框和下拉框添加实时计算功能
    const inputs = document.querySelectorAll('input[type="number"]');
    const selects = document.querySelectorAll('select');
    
    inputs.forEach(input => {
        input.addEventListener('input', calculateMaterials);
    });
    
    selects.forEach(select => {
        select.addEventListener('change', calculateMaterials);
    });
    
    // 初始化显示
    document.getElementById('materialsList').innerHTML = '<div class="empty-state">请输入设施等级并点击计算</div>';
    
    // 初始计算一次
    calculateMaterials();
});
