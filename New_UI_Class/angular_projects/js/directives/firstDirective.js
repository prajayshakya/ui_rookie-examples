angular.module("appName").directive("sampleHeader",function(){
    return{
        //E->element
        //A->attribute
        //M->comments
        //C->classes
      restrict:"EAC",
      template:"<h1>{{header}}</h1>",
       link:function($scope){
           $scope.header="Good Morning"
        }
    };
});