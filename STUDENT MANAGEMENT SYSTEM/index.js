let students = [];
let Assignments = [];
let Lectures = [];
class User {
    #userpassword;
    constructor(n, id) {
        this.username = n;
        this.userid = id;
    }

    signup(email, password){
        if (this.#validateuser) {
            this.useremail = email;
            this.#userpassword = password;
        }
        students.push(this);
        console.log("User is registered successfully !!!")
    }
    #validateuser(){
        if (this.#validate_email && this.#validate_password) {
            return true;
        }
    }
    #validate_email() {
        return true;
    }
    #validate_password() {
        return true;
    }

    login(email, password) {
        let flag = false;
        students.forEach((el) => {
            if (el.useremail === email && el.#userpassword === password) {
                flag = true;
            }
        })
        if (flag === true) {
            console.log("User logged in successfully.");
        } else {
            console.log("User credentials are wrong or invalid userdetails")
        }
    }
}


class Student extends User {
    constructor(n, id) {
        super(n, id);
        this.type = "Student";
    }

    viewAssignment(userid) {
        let assigned_task = [];
        Assignments.forEach((el) => {
            let id = userid//.split("_")[0];     // fw18_0619
            if (el.userid === id) {
                assigned_task.push(el)
            }
        })
        console.log(assigned_task);
    }

    submitAssignment(id) {
        Assignments.forEach((el)=>{
            if(el.id === id && el.submission === false) {
                el.submission = true;
            }
        })
        console.log("Assignment submitted successfully");
    }

    viewLectures(userid) {
        let assigned_Lectures = [];
        Lectures.forEach((el)=>{
            if (el.userid === userid) {
                assigned_Lectures.push(el);
            }
        })
        return assigned_Lectures;
    }
}

class Admin extends User {
    constructor(n,id){
        super(n,id);
        this.type = "Admin";
    }

    createAssign(id, topic, duration, studentid) {
        let assignment = {
            id: id,
            userid: studentid,
            assign_topic: topic,
            assign_duration: duration,
            submission: false,
        }
        Assignments.push(assignment);
        console.log(Assignments);
    }

    createLectures(topic, timing, studentid, id) {
        let lecture = {
            id: id,
            userid: studentid,
            lecture_topic: topic,
            lecture_time: timing,
        }
        Lectures.push(lecture);
        console.log(Lectures);
    }

    removeAssign(id) {
        Lectures = Lectures.filter((el) =>{
            return el.id !== id;
        })
    }

    removeLectures(id) {
        Lectures = Lectures.filter((el)=> {
            return el.id !== id;
        })
    }
}



let sonu = new Student("Sonu", "fw18_0619");
let timmy = new Student("Timmy", "fw19_0618");


let admin = new Admin("Sushant", "adm_0003")
console.log(sonu, timmy, admin);

admin.signup("admin@gmail.com", "ad123");
sonu.signup("sonu@gmasil.com", "sonu123");
timmy.signup("timmy@gmail.com", "tim321")

admin.login("admin@gmail.com", "ad123");
sonu.login("sonu@gmasil.com", "sonu123");
timmy.login("timmy@gmail.com", "tim321")

admin.createAssign("fw18", "OOPS", "3hrs", 1)
admin.createLectures("OOPS", "2hrs", "fw19", 1)

admin.removeAssign ("fw18");
admin.removeLectures(1);

sonu.submitAssignment("fw18")
sonu.viewAssignment(1);