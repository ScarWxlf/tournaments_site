from bs4 import BeautifulSoup
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service
import time
import json
from urllib.parse import urlparse

# Скачиваем chromedriver, соответствующий версии вашего браузера Google Chrome
#chromedriver = "/path/to/chromedriver"
service = Service(executable_path = "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chromedriver.exe")
options = webdriver.ChromeOptions()
# Запускаем браузер (Google Chrome в данном случае)
browser = webdriver.Chrome(service=service, options=options)

# Открываем веб-страницу
url = 'https://colizeumarena.com/academy/'
browser.get(url)

cookiebarbtn = browser.find_element(By.CLASS_NAME, "cookie-bar__btn")
cookiebarbtn.click()
# находим кнопку по ее классу

# Нажимаем на кнопку
for i in range (5):
    button_link = browser.find_element(By.CLASS_NAME, "timetable__btn")
    button_link.click()
    time.sleep(3)


# new_url = browser.current_url
# browser.get(new_url)


# Открываем новую страницу с расписанием

# Открываем новую страницу

# Находим все турниры
all_tournaments = browser.find_elements(By.CLASS_NAME, "timetable-block__name")
all_text = browser.find_elements(By.CLASS_NAME, "timetable-block__text")


# Сохраняем результаты
date_dict = []
parsed_url = urlparse(url)
site_name = parsed_url.netloc
site_name = site_name.replace(".com", "")

for i in range(len(all_tournaments)):
    paragraphs = all_text[i].find_elements(By.TAG_NAME, "p")
    paragraph_texts = [p.text for p in paragraphs]
    date = {
        "id": i+1,
        "Date": all_tournaments[i].text,
        "GameAndFormat": paragraph_texts[0],
        "PrizeFund": paragraph_texts[1],
        "StartTime": paragraph_texts[2],
        "Link": url,
        "Name": site_name
        }
    date_dict.append(date)
 
with open("result.json", "w", encoding="utf-8") as file:
    json.dump(date_dict, file, ensure_ascii=False, indent=4)

with open("result.json", "r", encoding="utf-8") as file:
    result = json.load(file)


# for i in result:
#         # print(f"{i}: {result[0][i]}")
#     for j in result[i]:
#         result[i][j] = 
        
            
# for paragraphs in result.items():
#     rep = ["×" "Х"]
#     for item in rep:
#         if item in paragraphs:
#             paragraphs = paragraphs.replace(item, "x")

    
# Закрываем браузер
browser.quit()
