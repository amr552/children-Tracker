// ===================================
// Multi-Language Support
// ===================================
const translations = {
    ar: {
        app: {
            title: 'متتبع مهام الأطفال'
        },
        buttons: {
            addChild: 'إضافة طفل',
            addMission: 'إضافة مهمة',
            save: 'حفظ',
            cancel: 'إلغاء',
            delete: 'حذف',
            edit: 'تعديل',
            complete: 'إكمال'
        },
        modal: {
            addChild: 'إضافة طفل جديد',
            editChild: 'تعديل الطفل',
            addMission: 'إضافة مهمة جديدة',
            editMission: 'تعديل المهمة',
            confirmDelete: 'تأكيد الحذف'
        },
        form: {
            childName: 'اسم الطفل',
            avatarColor: 'لون الصورة الرمزية',
            selectChild: 'اختر الطفل',
            missionTitle: 'عنوان المهمة',
            description: 'الوصف (اختياري)',
            category: 'الفئة',
            icon: 'الأيقونة',
            startTime: 'وقت البدء (اختياري)',
            endTime: 'وقت الانتهاء (اختياري)',
            points: 'النقاط / المكافأة (اختياري)'
        },
        categories: {
            chores: 'الأعمال المنزلية',
            homework: 'الواجبات المدرسية',
            sports: 'الرياضة',
            music: 'الموسيقى',
            bedtime: 'وقت النوم',
            reading: 'القراءة'
        },
        empty: {
            title: 'ابدأ بإضافة طفل',
            description: 'أضف أطفالك وابدأ في تتبع مهامهم اليومية'
        },
        messages: {
            deleteChild: 'هل أنت متأكد من حذف هذا الطفل؟ سيتم حذف جميع مهامه أيضاً.',
            deleteMission: 'هل أنت متأكد من حذف هذه المهمة؟'
        },
        tooltips: {
            language: 'تغيير اللغة',
            analytics: 'التحليلات والمتابعة',
            export: 'تصدير البيانات',
            import: 'استيراد البيانات',
            sync: 'مزامنة عبر QR',
            addChild: 'إضافة طفل جديد',
            addMission: 'إضافة مهمة جديدة',
            edit: 'تعديل',
            delete: 'حذف',
            complete: 'إكمال',
            close: 'إغلاق',
            plus: 'إضافة مهمة'
        }
    },
    en: {
        app: {
            title: 'Children Mission Tracker'
        },
        buttons: {
            addChild: 'Add Child',
            addMission: 'Add Mission',
            save: 'Save',
            cancel: 'Cancel',
            delete: 'Delete',
            edit: 'Edit',
            complete: 'Complete'
        },
        modal: {
            addChild: 'Add New Child',
            editChild: 'Edit Child',
            addMission: 'Add New Mission',
            editMission: 'Edit Mission',
            confirmDelete: 'Confirm Delete'
        },
        form: {
            childName: 'Child Name',
            avatarColor: 'Avatar Color',
            selectChild: 'Select Child',
            missionTitle: 'Mission Title',
            description: 'Description (optional)',
            category: 'Category',
            icon: 'Icon',
            startTime: 'Start Time (optional)',
            endTime: 'End Time (optional)',
            points: 'Points / Reward (optional)'
        },
        categories: {
            chores: 'Chores',
            homework: 'Homework',
            sports: 'Sports',
            music: 'Music',
            bedtime: 'Bedtime',
            reading: 'Reading'
        },
        empty: {
            title: 'Start by Adding a Child',
            description: 'Add your children and start tracking their daily missions'
        },
        messages: {
            deleteChild: 'Are you sure you want to delete this child? All their missions will also be deleted.',
            deleteMission: 'Are you sure you want to delete this mission?'
        },
        tooltips: {
            language: 'Change Language',
            analytics: 'Analytics & Tracking',
            export: 'Export Data',
            import: 'Import Data',
            sync: 'Sync via QR',
            addChild: 'Add New Child',
            addMission: 'Add New Mission',
            edit: 'Edit',
            delete: 'Delete',
            complete: 'Complete',
            close: 'Close',
            plus: 'Add Mission'
        }
    },
    tr: {
        app: {
            title: 'Çocuk Görev Takipçisi'
        },
        buttons: {
            addChild: 'Çocuk Ekle',
            addMission: 'Görev Ekle',
            save: 'Kaydet',
            cancel: 'İptal',
            delete: 'Sil',
            edit: 'Düzenle',
            complete: 'Tamamla'
        },
        modal: {
            addChild: 'Yeni Çocuk Ekle',
            editChild: 'Çocuğu Düzenle',
            addMission: 'Yeni Görev Ekle',
            editMission: 'Görevi Düzenle',
            confirmDelete: 'Silmeyi Onayla'
        },
        form: {
            childName: 'Çocuk Adı',
            avatarColor: 'Avatar Rengi',
            selectChild: 'Çocuk Seç',
            missionTitle: 'Görev Başlığı',
            description: 'Açıklama (isteğe bağlı)',
            category: 'Kategori',
            icon: 'İkon',
            startTime: 'Başlangıç Saati (isteğe bağlı)',
            endTime: 'Bitiş Saati (isteğe bağlı)',
            points: 'Puan / Ödül (isteğe bağlı)'
        },
        categories: {
            chores: 'Ev İşleri',
            homework: 'Ödev',
            sports: 'Spor',
            music: 'Müzik',
            bedtime: 'Uyku Zamanı',
            reading: 'Okuma'
        },
        empty: {
            title: 'Bir Çocuk Ekleyerek Başlayın',
            description: 'Çocuklarınızı ekleyin ve günlük görevlerini takip etmeye başlayın'
        },
        messages: {
            deleteChild: 'Bu çocuğu silmek istediğinizden emin misiniz? Tüm görevleri de silinecektir.',
            deleteMission: 'Bu görevi silmek istediğinizden emin misiniz?'
        },
        tooltips: {
            language: 'Dili Değiştir',
            analytics: 'Analiz ve Takip',
            export: 'Veriyi Dışا Aktar',
            import: 'Veriyi İçe Aktar',
            sync: 'QR ile Senkronize Et',
            addChild: 'Yeni Çocuk Ekle',
            addMission: 'Yeni Görev Ekle',
            edit: 'Düzenle',
            delete: 'Sil',
            complete: 'Tamamla',
            close: 'Kapat',
            plus: 'Görev Ekle'
        }
    },
    es: {
        app: {
            title: 'Rastreador de Misiones Infantiles'
        },
        buttons: {
            addChild: 'Agregar Niño',
            addMission: 'Agregar Misión',
            save: 'Guardar',
            cancel: 'Cancelar',
            delete: 'Eliminar',
            edit: 'Editar',
            complete: 'Completar'
        },
        modal: {
            addChild: 'Agregar Nuevo Niño',
            editChild: 'Editar Niño',
            addMission: 'Agregar Nueva Misión',
            editMission: 'Editar Misión',
            confirmDelete: 'Confirmar Eliminación'
        },
        form: {
            childName: 'Nombre del Niño',
            avatarColor: 'Color del Avatar',
            selectChild: 'Seleccionar Niño',
            missionTitle: 'Título de la Misión',
            description: 'Descripción (opcional)',
            category: 'Categoría',
            icon: 'Icono',
            startTime: 'Hora de Inicio (opcional)',
            endTime: 'Hora de Finalización (opcional)',
            points: 'Puntos / Recompensa (opcional)'
        },
        categories: {
            chores: 'Tareas del Hogar',
            homework: 'Tarea Escolar',
            sports: 'Deportes',
            music: 'Música',
            bedtime: 'Hora de Dormir',
            reading: 'Lectura'
        },
        empty: {
            title: 'Comienza Agregando un Niño',
            description: 'Agrega a tus hijos y comienza a rastrear sus misiones diarias'
        },
        messages: {
            deleteChild: '¿Estás seguro de que quieres eliminar este niño? Todas sus misiones también se eliminarán.',
            deleteMission: '¿Estás seguro de que quieres eliminar esta misión?'
        },
        tooltips: {
            language: 'Cambiar idioma',
            analytics: 'Análisis y Seguimiento',
            export: 'Exportar Datos',
            import: 'Importar Datos',
            sync: 'Sincronizar mediante QR',
            addChild: 'Agregar Nuevo Niño',
            addMission: 'Agregar Nueva Misión',
            edit: 'Editar',
            delete: 'Eliminar',
            complete: 'Completar',
            close: 'Cerrar',
            plus: 'Agregar Misión'
        }
    }
};

