from selenium import webdriver  
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By

import time
 
SIMILAR_ACCOUNT="codingdojodotco" 
USERNAME="onparadiscoding"
PASSWORD="***********"


class InstaFollower():  
    def __init__(self) -> None:
         self.driver = webdriver.Chrome() 
    
    def login(self):  
        self.driver.get("https://www.instagram.com/accounts/login/") 
        self.driver.maximize_window() # For maximizing window
        self.driver.implicitly_wait(20) # gives an implicit wait for 20 seconds to prevent attempting to find next element before page load
        username=self.driver.find_element(By.NAME, "username")
        password=self.driver.find_element(By.NAME, "password") 


        username.send_keys(USERNAME) 
        password.send_keys(PASSWORD) 

        time.sleep(5)
        password.send_keys(Keys.ENTER)
        save_info = self.driver.find_element(By.XPATH, "//*[@id='react-root']/section/main/div/div/div/div/button")
        save_info.click() #Clicks the login button

    def find_followers(): 
        pass 

    def follow(): 
        pass 

findFollowers = InstaFollower()  

#Call three class methods to login and add new followers. 
findFollowers.login() 
