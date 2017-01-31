angular.module("appName").directive("personForm",function(){
    return{
        //E->element
        //A->attribute
        //M->comments
        //C->classes
      restrict:"EAC",
      controller:'personCtrl',
      templateUrl:"/views/personForm.html",
       link:function($scope){
           
        }
    };
});