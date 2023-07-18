from selenium import webdriver  
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By

import time
 
SIMILAR_ACCOUNT="codingdojodotco" 
USERNAME="onparadiscoding"
PASSWORD="***************"

def find_button_text_index(buttons, text) -> int:
        index = 0
        for button in buttons: 
            if button.text == text:
                return index
            else:
                index += 1


class InstaFollower():  
    def __init__(self) -> None:
         self.driver = webdriver.Chrome() 

    
    def login(self):  
        self.driver.get("https://www.instagram.com/accounts/login/") 
        self.driver.maximize_window() # For maximizing window
        self.driver.implicitly_wait(10) # gives an implicit wait for 10 seconds to prevent attempting to find next element before page load
        username=self.driver.find_element(By.NAME, "username")
        password=self.driver.find_element(By.NAME, "password") 


        username.send_keys(USERNAME) 
        password.send_keys(PASSWORD) 

        time.sleep(5)
        password.send_keys(Keys.ENTER)
  
        # Click "Not Now" button to saving login info
        time.sleep(5)
        buttons = self.driver.find_elements(by=By.TAG_NAME, value="button")
        buttons[find_button_text_index(buttons, "Save Info")].click() 

        # Click "Not Now" to Notifications
        time.sleep(5)
        buttons = self.driver.find_elements(by=By.TAG_NAME, value="button")
        buttons[find_button_text_index(buttons, "Turn On")].click()
    
    def navigateToAccount(self, accountWithFollowers): 
        time.sleep(5)
        self.driver.get("https://www.instagram.com/" + accountWithFollowers + "/") 
        time.sleep(5)

    def find_followers(): 
        pass 

    def follow(): 
        pass 

findFollowers = InstaFollower()  

#Call three class methods to login and add new followers. 
findFollowers.login() 
findFollowers.navigateToAccount(SIMILAR_ACCOUNT)
