// Current year for footer
document.getElementById('current-year').textContent = new Date().getFullYear();

// Show more hobbies function
function showMoreHobbies() {
    const moreHobbies = document.getElementById('more-hobbies');
    const hobbyButton = document.getElementById('hobby-button');
    
    if (moreHobbies.classList.contains('hidden')) {
        moreHobbies.classList.remove('hidden');
        hobbyButton.textContent = 'ဝါသနာများကိုဖျောက်မယ်';
    } else {
        moreHobbies.classList.add('hidden');
        hobbyButton.textContent = 'နောက်ထပ်ဝါသနာများ';
    }
}

// Image gallery functionality (can be expanded)
const schoolImage = document.getElementById('school-image');
schoolImage.addEventListener('click', function() {
    alert('ကျွန်မရဲ့ကျောင်းကိုကြည့်ရှုပေးတာကျေးဇူးတင်ပါတယ်!');
});

// Change header color on scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.backgroundColor = '#2E7D32';
    } else {
        header.style.backgroundColor = '#4CAF50';
    }
});