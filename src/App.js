import React, { useState } from "react"; // React ve useState hook'u içe aktarılıyor
import Course from "./Course"; // Course bileşeni içe aktarılıyor
import "./App.css"; // Uygulamaya özel stiller içe aktarılıyor

// Rastgele bir kurs seçen fonksiyon
function getRandomCourse() {
  const courseArray = ["Angular", "Bootstrap", "Ccsharp", "KompleWeb"]; // Kursların isimleri array olarak tanımlanıyor
  return courseArray[Math.floor(Math.random() * courseArray.length)]; // Array içinden rastgele bir kurs ismi döndürülüyor
}

function App() {
  const [courses, setCourses] = useState([]); // useState hook'u ile courses adında bir state oluşturuluyor ve başlangıçta boş array olarak tanımlanıyor

  // Butona tıklandığında yeni bir kurs ekler
  const handleClick = () => {
    setCourses([...courses, getRandomCourse()]); // Yeni bir kurs ekleniyor ve mevcut kurslar array'ine ekleniyor
  };

  // Kursları listeleyen map fonksiyonu
  const courseList = courses.map((course, index) => (
    <Course key={index} courseName={course} /> // Her bir kurs için Course bileşeni render ediliyor ve courseName prop'u iletiliyor
  ));

  return (
    <div className="App">
      <button className="appButton" onClick={handleClick}>
        {" "}
        {/* Butona tıklandığında handleClick fonksiyonu çalışır */}
        Kurs Ekle
      </button>
      <div className="courseList">{courseList}</div>{" "}
      {/* courseList array'i div içinde render ediliyor */}
    </div>
  );
}

export default App; // App bileşeni dışa aktarılıyor
