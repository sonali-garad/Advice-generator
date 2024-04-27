//Using FETCH to get data from server/..

// const request = fetch('https://api.adviceslip.com/advice');

let quotetext = document.querySelector('.inner-container');
let adviceId =document.querySelector('#advice');

//  console.log(request);

 document.addEventListener('DOMContentLoaded',display)
 function display()
 {
    const request = fetch('https://api.adviceslip.com/advice');

 request.then(Response =>
    {
        // let a=20;

        if (!Response.ok)
        {
            throw new error ('unable to fetch data');
        }
        // console.log(Response.json());
        // console.log(Response.json());
      
        return Response.json();
        //Returns promise 

        // data :- 
        // sliip:
        // {
        //     advice := " ..... "
        //     id : ".."
        // }
    }
) 
.then (data =>
{
    console.log(data)
    console.log(data.slip.advice);
    quotetext.innerText=`"${data.slip.advice}"`;
    adviceId.innerHTML = `ADVICE&nbsp;#${data.slip.id}`;

})
.catch(err =>
{
    console.log(err);
    //Catches the error if resonese is not ok 
}
)
 
}

let dice = document.querySelector('.dice');

// adding event listener on dice function to display next advice ..
dice.addEventListener('click', display);
