// ===================================
// Application State
// ===================================
let currentLanguage = 'ar';
let children = [];
let missions = [];
let editingChildId = null;
let editingMissionId = null;
let deleteCallback = null;

// ===================================
// Initialization
// ===================================
document.addEventListener('DOMContentLoaded', () => {
    loadFromLocalStorage();
    initializeEventListeners();
    updateLanguage(currentLanguage);
    render();
});

// ===================================
// Event Listeners
// ===================================
function initializeEventListeners() {
    // Language dropdown toggle
    const langToggle = document.getElementById('langToggle');
    const langMenu = document.getElementById('langMenu');

    langToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        langMenu.classList.toggle('show');
    });

    document.addEventListener('click', () => {
        langMenu.classList.remove('show');
    });

    // Language items
    document.querySelectorAll('.lang-item').forEach(item => {
        item.addEventListener('click', () => {
            const lang = item.dataset.lang;
            updateLanguage(lang);
        });
    });

    // Add child buttons
    document.getElementById('addChildBtn').addEventListener('click', openAddChildModal);
    document.getElementById('addChildBtnEmpty').addEventListener('click', openAddChildModal);

    // Child modal
    document.getElementById('closeChildModal').addEventListener('click', closeChildModal);
    document.getElementById('cancelChildBtn').addEventListener('click', closeChildModal);
    document.getElementById('childForm').addEventListener('submit', handleChildSubmit);

    // Mission modal
    document.getElementById('closeMissionModal').addEventListener('click', closeMissionModal);
    document.getElementById('cancelMissionBtn').addEventListener('click', closeMissionModal);
    document.getElementById('missionForm').addEventListener('submit', handleMissionSubmit);

    // Delete modal
    document.getElementById('closeDeleteModal').addEventListener('click', closeDeleteModal);
    document.getElementById('cancelDeleteBtn').addEventListener('click', closeDeleteModal);
    document.getElementById('confirmDeleteBtn').addEventListener('click', handleDelete);

    // FAB
    document.getElementById('fabBtn').addEventListener('click', openAddMissionModal);

    // Close modals on overlay click
    document.querySelectorAll('.modal-overlay').forEach(overlay => {
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) {
                closeAllModals();
            }
        });
    });

    // Photo upload
    const photoInput = document.getElementById('childPhoto');
    if (photoInput) {
        photoInput.addEventListener('change', handlePhotoSelect);
    }

    const removePhotoBtn = document.getElementById('removePhoto');
    if (removePhotoBtn) {
        removePhotoBtn.addEventListener('click', handlePhotoRemove);
    }

    // Export/Import/Analytics buttons
    document.getElementById('exportDataBtn').addEventListener('click', exportData);
    document.getElementById('importDataBtn').addEventListener('click', () => {
        document.getElementById('importFileInput').click();
    });
    document.getElementById('importFileInput').addEventListener('change', handleImportFile);

    // QR Sync
    const shareBtn = document.getElementById('analyticsBtn').previousElementSibling; // Assuming export/import/sync group
    // Let's explicitly add a syncBtn in index.html for clarity, but for now I'll use the 'exportDataBtn' and 'importDataBtn'
    // I already added analytics, export, import. Let's add Sync button to index.html in next step.

    document.getElementById('syncBtn').addEventListener('click', showQRSync);
    document.getElementById('closeQRModal').addEventListener('click', closeQRModal);
    document.getElementById('closeQRBtn').addEventListener('click', closeQRModal);

    document.getElementById('analyticsBtn').addEventListener('click', () => {
        window.location.href = 'analytics.html';
    });
}

