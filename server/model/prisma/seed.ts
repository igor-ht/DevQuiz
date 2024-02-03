import { prisma } from '../client';

// programming languages
const JavascriptQuiz = {
	id: 1,
	name: 'Javascript',
	questions: [
		{
			question: 'What is JavaScript?',
			options: ['A programming language', 'A markup language', 'A scripting language', 'All of the above'],
			answer: 'All of the above',
		},
		{
			question: 'What is the output of the following code?\nconsole.log(2 + "2");',
			options: ['22', '4', 'NaN', 'Error'],
			answer: '22',
		},
		{
			question: 'Which of the following is not a JavaScript data type?',
			options: ['String', 'Number', 'Boolean', 'Array'],
			answer: 'Array',
		},
		{ question: 'What is the result of the following expression?\n"5" - 3', options: ['2', '8', 'NaN', 'Error'], answer: '2' },
		{
			question: 'What is the correct way to declare a variable in JavaScript?',
			options: ['var x = 5;', 'let x = 5;', 'const x = 5;', 'All of the above'],
			answer: 'All of the above',
		},
		{
			question: 'What is the output of the following code?\nconsole.log(typeof null);',
			options: ['null', 'undefined', 'object', 'Error'],
			answer: 'object',
		},
		{
			question: 'Which of the following is not a JavaScript loop statement?',
			options: ['for', 'while', 'do-while', 'foreach'],
			answer: 'foreach',
		},
		{ question: 'What is the result of the following expression?\n"5" + 3', options: ['8', '53', 'NaN', 'Error'], answer: '53' },
		{
			question: 'What is the output of the following code?\nconsole.log(2 == "2");',
			options: ['true', 'false', 'NaN', 'Error'],
			answer: 'true',
		},
		{
			question: 'Which of the following is not a JavaScript framework?',
			options: ['React', 'Angular', 'Vue', 'Java'],
			answer: 'Java',
		},
	].map((q, i) => ({ ...q, id: i + 1 })),
};
const TypescriptQuiz = {
	id: 2,
	name: 'TypeScript',
	questions: [
		{
			question: 'What is TypeScript?',
			options: ['A superset of JavaScript', 'A programming language', 'A markup language', 'A styling language'],
			answer: 'A superset of JavaScript',
		},
		{
			question: 'What is the purpose of TypeScript?',
			options: [
				'To add static typing to JavaScript',
				'To add dynamic typing to JavaScript',
				'To replace JavaScript',
				'To add styling to JavaScript',
			],
			answer: 'To add static typing to JavaScript',
		},
		{
			question: 'Which tool is used to compile TypeScript code to JavaScript?',
			options: ['tsc', 'babel', 'webpack', 'gulp'],
			answer: 'tsc',
		},
		{
			question: 'What is the file extension for TypeScript files?',
			options: ['.ts', '.js', '.html', '.css'],
			answer: '.ts',
		},
		{
			question: 'Which keyword is used to define a variable with a specific type in TypeScript?',
			options: ['let', 'var', 'const', 'type'],
			answer: 'type',
		},
		{
			question: 'Which keyword is used to define a function with a specific return type in TypeScript?',
			options: ['function', 'return', 'void', '=>'],
			answer: 'function',
		},
		{
			question: 'Which keyword is used to define a class in TypeScript?',
			options: ['class', 'interface', 'extends', 'implements'],
			answer: 'class',
		},
		{
			question: 'Which keyword is used to implement an interface in TypeScript?',
			options: ['implements', 'class', 'interface', 'extends'],
			answer: 'implements',
		},
		{
			question: 'Which keyword is used to extend a class in TypeScript?',
			options: ['extends', 'class', 'interface', 'implements'],
			answer: 'extends',
		},
		{
			question: 'Which keyword is used to define an interface in TypeScript?',
			options: ['interface', 'class', 'extends', 'implements'],
			answer: 'interface',
		},
	].map((q, i) => ({ ...q, id: i + 1 })),
};
const PythonQuiz = {
	id: 3,
	name: 'Python',
	questions: [
		{
			question: 'What is Python?',
			options: ['A programming language', 'A markup language', 'A scripting language', 'All of the above'],
			answer: 'A programming language',
		},
		{
			question: 'What is the output of the following code?\nprint(2 + "2")',
			options: ['22', '4', 'TypeError', 'Error'],
			answer: 'TypeError',
		},
		{
			question: 'Which of the following is not a Python data type?',
			options: ['String', 'Number', 'Boolean', 'Array'],
			answer: 'Array',
		},
		{
			question: 'What is the result of the following expression?\nint("5") - 3',
			options: ['2', '8', 'TypeError', 'Error'],
			answer: '2',
		},
		{
			question: 'What is the correct way to declare a variable in Python?',
			options: ['x = 5', 'let x = 5', 'const x = 5', 'All of the above'],
			answer: 'x = 5',
		},
		{
			question: 'What is the output of the following code?\nprint(type(None))',
			options: ['None', 'NoneType', 'object', 'Error'],
			answer: 'NoneType',
		},
		{
			question: 'Which of the following is not a Python loop statement?',
			options: ['for', 'while', 'do-while', 'foreach'],
			answer: 'foreach',
		},
		{
			question: 'What is the result of the following expression?\n"5" + str(3)',
			options: ['8', '53', 'TypeError', 'Error'],
			answer: '53',
		},
		{
			question: 'What is the output of the following code?\nprint(2 == "2")',
			options: ['True', 'False', 'TypeError', 'Error'],
			answer: 'False',
		},
		{
			question: 'Which of the following is not a Python framework?',
			options: ['Django', 'Flask', 'Pyramid', 'Java'],
			answer: 'Java',
		},
	].map((q, i) => ({ ...q, id: i + 1 })),
};

