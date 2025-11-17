
    // --- ELEMENTOS DO FORMULÁRIO FINANCEIRO
    const form = document.getElementById('expense-form');
    const expenseList = document.getElementById('expense-list');
    const totalEl = document.getElementById('total');
    const descInput = document.getElementById('desc');
    const categoryInput = document.getElementById('category');
    const typeInput = document.getElementById('type');
    const valueInput = document.getElementById('value');
    const submitButton = document.getElementById('submit-expense-btn');
    const buttonGroup = document.querySelector('.add-btn-group');
    const showAddTransactionBtn = document.getElementById('show-add-transaction-form-btn');
    const addTransactionContainer = document.getElementById('add-transaction-container');
    const transactionFormTitle = document.getElementById('transaction-form-title');
    const transactionListView = document.getElementById('transaction-list-view');
    const backToTransactionsListBtn = document.getElementById('back-to-transactions-list-btn');
    
    // --- ELEMENTOS DE GERENCIAMENTO DE CATEGORIAS ---
    const manageCategoriesBtnBudgets = document.getElementById('manage-categories-btn-budgets');
    const categorySection = document.getElementById('category-section');
    const newCategoryNameInput = document.getElementById('newCategoryName');
    const addCategoryButton = document.getElementById('addCategoryButton');
    const newCategoryTypeInput = document.getElementById('newCategoryType');
    const categoryIconPicker = document.getElementById('categoryIconPicker');
    const categoryIconHiddenInput = document.getElementById('categoryIcon');
    const categoryIconColorInput = document.getElementById('categoryIconColor');
    const categoryColorPicker = document.getElementById('categoryColorPicker');
    const goalColorPicker = document.getElementById('goalColorPicker');
    const listColorPicker = document.getElementById('list-color-picker');
    const goalColor = document.getElementById('goalColor');
    const listColor = document.getElementById('listColor');
    
    // Elementos do formulário de edição
    const addCategoryForm = document.getElementById('add-category-form');
    const editCategoryForm = document.getElementById('edit-category-form');
    const editCategoryNameInput = document.getElementById('editCategoryName');
    const editCategoryTypeInput = document.getElementById('editCategoryType');
    const saveCategoryButton = document.getElementById('saveCategoryButton');
    const cancelEditButton = document.getElementById('cancelEditButton');
    
    // --- ELEMENTOS DO DASHBOARD E SUB-VIEWS FINANCEIRAS ---
    const financeDashboardMain = document.getElementById('finance-dashboard-main');
    const transactionsView = document.getElementById('transactions-view');
    const closeTransactionsViewBtn = document.getElementById('close-transactions-view');
    const viewDetailsBtn = document.getElementById('view-details-btn');
    const viewCategorySpendingBtn = document.getElementById('view-category-spending-btn');
    const viewInvestmentsBtn = document.getElementById('view-investments-btn');
    const descriptionSection = document.getElementById('description-section'); 

    // --- ELEMENTOS DE ORÇAMENTOS (BUDGETS) ---
    const categoryLimitForm = document.getElementById('category-limit-form');
    const budgetsView = document.getElementById('budgets-view');
    const closeBudgetsViewBtn = document.getElementById('close-budgets-view');
    
    // --- ELEMENTOS DE INVESTIMENTOS ---
    const newGoalForm = document.getElementById('new-goal-form');
    const goalsContainer = document.getElementById('goals-container');
    const newGoalHasDeadlineCheckbox = document.getElementById('newGoalHasDeadline');
    const newGoalDeadlineInput = document.getElementById('newGoalDeadline');
    const investmentsView = document.getElementById('investments-view');
    const closeInvestmentsViewBtn = document.getElementById('close-investments-view');
    const goalIconPicker = document.getElementById('goalIconPicker');
    const goalIconHiddenInput = document.getElementById('goalIcon');
    const openAddInvestmentFormBtn = document.getElementById('open-add-investment-form-btn');
    const investmentFormView = document.getElementById('investment-form-view');
    const backToInvestmentsListBtn = document.getElementById('back-to-investments-list-btn');
    const investmentFormTitle = document.getElementById('investment-form-title');


    // --- ELEMENTOS DO CABEÇALHO ---
    const themeToggle = document.getElementById('theme-toggle');
    const settingsBtn = document.getElementById('settings-btn');
    
    // --- ELEMENTOS DO CALENDÁRIO E SUAS VIEWS ---
    const calendarGrid = document.getElementById('calendar-grid');
    const calendarMonthSelect = document.getElementById('calendar-month-select');
    const plannerDetailsContainer = document.getElementById('planner-details-container');
    
    const dayViewSection = document.getElementById('day-view-section');
    const dayViewTitle = document.getElementById('day-view-title');
    const taskFormView = document.getElementById('task-form-view');
    const tasksList = document.getElementById('tasksList');
    const openAddTaskFormBtn = document.getElementById('open-add-task-form-btn');
    const closeDayViewBtn = document.getElementById('close-day-view-btn');
    const backToDayViewBtn = document.getElementById('back-to-day-view-btn');
    
    // --- ELEMENTOS DO FORMULÁRIO DE TAREFAS (agora em uma view) ---
    const taskFormModal = document.getElementById('task-form-modal'); // Mantido para o form
    const taskFormTitle = document.getElementById('task-form-title');
    const taskTimeInput = document.getElementById('taskTime');
    const taskDescriptionInput = document.getElementById('taskDescription');
    const taskIconHiddenInput = document.getElementById('taskIcon');
    const taskIconPicker = document.getElementById('taskIconPicker');
    const taskIconColorInput = document.getElementById('taskIconColor');
    const taskColorPicker = document.getElementById('taskColorPicker');
    const addTaskBtn = document.getElementById('add-task-btn');
    const taskPriorityInput = document.getElementById('taskPriority'); 
    const recurrenceTypeInput = document.getElementById('recurrenceType');
    const recurrenceEndDateInput = document.getElementById('recurrenceEndDate');
    const weeklyRecurrenceOptions = document.getElementById('weekly-recurrence-options');
    
    // --- ELEMENTOS DE LISTAS ---
    const listsContainer = document.getElementById("listsContainer");
    const newListForm = document.getElementById('newListForm');
    const newListNameInput = document.getElementById("newListName");
    const newListPriorityInput = document.getElementById("newListPriority");
    const shoppingListContainer = document.getElementById('shopping-list-container');
    const linkToPlannerContainer = document.getElementById('link-to-planner-container');
    const linkToPlannerCheckbox = document.getElementById('link-to-planner-checkbox');
    const plannerLinkOptions = document.getElementById('planner-link-options');
    const listEventDateInput = document.getElementById('list-event-date');
    const listEventTimeInput = document.getElementById('list-event-time');
    const routineContainer = document.getElementById('routine-container');
    const linkAsRoutineCheckbox = document.getElementById('link-as-routine-checkbox');
    const routineOptions = document.getElementById('routine-options');
    const listRecurrenceTypeInput = document.getElementById('list-recurrence-type');
    const listRecurrenceEndDateInput = document.getElementById('list-recurrence-end-date');
    const listWeeklyRecurrenceOptions = document.getElementById('list-weekly-recurrence-options');
    const listDetailsSection = document.getElementById('list-details-section');
    const listDetailsTitle = document.getElementById('listDetailsTitle');
    const listDetailsItems = document.getElementById('listDetailsItems');
    const shoppingListCheckbox = document.getElementById('shopping-list-checkbox');
    
    // --- ELEMENTOS DO MODAL DE ÍCONE DE LISTA ---
    const listIconSection = document.getElementById('list-icon-section');
    const listIconPickerGrid = document.getElementById('list-icon-picker-grid');

    // --- ELEMENTOS DO NOVO MODAL DE EDIÇÃO DE LISTA ---
    const listEditorSection = document.getElementById('list-editor-section');
    const listEditorForm = document.getElementById('list-editor-form');
    const editorListIdInput = document.getElementById('editor-list-id-main');
    const editorListNameInput = document.getElementById('editor-list-name');
    const editorListPriorityInput = document.getElementById('editor-list-priority');
    const editorListIconPicker = document.getElementById('editor-list-icon-picker');
    const editorListIconInput = document.getElementById('editor-list-icon-main');
    const addScheduleBtn = document.getElementById('add-schedule-btn');
    const editorSchedulingSection = document.getElementById('editor-scheduling-section');
    const editorEventDateInput = document.getElementById('editor-event-date');
    const editorEventTimeInput = document.getElementById('editor-event-time');
    const removeScheduleBtn = document.getElementById('remove-schedule-btn');
    const editorRoutineContainer = document.getElementById('editor-routine-container');
    const editorLinkAsRoutineCheckbox = document.getElementById('editor-link-as-routine-checkbox');
    const editorRoutineOptions = document.getElementById('editor-routine-options');
    const editorRecurrenceTypeInput = document.getElementById('editor-recurrence-type');
    const editorRecurrenceEndDateInput = document.getElementById('editor-recurrence-end-date');
    const editorWeeklyRecurrenceOptions = document.getElementById('editor-weekly-recurrence-options');


    // --- ÍCONES DE TAREFAS (USADOS TAMBÉM PARA LISTAS) ---
    const taskIcons = {
        // === ÍCONES CIRCULARES/BÁSICOS ===
        "nenhum": "./images/circledashed.svg", "lista": "./images/box.svg", "coração": "./images/heart.svg", "estrela": "./images/star.svg", "dinheiro": "./images/money.svg", "círculo": "./images/circle.svg", "pontos": "./images/circledots.svg",
        
        // === SAÚDE E BEM-ESTAR ===
        "médico": "./images/health.svg", "medicação": "./images/pills.svg", "dentista": "./images/tooth.svg",  
        "injeção": "./images/injection.svg", "escova": "./images/hairbrush.svg", "unhas": "./images/nails.svg", "pele": "./images/body.svg", "meditação": "./images/meditation.svg", 
        
        // === ESPORTES E ATIVIDADES ===
        "exercício": "./images/gym.svg", "esportes": "./images/football.svg", "correr": "./images/run.svg",
        
        // === TRABALHO E ESTUDO ===
        "trabalho": "./images/work.svg", "estudo": "./images/study.svg", "pessoas": "./images/people.svg", "computador": "./images/computer.svg",
        "escrever": "./images/write.svg",
        
        // === CASA E FAMÍLIA ===
        "casa": "./images/house.svg", "pet": "./images/pet.svg", "presente": "./images/gift.svg",
        "aniversário": "./images/birthday.svg", "festa": "./images/party.svg",
        
        // === TRANSPORTE E VIAGEM ===
        "transporte": "./images/car.svg", "viagem": "./images/plane.svg", "férias": "./images/vacation.svg",
        
        // === COMIDA E BEBIDA ===
        "comida": "./images/burger.svg", "maçã": "./images/apple.svg", "cenoura": "./images/carrot.svg", "sorvete": "./images/icecream.svg",
        "pipoca": "./images/popcorn.svg", "cogumelo": "./images/mushroom.svg",
        
        // === ENTRETENIMENTO E LAZER ===
        "mídia": "./images/picture.svg", "música": "./images/music.svg",
        
        // === NATUREZA E PLANTAS ===
        "flor": "./images/flower.svg", "planta": "./images/plant.svg", "lesma": "./images/snail.svg",
        
        // === COMPRAS E FINANÇAS ===
        "compras": "./images/shopping.svg", "comprar": "./images/buy.svg", "assinaturas": "./images/infinite.svg",
        
        // === ROUPAS E ACESSÓRIOS ===
        "camisa": "./images/shirt.svg",
        
        // === OUTROS/VARIADOS ===
        "cigarro": "./images/cigarette.svg", "olho": "./images/eye.svg", "arma": "./images/gun.svg"
    };

    const supportedIconColors = ['blue', 'green', 'red', 'yellow', 'purple', 'pink', 'orange'];

    const iconColorHexMap = {
        blue: '#3586ff',
        green: '#4caf50',
        red: '#f44336',
        yellow: '#ffeb3b',
        purple: '#9c27b0',
        pink: '#ff66cc',
        orange: '#ff9800'
    };

    const hexToIconColorMap = Object.fromEntries(
        Object.entries(iconColorHexMap).map(([name, hex]) => [hex.toLowerCase(), name])
    );

    const hexColorAliases = {
        '#ff5252': 'red',
        '#ff1744': 'red',
        '#ffc107': 'yellow',
        '#ffca28': 'yellow',
        '#6b9aff': 'blue',
        '#3d71ff': 'blue',
        '#45a049': 'green',
        '#26c6da': 'blue',
        '#00acc1': 'blue'
    };

    Object.assign(hexToIconColorMap, hexColorAliases);

    function getColorHexFromName(colorName) {
        if (!colorName) return iconColorHexMap.blue;
        const normalized = colorName.toLowerCase();
        return iconColorHexMap[normalized] || iconColorHexMap.blue;
    }

    function getColorNameFromValue(colorValue) {
        if (!colorValue) return 'blue';
        const normalized = colorValue.toString().trim().toLowerCase();

        if (iconColorHexMap[normalized]) {
            return normalized;
        }

        if (hexToIconColorMap[normalized]) {
            return hexToIconColorMap[normalized];
        }

        const rgbMatch = normalized.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/);
        if (rgbMatch) {
            const [r, g, b] = rgbMatch.slice(1, 4).map(Number);
            const hex = '#' + [r, g, b]
                .map(value => value.toString(16).padStart(2, '0'))
                .join('');
            return hexToIconColorMap[hex] || 'blue';
        }

        return 'blue';
    }

    function normalizeGoalColorData(goal) {
        if (!goal) return false;
        const colorName = getColorNameFromValue(goal.colorName || goal.color);
        const colorHex = getColorHexFromName(colorName);
        let changed = false;

        if (goal.color !== colorHex) {
            goal.color = colorHex;
            changed = true;
        }
        if (goal.colorName !== colorName) {
            goal.colorName = colorName;
            changed = true;
        }
        return changed;
    }

    function sanitizeIconPath(iconSrc) {
        if (!iconSrc) return '';
        const withoutQuery = iconSrc.split('?')[0];
        const imagesIndex = withoutQuery.indexOf('/images/');
        if (imagesIndex !== -1) {
            return '.' + withoutQuery.substring(imagesIndex);
        }
        const relativeIndex = withoutQuery.indexOf('images/');
        if (relativeIndex !== -1) {
            const path = withoutQuery.substring(relativeIndex);
            return path.startsWith('./') ? path : `./${path}`;
        }
        if (withoutQuery.startsWith('/')) {
            return `.${withoutQuery}`;
        }
        return withoutQuery.startsWith('./') ? withoutQuery : `./${withoutQuery}`;
    }

    function normalizeListData(list) {
        if (!list) return false;
        let changed = false;
        let inferredColorName = null;

        if (list.icon && list.icon.includes('images/colored/')) {
            inferredColorName = getIconColorFromPath(list.icon);
            const fileName = list.icon.split('/').pop();
            const iconName = fileName.replace('.svg', '');
            const newIconName = legacyIconNameMap[iconName] || iconName;
            const newIconPath = `./images/${newIconName}.svg`;
            if (list.icon !== newIconPath) {
                list.icon = newIconPath;
                changed = true;
            }
        }

        const sanitizedIcon = sanitizeIconPath(list.icon || '');
        if (sanitizedIcon && sanitizedIcon !== list.icon) {
            list.icon = sanitizedIcon;
            changed = true;
        }

        if (!list.icon) {
            list.icon = sanitizeIconPath(taskIcons.lista || taskIcons.nenhum || './images/circledashed.svg');
            changed = true;
        }

        const resolvedColorName = getColorNameFromValue(list.colorName || list.color || inferredColorName);
        const resolvedColorHex = getColorHexFromName(resolvedColorName);

        if (list.color !== resolvedColorHex) {
            list.color = resolvedColorHex;
            changed = true;
        }

        if (list.colorName !== resolvedColorName) {
            list.colorName = resolvedColorName;
            changed = true;
        }

        return changed;
    }

    const iconFileNameToKeyMap = Object.entries(taskIcons).reduce((map, [key, path]) => {
        if (!path) return map;
        const cleanPath = path.split('?')[0];
        const fileName = cleanPath.substring(cleanPath.lastIndexOf('/') + 1).replace('.svg', '');
        if (!map[fileName]) {
            map[fileName] = key;
        }
        return map;
    }, {});

    const legacyIconNameMap = {
        'none': 'circledashed', 'hair': 'hairbrush', 'lotion': 'body',
        'fute': 'football', 'ping': 'football', 'voleyball': 'football',
        'brain': 'study', 'car': 'plane', 'trip': 'plane', 'food': 'burger',
        'movie': 'picture', 'art': 'picture', 'leaf': 'plant', 'slug': 'snail',
        'list': 'shopping', 'assinatura': 'infinite', 'phone': 'computer',
        'date': 'circledashed', 'person': 'people', 'meeting': 'people',
        'toothbrush': 'hairbrush', 'dna': 'health', 'judge': 'people'
    };

    // --- ÍCONES DE CATEGORIA (MAPEAMENTO NOME -> CAMINHO) ---
    const categoryIcons = {
        // === CATEGORIAS BÁSICAS ===
        "outros": "./images/star.svg", "saúde": "./images/health.svg", "educação": "./images/study.svg",
        
        // === FINANÇAS ===
        "comida": "./images/burger.svg", "compras": "./images/shopping.svg", "dinheiro": "./images/money.svg", "salário": "./images/money.svg", "assinaturas": "./images/infinite.svg",
        "freela": "./images/work.svg",
        
        // === CASA E FAMÍLIA ===
        "moradia": "./images/house.svg", "pet": "./images/pet.svg", "presente": "./images/gift.svg",
        
        // === TRANSPORTE E VIAGEM ===
        "transporte": "./images/car.svg",
        
        // === ENTRETENIMENTO E LAZER ===
        "lazer": "./images/picture.svg", "beleza": "./images/hairbrush.svg",
        
        // === SAÚDE E BEM-ESTAR ===
        "injeção": "./images/injection.svg",
        
        // === NATUREZA E PLANTAS ===
        "folha": "./images/plant.svg", "lesma": "./images/snail.svg",
        
        // === OUTROS/VARIADOS ===
        "olho": "./images/eye.svg", "pessoas": "./images/people.svg"
    };


    // --- VARIÁVEIS DE ESTADO ---
    let monthChart, annualChart;
    let dataByMonth = {};
    let revenueCategories = ["salário", "freela", "outros"];
    let expenseCategories = [
        {
            name: "alimentação",
            icon: "./images/burger.svg",
            color: "red"
        },
        {
            name: "lazer",
            icon: "./images/picture.svg",
            color: "purple"
        },
        {
            name: "moradia",
            icon: "./images/house.svg",
            color: "blue"
        },
        {
            name: "transporte",
            icon: "./images/car.svg",
            color: "blue"
        },
        {
            name: "saúde",
            icon: "./images/health.svg",
            color: "green"
        },
        {
            name: "educação",
            icon: "./images/study.svg",
            color: "red"
        },
        {
            name: "assinaturas",
            icon: "./images/infinite.svg",
            color: "blue"
        },
        {
            name: "compras",
            icon: "./images/shopping.svg",
            color: "orange"
        },
        {
            name: "beleza",
            icon: "./images/nails.svg",
            color: "pink"
        }
    ];
    let investmentGoals = [];
    let editingGoalId = null;
    let editingContributionKey = null;

    const disallowedCategoryNames = new Set(["jogos", "esportes", "pizza", "bebidas"]);

    function sanitizeCategoryList(list) {
        return list.filter(category => {
            const categoryName = typeof category === 'string' ? category : category.name;
            return !disallowedCategoryNames.has(categoryName);
        });
    }

    function sanitizeAllCategories() {
        expenseCategories = sanitizeCategoryList(expenseCategories);
        revenueCategories = sanitizeCategoryList(revenueCategories);
    }

    sanitizeAllCategories();
    
    // --- NAVEGAÇÃO ENTRE SEÇÕES ---
    let previousSection = 'planner-section'; // Seção padrão
    let editingCategoryId = null;
    let currentMonth = null;
    let currentCalendarDate = new Date();
    let selectedDateKey = null, editingIndex = null;
    let calendarTasks = {};
    const monthNamesPt = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"];
    const goalColors = ['#FF5252', '#3F51B5', '#4CAF50', '#FFC107', '#9C27B0', '#00BCD4', '#FF9800'];
    let currentListIconBeingEdited = null;
    let categoryLimits = {};


    // ----------------------------------------------------
    // FUNÇÕES DE UTILIDADE E TEMA
    // ----------------------------------------------------
    
    // Função para converter prioridade em cor
    function getPriorityColor(priority, darkMode = false) {
        if (darkMode) {
            const colors = {
                'baixa': '#6b9aff',
                'media': '#FFCA28',
                'alta': '#FF1744'
            };
            return colors[priority] || '#6b9aff';
        } else {
            const colors = {
                'baixa': '#3586ff',
                'media': '#FFC107',
                'alta': '#FF5252'
            };
            return colors[priority] || '#3586ff';
        }
    }
    
    // Função para converter cor em nome de cor para ícone
    function getColorNameFromPriority(priority) {
        const colorNames = {
            'baixa': 'blue',
            'media': 'yellow',
            'alta': 'red'
        };
        return colorNames[priority] || 'blue';
    }
    
    // Função para obter cor pré-definida baseada no nome da categoria
    function getCategoryColor(categoryName) {
        const name = categoryName.toLowerCase();
        
        // Mapeamento de categorias para cores
        if (name.includes('aliment') || name.includes('comida') || name.includes('restaur') || name.includes('lanche')) {
            return 'orange'; // Laranja
        } else if (name.includes('transport') || name.includes('uber') || name.includes('carro') || name.includes('gasolina')) {
            return 'blue'; // Azul
        } else if (name.includes('saúde') || name.includes('médico') || name.includes('farmá') || name.includes('hospital')) {
            return 'green'; // Verde
        } else if (name.includes('lazer') || name.includes('entretenimento') || name.includes('cinema') || name.includes('festa') || name.includes('diversão')) {
            return 'purple'; // Roxo
        } else if (name.includes('moradia') || name.includes('casa') || name.includes('aluguel') || name.includes('água') || name.includes('luz') || name.includes('energia')) {
            return 'blue'; // Azul
        } else if (name.includes('educação') || name.includes('estudo') || name.includes('curso') || name.includes('escola') || name.includes('faculdade')) {
            return 'blue'; // Azul
        } else if (name.includes('compra') || name.includes('shopping') || name.includes('roupa') || name.includes('vestuário')) {
            return 'pink'; // Rosa
        } else if (name.includes('salário') || name.includes('receita') || name.includes('renda') || name.includes('ganho')) {
            return 'green'; // Verde
        } else if (name.includes('beleza') || name.includes('cabelo') || name.includes('unha') || name.includes('estética')) {
            return 'pink'; // Rosa
        } else if (name.includes('pet') || name.includes('animal')) {
            return 'orange'; // Laranja
        } else if (name.includes('assinatura') || name.includes('streaming') || name.includes('netflix') || name.includes('spotify')) {
            return 'purple'; // Roxo
        } else if (name.includes('presente') || name.includes('gift')) {
            return 'red'; // Vermelho
        } else if (name.includes('freela') || name.includes('extra')) {
            return 'yellow'; // Amarelo
        } else {
            return 'blue'; // Azul como padrão
        }
    }
    function parseMonthYear(monthYearString) {
        const [monthName, year] = monthYearString.split('-');
        const monthIndex = monthNamesPt.indexOf(monthName.toLowerCase());
        return { year: parseInt(year), month: monthIndex };
    }

    function formatDateToBRL(dateString) {
        if (!dateString || dateString.length !== 10) return dateString;
        const [year, month, day] = dateString.split('-');
        return `${day}/${month}`;
    }
    
    function formatCurrency(value) {
        return `R$ ${parseFloat(value).toFixed(2).replace('.', ',').replace(/\B(?=(\d{3})+(?!\d))/g, '.')}`;
    }

    function applyTheme(theme) {
        document.body.classList.toggle('dark-mode', theme === 'dark');
        const themeIcon = document.getElementById('theme-icon');
        themeIcon.src = theme === 'dark' ? 'buttons/sun.svg' : 'buttons/moon.svg';
        themeIcon.alt = theme === 'dark' ? 'Modo claro' : 'Modo escuro';
        localStorage.setItem('theme', theme);
        if (document.getElementById('financeiro-section').style.display !== 'none') {
            updateFinanceDisplay();
        }
    }

    // ----------------------------------------------------
    // PERSISTÊNCIA (localStorage)
    // ----------------------------------------------------
    function saveFinancialData() {
        localStorage.setItem('financialData', JSON.stringify(dataByMonth));
        localStorage.setItem('expenseCategories', JSON.stringify(expenseCategories));
        localStorage.setItem('revenueCategories', JSON.stringify(revenueCategories));
        localStorage.setItem('categoryLimits', JSON.stringify(categoryLimits));
    }

    function loadFinancialData() {
        dataByMonth = JSON.parse(localStorage.getItem('financialData')) || {};
        // Não carrega categorias do localStorage - usa apenas as categorias básicas definidas no código
        categoryLimits = JSON.parse(localStorage.getItem('categoryLimits')) || {};
    }

    function saveCalendarTasks() { localStorage.setItem('calendarTasks', JSON.stringify(calendarTasks)); }
    
    function fixIconPathsInCalendarTasks() {
        // Função para corrigir apenas ícones que não têm caminho completo (compatibilidade)
        let needsSave = false;

        for (const dateKey in calendarTasks) {
            const tasks = calendarTasks[dateKey];
            if (Array.isArray(tasks)) {
                tasks.forEach(task => {
                    // Corrige ícones antigos da pasta colored/ para os novos
                    if (task.icon && task.icon.includes('images/colored/')) {
                        // Extrai o nome do arquivo e mapeia para o novo caminho
                        const fileName = task.icon.split('/').pop();
                        const iconName = fileName.replace('.svg', '');
                        
                        // Mapeamento de nomes antigos para novos
                        const newIconName = legacyIconNameMap[iconName] || iconName;
                        task.icon = `./images/${newIconName}.svg`;
                        needsSave = true;
                    }
                });
            }
        }
        
        if (needsSave) {
            saveCalendarTasks();
        }
    }

    function fixIconPathsInInvestmentGoals() {
        let needsSave = false;

        investmentGoals = investmentGoals.map(goal => {
            if (goal && goal.icon && goal.icon.includes('images/colored/')) {
                const fileName = goal.icon.split('/').pop();
                const iconName = fileName.replace('.svg', '');
                const newIconName = legacyIconNameMap[iconName] || iconName;
                const newIconPath = `./images/${newIconName}.svg`;
                if (goal.icon !== newIconPath) {
                    goal.icon = newIconPath;
                    needsSave = true;
                }
            }
            if (normalizeGoalColorData(goal)) {
                needsSave = true;
            }
            return goal;
        });

        if (needsSave) {
            saveInvestmentGoals();
        }
    }

    function loadCalendarTasks() {
        calendarTasks = JSON.parse(localStorage.getItem('calendarTasks')) || {};
        // Corrige apenas ícones que não têm caminho completo (compatibilidade)
        fixIconPathsInCalendarTasks();
    }

    function saveLists() {
        const lists = Array.from(listsContainer.querySelectorAll('.list')).map(listDiv => {
            const isShopping = listDiv.dataset.isShopping === 'true';
            const iconImg = listDiv.querySelector('.list-title-icon');
            const rawBorderColor = listDiv.style.borderLeftColor || window.getComputedStyle(listDiv).borderLeftColor || null;
            const colorName = listDiv.dataset.colorName || (iconImg ? iconImg.dataset.color : null) || getColorNameFromValue(rawBorderColor);
            const colorHex = getColorHexFromName(colorName);
            const sanitizedIcon = sanitizeIconPath(iconImg ? iconImg.src : '');
            const iconPath = sanitizedIcon || sanitizeIconPath(taskIcons.lista || taskIcons.nenhum || './images/circledashed.svg');

            if (iconImg) {
                iconImg.dataset.color = colorName;
            }
            listDiv.dataset.colorName = colorName;

            const colorValue = rawBorderColor || colorHex;

            const items = Array.from(listDiv.querySelectorAll('ul li')).map(li => {
                const baseItem = {
                    text: li.querySelector('.list-item-content span').textContent.trim(),
                    checked: li.querySelector('input[type="checkbox"]').checked
                };
                if (isShopping) {
                    baseItem.value = parseFloat(li.dataset.value) || 0;
                }
                return baseItem;
            });
            
            const isRoutine = listDiv.dataset.isRoutine === 'true';
            let lastCompletedDate = null;
            if (isRoutine && listDiv.classList.contains('completed')) {
                lastCompletedDate = new Date().toISOString().split('T')[0];
            }

            return {
                id: listDiv.dataset.listId,
                name: listDiv.querySelector('h2').textContent.trim(),
                items: items,
                priority: listDiv.querySelector('.list-priority-select').value,
                icon: iconPath,
                color: colorValue,
                colorName: colorName,
                isShoppingList: isShopping,
                isFinalized: listDiv.classList.contains('finalized'),
                isRoutine: isRoutine,
                lastCompletedDate: lastCompletedDate,
                transactionId: listDiv.dataset.transactionId || null,
                transactionMonth: listDiv.dataset.transactionMonth || null
            };
        }).filter(Boolean);
        localStorage.setItem('todoLists', JSON.stringify(lists));
    }

    function loadAndRenderLists() {
        listsContainer.innerHTML = '';
        const listsData = JSON.parse(localStorage.getItem('todoLists')) || [];
        const todayString = new Date().toISOString().split('T')[0];

        // Lógica de Reset de Rotinas e normalização de dados
        let listsModified = false;
        listsData.forEach(listData => {
            if (listData.isRoutine && listData.lastCompletedDate && listData.lastCompletedDate < todayString) {
                listData.items.forEach(item => item.checked = false);
                listData.lastCompletedDate = null;
                listsModified = true;
            }

            if (normalizeListData(listData)) {
                listsModified = true;
            }
        });

        // Se alguma rotina foi resetada ou dados normalizados, salva antes de renderizar
        if (listsModified) {
            localStorage.setItem('todoLists', JSON.stringify(listsData));
        }

        // Renderização das listas
        listsData.forEach(listData => {
            createList(
                listData.name,
                listData.items,
                listData.priority,
                listData.id,
                listData.icon,
                listData.isShoppingList,
                listData.isFinalized,
                listData.isRoutine,
                listData.transactionId,
                listData.transactionMonth,
                listData.color,
                listData.colorName
            );
        });
    }


    function saveInvestmentGoals() { localStorage.setItem('investmentGoals', JSON.stringify(investmentGoals)); }
    function loadInvestmentGoals() {
        investmentGoals = JSON.parse(localStorage.getItem('investmentGoals')) || [];
        fixIconPathsInInvestmentGoals();
    }


    // ----------------------------------------------------
    // MODAIS (APENAS PARA LISTAS E PARTES DE FINANÇAS)
    // ----------------------------------------------------
    function openCategorySection() {
        // Esconde outras views financeiras
        transactionsView.style.display = 'none';
        budgetsView.style.display = 'none';
        investmentsView.style.display = 'none';
        
        // Mostra a seção de categorias
        categorySection.style.display = 'block';
        
        editingCategoryId = null;
        renderCategoryModalList();
    }
    
    function openDescriptionSection(description, date) {
        const modalDescText = document.getElementById('modal-description-text');
        const modalDateText = document.getElementById('modal-date-text');
        const detailsContent = document.getElementById('transaction-details-content');
        const noSelectionMessage = document.getElementById('no-selection-message');
        
        if (modalDescText) modalDescText.textContent = description;
        if (modalDateText) {
            if (date) {
                const [year, month, day] = date.split('-');
                modalDateText.textContent = `${day}/${month}/${year}`;
            } else {
                modalDateText.textContent = '';
            }
        }
        
        // Mostra os detalhes e esconde a mensagem de nenhuma seleção
        if (detailsContent) detailsContent.style.display = 'block';
        if (noSelectionMessage) noSelectionMessage.style.display = 'none';
    }

    function closeDescriptionSection() {
        // Função mantida para compatibilidade, mas não faz mais nada
        // Os detalhes agora ficam sempre visíveis no painel lateral
    }
    
    function openListDetailsSection(listId) {
        // Track current section as previous
        const currentActiveSection = document.querySelector('.mensal-content-section[style*="block"]');
        if (currentActiveSection) {
            previousSection = currentActiveSection.id;
        }
        
        // Hide day view section but keep planner-details-container visible
        dayViewSection.style.setProperty('display', 'none', 'important');
        taskFormView.style.setProperty('display', 'none', 'important');
        
        const allLists = JSON.parse(localStorage.getItem('todoLists')) || [];
        const targetList = allLists.find(list => list.id === listId);

        if (targetList) {
            listDetailsTitle.textContent = targetList.name;
            listDetailsItems.innerHTML = '';
            if (targetList.items.length === 0) {
                listDetailsItems.innerHTML = '<li>esta lista não tem itens.</li>';
            } else {
                targetList.items.forEach(item => {
                    const li = document.createElement('li');
                    li.textContent = item.text;
                    if (item.checked) {
                        li.style.textDecoration = 'line-through';
                        li.style.opacity = '0.6';
                    }
                    listDetailsItems.appendChild(li);
                });
            }
            
            // Show list details section
            listDetailsSection.style.setProperty('display', 'block', 'important');
        } else {
            alert("Erro: não foi possível encontrar a lista vinculada.");
        }
    }

    function closeListDetailsSection() {
        listDetailsSection.style.setProperty('display', 'none', 'important');
        
        // Volta para as tarefas do dia
        plannerDetailsContainer.style.setProperty('display', 'block', 'important');
        dayViewSection.style.setProperty('display', 'block', 'important');
        
        // Garante que o botão de adicionar tarefa seja visível
        openAddTaskFormBtn.style.setProperty('display', 'inline-flex', 'important');
        openAddTaskFormBtn.style.setProperty('visibility', 'visible', 'important');
        openAddTaskFormBtn.style.setProperty('opacity', '1', 'important');
    }

    function openListIconSection(listId) {
        // Track current section as previous
        const currentActiveSection = document.querySelector('.mensal-content-section[style*="block"]');
        if (currentActiveSection) {
            previousSection = currentActiveSection.id;
        }
        
        // Hide all other sections first
        document.querySelectorAll('.mensal-content-section').forEach(section => section.style.display = 'none');
        
        currentListIconBeingEdited = listId;
        listIconSection.style.display = 'block';
    }

    function closeListIconSection() {
        listIconSection.style.display = 'none';
        // Não volta para seção anterior para evitar conflitos com navegação principal
        // A navegação principal já gerencia qual seção deve estar visível
    }

    function selectListIcon(iconPath) {
        if (currentListIconBeingEdited) {
            const listDiv = document.querySelector(`.list[data-list-id="${currentListIconBeingEdited}"]`);
            if (listDiv) {
                // Usa a cor selecionada para o ícone
                const selectedColor = listColor.value || 'blue';
                const colorMap = {
                    'blue': '#3586ff',
                    'green': '#4caf50',
                    'red': '#f44336',
                    'yellow': '#ffeb3b',
                    'purple': '#9c27b0',
                    'pink': '#ff66cc',
                    'orange': '#ff9800'
                };
                const color = colorMap[selectedColor] || '#3586ff';

                // Atualiza o ícone da lista
                const iconImg = listDiv.querySelector('.list-title-icon');
                const sanitizedIcon = sanitizeIconPath(iconPath);
                if (iconImg) {
                    iconImg.src = sanitizedIcon + '?t=' + Date.now();
                    iconImg.className = 'list-title-icon icon-color-' + selectedColor;
                    iconImg.dataset.color = selectedColor;
                }

                // Atualiza a cor da borda da lista para combinar com o ícone
                listDiv.style.borderLeftColor = color;
                listDiv.dataset.colorName = selectedColor;

                // Salva a lista com a nova cor
                const allLists = JSON.parse(localStorage.getItem('todoLists')) || [];
                const listIndex = allLists.findIndex(list => list.id === currentListIconBeingEdited);
                if (listIndex !== -1) {
                    allLists[listIndex].icon = sanitizedIcon;
                    allLists[listIndex].color = color;
                    allLists[listIndex].colorName = selectedColor;
                    localStorage.setItem('todoLists', JSON.stringify(allLists));
                }

                saveLists();
            }
        }
        closeListIconSection();
    }


    function openListEditorSection(listId) {
        // Track current section as previous
        const currentActiveSection = document.querySelector('.mensal-content-section[style*="block"]');
        if (currentActiveSection) {
            previousSection = currentActiveSection.id;
        }
        
        // Hide all other sections first
        document.querySelectorAll('.mensal-content-section').forEach(section => section.style.display = 'none');
        
        currentListIconBeingEdited = null; 
        const allLists = JSON.parse(localStorage.getItem('todoLists')) || [];
        const listData = allLists.find(list => list.id === listId);
        if (!listData) return;

        editorLinkAsRoutineCheckbox.checked = false;
        editorRoutineOptions.style.display = 'none';
        editorRecurrenceTypeInput.value = 'none';
        editorRecurrenceEndDateInput.style.display = 'none';
        editorWeeklyRecurrenceOptions.style.display = 'none';
        editorWeeklyRecurrenceOptions.querySelectorAll('input').forEach(cb => cb.checked = false);


        editorListIdInput.value = listId;
        editorListNameInput.value = listData.name;
        
        // Define a prioridade atual
        const currentPriority = listData.priority || 'baixa';
        editorListPriorityInput.value = currentPriority;
        
        // Obtém a cor baseada nos dados salvos ou prioridade
        const storedColorName = listData.colorName || getColorNameFromValue(listData.color);
        const currentColorName = storedColorName || getColorNameFromPriority(currentPriority);

        // Renderiza o picker de ícones com a cor da prioridade
        renderIconPicker(editorListIconPicker, editorListIconInput, taskIcons, null, null);

        // Aplica a cor aos ícones
        editorListIconPicker.querySelectorAll('.task-icon-option img').forEach(img => {
            img.className = 'icon-color-' + currentColorName;
            img.dataset.color = currentColorName;
        });

        const editorListColorInput = document.getElementById('editor-list-color-main');
        if (editorListColorInput) {
            editorListColorInput.value = currentColorName;
        }
        const editorListColorPicker = document.getElementById('editor-list-color-picker');
        if (editorListColorPicker) {
            editorListColorPicker.querySelectorAll('.color-option').forEach(option => {
                option.classList.toggle('selected', option.dataset.color === currentColorName);
            });
        }

        // Agora seleciona o ícone atual
        const currentIconPath = sanitizeIconPath(listData.icon);
        editorListIconInput.value = currentIconPath;

        // Procura pelo nome do ícone
        const currentIconName = Object.keys(taskIcons).find(key => {
            return currentIconPath.includes(taskIcons[key].split('/').pop().replace('.svg', ''));
        });
        
        if (currentIconName) {
            editorListIconPicker.querySelectorAll('.task-icon-option').forEach(option => {
                option.classList.toggle('selected', option.dataset.iconName === currentIconName);
            });
            editorListIconInput.value = getColoredIcons(currentIconName, currentColorName);
        }

        const linkedTaskInfo = findLinkedTask(listId);
        if (linkedTaskInfo) {
            addScheduleBtn.style.display = 'none';
            editorSchedulingSection.style.display = 'block';
            editorEventDateInput.value = linkedTaskInfo.dateKey;
            editorEventTimeInput.value = linkedTaskInfo.task.time;
            editorRoutineContainer.style.display = 'flex';

            if (linkedTaskInfo.task.recurrenceId) {
                editorLinkAsRoutineCheckbox.checked = true;
                editorRoutineOptions.style.display = 'flex';
                
                const recurrenceId = linkedTaskInfo.task.recurrenceId;
                const allRecurringTasks = [];
                Object.keys(calendarTasks).forEach(dateKey => {
                    calendarTasks[dateKey].forEach(task => {
                        if (task.recurrenceId === recurrenceId) {
                            allRecurringTasks.push({ task, dateKey });
                        }
                    });
                });
                allRecurringTasks.sort((a, b) => new Date(a.dateKey) - new Date(b.dateKey));
                
                if (allRecurringTasks.length > 0) {
                    const endDate = allRecurringTasks[allRecurringTasks.length - 1].dateKey;
                    editorRecurrenceEndDateInput.value = endDate;
                    editorRecurrenceEndDateInput.style.display = 'block';
                    
                    const weekdays = new Set(allRecurringTasks.map(item => new Date(item.dateKey + 'T12:00:00').getDay()));
                    if (weekdays.size >= 6 && allRecurringTasks.length > 1) {
                         editorRecurrenceTypeInput.value = 'daily';
                    } else {
                        editorRecurrenceTypeInput.value = 'weekly';
                        editorWeeklyRecurrenceOptions.style.display = 'block';
                        weekdays.forEach(day => {
                            const checkbox = editorWeeklyRecurrenceOptions.querySelector(`input[value="${day}"]`);
                            if(checkbox) checkbox.checked = true;
                        });
                    }
                }
            }


        } else {
            addScheduleBtn.style.display = 'block';
            editorSchedulingSection.style.display = 'none';
            editorRoutineContainer.style.display = 'none';
            editorEventDateInput.value = new Date().toISOString().split('T')[0];
            editorEventTimeInput.value = "09:00";
        }

        listEditorSection.style.display = 'block';
    }

    function closeListEditorSection() {
        listEditorSection.style.display = 'none';
        // Volta para a seção anterior
        if (previousSection) {
            const targetSection = document.getElementById(previousSection);
            if (targetSection) {
                targetSection.style.display = 'block';
            }
        } else {
            // Se não há seção anterior, volta para a seção de listas
            document.getElementById('listas-section').style.display = 'block';
        }
    }

    // ----------------------------------------------------
    // GERENCIAMENTO DE CATEGORIAS
    // ----------------------------------------------------
    function renderCategorySelect(isRevenue = false) {
        sanitizeAllCategories();
        const categories = isRevenue ? revenueCategories : expenseCategories;
        categoryInput.innerHTML = categories.map(c => {
            const categoryName = typeof c === 'string' ? c : c.name;
            return `<option value="${categoryName}">${categoryName}</option>`;
        }).join('');
        if (editingIndex !== null && dataByMonth[currentMonth]?.[editingIndex]) {
            categoryInput.value = dataByMonth[currentMonth][editingIndex].category;
        }
    }
    
    function renderCategoryLimitSelect() {
        sanitizeAllCategories();
        const categorySelect = document.getElementById('categoryLimitCategory');
        categorySelect.innerHTML = expenseCategories.map(c => {
            const categoryName = typeof c === 'string' ? c : c.name;
            return `<option value="${categoryName}">${categoryName}</option>`;
        }).join('');
    }

    function renderCategoryModalList() {
        sanitizeAllCategories();
        const renderList = (categories, container, type) => {
            container.innerHTML = categories.length === 0 ? `<p style="color: #777;">nenhuma categoria de ${type} cadastrada.</p>` :
                categories.map(category => {
                    const categoryName = typeof category === 'string' ? category : category.name;
                    const categoryIcon = typeof category === 'object' ? category.icon : categoryIcons[categoryName] || './images/money.svg';
                    const categoryColorSource = typeof category === 'object' && category.color ? category.color : getCategoryColor(categoryName);
                    const iconColorName = getColorNameFromValue(categoryColorSource);
                    const iconMarkup = `<img src="${categoryIcon}" alt="${categoryName}" class="category-icon icon-color-${iconColorName}">`;

                    if (editingCategoryId && editingCategoryId.name === categoryName && editingCategoryId.type === type) {
                        return `<div style="padding: 8px; border: 2px solid #3586ff; border-radius: 8px; background: rgba(53, 134, 255, 0.1); margin-bottom: 5px;">
                                    <span style="color: #3586ff; font-weight: bold;">editando: ${categoryName}</span>
                                </div>`;
                    } else {
                        return `<div style="display: flex; align-items: center; gap: 10px; padding: 8px; border: 1px solid #eee; border-radius: 8px; margin-bottom: 5px;">
                                    ${iconMarkup}
                                    <span style="flex-grow: 1;">${categoryName}</span>
                                    <span>
                                        <button class="edit-btn" onclick="editCategory('${categoryName}', '${type}')"><img src="buttons/pencil.svg" alt="Editar"></button>
                                        <button class="delete-btn" onclick="removeCategory('${categoryName}', '${type}')"><img src="buttons/trash.svg" alt="Remover"></button>
                                    </span>
                                </div>`;
                    }
                }).join('');
        };
        renderList(expenseCategories, document.getElementById('expense-category-list-container'), 'despesa');
        renderList(revenueCategories, document.getElementById('revenue-category-list-container'), 'receita');
    }

    window.addCategory = function() {
        const name = newCategoryNameInput.value.trim().toLowerCase();
        const type = newCategoryTypeInput.value;
        if (!name) return alert('o nome da categoria é obrigatório.');
        if (disallowedCategoryNames.has(name)) return alert('esta categoria não está disponível.');

        let targetArray = type === 'receita' ? revenueCategories : expenseCategories;
        const categoryExists = targetArray.some(cat => {
            const catName = typeof cat === 'string' ? cat : cat.name;
            return catName === name;
        });
        if (categoryExists) return alert('categoria já existe.');
        
        // Obtém o ícone e cor selecionados
        const selectedIconName = categoryIconPicker.querySelector('.task-icon-option.selected')?.dataset.iconName || 'dinheiro';
        
        // Obtém cor automática baseada no nome da categoria
        const selectedColor = getCategoryColor(name);
        
        // Gera o ícone com a cor automática
        const coloredIcon = getColoredIcons(selectedIconName, selectedColor);
        
        // Cria o objeto da categoria com ícone e cor
        const categoryData = {
            name: name,
            icon: coloredIcon,
            color: selectedColor
        };
        
        targetArray.push(categoryData);
        newCategoryNameInput.value = '';
        
        // Reset do seletor de ícones e cores
        categoryIconPicker.querySelectorAll('.task-icon-option').forEach(option => {
            option.classList.remove('selected');
        });
        const firstIcon = categoryIconPicker.querySelector('.task-icon-option');
        if (firstIcon) firstIcon.classList.add('selected');
        categoryIconHiddenInput.value = getColoredIcons('dinheiro', 'blue');
        
        categoryColorPicker.querySelectorAll('.color-option').forEach(option => {
            option.classList.remove('selected');
        });
        const blueOption = categoryColorPicker.querySelector('[data-color="blue"]');
        if (blueOption) blueOption.classList.add('selected');
        categoryIconColorInput.value = 'blue';

        sanitizeAllCategories();
        saveFinancialData();
        renderCategoryModalList();
        updateFinanceDisplay();
    }

    window.removeCategory = function(category, type) {
        const categoryName = typeof category === 'string' ? category : category.name;
        if (confirm(`tem certeza que deseja remover a categoria "${categoryName}"? todas as transações associadas serão movidas para "outros".`)) {
            if (type === 'receita') {
                revenueCategories = revenueCategories.filter(c => {
                    const catName = typeof c === 'string' ? c : c.name;
                    return catName !== categoryName;
                });
            } else {
                expenseCategories = expenseCategories.filter(c => {
                    const catName = typeof c === 'string' ? c : c.name;
                    return catName !== categoryName;
                });
            }
            
            Object.values(dataByMonth).flat().forEach(item => {
                if (item.category === categoryName) item.category = 'outros';
            });
            
            saveFinancialData();
            renderCategoryModalList();
            updateFinanceDisplay();
        }
    }

    window.editCategory = function(name, type) {
        editingCategoryId = { name, type };
        
        // Encontra a categoria sendo editada
        const categoryArray = type === 'despesa' ? expenseCategories : revenueCategories;
        const categoryData = categoryArray.find(cat => {
            const catName = typeof cat === 'string' ? cat : cat.name;
            return catName === name;
        });
        
        // Preenche o formulário de edição
        editCategoryNameInput.value = name;
        editCategoryTypeInput.value = type;
        
        // Obtém cor automática baseada no nome da categoria
        const currentColor = getCategoryColor(name);
        categoryIconColorInput.value = currentColor;
        
        // Atualiza os ícones com a cor automática
        categoryIconPicker.querySelectorAll('.task-icon-option').forEach(iconOption => {
            const iconName = iconOption.dataset.iconName;
            const coloredPath = getColoredIcons(iconName, currentColor);
            
            const img = iconOption.querySelector('img');
            img.remove();
            
            const newImg = document.createElement('img');
            newImg.src = coloredPath + '?t=' + Date.now() + '&r=' + Math.random();
            newImg.className = `icon-color-${currentColor}`;
            newImg.dataset.color = currentColor;
            newImg.style.width = '100%';
            newImg.style.height = '100%';
            newImg.style.objectFit = 'contain';
            newImg.style.borderRadius = '5px';
            
            iconOption.appendChild(newImg);
            iconOption.dataset.iconPath = coloredPath;
        });
        
        // Seleciona o ícone atual da categoria
        if (typeof categoryData === 'object' && categoryData.icon) {
            const currentIconName = Object.keys(taskIcons).find(key => 
                getColoredIcons(key, currentColor) === categoryData.icon
            );
            if (currentIconName) {
                categoryIconPicker.querySelectorAll('.task-icon-option').forEach(option => {
                    option.classList.toggle('selected', option.dataset.iconName === currentIconName);
                });
                categoryIconHiddenInput.value = getColoredIcons(currentIconName, currentColor);
            }
        }
        
        // Mostra o formulário de edição e esconde o de adicionar
        addCategoryForm.style.display = 'none';
        editCategoryForm.style.display = 'block';
        
        renderCategoryModalList();
    }

    window.cancelCategoryEdit = function() {
        editingCategoryId = null;
        addCategoryForm.style.display = 'none'; // Mantém escondido
        editCategoryForm.style.display = 'none';
        renderCategoryModalList();
    }

    window.saveCategoryEdit = function() {
        const newName = editCategoryNameInput.value.trim().toLowerCase();
        const newType = editCategoryTypeInput.value;

        if (!newName) return alert('o nome da categoria não pode ficar em branco.');
        if (disallowedCategoryNames.has(newName)) return alert('esta categoria não está disponível.');

        const categoryArray = newType === 'despesa' ? expenseCategories : revenueCategories;
        
        // Verifica se a nova categoria já existe (considerando objetos e strings)
        const categoryExists = categoryArray.some(cat => {
            const catName = typeof cat === 'string' ? cat : cat.name;
            return catName === newName;
        });
        
        if (newName !== editingCategoryId.name && categoryExists) {
            return alert('essa categoria já existe.');
        }

        // Obtém o ícone selecionado e cor automática baseada no novo nome
        const selectedIconName = categoryIconPicker.querySelector('.task-icon-option.selected')?.dataset.iconName || 'dinheiro';
        const selectedColor = getCategoryColor(newName);
        const coloredIcon = getColoredIcons(selectedIconName, selectedColor);
        
        // Encontra o índice da categoria (considerando objetos e strings)
        const oldName = editingCategoryId.name;
        const oldType = editingCategoryId.type;
        
        // Se mudou o tipo, remove da array antiga e adiciona na nova
        if (newType !== oldType) {
            const oldCategoryArray = oldType === 'despesa' ? expenseCategories : revenueCategories;
            const index = oldCategoryArray.findIndex(cat => {
                const catName = typeof cat === 'string' ? cat : cat.name;
                return catName === oldName;
            });
            
            if (index > -1) {
                oldCategoryArray.splice(index, 1);
                categoryArray.push({
                    name: newName,
                    icon: coloredIcon,
                    color: selectedColor
                });
            }
        } else {
            // Se não mudou o tipo, apenas atualiza a categoria existente
            const index = categoryArray.findIndex(cat => {
                const catName = typeof cat === 'string' ? cat : cat.name;
                return catName === oldName;
            });
            
            if (index > -1) {
                categoryArray[index] = {
                    name: newName,
                    icon: coloredIcon,
                    color: selectedColor
                };
            }
        }
        
        Object.values(dataByMonth).flat().forEach(item => {
            if (item.category === oldName) {
                item.category = newName;
            }
        });

        if (categoryLimits[oldName]) {
            categoryLimits[newName] = categoryLimits[oldName];
            delete categoryLimits[oldName];
        }

        sanitizeAllCategories();
        saveFinancialData();
        editingCategoryId = null;
        renderCategoryModalList();
        updateFinanceDisplay();
    }
    
    // ----------------------------------------------------
    // LÓGICA DE GASTOS POR CATEGORIA (ORÇAMENTOS)
    // ----------------------------------------------------
    
    window.toggleBudgetDisplay = function(container) {
        const textElement = container.querySelector('.progress-bar-text');
        const currentState = container.dataset.view || 'percentage';

        if (currentState === 'percentage') {
            const spent = parseFloat(container.dataset.spent);
            textElement.textContent = formatCurrency(spent);
            textElement.style.fontSize = '11px';
            container.dataset.view = 'currency';
        } else if (currentState === 'currency') {
            const limit = parseFloat(container.dataset.limit);
            textElement.textContent = formatCurrency(limit);
            textElement.style.fontSize = '11px';
            container.dataset.view = 'limit';
        } else {
            textElement.textContent = container.dataset.percentage;
            textElement.style.fontSize = '';
            container.dataset.view = 'percentage';
        }
    }
    
    function updateCategorySpending() {
        sanitizeAllCategories();
        const tableEl = document.getElementById('category-spending-list');
        tableEl.innerHTML = '';

        const allExpenses = Object.values(dataByMonth).flat().filter(item => item.value < 0);
        const totals = {};
        allExpenses.forEach(item => {
            const category = item.category;
            totals[category] = (totals[category] || 0) + Math.abs(item.value);
        });

        const allExpenseCategories = [...new Set(expenseCategories)];
        allExpenseCategories.forEach(category => {
            // Extrai o nome da categoria (pode ser string ou objeto)
            const categoryName = typeof category === 'string' ? category : category.name;
            const limit = categoryLimits[categoryName] || 0;
            const spent = totals[categoryName] || 0;
            const percentage = limit > 0 ? (spent / limit) * 100 : 0;
            const row = document.createElement('tr');
            
            // Procura o ícone e cor da categoria personalizada
            let iconPath = categoryIcons[categoryName] || categoryIcons["outros"];
            let iconColorName = getCategoryColor(categoryName);

            const categoryData = expenseCategories.find(cat => {
                const catName = typeof cat === 'string' ? cat : cat.name;
                return catName === categoryName;
            });

            if (categoryData && typeof categoryData === 'object') {
                iconPath = categoryData.icon;
                iconColorName = getColorNameFromValue(categoryData.color);
            }

            const hexColor = getColorHexFromName(iconColorName);

            const progressBarColor = percentage > 100 ? '#FF5252' : (percentage > 80 ? '#FF9800' : hexColor);

            const categoryDisplay = `<img src="${iconPath}" alt="${categoryName}" class="category-icon icon-color-${iconColorName}">`;
            
            row.innerHTML = `
                <td title="${categoryName}" style="width: 15%; text-align: center;">${categoryDisplay}</td>
                <td style="width: 85%;">
                    <div class="progress-bar-container"
                         data-spent="${spent}"
                         data-percentage="${percentage.toFixed(0)}%"
                         data-limit="${limit}"
                         onclick="toggleBudgetDisplay(this)"
                         title="clique para alternar visualização">
                        <div class="progress-bar" style="width: ${Math.min(100, percentage)}%; background-color: ${progressBarColor};"></div>
                        <span class="progress-bar-text">${percentage.toFixed(0)}%</span>
                    </div>
                </td>
            `;
            tableEl.appendChild(row);
        });
    }

    
    categoryLimitForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const category = document.getElementById('categoryLimitCategory').value;
        const limit = parseFloat(document.getElementById('categoryLimitValue').value);
        if (category && !isNaN(limit)) {
            categoryLimits[category] = limit;
            saveFinancialData();
            updateCategorySpending();
            this.reset();
        }
    });

    // ----------------------------------------------------
    // LÓGICA DE INVESTIMENTOS
    // ----------------------------------------------------

    window.editContribution = (goalId, monthYearKey) => {
        editingContributionKey = `${goalId}-${monthYearKey}`;
        renderInvestmentGoals();
    };

    window.cancelContributionEdit = () => {
        editingContributionKey = null;
        renderInvestmentGoals();
    };

    window.saveContributionEdit = (goalId, monthYearKey) => {
        const input = document.getElementById(`contribution-input-${goalId}-${monthYearKey}`);
        const newValue = parseFloat(input.value);
        if (isNaN(newValue) || newValue < 0) {
            alert("Por favor, insira um valor válido.");
            return;
        }
        
        const goal = investmentGoals.find(g => g.id === goalId);
        if (goal) {
            goal.contributions[monthYearKey] = newValue;
            saveInvestmentGoals();
            editingContributionKey = null;
            renderInvestmentGoals();
        }
    };

    window.deleteContribution = (goalId, monthYearKey) => {
        if (confirm(`Tem certeza que deseja remover o aporte de ${monthYearKey.replace('-', '/')}?`)) {
            const goal = investmentGoals.find(g => g.id === goalId);
            if (goal) {
                delete goal.contributions[monthYearKey];
                saveInvestmentGoals();
                renderInvestmentGoals();
            }
        }
    };

    window.toggleContributions = (goalId) => {
        const contributionsSection = document.getElementById(`contributions-${goalId}`);
        const button = contributionsSection.previousElementSibling;
        
        if (contributionsSection.style.display === 'none') {
            contributionsSection.style.display = 'block';
            button.textContent = `ocultar aportes (${Object.keys(investmentGoals.find(g => g.id === goalId).contributions).length})`;
        } else {
            contributionsSection.style.display = 'none';
            button.textContent = `ver aportes (${Object.keys(investmentGoals.find(g => g.id === goalId).contributions).length})`;
        }
    };



    function cancelEditGoal() {
        editingGoalId = null;
        renderInvestmentGoals();
    }

    function renderGoalIconPicker() {
        // Renderiza ícones com cores
        renderIconPicker(goalIconPicker, goalIconHiddenInput, taskIcons, null, goalColorPicker);

        // Seleciona a cor azul por padrão
        if (goalColorPicker) {
            goalColorPicker.querySelectorAll('.color-option').forEach(option => {
                option.classList.remove('selected');
            });
            const blueOption = goalColorPicker.querySelector('[data-color="blue"]');
            if (blueOption) blueOption.classList.add('selected');
            if (goalColor) goalColor.value = 'blue';
        }
    }

    function resetGoalIconsToBlue() {
        const defaultColor = 'blue';
        if (goalColorPicker) {
            selectColorOption(goalColorPicker, defaultColor);
        }
        if (goalColor) {
            goalColor.value = defaultColor;
        }
        if (goalIconPicker) {
            applyColorToIconOptions(goalIconPicker, defaultColor);
            const options = goalIconPicker.querySelectorAll('.task-icon-option');
            options.forEach(option => option.classList.remove('selected'));
            const firstOption = options[0];
            if (firstOption) {
                firstOption.classList.add('selected');
                goalIconHiddenInput.value = firstOption.dataset.iconPath;
            }
        }
    }

    function renderInvestmentGoals() {
      if (!goalsContainer) {
          console.error('goalsContainer não encontrado');
          return;
      }
      
      goalsContainer.innerHTML = '';
      if (investmentGoals.length === 0 && editingGoalId === null) {
        goalsContainer.innerHTML = '<p style="text-align: center; color: #777;">nenhuma meta de investimento criada.</p>';
        return;
      }

      investmentGoals.forEach(goal => {
        const card = document.createElement('div');
        card.className = 'investment-goal-card';
        card.setAttribute('data-goal-id', goal.id);

        const goalColorName = getColorNameFromValue(goal.colorName || goal.color);
        const goalColorHex = getColorHexFromName(goalColorName);
        card.style.borderLeftColor = goalColorHex;
        
        if (goal.id === editingGoalId) {
            card.innerHTML = `
                <div style="position: relative;">
                    <button class="close-button back-button" onclick="cancelEditGoal()" style="right: auto; left: 15px; top: 15px;"><img src="buttons/back.svg" alt="Voltar"></button>
                    <h4 style="margin-top: 0; text-align: center; padding-top: 10px;">editar meta de investimento</h4>
                </div>
                <form class="edit-goal-form">
                    <div class="form-inputs">
                        <input type="text" value="${goal.name}" required>
                        <input type="number" value="${goal.target}" step="0.01" required>
                    </div>
                    <div class="form-inputs">
                         <input type="number" class="editing-goal-interest" value="${goal.interestRate || 0}" step="0.01" placeholder="juros mensais (%)">
                         <input type="date" class="editing-goal-deadline" value="${goal.deadline || ''}" style="${goal.deadline ? '' : 'display:none;'}">
                    </div>
                    <div style="text-align: right;">
                        <input type="checkbox" class="editing-goal-has-deadline" id="deadline-check-${goal.id}" ${goal.deadline ? 'checked' : ''} style="width:auto; vertical-align: middle;">
                        <label for="deadline-check-${goal.id}" style="font-size: var(--font-size-sm); vertical-align: middle; cursor: pointer;">definir prazo</label>
                    </div>
                    
                    <label style="font-size: var(--font-size-sm); font-weight: bold; margin-top: 10px; display: block;">ícone:</label>
                    <div class="goal-icon-picker" style="display: flex; gap: 8px; flex-wrap: wrap;"></div> 
                    <input type="hidden" class="editing-goal-icon-input" value="${goal.icon}">
                    
                    <label style="font-size: var(--font-size-sm); font-weight: bold; margin-top: 10px; display: block;">cor:</label>
                    <div class="editing-goal-color-picker" style="display: flex; gap: 8px; flex-wrap: wrap;">
                        <div class="color-option" data-color="red" style="background-color: #f44336;"></div>
                        <div class="color-option" data-color="blue" style="background-color: #3586ff;"></div>
                        <div class="color-option" data-color="green" style="background-color: #4caf50;"></div>
                        <div class="color-option" data-color="yellow" style="background-color: #ffeb3b;"></div>
                        <div class="color-option" data-color="purple" style="background-color: #9c27b0;"></div>
                        <div class="color-option" data-color="pink" style="background-color: #ff66cc;"></div>
                        <div class="color-option" data-color="orange" style="background-color: #ff9800;"></div>
                    </div>
                    <input type="hidden" class="editing-goal-color-input" value="${goalColorName}">
                    
                    <div class="actions" style="margin-top: 15px;">
                        <button type="submit" class="edit-btn">salvar</button>
                        <button type="button" class="delete-btn">cancelar</button>
                    </div>
                </form>
            `;

            const iconPickerContainer = card.querySelector('.goal-icon-picker');
            const hiddenIconInput = card.querySelector('.editing-goal-icon-input');
            const colorPickerContainer = card.querySelector('.editing-goal-color-picker');
            const hiddenColorInput = card.querySelector('.editing-goal-color-input');

            const currentColorName = goalColorName;
            if (hiddenColorInput) {
                hiddenColorInput.value = currentColorName;
            }
            
            // Inicializa o seletor de cor
            colorPickerContainer.querySelectorAll('.color-option').forEach(option => {
                option.classList.toggle('selected', option.dataset.color === currentColorName);
            });
            
            // Renderiza os ícones com a cor atual
            // Ícones que devem aparecer primeiro, na ordem especificada
            const priorityIcons = ['círculo', 'nenhum', 'pontos', 'estrela', 'dinheiro'];
            const processedKeys = new Set();

            // Processa primeiro os ícones prioritários na ordem especificada
            priorityIcons.forEach(key => {
                if (taskIcons[key]) {
                    processedKeys.add(key);
                    const iconPath = getColoredIcons(key, currentColorName);
                    const optionDiv = document.createElement('div');
                    optionDiv.className = 'task-icon-option';
                    optionDiv.dataset.iconPath = iconPath;
                    optionDiv.dataset.iconName = key;

                    const img = document.createElement('img');
                    img.src = iconPath + '?t=' + Date.now() + '&r=' + Math.random();
                    img.className = `icon-color-${currentColorName}`;
                    img.dataset.color = currentColorName;
                    img.style.width = '100%';
                    img.style.height = '100%';
                    img.style.objectFit = 'contain';
                    img.style.borderRadius = '5px';
                    optionDiv.appendChild(img);

                    if (goal.icon === iconPath || goal.icon === taskIcons[key]) {
                        optionDiv.classList.add('selected');
                    }

                    optionDiv.addEventListener('click', () => {
                        iconPickerContainer.querySelector('.selected')?.classList.remove('selected');
                        optionDiv.classList.add('selected');
                        hiddenIconInput.value = optionDiv.dataset.iconPath;
                    });

                    iconPickerContainer.appendChild(optionDiv);
                }
            });

            // Processa os demais ícones
            for (const key in taskIcons) {
                if (processedKeys.has(key)) continue; // Pula os já processados
                const iconPath = getColoredIcons(key, currentColorName);
                const optionDiv = document.createElement('div');
                optionDiv.className = 'task-icon-option';
                optionDiv.dataset.iconPath = iconPath;
                optionDiv.dataset.iconName = key;

                const img = document.createElement('img');
                img.src = iconPath + '?t=' + Date.now() + '&r=' + Math.random();
                img.className = `icon-color-${currentColorName}`;
                img.dataset.color = currentColorName;
                img.style.width = '100%';
                img.style.height = '100%';
                img.style.objectFit = 'contain';
                img.style.borderRadius = '5px';
                optionDiv.appendChild(img);

                if (goal.icon === iconPath || goal.icon === taskIcons[key]) {
                    optionDiv.classList.add('selected');
                }

                optionDiv.addEventListener('click', () => {
                    iconPickerContainer.querySelector('.selected')?.classList.remove('selected');
                    optionDiv.classList.add('selected');
                    hiddenIconInput.value = optionDiv.dataset.iconPath;
                });

                iconPickerContainer.appendChild(optionDiv);
            }
            
            // Event listener para o seletor de cor
            colorPickerContainer.addEventListener('click', (e) => {
                const colorOption = e.target.closest('.color-option');
                if (colorOption) {
                    colorPickerContainer.querySelectorAll('.color-option').forEach(option => {
                        option.classList.remove('selected');
                    });
                    colorOption.classList.add('selected');
                    const selectedColor = colorOption.dataset.color;

                    if (hiddenColorInput) {
                        hiddenColorInput.value = selectedColor;
                    }
                    
                    // Atualiza os ícones com a nova cor
                    iconPickerContainer.querySelectorAll('.task-icon-option').forEach(iconOption => {
                        const iconName = iconOption.dataset.iconName;
                        const coloredPath = getColoredIcons(iconName, selectedColor);
                        const img = iconOption.querySelector('img');
                        img.src = coloredPath;
                        img.className = `icon-color-${selectedColor}`;
                        img.dataset.color = selectedColor;
                        iconOption.dataset.iconPath = coloredPath;
                    });
                    
                    // Atualiza o ícone selecionado
                    const selectedIcon = iconPickerContainer.querySelector('.task-icon-option.selected');
                    if (selectedIcon) {
                        const iconName = selectedIcon.dataset.iconName;
                        const coloredPath = getColoredIcons(iconName, selectedColor);
                        hiddenIconInput.value = coloredPath;
                    }
                }
            });

            


        } else {
            
            const monthlyInterestRate = (goal.interestRate || 0) / 100;
            let totalAccumulated = 0;
            let historyHtml = '';
            let lastDate;

            if (Object.keys(goal.contributions).length > 0) {
                const contributionEntries = Object.entries(goal.contributions).map(([monthYear, amount]) => {
                    const { year, month } = parseMonthYear(monthYear);
                    return { year, month, amount, date: new Date(year, month), key: monthYear };
                }).sort((a, b) => a.date - b.date);

                lastDate = new Date(contributionEntries[0].year, contributionEntries[0].month);

                contributionEntries.forEach(entry => {
                    const currentDate = entry.date;
                    let monthsPassed = (currentDate.getFullYear() - lastDate.getFullYear()) * 12 + (currentDate.getMonth() - lastDate.getMonth());
                    
                    if (monthsPassed > 0) {
                        totalAccumulated *= Math.pow(1 + monthlyInterestRate, monthsPassed);
                    }
                    
                    totalAccumulated += entry.amount;
                    lastDate = currentDate;
                });
                
                const today = new Date();
                const startOfCurrentMonth = new Date(today.getFullYear(), today.getMonth(), 1); 
                let finalMonthsPassed = (startOfCurrentMonth.getFullYear() - lastDate.getFullYear()) * 12 + (startOfCurrentMonth.getMonth() - lastDate.getMonth());

                if (finalMonthsPassed > 0) {
                    totalAccumulated *= Math.pow(1 + monthlyInterestRate, finalMonthsPassed);
                }

                contributionEntries.forEach(entry => {
                    const currentKey = `${goal.id}-${entry.key}`;
                    if (editingContributionKey === currentKey) {
                         historyHtml += `
                            <li>
                                <span>${entry.key.replace('-', '/')}: </span>
                                <input id="contribution-input-${currentKey}" type="number" value="${entry.amount}" step="0.01">
                                <button class="save-item-btn" onclick="saveContributionEdit(${goal.id}, '${entry.key}')"><img src="buttons/ok.svg" alt="Salvar"></button>
                                <button class="cancel-item-btn" onclick="cancelContributionEdit()"><img src="buttons/close.svg" alt="Cancelar"></button>
                            </li>`;
                    } else {
                         historyHtml += `
                            <li>
                                <span>${entry.key.replace('-', '/')}: ${formatCurrency(entry.amount)}</span>
                                <span>
                                    <button class="edit-btn" onclick="editContribution(${goal.id}, '${entry.key}')"><img src="buttons/pencil.svg" alt="Editar"></button>
                                    <button class="delete-btn" onclick="deleteContribution(${goal.id}, '${entry.key}')"><img src="buttons/trash.svg" alt="Remover"></button>
                                </span>
                            </li>`;
                    }
                });
            }
            
            const totalSaved = totalAccumulated;
            const percentage = goal.target > 0 ? (totalSaved / goal.target) * 100 : 0;

            card.innerHTML = `
              <div class="goal-header">
                <div class="goal-header-content">
                    <img src="${goal.icon || taskIcons.money}" class="goal-icon icon-color-${goalColorName}" alt="ícone da meta">
                    <h4>${goal.name}</h4>
                </div>
                <div class="actions">
                    <button class="edit-btn"><img src="buttons/pencil.svg" alt="Editar"></button>
                    <button class="delete-btn"><img src="buttons/trash.svg" alt="Remover"></button>
                </div>
              </div>
              <div class="goal-details">
                <p><strong>${formatCurrency(totalSaved)}</strong> / ${formatCurrency(goal.target)}</p>
                <div class="progress-bar-container" style="cursor: default;">
                  <div class="progress-bar" style="width: ${Math.min(100, percentage)}%; background-color: ${goalColorHex};"></div>
                   <span class="progress-bar-text">${percentage.toFixed(1)}%</span>
                </div>
                 <p style="font-size: var(--font-size-xs); color: #888; margin-top: 8px; margin-bottom: 0;">
                    juros: ${goal.interestRate || 0}% a.m. | prazo: ${goal.deadline ? new Date(goal.deadline + 'T12:00:00').toLocaleDateString('pt-BR') : 'indefinido'}
                </p>
              </div>
              <form class="add-contribution-form">
                <input type="number" placeholder="valor a investir este mês" step="0.01" required>
                <button type="submit" class="add-btn">adicionar</button>
              </form>
              ${historyHtml ? `
                <button class="show-contributions-btn" onclick="toggleContributions(${goal.id})" style="width: 100%; margin-top: 10px; padding: 8px; background: #f5f5f5; border: 1px solid #ddd; border-radius: 4px; cursor: pointer; font-size: var(--font-size-xs);">
                  ver aportes (${Object.keys(goal.contributions).length})
                </button>
                <div class="contributions-section" id="contributions-${goal.id}" style="display: none;">
                  <ul class="contribution-history-list">${historyHtml}</ul>
                </div>
              ` : ''}
            `;
        }
        goalsContainer.appendChild(card);
      });
    }

    newGoalForm.addEventListener('submit', e => {
      e.preventDefault();
      const name = document.getElementById('newGoalName').value.trim();
      const target = parseFloat(document.getElementById('newGoalTarget').value);
      const interestRate = parseFloat(document.getElementById('newGoalInterestRate').value) || 0;
      const deadline = newGoalHasDeadlineCheckbox.checked ? newGoalDeadlineInput.value : null;
      const iconPath = goalIconHiddenInput.value;
      const selectedColor = goalColor.value || 'blue';

      if (name && !isNaN(target) && target > 0) {
        const colorName = getColorNameFromValue(selectedColor);
        const colorHex = getColorHexFromName(colorName);

        investmentGoals.push({
          id: Date.now(),
          name: name,
          target: target,
          color: colorHex,
          colorName: colorName,
          icon: iconPath,
          contributions: {},
          interestRate: interestRate,
          deadline: deadline
        });
        saveInvestmentGoals();
        renderInvestmentGoals();
        newGoalForm.reset();
        newGoalDeadlineInput.style.display = 'none';
        
        // Volta para a lista de metas
        investmentFormView.style.display = 'none';
        goalsContainer.style.display = 'block';
        openAddInvestmentFormBtn.style.display = 'block';
        
      } else {
        alert('por favor, preencha o nome e um valor válido para a meta.');
      }
    });
    
    goalsContainer.addEventListener('submit', e => {
        const card = e.target.closest('.investment-goal-card');
        if (!card) return;
        const goalId = Number(card.dataset.goalId);

        if(e.target.classList.contains('add-contribution-form')) {
            e.preventDefault();
            const amountInput = e.target.querySelector('input[type="number"]');
            const amount = parseFloat(amountInput.value);

            if (isNaN(amount) || amount <= 0) {
                alert('por favor, insira um valor válido para o aporte.');
                return;
            }

            const goal = investmentGoals.find(g => g.id === goalId);
            if (goal) {
                const monthYearKey = `${monthNamesPt[currentCalendarDate.getMonth()]}-${currentCalendarDate.getFullYear()}`;
                goal.contributions[monthYearKey] = (goal.contributions[monthYearKey] || 0) + amount;
                saveInvestmentGoals();
                renderInvestmentGoals();
            }
        } else if (e.target.classList.contains('edit-goal-form')) {
            e.preventDefault();
            const goal = investmentGoals.find(g => g.id === goalId);
            const newName = e.target.querySelector('input[type="text"]').value.trim();
            const newTarget = parseFloat(e.target.querySelector('input[type="number"]').value);
            const newInterest = parseFloat(e.target.querySelector('.editing-goal-interest').value) || 0;
            const hasDeadline = e.target.querySelector('.editing-goal-has-deadline').checked;
            const newDeadline = hasDeadline ? e.target.querySelector('.editing-goal-deadline').value : null;

            const newIcon = e.target.querySelector('.editing-goal-icon-input').value;
            const selectedColorOption = e.target.querySelector('.editing-goal-color-picker .color-option.selected');
            const selectedColorName = selectedColorOption ? selectedColorOption.dataset.color : 'blue';
            const normalizedColorName = getColorNameFromValue(selectedColorName);
            const newColorHex = getColorHexFromName(normalizedColorName);

            if (newName && !isNaN(newTarget) && newTarget > 0) {
                goal.name = newName;
                goal.target = newTarget;
                goal.color = newColorHex;
                goal.colorName = normalizedColorName;
                goal.icon = newIcon;
                goal.interestRate = newInterest;
                goal.deadline = newDeadline;

                editingGoalId = null;
                saveInvestmentGoals();
                renderInvestmentGoals();
            } else {
                alert('por favor, preencha o nome e um valor válido para a meta.');
            }
        }
    });

    goalsContainer.addEventListener('click', e => {
        const card = e.target.closest('.investment-goal-card');
        if (!card) return;
        const goalId = Number(card.dataset.goalId);
        
        if (e.target.closest('.goal-header .actions .delete-btn')) {
            if (confirm('tem certeza que deseja excluir esta meta?')) {
              investmentGoals = investmentGoals.filter(g => g.id !== goalId);
              saveInvestmentGoals();
              renderInvestmentGoals();
            }
        }
        else if (e.target.closest('.goal-header .actions .edit-btn')) {
            editingGoalId = goalId;
            renderInvestmentGoals();
        }
        else if (e.target.matches('.edit-goal-form .delete-btn')) {
            editingGoalId = null;
            renderInvestmentGoals();
        }
        else if (e.target.matches('.editing-goal-has-deadline')) {
            const deadlineInput = card.querySelector('.editing-goal-deadline');
            deadlineInput.style.display = e.target.checked ? 'block' : 'none';
        }
    });


    // ----------------------------------------------------
    // LÓGICA FINANCEIRA CENTRAL E GRÁFICOS
    // ----------------------------------------------------

    function createOrUpdateChart(canvasId, existingChartInstance, chartConfig) {
        if (typeof Chart === 'undefined') {
            console.error("A biblioteca Chart.js não foi carregada. Gráficos não podem ser criados.");
            return null;
        }
        
        const canvas = document.getElementById(canvasId);
        if (!canvas) {
            console.error(`Elemento canvas com id "${canvasId}" não encontrado.`);
            return null;
        }
        
        const ctx = canvas.getContext('2d');
        if (existingChartInstance) {
            existingChartInstance.destroy();
        }

        return new Chart(ctx, chartConfig);
    }
    
    function renderMonthChart() {
        const monthData = dataByMonth[currentMonth] || [];
        const categoryTotals = {};
        monthData.forEach(item => {
            if (item.value < 0) {
                categoryTotals[item.category] = (categoryTotals[item.category] || 0) + Math.abs(item.value);
            }
        });

        const isDarkMode = document.body.classList.contains('dark-mode');
        const textColor = isDarkMode ? '#E0E0E0' : '#333';
        const chartLabels = Object.keys(categoryTotals).filter(key => categoryTotals[key] > 0);
        const chartData = chartLabels.map(key => categoryTotals[key]);
        
        const monthChartConfig = {
            type: 'pie',
            data: {
                labels: chartLabels,
                datasets: [{
                    data: chartData,
                    backgroundColor: ['#FF5252', '#4CAF50', '#00BCD4', '#9C27B0', '#FFC107', '#FF9800', '#795548', '#607D8B', '#E91E63']
                }]
            },
            options: {
                plugins: {
                    legend: {
                        labels: { color: textColor }
                    }
                }
            }
        };
        monthChart = createOrUpdateChart('month-chart', monthChart, monthChartConfig);
    }

    function updateFinanceDisplay() {
        updateSummaryCards();
        renderAnnualChart();
        renderMonthChart();
    }
    
    function updateSummaryCards() {
        const monthData = dataByMonth[currentMonth] || [];
        const totalRevenue = monthData.filter(item => item.value > 0).reduce((acc, item) => acc + item.value, 0);
        const totalExpenses = monthData.filter(item => item.value < 0).reduce((acc, item) => acc + item.value, 0);
        const monthBalance = totalRevenue + totalExpenses;

        document.getElementById('total-revenue').textContent = formatCurrency(totalRevenue);
        document.getElementById('total-expense').textContent = formatCurrency(Math.abs(totalExpenses));
        const balanceEl = document.getElementById('month-balance');
        balanceEl.textContent = formatCurrency(monthBalance);
        balanceEl.style.color = monthBalance >= 0 ? '#4CAF50' : '#FF5252';
    }

    function renderExpenses() {
        expenseList.innerHTML = '';
        let total = 0;
        const monthData = dataByMonth[currentMonth] || [];

        monthData.forEach((item, index) => {
            const transactionType = item.type || (item.value >= 0 ? 'receita' : 'despesa');
            const escapedDesc = (item.desc || '').replace(/'/g, "&apos;").replace(/"/g, "&quot;");
            
            // Procura o ícone da categoria personalizada
            let iconPath = item.icon;
            
            if (!iconPath) {
                const allCategories = [...expenseCategories, ...revenueCategories];
                const categoryData = allCategories.find(cat => {
                    const catName = typeof cat === 'string' ? cat : cat.name;
                    return catName === item.category;
                });
                
                if (categoryData && typeof categoryData === 'object') {
                    iconPath = categoryData.icon;
                } else {
                    iconPath = categoryIcons[item.category] || categoryIcons["outros"];
                }
            }
            
            // Cores simplificadas: vermelho para despesas, verde para receitas
            const defaultIconColor = transactionType === 'receita' ? 'green' : 'red';
            const valueColor = transactionType === 'receita' ? '#4CAF50' : '#f44336';
            
            // Usa o ícone diretamente (cores serão aplicadas via CSS)
            const coloredIconPath = iconPath;
            const iconColor = item.categoryColor || defaultIconColor;
            
            const iconHtml = `<img src="${coloredIconPath}" class="category-icon icon-color-${iconColor}" alt="${item.category}" style="width: 24px; height: 24px; object-fit: contain;">`;
            
            const row = document.createElement('tr');
            row.style.borderBottom = '1px solid var(--border-color, #eee)';
            row.innerHTML = `
                <td style="text-align:center; padding: 12px 8px;">${iconHtml}</td>
                <td style="padding: 12px 8px; font-size: 14px;">${item.desc}</td>
                <td style="color: ${valueColor}; font-weight: bold; text-align:right; padding: 12px 8px; font-size: 14px;">${formatCurrency(Math.abs(item.value))}</td>
                <td style="text-align:center; padding: 12px 8px;">
                    <button class="edit-btn" data-index="${index}" style="margin-right: 5px;"><img src="buttons/pencil.svg" alt="Editar" style="width: 16px; height: 16px;"></button>
                    <button class="delete-btn" data-index="${index}"><img src="buttons/trash.svg" alt="Remover" style="width: 16px; height: 16px;"></button>
                </td>
            `;
            expenseList.appendChild(row);
            total += item.value;
        });
    }

    window.deleteExpense = function(index) {
        if (confirm("tem certeza que deseja excluir esta transação?")) {
            dataByMonth[currentMonth].splice(index, 1);
            saveFinancialData();
            renderExpenses();
            updateFinanceDisplay();
        }
    }

    window.editExpense = function(index) {
        editingIndex = index;
        const item = dataByMonth[currentMonth][index];
        descInput.value = item.desc;
        typeInput.value = item.type || (item.value >= 0 ? 'receita' : 'despesa');
        renderCategorySelect(typeInput.value === 'receita');
        categoryInput.value = item.category;
        valueInput.value = Math.abs(item.value);
        
        
        transactionListView.style.display = 'none';
        addTransactionContainer.style.display = 'block';
        transactionFormTitle.textContent = 'editar transação';

        submitButton.textContent = 'salvar';
        submitButton.style.background = '#4CAF50';

        if (!document.getElementById('cancel-edit-btn')) {
            const cancelButton = document.createElement('button');
            cancelButton.id = 'cancel-edit-btn';
            cancelButton.type = 'button';
            cancelButton.textContent = 'cancelar';
            cancelButton.className = 'add-btn';
            cancelButton.style.background = '#FF9800';
            cancelButton.onclick = cancelEdit;
            buttonGroup.appendChild(cancelButton);
        }
    }

    window.cancelEdit = function() {
        editingIndex = null;
        form.reset();
        submitButton.textContent = 'adicionar';
        submitButton.style.background = '#3586ff';
        transactionFormTitle.textContent = 'adicionar transação';

        typeInput.value = 'despesa';
        renderCategorySelect(false);
        const cancelButton = document.getElementById('cancel-edit-btn');
        if (cancelButton) cancelButton.remove();
        

        addTransactionContainer.style.display = 'none';
        transactionListView.style.display = 'block';
    }

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const desc = descInput.value, category = categoryInput.value, type = typeInput.value;
        let value = parseFloat(valueInput.value);
        
        // Obtém o ícone da categoria automaticamente
        let icon = null;
        const allCategories = [...expenseCategories, ...revenueCategories];
        const categoryData = allCategories.find(cat => {
            const catName = typeof cat === 'string' ? cat : cat.name;
            return catName === category;
        });
        
        if (categoryData && typeof categoryData === 'object') {
            icon = categoryData.icon;
        } else {
            icon = categoryIcons[category] || categoryIcons["outros"];
        }

        if (!desc || !category || isNaN(value)) {
            alert('Por favor, preencha a descrição, categoria e valor.');
            return;
        }
        
        let date;
        const expenseMonth = currentMonth;

        if (editingIndex !== null) {
            date = dataByMonth[currentMonth][editingIndex].date;
        } else {
            const today = new Date();
            const year = currentCalendarDate.getFullYear();
            const month = currentCalendarDate.getMonth();
            const day = (year === today.getFullYear() && month === today.getMonth()) ? today.getDate() : 1;
            date = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
        }

        value = type === 'despesa' ? -Math.abs(value) : Math.abs(value);
        const newItem = { date, desc, category, type, value, icon };

        if (editingIndex !== null) {
            dataByMonth[currentMonth][editingIndex] = newItem;
        } else {
            if (!dataByMonth[expenseMonth]) dataByMonth[expenseMonth] = [];
            dataByMonth[expenseMonth].push(newItem);
        }

        saveFinancialData();
        renderExpenses();
        updateFinanceDisplay();
        
        if (editingIndex !== null) {
            cancelEdit();
        } else {
            form.reset();
            typeInput.value = 'despesa';
            renderCategorySelect(false);
            addTransactionContainer.style.display = 'none';
            transactionListView.style.display = 'block';
        }
    });

    function renderAnnualChart() {
        const isDarkMode = document.body.classList.contains('dark-mode');
        const gridColor = isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)';
        const textColor = isDarkMode ? '#E0E0E0' : '#333';
        const year = currentCalendarDate.getFullYear();
        
        const monthlyRevenues = monthNamesPt.map(m => {
            const monthKey = `${m}-${year}`;
            return (dataByMonth[monthKey] || [])
                .filter(item => item.value > 0)
                .reduce((acc, item) => acc + item.value, 0);
        });

        const monthlyExpenses = monthNamesPt.map(m => {
            const monthKey = `${m}-${year}`;
            return (dataByMonth[monthKey] || [])
                .filter(item => item.value < 0)
                .reduce((acc, item) => acc + Math.abs(item.value), 0);
        });

        const annualChartConfig = {
            type: 'bar',
            data: {
                labels: monthNamesPt,
                datasets: [{
                    label: `receitas (${year})`,
                    data: monthlyRevenues,
                    backgroundColor: '#4CAF50'
                }, {
                    label: `despesas (${year})`,
                    data: monthlyExpenses,
                    backgroundColor: '#FF5252'
                }]
            },
            options: {
                scales: {
                    y: { beginAtZero: true, ticks: { color: textColor }, grid: { color: gridColor } },
                    x: { ticks: { color: textColor }, grid: { color: gridColor } }
                },
                plugins: {
                    legend: { labels: { color: textColor } }
                }
            }
        };
        annualChart = createOrUpdateChart('annual-chart', annualChart, annualChartConfig);
    }

    // ----------------------------------------------------
    // CÓDIGO DO PLANNER, TAREFAS E LISTAS
    // ----------------------------------------------------

    function findLinkedTask(listId) {
        for (const dateKey in calendarTasks) {
            const taskIndex = calendarTasks[dateKey].findIndex(task => task.linkedListId === listId);
            if (taskIndex > -1) {
                return {
                    task: calendarTasks[dateKey][taskIndex],
                    dateKey: dateKey,
                    taskIndex: taskIndex
                };
            }
        }
        return null;
    }

    function initCalendarSelect() {
        if (calendarMonthSelect.options.length === 0) {
             monthNamesPt.forEach((month, index) => {
                const option = document.createElement('option');
                option.value = index;
                option.textContent = month;
                calendarMonthSelect.appendChild(option);
            });
        }
    }
    
    function renderCalendar(date) {
        calendarGrid.innerHTML = `<div class="calendar-day-name">dom</div> <div class="calendar-day-name">seg</div><div class="calendar-day-name">ter</div> <div class="calendar-day-name">qua</div><div class="calendar-day-name">qui</div><div class="calendar-day-name">sex</div><div class="calendar-day-name">sáb</div>`;
        const year = date.getFullYear(), month = date.getMonth();
        calendarMonthSelect.value = month;
        const firstDayOfMonth = new Date(year, month, 1).getDay(), daysInMonth = new Date(year, month + 1, 0).getDate(), daysInPrevMonth = new Date(year, month, 0).getDate();
        
        for (let i = firstDayOfMonth; i > 0; i--) {
            const dayDiv = document.createElement('div'); dayDiv.className = 'calendar-day inactive'; dayDiv.innerHTML = `<span class="calendar-day-number">${daysInPrevMonth - i + 1}</span>`; calendarGrid.appendChild(dayDiv);
        }

        for (let day = 1; day <= daysInMonth; day++) {
            const dayDiv = document.createElement('div');
            dayDiv.className = 'calendar-day';
            dayDiv.innerHTML = `<span class="calendar-day-number">${day}</span>`;
            const dateKey = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
            dayDiv.addEventListener('click', () => openDayView(dateKey));

            const tasks = calendarTasks[dateKey] || [];
            if (tasks.length > 0) {
                dayDiv.style.borderColor = '#a572ff';
                const iconContainer = document.createElement('div');
                iconContainer.className = 'calendar-task-icons';
                
                tasks.forEach(task => {
                    if (task.icon) { 
                        const iconEl = document.createElement('img');
                        iconEl.src = task.icon;
                        // Se for lista agendada com prioridade alta, ícone e borda vermelhos
                        // Caso contrário, mantém cor original do ícone, mas borda vermelha se prioritária
                        let iconColor = task.color || task.iconColor || getIconColorFromPath(task.icon);
                        if (task.linkedListId && task.priority === 'alta') {
                            iconColor = 'red';
                        }
                        iconEl.className = `task-icon-grid-view icon-color-${iconColor}`;
                        
                        // Se for prioritário, envolve em um wrapper com borda vermelha
                        if (task.priority === 'alta') {
                            const wrapper = document.createElement('div');
                            wrapper.style.width = '18px';
                            wrapper.style.height = '18px';
                            wrapper.style.borderRadius = '3px';
                            wrapper.style.border = '1px solid';
                            const isDarkMode = document.body.classList.contains('dark-mode');
                            wrapper.style.borderColor = isDarkMode ? '#FF1744' : '#FF5252';
                            wrapper.style.padding = '1px';
                            wrapper.style.boxSizing = 'border-box';
                            wrapper.style.display = 'inline-flex';
                            wrapper.style.alignItems = 'center';
                            wrapper.style.justifyContent = 'center';
                            iconEl.style.width = '100%';
                            iconEl.style.height = '100%';
                            iconEl.style.border = 'none';
                            wrapper.appendChild(iconEl);
                            iconContainer.appendChild(wrapper);
                        } else {
                            iconContainer.appendChild(iconEl);
                        }
                    }
                });
                dayDiv.appendChild(iconContainer);
            }
            
            const today = new Date();
            if (day === today.getDate() && month === today.getMonth() && year === today.getFullYear()) {
                dayDiv.style.borderColor = '#e3e3e3';
                dayDiv.style.borderWidth = '2px';
            }
            calendarGrid.appendChild(dayDiv);
        }

        const totalSlots = Math.ceil((firstDayOfMonth + daysInMonth) / 7) * 7;
        for (let i = 1; i <= totalSlots - (firstDayOfMonth + daysInMonth); i++) {
            const dayDiv = document.createElement('div'); dayDiv.className = 'calendar-day inactive'; dayDiv.innerHTML = `<span class="calendar-day-number">${i}</span>`; calendarGrid.appendChild(dayDiv);
        }
    }

    // NOVA LÓGICA DE NAVEGAÇÃO DO PLANNER
    function openDayView(dateKey) {
        selectedDateKey = dateKey;
        dayViewTitle.textContent = `tarefas do dia`;
        renderDayTasks();
        
        // Força visibilidade com !important
        plannerDetailsContainer.style.setProperty('display', 'block', 'important');
        dayViewSection.style.setProperty('display', 'block', 'important');
        taskFormView.style.setProperty('display', 'none', 'important');
        
        // Scroll para garantir que o botão seja visível
        setTimeout(() => {
            // Scroll para o final da seção com margem extra
            const rect = dayViewSection.getBoundingClientRect();
            const scrollTop = window.pageYOffset + rect.bottom - window.innerHeight + 100;
            window.scrollTo({ top: scrollTop, behavior: 'smooth' });
        }, 200);
        
        // Debug: verifica se o botão existe
        console.log('Botão encontrado:', openAddTaskFormBtn);
        console.log('Botão display atual:', openAddTaskFormBtn.style.display);
        
        // Remove qualquer estilo inline que possa estar interferindo
        openAddTaskFormBtn.removeAttribute('style');
        
        // Garante que o botão de adicionar tarefa seja visível com !important
        openAddTaskFormBtn.style.setProperty('display', 'inline-flex', 'important');
        openAddTaskFormBtn.style.setProperty('visibility', 'visible', 'important');
        openAddTaskFormBtn.style.setProperty('opacity', '1', 'important');
        openAddTaskFormBtn.style.setProperty('width', '100%', 'important');
        openAddTaskFormBtn.style.setProperty('margin-top', '20px', 'important');
        
        console.log('Botão display após setProperty:', openAddTaskFormBtn.style.display);
        console.log('Botão computed style:', window.getComputedStyle(openAddTaskFormBtn).display);
        
        // Debug adicional para verificar visibilidade
        console.log('Container planner-details-container display:', window.getComputedStyle(plannerDetailsContainer).display);
        console.log('Container day-view-section display:', window.getComputedStyle(dayViewSection).display);
        console.log('Botão visibility:', window.getComputedStyle(openAddTaskFormBtn).visibility);
        console.log('Botão opacity:', window.getComputedStyle(openAddTaskFormBtn).opacity);
        console.log('Botão width:', window.getComputedStyle(openAddTaskFormBtn).width);
        console.log('Botão height:', window.getComputedStyle(openAddTaskFormBtn).height);
        console.log('Botão position:', window.getComputedStyle(openAddTaskFormBtn).position);
        console.log('Botão z-index:', window.getComputedStyle(openAddTaskFormBtn).zIndex);
        
        cancelTaskEdit(); // Garante que o formulário esteja limpo
    }
    
    function cancelTaskEdit() {
        taskFormModal.removeAttribute('data-editing-id');
        taskFormTitle.textContent = 'adicionar tarefa';
        taskDescriptionInput.value = '';
        taskTimeInput.value = '09:00';
        taskPriorityInput.checked = false; 
        
        // Garante que os ícones estejam renderizados
        if (taskIconPicker && taskIconPicker.children.length === 0) {
            renderIconPicker(taskIconPicker, taskIconHiddenInput, taskIcons, null, taskColorPicker);
        }
        
        // Reset da cor para azul
        if (taskColorPicker && taskIconColorInput) {
            taskColorPicker.querySelectorAll('.color-option').forEach(option => {
                option.classList.remove('selected');
            });
            const blueOption = taskColorPicker.querySelector('[data-color="blue"]');
            if (blueOption) blueOption.classList.add('selected');
            taskIconColorInput.value = 'blue';
        }
        
        const defaultOption = taskIconPicker.querySelector('.task-icon-option');
        if (defaultOption) defaultOption.click();
        
        addTaskBtn.textContent = 'adicionar';
        addTaskBtn.classList.remove('save-edit-btn');
        
        recurrenceTypeInput.value = 'none';
        recurrenceEndDateInput.value = '';
        recurrenceEndDateInput.style.display = 'none';
        recurrenceTypeInput.disabled = false;
        recurrenceEndDateInput.disabled = false;
        weeklyRecurrenceOptions.style.display = 'none';
        weeklyRecurrenceOptions.querySelectorAll('input').forEach(cb => {
            cb.checked = false;
            cb.disabled = false;
        });
    }

    window.editTask = function(taskId) {
        const tasks = calendarTasks[selectedDateKey] || [];
        const taskToEdit = tasks.find(t => t.id === taskId);
        if (!taskToEdit) return;
        
        if (taskToEdit.linkedListId) {
            // Listas agendadas só podem ser editadas na aba listas
            alert('Esta é uma lista agendada. Para editá-la, vá para a aba "listas".');
            return;
        }

        taskTimeInput.value = taskToEdit.time;
        taskDescriptionInput.value = taskToEdit.description;
        taskPriorityInput.checked = taskToEdit.priority === 'alta';

        addTaskBtn.textContent = 'salvar';
        addTaskBtn.classList.add('save-edit-btn');
        taskFormModal.setAttribute('data-editing-id', taskId);
        taskFormTitle.textContent = 'editar tarefa';
        taskIconHiddenInput.value = taskToEdit.icon;

        if (taskIconPicker && taskIconPicker.children.length === 0) {
            renderIconPicker(taskIconPicker, taskIconHiddenInput, taskIcons, null, taskColorPicker);
        }

        const iconPath = taskToEdit.icon;
        const iconName = getIconKeyFromPath(iconPath);
        const iconColor = normalizeIconColor(taskToEdit.color || taskToEdit.iconColor || getIconColorFromPath(iconPath));

        if (taskColorPicker && taskIconColorInput) {
            selectColorOption(taskColorPicker, iconColor);
            taskIconColorInput.value = iconColor;
        }

        applyColorToIconOptions(taskIconPicker, iconColor);

        let selectedOption = null;
        taskIconPicker.querySelectorAll('.task-icon-option').forEach(option => {
            const isSelected = option.dataset.iconName === iconName;
            option.classList.toggle('selected', isSelected);
            if (isSelected) {
                selectedOption = option;
            }
        });

        if (!selectedOption) {
            selectedOption = taskIconPicker.querySelector('.task-icon-option');
            selectedOption?.classList.add('selected');
        }

        if (selectedOption) {
            taskIconHiddenInput.value = selectedOption.dataset.iconPath;
        }



        if (taskToEdit.recurrenceId) {
            recurrenceTypeInput.value = 'none';
            recurrenceTypeInput.disabled = true;
            recurrenceEndDateInput.style.display = 'none';
            recurrenceEndDateInput.disabled = true;
            weeklyRecurrenceOptions.querySelectorAll('input').forEach(cb => cb.disabled = true);
        }
        
        // Navega para a view do formulário - esconde tarefas do dia
        dayViewSection.style.setProperty('display', 'none', 'important');
        taskFormView.style.setProperty('display', 'block', 'important');
    }
    
    function renderDayTasks() {
        tasksList.innerHTML = '';
        const tasks = calendarTasks[selectedDateKey] || [];
        tasks.forEach(task => { if (!task.id) task.id = Date.now() + Math.random().toString().substring(2, 6); });
        tasks.sort((a, b) => (a.time > b.time) ? 1 : -1);
        if (tasks.length === 0) { tasksList.innerHTML = '<p style="text-align: center; color: #777;">nenhuma tarefa agendada.</p>'; return; }
        
        tasks.forEach((task) => {
            const taskItem = document.createElement('div');
            taskItem.className = 'task-list-item';
            if (task.priority === 'alta') {
                taskItem.classList.add('priority-alta');
            }
            if (task.linkedListId) {
                taskItem.dataset.listId = task.linkedListId;
                taskItem.style.cursor = 'pointer';
            }

            const iconColor = task.color || task.iconColor || getIconColorFromPath(task.icon);
            const iconHtml = task.icon ? `<img src="${task.icon}" class="task-icon icon-color-${iconColor}" alt="ícone da tarefa">` : '';
            
            // Para listas agendadas, não mostra o botão de editar
            const editButton = task.linkedListId ? '' : `<button class="edit-task-btn" onclick="editTask('${task.id}')"><img src="buttons/pencil.svg" alt="Editar"></button>`;
            
            taskItem.innerHTML = `
                <span>${iconHtml}<strong>${task.time}</strong> - ${task.description}</span>
                <div class="task-actions">
                    ${editButton}
                    <button onclick="removeTask('${task.id}')"><img src="buttons/trash.svg" alt="Remover"></button>
                </div>`;
            tasksList.appendChild(taskItem);
        });
    }

    taskFormModal.addEventListener('submit', function(e) {
        e.preventDefault();
        const time = taskTimeInput.value;
        const description = taskDescriptionInput.value.trim();
        
        // Obtém o ícone com a cor selecionada
        const selectedIconName = taskIconPicker.querySelector('.task-icon-option.selected')?.dataset.iconName || 'nenhum';
        const selectedColor = taskIconColorInput.value || 'blue';
        const icon = getColoredIcons(selectedIconName, selectedColor);
        
        
        const priority = taskPriorityInput.checked ? 'alta' : 'nenhuma';
        
        if (!time || !description) return alert('por favor, preencha o horário e a descrição da tarefa.');

        const editingId = taskFormModal.getAttribute('data-editing-id');
        const recurrenceType = recurrenceTypeInput.value;

        if (editingId) {
            const taskIndex = (calendarTasks[selectedDateKey] || []).findIndex(t => t.id == editingId);
            if (taskIndex === -1) return;

            const originalTask = calendarTasks[selectedDateKey][taskIndex];
            const updatedTaskData = { time, description, icon, priority, color: selectedColor };

            if (originalTask.recurrenceId) {
                const updateAll = confirm("esta é uma tarefa recorrente. deseja atualizar TODAS as futuras ocorrências?\n\n(clique em 'ok' para atualizar todas, ou 'cancelar' para atualizar apenas esta.)");
                if (updateAll) {
                    const taskDate = new Date(`${selectedDateKey}T12:00:00`);
                    for (const dateKey in calendarTasks) {
                        const currentDate = new Date(`${dateKey}T12:00:00`);
                        if (currentDate >= taskDate) {
                            calendarTasks[dateKey].forEach(task => {
                                if (task.recurrenceId === originalTask.recurrenceId) {
                                    Object.assign(task, updatedTaskData);
                                }
                            });
                        }
                    }
                } else {
                    Object.assign(originalTask, updatedTaskData);
                    originalTask.recurrenceId = null;
                }
            } else {
                Object.assign(originalTask, updatedTaskData);
            }
        } else {
            if (recurrenceType === 'none') {
                if (!calendarTasks[selectedDateKey]) calendarTasks[selectedDateKey] = [];
                calendarTasks[selectedDateKey].push({ id: Date.now().toString(), time, description, icon, priority, color: selectedColor, recurrenceId: null });
            } else {
                const endDateStr = recurrenceEndDateInput.value;
                if (!endDateStr) return alert('por favor, selecione uma data final para a recorrência.');

                const startDate = new Date(`${selectedDateKey}T12:00:00`);
                const endDate = new Date(`${endDateStr}T12:00:00`);
                if (startDate > endDate) return alert('a data final não pode ser anterior à data de início.');

                const recurrenceId = Date.now().toString();
                let currentDate = new Date(startDate);
                
                const selectedWeekdays = recurrenceType === 'weekly' 
                    ? Array.from(weeklyRecurrenceOptions.querySelectorAll('input:checked')).map(cb => parseInt(cb.value))
                    : [];

                if (recurrenceType === 'weekly' && selectedWeekdays.length === 0) {
                    return alert('por favor, selecione pelo menos um dia da semana para a recorrência semanal.');
                }

                while(currentDate <= endDate) {
                    const dateKey = currentDate.toISOString().split('T')[0];
                    let shouldAddTask = false;

                    if (recurrenceType === 'daily') {
                        shouldAddTask = true;
                    } else if (recurrenceType === 'weekly') {
                        if (selectedWeekdays.includes(currentDate.getDay())) {
                            shouldAddTask = true;
                        }
                    }
                    
                    if (shouldAddTask) {
                        if (!calendarTasks[dateKey]) calendarTasks[dateKey] = [];
                        calendarTasks[dateKey].push({
                            id: Date.now().toString() + Math.random(),
                            time,
                            description,
                            icon,
                            priority,
                            color: selectedColor,
                            recurrenceId
                        });
                    }
                    currentDate.setDate(currentDate.getDate() + 1);
                }
            }
        }
        
        saveCalendarTasks();
        renderDayTasks();
        renderCalendar(currentCalendarDate);
        
        // Navega de volta para a view do dia
        taskFormView.style.display = 'none';
        dayViewSection.style.display = 'block';
    });

    window.removeTask = function(taskId) {
        if (!calendarTasks[selectedDateKey]) return;

        const taskToRemove = calendarTasks[selectedDateKey].find(t => t.id === taskId);
        if (!taskToRemove) return;

        const linkedListId = taskToRemove.linkedListId;

        if (taskToRemove.recurrenceId) {
            const deleteAll = confirm("esta é uma tarefa recorrente. deseja apagar TODAS as futuras ocorrências?\n\n(clique em 'ok' para apagar todas, ou 'cancelar' para apagar apenas esta.)");
            
            if (deleteAll) {
                const recurrenceId = taskToRemove.recurrenceId;
                const taskDate = new Date(`${selectedDateKey}T12:00:00`);
                
                for (const dateKey in calendarTasks) {
                    const currentDate = new Date(`${dateKey}T12:00:00`);
                    if (currentDate >= taskDate) {
                        calendarTasks[dateKey] = calendarTasks[dateKey].filter(task => task.recurrenceId !== recurrenceId);
                        if (calendarTasks[dateKey].length === 0) {
                            delete calendarTasks[dateKey];
                        }
                    }
                }
            } else {
                calendarTasks[selectedDateKey] = calendarTasks[selectedDateKey].filter(t => t.id !== taskId);
            }
        } else {
            calendarTasks[selectedDateKey] = calendarTasks[selectedDateKey].filter(t => t.id !== taskId);
        }

        if (calendarTasks[selectedDateKey] && calendarTasks[selectedDateKey].length === 0) {
            delete calendarTasks[selectedDateKey];
        }

        saveCalendarTasks();
        renderDayTasks(); // Re-renderiza a lista de tarefas do dia atual
        renderCalendar(currentCalendarDate); // Atualiza os ícones no calendário

        if(linkedListId) {
            // Só renderiza listas se a aba de listas estiver ativa
            const listasSection = document.getElementById('listas-section');
            if (listasSection && listasSection.style.display === 'block') {
                loadAndRenderLists(); 
            }
        }
    }
    
    function getAllAvailableIcons() {
        // Combina todos os ícones disponíveis: taskIcons, categoryIcons e ícones adicionais
        const allIcons = {};
        
        // Adiciona ícones de tarefas
        Object.assign(allIcons, taskIcons);
        
        // Adiciona ícones de categoria
        Object.assign(allIcons, categoryIcons);
        
        // Adiciona ícones adicionais que podem não estar nos outros objetos
        const additionalIcons = {
            // === ÍCONES CIRCULARES/BÁSICOS ===
            "estrela": "./images/star.svg",
            
            // === SAÚDE E BEM-ESTAR ===
            "pílulas": "./images/pills.svg", "dente": "./images/tooth.svg", "escova de dente": "./images/hairbrush.svg",
            "injeção": "./images/injection.svg",
            
            // === ESPORTES ===
            "futebol": "./images/football.svg", "ping pong": "./images/football.svg", "vôlei": "./images/football.svg",
            
            // === NATUREZA E PLANTAS ===
            "folha": "./images/plant.svg", "lesma": "./images/snail.svg",
            
            // === OUTROS/VARIADOS ===
            "dna": "./images/health.svg", "olho": "./images/eye.svg", "juiz": "./images/people.svg"
        };
        
        Object.assign(allIcons, additionalIcons);
        
        return allIcons;
    }

    // Função auxiliar para extrair a cor do caminho do ícone
    function getIconColorFromPath(iconPath) {
        // Extrai a cor do caminho antigo (colored/[cor]/) ou retorna 'blue' como padrão
        const colorMatch = iconPath.match(/\/colored\/([^\/]+)\//);
        if (colorMatch) {
            return colorMatch[1];
        }
        // Para novos caminhos, retorna 'blue' como padrão
        return 'blue';
    }
    
    function getColoredIcons(iconName, color = 'blue') {
        const normalizedName = typeof iconName === 'string' ? iconName.toLowerCase() : iconName;
        const availableIcons = getAllAvailableIcons();

        if (availableIcons[iconName]) {
            return sanitizeIconPath(availableIcons[iconName]);
        }

        if (normalizedName && availableIcons[normalizedName]) {
            return sanitizeIconPath(availableIcons[normalizedName]);
        }

        // Mapeamento dos nomes do código para os nomes dos arquivos (cores aplicadas via CSS)
        const iconNameMap = {
            "nenhum": "circledashed",
            "lista": "box",
            "círculo": "circle",
            "pontos": "circledots",
            "compras": "shopping",
            "médico": "health",
            "medicação": "pills",
            "dentista": "tooth",
            "dinheiro": "money",
            "coração": "heart",
            "pet": "pet",
            "exercício": "gym",
            "esportes": "football",
            "meditação": "meditation",
            "trabalho": "work",
            "beleza": "hairbrush",
            "escova": "hairbrush",
            "comida": "burger",
            "presente": "gift",
            "aniversário": "birthday",
            "festa": "party",
            "férias": "vacation",
            "transporte": "car",
            "viagem": "plane",
            "reunião": "people",
            "pessoas": "people",
            "computador": "computer",
            "filme": "picture",
            "mídia": "picture",
            "cogumelo": "mushroom",
            "estudo": "study",
            "casa": "house",
            "carro": "car",
            "câmera": "picture",
            "unhas": "nails",
            "pele": "body",
            "escrever": "write",
            "arte": "picture",
            "flor": "flower",
            "planta": "plant",
            "maçã": "apple",
            "cérebro": "study",
            "comprar": "buy",
            "cenoura": "carrot",
            "cigarro": "cigarette",
            "data": "circledashed",
            "sorvete": "icecream",
            "pessoa": "people",
            "telefone": "computer",
            "pipoca": "popcorn",
            "camisa": "shirt",
            "assinaturas": "infinite",
            "futebol": "football",
            "ping pong": "football",
            "vôlei": "football",
            "dna": "health",
            "olho": "eye",
            "injeção": "injection",
            "juiz": "people",
            "folha": "plant",
            "pílulas": "pills",
            "lesma": "snail",
            "estrela": "star",
            "dente": "tooth",
            "escova de dente": "hairbrush",
            "música": "music",
            "arma": "gun"
        };

        // Retorna ícones sem pasta colorida (cores aplicadas via CSS)
        const fallbackKey = normalizedName && iconNameMap[normalizedName] ? iconNameMap[normalizedName] : iconNameMap[iconName];
        const fileName = fallbackKey || normalizedName || iconName;
        return sanitizeIconPath(`./images/${fileName}.svg`);
    }

    function normalizeIconColor(color) {
        return supportedIconColors.includes(color) ? color : 'blue';
    }

    function getIconKeyFromPath(iconPath) {
        if (!iconPath) return 'nenhum';
        const cleanPath = iconPath.split('?')[0];
        const fileName = cleanPath.substring(cleanPath.lastIndexOf('/') + 1).replace('.svg', '');
        return iconFileNameToKeyMap[fileName] || 'nenhum';
    }

    function applyColorToIconOptions(pickerElement, color) {
        if (!pickerElement) return;
        const normalizedColor = normalizeIconColor(color);
        pickerElement.querySelectorAll('.task-icon-option').forEach(option => {
            const iconName = option.dataset.iconName;
            if (!iconName) return;
            const coloredPath = getColoredIcons(iconName, normalizedColor);
            option.dataset.iconPath = coloredPath;

            let img = option.querySelector('img');
            if (!img) {
                img = document.createElement('img');
                option.appendChild(img);
            }

            img.src = coloredPath + '?t=' + Date.now() + '&r=' + Math.random();
            img.className = `icon-color-${normalizedColor}`;
            img.dataset.color = normalizedColor;
            img.style.width = '100%';
            img.style.height = '100%';
            img.style.objectFit = 'contain';
            img.style.borderRadius = '5px';
        });
    }

    function selectColorOption(colorPickerElement, color) {
        if (!colorPickerElement) return;
        const normalizedColor = normalizeIconColor(color);
        colorPickerElement.querySelectorAll('.color-option').forEach(option => {
            option.classList.toggle('selected', option.dataset.color === normalizedColor);
        });
    }


    function renderIconPicker(pickerElement, hiddenInputElement, iconObject, onSelectCallback = null, colorPickerElement = null) {
        if (!pickerElement) {
            console.error('renderIconPicker: pickerElement não encontrado');
            return;
        }
        pickerElement.innerHTML = '';
        const icons = iconObject || taskIcons;
        
        // Determina a cor atual
        let currentColor = 'blue';
        if (colorPickerElement) {
            const selectedColorOption = colorPickerElement.querySelector('.color-option.selected');
            if (selectedColorOption) {
                currentColor = selectedColorOption.dataset.color;
            }
        }

        // Ícones que devem aparecer primeiro, na ordem especificada
        const priorityIcons = ['círculo', 'nenhum', 'pontos', 'estrela', 'dinheiro'];
        const processedKeys = new Set();

        // Processa primeiro os ícones prioritários na ordem especificada
        priorityIcons.forEach(key => {
            if (icons[key]) {
                processedKeys.add(key);
                // Para seletores com colorPickerElement, usa cores dinâmicas
                let iconPath;
                if (colorPickerElement) {
                    iconPath = getColoredIcons(key, currentColor);
                } else {
                    iconPath = icons[key];
                }
                
                const option = document.createElement('div');
                option.className = 'task-icon-option';
                option.dataset.iconPath = iconPath;
                option.dataset.iconName = key;
                
                // Cria a imagem com timestamp para evitar cache
                const img = document.createElement('img');
                img.src = iconPath + '?t=' + Date.now() + '&r=' + Math.random();
                img.className = `icon-color-${currentColor}`;
                img.dataset.color = currentColor;
                option.appendChild(img);
                
                option.addEventListener('click', function() {
                    if (hiddenInputElement) {
                        pickerElement.querySelector('.selected')?.classList.remove('selected');
                        this.classList.add('selected');
                        hiddenInputElement.value = this.getAttribute('data-icon-path');
                    }
                    if (onSelectCallback) {
                        onSelectCallback(iconPath);
                    }
                });
                pickerElement.appendChild(option);
            }
        });

        // Processa os demais ícones
        for (const key in icons) {
            if (processedKeys.has(key)) continue; // Pula os já processados
            // Para seletores com colorPickerElement, usa cores dinâmicas
            let iconPath;
            if (colorPickerElement) {
                iconPath = getColoredIcons(key, currentColor);
            } else {
                iconPath = icons[key]; // Para outros seletores, mantém o comportamento atual
            }
            
            const option = document.createElement('div');
            option.className = 'task-icon-option';
            option.dataset.iconPath = iconPath;
            option.dataset.iconName = key;
            
             // Cria a imagem com timestamp para evitar cache
             const img = document.createElement('img');
             img.src = iconPath + '?t=' + Date.now() + '&r=' + Math.random();
             img.className = `icon-color-${currentColor}`;
             img.dataset.color = currentColor;
             option.appendChild(img);
            
            option.addEventListener('click', function() {
                if (hiddenInputElement) {
                    pickerElement.querySelector('.selected')?.classList.remove('selected');
                    this.classList.add('selected');
                    hiddenInputElement.value = this.getAttribute('data-icon-path');
                }
                if (onSelectCallback) {
                    onSelectCallback(iconPath);
                }
            });
            pickerElement.appendChild(option);
        }
        
        // Adiciona event listener para o seletor de cor se fornecido
        if (colorPickerElement) {
            colorPickerElement.addEventListener('click', (e) => {
                const colorOption = e.target.closest('.color-option');
                if (colorOption) {
                    // Remove seleção anterior
                    colorPickerElement.querySelectorAll('.color-option').forEach(option => {
                        option.classList.remove('selected');
                    });
                    
                    // Seleciona nova cor
                    colorOption.classList.add('selected');
                    const selectedColor = colorOption.dataset.color;
                    
                    // Atualiza TODOS os ícones com a nova cor
                    pickerElement.querySelectorAll('.task-icon-option').forEach(iconOption => {
                        const iconName = iconOption.dataset.iconName;
                        const coloredPath = getColoredIcons(iconName, selectedColor);
                        const img = iconOption.querySelector('img');
                        img.src = coloredPath + '?t=' + Date.now() + '&r=' + Math.random();
                        img.className = `icon-color-${selectedColor}`;
                        img.dataset.color = selectedColor;
                        iconOption.dataset.iconPath = coloredPath;
                    });
                    
                    // Atualiza o ícone selecionado
                    const selectedIcon = pickerElement.querySelector('.task-icon-option.selected');
                    if (selectedIcon && hiddenInputElement) {
                        const iconName = selectedIcon.dataset.iconName;
                        const coloredPath = getColoredIcons(iconName, selectedColor);
                        hiddenInputElement.value = coloredPath;
                    }
                }
            });
        }
        
        

        if(hiddenInputElement) {
            const firstOption = pickerElement.querySelector('.task-icon-option');
            if (firstOption) {
                firstOption.click();
            }
        }
    }

    
    function deleteListAndLinkedTask(listDiv, listName) {
        const listIdToDelete = listDiv.dataset.listId;
        if (!listIdToDelete) return;
        
        const linkedTaskInfo = findLinkedTask(listIdToDelete);
        let confirmMessage = `tem certeza que deseja excluir a lista "${listName}"?`;
        
        if (linkedTaskInfo) {
            const isRecurring = linkedTaskInfo.task.recurrenceId;
            confirmMessage += isRecurring 
                ? "\n\nesta ação também removerá TODAS as suas ocorrências agendadas no planner."
                : "\n\nesta ação também a removerá do planner.";
        }
        
        if (!confirm(confirmMessage)) return;

        if (linkedTaskInfo) {
            if (linkedTaskInfo.task.recurrenceId) {
                const recurrenceId = linkedTaskInfo.task.recurrenceId;
                 for (const dateKey in calendarTasks) {
                    calendarTasks[dateKey] = calendarTasks[dateKey].filter(task => task.recurrenceId !== recurrenceId);
                    if (calendarTasks[dateKey].length === 0) {
                        delete calendarTasks[dateKey];
                    }
                }
            } else {
                 const { dateKey, taskIndex } = linkedTaskInfo;
                calendarTasks[dateKey].splice(taskIndex, 1);
                if (calendarTasks[dateKey].length === 0) {
                    delete calendarTasks[dateKey];
                }
            }
        }
        
        saveCalendarTasks();
        renderCalendar(currentCalendarDate);

        listDiv.remove();
        saveLists();
    }

    function updateShoppingListTotal(listDiv) {
        const totalEl = listDiv.querySelector('.list-total span');
        if (!totalEl) return;

        const items = listDiv.querySelectorAll('ul li');
        let total = 0;
        items.forEach(item => {
            total += parseFloat(item.dataset.value) || 0;
        });
        totalEl.textContent = formatCurrency(total);
    }

    function finalizePurchase(listId) {
        const listDiv = document.querySelector(`.list[data-list-id="${listId}"]`);
        if (!listDiv || listDiv.classList.contains('finalized')) return;

        const listName = listDiv.querySelector('h2').textContent;
        const iconSrc = listDiv.querySelector('.list-title-icon').src;
        
        const categoryEntry = Object.entries(categoryIcons).find(([name, path]) => iconSrc.includes(path.substring(2)));
        const categoryName = categoryEntry ? categoryEntry[0] : 'compras';

        let total = 0;
        listDiv.querySelectorAll('ul li').forEach(item => {
            total += parseFloat(item.dataset.value) || 0;
        });

        if (total <= 0) {
            alert("Adicione itens com valor antes de finalizar a compra.");
            return;
        }

        if(confirm(`Finalizar a compra "${listName}" com o valor total de ${formatCurrency(total)}? Uma nova despesa será adicionada na categoria "${categoryName}".`)) {
            const transactionId = Date.now(); // ID único para a transação
            const newTransaction = {
                id: transactionId, // Armazena o ID
                date: new Date().toISOString().split('T')[0],
                desc: listName,
                category: categoryName,
                type: 'despesa',
                value: -Math.abs(total),
                icon: iconSrc
            };

            if (!dataByMonth[currentMonth]) dataByMonth[currentMonth] = [];
            dataByMonth[currentMonth].push(newTransaction);
            
            saveFinancialData();
            updateFinanceDisplay();
            
            listDiv.classList.add('finalized');
            listDiv.querySelector('.finalize-purchase-btn').style.display = 'none';
            listDiv.querySelector('.undo-finalize-btn').style.display = 'block';
            listDiv.querySelector('.shopping-input-group').querySelectorAll('input, button').forEach(el => el.disabled = true);
            
            // Armazena os dados da transação no elemento da lista
            listDiv.dataset.transactionId = transactionId;
            listDiv.dataset.transactionMonth = currentMonth;
            
            saveLists();
            
            alert("Compra finalizada e adicionada às suas finanças!");
        }
    }

    function undoFinalizePurchase(listId) {
        const listDiv = document.querySelector(`.list[data-list-id="${listId}"]`);
        if (!listDiv) return;

        const transactionId = parseInt(listDiv.dataset.transactionId);
        const transactionMonth = listDiv.dataset.transactionMonth;

        if (transactionId && transactionMonth && dataByMonth[transactionMonth]) {
            // Remove a transação financeira correspondente
            dataByMonth[transactionMonth] = dataByMonth[transactionMonth].filter(t => t.id !== transactionId);
            saveFinancialData();
            updateFinanceDisplay();
        }
        
        // Reverte o estado visual e funcional da lista
        listDiv.classList.remove('finalized');
        listDiv.querySelector('.finalize-purchase-btn').style.display = 'block';
        listDiv.querySelector('.undo-finalize-btn').style.display = 'none';
        listDiv.querySelector('.shopping-input-group').querySelectorAll('input, button').forEach(el => el.disabled = false);

        // Limpa os dados da transação do elemento
        delete listDiv.dataset.transactionId;
        delete listDiv.dataset.transactionMonth;

        saveLists();
    }


    window.createList = function(listName, initialItems = [], initialPriority = 'baixa', listId = Date.now().toString(), listIcon = taskIcons.lista, isShoppingList = false, isFinalized = false, isRoutine = false, transactionId = null, transactionMonth = null, borderColor = null, iconColorName = null) {
        if (!listName) return;

        const listDiv = document.createElement("div");
        listDiv.className = "list priority-" + initialPriority;
        listDiv.dataset.listId = listId;
        listDiv.dataset.isShopping = isShoppingList;
        if (isRoutine) {
            listDiv.dataset.isRoutine = 'true';
        }
        if (transactionId) {
            listDiv.dataset.transactionId = transactionId;
            listDiv.dataset.transactionMonth = transactionMonth;
        }
        
        // Define a cor da borda baseada na prioridade ou na cor informada
        const isDarkMode = document.body.classList.contains('dark-mode');
        const normalizedBorderColorName = borderColor ? getColorNameFromValue(borderColor) : null;
        const resolvedBorderColor = borderColor || getPriorityColor(initialPriority, isDarkMode);
        listDiv.style.borderLeftColor = resolvedBorderColor;

        const resolvedIconColorName = (iconColorName || normalizedBorderColorName || getColorNameFromValue(resolvedBorderColor) || getColorNameFromPriority(initialPriority) || 'blue');
        listDiv.dataset.colorName = resolvedIconColorName;

        const titleContainer = document.createElement('div');
        titleContainer.className = 'list-title-container';
        titleContainer.style.display = 'flex';
        titleContainer.style.justifyContent = 'space-between';
        titleContainer.style.alignItems = 'center';
        titleContainer.style.marginBottom = '10px';
        const iconImg = document.createElement('img');

        const defaultIconPath = sanitizeIconPath(taskIcons.lista || taskIcons.nenhum || './images/circledashed.svg');
        let resolvedIconPath = sanitizeIconPath(listIcon || '');

        if (resolvedIconPath.includes('images/colored/')) {
            const fileName = resolvedIconPath.split('/').pop();
            const iconNameFromLegacy = fileName.replace('.svg', '');
            const newIconName = legacyIconNameMap[iconNameFromLegacy] || iconNameFromLegacy;
            resolvedIconPath = `./images/${newIconName}.svg`;
        }

        if (!resolvedIconPath) {
            resolvedIconPath = defaultIconPath;
        }

        if (isShoppingList) {
            const shoppingIconPath = sanitizeIconPath(taskIcons.compras || defaultIconPath);
            if (!listIcon || resolvedIconPath === defaultIconPath) {
                resolvedIconPath = shoppingIconPath;
            }
        }

        iconImg.src = resolvedIconPath + '?t=' + Date.now();
        iconImg.className = 'list-title-icon icon-color-' + resolvedIconColorName;
        iconImg.dataset.color = resolvedIconColorName;
        const title = document.createElement("h2");
        title.textContent = listName;
        title.style.margin = 0;
        title.style.fontSize = '14px';
        const actionsDiv = document.createElement('div');
        actionsDiv.className = 'list-title-actions';
        const editBtn = document.createElement("button");
        editBtn.innerHTML = '<img src="buttons/pencil.svg" alt="Editar">';
        editBtn.className = "edit-list-btn";
        editBtn.onclick = () => openListEditorSection(listId);
        const removeBtn = document.createElement("button");
        removeBtn.innerHTML = '<img src="buttons/closelist.svg" alt="Remover Lista">';
        removeBtn.className = "delete-list-circular-btn";
        removeBtn.onclick = () => deleteListAndLinkedTask(listDiv, listName);
        actionsDiv.appendChild(editBtn);
        actionsDiv.appendChild(removeBtn);
        titleContainer.appendChild(iconImg);
        titleContainer.appendChild(title);
        titleContainer.appendChild(actionsDiv);
        
        const prioritySelect = document.createElement("select");
        prioritySelect.className = "list-priority-select";
        prioritySelect.innerHTML = `<option value="baixa">baixa prioridade</option><option value="media">média prioridade</option><option value="alta">alta prioridade</option>`;
        prioritySelect.value = initialPriority;
        prioritySelect.onchange = () => {
            const newPriority = prioritySelect.value;
            const isDarkMode = document.body.classList.contains('dark-mode');
            const newColor = getPriorityColor(newPriority, isDarkMode);
            const newColorName = getColorNameFromPriority(newPriority);
            
            // Atualiza a classe de prioridade
            listDiv.classList.remove('priority-baixa', 'priority-media', 'priority-alta');
            listDiv.classList.add('priority-' + newPriority);
            
            // Atualiza a cor da borda
            listDiv.style.borderLeftColor = newColor;

            // Atualiza o ícone com a nova cor
            const currentIconSrc = iconImg.src;
            const iconFileName = currentIconSrc.split('/').pop().split('?')[0].replace('.svg', '');
            const iconName = Object.keys(taskIcons).find(key => taskIcons[key].includes(iconFileName)) || 'compras';
            const newIconPath = getColoredIcons(iconName, newColorName);
            iconImg.src = newIconPath + '?t=' + Date.now();
            iconImg.className = 'list-title-icon icon-color-' + newColorName;
            iconImg.dataset.color = newColorName;
            listDiv.dataset.colorName = newColorName;

            saveLists();
        };

        const inputGroup = document.createElement("div");
        const ul = document.createElement("ul");
        
        if (isShoppingList) {
            inputGroup.className = "shopping-input-group";
            const itemInput = document.createElement("input");
            itemInput.type = "text";
            itemInput.placeholder = "item";
            const valueInput = document.createElement("input");
            valueInput.type = "number";
            valueInput.placeholder = "R$";
            valueInput.step = "0.01";
            const addBtn = document.createElement("button");
            addBtn.textContent = "+";
            addBtn.className = "add-btn";

            inputGroup.append(itemInput, valueInput, addBtn);
            
            addBtn.onclick = () => {
                const text = itemInput.value.trim();
                const value = parseFloat(valueInput.value) || 0;
                if (!text) return;
                addItem(text, false, value);
                itemInput.value = "";
                valueInput.value = "";
                itemInput.focus();
                saveLists();
            };
        } else {
            inputGroup.className = "list-input-group";
            const input = document.createElement("input");
            input.type = "text";
            input.placeholder = "novo item";
            const addBtn = document.createElement("button");
            addBtn.textContent = "adicionar";
            addBtn.className = "add-btn";
            inputGroup.appendChild(input);
            inputGroup.appendChild(addBtn);
            
            addBtn.onclick = () => { 
                const text = input.value.trim(); 
                if (!text) return; 
                input.value = ""; 
                addItem(text); 
                checkCompletion(listDiv); 
                saveLists(); 
            };
        }
        
        const addItem = (text, checked = false, value = 0) => {
            const li = document.createElement("li");
            const contentDiv = document.createElement('div');
            contentDiv.className = 'list-item-content';
            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.checked = checked;
            checkbox.onchange = () => { checkCompletion(listDiv); saveLists(); };
            const span = document.createElement("span");
            span.textContent = text;
            contentDiv.appendChild(checkbox);
            contentDiv.appendChild(span);
            
            if (isShoppingList) {
                li.dataset.value = value;
            }
            
            const actionsDiv = document.createElement('div');
            actionsDiv.className = 'list-item-actions';
            
            let valueDiv;
            if(isShoppingList){
                 valueDiv = document.createElement('div');
                 valueDiv.className = 'list-item-value';
                 valueDiv.textContent = formatCurrency(value);
            }
            
            const createInitialButtons = () => {
                actionsDiv.innerHTML = '';
                const editBtnItem = document.createElement('button');
                editBtnItem.className = 'edit-item-btn';
                editBtnItem.innerHTML = '<img src="buttons/pencil.svg" alt="Editar">';
                editBtnItem.onclick = () => toggleEditMode(true, li);

                const deleteBtnItem = document.createElement('button');
                deleteBtnItem.className = 'delete-item-btn';
                deleteBtnItem.innerHTML = '<img src="buttons/trash.svg" alt="Remover">';
                deleteBtnItem.onclick = () => {
                    li.remove();
                    if(isShoppingList) updateShoppingListTotal(listDiv);
                    checkCompletion(listDiv);
                    saveLists();
                };
                actionsDiv.appendChild(editBtnItem);
                actionsDiv.appendChild(deleteBtnItem);
            };

            const toggleEditMode = (isEditing, currentLi) => {
                 if (isEditing) {
                    const currentText = span.textContent;
                    const textInputField = document.createElement('input');
                    textInputField.type = 'text';
                    textInputField.value = currentText;
                    contentDiv.replaceChild(textInputField, span);
                    
                    if(isShoppingList){
                        const currentValue = parseFloat(currentLi.dataset.value);
                        const valueInputField = document.createElement('input');
                        valueInputField.type = 'number';
                        valueInputField.step = '0.01';
                        valueInputField.className = 'list-item-value-input';
                        valueInputField.value = currentValue.toFixed(2);
                        li.replaceChild(valueInputField, valueDiv);
                    }

                    textInputField.focus();
                    actionsDiv.innerHTML = '';
                    const saveBtn = document.createElement('button');
                    saveBtn.className = 'save-item-btn';
                    saveBtn.innerHTML = '<img src="buttons/ok.svg" alt="Salvar">';
                    saveBtn.onclick = () => {
                        span.textContent = textInputField.value;
                        if(isShoppingList){
                            const newValue = parseFloat(currentLi.querySelector('.list-item-value-input').value) || 0;
                            currentLi.dataset.value = newValue;
                            valueDiv.textContent = formatCurrency(newValue);
                            updateShoppingListTotal(listDiv);
                        }
                        toggleEditMode(false, currentLi);
                        saveLists();
                    };

                    const cancelBtn = document.createElement('button');
                    cancelBtn.className = 'cancel-item-btn';
                    cancelBtn.innerHTML = '<img src="buttons/close.svg" alt="Cancelar">';
                    cancelBtn.onclick = () => toggleEditMode(false, currentLi);

                    actionsDiv.appendChild(saveBtn);
                    actionsDiv.appendChild(cancelBtn);
                } else {
                    const textInputField = contentDiv.querySelector('input[type="text"]');
                    if (textInputField) contentDiv.replaceChild(span, textInputField);
                    
                    if(isShoppingList){
                        const valueInputField = currentLi.querySelector('.list-item-value-input');
                        if (valueInputField) currentLi.replaceChild(valueDiv, valueInputField);
                    }
                    createInitialButtons();
                }
            };
            
            createInitialButtons();
            
            li.appendChild(contentDiv);
            if(isShoppingList) {
                li.appendChild(valueDiv);
            }
            li.appendChild(actionsDiv);
            ul.appendChild(li);
            if(isShoppingList) updateShoppingListTotal(listDiv);
        };
        
        listDiv.appendChild(titleContainer);
        listDiv.appendChild(prioritySelect);
        listDiv.appendChild(inputGroup);
        listDiv.appendChild(ul);
        
        if (isShoppingList) {
            const totalDiv = document.createElement('div');
            totalDiv.className = 'list-total';
            totalDiv.innerHTML = 'total: <span>r$ 0,00</span>';
            
            const finalizeBtn = document.createElement('button');
            finalizeBtn.className = 'finalize-purchase-btn';
            finalizeBtn.textContent = 'finalizar compra';
            finalizeBtn.onclick = () => finalizePurchase(listId);
            
            const undoBtn = document.createElement('button');
            undoBtn.className = 'undo-finalize-btn';
            undoBtn.textContent = 'desfazer finalização';
            undoBtn.onclick = () => undoFinalizePurchase(listId);
            
            listDiv.appendChild(totalDiv);
            listDiv.appendChild(finalizeBtn);
            listDiv.appendChild(undoBtn);
        }
        
        listsContainer.appendChild(listDiv);
        
        initialItems.forEach(item => addItem(item.text, item.checked, item.value));
        checkCompletion(listDiv);
        
        if (isFinalized) {
            listDiv.classList.add('finalized');
            const finalizeBtn = listDiv.querySelector('.finalize-purchase-btn');
            const undoBtn = listDiv.querySelector('.undo-finalize-btn');
            if (finalizeBtn) finalizeBtn.style.display = 'none';
            if (undoBtn) undoBtn.style.display = 'block';
            
            if(listDiv.querySelector('.shopping-input-group')) {
                listDiv.querySelector('.shopping-input-group').querySelectorAll('input, button').forEach(el => el.disabled = true);
            }
        }
    }

    function checkCompletion(listDiv) {
        const checkboxes = listDiv.querySelectorAll("ul li input[type='checkbox']");
        const isRoutine = listDiv.dataset.isRoutine === 'true';
        
        const oldMessage = listDiv.querySelector('.routine-complete-message');
        if (oldMessage) {
            oldMessage.remove();
        }

        if (checkboxes.length === 0) { 
            listDiv.classList.remove("completed"); 
            return; 
        }

        const allChecked = Array.from(checkboxes).every(cb => cb.checked);
        listDiv.classList.toggle("completed", allChecked);

        if (isRoutine && allChecked) {
            const messageEl = document.createElement('p');
            messageEl.className = 'routine-complete-message';
            messageEl.textContent = 'rotina do dia completa!';
            listDiv.appendChild(messageEl);
        }
    }
    
    // ----------------------------------------------------
    // INICIALIZAÇÃO E EVENT LISTENERS
    // ----------------------------------------------------

    newGoalHasDeadlineCheckbox.addEventListener('change', () => {
        newGoalDeadlineInput.style.display = newGoalHasDeadlineCheckbox.checked ? 'block' : 'none';
    });

    themeToggle.addEventListener('click', () => applyTheme(document.body.classList.contains('dark-mode') ? 'light' : 'dark'));
    
    // Event listener para botão de configurações (placeholder)
    if (settingsBtn) {
        settingsBtn.addEventListener('click', () => {
            alert('Configurações serão implementadas em breve!');
        });
    }
    expenseList.addEventListener('click', function(e) {
        const button = e.target.closest('button');
        if (!button) return;
        
        const index = button.getAttribute('data-index');
        if (button.classList.contains('edit-btn')) window.editExpense(parseInt(index));
        else if (button.classList.contains('delete-btn')) window.deleteExpense(parseInt(index));
    });

    showAddTransactionBtn.addEventListener('click', () => {
        transactionListView.style.setProperty('display', 'none', 'important');
        addTransactionContainer.style.setProperty('display', 'block', 'important');
    });
    
    backToTransactionsListBtn.addEventListener('click', () => {
        addTransactionContainer.style.display = 'none';
        transactionListView.style.display = 'block';
        cancelEdit(); // Reseta o formulário caso estivesse em modo de edição
    });

    const closeAddTransactionBtn = document.getElementById('close-add-transaction-btn');
    if (closeAddTransactionBtn) {
        closeAddTransactionBtn.addEventListener('click', () => {
            addTransactionContainer.style.display = 'none';
            transactionListView.style.display = 'block';
            cancelEdit(); // Reseta o formulário caso estivesse em modo de edição
        });
    }

    newListForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const listName = newListNameInput.value.trim().toLowerCase();
        if (!listName) return;

        const listPriority = newListPriorityInput.value;
        const newListId = Date.now().toString();
        const isShopping = shoppingListCheckbox.checked;
        const isRoutine = linkAsRoutineCheckbox.checked;
        
        createList(listName, [], listPriority, newListId, taskIcons.lista, isShopping, false, isRoutine);
        saveLists(); // Save the new list to localStorage
        
        if (linkToPlannerCheckbox.checked) {
            const eventDateStr = listEventDateInput.value;
            const eventTime = listEventTimeInput.value;
            const recurrenceType = isRoutine ? listRecurrenceTypeInput.value : 'none';

            if (!eventDateStr || !eventTime) {
                alert('Por favor, preencha a data e o horário para agendar a lista.');
                return;
            }

            const createTask = (dateKey, recurrenceId = null) => {
                 if (!calendarTasks[dateKey]) calendarTasks[dateKey] = [];
                 calendarTasks[dateKey].push({
                    id: Date.now().toString() + Math.random(),
                    time: eventTime,
                    description: listName, 
                    icon: taskIcons.lista,
                    priority: listPriority === 'alta' ? 'alta' : 'nenhuma',
                    recurrenceId: recurrenceId,
                    linkedListId: newListId
                });
            };

            if (recurrenceType === 'none') {
                createTask(eventDateStr);
            } else {
                const endDateStr = listRecurrenceEndDateInput.value;
                if (!endDateStr) return alert('Por favor, selecione uma data final para a recorrência.');

                const startDate = new Date(`${eventDateStr}T12:00:00`);
                const endDate = new Date(`${endDateStr}T12:00:00`);
                if (startDate > endDate) return alert('A data final não pode ser anterior à data de início.');

                const selectedWeekdays = recurrenceType === 'weekly' 
                    ? Array.from(listWeeklyRecurrenceOptions.querySelectorAll('input:checked')).map(cb => parseInt(cb.value))
                    : [];

                if (recurrenceType === 'weekly' && selectedWeekdays.length === 0) {
                    return alert('Por favor, selecione pelo menos um dia da semana para a recorrência semanal.');
                }
                
                const recurrenceId = Date.now().toString();
                let currentDate = new Date(startDate);

                while(currentDate <= endDate) {
                    const dateKey = currentDate.toISOString().split('T')[0];
                    let shouldAddTask = false;

                    if (recurrenceType === 'daily') {
                        shouldAddTask = true;
                    } else if (recurrenceType === 'weekly' && selectedWeekdays.includes(currentDate.getDay())) {
                        shouldAddTask = true;
                    }
                    
                    if (shouldAddTask) {
                        createTask(dateKey, recurrenceId);
                    }
                    currentDate.setDate(currentDate.getDate() + 1);
                }
            }
            saveCalendarTasks();
            renderCalendar(currentCalendarDate);
        }
        
        newListForm.reset();
        plannerLinkOptions.style.display = 'none';
        routineOptions.style.display = 'none';
        linkToPlannerCheckbox.checked = false;
        linkAsRoutineCheckbox.checked = false;
        listEventDateInput.required = false;
        listEventTimeInput.required = false;
    });

    listEditorForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const listId = editorListIdInput.value;
        const newName = editorListNameInput.value.trim();
        let newListIcon = sanitizeIconPath(editorListIconInput.value);
        const newPriority = editorListPriorityInput.value;

        // Obtém a cor baseada na prioridade
        const isDarkMode = document.body.classList.contains('dark-mode');
        const newColorName = getColorNameFromPriority(newPriority);
        const newColor = getPriorityColor(newPriority, isDarkMode);

        if (!newName) {
            alert("O nome da lista não pode ficar em branco.");
            return;
        }

        let allLists = JSON.parse(localStorage.getItem('todoLists')) || [];
        const listIndex = allLists.findIndex(list => list.id === listId);
        if (listIndex > -1) {
            const existingList = allLists[listIndex];
            const priorityChanged = existingList.priority !== newPriority;
            const colorValue = priorityChanged ? newColor : (existingList.color || newColor);
            const colorNameValue = priorityChanged
                ? newColorName
                : (existingList.colorName || getColorNameFromValue(existingList.color) || getColorNameFromPriority(newPriority));

            if (!newListIcon) {
                newListIcon = sanitizeIconPath(existingList.icon);
            }

            existingList.name = newName;
            existingList.icon = newListIcon;
            existingList.priority = newPriority;
            existingList.color = colorValue;
            existingList.colorName = colorNameValue;
        }
        localStorage.setItem('todoLists', JSON.stringify(allLists));

        const isScheduling = editorSchedulingSection.style.display === 'block';

        if (isScheduling) {
            const linkedTaskInfo = findLinkedTask(listId);
            if (linkedTaskInfo && linkedTaskInfo.task.recurrenceId) {
                const recurrenceId = linkedTaskInfo.task.recurrenceId;
                for (const dateKey in calendarTasks) {
                    calendarTasks[dateKey] = calendarTasks[dateKey].filter(task => task.recurrenceId !== recurrenceId);
                    if (calendarTasks[dateKey].length === 0) delete calendarTasks[dateKey];
                }
            } else if (linkedTaskInfo) {
                calendarTasks[linkedTaskInfo.dateKey].splice(linkedTaskInfo.taskIndex, 1);
                if (calendarTasks[linkedTaskInfo.dateKey].length === 0) delete calendarTasks[linkedTaskInfo.dateKey];
            }

            const eventDateStr = editorEventDateInput.value;
            const eventTime = editorEventTimeInput.value;
            const isRoutine = editorLinkAsRoutineCheckbox.checked;
            const recurrenceType = isRoutine ? editorRecurrenceTypeInput.value : 'none';

            if (!eventDateStr || !eventTime) {
                alert("Por favor, preencha a data e o horário do agendamento.");
                return;
            }

            const createTask = (dateKey, recurrenceId = null) => {
                 if (!calendarTasks[dateKey]) calendarTasks[dateKey] = [];
                 calendarTasks[dateKey].push({
                    id: Date.now().toString() + Math.random(),
                    time: eventTime,
                    description: newName, 
                    icon: newListIcon,
                    priority: allLists[listIndex].priority === 'alta' ? 'alta' : 'nenhuma',
                    recurrenceId: recurrenceId,
                    linkedListId: listId
                });
            };

            if (recurrenceType === 'none') {
                createTask(eventDateStr);
            } else {
                const endDateStr = editorRecurrenceEndDateInput.value;
                if (!endDateStr) return alert('Por favor, selecione uma data final para a recorrência.');
                
                const startDate = new Date(`${eventDateStr}T12:00:00`);
                const endDate = new Date(`${endDateStr}T12:00:00`);
                if (startDate > endDate) return alert('A data final não pode ser anterior à data de início.');

                const selectedWeekdays = recurrenceType === 'weekly' 
                    ? Array.from(editorWeeklyRecurrenceOptions.querySelectorAll('input:checked')).map(cb => parseInt(cb.value))
                    : [];

                if (recurrenceType === 'weekly' && selectedWeekdays.length === 0) {
                    return alert('Por favor, selecione pelo menos um dia da semana para a recorrência.');
                }
                
                const recurrenceId = Date.now().toString();
                let currentDate = new Date(startDate);

                while(currentDate <= endDate) {
                    const dateKey = currentDate.toISOString().split('T')[0];
                    if (
                        recurrenceType === 'daily' || 
                        (recurrenceType === 'weekly' && selectedWeekdays.includes(currentDate.getDay()))
                    ) {
                        createTask(dateKey, recurrenceId);
                    }
                    currentDate.setDate(currentDate.getDate() + 1);
                }
            }
        }

        saveCalendarTasks();
        // Re-renderiza as listas independentemente da aba ativa para refletir edições imediatamente
        loadAndRenderLists();
        renderCalendar(currentCalendarDate);
        closeListEditorSection();
    });

    addScheduleBtn.addEventListener('click', () => {
        addScheduleBtn.style.display = 'none';
        editorSchedulingSection.style.display = 'block';
        editorRoutineContainer.style.display = 'flex';
    });

    removeScheduleBtn.addEventListener('click', () => {
        const listId = editorListIdInput.value;
        const linkedTaskInfo = findLinkedTask(listId);
        if(linkedTaskInfo && confirm("Tem certeza que deseja remover o agendamento desta lista do planner? Se for uma rotina, todas as ocorrências serão removidas.")) {
            if (linkedTaskInfo.task.recurrenceId) {
                const recurrenceId = linkedTaskInfo.task.recurrenceId;
                for (const dateKey in calendarTasks) {
                    calendarTasks[dateKey] = calendarTasks[dateKey].filter(task => task.recurrenceId !== recurrenceId);
                    if (calendarTasks[dateKey].length === 0) delete calendarTasks[dateKey];
                }
            } else {
                const { dateKey, taskIndex } = linkedTaskInfo;
                calendarTasks[dateKey].splice(taskIndex, 1);
                if (calendarTasks[dateKey].length === 0) delete calendarTasks[dateKey];
            }

            saveCalendarTasks();
            editorSchedulingSection.style.display = 'none';
            addScheduleBtn.style.display = 'block';
            renderCalendar(currentCalendarDate);
        }
    });

    // Event listener para mudança de prioridade no editor de lista (muda a cor do ícone)
    if (editorListPriorityInput) {
        editorListPriorityInput.addEventListener('change', (e) => {
            const selectedPriority = e.target.value;
            const selectedColor = getColorNameFromPriority(selectedPriority);
            
            // Atualiza a cor de todos os ícones no picker
            editorListIconPicker.querySelectorAll('.task-icon-option img').forEach(img => {
                img.className = 'icon-color-' + selectedColor;
                img.dataset.color = selectedColor;
            });
            
            // Atualiza o ícone selecionado
            const currentIconPath = editorListIconInput.value;
            const currentIconName = Object.keys(taskIcons).find(key => {
                return currentIconPath.includes(taskIcons[key].split('/').pop().replace('.svg', ''));
            });
            
            if (currentIconName) {
                const newIconPath = getColoredIcons(currentIconName, selectedColor);
                editorListIconInput.value = newIconPath;
            }
        });
    }

    linkToPlannerCheckbox.addEventListener('change', () => {
        const isChecked = linkToPlannerCheckbox.checked;
        plannerLinkOptions.style.display = isChecked ? 'flex' : 'none';
        routineContainer.style.display = isChecked ? 'flex' : 'none';
        listEventDateInput.required = isChecked;
        listEventTimeInput.required = isChecked;
        if (!isChecked) {
            routineOptions.style.display = 'none';
            linkAsRoutineCheckbox.checked = false;
        }
    });

    linkAsRoutineCheckbox.addEventListener('change', () => {
        routineOptions.style.display = linkAsRoutineCheckbox.checked ? 'flex' : 'none';
        if(linkAsRoutineCheckbox.checked) {
            plannerLinkOptions.style.display = 'flex'; // Garante que as opções de data/hora apareçam
            linkToPlannerCheckbox.checked = true;
        }
        listRecurrenceTypeInput.value = linkAsRoutineCheckbox.checked ? 'daily' : 'none';
        listRecurrenceTypeInput.dispatchEvent(new Event('change'));
    });
    
    tasksList.addEventListener('click', (e) => {
        const taskItem = e.target.closest('.task-list-item');
        if (taskItem && taskItem.dataset.listId) {
            if (e.target.closest('button')) return;
            openListDetailsSection(taskItem.dataset.listId);
        }
    });

    // LISTENERS PARA NAVEGAÇÃO
    openAddTaskFormBtn.addEventListener('click', () => {
        cancelTaskEdit(); 
        dayViewSection.style.setProperty('display', 'none', 'important');
        taskFormView.style.setProperty('display', 'block', 'important');
    });

    // Event listener para o seletor de cores das tarefas
    if (taskColorPicker) {
        taskColorPicker.addEventListener('click', (e) => {
            const colorOption = e.target.closest('.color-option');
            if (colorOption) {
                // Remove seleção anterior
                taskColorPicker.querySelectorAll('.color-option').forEach(option => {
                    option.classList.remove('selected');
                });
                
                // Seleciona nova cor
                colorOption.classList.add('selected');
                const selectedColor = colorOption.dataset.color;
                taskIconColorInput.value = selectedColor;
                
                // Atualiza TODOS os ícones com a nova cor
                taskIconPicker.querySelectorAll('.task-icon-option').forEach(iconOption => {
                    const iconName = iconOption.dataset.iconName;
                    const coloredPath = getColoredIcons(iconName, selectedColor);
                    
                    // Remove a imagem e recria com a nova cor
                    const img = iconOption.querySelector('img');
                    img.remove();
                    
                    const newImg = document.createElement('img');
                    newImg.src = coloredPath + '?t=' + Date.now() + '&r=' + Math.random();
                    newImg.className = `icon-color-${selectedColor}`;
                    newImg.dataset.color = selectedColor;
                    newImg.style.width = '100%';
                    newImg.style.height = '100%';
                    newImg.style.objectFit = 'contain';
                    newImg.style.borderRadius = '5px';
                    
                    iconOption.appendChild(newImg);
                    iconOption.dataset.iconPath = coloredPath;
                });
                
                // Atualiza o valor do ícone selecionado
                const selectedIcon = taskIconPicker.querySelector('.task-icon-option.selected');
                if (selectedIcon) {
                    const iconName = selectedIcon.dataset.iconName;
                    const coloredPath = getColoredIcons(iconName, selectedColor);
                    taskIconHiddenInput.value = coloredPath;
                }
            }
        });
    }

    closeDayViewBtn.addEventListener('click', () => {
        plannerDetailsContainer.style.setProperty('display', 'none', 'important');
        // Oculta o botão de adicionar tarefa quando fecha a view de dia
        openAddTaskFormBtn.style.setProperty('display', 'none', 'important');
    });
    
    backToDayViewBtn.addEventListener('click', () => {
        taskFormView.style.setProperty('display', 'none', 'important');
        dayViewSection.style.setProperty('display', 'block', 'important');
        
        // Garante que o botão de adicionar tarefa seja visível
        openAddTaskFormBtn.style.setProperty('display', 'inline-flex', 'important');
        openAddTaskFormBtn.style.setProperty('visibility', 'visible', 'important');
        openAddTaskFormBtn.style.setProperty('opacity', '1', 'important');
    });

    viewDetailsBtn.addEventListener('click', () => {
        renderExpenses(); 
        transactionListView.style.setProperty('display', 'block', 'important');
        addTransactionContainer.style.setProperty('display', 'none', 'important');
        budgetsView.style.display = 'none';
        investmentsView.style.display = 'none';
        categorySection.style.display = 'none';
        transactionsView.style.display = 'block';
        
        // Garante que o botão de adicionar transação seja visível
        showAddTransactionBtn.style.setProperty('display', 'inline-flex', 'important');
        showAddTransactionBtn.style.setProperty('visibility', 'visible', 'important');
        showAddTransactionBtn.style.setProperty('opacity', '1', 'important');
        
        // Scroll para garantir que o botão seja visível
        setTimeout(() => {
            const rect = transactionListView.getBoundingClientRect();
            const scrollTop = window.pageYOffset + rect.bottom - window.innerHeight + 100;
            window.scrollTo({ top: scrollTop, behavior: 'smooth' });
        }, 200);
    });

    closeTransactionsViewBtn.addEventListener('click', () => {
        transactionsView.style.display = 'none';
    });

    // Back to transactions list - goes from add/edit form to transactions list
    backToTransactionsListBtn.addEventListener('click', () => {
        addTransactionContainer.style.setProperty('display', 'none', 'important');
        transactionListView.style.setProperty('display', 'block', 'important');
        
        // Garante que o botão de adicionar transação seja visível
        showAddTransactionBtn.style.setProperty('display', 'inline-flex', 'important');
        showAddTransactionBtn.style.setProperty('visibility', 'visible', 'important');
        showAddTransactionBtn.style.setProperty('opacity', '1', 'important');
        
        cancelEdit(); // Resets form if in edit mode
    });

    // Show add transaction form
    showAddTransactionBtn.addEventListener('click', () => {
        transactionListView.style.setProperty('display', 'none', 'important');
        addTransactionContainer.style.setProperty('display', 'block', 'important');
    });

    viewCategorySpendingBtn.addEventListener('click', () => {
        updateCategorySpending();
        transactionsView.style.display = 'none';
        investmentsView.style.display = 'none';
        budgetsView.style.display = 'block';
        budgetsView.scrollIntoView({ behavior: 'smooth', block: 'start' });
        categorySection.style.display = 'none'; // Close category section when switching to budgets
    });

    closeBudgetsViewBtn.addEventListener('click', () => {
        budgetsView.style.display = 'none';
    });
    
    viewInvestmentsBtn.addEventListener('click', () => {
        renderInvestmentGoals();
        renderGoalIconPicker(); // Renderiza o seletor de ícones
        transactionsView.style.display = 'none';
        budgetsView.style.display = 'none';
        investmentsView.style.display = 'block';
        investmentsView.scrollIntoView({ behavior: 'smooth', block: 'start' });
        categorySection.style.display = 'none'; // Close category section when switching to investments
    });

    closeInvestmentsViewBtn.addEventListener('click', () => {
        investmentsView.style.display = 'none';
    });

    // Event listeners para os botões da seção de categorias
    const closeCategorySectionBtn = document.getElementById('close-category-section');
    const backFromCategoriesBtn = document.getElementById('back-from-categories');
    
    // Botão de fechar (X) - fecha apenas a seção de orçamentos
    closeCategorySectionBtn.addEventListener('click', () => {
        categorySection.style.display = 'none';
        budgetsView.style.display = 'none';
    });
    
    // Botão de voltar - volta para a tela de orçamentos
    backFromCategoriesBtn.addEventListener('click', () => {
        categorySection.style.display = 'none';
        budgetsView.style.display = 'block';
    });

    // Event listeners para navegação entre lista e formulário de investimentos
    if (openAddInvestmentFormBtn) {
        openAddInvestmentFormBtn.addEventListener('click', () => {
            if (!goalsContainer || !investmentFormView) {
                console.error('Elementos necessários não encontrados para abrir formulário');
                return;
            }
            goalsContainer.style.display = 'none';
            openAddInvestmentFormBtn.style.display = 'none';
            investmentFormView.style.display = 'block';
            renderGoalIconPicker(); // Renderiza o seletor de ícones
        });
    } else {
        console.error('openAddInvestmentFormBtn não encontrado');
    }

    if (backToInvestmentsListBtn) {
        backToInvestmentsListBtn.addEventListener('click', () => {
            if (!investmentFormView || !goalsContainer || !openAddInvestmentFormBtn) {
                console.error('Elementos necessários não encontrados para voltar à lista');
                return;
            }
            investmentFormView.style.display = 'none';
            goalsContainer.style.display = 'block';
            openAddInvestmentFormBtn.style.display = 'block';
            newGoalForm.reset(); // Limpa o formulário
            newGoalDeadlineInput.style.display = 'none';
            
            // Reseta os ícones para azul
            resetGoalIconsToBlue();
        });
    } else {
        console.error('backToInvestmentsListBtn não encontrado');
    }


    typeInput.addEventListener('change', (e) => {
        renderCategorySelect(e.target.value === 'receita');
    });



    // === NAVIGATION EVENT LISTENERS ===
    // Bottom navigation handles main section switching
    // Removed top navigation buttons (planner, finanças, listas)
    manageCategoriesBtnBudgets.addEventListener('click', () => {
        previousSection = 'budgets-view';
        openCategorySection();
    });
    addCategoryButton.addEventListener('click', addCategory);
    
    // Event listeners para edição de categoria
    saveCategoryButton.addEventListener('click', () => {
        saveCategoryEdit();
        cancelCategoryEdit();
    });
    
    cancelEditButton.addEventListener('click', cancelCategoryEdit);

    // Event listener desabilitado - cores automáticas baseadas no nome da categoria
    // As cores agora são definidas automaticamente pela função getCategoryColor()

    // Event listener para o seletor de cores dos investimentos
    if (goalColorPicker) {
        goalColorPicker.addEventListener('click', (e) => {
            const colorOption = e.target.closest('.color-option');
            if (colorOption) {
                // Remove seleção anterior
                goalColorPicker.querySelectorAll('.color-option').forEach(option => {
                    option.classList.remove('selected');
                });
                
                // Seleciona nova cor
                colorOption.classList.add('selected');
                const selectedColor = colorOption.dataset.color;
                goalColor.value = selectedColor;
                
                // Atualiza TODOS os ícones com a nova cor
                goalIconPicker.querySelectorAll('.task-icon-option').forEach(iconOption => {
                    const iconName = iconOption.dataset.iconName;
                    const coloredPath = getColoredIcons(iconName, selectedColor);
                    
                    // Remove a imagem e recria com a nova cor
                    const img = iconOption.querySelector('img');
                    img.remove();
                    
                    const newImg = document.createElement('img');
                    newImg.src = coloredPath + '?t=' + Date.now() + '&r=' + Math.random();
                    newImg.className = `icon-color-${selectedColor}`;
                    newImg.dataset.color = selectedColor;
                    newImg.style.width = '100%';
                    newImg.style.height = '100%';
                    newImg.style.objectFit = 'contain';
                    newImg.style.borderRadius = '5px';
                    
                    iconOption.appendChild(newImg);
                    iconOption.dataset.iconPath = coloredPath;
                });
                
                // Atualiza o valor do ícone selecionado
                const selectedIcon = goalIconPicker.querySelector('.task-icon-option.selected');
                if (selectedIcon) {
                    const iconName = selectedIcon.dataset.iconName;
                    const coloredPath = getColoredIcons(iconName, selectedColor);
                    goalIconHiddenInput.value = coloredPath;
                }
            }
        });
    }

    // Event listener para o seletor de cores das listas
    if (listColorPicker) {
        listColorPicker.addEventListener('click', (e) => {
            const colorOption = e.target.closest('.color-option');
            if (colorOption) {
                // Remove seleção anterior
                listColorPicker.querySelectorAll('.color-option').forEach(option => {
                    option.classList.remove('selected');
                });
                
                // Seleciona nova cor
                colorOption.classList.add('selected');
                const selectedColor = colorOption.dataset.color;
                listColor.value = selectedColor;
                
                // Atualiza TODOS os ícones com a nova cor
                listIconPickerGrid.querySelectorAll('.task-icon-option').forEach(iconOption => {
                    const iconName = iconOption.dataset.iconName;
                    const coloredPath = getColoredIcons(iconName, selectedColor);
                    
                    // Remove a imagem e recria com a nova cor
                    const img = iconOption.querySelector('img');
                    img.remove();
                    
                    const newImg = document.createElement('img');
                    newImg.src = coloredPath + '?t=' + Date.now() + '&r=' + Math.random();
                    newImg.className = `icon-color-${selectedColor}`;
                    newImg.dataset.color = selectedColor;
                    newImg.style.width = '100%';
                    newImg.style.height = '100%';
                    newImg.style.objectFit = 'contain';
                    newImg.style.borderRadius = '5px';
                    
                    iconOption.appendChild(newImg);
                    iconOption.dataset.iconPath = coloredPath;
                });
            }
        });
    }
    calendarMonthSelect.addEventListener('change', (e) => {
        currentCalendarDate.setMonth(parseInt(e.target.value));
        currentCalendarDate.setDate(1); 
        updateMonthlyView();
     });
     
    
    recurrenceTypeInput.addEventListener('change', () => {
        const isRecurrent = recurrenceTypeInput.value !== 'none';
        recurrenceEndDateInput.style.display = isRecurrent ? 'block' : 'none';
        recurrenceEndDateInput.required = isRecurrent;
        weeklyRecurrenceOptions.style.display = recurrenceTypeInput.value === 'weekly' ? 'block' : 'none';
    });



    
    listRecurrenceTypeInput.addEventListener('change', () => {
        const isRecurrent = listRecurrenceTypeInput.value !== 'none';
        listRecurrenceEndDateInput.style.display = isRecurrent ? 'block' : 'none';
        listRecurrenceEndDateInput.required = isRecurrent;
        listWeeklyRecurrenceOptions.style.display = listRecurrenceTypeInput.value === 'weekly' ? 'block' : 'none';
    });

    editorLinkAsRoutineCheckbox.addEventListener('change', () => {
        editorRoutineOptions.style.display = editorLinkAsRoutineCheckbox.checked ? 'flex' : 'none';
        editorRecurrenceTypeInput.value = editorLinkAsRoutineCheckbox.checked ? 'daily' : 'none';
        editorRecurrenceTypeInput.dispatchEvent(new Event('change'));
    });

    editorRecurrenceTypeInput.addEventListener('change', () => {
        const isRecurrent = editorRecurrenceTypeInput.value !== 'none';
        editorRecurrenceEndDateInput.style.display = isRecurrent ? 'block' : 'none';
        editorRecurrenceEndDateInput.required = isRecurrent;
        editorWeeklyRecurrenceOptions.style.display = editorRecurrenceTypeInput.value === 'weekly' ? 'block' : 'none';
    });


    // Removed window.onclick modal handlers since we're using sections now
    
    function showMensalSection(sectionId) {
        // Update previous section tracking
        const currentActiveSection = document.querySelector('.mensal-content-section[style*="block"]');
        if (currentActiveSection && currentActiveSection.id !== sectionId) {
            previousSection = currentActiveSection.id;
        }
        
        // Esconde TODAS as seções mensais com !important para garantir
        document.querySelectorAll('.mensal-content-section').forEach(section => {
            section.style.display = 'none';
            section.style.setProperty('display', 'none', 'important');
        });
        
        // Mostra apenas a seção selecionada
        const targetSection = document.getElementById(sectionId);
        if (targetSection) {
            targetSection.style.display = 'block';
            targetSection.style.setProperty('display', 'block', 'important');
        }
        
        document.querySelectorAll('#mensal-controls .mensal-sub-toggle').forEach(btn => btn.classList.remove('active-sub'));
        // Update bottom navigation instead of top navigation
        const bottomNavItems = document.querySelectorAll('.bottom-nav-item');
        bottomNavItems.forEach(item => {
            item.classList.remove('active');
            if (item.dataset.section === sectionId) {
                item.classList.add('active');
            }
        });
        
        // Esconde todas as sub-views ao trocar de aba principal
        // Não esconde os containers principais para manter os botões visíveis
        // plannerDetailsContainer.style.display = 'none';
        // document.getElementById('finance-details-container').style.display = 'none';

        // Esconde as listas e o formulário quando não estiver na aba de listas
        if (sectionId !== 'listas-section') {
            listsContainer.style.display = 'none';
            newListForm.style.display = 'none';
        }

        if (sectionId === 'planner-section') {
            // Garante que o container do planner esteja visível
            plannerDetailsContainer.style.setProperty('display', 'block', 'important');
            // Hide all detail views within the container
            dayViewSection.style.setProperty('display', 'none', 'important');
            taskFormView.style.setProperty('display', 'none', 'important');
            
            // Oculta o botão de adicionar tarefa quando não estiver na view de dia
            openAddTaskFormBtn.style.setProperty('display', 'none', 'important');
        }

        if (sectionId === 'financeiro-section') {
            // Garante que o container de finanças esteja visível
            document.getElementById('finance-details-container').style.display = 'block';
            // Hide all detail views within the container
            transactionsView.style.display = 'none';
            budgetsView.style.display = 'none';
            investmentsView.style.display = 'none';
            categorySection.style.display = 'none';
            updateFinanceDisplay();
        }
        if (sectionId === 'listas-section') {
            listsContainer.style.display = 'flex'; // Mostra o container das listas
            newListForm.style.display = 'flex'; // Mostra o formulário de adicionar lista
            loadAndRenderLists();
        }
        if (sectionId === 'planner-section') {
            renderCalendar(currentCalendarDate);
        }
    }

    function updateMonthlyView() {
        const year = currentCalendarDate.getFullYear();
        const monthIndex = currentCalendarDate.getMonth();
        currentMonth = `${monthNamesPt[monthIndex]}-${year}`;
        
        calendarMonthSelect.value = monthIndex;
        
        
        const activeSectionId = document.querySelector('.bottom-nav-item.active')?.dataset.section || 'planner-section';
        showMensalSection(activeSectionId);
    }
    

    function initApp() {
        loadFinancialData();
        loadCalendarTasks();
        loadInvestmentGoals();
        applyTheme(localStorage.getItem('theme') || 'light');
        currentCalendarDate = new Date();
        initCalendarSelect();
        
        
        renderIconPicker(taskIconPicker, taskIconHiddenInput, taskIcons, null, taskColorPicker);
        renderIconPicker(editorListIconPicker, editorListIconInput, taskIcons, null, document.getElementById('editor-list-color-picker'));
        renderGoalIconPicker();
        renderIconPicker(listIconPickerGrid, null, taskIcons, selectListIcon, listColorPicker);
        renderIconPicker(categoryIconPicker, categoryIconHiddenInput, taskIcons, null, null);
        
        // Inicializa os seletores de cor
        if (goalColorPicker) {
            goalColorPicker.querySelectorAll('.color-option').forEach(option => {
                option.classList.remove('selected');
            });
            const blueOption = goalColorPicker.querySelector('[data-color="blue"]');
            if (blueOption) blueOption.classList.add('selected');
            if (goalColor) goalColor.value = 'blue';
        }
        
        if (listColorPicker) {
            listColorPicker.querySelectorAll('.color-option').forEach(option => {
                option.classList.remove('selected');
            });
            const blueOption = listColorPicker.querySelector('[data-color="blue"]');
            if (blueOption) blueOption.classList.add('selected');
            if (listColor) listColor.value = 'blue';
        }
        
        // Inicializa o seletor de cor do editor de listas
        const editorListColorPicker = document.getElementById('editor-list-color-picker');
        if (editorListColorPicker) {
            editorListColorPicker.querySelectorAll('.color-option').forEach(option => {
                option.classList.remove('selected');
            });
            const blueOption = editorListColorPicker.querySelector('[data-color="blue"]');
            if (blueOption) blueOption.classList.add('selected');
        }
        
        
        // Verifica se todos os elementos de investimento estão disponíveis
        if (openAddInvestmentFormBtn && investmentFormView && backToInvestmentsListBtn) {
            console.log('Elementos de investimento carregados corretamente');
        } else {
            console.error('Alguns elementos de investimento não foram encontrados:', {
                openAddInvestmentFormBtn: !!openAddInvestmentFormBtn,
                investmentFormView: !!investmentFormView,
                backToInvestmentsListBtn: !!backToInvestmentsListBtn
            });
        }
        
        renderCategorySelect(false);
        renderCategoryLimitSelect();
        updateMonthlyView();
    }

    initApp();
    
    // Bottom Navigation Control
    document.addEventListener('DOMContentLoaded', function() {
      const bottomNavItems = document.querySelectorAll('.bottom-nav-item');
      
      bottomNavItems.forEach(item => {
        item.addEventListener('click', function(e) {
          e.preventDefault();
          const sectionId = this.dataset.section;
          
          // Update active state
          bottomNavItems.forEach(nav => nav.classList.remove('active'));
          this.classList.add('active');
          
          // Show the section
          showMensalSection(sectionId);
        });
      });
      
      // Update bottom nav active state when switching sections
      const originalShowMensalSection = window.showMensalSection;
      window.showMensalSection = function(sectionId) {
        originalShowMensalSection(sectionId);
        
        // Update bottom nav
        bottomNavItems.forEach(item => {
          item.classList.remove('active');
          if (item.dataset.section === sectionId) {
            item.classList.add('active');
          }
        });
      };
    });
  