// ===================================
// Language Management
// ===================================
function updateLanguage(lang) {
    currentLanguage = lang;

    // Update HTML lang and dir attributes
    const html = document.documentElement;
    html.setAttribute('lang', lang);
    html.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

    // Update active language item
    document.querySelectorAll('.lang-item').forEach(item => {
        item.classList.toggle('active', item.dataset.lang === lang);
    });

    // Update all translatable elements
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.dataset.i18n;
        const translation = getTranslation(key);
        if (translation) {
            element.textContent = translation;
        }
    });

    // Update all elements with localized titles
    document.querySelectorAll('[data-i18n-title]').forEach(element => {
        const key = element.dataset.i18nTitle;
        const translation = getTranslation(key);
        if (translation) {
            element.setAttribute('title', translation);
        }
    });

    // Update select options
    updateSelectOptions();

    // Save language preference
    localStorage.setItem('language', lang);
}

function getTranslation(key) {
    const keys = key.split('.');
    let value = translations[currentLanguage];
    for (const k of keys) {
        value = value?.[k];
    }
    return value;
}

function updateSelectOptions() {
    // Update category options
    const categorySelect = document.getElementById('missionCategory');
    if (categorySelect) {
        Array.from(categorySelect.options).forEach(option => {
            const key = option.dataset.i18n;
            if (key) {
                option.textContent = getTranslation(key);
            }
        });
    }
}

