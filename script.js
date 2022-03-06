var container = document.createElement('div')
container.setAttribute('class', 'container p-4');
//creation of heading
var heading = document.createElement('div');
heading.setAttribute('class', 'box h2');
heading.innerHTML = "Nationalize API";
heading.style.textAlign = "center";
heading.style.color = "Blue";
heading.style.textDecorationLine = "Underline";

//creation of lable-Firstname
var d = document.createElement('div');
d.setAttribute('class', 'form-group row');
var lbl = document.createElement('label');
lbl.classList.add('label', 'col-3', 'col-form-label');
lbl.innerHTML = "FirstName";
lbl.style.textDecorationLine = "Underline";

//creation of text-box with placeholder
var input = document.createElement('input');
input.setAttribute('type', 'text');
input.id = 'fname';
input.placeholder = "Enter Firstname";
input.setAttribute('class', 'form-control col-6')
input.required = true;
d.append(lbl, input);

//creation of search button
var btn = document.createElement('button');
btn.innerHTML = 'Search';
btn.type = 'button'
btn.textAlign="center"
btn.setAttribute('class', 'btn btn-info text-center')
btn.onclick = search;

//appending all the criteria to main page document.
document.body.append(container);
container.append(heading, d, btn);

//calling button search function
function search() {
    var fn = document.getElementById('fname').value;
    
    if (!fn) {
        alert('Please Enter First Name');
    } else {
            getUserAsync();
        }
   //Use of async-await function with fetch
    async function getUserAsync() {
    try{
        let txt1 = document.createElement("div");
            txt1.style.textAlign="Center";
            txt1.style.fontWeight="Bold";
            txt1.style.textDecoration="Underline";
            txt1.style.color="Blue";
            txt1.innerHTML="Displaying the top two countries:";
            container.append(txt1);

        let response = await fetch(`https://api.nationalize.io?name=${fn}`);
        let res= await response.json();
        console.log(res);
        for(var i=0;i<2;i++){
            var row = document.createElement('div')
            row.setAttribute('class', 'row');
            
            var col = document.createElement('div')
            col.setAttribute('class', 'col-md-4');
            
            var boxpart = document.createElement('div')
            boxpart.setAttribute('class', 'box-part text-center');
                       
            let div = document.createElement("div");
            div.style.textAlign="Center";
            div.innerHTML=`Country:${res.country[i].country_id} '&nbsp &nbsp &nbsp &nbsp &nbsp' Probability:${res.country[i].probability}`;
            container.append(row);
            row.append(col);
            col.append(boxpart);
            boxpart.append(div);
          }

    }catch(err){
        console.error(err);
          // Handle errors here
        }
 
    }
}
    