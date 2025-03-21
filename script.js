document.addEventListener('DOMContentLoaded', () => {
    const themeSelector = document.getElementById('themeSelector');
    const langToggle = document.getElementById('langToggle');
    
    // 主题切换
    const colorOptions = document.querySelectorAll('.color-option');
    colorOptions.forEach(option => {
        option.addEventListener('click', () => {
            // 移除其他选项的active类
            colorOptions.forEach(opt => opt.classList.remove('active'));
            // 添加当前选项的active类
            option.classList.add('active');
            // 设置主题
            document.documentElement.setAttribute('data-theme', option.dataset.theme);
        });
    });

    // 设置默认主题
    document.querySelector('[data-theme="default"]').classList.add('active');

    // 语言切换
    const translations = {
        en: {
            title: "Mai Cuiyao's Portfolio",
            nav: {
                home: 'Home',
                education: 'Education',
                experience: 'Experience',
                campus: 'Campus',
                projects: 'Projects'
            },
            theme: {
                light: 'Light Theme',
                dark: 'Dark Theme',
                minimal: 'Minimal Theme'
            },
            name: 'Mai Cuiyao',
            major: 'Computer Science and Technology | Zhoukou Normal University',
            education: {
                title: 'Education',
                university: 'Zhoukou Normal University',
                major: 'Computer Science and Technology',
                period: 'September 2021 - July 2025',
                score: 'Average Score: 86.6/100',
                gpa: 'GPA: 3.18/4.0'
            },
            experience: {
                title: 'Professional Experience',
                kingdee: {
                    company: 'Kingdee International Software Group',
                    period: 'Feb 2025 - Jun 2025',
                    position: 'ERP Implementation Intern',
                    point1: 'Assisted in implementing Kingdee Cloud Galaxy ERP system, including system configuration, user training, and deployment support',
                    point2: 'Managed initial data setup, module testing, and issue tracking to ensure smooth project progression',
                    point3: 'Optimized production reporting process, improving operational efficiency by 20% post-launch',
                    point4: 'Developed project documentation including user manuals and training materials'
                },
                chengda: {
                    company: 'Zhaoqing Chengda Automation Technology Co., Ltd',
                    period: 'Sep 2024 - Dec 2024',
                    position: 'Industrial IoT Development Intern',
                    point1: 'Developed energy monitoring system using .NET and C#, designed and implemented cloud data collection module',
                    point2: 'Integrated 20+ industrial sensor devices via Modbus protocol, processing ~120,000 energy consumption records daily',
                    point3: 'Led development of energy visualization dashboard showing real-time consumption trends for electricity, coal, and natural gas',
                    point4: 'Achieved 8% reduction in inefficient energy consumption for clients after system implementation'
                }
            },
            campus: {
                title: 'Campus Experience',
                innovation: {
                    title: 'Innovation & Entrepreneurship Team',
                    period: 'Oct 2021 - Aug 2024',
                    position: 'Team Leader',
                    point1: 'Led a 50-member team in developing 17 innovative projects aligned with university strategy and market needs',
                    point2: 'Coordinated cross-functional collaboration between technical, R&D, financial, and legal departments',
                    point3: 'Achieved 81 awards during leadership tenure'
                },
                rural: {
                    title: 'Rural Revitalization Team',
                    period: 'Jul 2023 - Oct 2023',
                    position: 'Project Leader',
                    point1: 'Led IoT agricultural monitoring system deployment in rural areas',
                    point2: 'Successfully installed 23 sensor nodes and conducted science education activities for rural children',
                    point3: 'Featured on China.com and other media platforms'
                }
            },
            projects: {
                title: 'Projects',
                industrial: {
                    title: 'Industrial Detection & Safety Monitoring'
                },
                vision: {
                    title: 'Computer Vision'
                },
                agriculture: {
                    title: 'Smart Agriculture & IoT'
                },
                virtual: {
                    title: 'Virtual Interaction & Entertainment'
                }
            }
        },
        zh: {
            title: '麦萃窈的个人网站',
            nav: {
                home: '首页',
                education: '学习情况',
                experience: '实习经历',
                campus: '校园经历',
                projects: '项目经历'
            },
            theme: {
                light: '浅色主题',
                dark: '深色主题',
                minimal: '简约主题'
            },
            name: '麦萃窈',
            major: '计算机科学与技术 | 周口师范学院',
            education: {
                title: '学习情况',
                university: '周口师范学院',
                major: '计算机科学与技术',
                period: '2021年9月 - 2025年7月',
                score: '平均分：86.6/100',
                gpa: 'GPA：3.18/4.0'
            },
            experience: {
                title: '实习经历',
                kingdee: {
                    company: '金蝶国际软件集团',
                    period: '2025年2月 - 2025年6月',
                    position: 'ERP实施实习生',
                    point1: '协助实施ERP系统（金蝶云银河），包括系统配置、用户培训和上线支持',
                    point2: '处理初始数据设置、模块测试和问题跟踪，以确保项目的顺利进行',
                    point3: '帮助优化了生产报告流程，将启动后的运营效率提高了20%',
                    point4: '编制项目文件，包括用户手册和培训材料'
                },
                chengda: {
                    company: '肇庆成达自动化技术有限公司',
                    period: '2024年9月 - 2024年12月',
                    position: '工业物联网开发实习生',
                    point1: '参与基于.NET和C#的能源监测系统开发，设计和实现了云数据采集模块',
                    point2: '通过Modbus协议集成了20多个工业传感器设备，每天处理约12万份能源消耗记录',
                    point3: '领导能源可视化仪表盘开发，通过成本分析显示电力、煤炭和天然气的实时消耗趋势',
                    point4: '系统启动后帮助客户减少了8%的无效能源消耗'
                }
            },
            campus: {
                title: '校园经历',
                innovation: {
                    title: '创新创业团队',
                    period: '2021年10月 - 2024年8月',
                    position: '团队负责人',
                    point1: '带领50人团队开发17个创新项目，符合学校发展战略和市场需求',
                    point2: '协调技术、研发、财务和法律部门之间的跨职能协作',
                    point3: '任职期间团队获得81项奖项'
                },
                rural: {
                    title: '乡村振兴团队',
                    period: '2023年7月 - 2023年10月',
                    position: '项目负责人',
                    point1: '带领团队在农村部署物联网农业监测系统',
                    point2: '成功安装配置23个传感器节点，并为乡村儿童开展科普教育活动',
                    point3: '项目在China.com等多个媒体平台报道'
                }
            },
            projects: {
                title: '项目经历',
                industrial: {
                    title: '工业检测与安全监控'
                },
                vision: {
                    title: '计算机视觉'
                },
                agriculture: {
                    title: '智慧农业与物联网'
                },
                virtual: {
                    title: '虚拟交互与娱乐应用'
                }
            }
        }
    };

    let currentLang = 'en';

    langToggle.addEventListener('click', () => {
        currentLang = currentLang === 'zh' ? 'en' : 'zh';
        langToggle.textContent = currentLang === 'zh' ? 'EN' : '中文';
        updateLanguage();
    });

    function updateLanguage() {
        document.documentElement.lang = currentLang;
        const elements = document.querySelectorAll('[data-translate]');
        elements.forEach(element => {
            const key = element.getAttribute('data-translate');
            const keys = key.split('.');
            let translation = translations[currentLang];
            for (const k of keys) {
                translation = translation[k];
            }
            if (translation) {
                element.textContent = translation;
            }
        });
    }

    updateLanguage();

    // 添加滚动指示器
    const sections = document.querySelectorAll('.section');
    const scrollIndicator = document.createElement('div');
    scrollIndicator.className = 'scroll-indicator';
    
    sections.forEach((section, index) => {
        const dot = document.createElement('div');
        dot.className = 'scroll-dot';
        dot.addEventListener('click', () => {
            section.scrollIntoView({ behavior: 'smooth' });
        });
        scrollIndicator.appendChild(dot);
    });
    
    document.body.appendChild(scrollIndicator);

    // 处理滚动事件
    const handleScroll = () => {
        const scrollPosition = window.scrollY;
        sections.forEach((section, index) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            
            if (scrollPosition >= sectionTop - window.innerHeight/2 && 
                scrollPosition < sectionTop + sectionHeight - window.innerHeight/2) {
                document.querySelectorAll('.scroll-dot').forEach(dot => dot.classList.remove('active'));
                document.querySelectorAll('.scroll-dot')[index].classList.add('active');
                section.classList.add('active');
            } else {
                section.classList.remove('active');
            }
        });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // 初始化时调用一次

    // 添加到现有的 DOMContentLoaded 事件监听器中
    const projectData = {
        industrial: {
            en: [
                {
                    title: "Real-time Track Performance Detection System Based on Voiceprint Recognition",
                    description: "Integrated voiceprint recognition technology and TDOA two-step sound source positioning technology for accurate detection and localization of abnormal sounds on railway tracks. Integrated voice recognition engine for systematic recording of recognition records, improving recognition accuracy. Obtained software copyright (Registration No. 2023SR0394602).",
                    images: [
                        { src: "pic/gd1.jpg", alt: "Track Detection System 1" },
                        { src: "pic/gd2.jpg", alt: "Track Detection System 2" },
                        { src: "pic/gd3.jpg", alt: "Track Detection System 3" },
                        { src: "pic/gd4.jpg", alt: "Track Detection System 4" },
                        { src: "pic/gd5.jpg", alt: "Track Detection System 5" },
                        { src: "pic/gd6.jpg", alt: "Track Detection System 6" },
                        { src: "pic/gd7.jpg", alt: "Track Detection System 7" }
                    ]
                },
                {
                    title: "AI-based Metal Corrosion Diagnosis",
                    description: "Developed a corrosion sensor array combined with deep neural networks for quantitative assessment of material damage.",
                    images: [
                        { src: "pic/fs-1.jpg", alt: "Corrosion Diagnosis System 1" },
                        { src: "pic/fs1.jpg", alt: "Corrosion Diagnosis System 2" },
                        { src: "pic/fs2.jpg", alt: "Corrosion Diagnosis System 3" }
                    ]
                },
                {
                    title: "Deep Learning-based Worker Fatigue Detection System",
                    description: "Implemented real-time fatigue monitoring and alerting for industrial workers using EEG signal analysis and machine learning algorithms.",
                    images: [
                        { src: "pic/gr1.jpg", alt: "Fatigue Detection System 1" },
                        { src: "pic/gr2.jpg", alt: "Fatigue Detection System 2" },
                        { src: "pic/gr3.jpg", alt: "Fatigue Detection System 3" },
                        { src: "pic/gr4.jpg", alt: "Fatigue Detection System 4" },
                        { src: "pic/gr5.jpg", alt: "Fatigue Detection System 5" },
                        { src: "pic/gr6.jpg", alt: "Fatigue Detection System 6" },
                        { src: "pic/gr7.jpg", alt: "Fatigue Detection System 7" },
                        { src: "pic/gr8.jpg", alt: "Fatigue Detection System 8" },
                        { src: "pic/gr9.jpg", alt: "Fatigue Detection System 9" }
                    ]
                }
            ],
            zh: [
                {
                    title: "基于声纹识别技术的实时轨道性能检测系统",
                    description: "综合声纹识别技术和TDOA双步声源定位技术，可以准确地检测出和定位铁路轨道上的异常声音。集成语音识别引擎，把识别记录的功能的所有语音识别有序记录保存，提高了识别准确率，并获得软件著作权（登记号2023SR0394602）",
                    images: [
                        { src: "pic/gd1.jpg", alt: "轨道检测系统 1" },
                        { src: "pic/gd2.jpg", alt: "轨道检测系统 2" },
                        { src: "pic/gd3.jpg", alt: "轨道检测系统 3" },
                        { src: "pic/gd4.jpg", alt: "轨道检测系统 4" },
                        { src: "pic/gd5.jpg", alt: "轨道检测系统 5" },
                        { src: "pic/gd6.jpg", alt: "轨道检测系统 6" },
                        { src: "pic/gd7.jpg", alt: "轨道检测系统 7" }
                    ]
                },
                {
                    title: "基于人工智能的金属腐蚀诊断",
                    description: "开发了一种与深度神经网络相结合的腐蚀传感器阵列，用于定量评估材料损伤。",
                    images: [
                        { src: "pic/fs-1.jpg", alt: "腐蚀诊断系统 1" },
                        { src: "pic/fs1.jpg", alt: "腐蚀诊断系统 2" },
                        { src: "pic/fs2.jpg", alt: "腐蚀诊断系统 3" }
                    ]
                },
                {
                    title: "基于深度学习的工人疲劳检测系统",
                    description: "采用脑电图信号分析和机器学习算法对工业工人进行实时疲劳监测和警报。",
                    images: [
                        { src: "pic/gr1.jpg", alt: "疲劳检测系统 1" },
                        { src: "pic/gr2.jpg", alt: "疲劳检测系统 2" },
                        { src: "pic/gr3.jpg", alt: "疲劳检测系统 3" },
                        { src: "pic/gr4.jpg", alt: "疲劳检测系统 4" },
                        { src: "pic/gr5.jpg", alt: "疲劳检测系统 5" },
                        { src: "pic/gr6.jpg", alt: "疲劳检测系统 6" },
                        { src: "pic/gr7.jpg", alt: "疲劳检测系统 7" },
                        { src: "pic/gr8.jpg", alt: "疲劳检测系统 8" },
                        { src: "pic/gr9.jpg", alt: "疲劳检测系统 9" }
                    ]
                }
            ]
        },
        vision: {
            en: [
                {
                    title: "Python-based Face Recognition System",
                    description: [
                        "Implemented real-time face detection using OpenCV, achieved frontal face recognition, and adapted to blurred face detection",
                        "Utilized YOLO pre-trained model for rapid face data collection, providing basic training samples for the system"
                    ].join('\n'),
                    images: [
                        { src: "pic/py1.jpg", alt: "Face Recognition System" }
                    ]
                },
                {
                    title: "All-Terrain Intelligent Robot",
                    description: "Built a six-wheel drive robot based on Arduino development platform. Through the integration of infrared, ultrasonic and inertial navigation fusion system, combined with dynamic path planning algorithm, achieved automatic obstacle avoidance and precise path tracking in complex scenarios",
                    media: [
                        { type: 'video', src: "pic/jqr1.mp4", alt: "Intelligent Robot Demo" },
                        { type: 'image', src: "pic/jqr2.jpg", alt: "Intelligent Robot 2" },
                        { type: 'image', src: "pic/jqr3.jpg", alt: "Intelligent Robot 3" },
                        { type: 'image', src: "pic/jqr4.jpg", alt: "Intelligent Robot 4" }
                    ]
                }
            ],
            zh: [
                {
                    title: "基于Python的人脸识别系统",
                    description: [
                        "利用OpenCV实现实时人脸检测，实现前叶人脸识别，并适应模糊人脸检测",
                        "借助YOLO预训练模型快速采集人脸数据，为系统提供基础训练样本"
                    ].join('\n'),
                    images: [
                        { src: "pic/py1.jpg", alt: "人脸识别系统" }
                    ]
                },
                {
                    title: "全地形智能机器人",
                    description: "基于Arduino开发平台构建的六轮驱动机器人，通过集成红外、超声波与惯性导航融合系统，结合动态路径规划算法，实现了复杂场景下的自动避障与精准路径跟踪功能",
                    media: [
                        { type: 'video', src: "pic/jqr1.mp4", alt: "智能机器人演示" },
                        { type: 'image', src: "pic/jqr2.jpg", alt: "智能机器人 2" },
                        { type: 'image', src: "pic/jqr3.jpg", alt: "智能机器人 3" },
                        { type: 'image', src: "pic/jqr4.jpg", alt: "智能机器人 4" }
                    ]
                }
            ]
        },
        agriculture: {
            en: [
                {
                    title: "STM32 and IoT Agricultural Monitoring System",
                    description: [
                        "Developed an embedded IoT system for real-time environmental monitoring and remote control of agricultural equipment",
                        "Created a mini-program for agricultural product adoption, enabling traceability of agricultural products and promoting local rural economic development"
                    ].join('\n'),
                    media: [
                        { type: 'video', src: "pic/ny1.mp4", alt: "Agricultural System Demo 1" },
                        { type: 'video', src: "pic/ny2.mp4", alt: "Agricultural System Demo 2" },
                        { type: 'image', src: "pic/ny3.jpg", alt: "Agricultural System Image 1" },
                        { type: 'image', src: "pic/ny4.jpg", alt: "Agricultural System Image 2" }
                    ]
                },
                {
                    title: "AI + IoT Smart Aquaculture Monitoring System",
                    description: "Developed an AI-driven aquaculture water quality management multi-sensor monitoring system, ensuring real-time anomaly detection and optimizing shrimp and fish farming",
                    images: [
                        { src: "pic/yy1.jpg", alt: "Aquaculture System 1" },
                        { src: "pic/yy2.jpg", alt: "Aquaculture System 2" },
                        { src: "pic/yy3.jpg", alt: "Aquaculture System 3" },
                        { src: "pic/yy4.jpg", alt: "Aquaculture System 4" },
                        { src: "pic/yy5.jpg", alt: "Aquaculture System 5" },
                        { src: "pic/yy6.jpg", alt: "Aquaculture System 6" },
                        { src: "pic/yy7.jpg", alt: "Aquaculture System 7" },
                        { src: "pic/yy8.jpg", alt: "Aquaculture System 8" },
                        { src: "pic/yy9.jpg", alt: "Aquaculture System 9" },
                        { src: "pic/yy10.jpg", alt: "Aquaculture System 10" },
                        { src: "pic/yy11.jpg", alt: "Aquaculture System 11" }
                    ]
                }
            ],
            zh: [
                {
                    title: "STM32和物联网农业监测系统",
                    description: [
                        "开发了一个嵌入式物联网系统，用于实时监测环境信息和远程控制农用设备",
                        "为农产品采用建立认养小程序，实现农产品种植可溯源，促进当地农村经济发展"
                    ].join('\n'),
                    media: [
                        { type: 'video', src: "pic/ny1.mp4", alt: "农业系统演示 1" },
                        { type: 'video', src: "pic/ny2.mp4", alt: "农业系统演示 2" },
                        { type: 'image', src: "pic/ny3.jpg", alt: "农业系统图片 1" },
                        { type: 'image', src: "pic/ny4.jpg", alt: "农业系统图片 2" }
                    ]
                },
                {
                    title: "人工智能+物联网智能水产养殖监测系统",
                    description: "开发了一个人工智能驱动的水产养殖水质管理多传感器监测系统，确保实时异常检测，优化对虾和鱼类养殖",
                    images: [
                        { src: "pic/yy1.jpg", alt: "水产养殖系统 1" },
                        { src: "pic/yy2.jpg", alt: "水产养殖系统 2" },
                        { src: "pic/yy3.jpg", alt: "水产养殖系统 3" },
                        { src: "pic/yy4.jpg", alt: "水产养殖系统 4" },
                        { src: "pic/yy5.jpg", alt: "水产养殖系统 5" },
                        { src: "pic/yy6.jpg", alt: "水产养殖系统 6" },
                        { src: "pic/yy7.jpg", alt: "水产养殖系统 7" },
                        { src: "pic/yy8.jpg", alt: "水产养殖系统 8" },
                        { src: "pic/yy9.jpg", alt: "水产养殖系统 9" },
                        { src: "pic/yy10.jpg", alt: "水产养殖系统 10" },
                        { src: "pic/yy11.jpg", alt: "水产养殖系统 11" }
                    ]
                }
            ]
        },
        virtual: {
            en: [
                {
                    title: "Java-based Virtual Pet Mini Program",
                    description: "Designed a pet life cycle state machine model, implementing dynamic emotion and growth value calculation system",
                    images: [
                        { src: "pic/bs1.jpg", alt: "Virtual Pet System 1" },
                        { src: "pic/bs2.jpg", alt: "Virtual Pet System 2" },
                        { src: "pic/by3.jpg", alt: "Virtual Pet System 3" },
                        { src: "pic/by4.jpg", alt: "Virtual Pet System 4" },
                        { src: "pic/by5.jpg", alt: "Virtual Pet System 5" },
                        { src: "pic/by6.jpg", alt: "Virtual Pet System 6" }
                    ]
                }
            ],
            zh: [
                {
                    title: "基于Java的虚拟宠物迷你程序",
                    description: "设计了一个宠物生命周期状态机模型，实现了动态情绪和增长价值计算系统",
                    images: [
                        { src: "pic/bs1.jpg", alt: "虚拟宠物系统 1" },
                        { src: "pic/bs2.jpg", alt: "虚拟宠物系统 2" },
                        { src: "pic/by3.jpg", alt: "虚拟宠物系统 3" },
                        { src: "pic/by4.jpg", alt: "虚拟宠物系统 4" },
                        { src: "pic/by5.jpg", alt: "虚拟宠物系统 5" },
                        { src: "pic/by6.jpg", alt: "虚拟宠物系统 6" }
                    ]
                }
            ]
        }
    };

    // 创建弹窗 HTML
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content">
            <button class="modal-close">×</button>
            <h3 class="modal-title"></h3>
            <div class="modal-projects"></div>
        </div>
    `;
    document.body.appendChild(modal);

    // 添加事件监听器
    document.querySelectorAll('.project-category').forEach(category => {
        category.addEventListener('click', () => {
            const type = category.querySelector('h3').getAttribute('data-translate').split('.')[1];
            showProjectModal(type);
        });
    });

    modal.querySelector('.modal-close').addEventListener('click', () => {
        modal.classList.remove('active');
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
        }
    });

    function showProjectModal(type) {
        const data = projectData[type][currentLang];
        const title = translations[currentLang].projects[type].title;
        
        modal.querySelector('.modal-title').textContent = title;
        
        const projectsHTML = data.map(project => {
            const galleryHTML = project.images ? `
                <div class="project-gallery">
                    <button class="gallery-nav gallery-prev">‹</button>
                    <div class="gallery-container">
                        ${project.images.map(img => `
                            <div class="gallery-item">
                                <img src="${img.src}" alt="${img.alt}" loading="lazy">
                            </div>
                        `).join('')}
                    </div>
                    <button class="gallery-nav gallery-next">›</button>
                </div>
            ` : project.media ? `
                <div class="project-gallery">
                    <button class="gallery-nav gallery-prev">‹</button>
                    <div class="gallery-container">
                        ${project.media.map(item => `
                            <div class="gallery-item">
                                ${item.type === 'video' ? `
                                    <video controls preload="metadata">
                                        <source src="${item.src}" type="video/mp4">
                                        Your browser does not support the video tag.
                                    </video>
                                ` : `
                                    <img src="${item.src}" alt="${item.alt}" loading="lazy">
                                `}
                            </div>
                        `).join('')}
                    </div>
                    <button class="gallery-nav gallery-next">›</button>
                </div>
            ` : '';

            return `
                <div class="project-item">
                    <h4>${project.title}</h4>
                    <p>${project.description}</p>
                    ${galleryHTML}
                </div>
            `;
        }).join('');
        
        modal.querySelector('.modal-projects').innerHTML = projectsHTML;
        
        // 添加图片滚动事件监听
        const galleries = modal.querySelectorAll('.project-gallery');
        galleries.forEach(gallery => {
            const container = gallery.querySelector('.gallery-container');
            const prev = gallery.querySelector('.gallery-prev');
            const next = gallery.querySelector('.gallery-next');
            
            prev.addEventListener('click', () => {
                container.scrollBy({ left: -container.offsetWidth / 3, behavior: 'smooth' });
            });
            
            next.addEventListener('click', () => {
                container.scrollBy({ left: container.offsetWidth / 3, behavior: 'smooth' });
            });
        });

        modal.classList.add('active');
    }
}); 