function sideBar() {
    document.getElementById('sideMenu').classList.toggle('active');
};

function change(x) {
    x.classList.toggle("change");
    sideBar();
};