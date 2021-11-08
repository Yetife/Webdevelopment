document.addEventListener("DOMContentLoaded", ()=> {
    let registerObject = {}
    let repository = [
        {first_name: "Bolu", lastName: "Olasehinde", phoneNumber: "08096393031", password: "123456789"},
        {first_name: "Gideon", lastName: "Mojoyin", phoneNumber: "08034657031", password: "1638291023"},
    ]
    //buttonElement
    function confirmRegistration() {
        if(Object.keys(registerObject).length === 4) {
            let{first_name, password} = registerObject
            if(repository.findIndex(user => user.first_name === first_name) !== -1) {
                if (repository.find(user => user.first_name === first_name).password === password) {
                    localStorage.setItem("userName", JSON.stringify(registerObject))
                    location.href = "home.html"
                } else {
                    alert("please enter a correct password");
                }
            }else{
                    alert("User Does Not Exist")
            }
        }else {
            alert("incomplete User info")
        }
    }
    let button = document.getElementsByClassName('register_btn')[0]
    button.addEventListener("click", ()=> confirmRegistration());

    //inputFields
    function handleInputChange(e) {
        registerObject = {...registerObject, [e.target.name]: e.target.value};
        // console.log(e.target.name, e.target.value);
    }
    let inputFields = document.getElementsByTagName('input')
    // for (let i = 0; i < inputFields.length; i++) {
    //      inputFields[i].addEventListener('input', (e) => handleInputChange(e))
    // }
    Array.from(inputFields).forEach((inputField) =>
        inputField.addEventListener('input', (e) => handleInputChange(e)))

})
