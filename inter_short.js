document.addEventListener('DOMContentLoaded', () => {
    const essentialList = ['여권', '유심/포켓 와이파이', '신분증', '국제면허증', '현지화폐', '신용카드', '우산/우비', '휴지'];
    const clothesList = ['상의', '하의', '속옷', '양말', '모자', '신발(슬리퍼,운동화)'];
    const beautyList = ['치약,칫솔', '클렌징 용품', '샴푸,린스', '바디워시,샤워타월', '빗,머리끈', '면도기', '수건', '썬크림', '메이크업 화장품'];
    const electroList = ['카메라', '충전기', '에어팟,이어폰', '보조배터리', '헤어드라이기', '고데기'];
    const printoutList = ['여권사본', '비자', '항공티켓', '각종 바우처', '여행자 보험'];
    const othersList = ['멀티 어댑터', '샤워기 필터', '우산,우비', '휴지/물티슈', '비닐봉지,지퍼팩'];

    loadChecklist('essential-list', essentialList);
    loadChecklist('clothes-list', clothesList);
    loadChecklist('beauty-list', beautyList);
    loadChecklist('electro-list', electroList);
    loadChecklist('printout-list', printoutList);
    loadChecklist('others-list', othersList);

    const addButtonList = document.querySelectorAll(".button-add");

    addButtonList.forEach(button => {
        button.addEventListener("click", function() {
            const section = button.closest('.checklist-section');
            const listId = section.getAttribute('data-list') + "-list";
            const inputField = section.querySelector('.form-control');
            const list = document.getElementById(listId);
            
            const taskValue = inputField.value;
            if (taskValue === "") return alert("항목을 입력해주세요!");

            const li = document.createElement('li');
            li.className = 'list-group-item';
            li.innerHTML = `<input class="form-check-input me-1" type="checkbox" value=""> ${taskValue}`;
            list.appendChild(li);
            inputField.value = "";
        });
    });

    document.getElementById('mountain-box').addEventListener('click', () => {
        toggleChecklist('mountain-list');
    });
    document.getElementById('sea-box').addEventListener('click', () => {
        toggleChecklist('sea-list');
    });
    document.getElementById('city-box').addEventListener('click', () => {
        toggleChecklist('city-list');
    });
});

const loadChecklist = (listId, items)  => {
    const list = document.getElementById(listId);
    items.forEach(item => {
        const li = document.createElement('li');
        li.className = 'list-group-item';
        li.innerHTML = `<input class="form-check-input me-1" type="checkbox" value=""> ${item}`;
        list.appendChild(li);
    });
}

const toggleChecklist = (listId) => {
    const list = document.getElementById(listId);
    list.classList.toggle('d-none');
}
