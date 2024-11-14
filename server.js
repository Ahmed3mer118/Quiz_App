import express from "express";
import fs from "fs";
import path from "path";

const studentsPath = path.join(__dirname, "db.json"); // استخدام __dirname للحصول على المسار الكامل للملف

const app = express();
const PORT = process.env.PORT || 5000;

// نقطة نهاية API لاسترجاع جميع بيانات الطلاب
app.get('/api/students', (req, res) => {
  try {
    // استخدام الدالة الثابتة في الكلاس بدلاً من القراءة المتزامنة
    const students = Student.fetchAllStudent();
    res.json(students);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// تعريف النموذج باستخدام class
class Student {
  constructor({ name, number, group, place, appreciation }) {
    this.name = name;
    this.number = number;
    this.group = group;
    this.place = place;
    this.appreciation = appreciation;
  }

  saveStudent() {
    // استخدام readFile و writeFile بشكل صحيح لضمان عمليات القراءة والكتابة الآمنة
    fs.readFile(studentsPath, (err, data) => {
      if (err) {
        console.error("Error reading file:", err);
        return;
      }

      let students = JSON.parse(data);
      this.id = students.length + 1;
      students.push(this);

      fs.writeFile(studentsPath, JSON.stringify(students), (err) => {
        if (err) {
          console.error("Error writing file:", err);
          return;
        }
        console.log("Student added successfully.");
      });
    });
  }

  static fetchAllStudent() {
    try {
      let data = fs.readFileSync(studentsPath, "utf8");
      let students = JSON.parse(data);
      return students;
    } catch (err) {
      console.error("Error reading file:", err);
      return [];
    }
  }
}

// بدء الخادم
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
