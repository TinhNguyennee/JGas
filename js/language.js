const translations = {
    en: {
        home: "Home",
        about: "About",
        posts: "Posts",
        contact: "Contact",
        "hero-title": "Discover safe gas stove products",
        "hero-description": "JGas - Accompanying every meal",
        "hero-btn": "View products",
        "recent-posts": "Recent Posts",
        "card1-title": "Safe Gas Stove",
        "card1-description": "Learn about safe gas stoves for your family.",
        "card1-btn": "Read more",
        "card2-title": "Quick Cooking Tips",
        "card2-description": "Small tips to help you cook quickly and efficiently.",
        "card2-btn": "Read more",
        "card3-title": "Family Meals",
        "card3-description": "Discover traditional dishes for family meals.",
        "card3-btn": "Read more",
        "address": "Address: 123 ABC Street, XYZ City",
        "email": "Email: support@jgas.com",
        "phone": "Phone: (+84) 123 456 789",
        "connect": "Connect with us",
        "info": "Information",
        "warranty-policy": "Warranty Policy",
        "terms-of-use": "Terms of Use",
        "contact-us": "Contact Us",
        "subscribe": "Subscribe",
        "subscribe-description": "You will receive our latest updates via Email",
        "subscribe-btn": "Subscribe",
        "email-placeholder": "Your Email",
        "search-placeholder": "Search",
        "about-title": "About JGas",
        "about-description": "JGas is a leading company in providing safe and high-quality gas stove products. We are committed to bringing customers the best products and excellent service."
    },
    vi: {
        home: "Trang chủ",
        about: "Giới thiệu",
        posts: "Bài viết",
        contact: "Liên hệ",
        "hero-title": "Khám phá các sản phẩm bếp gas an toàn",
        "hero-description": "JGas - Đồng hành cùng mọi bữa ăn của bạn",
        "hero-btn": "Xem sản phẩm",
        "recent-posts": "Bài viết gần đây",
        "card1-title": "Bếp gas an toàn",
        "card1-description": "Tìm hiểu các loại bếp gas an toàn cho gia đình bạn.",
        "card1-btn": "Xem thêm",
        "card2-title": "Mẹo nấu ăn nhanh",
        "card2-description": "Những mẹo nhỏ giúp bạn nấu ăn nhanh chóng và hiệu quả.",
        "card2-btn": "Xem thêm",
        "card3-title": "Món ăn gia đình",
        "card3-description": "Khám phá các món ăn truyền thống cho bữa cơm gia đình.",
        "card3-btn": "Xem thêm",
        "address": "Địa chỉ: 123 Đường ABC, Thành phố XYZ",
        "email": "Email: support@jgas.com",
        "phone": "Số điện thoại: (+84) 123 456 789",
        "connect": "Kết nối với chúng tôi",
        "info": "Thông tin",
        "warranty-policy": "Chính sách bảo hành",
        "terms-of-use": "Điều khoản sử dụng",
        "contact-us": "Liên hệ với chúng tôi",
        "subscribe": "Đăng ký",
        "subscribe-description": "Bạn sẽ nhận được thông báo mới của chúng tôi qua Email",
        "subscribe-btn": "Đăng ký",
        "email-placeholder": "Email của bạn",
        "search-placeholder": "Tìm kiếm",
        "about-title": "Giới thiệu về JGas",
        "about-description": "JGas là công ty hàng đầu trong lĩnh vực cung cấp các sản phẩm bếp gas an toàn và chất lượng cao. Chúng tôi cam kết mang đến cho khách hàng những sản phẩm tốt nhất và dịch vụ hoàn hảo."

    }
};

let currentLang = localStorage.getItem('lang') || 'vi';

function switchLanguage() {
    currentLang = currentLang === "vi" ? "en" : "vi";
    localStorage.setItem('lang', currentLang);
    updateLanguage();
}

function updateLanguage() {
    document.querySelectorAll("[data-lang]").forEach(element => {
        const key = element.getAttribute("data-lang");
        element.textContent = translations[currentLang][key];
    });
    document.querySelectorAll("[data-lang-placeholder]").forEach(element => {
        const key = element.getAttribute("data-lang-placeholder");
        element.setAttribute("placeholder", translations[currentLang][key]);
    });
}

// Cập nhật ngôn ngữ khi trang được tải
document.addEventListener("DOMContentLoaded", updateLanguage);