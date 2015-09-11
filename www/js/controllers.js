angular.module('starter.controllers', ["oc.lazyLoad",'ngRoute','ngSanitize'])



// .controller('mainViewController', function($scope,$ocLazyLoad) {

//      

//   })


.controller('MenuController', function($scope,$http,$location,alertmsg) {

    //window.history.forward();
  // function preventBack() { window.history.forward(1); }
  

    // window.onbeforeunload = function (e) {
    //         var e = e || window.event;
            
    //         if (e) {
    //             open(location, '_self').close();
    //         }

    //      };
         
        
    localStorage.setItem("splash", 0);
    $("#sidebar").removeClass("toggled");
    $("#menu-trigger").removeClass("open");
    $scope.useremail= localStorage.getItem("email");
    $scope.loggedIn=localStorage.getItem("loggedIn");
    $scope.userName= localStorage.getItem("userName");
    $scope.userId= localStorage.getItem("id");
   
        var businessId=1;
        

    //Menus from server and sync here.....
    $http.post('http://www.appnlogic.com/branboxAppAdmin/branboxAdminUi/ajaxMenu.php',{bussId: businessId}, {headers: {'Content-Type': 'application/x-www-form-urlencoded'} })
      .success(function (json) {
       
        var ajaxlength = json.rows.length;
       

         $scope.MenuData= json.rows;

          
          
        
         // console.log($scope.MenuData);
      }).error(function(){  
         // open(location, '_self').close(); 
         // alert("server Error");
       });



})
