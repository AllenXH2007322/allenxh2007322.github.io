// 获取切换按钮
const themeToggle = document.getElementById('theme-toggle');

// 初始化主题
const currentTheme = localStorage.getItem('theme') || 'light';
if (currentTheme === 'dark') {
    document.body.setAttribute('data-theme', 'dark');
}

// 切换主题
themeToggle.addEventListener('click', () => {
    const newTheme = document.body.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    document.body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme); // 保存用户选择的主题
});

