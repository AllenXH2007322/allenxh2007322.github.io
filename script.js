// 切换亮暗模式
const themeToggleButton = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');

// 检查本地存储中的模式设置
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
    themeIcon.classList.remove('fa-moon');
    themeIcon.classList.add('fa-sun');
}

// 切换模式
themeToggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    
    // 切换图标
    if (document.body.classList.contains('dark-mode')) {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
        localStorage.setItem('theme', 'dark');  // 保存到本地存储
    } else {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
        localStorage.removeItem('theme');  // 删除本地存储的模式设置
    }
});

// 监听标签页切换事件，统一更改标题
const originalTitle = document.title; // 保存原始标题
const newTitle = "你切换到了其他网页"; // 切换到其他网页时显示的标题

document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        // 当标签页切换出去时，统一更改为同一个标题
        document.title = newTitle;
    } else {
        // 当标签页重新激活时，恢复原始标题
        document.title = originalTitle;
    }
});
