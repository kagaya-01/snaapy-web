function closeSidebar() { 
    close = document.getElementById("close-sidebar");
    sidebar = document.getElementById('sidebar');
    sidebar.style.transform = 'translate(-20rem, 0)'; 
}

function openSidebar() { 
    close = document.getElementById("open-sidebar");
    sidebar = document.getElementById('sidebar');
    sidebar.style.transform = 'translate(0, 0)'; 
}