	const login = document.getElementById("loginform");
	const show = document.getElementById("loginn");

	show.addEventListener("click", () =>{
		if(login.style.display === "none"){
			login.style.display = "block";
	}
	else{
			login.style.display = "none";

	}
	});

	const signin = document.getElementById("signinform");
	const signup = document.getElementById("signupform");

	const signinn = document.getElementById("signin");
	const signupp = document.getElementById("signup");

	const signinnn = document.getElementById("sign-in");
	const signuppp = document.getElementById("sign-up");


	signup.addEventListener("click", () =>{
		if(signupp.style.display === "block" && signinn.style.display === "block" ){
			signinn.style.display = "none";
			signinnn.style.display = "block";
			
		}else{
			signupp.style.display = "block";
			signinnn.style.display = "block";

		}
	});

	signin.addEventListener("click", ()=>{
		if(signupp.style.display === "block" && signinnn.style.display === "block"){
			signupp.style.display = "none";
			signinnn.style.display = "none";
		}
	});

	const closee = document.getElementById("close");
	const formm = document.getElementById("loginform");

	closee.addEventListener("click", ()=>{
		formm.style.display = "none";
	});

	const closee1 = document.getElementById("close1");
	const form1 = document.getElementById("loginform");

	closee1.addEventListener("click", ()=>{
		form1.style.display = "none";
	});



	const ckec = document.getElementById('check');
	const lon = document.getElementById("na");

	ckec.addEventListener("click", ()=>{
		if(ckec.checked === true){
			lon.style = "background-color:blue";
		}else{
			lon.style = "background-color:rgb(192,217,250)";

		}
	})


	function win(){
		window.open("file:///C:/Users/muhammad/Desktop/newPro/indexx.html");
	}


	function showdiv(){
		document.getElementById("loginform").style.display = "block";
	}
	setTimeout("showdiv()", 2000);



	const linlin = document.querySelector(".linek");
	const countShow = document.querySelector(".count");

	

	let	countHow = 0;
	let	positiveFeedBack = false;


	linlin.addEventListener("click", () =>{

		linlin.classList.toggle("liked");
		if(linlin.classList.contains("liked")){
			countHow++;
			countShow.innerHTML = countHow;
			// linlin.innerHTML = `<i class="ri-thumb-up-line"></i>`;

		}


	})

	
const img = document.querySelector("#image_input");
var uploaded_img = "";

img.addEventListener("change", function(){
	const reader = new FileReader();
	reader.addEventListener("load", ()=>{
		uploaded_img = reader.result;
	let dd =	document.querySelector("#display__img").style.backgroundImage = `url(${uploaded_img})`;
	

	});

	reader.readAsDataURL(this.files[0]);
})


const close = document.getElementById("closs");
const dds = document.getElementById("cc");
const dw = document.getElementById("dss");

close.addEventListener("click", function(){

	if(dds.style.display === "none"){
		dds.style.display = "block";
	}else{
		dds.style.display = "none";
	}
})




	
const closePage = document.getElementById("closs");
const ddsSd = document.getElementById("cc");
const dwD = document.getElementById("dss");


dwD.addEventListener("click", function(){
	if(ddsSd.style.display === "none"){
		ddsSd.style.display = "block";
	}else{
		ddsSd.style.display = "none";
	}
});
		



	
const inputText = document.querySelector(".title");
const acceptText = document.querySelector(".h5");


const inputDesc = document.querySelector(".desc");
const aceptDesc = document.querySelector(".ds");


const posst = document.querySelector(".closew");


const app = document.querySelector(".sw");
const append = document.querySelector(".cn");

const appends = document.querySelector(".ddf");





function closeDiv(i){
	
		const dviToClose = append.parentNode;
		if (dviToClose) {
			  dviToClose.style.display = "none";

		}
	
	
}



// clox.forEach(function(ccc){
// 	ccc.addEventListener("click", ()=>{
// 		append.remove();
// 	})
// });


posst.addEventListener("click", newShow)


 function newShow(){
 	

	const newDiv = document.createElement("div");
		  newDiv.classList.add("cn");
		  newDiv.innerHTML = append.innerHTML;




 	acceptText.innerHTML = inputText.value;
	aceptDesc.innerHTML = inputDesc.value;


	
	app.appendChild(newDiv)[0];

}


const form = document.getElementById('signup');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const formData = new FormData(form);
  const data = {};
  formData.forEach((value, key) => {
    data[key] = value;
  });

  sendDataToGoogleSheet(data);
});

function sendDataToGoogleSheet(data) {
  const scriptURL = 'https://script.google.com/macros/s/AKfycbx91Ci9-AUpzQB5sZkDeDX6EkNhOVvFJ-3QxkJPGDo43ycrw_2jTNJGRSQSCMHqkNnw/execL';
  const params = new URLSearchParams(data);
  fetch(scriptURL, {
    method: 'POST',
    mode: 'no-cors',
    body: params,
  })
  .then(response => {
    console.log('Data sent successfully!');
    form.reset();
  })
  .catch(error => console.error('Error sending data:', error));
}



const searc = document.querySelector(".sear");
const search = document.querySelector(".searchsec");

searc.addEventListener("click", ()=>{
	if (search.style.display === "none") {
		search.style.display = "flex";
	}else{
		search.style.display = "none";

	}
}) 