// ===================================
// Data Management
// ===================================
function loadFromLocalStorage() {
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage) {
        currentLanguage = savedLanguage;
    }

    const savedChildren = localStorage.getItem('children');
    if (savedChildren) {
        children = JSON.parse(savedChildren);
    }

    const savedMissions = localStorage.getItem('missions');
    if (savedMissions) {
        missions = JSON.parse(savedMissions);
    }
}

function saveToLocalStorage() {
    localStorage.setItem('children', JSON.stringify(children));
    localStorage.setItem('missions', JSON.stringify(missions));
}

// ===================================
// Child Management
// ===================================
function openAddChildModal() {
    editingChildId = null;
    currentChildPhoto = null;
    document.getElementById('childModalTitle').textContent = getTranslation('modal.addChild');
    document.getElementById('childForm').reset();
    document.getElementById('photoPreview').innerHTML = '';
    document.getElementById('removePhoto').style.display = 'none';
    document.getElementById('childModal').classList.add('active');
}

function openEditChildModal(childId) {
    editingChildId = childId;
    const child = children.find(c => c.id === childId);
    if (!child) return;

    document.getElementById('childModalTitle').textContent = getTranslation('modal.editChild');
    document.getElementById('childName').value = child.name;
    document.querySelector(`input[name="childColor"][value="${child.color}"]`).checked = true;

    // Show existing photo if available
    currentChildPhoto = child.photo || null;
    const photoPreview = document.getElementById('photoPreview');
    const removeBtn = document.getElementById('removePhoto');

    if (currentChildPhoto) {
        photoPreview.innerHTML = `<img src="${currentChildPhoto}" alt="Child photo">`;
        removeBtn.style.display = 'block';
    } else {
        photoPreview.innerHTML = '';
        removeBtn.style.display = 'none';
    }

    document.getElementById('childModal').classList.add('active');
}

function closeChildModal() {
    document.getElementById('childModal').classList.remove('active');
    editingChildId = null;
}

function handleChildSubmit(e) {
    e.preventDefault();

    const name = document.getElementById('childName').value.trim();
    const color = document.querySelector('input[name="childColor"]:checked').value;

    if (editingChildId) {
        // Edit existing child
        const child = children.find(c => c.id === editingChildId);
        if (child) {
            child.name = name;
            child.color = color;
            if (currentChildPhoto !== null) {
                child.photo = currentChildPhoto;
            }
        }
    } else {
        // Add new child
        const newChild = {
            id: Date.now().toString(),
            name,
            color
        };
        if (currentChildPhoto) {
            newChild.photo = currentChildPhoto;
        }
        children.push(newChild);
    }

    saveToLocalStorage();
    closeChildModal();
    render();
}

function deleteChild(childId) {
    deleteCallback = () => {
        children = children.filter(c => c.id !== childId);
        missions = missions.filter(m => m.childId !== childId);
        saveToLocalStorage();
        render();
    };

    document.getElementById('deleteMessage').textContent = getTranslation('messages.deleteChild');
    document.getElementById('deleteModal').classList.add('active');
}

// ===================================
// Mission Management
// ===================================
function openAddMissionModal(childId = null) {
    editingMissionId = null;
    document.getElementById('missionModalTitle').textContent = getTranslation('modal.addMission');
    document.getElementById('missionForm').reset();

    // Populate child select
    const childSelect = document.getElementById('missionChild');
    childSelect.innerHTML = children.map(child =>
        `<option value="${child.id}" ${child.id === childId ? 'selected' : ''}>${child.name}</option>`
    ).join('');

    document.getElementById('missionModal').classList.add('active');
}

