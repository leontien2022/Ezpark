// Send Request
statusCheck();
const offerSpaceBtn = document.querySelector(".offerSpaceBtn")

offerSpaceBtn.addEventListener('click', sendOfferPlace)

function sendOfferPlace(e){
    e.preventDefault();

    const offerData={
        "address": document.querySelector('input[name="parking_space_address"]').value,
        "addressName":document.querySelector('input[name="parking_space_name"]').value,
        "parking_space_number":document.querySelector('input[name="parking_space_number"]').value,
        "price": document.querySelector('input[name="offerPrice"]').value,
        "time": {
            "section-1-start": document.getElementById('section-1-start').value,
            "section-1-end": document.getElementById('section-1-end').value,
            "section-2-start": document.getElementById('section-2-start').value,
            "section-2-end": document.getElementById('section-2-end').value,
            "section-3-start": document.getElementById('section-3-start').value,
            "section-3-end": document.getElementById('section-3-end').value
        } 
}
    console.log(offerData)
    fetch('/api/offer',{
        method:'POST',
        body:JSON.stringify(offerData),
        headers: new Headers({
            "content-type":"application/json"
        })
    })
   
    .then(res => res.json())
    .then(function(data){
        console.log(data.data)
        if (data.data === "ok"){
            alert("登記完成")
            window.location.replace('/')
        }
        
    })





}