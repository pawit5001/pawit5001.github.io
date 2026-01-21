import React from "react";

type Props = { lang?: string };

const Projects: React.FC<Props> = ({ lang = "en" }) => (
  <section id="projects" className="max-w-3xl mx-auto py-12 px-4 scroll-mt-20">
    <h2 className="text-2xl font-bold mb-8">
      {lang === "th" ? "ผลงานโปรเจกต์" : "Projects"}
    </h2>

    {/* Snap Translate */}
    <div className="mb-6">
      <div className="flex items-center flex-wrap">
        <span className="text-lg md:text-xl font-semibold">Snap Translate</span>
        <span className="ml-3 text-sm md:text-base text-gray-600">
          {lang === "th" ? "เว็บแอปพลิเคชันแปลภาษาจากภาพด้วย AI" : "AI Image Translation Web Application"}
        </span>
        <a
          href="https://github.com/pawit5001/SnapTranslate"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-4 text-blue-600 underline text-sm md:text-base"
        >
          [GitHub]
        </a>
      </div>

      <p className="text-gray-600 text-sm mb-1">
        {lang === "th"
          ? "เทคโนโลยีที่ใช้: React, FastAPI, MongoDB, YOLOv8, BLIP, Google Translate API, Stable Diffusion XL"
          : "Technologies: React, FastAPI, MongoDB, YOLOv8, BLIP, Google Translate API, Stable Diffusion XL"}
      </p>

      <p className="text-gray-600 text-sm mb-2">
        {lang === "th"
          ? "ระบบแปลภาษาจากภาพโดยใช้ AI ผสานเทคโนโลยี Computer Vision และ NLP"
          : "An AI-powered system combining Computer Vision and NLP for image-based translation."}
      </p>

      <ul className="list-disc pl-6 mb-2 text-sm text-gray-700">
        <li>
          {lang === "th"
            ? "พัฒนาระบบตรวจจับและจำแนกวัตถุในภาพด้วย YOLOv8 เพื่อระบุตำแหน่งและประเภทวัตถุได้อย่างแม่นยำ"
            : "Implemented object detection using YOLOv8 to locate and classify multiple objects in images"}
        </li>
        <li>
          {lang === "th"
            ? "ผสาน BLIP สำหรับสร้างคำบรรยายภาพโดยเฉพาะภาพที่มีรายละเอียดหรือบริบทซับซ้อน"
            : "Integrated BLIP image captioning to generate contextual descriptions prior to translation"}
        </li>
        <li>
          {lang === "th"
            ? "รองรับการแปลคำบรรยายภาพเป็นหลายภาษาได้พร้อมกันสูงสุด 5 ภาษา"
            : "Enabled multi-language translation of image captions, supporting up to 5 languages simultaneously"}
        </li>
        <li>
          {lang === "th"
            ? "พัฒนาฟีเจอร์สร้างภาพจากข้อความด้วย Stable Diffusion XL"
            : "Implemented text-to-image generation using Stable Diffusion XL"}
        </li>
        <li>
          {lang === "th"
            ? "พัฒนาระบบบันทึกผลการแปลภาพแบบเรียลไทม์ผ่าน Discord เพื่อการติดตามผล"
            : "Built real-time Discord logging to monitor image translation results"}
        </li>
      </ul>
    </div>

    {/* Gender & Age Prediction */}
    <div className="mb-6">
      <div className="flex items-center flex-wrap">
        <span className="text-lg md:text-xl font-semibold">Gender & Age Prediction</span>
        <span className="ml-3 text-sm md:text-base text-gray-600">
          {lang === "th" ? "ระบบทำนายเพศและอายุด้วย AI" : "Gender & Age Prediction System"}
        </span>
        <a
          href="https://github.com/pawit5001/gender-age-prediction"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-4 text-blue-600 underline text-sm md:text-base"
        >
          [GitHub]
        </a>
      </div>

      <p className="text-gray-600 text-sm mb-1">
        {lang === "th"
          ? "เทคโนโลยีที่ใช้: Python, TensorFlow, Keras, OpenCV, Gradio, EfficientNetB0"
          : "Technologies: Python, TensorFlow, Keras, OpenCV, Gradio, EfficientNetB0"}
      </p>

      <p className="text-gray-600 text-sm mb-2">
        {lang === "th"
          ? "ระบบ Machine Learning สำหรับทำนายเพศและอายุจากภาพใบหน้าอย่างแม่นยำและรวดเร็ว"
          : "A machine learning system for gender classification and age estimation from facial images."}
      </p>

      <ul className="list-disc pl-6 mb-2 text-sm text-gray-700">
        <li>
          {lang === "th"
            ? "พัฒนาโมเดล Deep Learning สำหรับทำนายเพศและอายุจากภาพใบหน้า"
            : "Developed a deep learning model for gender prediction and age estimation"}
        </li>
        <li>
          {lang === "th"
            ? "พัฒนาโมเดลโดยใช้ EfficientNetB0 เป็นโครงข่ายหลัก พร้อมเตรียมข้อมูลภาพด้วย OpenCV (ตรวจจับใบหน้า ปรับขนาด และปรับมาตรฐาน)"
            : "Implemented EfficientNetB0 backbone with TensorFlow/Keras and OpenCV-based preprocessing (face detection, resizing, normalization)"}
        </li>
        <li>
          {lang === "th"
            ? "รองรับการประมวลผลทั้งแบบเรียลไทม์และแบบกลุ่ม (batch)"
            : "Supported both real-time single-image inference and batch processing"}
        </li>
        <li>
          {lang === "th"
            ? "ฝึกโมเดลด้วยชุดข้อมูลสาธารณะ พร้อมเทคนิค Data Augmentation เพื่อเพิ่มความแม่นยำ"
            : "Trained on public face datasets with data augmentation to improve robustness and generalization"}
        </li>
        <li>
          {lang === "th"
            ? "พัฒนาอินเทอร์เฟซ Gradio สำหรับสาธิตและทดลองใช้งานโมเดล"
            : "Built an interactive Gradio web interface for model demonstration"}
        </li>
      </ul>
    </div>

{/* TravelBlog */}
<div className="mb-6">
<div className="flex items-center flex-wrap">
  <span className="text-lg md:text-xl font-semibold">TravelBlog</span>
  <span className="ml-3 text-sm md:text-base text-gray-600">
    {lang === "th" ? "แอปมือถือแนะนำสถานที่ท่องเที่ยว" : "Mobile Travel Application"}
  </span>
  <a
    href="https://github.com/pawit5001/TravelBlog"
    target="_blank"
    rel="noopener noreferrer"
    className="ml-4 text-blue-600 underline text-sm md:text-base"
  >
    [GitHub]
  </a>
  <a
    href="https://www.mediafire.com/file/v2oec2xoyqh92op/TravelBlog.apk/file"
    target="_blank"
    rel="noopener noreferrer"
    className="ml-3 text-green-600 underline text-sm md:text-base"
  >
    [APK]
  </a>
</div>

<p className="text-gray-600 text-sm mb-1">
  Technologies: Flutter, Dart | Platform: Android
</p>

<p className="text-gray-600 text-sm mb-2">
    {lang === "th"
      ? "แอปมือถือที่พัฒนาด้วย Flutter สำหรับค้นหาและบันทึกสถานที่ท่องเที่ยว พร้อมรองรับภาษาไทยอย่างสมบูรณ์"
      : "A Flutter-based mobile application for discovering and exploring travel destinations with localization support."}
</p>

<ul className="list-disc pl-6 mb-2 text-sm text-gray-700">
  <li>
    {lang === "th"
      ? "เรียกดูสถานที่ท่องเที่ยวยอดนิยม พร้อมรายละเอียดและแกลเลอรีภาพถ่าย"
      : "Browse popular travel destinations with detailed information and image galleries"}
  </li>
  <li>
    {lang === "th"
      ? "พัฒนาฟีเจอร์ Wishlist สำหรับบันทึกสถานที่ที่สนใจ"
      : "Implemented a wishlist feature to save favorite destinations"}
  </li>
  <li>
    {lang === "th"
      ? "รองรับการค้นหาและกรองสถานที่ท่องเที่ยวตามหมวดหมู่"
      : "Enabled search and filtering of destinations by category"}
  </li>
  <li>
    {lang === "th"
      ? "รองรับการใช้งานภาษาไทยเต็มรูปแบบ"
      : "Provided full Thai language localization"}
  </li>
</ul>
</div>

    {/* Sport Equipment Booking */}
    <div className="mb-6">
      <div className="flex items-center flex-wrap">
        <span className="text-lg md:text-xl font-semibold">Sport Equipment Booking</span>
        <span className="ml-3 text-sm md:text-base text-gray-600">
          {lang === "th" ? "ระบบจองและยืม-คืนอุปกรณ์กีฬา" : "Sport Equipment Booking System"}
        </span>
        <a
          href="https://github.com/pawit5001/Sport-equipment-booking"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-4 text-blue-600 underline text-sm md:text-base"
        >
          [GitHub]
        </a>
      </div>

      <p className="text-gray-600 text-sm mb-1">
        Technologies: PHP, MySQL, Bootstrap 5 | Server: Apache (XAMPP)
      </p>

      <p className="text-gray-600 text-sm mb-2">
        {lang === "th"
          ? "ระบบเว็บสำหรับบริหารจัดการการจองและยืม-คืนอุปกรณ์กีฬาอย่างมีประสิทธิภาพ"
          : "A web-based system for managing sport equipment borrowing and returns."}
      </p>

      <ul className="list-disc pl-6 mb-2 text-sm text-gray-700">
        <li>
          {lang === "th"
            ? "พัฒนาระบบสมัครสมาชิกและเข้าสู่ระบบ พร้อมแยกสิทธิ์การใช้งานระหว่างผู้ใช้ทั่วไปและผู้ดูแลระบบ"
            : "Implemented user authentication with role-based access (student/admin)"}
        </li>
        <li>
          {lang === "th"
            ? "พัฒนาฟีเจอร์เลือกดูอุปกรณ์ เพิ่มลงตะกร้า และทำรายการยืมได้อย่างสะดวก"
            : "Enabled users to browse equipment, add items to cart, and submit borrowing requests"}
        </li>
        <li>
          {lang === "th"
            ? "พัฒนาระบบจัดการอุปกรณ์ หมวดหมู่ ผู้รับผิดชอบ และการคืน สำหรับผู้ดูแลระบบ"
            : "Developed admin management features for categories, equipment inventory, responsible staff, and returns"}
        </li>
        <li>
          {lang === "th"
            ? "พัฒนาฟีเจอร์แสดงประวัติการยืม ใบเสร็จ และสถิติการใช้งานผ่านแดชบอร์ด"
            : "Provided booking history, receipt printing, and dashboard statistics"}
        </li>
        <li>
          {lang === "th"
            ? "ตั้งค่าระยะเวลาการยืมสูงสุดและคำนวณค่าปรับรายวันโดยอัตโนมัติ"
            : "Configured system settings including maximum borrow duration and late fee calculation per day"}
        </li>
      </ul>
    </div>
  </section>
);

export default Projects;
