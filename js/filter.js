document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.filter-btn');
    const items = document.querySelectorAll('.gallery-wrapper');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');

            buttons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            items.forEach(item => {
                if (filter === 'all' || item.classList.contains(filter)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    // Show all by default
    document.querySelector('.filter-btn[data-filter="all"]').click();
});
