let store =
  [
    {
      testName: 'ОТ и ТБ',
      questions: [
        {
          id: 1,
          question: 'ОТ и ТБ Что входит в цели закона 6331 «Закон об охране здоровья и безопасности труда»?',
          answers: [
            { title: 'обеспечение охраны здоровья', flag: true },
            { title: 'обеспечение безопасности труда на рабочих местах' },
            { title: 'эффективная организация производства' },
            { title: 'регулирование функций и полномочий, обязательств, прав и обязанностей работодателя и работников' },
            { title: 'все пункты' }
          ]
        },
        {
          id: 2,
          question: 'Что входит в общие требования охраны труда к содержанию оборудования и трубопроводов?',
          answers: [
            { title: 'Движущиеся части производственного оборудования, к которым возможен доступ работающих, должны иметь механические защитные ограждения', flag: true },
            { title: 'Все пусковые устройства и арматура должны быть пронумерованы и иметь надписи в соответствии с технологической схемой' },
            { title: 'Лестницы и площадки для обслуживания оборудования должны иметь ограждения перилами' },
            { title: 'Все горячие участки поверхностей оборудования и трубопроводов, находящиеся в зоне возможного попадания на них горючих или вредных веществ, должны иметь изоляцию', flag: true },
            { title: 'все пункты' }
          ]
        },
        {
          id: 3,
          question: 'Какие виды инструктажей по охране труда на предприятии вам могут проводятся?',
          answers: [
            { title: 'Вводный инструктаж' },
            { title: 'Устный инструктаж' },
            { title: 'Первичный инструктаж' },
            { title: 'Повторный инструктаж' },
            { title: 'все перечисленные', flag: true }
          ]
        },
        {
          id: 4,
          question: 'Кому проводится вводный инструктаж?',
          answers: [
            { title: 'всеми вновь принимаемыми на работу лицами', flag: true },
            { title: 'командированными работниками' },
            { title: 'обучающимися в образовательных учреждениях' },
            { title: 'оба варианта', flag: true }
          ]
        },
        {
          id: 5,
          question: 'Кто проводит вводный инструктаж?',
          answers: [
            { title: 'специалист по охране здоровья и безопасности', flag: true },
            { title: 'начальник подразделения' },
            { title: 'может любой из п1 и 2' }
          ]
        },
        {
          id: 6,
          question: 'Какой порядок проведения вводного инструктажа?',
          answers: [
            { title: 'Для проведения вводного инструктажа руководитель подразделения, в которое прибывает работник (командируемый, практикант, аудитор и т.д.) доводит информацию до начальника отдела охраны труда и защиты персонала по средствам электронной почты Outlook за сутки и обеспечивает явку инструктируемого', flag: true },
            { title: 'Для проведения вводного инструктажа руководитель подразделения, в которое прибывает работник (командируемый, практикант, аудитор и т.д.) включает презентацию, а после просмотра работник расписывается в журнале' },
            { title: 'Оба варианта верны' }
          ]
        },
        {
          id: 7,
          question: 'Какой порядок оформления вводного инструктажа?',
          answers: [
            { title: 'Вводный инструктаж, который проходит каждый участник, регистрируется в бланке специального формата (см. Приложение 4). На бланке ставят подписи инструктирующий и инструктируемый. Заполненные бланки хранятся в отделе охраны труда и защиты персонала.', flag: true },
            { title: 'Вводный инструктаж, который проходит каждый участник, регистрируется журнале.', flag: true },
            { title: 'В журнале ставят подписи инструктирующий и инструктируемый. Журнал хранится в отделе.' }
          ]
        },
        {
          id: 8,
          question: 'Кому проводится Первичный инструктаж на рабочем месте проводится до начала производственной деятельности?',
          answers: [
            { title: 'всем вновь принятыми в организацию, переводимым из одного подразделения в другое;', flag: true },
            { title: 'работникам, выполняющим новую для них работу, командированным, временным работникам;' },
            { title: 'студентам и учащимся, прибывшими на производственное обучение или практику, перед выполнением новых видов работ.' }
          ]
        }
      ]
    },
    {
      testName: 'Ядерная безопасность',
      questions: [
        {
          id: 1,
          question: 'Ядерная безопасность Что входит в цели закона 6331 «Закон об охране здоровья и безопасности труда»?',
          answers: [
            { title: 'обеспечение охраны здоровья', flag: true },
            { title: 'обеспечение безопасности труда на рабочих местах' },
            { title: 'эффективная организация производства' },
            { title: 'регулирование функций и полномочий, обязательств, прав и обязанностей работодателя и работников' },
            { title: 'все пункты' }
          ]
        },
        {
          id: 2,
          question: 'Что входит в общие требования охраны труда к содержанию оборудования и трубопроводов?',
          answers: [
            { title: 'Движущиеся части производственного оборудования, к которым возможен доступ работающих, должны иметь механические защитные ограждения', flag: true },
            { title: 'Все пусковые устройства и арматура должны быть пронумерованы и иметь надписи в соответствии с технологической схемой' },
            { title: 'Лестницы и площадки для обслуживания оборудования должны иметь ограждения перилами' },
            { title: 'Все горячие участки поверхностей оборудования и трубопроводов, находящиеся в зоне возможного попадания на них горючих или вредных веществ, должны иметь изоляцию', flag: true },
            { title: 'все пункты' }
          ]
        },
        {
          id: 3,
          question: 'Какие виды инструктажей по охране труда на предприятии вам могут проводятся?',
          answers: [
            { title: 'Вводный инструктаж', flag: true },
            { title: 'Устный инструктаж' },
            { title: 'Первичный инструктаж' },
            { title: 'Повторный инструктаж' },
            { title: 'все перечисленные' }
          ]
        },
        {
          id: 4,
          question: 'Кому проводится вводный инструктаж?',
          answers: [
            { title: 'всеми вновь принимаемыми на работу лицами', flag: true },
            { title: 'командированными работниками' },
            { title: 'обучающимися в образовательных учреждениях' },
            { title: 'оба варианта' }
          ]
        },
        {
          id: 5,
          question: 'Кто проводит вводный инструктаж?',
          answers: [
            { title: 'специалист по охране здоровья и безопасности', flag: true },
            { title: 'начальник подразделения' },
            { title: 'может любой из п1 и 2' }
          ]
        },
        {
          id: 6,
          question: 'Какой порядок проведения вводного инструктажа?',
          answers: [
            { title: 'Для проведения вводного инструктажа руководитель подразделения, в которое прибывает работник (командируемый, практикант, аудитор и т.д.) доводит информацию до начальника отдела охраны труда и защиты персонала по средствам электронной почты Outlook за сутки и обеспечивает явку инструктируемого', flag: true },
            { title: 'Для проведения вводного инструктажа руководитель подразделения, в которое прибывает работник (командируемый, практикант, аудитор и т.д.) включает презентацию, а после просмотра работник расписывается в журнале' },
            { title: 'Оба варианта верны' }
          ]
        },
        {
          id: 7,
          question: 'Какой порядок оформления вводного инструктажа?',
          answers: [
            { title: 'Вводный инструктаж, который проходит каждый участник, регистрируется в бланке специального формата (см. Приложение 4). На бланке ставят подписи инструктирующий и инструктируемый. Заполненные бланки хранятся в отделе охраны труда и защиты персонала.', flag: true },
            { title: 'Вводный инструктаж, который проходит каждый участник, регистрируется журнале.' },
            { title: 'В журнале ставят подписи инструктирующий и инструктируемый. Журнал хранится в отделе.' }
          ]
        },
        {
          id: 8,
          question: 'Кому проводится Первичный инструктаж на рабочем месте проводится до начала производственной деятельности?',
          answers: [
            { title: 'всем вновь принятыми в организацию, переводимым из одного подразделения в другое;', flag: true },
            { title: 'работникам, выполняющим новую для них работу, командированным, временным работникам;' },
            { title: 'студентам и учащимся, прибывшими на производственное обучение или практику, перед выполнением новых видов работ.', flag: true }
          ]
        }
      ]
    },
    {
      testName: 'Пожарная безопасность',
      questions: [
        {
          id: 1,
          question: 'Пожарная безопасность Что входит в цели закона 6331 «Закон об охране здоровья и безопасности труда»?',
          answers: [
            { title: 'обеспечение охраны здоровья', flag: true },
            { title: 'обеспечение безопасности труда на рабочих местах' },
            { title: 'эффективная организация производства' },
            { title: 'регулирование функций и полномочий, обязательств, прав и обязанностей работодателя и работников' },
            { title: 'все пункты' }
          ]
        },
        {
          id: 2,
          question: 'Что входит в общие требования охраны труда к содержанию оборудования и трубопроводов?',
          answers: [
            { title: 'Движущиеся части производственного оборудования, к которым возможен доступ работающих, должны иметь механические защитные ограждения', flag: true },
            { title: 'Все пусковые устройства и арматура должны быть пронумерованы и иметь надписи в соответствии с технологической схемой' },
            { title: 'Лестницы и площадки для обслуживания оборудования должны иметь ограждения перилами' },
            { title: 'Все горячие участки поверхностей оборудования и трубопроводов, находящиеся в зоне возможного попадания на них горючих или вредных веществ, должны иметь изоляцию' },
            { title: 'все пункты' }
          ]
        },
        {
          id: 3,
          question: 'Какие виды инструктажей по охране труда на предприятии вам могут проводятся?',
          answers: [
            { title: 'Вводный инструктаж', flag: true },
            { title: 'Устный инструктаж' },
            { title: 'Первичный инструктаж' },
            { title: 'Повторный инструктаж' },
            { title: 'все перечисленные' }
          ]
        },
        {
          id: 4,
          question: 'Кому проводится вводный инструктаж?',
          answers: [
            { title: 'всеми вновь принимаемыми на работу лицами', flag: true },
            { title: 'командированными работниками' },
            { title: 'обучающимися в образовательных учреждениях' },
            { title: 'оба варианта' }
          ]
        },
        {
          id: 5,
          question: 'Кто проводит вводный инструктаж?',
          answers: [
            { title: 'специалист по охране здоровья и безопасности', flag: true },
            { title: 'начальник подразделения' },
            { title: 'может любой из п1 и 2' }
          ],
          
        },
        {
          id: 6,
          question: 'Какой порядок проведения вводного инструктажа?',
          answers: [
            { title: 'Для проведения вводного инструктажа руководитель подразделения, в которое прибывает работник (командируемый, практикант, аудитор и т.д.) доводит информацию до начальника отдела охраны труда и защиты персонала по средствам электронной почты Outlook за сутки и обеспечивает явку инструктируемого', flag: true },
            { title: 'Для проведения вводного инструктажа руководитель подразделения, в которое прибывает работник (командируемый, практикант, аудитор и т.д.) включает презентацию, а после просмотра работник расписывается в журнале' },
            { title: 'Оба варианта верны' }
          ]
        },
        {
          id: 7,
          question: 'Какой порядок оформления вводного инструктажа?',
          answers: [
            { title: 'Вводный инструктаж, который проходит каждый участник, регистрируется в бланке специального формата (см. Приложение 4). На бланке ставят подписи инструктирующий и инструктируемый. Заполненные бланки хранятся в отделе охраны труда и защиты персонала.', flag: true },
            { title: 'Вводный инструктаж, который проходит каждый участник, регистрируется журнале.' },
            { title: 'В журнале ставят подписи инструктирующий и инструктируемый. Журнал хранится в отделе.' }
          ]
        },
        {
          id: 8,
          question: 'Кому проводится Первичный инструктаж на рабочем месте проводится до начала производственной деятельности?',
          answers: [
            { title: 'всем вновь принятыми в организацию, переводимым из одного подразделения в другое;', flag: true },
            { title: 'работникам, выполняющим новую для них работу, командированным, временным работникам;' },
            { title: 'студентам и учащимся, прибывшими на производственное обучение или практику, перед выполнением новых видов работ.' }
          ]
        }
      ]
    },
    {
      testName: 'Промышленная безопасность',
      questions: [
        {
          id: 1,
          question: 'Промышленная безопасностьЧто входит в цели закона 6331 «Закон об охране здоровья и безопасности труда»?',
          answers: [
            { title: 'обеспечение охраны здоровья', flag: true },
            { title: 'обеспечение безопасности труда на рабочих местах' },
            { title: 'эффективная организация производства' },
            { title: 'регулирование функций и полномочий, обязательств, прав и обязанностей работодателя и работников' },
            { title: 'все пункты' }
          ]
        },
        {
          id: 2,
          question: 'Что входит в общие требования охраны труда к содержанию оборудования и трубопроводов?',
          answers: [
            { title: 'Движущиеся части производственного оборудования, к которым возможен доступ работающих, должны иметь механические защитные ограждения', flag: true },
            { title: 'Все пусковые устройства и арматура должны быть пронумерованы и иметь надписи в соответствии с технологической схемой' },
            { title: 'Лестницы и площадки для обслуживания оборудования должны иметь ограждения перилами' },
            { title: 'Все горячие участки поверхностей оборудования и трубопроводов, находящиеся в зоне возможного попадания на них горючих или вредных веществ, должны иметь изоляцию' },
            { title: 'все пункты' }
          ]
        },
        {
          id: 3,
          question: 'Какие виды инструктажей по охране труда на предприятии вам могут проводятся?',
          answers: [
            { title: 'Вводный инструктаж', flag: true },
            { title: 'Устный инструктаж' },
            { title: 'Первичный инструктаж' },
            { title: 'Повторный инструктаж' },
            { title: 'все перечисленные' }
          ]
        },
        {
          id: 4,
          question: 'Кому проводится вводный инструктаж?',
          answers: [
            { title: 'всеми вновь принимаемыми на работу лицами', flag: true },
            { title: 'командированными работниками' },
            { title: 'обучающимися в образовательных учреждениях' },
            { title: 'оба варианта' }
          ]
        },
        {
          id: 5,
          question: 'Кто проводит вводный инструктаж?',
          answers: [
            { title: 'специалист по охране здоровья и безопасности', flag: true },
            { title: 'начальник подразделения' },
            { title: 'может любой из п1 и 2' }
          ]
        },
        {
          id: 6,
          question: 'Какой порядок проведения вводного инструктажа?',
          answers: [
            { title: 'Для проведения вводного инструктажа руководитель подразделения, в которое прибывает работник (командируемый, практикант, аудитор и т.д.) доводит информацию до начальника отдела охраны труда и защиты персонала по средствам электронной почты Outlook за сутки и обеспечивает явку инструктируемого', flag: true },
            { title: 'Для проведения вводного инструктажа руководитель подразделения, в которое прибывает работник (командируемый, практикант, аудитор и т.д.) включает презентацию, а после просмотра работник расписывается в журнале' },
            { title: 'Оба варианта верны' }
          ]
        },
        {
          id: 7,
          question: 'Какой порядок оформления вводного инструктажа?',
          answers: [
            { title: 'Вводный инструктаж, который проходит каждый участник, регистрируется в бланке специального формата (см. Приложение 4). На бланке ставят подписи инструктирующий и инструктируемый. Заполненные бланки хранятся в отделе охраны труда и защиты персонала.', flag: true },
            { title: 'Вводный инструктаж, который проходит каждый участник, регистрируется журнале.' },
            { title: 'В журнале ставят подписи инструктирующий и инструктируемый. Журнал хранится в отделе.' }
          ]
        },
        {
          id: 8,
          question: 'Кому проводится Первичный инструктаж на рабочем месте проводится до начала производственной деятельности?',
          answers: [
            { title: 'всем вновь принятыми в организацию, переводимым из одного подразделения в другое;', flag: true },
            { title: 'работникам, выполняющим новую для них работу, командированным, временным работникам;' },
            { title: 'студентам и учащимся, прибывшими на производственное обучение или практику, перед выполнением новых видов работ.' }
          ]
        }
      ]
    }
  ]

export default store