function openEditMissionModal(missionId) {
    editingMissionId = missionId;
    const mission = missions.find(m => m.id === missionId);
    if (!mission) return;

    document.getElementById('missionModalTitle').textContent = getTranslation('modal.editMission');

    // Populate child select
    const childSelect = document.getElementById('missionChild');
    childSelect.innerHTML = children.map(child =>
        `<option value="${child.id}" ${child.id === mission.childId ? 'selected' : ''}>${child.name}</option>`
    ).join('');

    // Fill form
    document.getElementById('missionTitle').value = mission.title;
    document.getElementById('missionDescription').value = mission.description || '';
    document.getElementById('missionCategory').value = mission.category;
    document.getElementById('missionIcon').value = mission.icon;
    document.getElementById('missionStartTime').value = mission.startTime || '';
    document.getElementById('missionEndTime').value = mission.endTime || '';
    document.getElementById('missionPoints').value = mission.points || '';

    document.getElementById('missionModal').classList.add('active');
}

function closeMissionModal() {
    document.getElementById('missionModal').classList.remove('active');
    editingMissionId = null;
}

function handleMissionSubmit(e) {
    e.preventDefault();

    const childId = document.getElementById('missionChild').value;
    const title = document.getElementById('missionTitle').value.trim();
    const description = document.getElementById('missionDescription').value.trim();
    const category = document.getElementById('missionCategory').value;
    const icon = document.getElementById('missionIcon').value;
    const startTime = document.getElementById('missionStartTime').value;
    const endTime = document.getElementById('missionEndTime').value;
    const points = document.getElementById('missionPoints').value;

    if (editingMissionId) {
        // Edit existing mission
        const mission = missions.find(m => m.id === editingMissionId);
        if (mission) {
            mission.childId = childId;
            mission.title = title;
            mission.description = description;
            mission.category = category;
            mission.icon = icon;
            mission.startTime = startTime;
            mission.endTime = endTime;
            mission.points = points;
        }
    } else {
        // Add new mission
        const newMission = {
            id: Date.now().toString(),
            childId,
            title,
            description,
            category,
            icon,
            startTime,
            endTime,
            points,
            completed: false
        };
        missions.push(newMission);
    }

    saveToLocalStorage();
    closeMissionModal();
    render();
}

function toggleMissionComplete(missionId) {
    const mission = missions.find(m => m.id === missionId);
    if (mission) {
        mission.completed = !mission.completed;
        mission.completedAt = mission.completed ? new Date().toISOString() : null;
        saveToLocalStorage();
        render();
    }
}

function deleteMission(missionId) {
    deleteCallback = () => {
        missions = missions.filter(m => m.id !== missionId);
        saveToLocalStorage();
        render();
    };

    document.getElementById('deleteMessage').textContent = getTranslation('messages.deleteMission');
    document.getElementById('deleteModal').classList.add('active');
}

// ===================================
// Delete Modal
// ===================================
function closeDeleteModal() {
    document.getElementById('deleteModal').classList.remove('active');
    deleteCallback = null;
}

function handleDelete() {
    if (deleteCallback) {
        deleteCallback();
    }
    closeDeleteModal();
}

function closeAllModals() {
    closeChildModal();
    closeMissionModal();
    closeDeleteModal();
}

// ===================================
// Drag and Drop
// ===================================
function handleDragStart(e, missionId) {
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/plain', missionId);
    e.target.classList.add('dragging');
}

function handleDragEnd(e) {
    e.target.classList.remove('dragging');
}

function handleDragOver(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
}

function handleDrop(e, childId) {
    e.preventDefault();
    const missionId = e.dataTransfer.getData('text/plain');
    const mission = missions.find(m => m.id === missionId);

    if (mission && mission.childId !== childId) {
        mission.childId = childId;
        saveToLocalStorage();
        render();
    }
}

// ===================================
// Rendering
// ===================================
function render() {
    renderChildrenProfiles();
    renderMissionBoard();
    updateEmptyState();
}

