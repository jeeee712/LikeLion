from classes import *

print("========================")
print("회원가입")
print("========================")

info = SignUp()

username = input("ID: ")
password = info.confirmPw()
name = input("이름: ")
birthdate = info.confirmBd()
email = input("email: ")

user1 = Member(username, password, name, birthdate, email)

print("========================")
print(user1)
print("========================")

f = open("user_info.txt", "a", encoding="UTF-8")
f.write(str(user1.__dict__))
f.write("\n")
f.close()