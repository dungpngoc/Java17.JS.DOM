function Grade(name, grade, sex) {
    this.name = name
    this.grade = grade
    this.sex = sex
}

const grade1 = new Grade("John", 8, "M")
const grade2 = new Grade("Sarah", 12, "F")
const grade3 = new Grade("Bob", 16, "M")
const grade4 = new Grade("Johnny", 2, "M")
const grade5 = new Grade("Ethan", 4, "M")
const grade6 = new Grade("Paula", 18, "F")
const grade7 = new Grade("Donald", 5, "M")
const grade8 = new Grade("Jennifer", 13, "F")
const grade9 = new Grade("Courtney", 15, "F")
const grade10 = new Grade("Jane", 9, "F")

let grades = [grade1, grade2, grade3, grade4, grade5, grade6, grade7, grade8, grade9, grade10]

function print_student(grade_arr) {
    for (grade of grade_arr)
        console.log(`${grade.name} - ${grade.grade} - ${grade.sex}`)
}

// 1.
function average_grade_class(grade_list) {
    return grades.reduce((total, student) => total + student.grade, 0) / grades.length
}

// 2.
function average_grade_male(grade_list) {
    let male_list = grades.filter(student => student.sex === "M")
    return male_list.reduce((total, student) => total + student.grade, 0) / male_list.length
}

// 3.
function average_grade_female(grade_list) {
    return grades.filter(student => student.sex === "F")
        .reduce((total, student, index, arr) => total + student.grade / arr.length, 0)
}


// 4.
function highest_grade_male(grade_list) {
    if (grade_list.length === 0) return null
    const male_list = grade_list.filter(student => student.sex === "M")
    const grade_max = Math.max(...male_list.map(student => student.grade))
    return male_list.filter(student => student.grade === grade_max)
}

// 5.
function highest_grade_female(grade_list) {
    if (grade_list.length === 0) return null
    const female_list = grade_list.filter(student => student.sex === "F")
    const grade_max = Math.max(...female_list.map(student => student.grade))
    return female_list.filter(student => student.grade === grade_max)
}


// 6.
function lowest_grades_male(grade_list) {
    if (grade_list.length === 0) return null
    const male_list = grade_list.filter(student => student.sex === "M")
    const grade_min = Math.min(...male_list.map(student => student.grade))
    return male_list.filter(student => student.grade === grade_min)
}

// 7.
function lowest_grades_female(grade_list) {
    if (grade_list.length === 0) return null
    const female_list = grade_list.filter(student => student.sex === "F")
    const grade_min = Math.min(...female_list.map(student => student.grade))
    return female_list.filter(student => student.grade === grade_min)
}

// 8.
function highest_grade_student(grade_list) {
    if (grade_list.length === 0) return null
    const grade_max = Math.max(...grade_list.map(student => student.grade))
    return grade_list.filter(student => student.grade === grade_max)
}

// 9.
function lowest_grade_student(grade_list) {
    if (grade_list.length === 0) return null
    const grade_min = Math.min(...grade_list.map(student => student.grade))
    return grade_list.filter(student => student.grade === grade_min)
}

// 10.
function female_student(grade_list) {
    if (grade_list.length === 0) return null
    return grade_list.filter(student => student.sex === "F")
}

// 11.
function alphabetical_student(grade_list) {
    if (grade_list.length === 0) return null
    return grade_list.sort((a,b) => {
        if (a.name < b.name) return -1
        if (a.name > b.name) return 1
        return 0
    })
}

// 12.
function descending_grade_student(grade_list) {
    if (grade_list.length === 0) return null
    return grade_list.sort((a,b) => b.grade - a.grade)
}

// 13.
function find_by_name(grade_list) {
    if (grade_list.length === 0) return null
    return grade_list.filter(student => student.name.charAt(0) === "J")
}

// 14.
function highest_five_student(grade_list) {
    if (grade_list.length === 0) return null
    return grade_list.sort((a,b) => b.grade - a.grade)
        .splice(0,5)
}

// 1. Viết function tính thứ hạng trung bình của cả lớp
console.log(`1. Average grade of class: ${average_grade_class(grades)}`)
// 2. Viết function tính thứ hạng trung bình của nam trong lớp
console.log(`2. Average grade of male: ${average_grade_male(grades)}`)
// 3. Viết function tính thứ hạng trung bình của Nữ trong lớp
console.log(`3. Average grade of Female: ${average_grade_female(grades)}`)
// 4. Viết function tìm học viên Nam có thứ hạng cao nhất trong lớp
console.log("4. The highest ranked male student: ")
print_student(highest_grade_male(grades))
// 5. Viết function tìm học viên Nữ có thứ hạng cao nhất trong lớp
console.log("5. The highest ranked female student: ")
print_student(highest_grade_female(grades))
// 6. Viết function tìm học viên Nam có thứ hạng thấp nhất trong lớp
console.log("6. The highest ranked male student: ")
print_student(lowest_grades_male(grades))
// 7. Viết function tìm học viên Nữ có thứ hạng thấp nhất trong lớp
console.log("7. The highest ranked female student: ")
print_student(lowest_grades_female(grades))
// 8. Viết function thứ hạng cao nhất của cả lớp
console.log("8. The highest ranked student: ")
print_student(highest_grade_student(grades))
// 9. Viết function thứ hạng thấp nhất của cả lớp
console.log("9. The lowest ranked student: ")
print_student(lowest_grade_student(grades))
// 10. Viết function lấy ra danh sách tất cả học viên Nữ trong lớp
console.log("10. List of all female students: ")
print_student(female_student(grades))
// 11. Viết function sắp xếp tên học viên theo chiều tăng dần của bảng chữ cái
console.log("11. Alphabetical list of students: ")
print_student(alphabetical_student(grades))
// 12. Viết function sắp xếp thứ hạng học viên theo chiều giảm dần
console.log("12. In descending order of students ")
print_student(descending_grade_student(grades))
// 13. Viết function lấy ra học viên Nữ có tên bắt đầu bằng “J”
console.log("13. Students whose names start with the letter \"J\": ")
print_student(find_by_name(grades))
// 14. Viết function lấy ra top 5 người có thứ hạng cao nhất trong lớp
console.log("14. The 5 highest ranked people in the class: ")
print_student(highest_five_student(grades))
