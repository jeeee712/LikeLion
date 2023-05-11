class Member:
    def __init__(self, username, password, name, birthdate, email):
        self.username = username
        self.password = password
        self.name = name
        self.birthdate = birthdate
        self.email = email

    def __str__(self):
        welcome = f"{self.name}님 가입을 환영합니다!"
        return welcome

class SignUp:
    def confirmPw(self):
        pw = input("PW: ")
        confirm = input("PW 확인: ")

        if pw == confirm:
            return pw
        else:
            print("패스워드가 일치하지 않습니다.")
            self.confirmPw()

    
    def confirmBd(self):
        birthdate = input("생년월일(6자리): ")

        if len(birthdate) == 6:
            return birthdate
        else:
            print("생년월일 입력값이 올바르지 않습니다.")
            self.confirmBd() 