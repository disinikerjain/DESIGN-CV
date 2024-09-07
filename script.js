document.addEventListener('DOMContentLoaded', () => {
    const cvAtsBtn = document.getElementById('cv-ats');
    const cvKreatifBtn = document.getElementById('cv-kreatif');
    const imageContainer = document.getElementById('image-container');
    const confirmation = document.getElementById('confirmation');
    const selectedType = document.getElementById('selected-type');
    const imageCount = document.getElementById('image-count');
    const confirmBtn = document.getElementById('confirm-btn');
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');
    const modalCaption = document.getElementById('modal-caption');
    const closeBtn = document.querySelector('.close');

    function createImages(type, count) {
        imageContainer.innerHTML = '';
        for (let i = 1; i <= count; i++) {
            const imgWrapper = document.createElement('div');
            imgWrapper.className = 'img-wrapper';
            
            const img = document.createElement('img');
            img.src = `CV_${type}/${type}${i}.png`;
            img.alt = `${type} Image ${i}`;
            img.className = 'cv-image';
            img.loading = 'lazy';
            
            const number = document.createElement('span');
            number.className = 'image-number';
            number.textContent = i;
            
            imgWrapper.appendChild(img);
            imgWrapper.appendChild(number);
            imageContainer.appendChild(imgWrapper);

            imgWrapper.addEventListener('click', () => showModal(img.src, i, type));
        }
    }

    function showModal(src, number, type) {
        modalImg.src = src;
        modalCaption.textContent = `${type} Image ${number}`;
        modal.style.display = 'block';
    }

    closeBtn.onclick = () => modal.style.display = 'none';

    window.onclick = (event) => {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }

    function showConfirmation(type, count) {
        selectedType.textContent = type;
        imageCount.textContent = count;
        confirmation.style.display = 'block';
    }

    cvAtsBtn.addEventListener('click', () => {
        createImages('ATS', 22);
        showConfirmation('CV ATS', 22);
    });

    cvKreatifBtn.addEventListener('click', () => {
        createImages('KREATIF', 50);
        showConfirmation('CV Kreatif', 50);
    });

    confirmBtn.addEventListener('click', () => {
        imageContainer.innerHTML = '';
        confirmation.style.display = 'none';
        alert('Terima kasih telah memilih. Silakan lanjutkan ke langkah berikutnya.');
    });
});

document.addEventListener('DOMContentLoaded', () => {
    // ... (kode lainnya tetap sama)

    function createImages(type, count) {
        imageContainer.innerHTML = '';
        for (let i = 1; i <= count; i++) {
            const imgWrapper = document.createElement('div');
            imgWrapper.className = 'img-wrapper';
            
            const img = document.createElement('img');
            img.src = `images/CV_${type}/${type}${i}.png`; // Pastikan path ini benar
            img.alt = `${type} Image ${i}`;
            img.className = 'cv-image';
            img.loading = 'lazy';
            
            const number = document.createElement('span');
            number.className = 'image-number';
            number.textContent = i;
            
            imgWrapper.appendChild(img);
            imgWrapper.appendChild(number);
            imageContainer.appendChild(imgWrapper);

            imgWrapper.addEventListener('click', () => showModal(img.src, i, type));
        }
    }

    // ... (kode lainnya tetap sama)
});