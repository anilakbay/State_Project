import React from "react"; // React içe aktarılıyor
import Angular from "./images/angular.jpg"; // Angular kursunun resmi içe aktarılıyor
import Bootstrap from "./images/bootstrap5.png"; // Bootstrap kursunun resmi içe aktarılıyor
import Ccsharp from "./images/ccsharp.png"; // C# kursunun resmi içe aktarılıyor
import KompleWeb from "./images/kompleweb.jpg"; // Komple Web kursunun resmi içe aktarılıyor
import "./Course.css"; // Kursa özel stil dosyası içe aktarılıyor

// Kursların isimleriyle resimleri eşleştiren bir nesne
const courseMap = {
  Angular,
  Bootstrap,
  Ccsharp,
  KompleWeb,
};

function Course({ courseName }) {
  // Course bileşeni, courseName adında bir prop alıyor
  return (
    <div className="courseDiv">
      <img className="course" src={courseMap[courseName]} alt="course" />{" "}
      {/* courseMap'ten gelen resim source olarak kullanılıyor */}
    </div>
  );
}

export default Course; // Course bileşeni dışa aktarılıyor
