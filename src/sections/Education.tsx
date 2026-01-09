import React from "react";

type Props = { lang?: string };

const Education: React.FC<Props> = ({ lang = "en" }) => (
  <section id="education" className="max-w-3xl mx-auto py-12 px-4 scroll-mt-20">
    <h2 className="text-2xl font-bold mb-8">{lang === "th" ? "ประวัติการศึกษา" : "Education"}</h2>

    <div className="mb-8">
      <div className="flex flex-wrap justify-between items-baseline">
        <p className="font-semibold">{lang === "th" ? "วิทยาศาสตรบัณฑิต (วิทยาการคอมพิวเตอร์)" : "Bachelor of Science (Computer Science)"}</p>
        <span className="text-sm text-gray-600">{lang === "th" ? "กรกฎาคม 2024 - ปัจจุบัน" : "July 2024 - Present"}</span>
      </div>
      <p>{lang === "th" ? "มหาวิทยาลัยเทคโนโลยีราชมงคลตะวันออก" : "Rajamangala University of Technology Tawan-ok, Thailand"}</p>
      <p className="text-sm text-gray-600">{lang === "th" ? "เกรดเฉลี่ย: 3.76/4.00" : "GPA: 3.76/4.00"}</p>
    </div>

    <div className="mb-8">
      <div className="flex flex-wrap justify-between items-baseline">
        <p className="font-semibold">{lang === "th" ? "ประกาศนียบัตรวิชาชีพชั้นสูง (บริหารธุรกิจ)" : "High Vocational Certificate in Business Administration"}</p>
        <span className="text-sm text-gray-600">{lang === "th" ? "พฤษภาคม 2022 - มีนาคม 2024" : "May 2022 - March 2024"}</span>
      </div>
      <p>{lang === "th" ? "วิทยาลัยเทคนิคพัทยา" : "Pattaya Technical College, Thailand"}</p>
      <p className="text-sm text-gray-600">{lang === "th" ? "สาขา: การจัดการโลจิสติกส์และซัพพลายเชน" : "Major: Logistics and Supply Chain Management"}</p>
      <p className="text-sm text-gray-600">{lang === "th" ? "เกรดเฉลี่ย: 3.81/4.00" : "GPA: 3.81/4.00"}</p>
    </div>

    <div className="mb-6">
      <div className="flex flex-wrap justify-between items-baseline">
        <p className="font-semibold">{lang === "th" ? "ประกาศนียบัตรวิชาชีพ (บริหารธุรกิจ)" : "Vocational Certificate in Business Administration"}</p>
        <span className="text-sm text-gray-600">{lang === "th" ? "พฤษภาคม 2019 - มีนาคม 2022" : "May 2019 - March 2022"}</span>
      </div>
      <p>{lang === "th" ? "วิทยาลัยเทคนิคพัทยา" : "Pattaya Technical College, Thailand"}</p>
      <p className="text-sm text-gray-600">{lang === "th" ? "สาขา: การจัดการธุรกิจค้าปลีก" : "Major: Retail Management"}</p>
      <p className="text-sm text-gray-600">{lang === "th" ? "เกรดเฉลี่ย: 3.74/4.00" : "GPA: 3.74/4.00"}</p>
    </div>
  </section>
);

export default Education;