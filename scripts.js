function toggleTheme() {
    // 切换 "dark-mode" 类
    document.body.classList.toggle('dark-mode');
    
    // 切换按钮的图标
    const button = document.querySelector('.theme-toggle');
    if (document.body.classList.contains('dark-mode')) {
        button.textContent = '🌞'; // 显示太阳图标
    } else {
        button.textContent = '🌙'; // 显示月亮图标
    }
}
