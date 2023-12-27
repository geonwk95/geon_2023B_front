
document.addEventListener('DOMContentLoaded' , function(){

    // 문서 객체를 가져옵니다.
    const input = document.querySelector('#todo');
    const todoList = document.querySelector('#todo-list');
    const addButton = document.querySelector('#add-button');

    // 변수를 선언합니다.
    let keyCount = 0;

    // 함수를 선언합니다.
    const addTodo = function(){
        if( input.value.trim() === ''){
            alert('할 일을 입력해주세요.')
            console.log(addTodo);
            return;
        }
    

    // 문서 객체를 설정 합니다.
    const item = document.createElement('div');
    const checkbox = document.createElement('input');
    const text = document.createElement('span');
    const button = document.createElement('button');

    // 문서 객체를 식별할 키를 생성합니다.
    const key = keyCount;       
    keyCount += 1;              

    // item 객체를 조작하고 추가합니다.
    item.setAttribute('data-key' , key);
    item.appendChild(checkbox);
    item.appendChild(text);
    item.appendChild(button);
    todoList.appendChild(item);

    // checkbox 객체를 조작합니다.
    checkbox.type = 'checkbox';
    checkbox.addEventListener('change' , function(event){
        item.style.textDecoration
        = event.target.checked ? 'line-through' : '';
    });

    // text 객체를 조작합니다.
    text.textContent = input.value

    // button 객체를 조작합니다.
    button.textContent = '제거하기';
    button.addEventListener('click' , function(){
        removeTodo(key);
    });

    // 입력 양식의 내용을 비웁니다.
    input.value = '';

}
    
    const removeTodo = function(key){   // 식별 키로 문서 객체를 제거합니다.
        const item = document.querySelector(`[data-key="${key}"]`);
        todoList.removeChild(item);
    }
    // 이벤트 연결
    addButton.addEventListener('click' , addTodo);
    input.addEventListener('keyup' , function(event){
        // 입력 양식에서 Enter 키를 누르면 바로 addTodo() 함수를 호출합니다.
        const ENTER = 13;
        if(event.keyCode === ENTER){
            addTodo()
        }
    })

});