// frontend
const HtmlQuiz = {
	id: 1,
	name: 'HTML',
	questions: [
		{
			question: 'What does HTML stand for?',
			options: [
				'Hyper Text Markup Language',
				'Highly Technical Markup Language',
				'Home Tool Markup Language',
				'Hyperlink and Text Markup Language',
			],
			answer: 'Hyper Text Markup Language',
		},
		{
			question: 'Which tag is used to define a hyperlink in HTML?',
			options: ['<a>', '<h1>', '<p>', '<div>'],
			answer: '<a>',
		},
		{
			question: 'Which tag is used to define a heading in HTML?',
			options: ['<h1>', '<a>', '<p>', '<div>'],
			answer: '<h1>',
		},
		{
			question: 'Which tag is used to define a paragraph in HTML?',
			options: ['<p>', '<a>', '<h1>', '<div>'],
			answer: '<p>',
		},
		{
			question: 'Which tag is used to define a division or a section in HTML?',
			options: ['<div>', '<a>', '<h1>', '<p>'],
			answer: '<div>',
		},
		{
			question: 'Which attribute is used to specify the URL of an image in HTML?',
			options: ['src', 'href', 'alt', 'class'],
			answer: 'src',
		},
		{
			question: 'Which attribute is used to specify the alternative text for an image in HTML?',
			options: ['alt', 'src', 'href', 'class'],
			answer: 'alt',
		},
		{
			question: 'Which tag is used to define an unordered list in HTML?',
			options: ['<ul>', '<ol>', '<li>', '<dl>'],
			answer: '<ul>',
		},
		{
			question: 'Which tag is used to define an ordered list in HTML?',
			options: ['<ol>', '<ul>', '<li>', '<dl>'],
			answer: '<ol>',
		},
		{
			question: 'Which tag is used to define a list item in HTML?',
			options: ['<li>', '<ul>', '<ol>', '<dl>'],
			answer: '<li>',
		},
	].map((q, i) => ({ ...q, id: i + 1 })),
};
const CssQuiz = {
	id: 2,
	name: 'CSS',
	questions: [
		{
			question: 'What does CSS stand for?',
			options: ['Cascading Style Sheets', 'Creative Style Sheets', 'Computer Style Sheets', 'Colorful Style Sheets'],
			answer: 'Cascading Style Sheets',
		},
		{
			question: 'Which property is used to change the background color of an element in CSS?',
			options: ['background-color', 'color', 'font-size', 'border'],
			answer: 'background-color',
		},
		{
			question: 'Which property is used to change the font size of an element in CSS?',
			options: ['font-size', 'background-color', 'color', 'border'],
			answer: 'font-size',
		},
		{
			question: 'Which property is used to add space between the border and content of an element in CSS?',
			options: ['padding', 'margin', 'border', 'width'],
			answer: 'padding',
		},
		{
			question: 'Which property is used to change the color of text in CSS?',
			options: ['color', 'background-color', 'font-size', 'border'],
			answer: 'color',
		},
		{
			question: 'Which property is used to change the width of an element in CSS?',
			options: ['width', 'height', 'margin', 'padding'],
			answer: 'width',
		},
		{
			question: 'Which property is used to change the height of an element in CSS?',
			options: ['height', 'width', 'margin', 'padding'],
			answer: 'height',
		},
		{
			question: 'Which property is used to add space between elements in CSS?',
			options: ['margin', 'padding', 'border', 'width'],
			answer: 'margin',
		},
		{
			question: 'Which property is used to change the border of an element in CSS?',
			options: ['border', 'margin', 'padding', 'width'],
			answer: 'border',
		},
		{
			question: 'Which property is used to change the font family of an element in CSS?',
			options: ['font-family', 'background-color', 'color', 'border'],
			answer: 'font-family',
		},
	].map((q, i) => ({ ...q, id: i + 1 })),
};
const ReactQuiz = {
	id: 3,
	name: 'React',
	questions: [
		{
			question: 'What is React?',
			options: ['A JavaScript library', 'A programming language', 'A markup language', 'A scripting language'],
			answer: 'A JavaScript library',
		},
		{
			question: 'What is JSX?',
			options: ['A syntax extension for JavaScript', 'A templating engine', 'A styling language', 'A data query language'],
			answer: 'A syntax extension for JavaScript',
		},
		{
			question: 'What is the entry point of a React application?',
			options: ['index.js', 'app.js', 'main.js', 'entry.js'],
			answer: 'index.js',
		},
		{
			question: 'What is the purpose of state in React?',
			options: ['To store and manage data', 'To define the structure of a component', 'To handle user events', 'To render JSX'],
			answer: 'To store and manage data',
		},
		{
			question: 'What is the lifecycle method used to fetch data in React?',
			options: ['componentDidMount', 'componentWillMount', 'componentDidUpdate', 'componentWillUnmount'],
			answer: 'componentDidMount',
		},
		{
			question: 'What is the purpose of props in React?',
			options: ['To pass data between components', 'To define the structure of a component', 'To handle user events', 'To render JSX'],
			answer: 'To pass data between components',
		},
		{
			question: 'What is the purpose of the render method in React?',
			options: ['To render JSX', 'To handle user events', 'To define the structure of a component', 'To store and manage data'],
			answer: 'To render JSX',
		},
		{
			question: 'What is the purpose of keys in React?',
			options: [
				'To provide a unique identifier for elements in a list',
				'To define the structure of a component',
				'To handle user events',
				'To store and manage data',
			],
			answer: 'To provide a unique identifier for elements in a list',
		},
		{
			question: 'What is the purpose of the setState method in React?',
			options: ['To update the state of a component', 'To define the structure of a component', 'To handle user events', 'To render JSX'],
			answer: 'To update the state of a component',
		},
		{
			question: 'What is the purpose of the useEffect hook in React?',
			options: [
				'To perform side effects in functional components',
				'To define the structure of a component',
				'To handle user events',
				'To store and manage data',
			],
			answer: 'To perform side effects in functional components',
		},
	].map((q, i) => ({ ...q, id: i + 1 })),
};

