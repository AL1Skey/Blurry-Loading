const loadingText = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');

let loadText = 0;

let int = setInterval(blur,10);

function blur(){

    loadText++
    
    if(loadText > 99){
        clearInterval(int);
    }

    loadingText.textContent = `${loadText}%`;

    loadingText.style.opacity = `${test(0,100,1,0,loadText)}`;
    bg.style.filter = `blur(${test(0,100,30,0,loadText)}px`;
    /*
    if(loadText >90){
        document.body.style.overflow = 'visible';
        bg.style.transform = 'none';
    }
    */

}


function test(i_min,i_max,t_min,t_max,index){

    console.log(t_min-(t_min/i_max * index));

    return (t_min-(t_min/i_max * index));
}
