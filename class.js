class Student {
    constructor(sId, sName){
        this.id = sId;
        this.name = sName;
        this.school = "Shaheen College"
    }
}

const student1 = new Student(1, "Abu Saleh Faysal");
const student2 = new Student(2, "Shahriar Kabir");
console.log(student1, student2);