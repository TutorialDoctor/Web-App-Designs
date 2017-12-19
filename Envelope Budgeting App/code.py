#Comment
WRITE= 'w'
READ= 'r'
APPEND = 'a'
READWRITE = 'w+'
script="<script src='script.js'></script>"
def insert(text,document):
	with open(document,mode=APPEND) as infile:
		infile.write('\n'+text)
insert(script,'index.html')
