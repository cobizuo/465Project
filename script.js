// signup/login script
        let signupBtn = document.getElementById('signupBtn');
        let loginBtn = document.getElementById('loginBtn');
        let nameField = document.getElementById('nameField');
        let numField = document.getElementById('numField');
        let numField2 = document.getElementById('numField2');
        let title = document.getElementById('title');
        let formBox = document.getElementById('form-box');

        loginBtn.onclick = function(){
            nameField.style.maxHeight = "0";
            nameField.style.display = "none";
            numField.style.display = "none";
            numField2.style.display = "none";
            formBox.style.padding = "50px 60px 10px";
            title.innerHTML = "Log in";
            signupBtn.classList.add("disable");
            loginBtn.classList.remove("disable");
        }

        signupBtn.onclick = function(){
            nameField.style.maxHeight = "60px";
            nameField.style.display = "flex";
            numField.style.display = "flex";
            numField2.style.display = "flex";
            formBox.style.padding = "50px 60px 70px";
            title.innerHTML = "Sign Up";
            signupBtn.classList.remove("disable");
            loginBtn.classList.add("disable");
        }


