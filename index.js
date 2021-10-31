document.getElementById('getOsInfo').addEventListener('click',function(){
    let systemInfo=window.navigator.platform;
    console.log(systemInfo)
    document.getElementById('osOutput').innerHTML=systemInfo;
});

document.getElementById('getGeoInfo').addEventListener('click',function(){
    if(window.navigator.geolocation){
        window.navigator.geolocation.getCurrentPosition(
            function(position){
                console.log(position);
                document.getElementById('latOutput').innerHTML=position.coords.latitude;
                document.getElementById('longOutput').innerHTML=position.coords.longitude;
                document.getElementById('accuOutput').innerHTML=position.coords.accuracy;
                document.getElementById('altiOutput').innerHTML=position.coords.altitude;
                if(position.coords.altitude===null){
                    document.getElementById('altiOutput').innerHTML='Data not found!😢';
                }else if(position.coords.latitude===null){
                    document.getElementById('latOutput').innerHTML='Data not found!😢';
                }else if(position.coords.longitude===null){
                    document.getElementById('longOutput').innerHTML='Data not found!😢';
                }else if(position.coords.accuracy===null){
                    document.getElementById('accuOutput').innerHTML='Data not found!😢';
                }
            }
        )
    } else{
        document.write('error!!😴.....')
    }

})