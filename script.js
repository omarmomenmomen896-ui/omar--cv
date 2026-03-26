// رسالة ترحيب تظهر في الكونسول (للمبرمجين اللي زيك)
console.log("Welcome to Omar's Portfolio! 🚀");

// حركة: لما حد يدوس على الصورة، تظهر رسالة تشجيعية
document.querySelector('.profile-img').addEventListener('click', function() {
    alert("Keep Coding, Omar! The future is yours. ✨");
});

// إضافة تأثير بسيط عند التحميل
window.onload = function() {
    console.log("Site is fully loaded!");
};
