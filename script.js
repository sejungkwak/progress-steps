document.querySelector('.next').addEventListener('click', () => {
    document.querySelectorAll('.active').forEach((circle) => {
        circle.nextElementSibling.classList.add('active');
        circle.classList.add('bar2');
    });
    if (document.querySelector('.prev').classList.contains('disabled') === true) { 
        document.querySelector('.disabled').classList.remove('disabled');};
    if (document.querySelectorAll('.circles')[3].classList.contains('active') === true) {
        document.querySelector('.next').classList.add('disabled');};
})

document.querySelector('.prev').addEventListener('click', () => {
    if (document.querySelectorAll('.circles')[3].classList.contains('active')) {
        document.querySelectorAll('.circles')[3].classList.remove('active');
        document.querySelectorAll('.circles')[2].classList.remove('bar2');
        document.querySelector('.next').classList.remove('disabled');
    } else if (document.querySelectorAll('.circles')[2].classList.contains('active')) {
        document.querySelectorAll('.circles')[2].classList.remove('active');
        document.querySelectorAll('.circles')[1].classList.remove('bar2');
    } else if (document.querySelectorAll('.circles')[1].classList.contains('active')) {
        document.querySelectorAll('.circles')[1].classList.remove('active');
        document.querySelectorAll('.circles')[0].classList.remove('bar2');
        document.querySelector('.prev').classList.add('disabled');
    }
})