// ===================================
// Photo Upload Handling
// ===================================
let currentChildPhoto = null;

function handlePhotoSelect(e) {
    const file = e.target.files[0];
    if (!file) return;

    if (file.size > 1024 * 1024) {
        alert(currentLanguage === 'ar' ? 'حجم الصورة يجب أن يكون أقل من 1 ميجابايت' : 'Photo size must be less than 1MB');
        return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
        const img = new Image();
        img.onload = () => {
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            const maxSize = 200;
            let width = img.width;
            let height = img.height;
            if (width > height) {
                if (width > maxSize) { height *= maxSize / width; width = maxSize; }
            } else {
                if (height > maxSize) { width *= maxSize / height; height = maxSize; }
            }
            canvas.width = width;
            canvas.height = height;
            ctx.drawImage(img, 0, 0, width, height);
            const base64 = canvas.toDataURL('image/jpeg', 0.8);
            currentChildPhoto = base64;
            const photoPreview = document.getElementById('photoPreview');
            photoPreview.innerHTML = `<img src="${base64}" alt="Preview">`;
            document.getElementById('removePhoto').style.display = 'block';
        };
        img.src = event.target.result;
    };
    reader.readAsDataURL(file);
}

function handlePhotoRemove() {
    currentChildPhoto = null;
    document.getElementById('photoPreview').innerHTML = '';
    document.getElementById('childPhoto').value = '';
    document.getElementById('removePhoto').style.display = 'none';
}

// ===================================
// URL Linkification
// ===================================
function linkifyText(text) {
    if (!text) return '';
    const escaped = text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#039;');
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    return escaped.replace(urlRegex, (url) => `<a href="${url}" target="_blank" rel="noopener noreferrer" class="mission-link">${url}</a>`);
}

// ===================================
// Privacy: Basic Encryption/Decryption
// ===================================
function encryptData(data, password) {
    if (!password) return JSON.stringify(data);
    const json = JSON.stringify(data);
    let result = '';
    for (let i = 0; i < json.length; i++) {
        result += String.fromCharCode(json.charCodeAt(i) ^ password.charCodeAt(i % password.length));
    }
    return btoa(unescape(encodeURIComponent(result)));
}

function decryptData(encoded, password) {
    if (!password) return JSON.parse(encoded);
    try {
        const decoded = decodeURIComponent(escape(atob(encoded)));
        let result = '';
        for (let i = 0; i < decoded.length; i++) {
            result += String.fromCharCode(decoded.charCodeAt(i) ^ password.charCodeAt(i % password.length));
        }
        return JSON.parse(result);
    } catch (e) {
        throw new Error('Invalid password or corrupted data');
    }
}

// ===================================
// Export/Import Data
// ===================================
function exportData() {
    const data = { children, missions, exportDate: new Date().toISOString() };
    const password = prompt(currentLanguage === 'ar' ? 'أدخل كلمة مرور لحماية ملف النسخة الاحتياطية (اختياري):' : 'Enter a password to protect the backup (optional):');
    const encrypted = encryptData(data, password);
    const blob = new Blob([encrypted], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `mission-tracker-${Date.now()}.backup`;
    a.click();
    URL.revokeObjectURL(url);
}

function handleImportFile(e) {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
        try {
            let content = event.target.result;
            let data;
            try {
                data = JSON.parse(content); // Try raw JSON first
            } catch {
                const password = prompt(currentLanguage === 'ar' ? 'تم تشفير هذا الملف. أدخل كلمة المرور:' : 'This file is encrypted. Enter password:');
                data = decryptData(content, password);
            }
            if (!data.children || !data.missions) throw new Error('Invalid structure');
            if (confirm(currentLanguage === 'ar' ? 'هل تريد استيراد البيانات؟ سيتم استبدال جميع البيانات الحالية.' : 'Import data? This will replace all current data.')) {
                children = data.children;
                missions = data.missions;
                saveToLocalStorage();
                render();
            }
        } catch (error) {
            alert(currentLanguage === 'ar' ? 'فشل استيراد البيانات: ' + error.message : 'Import failed: ' + error.message);
        }
    };
    reader.readAsText(file);
    e.target.value = '';
}

// ===================================
// QR Sync Implementation
// ===================================
function showQRSync() {
    const data = { children, missions };
    const json = JSON.stringify(data);
    const encoded = btoa(unescape(encodeURIComponent(json)));

    // Check if data is too big for QR (approx 2KB max for reliable scan)
    if (encoded.length > 2000) {
        alert(currentLanguage === 'ar' ? 'البيانات كبيرة جداً للمزامنة عبر QR. استخدم خيار التصدير بدلاً من ذلك.' : 'Data too large for QR sync. Use Export option instead.');
        return;
    }

    const qr = qrcode(0, 'M');
    qr.addData(encoded);
    qr.make();
    document.getElementById('qrcode').innerHTML = qr.createImgTag(5);
    document.getElementById('qrModal').classList.add('active');
}

function closeQRModal() {
    document.getElementById('qrModal').classList.remove('active');
}

// ===================================
// P2P Sync (Placeholder)
// ===================================
function initiateP2PSync() {
    alert(currentLanguage === 'ar' ? 'خاصية المزامنة P2P قيد التطوير. قريباً!' : 'P2P Sync feature coming soon!');
}
