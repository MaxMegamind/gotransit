var user_status = localStorage.getItem("user_status");
var trip_status = localStorage.getItem("trip_status");
var base_url = "https://go-transit.skytech.website/"; //"http://localhost/gotransit/";

	 function reload(){
		window.location.reload();
	}
    
    function router(_address){
        window.location.href =_address+".html";
    }

    function password_comfirm(value) { 

    }

    function logout(){
     localStorage.clear()
    window.location.href ="login.html";
    }



    