function renderChildrenProfiles() {
    const container = document.getElementById('childrenProfiles');

    if (children.length === 0) {
        container.innerHTML = '';
        return;
    }

    container.innerHTML = children.map(child => {
        const avatarContent = child.photo
            ? `<img src="${child.photo}" alt="${child.name}">`
            : `<span class="avatar-initial">${child.name.charAt(0).toUpperCase()}</span>`;

        return `
        <div class="child-profile">
            <div class="child-avatar" style="background: ${child.color};">
                ${avatarContent}
                <button class="child-edit-btn" onclick="openEditChildModal('${child.id}')" title="${getTranslation('buttons.edit')}">
                    ✏️
                </button>
                <button class="child-delete-btn" onclick="deleteChild('${child.id}')" title="${getTranslation('buttons.delete')}">
                    🗑️
                </button>
            </div>
            <div class="child-name">${child.name}</div>
        </div>
    `}).join('');
}

function renderMissionBoard() {
    const container = document.getElementById('missionBoard');

    if (children.length === 0) {
        container.innerHTML = '';
        return;
    }

    container.innerHTML = children.map(child => {
        const childMissions = missions.filter(m => m.childId === child.id)
            .sort((a, b) => a.completed - b.completed);

        return `
            <div class="mission-column" 
                 ondragover="handleDragOver(event)" 
                 ondrop="handleDrop(event, '${child.id}')">
                <div class="column-header" style="border-color: ${child.color};">
                    <div class="column-title">
                        <div class="column-avatar" style="background: ${child.color};">
                            ${child.photo ? `<img src="${child.photo}" alt="${child.name}">` : child.name.charAt(0).toUpperCase()}
                        </div>
                        ${child.name}
                    </div>
                    <button class="add-mission-btn" onclick="openAddMissionModal('${child.id}')">
                        + ${getTranslation('buttons.addMission')}
                    </button>
                </div>
                <div class="missions-list">
                    ${childMissions.map(mission => renderMissionCard(mission)).join('')}
                </div>
            </div>
        `;
    }).join('');
}

function renderMissionCard(mission) {
    const timeDisplay = mission.startTime && mission.endTime
        ? `<div class="mission-time">⏰ ${mission.startTime} - ${mission.endTime}</div>`
        : mission.startTime
            ? `<div class="mission-time">⏰ ${mission.startTime}</div>`
            : '';

    const pointsDisplay = mission.points
        ? `<div class="mission-points">⭐ ${mission.points}</div>`
        : '';

    return `
        <div class="mission-card ${mission.completed ? 'completed' : ''}" 
             data-category="${mission.category}"
             draggable="true"
             ondragstart="handleDragStart(event, '${mission.id}')"
             ondragend="handleDragEnd(event)">
            <div class="mission-header">
                <div class="mission-icon" title="${mission.title}">${mission.icon}</div>
                <div class="mission-info">
                    <div class="mission-title">${mission.title}</div>
                    ${mission.description ? `<div class="mission-description">${linkifyText(mission.description)}</div>` : ''}
                    <div class="mission-meta">
                        ${timeDisplay}
                        ${pointsDisplay}
                    </div>
                </div>
                <div class="mission-actions">
                    <button class="mission-action-btn complete" 
                            onclick="toggleMissionComplete('${mission.id}')"
                            title="${getTranslation('buttons.complete')}">
                        ${mission.completed ? '✅' : '⭕'}
                    </button>
                    <button class="mission-action-btn edit" 
                            onclick="openEditMissionModal('${mission.id}')"
                            title="${getTranslation('buttons.edit')}">
                        ✏️
                    </button>
                    <button class="mission-action-btn delete" 
                            onclick="deleteMission('${mission.id}')"
                            title="${getTranslation('buttons.delete')}">
                        🗑️
                    </button>
                </div>
            </div>
        </div>
    `;
}

function updateEmptyState() {
    const emptyState = document.getElementById('emptyState');
    const missionBoard = document.getElementById('missionBoard');
    const childrenProfiles = document.getElementById('childrenProfiles');
    const fab = document.getElementById('fabBtn');

    if (children.length === 0) {
        emptyState.classList.add('active');
        missionBoard.style.display = 'none';
        childrenProfiles.style.display = 'none';
        fab.style.display = 'none';
    } else {
        emptyState.classList.remove('active');
        missionBoard.style.display = 'grid';
        childrenProfiles.style.display = 'flex';
        fab.style.display = 'flex';
    }
}
