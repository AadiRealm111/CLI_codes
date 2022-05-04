import os
import shutil
path = "C:/Users/adity/Downloads"
dir_list = os.listdir(path)
for files in dir_list:
	name = os.path.join(path,files)
	try:
		os.remove(name)
	except OSError as error:
		shutil.rmtree(name)
