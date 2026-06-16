import React, { createContext, useContext } from 'react';

/* ── i18n engine ──────────────────────────────────────────────────────────
   Hỗ trợ chuyển ngôn ngữ EN ⇄ VI toàn app.

   Một "localized field" có thể là:
     • chuỗi thường  → hiển thị y nguyên ở mọi ngôn ngữ (fallback, backward-compatible)
     • { vi, en }    → chọn theo ngôn ngữ hiện tại, fallback về vi rồi en

   Nhờ fallback này, các module chưa dịch vẫn render bình thường (hiện tiếng Việt).
   ------------------------------------------------------------------------- */

export const LangContext = createContext('vi');
export const useLang = () => useContext(LangContext);

/** Resolve một localized field theo ngôn ngữ. Backward-compatible với chuỗi thường. */
export function pick(field, lang) {
  if (field == null) return field;
  if (
    typeof field === 'object' &&
    !Array.isArray(field) &&
    ('vi' in field || 'en' in field)
  ) {
    return field[lang] ?? field.vi ?? field.en ?? '';
  }
  return field; // chuỗi / mảng thường → fallback nguyên trạng
}

/** Hook tiện dụng: trả về hàm tt(field) đã gắn sẵn ngôn ngữ hiện tại. */
export function useT() {
  const lang = useLang();
  return (field) => pick(field, lang);
}

/** Bảng chuỗi UI dùng chung cho các view (chrome, nút, tiêu đề). */
export const UI = {
  markLearned:   { vi: 'Đánh dấu đã học',  en: 'Mark as learned' },
  backToLessons: { vi: '← Quay lại Lessons', en: '← Back to Lessons' },
  read:          { vi: 'Đọc →',             en: 'Read →' },
  lessonsUnit:   { vi: 'bài',               en: 'lessons' },
  openToView:    { vi: 'Mở để xem lý thuyết & ví dụ.', en: 'Open to view theory & examples.' },
  lessonsTitle:  { vi: 'Bài học & Tài liệu', en: 'Lessons & Materials' },
  lessonsDesc:   {
    vi: 'Khám phá bộ bách khoa toàn thư Data Analytics. Chọn một chủ đề để đọc bài học chi tiết.',
    en: 'Browse the comprehensive encyclopedia of Data Analytics. Select a topic to read the detailed lesson.',
  },
  searchPh:      { vi: 'Tìm trong các bài học…', en: 'Search across lessons…' },
  reviseTitle:   { vi: 'Ôn tập & Cheat Sheets', en: 'Revision & Cheat Sheets' },
  reviseDesc:    { vi: 'Tham chiếu nhanh cho phỏng vấn và công việc hằng ngày.', en: 'Quick references for interviews and daily tasks.' },
  roadmapTitle:  { vi: 'Lộ trình Data Analyst', en: 'The Data Analyst Roadmap' },
  roadmapDesc:   {
    vi: 'Học theo lộ trình tuần tự này sẽ giúp bạn xây nền tảng vững nhất. Đừng vội học Python khi chưa rành Excel và Business.',
    en: 'Following this sequential roadmap builds the strongest foundation. Don’t rush into Python before mastering Excel and Business.',
  },
  step:          { vi: 'BƯỚC',  en: 'STEP' },
  viewModule:    { vi: 'Xem bài học thuộc học phần này', en: 'View lessons in this module' },
  langLabel:     { vi: 'Ngôn ngữ', en: 'Language' },
};
