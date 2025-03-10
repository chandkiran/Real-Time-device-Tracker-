const socket=io();

if(navigator.geolocation){
    navigator.geolocation.watchPosition((position)=>{
        const {latitude,longitude}=position.coords;
        socket.emit("send-location",{latitude,longitude})
    },(error)=>{
        console.error(error)
    },
    {
        enableHighAccurayc:true,
        timrout:5000,
        maximumAge: 0,  //catched data naline real time ma chai lina paryo
        
    }
)
}
const map=L.map("map").setView([0,0],16)
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{
    attribution:"Coderun"
}).addTo(map)

const markers={}
socket.on("receive-location",(data)=>{
    const{id,latitude,longitude}=data
    map.setView([latitude,longitude])
    if (markers[id]){
        markers[id].setLatLng([latitude,longitude])
    }
    else{
        markers[id]=L.marker([latitude,longitude]).addTo(map)
    }
});
socket.on("user-disconnected",(id)=>{
    if(markers[id]){
        map.removeLayer(markers[id]);
        delete markers[id]
    }
})