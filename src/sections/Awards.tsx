import React from "react";

type Props = { lang?: string };

const Awards: React.FC<Props> = ({ lang = "en" }) => (
  <section id="awards" className="max-w-3xl mx-auto py-12 px-4 scroll-mt-20">
    <h2 className="text-2xl font-bold mb-8">{lang === "th" ? "รางวัล/การแข่งขัน" : "Competitions & Awards"}</h2>
    <ul className="space-y-6">
      <li className="flex justify-between items-baseline">
        <div>
          <div>{lang === "th" ? "นักศึกษาผลการเรียนดีเด่น ปีการศึกษา 2567" : "Outstanding Academic Achievement, Academic Year 2024"}</div>
          <div>{lang === "th" ? "คณะวิทยาศาสตร์และเทคโนโลยี สาขาวิทยาการคอมพิวเตอร์" : "Bachelor of Science in Computer Science"}</div>
          <div>{lang === "th" ? "มหาวิทยาลัยเทคโนโลยีราชมงคลตะวันออก" : "Rajamangala University of Technology Tawan-ok"}</div>
        </div>
        <div className="text-sm text-gray-600">{lang === "th" ? "สิงหาคม 2568" : "August 2025"}</div>
      </li>
      <li className="flex justify-between items-baseline">
        <div>
          <div>{lang === "th" ? "นักศึกษาผลการเรียนดีเด่น สาขาการจัดการโลจิสติกส์และซัพพลายเชน" : "Outstanding Academic, Logistics and Supply Chain Management"}</div>
          <div>{lang === "th" ? "วิทยาลัยเทคนิคพัทยา" : "Pattaya Technical College"}</div>
        </div>
        <div className="text-sm text-gray-600">{lang === "th" ? "มีนาคม 2567" : "March 2024"}</div>
      </li>
      <li className="flex justify-between items-baseline">
        <div>
          <div>{lang === "th" ? "รางวัลชนะเลิศ การแข่งขัน Beer Game (บริหารต้นทุน) ระดับจังหวัด" : "1st Place, Beer Game Competition, Chonburi Province"}</div>
          <div>{lang === "th" ? "การแข่งขันทักษะวิชาชีพแห่งชาติ" : "National Vocational Skills Competition"}</div>
        </div>
        <div className="text-sm text-gray-600">{lang === "th" ? "ตุลาคม 2565" : "October 2022"}</div>
      </li>
        <li className="flex justify-between items-baseline">
          <div>
            <div>{lang === "th" ? "นักศึกษาผลการเรียนดีเด่น สาขาการจัดการค้าธุรกิจค้าปลีก" : "Award for Outstanding Academic, Retail Management"}</div>
            <div>{lang === "th" ? "วิทยาลัยเทคนิคพัทยา" : "Pattaya Technical College"}</div>
          </div>
          <div className="text-sm text-gray-600">{lang === "th" ? "มีนาคม 2565" : "March 2022"}</div>
        </li>
    </ul>
  </section>
);

export default Awards;