M.AutoInit();
document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('#dropnavbar');
    M.Dropdown.init(elems, {
        coverTrigger: false,
        constrainWidth: false
    });
});