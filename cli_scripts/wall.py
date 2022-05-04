import os
import sys
import ctypes
import random, struct


path = "D:\\wallpapers\\"

def get_operating_system():
    desktop_env = sys.platform
    if desktop_env in ["win32", "cygwin"]:
        return "windows"


def get_wallpaper_path():
    files_list = os.listdir(path)
    rand_num = len(files_list)
    rand_num = random.randint(0, rand_num - 1)
    file_path = os.path.join(path,files_list[rand_num])
    return file_path

def set_wallpaper():
    file_path = get_wallpaper_path()
    if get_operating_system() == "windows":
        ctypes.windll.user32.SystemParametersInfoW(20,0,file_path, 0)

if __name__ == "__main__":
    set_wallpaper()