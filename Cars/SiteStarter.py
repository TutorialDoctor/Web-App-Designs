# coding: utf-8
# This program sets up html, css, javascript, and python documents for a website.

WRITE= 'w'
READ= 'r'
APPEND = 'a'
READWRITE = 'w+'

html_file = 'index.html'
css_file = 'style.css'
javascript_file = 'script.js'
python_file = 'code.py'

html_code = """<!--Comment-->
<!DOCTYPE html>
<html lang='en'>
<head>
	<meta charset='UTF-8'>
	<link href='style.css' rel='stylesheet'>
	<script src='script.js' type='text/javascript'></script>
</head>
<body>
	<p>Text Here: </p>
</body>
</html>"""

css_code = "p{color:red}"

javascript_code = """//Comment
document.write('JavaScript working')"""

python_code="""#Comment
WRITE= 'w'
READ= 'r'
APPEND = 'a'
READWRITE = 'w+'
script="<script src='script.js'></script>"
def insert(text,document):
	with open(document,mode=APPEND) as infile:
		infile.write('\\n'+text)
insert(script,'index.html')
"""

def insert(text,document):
	with open(document,mode=WRITE) as infile:
		infile.write(text)
def createVar(name,value):
	return """var {} = {}""".format(name,value)+';'

def createFunction(name,code):
	return 'function %s(){%s;};'%(name,code)

def getText(X):
	with open(X,'r') as infile:
		return infile.read()	



insert(html_code,html_file)
insert(css_code,css_file)
insert(javascript_code,javascript_file)
insert(python_code,python_file)
execfile(python_file)
print(getText('index.html'))
