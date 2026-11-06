
// ==================================
// 1. Student Class
// ==================================

class Student {
    constructor(id, name, grades, attendance) {
        this.id = id;
        this.name = name;
        this.grades = grades;
        this.attendance = attendance;
    }

    // Calculate Average
    calculateAverage() {
        let total = this.grades.reduce((sum, grade) => {
            return sum + grade;
        }, 0);

        return total / this.grades.length;
    }

    // Get Academic Grade
    getGrade() {
        let average = this.calculateAverage();

        if (average >= 90) {
            return "A";
        } else if (average >= 80) {
            return "B";
        } else if (average >= 70) {
            return "C";
        } else if (average >= 60) {
            return "D";
        } else if (average >= 50) {
            return "E";
        } else {
            return "F";
        }
    }

    // Get Final Result
    getResult() {
        let average = this.calculateAverage();

        if (average >= 50 && this.attendance >= 75) {
            return "ناجح";
        } else {
            return "يحتاج مراجعة";
        }
    }
}


// ==================================
// 2. Create Students Objects
// ==================================

let studentsList = [
    new Student(101, "Nour", [95, 90, 88], 95),
    new Student(102, "May", [42, 46, 45], 85),
    new Student(103, "Adham", [48, 44, 47],90),
    new Student(104, "Talia", [25, 30, 35], 65)
];


// ==================================
// 3. Filter Struggling Students
// ==================================

let strugglingStudents = studentsList.filter(student => {
    let average = student.calculateAverage();

    return average >= 40 && average <= 49;
});


// ==================================
// 4. Add 5 Mercy Marks using Map
// ==================================

let studentsAfterMercy = strugglingStudents.map(student => {
    let newAverage = student.calculateAverage() + 5;

    return {
        id: student.id,
        name: student.name,
        oldAverage: student.calculateAverage(),
        newAverage: newAverage
    };
});


// ==================================
// 5. Calculate Total using Reduce
// ==================================

let totalNewAverages = studentsAfterMercy.reduce((sum, student) => {
    return sum + student.newAverage;
}, 0);


// ==================================
// 6. Calculate Mercy Average
// ==================================

let mercyAverage = studentsAfterMercy.length > 0
    ? totalNewAverages / studentsAfterMercy.length
    : 0;


// ==================================
// 7. Print Students Reports
// ==================================

console.log("===== UNIVERSITY STUDENTS REPORT =====");

studentsList.forEach(student => {
    console.log({
        Name: student.name,
        Average: student.calculateAverage(),
        Grade: student.getGrade(),
        Result: student.getResult()
    });
});


// ==================================
// 8. Print Mercy Committee Report
// ==================================

console.log("===== STRUGGLING STUDENTS =====");

console.log(studentsAfterMercy);


// ==================================
// 9. Print Mercy Average
// ==================================

console.log("===== MERCY AVERAGE =====");

console.log(mercyAverage);
