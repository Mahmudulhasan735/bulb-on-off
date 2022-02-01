const bulb_div = document.querySelector('.bulb_on_off');
const bulb_div_h1 = document.querySelector('.bulb_on_off h1');
const image = document.querySelector('.image');
const main_switch = document.querySelector('.main_switch');
const main_switch2 = document.querySelector('.main_switch2');
const switch_wrapper = document.querySelector('.switch_wrapper');

main_switch2.addEventListener('click',()=>{
    bulb_div_h1.innerHTML = 'Bulb is on'
    bulb_div_h1.style.color = '#3bbd14'
    image.src = 'pic_bulbon.gif'
    main_switch.style.borderBottom = '3px solid rgb(221, 221, 221)'
    main_switch.style.borderTop = '6px solid rgb(110 110 110)'
    main_switch2.style.borderBottom = 'none'
    main_switch2.style.borderTop = 'none'
});


main_switch.addEventListener('click',()=>{
    bulb_div_h1.innerHTML = 'Bulb is off'
    bulb_div_h1.style.color = '#333'
    image.src = 'pic_bulboff.gif'
    main_switch.style.borderBottom = 'none'
    main_switch.style.borderTop = 'none'
    main_switch2.style.borderBottom = '5px solid #505050'
    main_switch.style.borderBottom = '3px solid rgb(221, 221, 221)'
});
