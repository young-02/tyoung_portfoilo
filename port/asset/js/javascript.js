//javascript 01 - 아날로그 시계
const secondHand = document.querySelector('.second-hand');
  const minsHand = document.querySelector('.min-hand');
  const hourHand = document.querySelector('.hour-hand');

  function setDate() {
    const now = new Date();

    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    const mins = now.getMinutes();
    const minsDegrees = ((mins / 60) * 360) + ((seconds/60)*6) + 90;
    minsHand.style.transform = `rotate(${minsDegrees}deg)`;

    const hour = now.getHours();
    const hourDegrees = ((hour / 12) * 360) + ((mins/60)*30) + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
  }

  setInterval(setDate, 1000);

  setDate();




  // checkbox
  const checkboxes = document.querySelectorAll('.inbox [type="checkbox"]');
  console.log(checkboxes);
  

  let lastChecked;

  function handleCheck(e){
    // check if they had the shft ket down
    // and check that they are cheking it
    
    let inBetween = false;
    if(e.shiftKey && this.checked){
      //go ahead and do what we plaese
      //loop over every single checkbox
      checkboxes.forEach(checkbox =>{
        console.log(checkbox);
        if(checkbox === this || checkbox === lastChecked){
          inBetween = !inBetween;
          console.log('Starting to check them inbetween');
        }
        if(inBetween){
          checkbox.checked = true;
        }
      });
    }

    lastChecked = this;
  }

  checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));

  //
  const inputs = document.querySelectorAll('.controls input');

  function handleUpdate() {
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
  }

  inputs.forEach(input => input.addEventListener('change', handleUpdate));
  inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));
  
  

  //item04 

  