// backend
const SqlQuiz = {
	id: 1,
	name: 'SQL',
	questions: [
		{
			question: 'What does SQL stand for?',
			options: ['Structured Query Language', 'Standard Query Language', 'Simple Query Language', 'Structured Query Logic'],
			answer: 'Structured Query Language',
		},
		{
			question: 'Which statement is used to retrieve data from a SQL database?',
			options: ['SELECT', 'INSERT', 'UPDATE', 'DELETE'],
			answer: 'SELECT',
		},
		{
			question: 'Which statement is used to insert data into a SQL database?',
			options: ['INSERT', 'SELECT', 'UPDATE', 'DELETE'],
			answer: 'INSERT',
		},
		{
			question: 'Which statement is used to update data in a SQL database?',
			options: ['UPDATE', 'INSERT', 'SELECT', 'DELETE'],
			answer: 'UPDATE',
		},
		{
			question: 'Which statement is used to delete data from a SQL database?',
			options: ['DELETE', 'INSERT', 'SELECT', 'UPDATE'],
			answer: 'DELETE',
		},
		{
			question: 'Which keyword is used to filter data in a SQL query?',
			options: ['WHERE', 'FROM', 'JOIN', 'GROUP BY'],
			answer: 'WHERE',
		},
		{
			question: 'Which keyword is used to sort data in a SQL query?',
			options: ['ORDER BY', 'WHERE', 'FROM', 'JOIN'],
			answer: 'ORDER BY',
		},
		{
			question: 'Which keyword is used to join tables in a SQL query?',
			options: ['JOIN', 'WHERE', 'FROM', 'GROUP BY'],
			answer: 'JOIN',
		},
		{
			question: 'Which keyword is used to group data in a SQL query?',
			options: ['GROUP BY', 'WHERE', 'FROM', 'JOIN'],
			answer: 'GROUP BY',
		},
		{
			question: 'Which keyword is used to count the number of rows in a SQL query?',
			options: ['COUNT', 'SUM', 'AVG', 'MAX'],
			answer: 'COUNT',
		},
	].map((q, i) => ({ ...q, id: i + 1 })),
};
const NoSqlQuiz = {
	id: 2,
	name: 'NoSQL',
	questions: [
		{
			question: 'What does NoSQL stand for?',
			options: ['Not Only SQL', 'Non-Structured Query Language', 'No Structured Query Language', 'Non-SQL'],
			answer: 'Not Only SQL',
		},
		{
			question: 'Which type of database does not use a fixed schema?',
			options: ['NoSQL', 'SQL', 'Relational', 'Document'],
			answer: 'NoSQL',
		},
		{
			question: 'Which type of database is best suited for handling large amounts of unstructured data?',
			options: ['NoSQL', 'SQL', 'Relational', 'Document'],
			answer: 'NoSQL',
		},
		{
			question: 'Which type of database is best suited for complex queries and transactions?',
			options: ['SQL', 'NoSQL', 'Relational', 'Document'],
			answer: 'SQL',
		},
		{
			question: 'Which type of database is best suited for hierarchical data?',
			options: ['Document', 'NoSQL', 'SQL', 'Relational'],
			answer: 'Document',
		},
		{
			question: 'Which type of database is best suited for storing and retrieving key-value pairs?',
			options: ['Key-Value', 'NoSQL', 'SQL', 'Relational'],
			answer: 'Key-Value',
		},
		{
			question: 'Which type of database is best suited for graph-like data structures?',
			options: ['Graph', 'NoSQL', 'SQL', 'Relational'],
			answer: 'Graph',
		},
		{
			question: 'Which type of database is best suited for storing and querying JSON-like documents?',
			options: ['Document', 'NoSQL', 'SQL', 'Relational'],
			answer: 'Document',
		},
		{
			question: 'Which type of database is best suited for high scalability and availability?',
			options: ['NoSQL', 'SQL', 'Relational', 'Document'],
			answer: 'NoSQL',
		},
		{
			question: 'Which type of database is best suited for ACID transactions?',
			options: ['SQL', 'NoSQL', 'Relational', 'Document'],
			answer: 'SQL',
		},
	].map((q, i) => ({ ...q, id: i + 1 })),
};
const RestApiQuiz = {
	id: 3,
	name: 'REST API',
	questions: [
		{
			question: 'What does REST stand for?',
			options: [
				'Representational State Transfer',
				'Remote Execution and State Transfer',
				'Resource Execution and State Transfer',
				'Remote Execution and Service Transfer',
			],
			answer: 'Representational State Transfer',
		},
		{
			question: 'Which HTTP method is used to retrieve data from a RESTful API?',
			options: ['GET', 'POST', 'PUT', 'DELETE'],
			answer: 'GET',
		},
		{
			question: 'Which HTTP method is used to create new data in a RESTful API?',
			options: ['POST', 'GET', 'PUT', 'DELETE'],
			answer: 'POST',
		},
		{
			question: 'Which HTTP method is used to update existing data in a RESTful API?',
			options: ['PUT', 'POST', 'GET', 'DELETE'],
			answer: 'PUT',
		},
		{
			question: 'Which HTTP method is used to delete data from a RESTful API?',
			options: ['DELETE', 'POST', 'GET', 'PUT'],
			answer: 'DELETE',
		},
		{
			question: 'Which status code indicates a successful response in a RESTful API?',
			options: ['200', '400', '500', '300'],
			answer: '200',
		},
		{
			question: 'Which status code indicates a client error in a RESTful API?',
			options: ['400', '200', '500', '300'],
			answer: '400',
		},
		{
			question: 'Which status code indicates a server error in a RESTful API?',
			options: ['500', '200', '400', '300'],
			answer: '500',
		},
		{
			question: 'Which status code indicates a redirection in a RESTful API?',
			options: ['300', '200', '400', '500'],
			answer: '300',
		},
		{
			question: 'Which header is used to specify the format of the response in a RESTful API?',
			options: ['Content-Type', 'Authorization', 'Accept', 'Cache-Control'],
			answer: 'Content-Type',
		},
	].map((q, i) => ({ ...q, id: i + 1 })),
};

export const categories = [
	{
		name: 'Programming Language',
		quiz: [JavascriptQuiz, TypescriptQuiz, PythonQuiz],
	},
	{
		name: 'Frontend',
		quiz: [HtmlQuiz, CssQuiz, ReactQuiz],
	},
	{ name: 'Backend', quiz: [SqlQuiz, NoSqlQuiz, RestApiQuiz] },
];

export const seed = async () => {
	try {
		const isEmpty = await prisma.category.count();
		if (isEmpty) return;

		const res = await prisma.category.createMany({
			data: categories,
		});
		console.log('Categories seeded successfully ', { ...res });
	} catch (error) {
		console.error('Error seeding categories:', error);
	} finally {
		await prisma.$disconnect();
	}
};
