import React from "react";

type Props = { lang?: string };

const Experience: React.FC<Props> = ({ lang = "en" }) => (
  <section
    id="experience"
    className="max-w-3xl mx-auto py-12 px-4 scroll-mt-20"
  >
    <h2 className="text-2xl font-bold mb-8">
      {lang === "th" ? "ประสบการณ์ทำงาน" : "Experience"}
    </h2>

    <div className="mb-8">
      <div className="flex flex-wrap justify-between items-baseline">
        <p className="font-semibold">
          {lang === "th"
            ? "เจ้าหน้าที่บริการลูกค้าและเอกสาร – ฝึกงาน"
            : "Customer Service & Documentation Intern"}
        </p>
        <span className="text-sm text-gray-600">
          {lang === "th"
            ? "มีนาคม 2023 – กุมภาพันธ์ 2024"
            : "March 2023 – February 2024"}
        </span>
      </div>

      <p className="text-sm text-gray-700 mb-1">
        Laemchabang Inter Trans Co., Ltd.
      </p>

      <ul className="list-disc pl-6 mt-2 space-y-1">
        <li>
          {lang === "th"
            ? "ประสานงานกับสายเรือ ตัวแทน และลูกค้า เพื่อสนับสนุนกระบวนการนำเข้าและส่งออกสินค้า"
            : "Coordinated with shipping lines, agents, and customers to support import and export operations."}
        </li>

        <li>
          {lang === "th"
            ? "ดำเนินการจองเรือและจัดการตารางเดินเรือ รวมถึงแก้ไขปัญหา เช่น ความล่าช้า การเปลี่ยนแปลงเรือ และการแก้ไขใบตราส่งสินค้า (BL)"
            : "Managed vessel bookings and shipment schedules, handling delays, vessel omissions, and Bill of Lading (BL) corrections."}
        </li>

        <li>
          {lang === "th"
            ? "จัดทำและตรวจสอบเอกสาร SI, VGM, BL และเอกสารที่เกี่ยวข้องกับงานนำเข้า/ส่งออก ให้ถูกต้องครบถ้วน"
            : "Prepared and processed SI, VGM, BL, and related import/export documentation, ensuring accuracy and timely submission."}
        </li>

        <li>
          {lang === "th"
            ? "ติดตามสถานะการขนส่งสินค้าและประสานงานกับหน่วยงานที่เกี่ยวข้อง เพื่อให้การขนส่งและเอกสารเป็นไปตามกำหนดเวลา"
            : "Monitored shipment status and followed up with relevant parties to ensure on-time cargo movement and documentation completion."}
        </li>

        <li>
          {lang === "th"
            ? "พัฒนาและปรับปรุงระบบติดตามตารางเรือและกำหนดส่งเอกสารด้วย Google Sheets และ Google Apps Script พร้อมระบบแจ้งเตือนอัตโนมัติผ่าน LINE เพื่อป้องกันการส่ง BL ล่าช้า"
            : "Implemented a Google Sheets + Google Apps Script automation system to track vessel schedules and document deadlines, with automated LINE notifications to reduce missed BL submissions."}
        </li>
      </ul>
    </div>
  </section>
);

export default Experience;
