var name = document.getElementById('bookmarkName');
var url = document.getElementById('bookmarkURL');
var table=document.getElementById('tableContent');
var namevalid = document.getElementById('namevalid');
var urlvalid = document.getElementById("urlvalid");
var productCont = [];
var productCont = JSON.parse(localStorage.getItem('alldata') )
console.log(productCont);
show();




function createproduct(){
    var product = {
        pname:bookmarkName.value,
        purl:bookmarkURL.value,
    }
    if( validname() && validurl()){

    productCont.push(product);

    var strarr=JSON.stringify(productCont);
    console.log(strarr)
    localStorage.setItem('alldata',JSON.stringify(productCont));

    console.log(productCont);
    show();
    }
}

function show(){

var index=productCont.length-1;
var str='';

for(var i=0;i<productCont.length;i++){
    str+= `<tr>
    <td>${productCont[i].pname}</td>
    <td>${productCont[i].purl}</td>
    <td><button class="btn btn-visit" data-index="0">
      <i class="fa-solid fa-eye pe-2"></i>Visit
    </button></td>
    <td><button onclick="del(${i});" class="btn btn-delete pe-2" data-index="0">
      <i class="fa-solid fa-trash-can"></i>
      Delete
    </button></td>
  </tr>`;
}
table.innerHTML=str;
}

function del (index){

    productCont.splice(index,1);
    show();
    localStorage.setItem('alldata',JSON.stringify(productCont))

    console.log(productCont);
}

function validname(){
    if( /^[A-Z]\w{5,15}$/.test(bookmarkName.value) ){
        bookmarkName.classList.add('is-valid');
        bookmarkName.classList.remove('is-invalid')
        namevalid.classList.add('d-none');
        return true;
    }
    else{
        bookmarkName.classList.add('is-invalid');
        bookmarkName.classList.remove('is-valid')
        namevalid.classList.remove('d-none');
        return false;
    }
}
namevalid.addEventListener('blur',validname);

function validurl(){
    if( /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/.test(bookmarkURL)){
        bookmarkURL.classList.add('is-valid');
        bookmarkURL.classList.remove('is-invalid');
        urlvalid.classList.add('d-none');
        return true;
    }
    else{
        bookmarkURL.classList.add('is-invalid');
        bookmarkURL.classList.remove('is-valid');
        urlvalid.classList.remove('d-none');
        return true;
    }
}
urlvalid.addEventListener('blur',validurl);