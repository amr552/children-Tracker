// Analytics Logic
let children = JSON.parse(localStorage.getItem('children') || '[]');
let missions = JSON.parse(localStorage.getItem('missions') || '[]');
let currentChild = children[0] || null;

document.addEventListener('DOMContentLoaded', () => {
    setupChildFilter();
    renderAnalytics();

    // Language dropdown toggle
    const langToggle = document.getElementById('langToggle');
    const langMenu = document.getElementById('langMenu');

    if (langToggle && langMenu) {
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
                localStorage.setItem('language', lang);
                window.location.reload(); // Simple way to update lang on analytics
            });
        });

        // Update titles on load based on current language
        updateTitles();
    }
});

function updateTitles() {
    const lang = document.documentElement.lang;
    const translations = {
        ar: { language: 'تغيير اللغة' },
        en: { language: 'Change Language' }
    };
    const t = translations[lang] || translations['ar'];
    document.querySelectorAll('[data-i18n-title]').forEach(el => {
        const key = el.dataset.i18nTitle; // Corrected dataset property access
        if (key === 'tooltips.language') el.setAttribute('title', t.language);
    });
}

function setupChildFilter() {
    const filter = document.getElementById('childFilter');
    if (children.length === 0) {
        filter.innerHTML = '<option value="">No children</option>';
        return;
    }
    filter.innerHTML = children.map(c => `<option value="${c.id}">${c.name}</option>`).join('');
    filter.addEventListener('change', (e) => {
        currentChild = children.find(c => c.id === e.target.value);
        renderAnalytics();
    });
}

function renderAnalytics() {
    if (!currentChild) return;

    updateUI();
    renderTree();
    renderChart();
    renderHabitTable();
}

function updateUI() {
    const month = new Date().toLocaleString('default', { month: 'long' });
    document.getElementById('monthTitle').textContent = month;

    // Calculate total percentage for the month
    const childMissions = missions.filter(m => m.childId === currentChild.id);
    const completedCount = childMissions.filter(m => m.completed).length;
    const totalCount = childMissions.length;
    const percentage = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;

    document.getElementById('totalPercentage').textContent = percentage + '%';

    // Update trees planted (e.g., 1 tree per 10 missions)
    const trees = Math.floor(completedCount / 5);
    const lang = document.documentElement.lang;
    const treeText = lang === 'ar' ? `لقد زرعت ${trees} أشجار هذا الشهر` : `You planted ${trees} trees this month`;
    document.getElementById('treeGrowthText').textContent = treeText;
}

function renderTree() {
    const container = document.getElementById('treeContainer');
    const childMissions = missions.filter(m => m.childId === currentChild.id);
    const completed = childMissions.filter(m => m.completed).length;

    // Growth stages: Seed -> Sprout -> Small Tree -> Full Tree
    let stage = 0;
    if (completed >= 2) stage = 1;
    if (completed >= 5) stage = 2;
    if (completed >= 10) stage = 3;

    let svg = '';
    if (stage === 0) { // Seed
        svg = `<svg viewBox="0 0 100 100" width="150" height="150"><circle cx="50" cy="80" r="5" fill="#8b4513"/></svg>`;
    } else if (stage === 1) { // Sprout
        svg = `<svg viewBox="0 0 100 100" width="150" height="150">
            <path d="M50 80 Q55 60 70 50" stroke="#4CAF50" stroke-width="3" fill="none"/>
            <path d="M50 80 Q45 60 30 50" stroke="#4CAF50" stroke-width="3" fill="none"/>
            <circle cx="70" cy="50" r="5" fill="#4CAF50"/>
            <circle cx="30" cy="50" r="5" fill="#4CAF50"/>
        </svg>`;
    } else { // Tree
        const scale = stage === 2 ? 0.7 : 1;
        const color = '#ffb6c1';
        svg = `<svg viewBox="0 0 200 200" width="250" height="250">
            <rect x="90" y="120" width="20" height="60" class="tree-trunk"/>
            <circle cx="100" cy="100" r="${50 * scale}" class="tree-leaves"/>
            <circle cx="70" cy="90" r="${30 * scale}" class="tree-leaves"/>
            <circle cx="130" cy="90" r="${30 * scale}" class="tree-leaves"/>
            <circle cx="100" cy="60" r="${40 * scale}" class="tree-leaves"/>
            ${completed >= 15 ? '<circle cx="100" cy="80" r="5" class="tree-flower"/>' : ''}
            ${completed >= 20 ? '<circle cx="80" cy="100" r="5" class="tree-flower"/>' : ''}
            ${completed >= 25 ? '<circle cx="120" cy="100" r="5" class="tree-flower"/>' : ''}
        </svg>`;
    }
    container.innerHTML = svg;
}

function renderChart() {
    const ctx = document.getElementById('completionChart').getContext('2d');
    const childMissions = missions.filter(m => m.childId === currentChild.id);

    // Mock data for weekly progress (Sun-Sat)
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const data = [15, 30, 45, 60, 20, 10, 5]; // Random progress percentages

    if (window.myChart) window.myChart.destroy();

    window.myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: days,
            datasets: [{
                label: 'Progress %',
                data: data,
                borderColor: '#ff6b9d',
                backgroundColor: 'rgba(255, 107, 157, 0.2)',
                fill: true,
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            scales: { y: { beginAtZero: true, max: 100 } }
        }
    });

    const row = document.getElementById('percentageRow');
    row.innerHTML = data.map(d => `<span>${d}%</span>`).join('');
}

function renderHabitTable() {
    const header = document.getElementById('habitHeader');
    const body = document.getElementById('habitBody');
    const childMissions = missions.filter(m => m.childId === currentChild.id);

    // Sample habits from missions
    const uniqueHabits = [...new Set(childMissions.map(m => m.title))];

    // Calendar days for currently weekly view
    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    header.innerHTML = '<th>Habit</th>' + days.map(d => `<th>${d}</th>`).join('');

    body.innerHTML = uniqueHabits.map(habit => {
        return `<tr>
            <td>${habit}</td>
            ${days.map(d => `<td><div class="habit-cell ${Math.random() > 0.5 ? 'checked' : ''}"></div></td>`).join('')}
        </tr>`;
    }).join('');
}
