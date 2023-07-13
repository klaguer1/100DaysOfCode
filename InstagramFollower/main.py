from selenium import webdriver 

class InstaFollower():  
    def __init__(self, path) -> None:
         self.driver = webdriver.Chrome(executable_path=path) 
    
    def login(): 
        pass 
    
    def find_followers(): 
        pass 

    def follow(): 
        pass 

findFollowers = InstaFollower()  

#Call three class methods to login and add new followers. 
findFollowers.login() 
findFollowers.find_followers() 
findFollowers.follow()
